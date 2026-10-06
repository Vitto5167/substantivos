# Prompt aprimorado — Acerte o Substantivo!

Crie um jogo educativo de navegador chamado **Acerte o Substantivo!**, em português do Brasil, para alunos do ensino fundamental e médio. Entregue uma experiência completa, bonita, ágil e fácil de apresentar em sala de aula.

## 1. Tecnologia e entrega

- Utilize somente HTML5, CSS3 e JavaScript puro, sem frameworks, fontes remotas, bibliotecas externas ou banco de dados.
- Organize o código em `index.html`, `style.css` e `script.js`, com comentários explicando estado, regras, tempo, posicionamento, som e armazenamento.
- O jogo deve abrir diretamente pelo `index.html`, inclusive sem internet. Não utilize `fetch`, módulos JavaScript ou dependências que exijam servidor.
- Inclua instruções simples de uso e personalização. Não prometa ausência absoluta de bugs: valide os fluxos principais e descreva os testes realizados.

## 2. Direção visual

Crie uma interface de jogo moderna e acolhedora, com fundo claro, roxo vibrante, texto escuro, detalhes coloridos e cartões com profundidade sutil. Use tipografia do sistema, bordas arredondadas e animações curtas. A atividade deve ser o centro da interface, sem uma página de propaganda antes do jogo.

Tela inicial: título **ACERTE O SUBSTANTIVO!**, subtítulo **Você consegue encontrar todos os substantivos?**, seleção de dificuldade e botões **JOGAR**, **COMO JOGAR** e **RECORDES**. Mostre rapidamente as regras: 60 segundos, 3 vidas e +10 pontos por acerto.

## 3. Conteúdo e cuidado pedagógico

- Tenha um banco variado de pelo menos 100 palavras, com nível, classe gramatical, frase curta e explicação individual.
- Inclua substantivos comuns, próprios, concretos e abstratos; verbos; adjetivos; e advérbios.
- A classificação sempre deve se referir à palavra **na frase apresentada**, pois uma mesma palavra pode exercer funções diferentes. Evite ensinar que uma palavra nunca pode ser substantivo.
- Mostre a palavra principal em destaque, preservando acentos e a inicial maiúscula de nomes próprios. A frase de contexto aparece em corpo menor.
- Exemplo: **casa** — “A casa tem janelas.” → substantivo comum: nomeia uma construção.
- Exemplo: **correr** — “Eu gosto de correr.” → verbo no infinitivo: indica uma ação nesse contexto.
- Exemplo: **bonito** — “O desenho ficou bonito.” → adjetivo: caracteriza o desenho.
- Exemplo: **ontem** — “Cheguei ontem.” → advérbio de tempo: informa quando aconteceu a ação.
- As cores dos cartões devem ser aleatórias e independentes da resposta correta. Não dê pistas pela cor ou pela posição.

## 4. Partida

Ao clicar em JOGAR, faça uma contagem regressiva de 3 segundos; depois comece uma rodada de 60 segundos. Apresente palavras em posições aleatórias dentro de uma arena. Os cartões devem permanecer parados enquanto estão disponíveis, ser grandes para toque e nunca se sobrepor nem sair da área de jogo. Uma barra discreta indica o tempo restante de cada cartão.

Mantenha aproximadamente 55% das palavras como substantivos, evite duplicatas simultâneas e repetições imediatas. Garanta oportunidades de acerto: quando não houver substantivos disponíveis, priorize um substantivo na próxima entrada.

No topo, exiba pontuação, recorde da dificuldade, três vidas, tempo, combo e nível atual. Inclua botão de pausa e controle de som. Ofereça atalhos de teclado indicados nos cartões, além de Tab e Enter.

## 5. Regras exatas

- Substantivo correto: **+10 pontos**, soma 1 acerto e aumenta o combo.
- A cada **5 acertos consecutivos**, conceda **+15 pontos extras**. Deixe a regra visível no tutorial.
- Palavra incorreta: **−5 pontos e −1 vida**, soma 1 erro e zera o combo. A pontuação pode ficar negativa: não esconda a penalidade com um piso de zero.
- Substantivo que desaparece sem ser selecionado: não tira pontos nem vidas, mas interrompe o combo. Registre como substantivo que passou para a revisão.
- Outras classes que desaparecem sem clique não são erros.
- A cada 100 pontos alcançados, aumente levemente a velocidade e, gradualmente, a quantidade de cartões. O nível não regride após erros. A progressão deve ter limites para manter o jogo utilizável, principalmente no celular.
- Clique duplo não pode contar duas vezes. Cartões expirados ou já respondidos não podem pontuar. Nenhuma entrada é aceita durante pausa, contagem regressiva ou resultado.

