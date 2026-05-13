# Plano de Implementação — Redesign das Páginas de Resultado

> Versão atualizada do produto **Teste de Cartela** com novo conteúdo, novas
> seções e fotos editoriais por resultado. Substitui completamente o conteúdo
> e o layout da página `/resultado/[tipo]`.

---

## 1. Contexto

A Larissa entregou:
- **Texto reescrito** dos 9 resultados em `Versão Ajustada - Resultados Teste de Cartela.docx`
- **75 imagens** organizadas em `/media/arthuraml/SSD2/projetos/larissa/imagens-resultado/`
  com convenção `{cartela}__{ordem}__{secao}-{sub}__{file_id}.{ext}`
- Arquivo de índice TSV (`_indice.tsv`) e LEIA-ME na pasta

A nova estrutura por resultado tem:
- **Foto capa** (hero full-width)
- Texto "Seu resultado"
- Foto + texto "Sobre você"
- Seção "Como isso aparece na prática" com 1-4 fotos de looks reais
- Foto da paleta + texto "Cores que mais te valorizam"
- Foto da paleta + texto "Cores que podem te desfavorecer"
- Foto da paleta + texto "Cores neutras (uso estratégico)"
- Foto da paleta + texto "Maquiagem ideal"
- (Para R4/R5/R6/R8/R9) Seção "Entenda seu contraste"
- "Como aplicar no seu dia a dia"
- "Insight importante"

A lógica do quiz (RESULT_MAP 3×3, 9 slugs) **não muda**.

---

## 2. ⚠️ Inconsistências no índice atual (CRÍTICO)

Comparando o `_indice.tsv` com o documento original, a Larissa cometeu duas
classes de erros:

### 2.1 Cartelas R1 e R2 misturadas
- **R2 (Fria-Clara / Clara Delicada) NÃO existe no índice**
- Larissa colocou 7 das 8 imagens da R2 dentro de `01_Quente-Clara` (ordens 6-12)
- A capa da R2 (`15OPyc...`) **não foi baixada**
- 3 paletas reais da R1 (cores favoráveis, a evitar, neutras) **não foram baixadas**

### 2.2 Rótulos de seção deslocados em todas as cartelas (R3-R9)
- Os file_ids estão corretos por cartela
- Mas as labels de seção estão **erradas** (off-by-one)
- Exemplo R3: o arquivo rotulado como `cores-favoraveis-paleta-01` é na verdade a 2ª foto de "Como isso aparece na prática"
- **Solução**: ignorar o rótulo da Larissa e usar a ordem do documento como fonte da verdade

### 2.3 ✅ 4 imagens faltantes — RESOLVIDO
A Larissa baixou as 4 imagens que estavam faltando e colocou em
`imagens-resultado/` com o `file_id` como nome. **Todas as 78 imagens
únicas agora estão disponíveis** (79 arquivos no total: 75 originais + 4
novas, com 1 arquivo reusado na R6).

| File ID | Arquivo local | Seção |
|---|---|---|
| `1l0fYZ9PxF1FKDWD1fmTMNIj0Leu8nkms` | `1l0fYZ9PxF1FKDWD1fmTMNIj0Leu8nkms.PNG` | R1 Cores favoráveis paleta |
| `1asqalz3pO2oi4M9PpcMvTTsMGfsJWLLA` | `1asqalz3pO2oi4M9PpcMvTTsMGfsJWLLA.PNG` | R1 Cores a evitar paleta |
| `1b2AFNUXGVFWJcMPbZjVceR2zuc4rC3f8` | `1b2AFNUXGVFWJcMPbZjVceR2zuc4rC3f8.PNG` | R1 Cores neutras paleta |
| `15OPycoYTZSqa87NYKssKH7zoGGSC8Uup` | `15OPycoYTZSqa87NYKssKH7zoGGSC8Uup .png` | R2 Capa (Clara Delicada) |

---

## 3. Mapeamento DEFINITIVO file_id → seção (por slug)

Esta é a fonte da verdade — vai dirigir o script de renomeação e o `data/results.ts`.

### 3.1 `clara-iluminada` (R1 — Quente Clara) — 8 imagens
| Ordem | Seção | File ID | Local? |
|---|---|---|---|
| 1 | capa | `1IJPL4veGbND6AXrz_wm0aFjtgSwKMVOk` | ✓ |
| 2 | sobre-voce | `1ZwZbQtS35RVyFg1ZyMfn7XhHFskQO6VM` | ✓ |
| 3 | pratica-01 | `1R6R7zmdagDLcnHpKll2aPUISLzv4OeM3` | ✓ |
| 4 | pratica-02 | `1ldlIjkKH4uuvA1dWeMlw9tJhVk-K4YfF` | ✓ |
| 5 | cores-favoraveis-paleta | `1l0fYZ9PxF1FKDWD1fmTMNIj0Leu8nkms` | ✓ |
| 6 | cores-a-evitar-paleta | `1asqalz3pO2oi4M9PpcMvTTsMGfsJWLLA` | ✓ |
| 7 | cores-neutras-paleta | `1b2AFNUXGVFWJcMPbZjVceR2zuc4rC3f8` | ✓ |
| 8 | maquiagem-paleta | `1GGJyRdcYcuDQ8jf_xBhqy81Smdx_7Uvt` | ✓ |

### 3.2 `clara-delicada` (R2 — Fria Clara) — 8 imagens
| Ordem | Seção | File ID | Local? |
|---|---|---|---|
| 1 | capa | `15OPycoYTZSqa87NYKssKH7zoGGSC8Uup` | ✓ |
| 2 | sobre-voce | `1Txj4l5O_tbpWM5AO1jw3dT181mSB-jJC` | ✓ |
| 3 | pratica-01 | `1ZKrx_X2t6VDUaC8Tz8NfITQXr2-HwcQv` | ✓ |
| 4 | pratica-02 | `1QeZLmd7vpOpooxoDGobbioKKGAa5w_9E` | ✓ |
| 5 | cores-favoraveis-paleta | `12iwZ1EQtZEkqbMzarEgwUYXnkKhLXZKD` | ✓ |
| 6 | cores-a-evitar-paleta | `1wJDbJl9ivTI1IQSzxGBFckNU010YdNzO` | ✓ |
| 7 | cores-neutras-paleta | `1bEEeuv9OZxor20Umr0HSYRVHnGd8Xvx7` | ✓ |
| 8 | maquiagem-paleta | `1NG3zCebbjdLsYTQhigRs9ypL9j-xJd8W` | ✓ |

### 3.3 `clara-equilibrada` (R3 — Neutra Clara) — 8 imagens
| Ordem | Seção | File ID | Local? |
|---|---|---|---|
| 1 | capa | `11KL8HFqH69KTNZYq2BpAzfGjyitHW7AD` | ✓ |
| 2 | sobre-voce | `1p1XPRCNtctKXM77SY7uI7MWzYUAeasvD` | ✓ |
| 3 | pratica-01 | `1p6oQEyoPZyL010Z8FGgEDRqdW6zuILsu` | ✓ |
| 4 | pratica-02 | `1B_6EH5Vj5gvu1X5Ow2jW_mFLSmi-slyi` | ✓ |
| 5 | cores-favoraveis-paleta | `1N9sw9WOFgCC3So--tNPqUEv04fXRFZzN` | ✓ |
| 6 | cores-a-evitar-paleta | `1eSI7gOobI3J8IsXLuJds5rzPCxoalPBd` | ✓ |
| 7 | cores-neutras-paleta | `1wFpYj8zMjjggA_-RJQS4eIntQ8crsba9` | ✓ |
| 8 | maquiagem-paleta | `1RPXAliIRULLKTyWN4PqFo1to9d5us9S9` | ✓ |

