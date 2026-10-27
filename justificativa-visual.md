# Justificativa Visual e Racional de Design (justificativa-visual.md)

Este documento fundamenta tecnicamente e esteticamente as decisões de design adotadas para a identidade visual e concepção do portfólio de **Giovanna Gomes de Freitas**.

---

## 1. O Desafio: Superar o "Visual de Template Genérico"

A grande maioria dos portfólios contemporâneos sofre de homogeneização: estruturas idênticas em tons de cinza ou monocromáticos, cartões simétricos repetitivos e tipografias sem traços de individualidade.

Para o portfólio de Giovanna, a proposta é **autoral, criativa, vibrante e moderna**, mantendo o rigor técnico da experiência de usuário (UX) e do código limpo em Vanilla HTML/CSS/JS.

---

## 2. Racional da Paleta de Cores Cinematográfica

Para o portfólio de audiovisual de Giovanna, a atmosfera visual foi concebida com inspiração nas salas de projeção e suites profissionais de pós-produção e color grading:

```
[#080A0F] Preto              ───► Fundo principal, imersão total e valorização de fotos e vídeos
[#0D1B3D] Azul Profundo      ───► Fundos secundários, elevação de planos e cartões
[#14235C] Azul-escuro        ───► Blocos estruturais, botões, bordas e destaques gráficos
[#FFFFFF] Branco             ───► Títulos de alto impacto, precisão e leitura cristalina
[#C8CEDA] Cinza-claro        ───► Textos secundários, suavidade visual e redução de contraste agressivo
```

### 2.1. O Preto como Fundo Principal (`#080A0F`)
- Uma interface escura reduz a distração visual ao redor das imagens e vídeos, permitindo que a paleta nativa das fotografias e produções se destaque com brilho natural e fidelidade de cor.

### 2.2. A Dupla de Azuis (`#0D1B3D` e `#14235C`)
- O azul profundo e o azul-escuro constroem uma hierarquia refinada de camadas, substituindo o cinza padrão por tons nobres de inspiração cinematográfica noturna.

### 2.3. Branco (`#FFFFFF`) e Cinza-claro (`#C8CEDA`)
- O uso de branco puro apenas em títulos e pontos focais, complementado pelo cinza-claro nos parágrafos, elimina a fadiga ocular e atende a padrões de contraste WCAG AAA sobre fundos escuros.

---

## 3. Racional Tipográfico

O emparelhamento tipográfico foi concebido para expressar personalidade e legibilidade máxima:

### 3.1. Títulos: `Space Grotesk`
- **Por que esta escolha?**: O `Space Grotesk` é uma família sem serifa derivada de tipografias monoespaçadas, mas desenhada para títulos proporcionais.
- **Efeito visual**: Seus ângulos singulares e terminação geométrica conferem um tom tech, autêntico e audacioso aos cabeçalhos, tornando o nome de Giovanna e os títulos de seções inconfundíveis.

### 3.2. Textos e Interface: `Inter`
- **Por que esta escolha?**: Desenhada especificamente para telas de computador e dispositivos móveis, a `Inter` é uma das fontes mais legíveis e neutras do design contemporâneo.
- **Efeito visual**: Garante que biografias, descrições técnicas de projetos e formulários sejam lidos sem qualquer esforço cognitivo, equilibrando a expressividade do `Space Grotesk`.

---

## 4. Dinâmica de Formas Geométricas e Assimetria

### 4.1. Formas Geométricas como Identidade
- O uso de círculos, pílulas e blocos com curvaturas intencionais cria um vocabulário gráfico próprio.
- Elementos geométricos reforçam o aspecto contemporâneo e permitem criar decorações abstratas leves em CSS puro (sem necessidade de carregar imagens pesadas).

### 4.2. Layouts Assimétricos e Ritmo Visual
- A simetria estrita tende a tornar a navegação previsível e monótona.
- Ao adotar larguras escalonadas para os cartões de projetos e posições alternadas para textos e ilustrações, estimula-se a curiosidade do visitante, conduzindo os olhos de maneira natural por toda a extensão da página.

---

## 5. Equilíbrio entre Criatividade e Usabilidade (Acessibilidade)

Apesar de colorido e expressivo, o design prioriza a experiência do usuário:
- **Hierarquia Visual Nítida**: O olho do visitante reconhece em fração de segundo quem é a profissional, o que ela faz e como acessar seus trabalhos.
- **Contraste Aprovado**: As combinações de texto (Azul Escuro sobre Fundo Claro, ou Branco sobre Azul Intenso) atendem às recomendações internacionais de contraste WCAG AA.
- **Leveza de Performance**: Toda a estética é construída com propriedades nativas do CSS, garantindo carregamento instantâneo mesmo em redes móveis lentas.
