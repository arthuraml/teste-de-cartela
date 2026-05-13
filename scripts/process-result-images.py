#!/usr/bin/env python3
"""
Processa as imagens de imagens-resultado/ → public/images/results/.

- Identifica cada arquivo pelo file_id (Drive ID) presente no nome
- Converte HEIC → JPG; reotimiza PNG → JPG
- Copia/renomeia para public/images/results/{slug}__{secao}.jpg
- Trata o reuso: 1TCRm7tMz8... vai em duas saídas para R6
- Reporta arquivos faltantes e ignorados
"""
from pillow_heif import register_heif_opener
from PIL import Image
import os
import re
import sys

register_heif_opener()

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = "/media/arthuraml/SSD2/projetos/larissa/imagens-resultado"
DST = os.path.join(REPO, "public/images/results")
os.makedirs(DST, exist_ok=True)

# file_id -> list of (slug, section) (lista permite reuso)
MAPPING = {
    # --- R1 clara-iluminada (8) ---
    "1IJPL4veGbND6AXrz_wm0aFjtgSwKMVOk": [("clara-iluminada", "capa")],
    "1ZwZbQtS35RVyFg1ZyMfn7XhHFskQO6VM": [("clara-iluminada", "sobre-voce")],
    "1R6R7zmdagDLcnHpKll2aPUISLzv4OeM3": [("clara-iluminada", "pratica-01")],
    "1ldlIjkKH4uuvA1dWeMlw9tJhVk-K4YfF": [("clara-iluminada", "pratica-02")],
    "1l0fYZ9PxF1FKDWD1fmTMNIj0Leu8nkms": [("clara-iluminada", "cores-favoraveis-paleta")],
    "1asqalz3pO2oi4M9PpcMvTTsMGfsJWLLA": [("clara-iluminada", "cores-a-evitar-paleta")],
    "1b2AFNUXGVFWJcMPbZjVceR2zuc4rC3f8": [("clara-iluminada", "cores-neutras-paleta")],
    "1GGJyRdcYcuDQ8jf_xBhqy81Smdx_7Uvt": [("clara-iluminada", "maquiagem-paleta")],

    # --- R2 clara-delicada (8) ---
    "15OPycoYTZSqa87NYKssKH7zoGGSC8Uup": [("clara-delicada", "capa")],
    "1Txj4l5O_tbpWM5AO1jw3dT181mSB-jJC": [("clara-delicada", "sobre-voce")],
    "1ZKrx_X2t6VDUaC8Tz8NfITQXr2-HwcQv": [("clara-delicada", "pratica-01")],
    "1QeZLmd7vpOpooxoDGobbioKKGAa5w_9E": [("clara-delicada", "pratica-02")],
    "12iwZ1EQtZEkqbMzarEgwUYXnkKhLXZKD": [("clara-delicada", "cores-favoraveis-paleta")],
    "1wJDbJl9ivTI1IQSzxGBFckNU010YdNzO": [("clara-delicada", "cores-a-evitar-paleta")],
    "1bEEeuv9OZxor20Umr0HSYRVHnGd8Xvx7": [("clara-delicada", "cores-neutras-paleta")],
    "1NG3zCebbjdLsYTQhigRs9ypL9j-xJd8W": [("clara-delicada", "maquiagem-paleta")],

    # --- R3 clara-equilibrada (8) ---
    "11KL8HFqH69KTNZYq2BpAzfGjyitHW7AD": [("clara-equilibrada", "capa")],
    "1p1XPRCNtctKXM77SY7uI7MWzYUAeasvD": [("clara-equilibrada", "sobre-voce")],
    "1p6oQEyoPZyL010Z8FGgEDRqdW6zuILsu": [("clara-equilibrada", "pratica-01")],
    "1B_6EH5Vj5gvu1X5Ow2jW_mFLSmi-slyi": [("clara-equilibrada", "pratica-02")],
    "1N9sw9WOFgCC3So--tNPqUEv04fXRFZzN": [("clara-equilibrada", "cores-favoraveis-paleta")],
    "1eSI7gOobI3J8IsXLuJds5rzPCxoalPBd": [("clara-equilibrada", "cores-a-evitar-paleta")],
    "1wFpYj8zMjjggA_-RJQS4eIntQ8crsba9": [("clara-equilibrada", "cores-neutras-paleta")],
    "1RPXAliIRULLKTyWN4PqFo1to9d5us9S9": [("clara-equilibrada", "maquiagem-paleta")],

    # --- R4 harmonia-natural (10) ---
    "1o7plg0JfbhsVxNtHCDMlbnTyjj0tus3k": [("harmonia-natural", "capa")],
    "13it9ykRAuDrqAX0DGLTZ699A__Tonkw2": [("harmonia-natural", "sobre-voce-01")],
    "1d7moTbcQI1FaZ_Shc28P0RIZIJDLom2R": [("harmonia-natural", "sobre-voce-02")],
    "1IWjmfYPPX2nO1TXVzH-x0gfDc0a3Cq7r": [("harmonia-natural", "cores-favoraveis-foto")],
    "1VT4UbiGil5kEez5BJKEagdUv6f8thMfU": [("harmonia-natural", "cores-a-evitar-foto")],
    "1ZGg0QF8gvtQgF6SdVcQLr2f2MnhISkrB": [("harmonia-natural", "pratica-01")],
    "19Vzof-MRd_HvsJidH03XwxfTfndxORJb": [("harmonia-natural", "pratica-02")],
    "12OJ-KpXlA0U7Dwf7h5ZbkOMOTXXy6z4e": [("harmonia-natural", "pratica-03")],
    "1NudPjTzTtcXtdbb2yCFCfsE4HlqA2E_Y": [("harmonia-natural", "maquiagem-foto")],
    "1SwMI54MbOQH_watxTCb4FtbR0kALHOVM": [("harmonia-natural", "cores-neutras-foto")],

    # --- R5 elegancia-suave (9) ---
    "1nQ7dFJ1VB69bDtqtbhdufHURmQ2c0rzu": [("elegancia-suave", "capa")],
    "13P1nTlXQMyfaMXhHgOKXiXF7DtrESWam": [("elegancia-suave", "seu-resultado")],
    "1tos-A0cvQ8tixlVa1NTsQ6E23iRK57js": [("elegancia-suave", "sobre-voce-01")],
    "1Fj_zCCqYGUz00Yo58zP0HcE0Fitb9xi5": [("elegancia-suave", "sobre-voce-02")],
    "1vPvOtVWG5qpmkW5et9z9aD12P9loAfsK": [("elegancia-suave", "sobre-voce-03")],
    "1YzOIAr2QWdR3ZqqA1TofIO9E4fdbPMua": [("elegancia-suave", "cores-favoraveis-foto")],
    "1NhZQfGgW5h5H-Pr9XDWkzjZSVm7decBI": [("elegancia-suave", "cores-a-evitar-foto")],
    "1k8IJGY554WcjkRW5lBkgvxNprAA17BCU": [("elegancia-suave", "maquiagem-foto")],
    "1adoB2bKwCR3Sza5giKxygVgWci2wYrWi": [("elegancia-suave", "cores-neutras-foto")],

    # --- R6 equilibrio-sofisticado (10 referências, 9 únicas — 1TCRm7... reusado) ---
    "1pz643Y50Y9-T6AwvHalaI29NIcA8-Pbf": [("equilibrio-sofisticado", "capa")],
    "1AUdWKE_J-RN6bMGq5gSWn96mRXvuusoT": [("equilibrio-sofisticado", "sobre-voce")],
    "1TCRm7tMz8HxtR276pro7ZFh6dULFJqsG": [
        ("equilibrio-sofisticado", "cores-favoraveis-foto"),
        ("equilibrio-sofisticado", "maquiagem-foto"),  # mesmo arquivo, salvo 2x
    ],
    "1sqUqnQ70asdSynfgvEVR6QaR94AYL46c": [("equilibrio-sofisticado", "cores-a-evitar-foto")],
    "1AjFHRMpoF1wLgQe8dpvLcrnvBL_ut_lJ": [("equilibrio-sofisticado", "cores-neutras-foto")],
    "1EyC50REwePADmKLsOBNV00X4GGxOyTwO": [("equilibrio-sofisticado", "pratica-01")],
    "1Xud-XZs8r2nbN2Wv9IwxfwI8JDbNHkXU": [("equilibrio-sofisticado", "pratica-02")],
    "1SbHuPbPv2461pwywDRIjfRO6btMabeS4": [("equilibrio-sofisticado", "pratica-03")],
    "13bD18W6Ut5TYxDuE3-0CIev4LfkMfRD8": [("equilibrio-sofisticado", "pratica-04")],

    # --- R7 profunda-radiante (8) ---
    "1szAw-UR4EtsWrAJXblUcQlsr2VTqXdz_": [("profunda-radiante", "capa")],
    "1XdkTfL0obtY4vtgzPqlL8gYSb9SFFqff": [("profunda-radiante", "sobre-voce")],
    "15T-RwVoqRACPMk1anqmqspJtqFMaRD-b": [("profunda-radiante", "cores-favoraveis-foto")],
    "1je8VdZbQ5vxy-Kr6sCXmNpKgKjEZwU8Q": [("profunda-radiante", "cores-a-evitar-foto")],
    "1ZmyGFHGswB81PnrqMBc3rcYrkRyaV5Bu": [("profunda-radiante", "cores-neutras-foto")],
    "1Wu1je70n6XBOLWB8aMSATPvOinQ1ichM": [("profunda-radiante", "pratica-01")],
    "1wKH8Es39hE-SS5C_8ylWl8ByEhj7Sf85": [("profunda-radiante", "pratica-02")],
    "1zZw1PO1Xj1a2dT_jYs3X1N_VDcP0l1VJ": [("profunda-radiante", "maquiagem-foto")],

    # --- R8 profunda-marcante (9) ---
    "1amG7Ra1yUc74uCP8Baz1__roPEn8Yh1J": [("profunda-marcante", "capa")],
    "1c-g-hFs3u8kmbc_uS4cCaDrm7LbQvSdA": [("profunda-marcante", "sobre-voce")],
    "1WmviKRQvQ6r2_JRXHiMuw_dxe0-CXE_f": [("profunda-marcante", "cores-favoraveis-foto")],
    "1wOjhKWiYMGU9q8yh5FIcYInbL8aYHtjl": [("profunda-marcante", "cores-a-evitar-foto")],
    "17piiO-m5FdVoHaaL_4-RJkWQLVSVgRFf": [("profunda-marcante", "cores-neutras-foto")],
    "1VtasnmbDDxxmRydKeYsUSTTDtK3ODCZ7": [("profunda-marcante", "pratica-01")],
    "1lrN-bN37pdEdMiQT0alJjiQVTW1x0lGA": [("profunda-marcante", "pratica-02")],
    "1lmC3DHq3A_SPRz3bk1RM-xXBHdLS5AxB": [("profunda-marcante", "pratica-03")],
    "1IJqPVlhGekz6AwRg63RW7vjvP3PNqO7U": [("profunda-marcante", "maquiagem-foto")],

    # --- R9 profunda-intensa (9) ---
    "1MITpUKPcJifBr92OkI9XNdT9SoAzH2kn": [("profunda-intensa", "capa")],
    "1rabIj6n7m7qQpJFIqPTo4mvLhziKZkBu": [("profunda-intensa", "sobre-voce-01")],
    "1r86SXArN9jzLGQEpZI-G9D23yLdS6jyV": [("profunda-intensa", "sobre-voce-02")],
    "1w18h9nEbIeLy0NDkA_FVfgU_27oIAxo3": [("profunda-intensa", "cores-favoraveis-foto")],
    "1bwPRWCax4d6DbDbX9JjCnmfKKVnqKM12": [("profunda-intensa", "cores-a-evitar-foto")],
    "1FrwM3l2TUzt7porkUhQ4JqbTRj3yuwa6": [("profunda-intensa", "cores-neutras-foto")],
    "1youF8ZvZzdXwMFMlGbmY0qSZebuB5wqw": [("profunda-intensa", "pratica-01")],
    "1mmXae9V1eVq4jli7bIXWnjoKq1XHQ152": [("profunda-intensa", "pratica-02")],
    "12Edaimpd0oS4GqgERV1qDoA3YBA1nDzl": [("profunda-intensa", "maquiagem-foto")],
}


