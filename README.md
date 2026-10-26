# Brasil de Quem? — Atlas da Consciência de Classe

Site estático educativo baseado no projeto `consciencia-de-classe-site-main.zip` recebido, reestruturado e atualizado em **26/10/2026**.

## Estrutura

- `index.html` — páginas/seções e links para fontes.
- `style.css` — identidade verde/amarela, navegação responsiva, impressão e alto contraste.
- `script.js` — menu móvel, barra de leitura, busca do glossário e contraste (sem bibliotecas).
- `assets/favicon.svg` — símbolo geométrico original em cores nacionais.
- `FONTES.md` — controle editorial das afirmações e fontes.

## Como abrir

Extraia o ZIP e abra `index.html` no navegador; é possível também iniciar pelo **Live Server** do VS Code. O site não requer `npm`, servidor, banco de dados nem instalação de dependências. A fonte externa Google Fonts possui fallback local; sem internet o site continua operante, mas as referências externas obviamente não abrirão.

## Editar

Edite o conteúdo no `index.html`, o visual no `style.css` e comportamento no `script.js`. Para atualizar fatos políticos, consulte `FONTES.md` antes de alterar datas, estatísticas, andamentos e situações processuais. Não copie uma notícia sobre uma alegação como se fosse condenação.

## Características

- HTML semântico com navegação por teclado, `skip link`, altocontraste manual, regras para `prefers-reduced-motion`, foco visível, texto acessível e menus/controles com `aria`.
- Layout adaptativo para celular, tablet e desktop, sem grade cortada.
- Recurso local de pesquisa em glossário e cards de checagem expansíveis.
- Sem rastreadores, pixels de publicidade, animações pesadas ou dependências JS.

## Escopo editorial

Educação cívica, análise sociológica e fatos documentados. Não promove campanha eleitoral nem atribui intenção criminosa a alguém por laço familiar ou filiação política. Distingue decisões, depoimentos, acusações, propostas, dados e avaliações.


## Atualização v3 — soberania brasileira (26/10/2026)

Adicionado capítulo 06 sobre soberania, princípios constitucionais, reservas de terras raras, relações Brasil–EUA e diversificação de exportações para China, União Europeia, Índia e abertura do mercado da Indonésia. Dados do MDIC indicam queda de 6,5% das exportações aos EUA no acumulado janeiro–setembro, aumento de 12% à China e 20% à UE, e aumento de 85,5% à Índia. Para o recorte janeiro–agosto, os EUA haviam registrado queda de 9,7%. Referências e ressalvas documentadas em `FONTES.md`.

## Patch v4 — conteúdo resgatado e tema escuro (26/10/2026)

- Capítulo adicional **“Um presidente não governa sozinho”** com Câmara, Senado, Poderes, tramitação legislativa e orçamento federal.
- Comparativo de quatro partidos **PL, NOVO, PT e PSOL** com fontes primárias.
- Painel **“Uma regra prática: compare propostas, não slogans”** com seis perguntas para avaliar projetos.
- Ampliação da checagem com três boatos documentados e título recuperado do projeto antigo.
- **Tema escuro de alto contraste** revisado globalmente: fundos escuros também em cartões, seções claras, páginas de fontes e soberania; sem alterar o tema original. O botão `◐` alterna e salva a preferência no navegador.
- Glossário ampliado para 17 conceitos. Todas as novas referências estão em `FONTES.md`.
