# Nésio Photo — Projeto de Website

## Resumo
Site de portfólio para o fotógrafo Nésio de Nova Iguaçu, RJ. Tema visual "Câmara Escura" com estética cinematográfica.

## Status: Pronto para apresentação ao cliente

## Última sessão: 2026-09-29

## Repositório: https://github.com/roazevedo/nesio-photo (privado)

### O que foi implementado:

#### 1. Intro Cinematográfico (Abertura de Obturador)
- Animação de abertura com 8 lâminas formando uma íris de câmera
- Logo "nésio" aparece no centro com blur → foco
- Anel de luz safelight que expande durante abertura
- Duração: ~2.8s

#### 2. Scroll Video 3D (Google Flow) — AGUARDANDO VÍDEO
- Seção após o hero preparada para vídeo 3D controlado por scroll
- O vídeo avança frame a frame conforme o usuário rola a página
- 3 textos cinematográficos aparecem em momentos específicos do scroll
- Vinheta cinematográfica sobre o vídeo
- **Para integrar o vídeo do Google Flow:**
  1. Exportar o vídeo em MP4 (H.264, alta qualidade)
  2. Colocar em `app/assets/videos/` ou `public/videos/`
  3. Atualizar o `src` do `<video>` em `home.html.erb`:
     ```erb
     src="<%= asset_path('videos/flow-camera.mp4') %>"
     ```
  4. Opcional: adicionar um `poster` para o primeiro frame

#### 3. Galeria Horizontal (Scroll Hijacking)
- Seção onde scroll vertical move fotos horizontalmente
- Texto fixo à esquerda: "Momentos que ficam para sempre"
- Barra de progresso laranja
- Anéis decorativos flutuantes animados

#### 4. Efeitos 3D Interativos
- Tilt 3D nos frames do contact sheet (mouse-follow)
- Tilt 3D nos canisters do Instagram
- Parallax no hero seguindo o mouse

#### 5. Efeitos de Scroll Cinematográficos
- Hero com zoom out + fade ao rolar
- Texto que sobe e desvanece
- Revelação de fotos (develop effect)

### Arquivos principais modificados:
- `app/assets/stylesheets/nesio.css` — estilos completos
- `app/javascript/nesio.js` — animações e interações
- `app/views/pages/home.html.erb` — estrutura HTML

### Para continuar:
1. Rodar servidor: `cd /home/roazevedo/code/nesio-photo && bin/rails server`
2. Acessar: http://localhost:3000

### Referência visual:
- Site modelo: https://elirigobeli.com/higgsfield/fotografia/
- Vídeo de referência: C:\Users\rodri\OneDrive\Imagens\Capturas de tela\camera_fotografia.mp4

### Próximos passos sugeridos:
- Criar animação 3D no Google Flow e integrar o vídeo
- Adicionar mais fotos reais do Nésio
- Ajustar responsividade mobile
- Testar performance
