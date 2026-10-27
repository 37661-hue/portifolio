# Guia de Diretrizes para Agentes e Desenvolvimento (AGENTS.md)

Este documento estabelece as regras estritas, princípios técnicos e padrões operacionais que devem ser seguidos por agentes de inteligência artificial ou desenvolvedores que atuarem na criação e evolução do portfólio de **Giovanna Gomes de Freitas**.

---

## 1. Princípios Fundamentais do Projeto

1. **Proprietária do Portfólio**: Giovanna Gomes de Freitas.
2. **Stack Tecnológica Exclusiva**:
   - **HTML5 Puro** (semântico e estruturado).
   - **CSS3 Puro** (Vanilla CSS com Custom Properties / variáveis CSS; **sem** Tailwind, Bootstrap ou frameworks externos).
   - **JavaScript Puro** (Vanilla JS moderno ES6+; **sem** bibliotecas ou frameworks como React, Vue, jQuery etc.).
3. **Regra de Ouro sobre Informações Pessoais**:
   - **PROIBIDO INVENTAR** qualquer dado não fornecido pela usuária: profissão, formação acadêmica, experiências profissionais, projetos, links de redes sociais, telefone ou e-mail.
   - Todo campo ainda não definido explicitamente por Giovanna deve permanecer marcado e identificado visualmente como **placeholder editável** (exemplo: `[INSERIR ÁREA DE ATUAÇÃO / CARGO]`, `[INSERIR BIOGRAFIA]`).

---

## 2. Padrões de Identidade Visual

- **Estilo Geral**: Criativo, colorido, moderno e com identidade autoral marcante.
- **Evitar Clichês**: Não utilizar layouts genéricos de templates comerciais ou cartões idênticos em grade quadrada sem personalidade.
- **Paleta Oficial**:
  - Azul Intenso: `#2457F5` (cor principal / destaque dinâmico)
  - Azul Escuro: `#14235C` (contraste, profundidade, textos escuros)
  - Amarelo: `#FFE45E` (acento vibrante, luz)
  - Coral: `#FF786B` (acento secundário, energia)
  - Fundo Claro: `#FFFDF8` (fundo principal suave e acolhedor)
- **Tipografia**:
  - Títulos e Destaques: `Space Grotesk` (Google Fonts)
  - Textos de Apoio e Interface: `Inter` (Google Fonts)
- **Linguagem Gráfica**: Formas geométricas limpas, layouts com ritmo assimétrico e tipografia expressiva.

---

## 3. Diretrizes de Engenharia de Front-end

### 3.1. Estrutura de Arquivos Futura (ao iniciar a codificação)
Quando a fase de código for autorizada pela usuária, o projeto seguirá a seguinte organização modular:
```text
/ (raiz)
├── AGENTS.md
├── referencias.md
├── identidade.md
├── funcionalidades.md
├── justificativa-visual.md
├── index.html
├── assets/
│   ├── css/
│   │   ├── variables.css
│   │   ├── reset.css
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── images/
```

### 3.2. Qualidade do Código
- Código limpo, comentado de forma didática e em português.
- Uso consistente de variáveis CSS para cores, espaçamentos, tipografia e raios de borda.
- Transições e microinterações leves (`transition: all 0.3s ease`), sem sobrecarregar a experiência do usuário.
- Design responsivo fluido com abordagem *Mobile-First*, garantindo adaptação perfeita em smartphones (320px+), tablets e monitores desktop ultrawide.

### 3.3. Acessibilidade (a11y)
- Contraste em conformidade com as diretrizes WCAG AA.
- Tags semânticas obrigatórias (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- Textos alternativos em imagens (`alt=""`).
- Indicadores visuais de foco claros para navegação por teclado (`:focus-visible`).
- Links e botões com textos descritivos ou atributos `aria-label`.

---

## 4. Checklist Pré-Execução

Antes de iniciar qualquer implementação no código-fonte do site:
- [ ] Confirmar que os cinco arquivos de planejamento foram criados e revisados.
- [ ] Aguardar a validação e seleção das referências pela Giovanna.
- [ ] Aguardar a instrução explícita da Giovanna para iniciar a criação dos arquivos de código (`index.html`, CSS e JS).