### 3.4 `harmonia-natural` (R4 — Quente Média) — 10 imagens
| Ordem | Seção | File ID | Local? |
|---|---|---|---|
| 1 | capa | `1o7plg0JfbhsVxNtHCDMlbnTyjj0tus3k` | ✓ |
| 2 | sobre-voce-01 | `13it9ykRAuDrqAX0DGLTZ699A__Tonkw2` | ✓ |
| 3 | sobre-voce-02 | `1d7moTbcQI1FaZ_Shc28P0RIZIJDLom2R` | ✓ |
| 4 | cores-favoraveis-foto | `1IWjmfYPPX2nO1TXVzH-x0gfDc0a3Cq7r` | ✓ |
| 5 | cores-a-evitar-foto | `1VT4UbiGil5kEez5BJKEagdUv6f8thMfU` | ✓ |
| 6 | pratica-01 | `1ZGg0QF8gvtQgF6SdVcQLr2f2MnhISkrB` | ✓ |
| 7 | pratica-02 | `19Vzof-MRd_HvsJidH03XwxfTfndxORJb` | ✓ |
| 8 | pratica-03 | `12OJ-KpXlA0U7Dwf7h5ZbkOMOTXXy6z4e` | ✓ |
| 9 | maquiagem-foto | `1NudPjTzTtcXtdbb2yCFCfsE4HlqA2E_Y` | ✓ |
| 10 | cores-neutras-foto | `1SwMI54MbOQH_watxTCb4FtbR0kALHOVM` | ✓ |

### 3.5 `elegancia-suave` (R5 — Fria Média) — 9 imagens
| Ordem | Seção | File ID | Local? |
|---|---|---|---|
| 1 | capa | `1nQ7dFJ1VB69bDtqtbhdufHURmQ2c0rzu` | ✓ |
| 2 | seu-resultado | `13P1nTlXQMyfaMXhHgOKXiXF7DtrESWam` | ✓ |
| 3 | sobre-voce-01 | `1tos-A0cvQ8tixlVa1NTsQ6E23iRK57js` | ✓ |
| 4 | sobre-voce-02 | `1Fj_zCCqYGUz00Yo58zP0HcE0Fitb9xi5` | ✓ |
| 5 | sobre-voce-03 | `1vPvOtVWG5qpmkW5et9z9aD12P9loAfsK` | ✓ |
| 6 | cores-favoraveis-foto | `1YzOIAr2QWdR3ZqqA1TofIO9E4fdbPMua` | ✓ |
| 7 | cores-a-evitar-foto | `1NhZQfGgW5h5H-Pr9XDWkzjZSVm7decBI` | ✓ |
| 8 | maquiagem-foto | `1k8IJGY554WcjkRW5lBkgvxNprAA17BCU` | ✓ |
| 9 | cores-neutras-foto | `1adoB2bKwCR3Sza5giKxygVgWci2wYrWi` | ✓ |

