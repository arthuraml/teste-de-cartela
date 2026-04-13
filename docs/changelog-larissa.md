# O que mudou no Teste de Cartela

Oi Larissa! Aqui está um resumo de tudo que foi implementado no seu Teste de Cartela desde a versão com links protegidos.

---

## 1. Sistema de links de uso único

Agora o teste é um produto protegido. Ninguém consegue fazer o teste sem um link especial.

**Como funciona:**
- Cada link gerado funciona **uma única vez**
- Depois que a pessoa abre o link e começa o teste, **ninguém mais consegue usar aquele link**
- Se a pessoa fechar o navegador, **não consegue voltar** — o acesso acaba
- O link expira automaticamente em **72 horas** se não for usado
- Isso impede que alguém copie o link e mande para a amiga ou tente revender

---

## 2. Página de administração (gerar links)

Foi criada uma página só para você gerar os links das clientes.

**Como criar um link novo:**

1. Acesse: **https://larissa-alencar-teste-de-cartela.vercel.app/admin**
2. Digite a chave de acesso:
   ```
   bf95600d886a275f5776c32e6c7dd1a0d5b7bc124afa3fa90313a601aac00856
   ```
3. (Opcional) coloque o e-mail da cliente
4. Clique em **"Gerar Link"**
5. Copie o link que aparecer e envie para a cliente

Pronto! Cada vez que você clica em "Gerar Link", um link novo e único é criado.

---

## 3. Página inicial pública com oferta de compra

A página inicial do site (https://larissa-alencar-teste-de-cartela.vercel.app) agora é **pública** — qualquer pessoa pode ver.

Mas quando alguém clica em **"Quero conhecer minhas cores"**, aparece um pop-up oferecendo a compra do teste por **R$ 27,90** (em vez de ir direto para o teste).

Isso só acontece para quem **não tem um link válido**. Quem já tem o link e acessou por ele, vai direto para o teste normalmente.

---

## 4. Envio do resultado por e-mail

Quando a cliente termina o teste e vê o resultado, agora tem um campo para ela colocar o e-mail. Ao clicar em "Enviar", o resultado completo (com as cores, dicas e tudo mais) é enviado para o e-mail dela.

Cada teste permite **apenas um envio** de e-mail — não dá para ficar enviando para vários e-mails.

---

## 5. Página de acesso bloqueado

Se alguém tentar acessar o teste sem um link válido (digitando o endereço direto no navegador, por exemplo), vai ver uma página dizendo:

> "Este link já foi utilizado ou expirou."

Isso protege o seu produto de acessos não autorizados.

---

## Resumo rápido

| O que | Como |
|-------|------|
| Gerar link para cliente | Acessar `/admin`, colocar a chave, clicar "Gerar Link" |
| Enviar link | Copiar o link gerado e enviar por e-mail ou WhatsApp |
| Link pode ser compartilhado? | Não — funciona só 1 vez |
| Cliente pode refazer o teste? | Não — precisa de um link novo |
| Resultado por e-mail | A própria cliente coloca o e-mail no final do teste |
| Validade do link | 72 horas após ser gerado |

---

## Próximos passos (quando você quiser)

- **Conectar com plataforma de pagamento** (Hotmart, Kiwify, etc.) — para que o link seja gerado e enviado automaticamente após a compra
- **Botão "Comprar agora"** no pop-up — apontar para o link de checkout da plataforma escolhida
- **Domínio personalizado** — trocar de `larissa-alencar-teste-de-cartela.vercel.app` para um domínio próprio
