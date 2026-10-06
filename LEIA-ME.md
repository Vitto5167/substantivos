# Acerte o Substantivo!

Um jogo de português para aprender enquanto joga, com **116 palavras**, três dificuldades e rodadas de 60 segundos.

## Abrir o jogo

1. Extraia o ZIP inteiro para uma pasta.
2. Mantenha `index.html`, `style.css` e `script.js` juntos.
3. Abra `index.html` no Chrome, Edge, Firefox ou Safari atualizado.
4. Escolha uma dificuldade e clique em **JOGAR**.

Você não precisa instalar programas, criar uma conta, conectar um banco de dados ou iniciar um servidor. Os três arquivos usam somente recursos locais e podem funcionar sem internet. No celular, a versão pelo link é mais prática; alguns gerenciadores de arquivos não permitem executar HTML local.

## Como jogar

Clique nas palavras que são substantivos **na frase apresentada**. Substantivos dão nome a seres, lugares, objetos, sentimentos e ideias. O contexto importa: em “A fruta está doce”, por exemplo, **doce** é um adjetivo.

| Acontecimento | Resultado |
|---|---|
| Acertar um substantivo | +10 pontos e +1 no combo |
| Completar 5 acertos seguidos | +15 pontos extras |
| Clicar em outra classe | −5 pontos, −1 vida e combo zerado |
| Deixar um substantivo passar | Interrompe o combo, sem perder pontos nem vidas |
| Deixar outra classe passar | Sem penalidade |
| Alcançar mais 100 pontos | Sobe um nível, até o nível 8 |
| Perder as 3 vidas | Game Over |
| Completar 60 segundos | Fim da rodada |

A pontuação pode ficar negativa. A precisão considera apenas os cliques: acertos ÷ (acertos + erros). Substantivos que passaram são mostrados separadamente. Palavras ainda disponíveis quando a rodada termina não contam como perdidas.

## Dificuldades

- **Fácil:** vocabulário cotidiano, até 4 cartões iniciais e cerca de 7 segundos por cartão.
- **Médio:** substantivos próprios e abstratos, até 6 cartões iniciais e cerca de 5,5 segundos por cartão.
- **Difícil:** todas as 116 palavras, até 8 cartões iniciais e cerca de 4,2 segundos por cartão.

A quantidade se adapta ao espaço disponível. A dificuldade aumenta gradualmente a cada 100 pontos, com limites para manter o jogo utilizável. Perder pontos não reduz o nível já alcançado.

## Controles

- **Mouse/toque:** clique ou toque na palavra.
- **Teclado:** use a tecla mostrada no canto do cartão, ou Tab e Enter.
- **P ou Esc:** pause ou retome.
- **Pausar:** conserva o tempo e as palavras. Trocar de aba também pausa a partida.
- **Som:** use o botão no topo. Os efeitos são sintetizados no navegador e começam desligados.

## Revisão e recordes

O resultado mostra pontuação, acertos, erros, maior combo, precisão e substantivos que passaram. Abaixo, revise as palavras e suas explicações. Use os filtros **Todas**, **Acertos**, **Erros** e **Passaram**.

Os cinco melhores resultados de cada dificuldade ficam neste navegador. Não existe ranking online nem compartilhamento automático. Outro navegador, endereço ou dispositivo tem seus próprios recordes. O navegador pode tratar arquivos locais de forma diferente; se impedir o salvamento, a rodada continua e você recebe um aviso. Apagar os dados do navegador apaga os recordes.

## Personalizar e explicar o código

| Arquivo | O que contém |
|---|---|
| `index.html` | Telas, botões, placar, janelas e elementos acessíveis |
| `style.css` | Cores, fontes locais, layout responsivo, cartões e animações |
| `script.js` | Palavras, pontuação, tempo, vidas, níveis, sons, revisão e recordes |

No início de `script.js`, as chamadas `addWords` organizam o banco por classe e nível. Cada linha tem três partes separadas por `|`: **palavra | frase | explicação**. Para acrescentar palavras, siga o mesmo formato e revise a classificação na frase.

- `ROUND_MS`: duração da partida em milissegundos.
- `MAX_LEVEL`: limite de progressão.
- `MODES`: quantidade inicial, intervalo de entrada e duração dos cartões.
- `chooseCard`: confere respostas, aplica pontos, bônus e perda de vidas.
- `advance` e `frame`: atualizam o relógio e os cartões em um único ciclo.
- `pauseGame` e `resumeGame`: conservam o estado durante a pausa.
- `finishGame`: prepara o resultado e salva o recorde.
- `renderReview`: monta a revisão com as explicações.

As cores são sorteadas sem relação com a resposta. A posição usa uma grade invisível para evitar sobreposição. A partida usa `performance.now()` e `requestAnimationFrame()`; não acumula vários cronômetros ao reiniciar.

## Apresentação na escola

Você pode explicar assim: “Nosso jogo ensina substantivos por meio de escolhas rápidas. Cada palavra aparece em uma frase para deixar a classificação clara. O jogador recebe retorno imediato e, no final, revisa seus acertos e erros. O projeto usa HTML para a estrutura, CSS para a aparência e JavaScript para as regras.”

## Verificação

Os principais fluxos e a adaptação de tela passaram por 25 verificações em navegador Chromium. Consulte `Verificacao.md` para ver a cobertura e os limites dessa conferência.