### 3.6 `equilibrio-sofisticado` (R6 — Neutra Média) — 10 referências, 9 únicas
| Ordem | Seção | File ID | Local? |
|---|---|---|---|
| 1 | capa | `1pz643Y50Y9-T6AwvHalaI29NIcA8-Pbf` | ✓ |
| 2 | sobre-voce | `1AUdWKE_J-RN6bMGq5gSWn96mRXvuusoT` | ✓ |
| 3 | cores-favoraveis-foto | `1TCRm7tMz8HxtR276pro7ZFh6dULFJqsG` | ✓ |
| 4 | cores-a-evitar-foto | `1sqUqnQ70asdSynfgvEVR6QaR94AYL46c` | ✓ |
| 5 | cores-neutras-foto | `1AjFHRMpoF1wLgQe8dpvLcrnvBL_ut_lJ` | ✓ |
| 6 | pratica-01 | `1EyC50REwePADmKLsOBNV00X4GGxOyTwO` | ✓ |
| 7 | pratica-02 | `1Xud-XZs8r2nbN2Wv9IwxfwI8JDbNHkXU` | ✓ |
| 8 | pratica-03 | `1SbHuPbPv2461pwywDRIjfRO6btMabeS4` | ✓ |
| 9 | pratica-04 | `13bD18W6Ut5TYxDuE3-0CIev4LfkMfRD8` | ✓ |
| 10 | maquiagem-foto (reusa #3) | `1TCRm7tMz8HxtR276pro7ZFh6dULFJqsG` | ✓ |

### 3.7 `profunda-radiante` (R7 — Quente Profunda) — 8 imagens
| Ordem | Seção | File ID | Local? |
|---|---|---|---|
| 1 | capa | `1szAw-UR4EtsWrAJXblUcQlsr2VTqXdz_` | ✓ |
| 2 | sobre-voce | `1XdkTfL0obtY4vtgzPqlL8gYSb9SFFqff` | ✓ |
| 3 | cores-favoraveis-foto | `15T-RwVoqRACPMk1anqmqspJtqFMaRD-b` | ✓ |
| 4 | cores-a-evitar-foto | `1je8VdZbQ5vxy-Kr6sCXmNpKgKjEZwU8Q` | ✓ |
| 5 | cores-neutras-foto | `1ZmyGFHGswB81PnrqMBc3rcYrkRyaV5Bu` | ✓ |
| 6 | pratica-01 | `1Wu1je70n6XBOLWB8aMSATPvOinQ1ichM` | ✓ |
| 7 | pratica-02 | `1wKH8Es39hE-SS5C_8ylWl8ByEhj7Sf85` | ✓ |
| 8 | maquiagem-foto | `1zZw1PO1Xj1a2dT_jYs3X1N_VDcP0l1VJ` | ✓ |

### 3.8 `profunda-marcante` (R8 — Fria Profunda) — 9 imagens
| Ordem | Seção | File ID | Local? |
|---|---|---|---|
| 1 | capa | `1amG7Ra1yUc74uCP8Baz1__roPEn8Yh1J` | ✓ |
| 2 | sobre-voce | `1c-g-hFs3u8kmbc_uS4cCaDrm7LbQvSdA` | ✓ |
| 3 | cores-favoraveis-foto | `1WmviKRQvQ6r2_JRXHiMuw_dxe0-CXE_f` | ✓ |
| 4 | cores-a-evitar-foto | `1wOjhKWiYMGU9q8yh5FIcYInbL8aYHtjl` | ✓ |
| 5 | cores-neutras-foto | `17piiO-m5FdVoHaaL_4-RJkWQLVSVgRFf` | ✓ |
| 6 | pratica-01 | `1VtasnmbDDxxmRydKeYsUSTTDtK3ODCZ7` | ✓ |
| 7 | pratica-02 | `1lrN-bN37pdEdMiQT0alJjiQVTW1x0lGA` | ✓ |
| 8 | pratica-03 | `1lmC3DHq3A_SPRz3bk1RM-xXBHdLS5AxB` | ✓ |
| 9 | maquiagem-foto | `1IJqPVlhGekz6AwRg63RW7vjvP3PNqO7U` | ✓ |

### 3.9 `profunda-intensa` (R9 — Neutra Profunda) — 9 imagens
| Ordem | Seção | File ID | Local? |
|---|---|---|---|
| 1 | capa | `1MITpUKPcJifBr92OkI9XNdT9SoAzH2kn` | ✓ |
| 2 | sobre-voce-01 | `1rabIj6n7m7qQpJFIqPTo4mvLhziKZkBu` | ✓ |
| 3 | sobre-voce-02 | `1r86SXArN9jzLGQEpZI-G9D23yLdS6jyV` | ✓ |
| 4 | cores-favoraveis-foto | `1w18h9nEbIeLy0NDkA_FVfgU_27oIAxo3` | ✓ |
| 5 | cores-a-evitar-foto | `1bwPRWCax4d6DbDbX9JjCnmfKKVnqKM12` | ✓ |
| 6 | cores-neutras-foto | `1FrwM3l2TUzt7porkUhQ4JqbTRj3yuwa6` | ✓ |
| 7 | pratica-01 | `1youF8ZvZzdXwMFMlGbmY0qSZebuB5wqw` | ✓ |
| 8 | pratica-02 | `1mmXae9V1eVq4jli7bIXWnjoKq1XHQ152` | ✓ |
| 9 | maquiagem-foto | `12Edaimpd0oS4GqgERV1qDoA3YBA1nDzl` | ✓ |

**Total**: 79 referências (78 únicas, com 1 reuso na R6) → quando R1+R2
estiverem completas, teremos 78 arquivos físicos em `public/images/results/`.

---

## 4. Decisões sobre as pendências de conteúdo

Com base na estrutura entregue pela Larissa, tomei estas decisões para
otimizar o resultado visual:

| # | Pendência | Decisão |
|---|---|---|
| **3** | Cores neutras nos R1, R2, R3 sem lista | **Renderizar só a paleta (imagem)** + texto introdutório curto. A imagem da paleta JÁ contém as cores; listar redundantemente seria poluir. |
| **4** | R6 reutiliza imagem em "cores-fav" e "maquiagem" | **Manter** o reuso (intencional ou não, funciona — a paleta favorável serve de paleta de maquiagem). |
| **5** | R6 "Como isso aparece na prática" tem 3 sub-blocos | **Renderizar como 3 cards distintos** com sub-headers: "No dia a dia" / "Para um visual mais elegante" / "Para ambientes sofisticados". Cada card com 1 foto + bullets. |
| **6** | R7, R8, R9 sem lista de cores neutras | **Mesma decisão do #3**: só a imagem + intro. |
| **7** | Legendas nas fotos "Como isso aparece na prática" | **Sem legenda**. As fotos são auto-explicativas. Mantém o visual clean. |

---

## 5. Convenção final de arquivos

Para simplificar, vou usar a convenção **`{slug}__{secao}.{ext}`** (sem ordem
global, sem file_id no nome). Mais limpo para usar no código:

```
public/images/results/
├── clara-iluminada__capa.jpg
├── clara-iluminada__sobre-voce.jpg
├── clara-iluminada__pratica-01.jpg
├── clara-iluminada__pratica-02.jpg
├── clara-iluminada__cores-favoraveis-paleta.jpg
├── clara-iluminada__cores-a-evitar-paleta.jpg
├── clara-iluminada__cores-neutras-paleta.jpg
├── clara-iluminada__maquiagem-paleta.jpg
├── clara-delicada__capa.jpg
├── clara-delicada__sobre-voce.jpg
... (78 arquivos no total)
```

Para R6 (que reusa imagem): só copiar o mesmo arquivo com 2 nomes diferentes
(`cores-favoraveis-foto.jpg` e `maquiagem-foto.jpg`) ou usar o mesmo path.
**Decisão**: salvar **2x** (mais simples, sem condicional no template).

---

## 6. Script de processamento (`scripts/process-result-images.py`)

Pseudocódigo do que o script faz:

```python
"""
Lê os 75 arquivos de imagens-resultado/, identifica cada um pelo file_id no
nome, converte HEIC→JPG quando necessário e copia para public/images/results/
com a convenção {slug}__{secao}.jpg.

Lê o mapeamento da seção 3 deste plano (ou de uma constante embutida).
Reporta arquivos faltantes.
"""

from pillow_heif import register_heif_opener
from PIL import Image
import os
import re

register_heif_opener()

# Mapping: file_id -> (slug, section)
MAPPING = {
    # R1 clara-iluminada
    "1IJPL4veGbND6AXrz_wm0aFjtgSwKMVOk": ("clara-iluminada", "capa"),
    "1ZwZbQtS35RVyFg1ZyMfn7XhHFskQO6VM": ("clara-iluminada", "sobre-voce"),
    "1R6R7zmdagDLcnHpKll2aPUISLzv4OeM3": ("clara-iluminada", "pratica-01"),
    "1ldlIjkKH4uuvA1dWeMlw9tJhVk-K4YfF": ("clara-iluminada", "pratica-02"),
    "1l0fYZ9PxF1FKDWD1fmTMNIj0Leu8nkms": ("clara-iluminada", "cores-favoraveis-paleta"),
    "1asqalz3pO2oi4M9PpcMvTTsMGfsJWLLA": ("clara-iluminada", "cores-a-evitar-paleta"),
    "1b2AFNUXGVFWJcMPbZjVceR2zuc4rC3f8": ("clara-iluminada", "cores-neutras-paleta"),
    "1GGJyRdcYcuDQ8jf_xBhqy81Smdx_7Uvt": ("clara-iluminada", "maquiagem-paleta"),
    # ... (ver tabelas seção 3 para os 78 mappings)
}

SRC = "/media/arthuraml/SSD2/projetos/larissa/imagens-resultado"
DST = "public/images/results"
os.makedirs(DST, exist_ok=True)

# 1. Index local files by file_id (extract from filename)
local = {}
for fname in os.listdir(SRC):
    if fname.startswith("_"):
        continue
    # File ID is at position before extension
    m = re.search(r"__([a-zA-Z0-9_-]+)\.(png|jpg|jpeg|heic)$", fname)
    if not m:
        continue
    file_id = m.group(1)
    local[file_id] = fname

# 2. For each expected mapping, find and convert
missing = []
for file_id, (slug, section) in MAPPING.items():
    if file_id not in local:
        missing.append((file_id, slug, section))
        continue
    src_path = os.path.join(SRC, local[file_id])
    dst_name = f"{slug}__{section}.jpg"
    dst_path = os.path.join(DST, dst_name)
    img = Image.open(src_path).convert("RGB")
    img.save(dst_path, "JPEG", quality=88, optimize=True)
    print(f"OK: {file_id[:10]}... → {dst_name}")

if missing:
    print(f"\n❌ {len(missing)} faltando:")
    for fid, slug, sec in missing:
        print(f"  {fid} → {slug}__{sec}")
```

---

## 7. Nova estrutura de dados (`data/results.ts`)

```ts
import type { ResultSlug } from "@/lib/quiz-logic";

export interface MaquiagemSection {
  pele?: string;
  base?: string;
  blush?: string;
  olhos?: string;
  batom?: string;
  iluminador?: string;
  contorno?: string;
  observacao?: string;
}

export interface ContrasteSection {
  intro: string;
  altoContrasteTitle: string;
  altoContrasteText: string;
  baixoContrasteTitle: string;
  baixoContrasteText: string;
  regraSimples: string;
}

export interface PraticaCard {
  title?: string;     // "No dia a dia", "Para visual mais elegante" (R6)
  image: string;
  bullets: string[];
}

export interface Result {
  slug: ResultSlug;
  emoji: string;
  title: string;
  subtitle: string;

  // Imagens (paths em /images/results/{slug}__{secao}.jpg)
  imagens: {
    capa: string;
    sobreVoce?: string[];           // 1-3 imagens
    seuResultadoExtra?: string;     // só R5
    cores: {
      favoraveis: string;           // foto da paleta ou foto-look
      aEvitar: string;
      neutras: string;
      maquiagem: string;
    };
    pratica?: PraticaCard[];        // pode ser vazio se não houver looks
  };

  // Texto
  seuResultado: string;
  sobreVoce: string[];
  comoPraticaIntro?: string;
  comoPraticaPattern?: string[];
  comoPraticaOutro?: string;
  coresFavoraveisIntro?: string;
  coresFavoraveis: string[];
  coresFavoraveisOutro?: string;
  coresDesfavoraveisIntro?: string;
  coresDesfavoraveis: string[];
  coresDesfavoraveisOutro?: string;
  coresNeutrasIntro?: string;
  coresNeutras?: string[];          // pode ser undefined (R1, R2, R3, R7-9)
  coresNeutrasOutro?: string;
  contraste?: ContrasteSection;     // só R4, R5, R6, R8, R9
  maquiagem?: MaquiagemSection;
  aplicacao: string[];
  insight: string;
}
```

---

## 8. Layout da nova página `/resultado/[tipo]/page.tsx`

Ordem fixa das seções:

1. **Hero**: `imagens.capa` full-width + emoji + `title` + `subtitle` (overlay escuro embaixo).
2. **Seu resultado**: card claro com `seuResultado` em destaque (Playfair italic).
3. (R5 only) `seuResultadoExtra` foto adicional decorativa.
4. **Sobre você**: grid responsivo de `imagens.sobreVoce` + parágrafos.
5. **Como isso aparece na prática** (se `pratica` existir):
   - Para R1, R2, R3, R4, R7, R8, R9: 1 bloco com fotos em grid + intro/pattern/outro.
   - Para R6: 3 cards distintos (com sub-titles) + 1 outro card de fechamento.
6. **Cores que mais te valorizam**: split row (foto da paleta | texto).
7. **Cores que podem te desfavorecer**: split row, fundo `bg-surface/30`.
8. **Cores neutras (uso estratégico)**: split row.
9. (R4, R5, R6, R8, R9) **Entenda seu contraste**: card escuro especial.
10. **Maquiagem ideal**: split row (foto | grid 2 colunas dos campos).
11. **Como aplicar no seu dia a dia**: bullets com checks dourados.
12. **Insight importante**: card bordô grande com texto italic dourado.
13. **EmailResultForm** (mantém).
14. CTA "Refazer" (mantém).

### Componentes novos (em `components/result/`)
- `<ResultHero>` — capa full-width com overlay
- `<ImageTextRow>` — split row responsivo
- `<ImageGrid>` — grid de N fotos
- `<PraticaCard>` — card único com imagem + bullets (uso para R6 sub-blocos)
- `<ContrasteCard>` — card escuro especial
- `<MaquiagemCard>` — grid 2 colunas com label/valor

---

## 9. Implementação em fases

### Fase 1 — ✅ Larissa: 4 imagens faltantes baixadas
Concluído. As 4 imagens estão em `imagens-resultado/` nomeadas com o file_id.

### Fase 2 — Dev: script de processamento de imagens
- [ ] Criar `scripts/process-result-images.py` com o mapping da §3
- [ ] Rodar o script — gera `public/images/results/*.jpg` (78 arquivos)
- [ ] Validação: `ls public/images/results/ | wc -l` deve dar **78**

### Fase 3 — Dev: nova `data/results.ts`
- [ ] Reescrever interface (§7)
- [ ] Preencher os 9 resultados com texto do `.docx` + paths das imagens
- [ ] Extrair texto para uma função pura (testável)

### Fase 4 — Dev: novos componentes (`components/result/*`)
- [ ] 6 componentes (§8)
- [ ] Mobile-first, `next/image` com `sizes` apropriado

### Fase 5 — Dev: nova `app/resultado/[tipo]/page.tsx`
- [ ] Reescrever consumindo nova interface
- [ ] 13 seções na ordem definida
- [ ] Manter `generateStaticParams()` (SSG)
- [ ] Manter `<EmailResultForm>` no final

### Fase 6 — QA
- [ ] `npm run build` sem erros
- [ ] Smoke test em todos os 9 slugs
- [ ] Mobile (375px) + desktop (1920px)
- [ ] Lighthouse > 80

### Fase 7 — Deploy
- [ ] Commit + push + deploy Vercel
- [ ] Verificar produção

---

## 10. Conteúdo dos 9 resultados (texto integral)

> Texto fiel ao `Versão Ajustada - Resultados Teste de Cartela.docx`,
> organizado em campos da nova interface `Result`.

### R1 — Clara Iluminada (Quente Clara)

**seuResultado**: "Sua cartela revela uma beleza leve, luminosa e naturalmente aquecida. Você é valorizada por cores claras com fundo quente — aquelas que trazem um aspecto mais saudável, iluminado e suave para o seu rosto."

**sobreVoce**:
- "A sua aparência não pede peso, nem contraste excessivo. Ela pede leveza."
- "Quando você usa cores muito escuras ou frias, seu rosto pode perder vitalidade — como se a cor 'apagasse' o seu brilho natural."
- "Por outro lado, quando você usa tons claros e quentes, algo muda imediatamente: 👉 sua pele parece mais viva 👉 seu rosto mais descansado 👉 sua beleza aparece com mais naturalidade"
- "Você não precisa de intensidade para se destacar — você precisa de harmonia."

**comoPratica**:
- intro: "Perceba como os looks acima seguem um padrão:"
- pattern: ["cores claras e quentes", "baixo contraste", "aparência leve e sofisticada", "nada pesa — tudo ilumina"]
- outro: "Esse é o efeito que você deve buscar."

**coresFavoraveis** (intro: "Prefira tons claros com fundo quente:" / outro: "Essas cores refletem melhor na sua pele e criam uma aparência mais leve e iluminada."):
bege quente, pêssego, coral claro, dourado suave, verde oliva claro, amarelo suave, caramelo claro

**coresDesfavoraveis** (intro: "Evite, principalmente próximo ao rosto:" / outro: "Essas cores tendem a endurecer sua expressão ou tirar sua leveza natural."):
preto, cinza escuro, branco muito frio, azul muito fechado, cores muito intensas ou pesadas

**coresNeutrasIntro**: "Essas cores não prejudicam, mas também não iluminam. Use como base de look — e combine com cores mais favoráveis perto do rosto."

**maquiagem**:
- pele: "leve, luminosa (evite matte pesado)"
- blush: "pêssego, coral claro, rosado quente suave"
- olhos: "bege quente, dourado suave, marrom claro"
- batom: "nude quente, pêssego, coral"
- iluminador: "dourado suave ou champagne"
- contorno: "leve e quente"
- observacao: "Sua maquiagem deve iluminar — nunca pesar."

**aplicacao**:
- "Prefira looks com pouco contraste"
- "Evite combinações muito fortes (ex: preto + branco)"
- "Use tons claros próximos ao rosto"
- "Dê preferência a acessórios dourados"
- "Priorize leveza em tudo (roupa, maquiagem, cabelo)"

**insight**: "A sua beleza não precisa ser 'marcante' para ser percebida. 👉 Ela aparece quando você respeita a sua leveza."

---

### R2 — Clara Delicada (Fria Clara)

**seuResultado**: "Sua cartela revela uma beleza leve, suave e com fundo frio. Você é valorizada por cores claras e frias, que trazem frescor, delicadeza e uma aparência mais refinada ao seu rosto."

**sobreVoce**:
- "A sua beleza é naturalmente mais sutil."
- "Quando você usa cores muito fortes, quentes ou escuras, é comum que: 👉 seu rosto perca destaque 👉 a cor chame mais atenção do que você 👉 sua expressão pareça mais pesada"
- "Mas quando você usa tons claros e frios: 👉 sua pele parece mais uniforme 👉 seu rosto fica mais leve 👉 sua aparência transmite elegância natural"
- "Você não precisa de intensidade — você precisa de suavidade e frescor."

**comoPratica**:
- intro: "Perceba o padrão:"
- pattern: ["cores claras e frias", "baixa intensidade", "contraste suave", "aparência leve e refinada"]
- outro: "Nada é chamativo demais — tudo é delicado e harmônico."

**coresFavoraveis** (intro: "Prefira tons claros e frios:" / outro: "Essas cores criam harmonia com sua pele e deixam sua aparência mais leve, fresca e elegante."):
rosa claro, azul bebê, lavanda, lilás, cinza claro, branco suave, verde menta

**coresDesfavoraveis** (intro: "Evite principalmente:" / outro: "Essas cores podem pesar, endurecer sua expressão e tirar a delicadeza da sua beleza."):
tons quentes (laranja, amarelo forte), cores muito escuras, preto intenso, cores vibrantes

**coresNeutrasIntro**: "Essas cores não prejudicam, mas também não valorizam ao máximo. Use como base do look — e combine com cores frias e claras perto do rosto."

**maquiagem**:
- pele: "leve, natural, com fundo rosado ou neutro frio"
- blush: "rosa claro, rosé frio, malva suave"
- olhos: "tons frios e suaves (acinzentados, rosados, lilás)"
- batom: "nude rosado, rosa claro, malva"
- iluminador: "perolado (evite dourado)"
- contorno: "leve, sem aquecer demais"
- observacao: "Sua maquiagem deve trazer frescor — nunca pesar."

**aplicacao**:
- "Prefira looks claros e frios"
- "Evite contraste alto"
- "Use cores suaves próximas ao rosto"
- "Prefira prata ou metais frios"
- "Evite excesso de informação visual"
- "Quanto mais leve e suave, melhor."

**insight**: "A sua beleza não está no impacto. 👉 Ela está na delicadeza."

---

### R3 — Clara Equilibrada (Neutra Clara)

**seuResultado**: "Sua cartela revela uma beleza leve, clara e equilibrada. Você não puxa fortemente nem para o quente, nem para o frio — o que te dá mais flexibilidade, mas ainda exige leveza nas escolhas."

**sobreVoce**:
- "Você tem uma característica muito interessante: 👉 você se adapta melhor do que a maioria das pessoas"
- "Mas isso não significa que tudo funciona."
- "O que realmente te valoriza são cores claras e suaves, independentemente de serem levemente quentes ou frias."
- "Quando você exagera na intensidade ou no peso das cores: 👉 sua aparência perde leveza 👉 seu rosto pode parecer mais apagado"
- "Mas quando você respeita sua suavidade: 👉 sua beleza aparece de forma natural 👉 sua imagem fica mais harmônica"

**comoPratica**:
- intro: "Perceba o padrão:"
- pattern: ["cores claras e suaves", "equilíbrio entre quente e frio", "baixo contraste", "aparência leve e natural"]
- outro: "Nada pesa ou domina — tudo se equilibra."

**coresFavoraveis** (intro: "Prefira tons claros e equilibrados:" / outro: "Essas cores mantêm a harmonia da sua pele e valorizam sua leveza natural."):
bege claro, rosé, azul suave, cinza claro, off-white, verde suave, nude claro

**coresDesfavoraveis** (intro: "Evite principalmente:" / outro: "Esses elementos quebram o equilíbrio da sua beleza e podem endurecer sua imagem."):
cores muito escuras, tons extremamente vibrantes, contrastes muito altos

**coresNeutrasIntro**: "Essas cores funcionam bem para você — especialmente como base. Mas o segredo está em manter a leveza e não pesar nas combinações."

**maquiagem**:
- pele: "leve e natural (nem muito quente, nem muito rosada)"
- blush: "rosé suave, pêssego leve"
- olhos: "tons neutros claros (bege, taupe, rosado suave)"
- batom: "nude, rosé, tons equilibrados"
- iluminador: "suave (sem dourado intenso ou prata forte)"
- contorno: "leve e neutro"
- observacao: "O objetivo é manter equilíbrio — sem puxar demais para nenhum lado."

**aplicacao**:
- "mantenha combinações leves"
- "evite extremos (muito claro ou muito escuro juntos)"
- "prefira tons neutros claros"
- "misture quente e frio com equilíbrio"
- "evite excesso de contraste"

**insight**: "Você não precisa escolher entre quente ou frio. 👉 Você precisa manter o equilíbrio."

---

### R4 — Harmonia Natural (Quente Média)

**seuResultado**: "Sua cartela revela uma beleza equilibrada, quente e naturalmente sofisticada. Você não precisa de extremos para se destacar. 👉 O que realmente valoriza você são cores médias com fundo quente, que acompanham a sua coloração de forma fluida e coerente. Sua beleza não chama atenção pelo excesso. Ela chama atenção pela harmonia."

**sobreVoce**:
- "Existe um padrão muito claro na sua imagem — mesmo que você nunca tenha percebido conscientemente: 👉 quando você exagera, algo 'sai do lugar' 👉 quando você equilibra, tudo funciona"
- "Provavelmente você já notou que: – cores muito claras → te deixam mais apagada – cores muito escuras → pesam e endurecem sua imagem – cores frias → criam um contraste estranho com a sua pele"
- "Mas quando você usa tons médios e quentes: 👉 seu rosto ganha definição 👉 sua pele parece mais uniforme 👉 sua imagem transmite elegância com naturalidade"
- "Você não precisa chamar atenção pelas cores. 👉 Você se destaca quando tudo está na medida certa."

**contraste**:
- intro: "Esse é um ponto essencial — e quase ninguém te explica isso direito. Contraste é a diferença entre as cores naturais do seu rosto. (por exemplo: pele, cabelo, olhos, sobrancelha)"
- altoContrasteTitle: "Se você tem contraste mais alto:"
- altoContrasteText: "👉 pode usar cores um pouco mais intensas dentro da sua cartela (ex: terracota mais fechado, verde oliva mais profundo, vermelho telha mais marcante)"
- baixoContrasteTitle: "Se você tem contraste mais baixo:"
- baixoContrasteText: "👉 fica melhor com cores mais suaves e equilibradas (ex: rosé queimado mais claro, bege quente, verde oliva mais leve)"
- regraSimples: "👉 Regra simples: quanto maior o seu contraste, mais intensidade você sustenta. Quanto menor o contraste, mais suavidade te valoriza."

**comoPratica**:
- intro: "No seu dia a dia, isso se traduz em:"
- pattern: ["looks com contraste médio", "combinações em tons terrosos", "cores quentes próximas ao rosto", "tecidos com aparência natural e elegante"]
- outro: "Acessórios: 👉 dourado funciona melhor que prata (porque acompanha o calor da sua pele)"

**coresFavoraveis** (intro: "Prefira tons médios e quentes, como:" / outro: "👉 Essas cores acompanham sua profundidade natural e criam uma imagem sofisticada sem esforço."):
terracota, vermelho telha, rosé queimado, dourado ocre, verde oliva, verde quente, marrom cacau

**coresDesfavoraveis** (intro: "Evite principalmente perto do rosto:" / outro: "👉 Essas cores quebram o calor natural da sua pele 👉 e criam um contraste que não conversa com você"):
preto muito intenso, branco frio (branco óptico), azul muito frio/azulado, rosa frio (puxado pro pink), roxo frio, cinzas muito frios

**coresNeutras** (intro: "Essas cores não destacam nem prejudicam — 👉 elas mantêm a harmonia:" / outro: "👉 Perfeitas para base de looks elegantes e versáteis."):
bege médio, taupe, cinza neutro médio, azul suavizado, verde médio neutro, rosa antigo, vinho suave

**maquiagem**:
- base: "base com subtom quente ou neutro quente"
- blush: "blush pêssego, coral ou terracota"
- olhos: "sombras douradas, cobre, bronze e oliva"
- batom: "batons em tons quentes (nude caramelo, coral, terracota, vermelho quente)"
- observacao: "👉 Evite tons frios ou acinzentados. Eles tiram o viço natural da sua pele."

**aplicacao**:
- "Prefira looks com contraste médio"
- "Combinações em tons terrosos"
- "Cores quentes próximas ao rosto"
- "Tecidos com aparência natural e elegante"
- "Acessórios dourados ao invés de prata"

**insight**: "A sua beleza não depende de impacto. 👉 Ela aparece quando existe coerência. Quando você respeita isso: – sua imagem transmite elegância natural – sua presença parece mais segura – e tudo em você parece bem resolvido sem esforço"

---

### R5 — Elegância Suave (Fria Média)

**seuResultado**: "Sua cartela revela uma beleza equilibrada com fundo frio. Você é valorizada por cores médias e frias, que trazem sofisticação, elegância e uma presença naturalmente refinada ao seu rosto."

**sobreVoce**:
- "Existe algo na sua aparência que é naturalmente elegante. Mas essa elegância se perde quando há exagero."
- "Você pode já ter percebido que: cores muito fortes parecem 'demais', tons muito claros não te destacam, cores quentes não harmonizam com facilidade"
- "Mas quando você usa tons médios e frios: 👉 seu rosto fica mais definido 👉 sua imagem ganha sofisticação 👉 tudo parece mais coerente"
- "Você não precisa de intensidade. 👉 Você precisa de harmonia."

**coresFavoraveis** (intro: "Prefira tons médios e frios, como:" / outro: "Essas cores trazem profundidade na medida certa — sem pesar e sem apagar."):
azul acinzentado, vinho frio, cinza médio, rosa frio, verde frio, roxo ameixa, azul petróleo

**coresDesfavoraveis** (intro: "Evite principalmente:" / outro: "Essas cores quebram a suavidade natural da sua imagem e geram desarmonia."):
tons quentes (laranja, amarelo, coral), cores muito vibrantes, tons amarelados, contrastes muito fortes

**contraste**:
- intro: "Aqui está um ponto que muda completamente o resultado final: 👉 o seu contraste natural importa tanto quanto sua cartela"
- altoContrasteTitle: "Se você tem ALTO contraste (ex: pele clara + cabelo escuro)"
- altoContrasteText: "Você pode — e deve — usar tons mais profundos da sua cartela e cores mais intensas dentro do frio. Exemplos: 👉 vinho mais fechado 👉 verde petróleo 👉 azul mais escuro. Isso acontece porque o seu próprio contraste já sustenta mais intensidade."
- baixoContrasteTitle: "Se você tem BAIXO ou MÉDIO contraste (ex: pele morena + cabelo castanho claro)"
- baixoContrasteText: "Você vai ficar melhor com tons mais suaves da cartela e cores mais claras e equilibradas. Exemplos: 👉 rosa frio suave 👉 azul acinzentado claro 👉 cinza médio. 👉 Aqui, suavidade gera mais harmonia do que intensidade."
- regraSimples: "💡 Regra simples: quanto maior seu contraste → mais profundidade você sustenta. Quanto menor seu contraste → mais suavidade te valoriza."

**aplicacao**:
- "Prefira looks com contraste médio"
- "Evite preto + branco muito marcado"
- "Combine tons frios entre si"
- "Use prata ou metais frios"
- "Aposte em tecidos com caimento suave (reforça sua elegância natural)"

**maquiagem**:
- base: "neutra a fria, acabamento natural"
- blush: "rosa frio, malva"
- olhos: "taupe, cinza, marrom frio, rosé"
- batom: "nude rosado, rosa queimado, vinho suave"
- observacao: "👉 O objetivo não é pesar — é refinar."

**coresNeutrasIntro**: "Essas cores não favorecem nem desfavorecem — 👉 mantêm equilíbrio e funcionam como base do seu guarda-roupa."

**insight**: "A sua beleza não aparece quando você exagera. 👉 Ela aparece quando tudo parece naturalmente alinhado. A sua elegância está na suavidade, no equilíbrio e na coerência."

---

### R6 — Equilíbrio Sofisticado (Neutra Média)

**seuResultado**: "Sua cartela revela uma beleza equilibrada e versátil. Isso significa que você não puxa fortemente nem para o quente, nem para o frio — e isso te dá mais liberdade do que a maioria das pessoas. Mas atenção: 👉 liberdade não significa que tudo funciona igual. O que realmente valoriza você são os tons médios e equilibrados, que mantêm a harmonia da sua imagem."

**sobreVoce**:
- "Existe um padrão muito claro na sua beleza — mesmo que você ainda não tenha percebido totalmente."
- "Você provavelmente já sentiu que: 👉 muitas cores ficam 'ok' em você… 👉 mas poucas realmente te deixam mais bonita."
- "Isso acontece porque sua beleza não depende de extremos."
- "Quando você exagera: em cores muito claras → você perde presença; em cores muito escuras → sua imagem pesa; em cores muito vibrantes → a cor aparece mais que você"
- "Mas quando você acerta: 👉 tudo se encaixa 👉 seu rosto parece mais harmônico 👉 sua imagem fica naturalmente sofisticada"
- "Você não precisa escolher entre quente ou frio. 👉 Você precisa manter o equilíbrio."

**coresFavoraveis** (intro: "Prefira tons médios, neutros e levemente equilibrados:" / outro: "Essas cores funcionam porque: ✔ não pesam ✔ não apagam ✔ não brigam com sua pele. Elas simplesmente harmonizam."):
malva médio, rosa queimado neutro, vinho suave, verde acinzentado, azul petróleo equilibrado, cinza médio, taupe (marrom acinzentado)

**coresDesfavoraveis** (intro: "Evite principalmente:" / outro: "Essas cores quebram o seu equilíbrio natural e fazem sua imagem perder sofisticação."):
cores muito vibrantes (ex: pink, azul royal, laranja vivo), tons muito quentes (amarelados ou alaranjados demais), extremos muito claros ou muito escuros

**coresNeutras** (intro: "Essas cores não valorizam nem prejudicam — são seguras:" / outro: "Use quando quiser discrição ou um visual mais neutro."):
roxo profundo neutro, azul marinho, verde pinho, vinho intenso, terracota, branco, amarelo manteiga

**comoPratica** (R6 tem 4 sub-cards conforme decisão #5):

**Card 1 — "No dia a dia"** (imagem `pratica-01`):
- "prefira combinações equilibradas"
- "evite contraste muito alto"
- "misture tons com suavidade"

**Card 2 — "Para um visual mais elegante"** (imagem `pratica-02`):
- "aposte em looks monocromáticos ou próximos"
- "escolha tecidos mais estruturados"
- "mantenha harmonia entre as peças"

**Card 3 — "Para ambientes sofisticados"** (imagem `pratica-03`):
- "use contraste moderado"
- "mantenha cores neutras como base"
- "aposte em elegância silenciosa"

**Card 4 — "Misturando neutros e cor"** (imagem `pratica-04`):
- "Misturar neutros com cor funciona muito bem em você — desde que o equilíbrio seja mantido."

**maquiagem**:
- base: "base natural e luminosa"
- blush: "blush rosado ou pêssego neutro"
- olhos: "sombras neutras e sofisticadas"
- batom: "batons equilibrados (nem muito vibrantes, nem apagados)"
- observacao: "👉 A ideia não é pesar — é harmonizar."

**contraste**:
- intro: "Isso aqui muda completamente o resultado final — e quase ninguém explica. 👉 O que é contraste? É a diferença entre as cores naturais do seu rosto: pele, cabelo, olhos."
- altoContrasteTitle: "🔹 CONTRASTE ALTO (exemplo fácil): pele clara + cabelo escuro"
- altoContrasteText: "👉 Nesse caso: Você aguenta mais intensidade. ✔ pode usar tons mais profundos da sua cartela ✔ vinho, azul petróleo, verde mais fechado funcionam muito bem. 👉 porque você já tem contraste natural."
- baixoContrasteTitle: "🔹 CONTRASTE BAIXO (exemplo fácil): pele morena + cabelo castanho claro"
- baixoContrasteText: "👉 Nesse caso: Você fica melhor com suavidade. ✔ prefira tons médios e mais claros da cartela ✔ evite os mais escuros. 👉 porque contraste demais pesa em você."
- regraSimples: "✔ Resumindo: muito contraste no rosto → pode usar cores mais fortes. Pouco contraste no rosto → use cores mais suaves."

**aplicacao** (resumo):
- "Combinações equilibradas"
- "Sem contraste muito alto"
- "Mistura suave de quente e frio"

**insight**: "Sua maior força não está na intensidade. 👉 Está no equilíbrio. Quando você tenta chamar atenção com excesso, perde sofisticação. Quando você respeita sua harmonia, sua beleza aparece naturalmente."

---

### R7 — Profunda Radiante (Quente Profunda)

**seuResultado**: "Sua cartela revela uma beleza de presença marcante, calor e profundidade natural. Isso significa que a sua imagem é valorizada quando existe densidade visual — ou seja, quando as cores acompanham a intensidade natural da sua pele, cabelo e olhos. Você não é favorecida por leveza ou suavidade. 👉 O que realmente te valoriza são cores quentes, profundas e encorpadas, que sustentam a sua presença com elegância."

**sobreVoce**:
- "Existe uma força na sua aparência que não depende de esforço — ela já está ali."
- "Mas ela só aparece completamente quando as cores que você usa têm estrutura suficiente para acompanhar essa intensidade."
- "Você provavelmente já percebeu que: – cores claras demais deixam sua imagem apagada – tons suaves parecem 'fracos' em você – looks leves demais não traduzem quem você é"
- "Por outro lado, quando você usa cores mais profundas: 👉 seu rosto ganha definição 👉 sua pele parece mais uniforme e iluminada 👉 sua imagem transmite mais segurança e sofisticação"
- "Isso acontece porque a sua beleza não é construída pela delicadeza — 👉 ela é construída pela presença."

**coresFavoraveis** (intro: "Prefira tons profundos com fundo quente, como:" / outro: "👉 Essas cores acompanham a sua profundidade natural e criam uma imagem forte, elegante e coerente."):
terracota profundo, vermelho tomate, laranja queimado, dourado envelhecido, verde oliva escuro, verde musgo quente, marrom chocolate

**coresDesfavoraveis** (intro: "Evite principalmente:" / outro: "👉 Essas cores reduzem a intensidade da sua imagem e fazem com que sua presença visual perca força."):
tons muito claros, cores frias e azuladas, tons pastéis, cores acinzentadas suaves

**coresNeutrasIntro**: "Essas cores não valorizam nem prejudicam — elas mantêm equilíbrio. Use quando quiser: – discrição – neutralidade – composições mais básicas. Mas atenção: 👉 em excesso, elas podem deixar sua imagem sem expressão, porque não acompanham totalmente sua profundidade natural."

**comoPratica**:
- intro: "No seu dia a dia, isso se traduz em:"
- pattern: ["looks com mais peso visual", "cores profundas próximas ao rosto", "combinações com cores intensas e quentes", "tecidos que trazem estrutura (não muito leves ou apagados)"]
- outro: "Acessórios: 👉 dourado, ouro envelhecido e tons quentes funcionam melhor que prata fria"

**maquiagem**:
- base: "base com fundo quente e acabamento luminoso"
- blush: "tons de terracota, coral queimado ou tijolo"
- olhos: "marrom, cobre, dourado, vinho e verde escuro"
- batom: "intensos: terracota, vermelho quente, vinho, marrom"
- observacao: "👉 Evite tons claros ou acinzentados — eles tiram profundidade do rosto."

**aplicacao**:
- "Prefira looks com mais peso visual"
- "Use cores profundas próximas ao rosto"
- "Aposte em combinações com contraste moderado a alto"
- "Acessórios dourados funcionam melhor"
- "Na maquiagem, escolha tons mais quentes e intensos"

**insight**: "A sua beleza não aparece quando você suaviza quem você é. 👉 Ela aparece quando você sustenta a sua intensidade natural. Quando você respeita isso: – sua imagem ganha força – sua presença se torna mais marcante – e você transmite elegância sem esforço"

---

### R8 — Profunda Marcante (Fria Profunda)

**seuResultado**: "Sua cartela revela uma beleza intensa, profunda e naturalmente marcante. Existe uma força visual na sua aparência que vem da combinação entre: profundidade (cabelos, olhos ou traços escuros) e um subtom frio (pele rosada ou neutra fria). Você é valorizada por cores frias e profundas, que acompanham essa intensidade natural e trazem definição, contraste e sofisticação ao seu rosto."

**sobreVoce**:
- "A sua presença não é sutil. Ela é estruturada, firme e visualmente impactante."
- "E por isso, quando você tenta suavizar demais, algo se perde."
- "Você pode já ter percebido que: cores muito claras não te destacam, tons suaves deixam sua imagem apagada, cores quentes criam um leve 'desencaixe' no seu visual"
- "Mas quando você usa tons profundos e frios: 👉 seus traços ficam mais definidos 👉 seu olhar ganha destaque imediato 👉 sua imagem transmite força, elegância e sofisticação"
- "Você não precisa diminuir sua intensidade. 👉 Você precisa direcioná-la."

**contraste**:
- intro: "Aqui está um ponto que muda completamente o resultado final da sua imagem — e que a maioria das pessoas ignora: Profundidade e contraste não são a mesma coisa. Você já tem profundidade. Mas o contraste pode variar."
- altoContrasteTitle: "👉 Se você tem ALTO CONTRASTE: (ex: pele clara + cabelo preto + olhos escuros)"
- altoContrasteText: "Você sustenta melhor combinações mais marcantes. Ex: preto + branco, vinho + pele clara, azul marinho + contraste forte. Looks com claro + escuro funcionam MUITO bem. 👉 Isso cria uma imagem mais impactante e sofisticada."
- baixoContrasteTitle: "👉 Se você tem BAIXO ou MÉDIO CONTRASTE: (ex: pele morena ou negra + cabelo escuro + olhos escuros)"
- baixoContrasteText: "O seu visual já é naturalmente uniforme. Você fica melhor com looks mais profundos e contínuos. Ex: vinho + vinho, preto + grafite, azul marinho + azul profundo. 👉 Muito contraste (tipo preto + branco) pode 'quebrar' sua harmonia."
- regraSimples: "✔️ Regra simples: Quanto mais contraste natural você tem → mais contraste pode usar. Quanto menos contraste → mais monocromia te valoriza."

**coresFavoraveis** (intro: "Prefira tons profundos e frios:" / outro: "Essas cores acompanham sua intensidade natural e trazem elegância imediata."):
preto, azul marinho, vinho, roxo profundo, cinza escuro, azul petróleo, verde escuro frio

**coresDesfavoraveis** (intro: "Evite:" / outro: "Essas cores reduzem a força da sua imagem e podem te deixar apagada."):
bege claro, tons quentes (alaranjados/amarelados), cores suaves, branco muito leve

**coresNeutrasIntro**: "Essas cores não te valorizam nem te prejudicam. Use quando quiser: discrição, equilíbrio, base para combinações. Mas lembre-se: 👉 elas não entregam o seu máximo potencial."

**comoPratica**:
- intro: "✔️ Estrutura visual:"
- pattern: ["Prefira cores escuras próximas ao rosto", "Evite looks 'lavados'", "Alto contraste → claro + escuro; baixo contraste → looks contínuos", "Acessórios: metais frios (prata, grafite, ônix)"]

**maquiagem**:
- base: "Base com fundo neutro ou frio"
- blush: "tons de rosa queimado, ameixa ou vinho suave"
- olhos: "com profundidade (cinza, grafite, marrom frio, preto)"
- batom: "tons frios e intensos"
- observacao: "👉 Evite maquiagem quente ou alaranjada."

**aplicacao**:
- "Aposte em cores escuras próximas ao rosto"
- "Use contraste com intenção (ex: preto + branco)"
- "Prefira metais frios (prata, grafite)"
- "Na maquiagem, pode usar mais definição"
- "Evite looks apagados"

**insight**: "Você não precisa 'equilibrar' sua intensidade. 👉 Você precisa expressá-la com clareza. A sua beleza não aparece quando você suaviza. Ela aparece quando você assume a sua profundidade."

---

### R9 — Profunda Intensa (Neutra Profunda)

**seuResultado**: "Sua cartela revela uma beleza forte, profunda e naturalmente equilibrada. Você sustenta cores intensas com facilidade — sejam elas mais quentes ou mais frias — porque o seu ponto central não está na temperatura. 👉 Está na profundidade e na presença. Sua imagem pede densidade, peso visual e sofisticação."

**sobreVoce**:
- "Você tem uma característica rara: 👉 força + versatilidade real"
- "Mas aqui existe um erro comum que pode te confundir: Você pode achar que, por ser neutra, qualquer cor funciona. E não funciona."
- "Você provavelmente já percebeu que: cores muito claras te enfraquecem, tons suaves deixam sua imagem sem presença, cores 'bonitinhas' não se sustentam em você"
- "Por outro lado: tanto cores quentes quanto frias funcionam, desde que sejam profundas. 👉 O seu critério não é temperatura. É intensidade."
- "Quando você usa cores profundas: seu rosto ganha estrutura, sua imagem transmite autoridade, sua beleza se sustenta sem esforço"

**contraste**:
- intro: "Aqui está o ponto que refina completamente o seu resultado: 👉 Você é profunda. Mas o seu contraste pode variar."
- altoContrasteTitle: "Se você tem alto contraste (ex: pele clara + cabelo escuro):"
- altoContrasteText: "Você sustenta melhor combinações mais marcadas. Ex: preto + off-white, vinho + pele clara, contrastes visíveis. Sua imagem aceita contraste mais evidente sem pesar."
- baixoContrasteTitle: "Se você tem contraste médio ou baixo (ex: pele, cabelo e olhos mais próximos):"
- baixoContrasteText: "O ideal é manter looks mais contínuos. Ex: combinações de tons profundos próximos entre si. Menos quebra, mais fluidez."
- regraSimples: "👉 Resumo prático: alto contraste → pode brincar com contraste. Baixo contraste → melhor manter profundidade com suavidade de transição."

**coresFavoraveis** (intro: "Prefira tons profundos, sofisticados e equilibrados:" / outro: "👉 Essas cores sustentam a sua presença sem te apagar."):
preto, marrom escuro, azul profundo, vinho, verde escuro, cinza grafite, bordô, oliva escuro, petróleo

**coresDesfavoraveis** (intro: "Evite:" / outro: "👉 Essas cores quebram o equilíbrio da sua imagem ou tiram a profundidade que te valoriza."):
cores muito claras, tons muito vibrantes (puros demais), cores extremamente frias ou extremamente quentes, tons suaves e apagados

**coresNeutras** (intro: "Essas cores não te prejudicam — mas também não destacam:" / outro: "👉 Use quando quiser discrição, mas não como base principal de imagem."):
off-white neutro, marrom médio, azul médio neutro, oliva médio, rosé neutro

**comoPratica**:
- intro: "Aplicações práticas:"
- pattern: ["Priorize cores profundas próximas ao rosto", "Misture quente e frio com liberdade (desde que sejam intensos)", "Evite looks muito claros ou lavados", "Prefira composições que tenham peso visual", "Ajuste o contraste de acordo com seu nível pessoal"]
- outro: "👉 Sua imagem precisa parecer estruturada, não suave."

**maquiagem**:
- base: "Base neutra (nem muito amarelada, nem rosada demais)"
- blush: "tons queimados ou profundos"
- olhos: "marrons, ameixa, vinho, oliva"
- batom: "intensos (nude profundo, vinho, rosado escuro)"
- observacao: "👉 Evite maquiagem leve demais — ela some em você."

**aplicacao**:
- "Prefira looks com presença"
- "Use cores profundas próximas ao rosto"
- "Misture quente e frio com liberdade"
- "Aposte em contraste moderado"
- "Acessórios podem variar"

**insight**: "A sua beleza não está na delicadeza. 👉 Está na presença que se sustenta. E isso muda tudo. Você não precisa suavizar quem você é para se encaixar. 👉 Você precisa assumir a profundidade que já existe em você."

---

## 11. Verificação end-to-end

### Funcional
- [ ] Cada `/resultado/[slug]` renderiza sem erro
- [ ] Todas as 78 imagens carregam (status 200)
- [ ] EmailResultForm continua funcionando
- [ ] R6 carrega 4 cards de "Como aparece na prática" com sub-titles corretos
- [ ] R4, R5, R6, R8, R9 mostram seção "Entenda seu contraste"

### Visual
- [ ] Hero com foto full-width + título legível
- [ ] Tipografia consistente com identidade visual (Playfair + Inter)
- [ ] Mobile stack correto

### Performance
- [ ] Imagens otimizadas via `next/image`
- [ ] LCP < 2.5s
- [ ] CLS = 0

---

## 12. Pendências FECHADAS (decisões tomadas)

✅ **Cores neutras nos R1, R2, R3** → só imagem + intro (sem lista)
✅ **R6 reutiliza imagem** → manter o reuso (intencional)
✅ **R6 sub-blocos** → 4 cards distintos com sub-titles
✅ **R7, R8, R9 sem lista de cores neutras** → só imagem + intro
✅ **Legendas nas fotos prática** → sem legenda

## 13. Pendências ABERTAS

✅ Nenhuma pendência aberta. **Tudo pronto para implementação** (Fases 2-7).

---

## 14. Estimativa de esforço

- Larissa baixar 4 imagens: 5min
- Script de processamento: 30min
- Reescrita `data/results.ts`: 2h
- 6 novos componentes: 2-3h
- Nova página `/resultado/[tipo]`: 2h
- QA + ajustes: 1-2h
- **Total dev**: ~8-10h