## 6. Dificuldades

- **Fácil:** começa com até 4 cartões, aproximadamente 7 segundos por cartão e vocabulário cotidiano. Inclua substantivos concretos simples, verbos, adjetivos e advérbios comuns.
- **Médio:** começa com até 6 cartões, aproximadamente 5,5 segundos por cartão; inclua nomes próprios e substantivos abstratos.
- **Difícil:** começa com até 8 cartões, aproximadamente 4,2 segundos por cartão; inclua vocabulário mais elaborado e maior variedade de classes.
- Ajuste a quantidade à área disponível. Acelere a entrada de cartões conforme a dificuldade, mas mantenha tempo mínimo de leitura e alvos de toque confortáveis.

## 7. Feedback educativo

Acerto: cartão verde, marca de confirmação, pontos e som opcional. Erro: cartão vermelho, sinal claro, texto **Não é substantivo nesta frase!**, penalidade e som opcional. Não dependa exclusivamente de cores.

Mantenha uma pequena faixa educativa fora da arena. Mostre explicações curtas após os primeiros acertos, periodicamente durante sequências e em todos os erros, sem interromper a rodada nem cobrir as palavras.

No resultado, inclua uma revisão de todas as palavras clicadas e dos substantivos que passaram, agrupando repetições. Para cada palavra, mostre classe, contexto, explicação e desempenho do jogador. Permita filtrar por **Todas**, **Acertos**, **Erros** e **Passaram**.

## 8. Pausa e finalização

- Pause manualmente por botão ou tecla P/Esc. Pause automaticamente ao trocar de aba ou sair do aplicativo. Retome apenas por ação explícita.
- Durante a pausa, congele cronômetro, entradas e expiração dos cartões; oculte as respostas disponíveis para preservar o desafio. Use tempo monotônico, sem acumular intervalos após reinícios.
- Quando as três vidas terminarem, encerre imediatamente em **Game Over**. Quando o tempo terminar, mostre **Tempo esgotado!**.
- Exiba pontuação final, melhor combo, acertos, erros, precisão nos cliques, substantivos que passaram, dificuldade e mensagem de desempenho coerente. Se ninguém clicou, mostre 0% de precisão.
- Inclua **JOGAR NOVAMENTE** na mesma dificuldade e **VOLTAR AO INÍCIO**.

## 9. Recordes e som

- Salve os cinco melhores resultados por dificuldade no `localStorage`, incluindo pontos, acertos, maior combo e data. O recorde inicial é 0. Resultados negativos não devem substituir esse recorde inicial.
- Informe que os recordes são deste navegador. Valide os dados lidos. Se o armazenamento estiver bloqueado ou corrompido, mantenha a partida funcionando e informe quando não for possível persistir novos resultados.
- Gere efeitos curtos com Web Audio API para acerto, erro, perda de vida, bônus e fim de partida. Comece com som desligado e permita ligar/desligar. Só inicialize áudio após interação; falhas de áudio nunca devem impedir o jogo.

## 10. Responsividade e acessibilidade

- Funcione bem de 320 px a telas largas, em retrato e paisagem, sem rolagem horizontal. Recalcule as posições ao redimensionar, sem criar sobreposição.
- Use botões semânticos, foco visível, nomes acessíveis, contraste suficiente, seleção de dificuldade por rádio e modais com foco gerenciado.
- Respeite `prefers-reduced-motion`. Não faça efeitos de luz piscante ou anúncios de leitor de tela a cada frame.
- Garanta que os controles principais permaneçam utilizáveis em telas pequenas e com ampliação do texto.

## 11. Validação antes da entrega

Verifique a abertura offline; as três dificuldades; contagem regressiva; +10 por acerto; −5 e perda de vida por erro; bônus a cada 5 acertos; interrupção do combo por substantivo perdido; progressão aos 100 pontos; fim por vidas e por tempo; pausa e retomada; bloqueio de cliques repetidos; reinício sem timers duplicados; recordes após recarregar; falha de armazenamento; revisão educativa; botão de som; navegação por teclado; e organização dos cartões em telas pequenas.

Entregue o jogo pronto para usar, os três arquivos de código, este prompt, um guia de uso e um pacote ZIP. Mantenha a implementação simples o suficiente para um estudante explicar em um trabalho escolar.
