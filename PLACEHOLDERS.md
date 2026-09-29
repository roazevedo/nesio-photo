# Fotos — placeholders (TROCAR pelas fotos reais do Nésio)

> ⚠️ **Importante:** as imagens em `app/assets/images/fotos/` são **temporárias**, de
> banco de imagens (Unsplash), usadas só para dar o clima do design. **Não são fotos do
> Nésio.** Antes de publicar de verdade, troque todas pelas fotos reais dele — basta
> substituir os arquivos mantendo os mesmos nomes, ou editar os caminhos em
> `app/controllers/pages_controller.rb` (constante `ROLLS`) e no hero em
> `app/views/pages/home.html.erb`.

## Como trocar

1. Coloque as fotos reais em `app/assets/images/fotos/{15anos,casamentos,kids}/`.
2. Mantenha os mesmos nomes de arquivo (`quinze-01.jpg`, `casamento-01.jpg`, `kids-01.jpg`…)
   **ou** ajuste os caminhos em `ROLLS` e no array `hero_frames` da home.
3. Recomendado: exportar em ~1600px de largura, JPG de boa qualidade.

## Origem das imagens temporárias

Todas de **Unsplash** (licença livre, sem exigência de atribuição). IDs de origem:

| Arquivo | Unsplash photo id |
|---|---|
| 15anos/quinze-01.jpg | 1502823403499-6ccfcf4fb453 |
| 15anos/quinze-02.jpg | 1524504388940-b1c1722653e1 |
| 15anos/quinze-03.jpg | 1494790108377-be9c29b29330 |
| 15anos/quinze-04.jpg | 1515372039744-b8f02a3ae446 |
| 15anos/quinze-05.jpg | 1534528741775-53994a69daeb |
| casamentos/casamento-01.jpg | 1519741497674-611481863552 |
| casamentos/casamento-02.jpg | 1460978812857-470ed1c77af0 |
| casamentos/casamento-03.jpg | 1511285560929-80b456fea0bc |
| casamentos/casamento-04.jpg | 1606216794074-735e91aa2c92 |
| casamentos/casamento-05.jpg | 1583939003579-730e3918a45a |
| casamentos/casamento-06.jpg | 1465495976277-4387d4b0b4c6 |
| kids/kids-01.jpg | 1530103862676-de8c9debad1d |
| kids/kids-02.jpg | 1464349095431-e9a21285b5f3 |
| kids/kids-03.jpg | 1607344645866-009c320b63e0 |
| kids/kids-04.jpg | 1519699047748-de8e457a634e |
| kids/kids-05.jpg | 1527529482837-4698179dc6ce |

URL de origem: `https://images.unsplash.com/photo-<id>`

## Outros textos a confirmar com o Nésio

- Número de WhatsApp em `app/helpers/application_helper.rb` (`WHATSAPP`) — hoje usa a linha
  do `@nesiophotowedding` (5521969738727) para todas as verticais. Ele pode querer números
  diferentes por vertical.
- Números de seguidores/publicações em `ROLLS` (capturados do Instagram em 28/09/2026).