def find_local_files_by_id():
    """Index local files by file_id present anywhere in the filename."""
    index = {}
    for fname in os.listdir(SRC):
        if fname.startswith("_"):
            continue
        for fid in MAPPING.keys():
            if fid in fname:
                index.setdefault(fid, []).append(fname)
                break
    return index


def main():
    local = find_local_files_by_id()

    converted = 0
    missing = []
    for fid, sections in MAPPING.items():
        if fid not in local:
            missing.append((fid, sections))
            continue
        # Pick the first matching local file
        src_name = local[fid][0]
        src_path = os.path.join(SRC, src_name)
        try:
            img = Image.open(src_path).convert("RGB")
        except Exception as e:
            print(f"❌ erro abrindo {src_name}: {e}")
            missing.append((fid, sections))
            continue
        for slug, section in sections:
            dst_name = f"{slug}__{section}.jpg"
            dst_path = os.path.join(DST, dst_name)
            img.save(dst_path, "JPEG", quality=88, optimize=True)
            converted += 1
            print(f"OK [{img.size[0]}x{img.size[1]}] {fid[:10]}... → {dst_name}")

    print(f"\n=== Convertidos: {converted} ===")
    if missing:
        print(f"\n❌ {len(missing)} faltando:")
        for fid, sections in missing:
            for slug, sec in sections:
                print(f"  {fid} → {slug}__{sec}")
        sys.exit(1)
    print("✓ Tudo pronto")


if __name__ == "__main__":
    main()
