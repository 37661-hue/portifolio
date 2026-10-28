# Especificação de Funcionalidades (funcionalidades.md)

Este documento descreve detalhadamente o escopo funcional, comportamento interativo e arquitetura de seções planejadas para o portfólio de **Giovanna Gomes de Freitas**.

---

## 1. Visão Geral das Funcionalidades

O portfólio será desenvolvido utilizando exclusivamente **HTML5, CSS3 e JavaScript puros**, garantindo leveza extrema, alta performance e compatibilidade universal sem dependências de frameworks.

As funcionalidades principais abrangem:
1. **Menu de Navegação Inteligente**
2. **Seção Hero (Apresentação Inicial)**
3. **Seção "Sobre Mim"**
4. **Galeria de Projetos Interativa**
5. **Seção de Contato**
6. **Microanimações Discretas**
7. **Responsividade Multiplataforma (Mobile e Desktop)**
8. **Acessibilidade Básica Integrada (a11y)**

---

## 2. Detalhamento por Seção e Componente

### 2.1. Menu de Navegação
- **Estrutura**: Barra de navegação fixada no topo (*sticky/fixed header*) com visual translúcido ou sólido limpo.
- **Itens do Menu**:
  - Início
  - Sobre Mim
  - Projetos
  - Contato
- **Comportamento Desktop**:
  - Links horizontais com efeito hover suave na cor de acento (Amarelo `#FFE45E` ou Coral `#FF786B`).
  - Rolagem suave (*smooth scrolling*) até a âncora correspondente.
- **Comportamento Mobile**:
  - Botão de menu hambúrguer interativo em JavaScript puro.
  - Gaveta ou painel deslizante acessível com transição CSS suave.
  - Fechamento automático ao clicar em qualquer link da página.

---

### 2.2. Seção Hero (Boas-Vindas)
- **Objetivo**: Causar o primeiro impacto visual com tipografia marcante (`Space Grotesk`) e elementos geométricos.
- **Elementos previstos**:
  - Saudação personalizada com o nome **Giovanna Gomes de Freitas**.
  - `[CAMPO EDITÁVEL: Título profissional / Frase de apresentação curta]`.
  - Botões de Chamada para Ação (CTAs):
    - Botão primário (Azul Intenso `#2457F5`): "Ver Projetos" (leva até a galeria).
    - Botão secundário (Contorno / Coral `#FF786B`): "Fale Comigo" (leva até o contato).
  - Composição visual assimétrica com formas geométricas de destaque ao fundo.

---

### 2.3. Seção "Sobre Mim"
- **Objetivo**: Apresentar a trajetória, formação e competências de Giovanna de maneira dinâmica e autoral.
- **Campos Editáveis Reservados**:
  - `[CAMPO EDITÁVEL: Texto da biografia pessoal e trajetória profissional]`
  - `[CAMPO EDITÁVEL: Formação acadêmica / Cursos relevantes]`
  - `[CAMPO EDITÁVEL: Lista de habilidades / tags técnicas e comportamentais]`
- **Apresentação Visual**:
  - Cartão com fundo diferenciado e bordas assimétricas.
  - Tags em formato de pílula para exibição das habilidades.
  - Espaço reservado para foto de perfil ou ilustração vetorial: `[CAMPO EDITÁVEL: Inserir arquivo de foto/avatar]`.

---

### 2.4. Galeria de Projetos
- **Objetivo**: Exibir trabalhos e realizações de Giovanna de forma visual e engajante.
- **Estrutura dos Cartões de Projeto**:
  - Layout em grid flexível e assimétrico (quebrando a monotonia de blocos iguais).
  - Elementos de cada cartão:
    - Espaço para imagem / mock-up do projeto: `[CAMPO EDITÁVEL: Caminho da imagem/screenshot]`
    - Título do Projeto: `[CAMPO EDITÁVEL: Nome do Projeto]`
    - Breve descrição do desafio e solução: `[CAMPO EDITÁVEL: Resumo]`
    - Tags de tecnologias utilizadas: `[CAMPO EDITÁVEL: Tags ex. HTML, CSS, Figma...]`
    - Links de ação: "Ver Projeto Online" e/ou "Ver Código / Repositório" `[CAMPO EDITÁVEL: Links]`
- **Interações**:
  - Efeito hover sutil (elevação do card e realce da borda com a cor primária).
  - Transições CSS fluidas sem travamento.

---

### 2.5. Seção de Contato
- **Objetivo**: Facilitar a comunicação direta com Giovanna.
- **Elementos previstos**:
  - Chamada amigável para parcerias, oportunidades de trabalho ou networking.
  - **Canais Diretos (Campos Editáveis)**:
    - E-mail direto clicável: `[CAMPO EDITÁVEL: e-mail]`
    - LinkedIn: `[CAMPO EDITÁVEL: link do perfil]`
    - GitHub: `[CAMPO EDITÁVEL: link do perfil]`
    - Outros canais (WhatsApp, Behance, etc.): `[CAMPO EDITÁVEL]`
  - Estrutura de formulário de contato simplificado (HTML semântico com validação nativa de campos de e-mail e mensagem), pronto para integração futura ou envio via `mailto:`.

---

### 2.6. Microanimações Discretas (CSS & Vanilla JS)
- Animação de revelação suave das seções à medida que o usuário rola a página (*fade-in / slide-up* usando `IntersectionObserver` nativo no JavaScript).
- Efeitos nos botões ao passar o cursor (*hover lift* com transição de cor suave).
- Respeito à preferência do sistema operacional por redução de movimento (`@media (prefers-reduced-motion: reduce)`).

---

### 2.7. Responsividade e Adaptação
- **Breakpoints planejados**:
  - Telas móveis compactas: até 480px.
  - Tablets e telas intermediárias: 481px a 1024px.
  - Desktops e monitores amplos: 1025px ou mais.
- **Tipografia fluida**: Uso de funções CSS como `clamp()` para ajuste contínuo de tamanho de fontes entre dispositivos.

---

### 2.8. Acessibilidade Básica (a11y)
- Estrutura semântica correta com uso de `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`.
- Níveis de cabeçalho lógicos (`h1` único, seguido de `h2` para seções e `h3` para cartões).
- Atributos `aria-expanded` e `aria-label` no botão de alternância do menu mobile.
- Visibilidade garantida de foco para usuários que utilizam o teclado (`Tab`).
- Relação de contraste de cores aprovada segundo as normas WCAG AA.

---

## 3. Status de Implementação (Foco: Audiovisual)

- [x] **Cabeçalho & Menu Mobile**: Totalmente implementado com controle acessível e scroll dinâmico.
- [x] **Hero Section**: Implementado com destaque para Giovanna Gomes de Freitas e frase provisória adaptada para audiovisual.
- [x] **Seção Sobre Mim**: Estruturada com foco em Edição de Vídeo, Fotografia e Produção de Vídeos, moldura para foto e campos de formação/habilidades editáveis.
- [x] **Galeria de Projetos Audiovisuais**: Implementada com filtros interativos em JS (Edição, Foto, Produção), mockups de vídeo 16:9, botão de play estilizado e links para assistir aos vídeos.
- [x] **Seção de Contato**: Canais diretos e formulário com validação acessível em JavaScript puro (`aria-live`, feedback de status).
- [x] **Rodapé Autoral**: Implementado com créditos e botão de retorno ao topo.

