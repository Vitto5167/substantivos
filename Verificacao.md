# Verificação — Acerte o Substantivo!

**Resultado: 25 verificações passaram; nenhuma falhou na execução final.**

Data: 22 de setembro de 2026. As verificações foram executadas em Chromium, utilizando o mesmo código do jogo em uma cópia isolada de teste. A cópia expôs funções apenas para o teste automatizado e utilizou chaves de armazenamento próprias. Essa instrumentação não acompanha o jogo entregue. Contagens de tempo longas foram avançadas de forma controlada para testar os encerramentos.

## Cobertura

1. Banco: 116 palavras distintas, com frase, explicação, classe e dificuldade.
2. Início nas três dificuldades: 3 vidas, 60 segundos e quantidade inicial de cartões.
3. Acerto vale +10; clique repetido não pontua novamente.
4. Cinco acertos rendem 65 pontos; dez rendem 130 e liberam o nível 2.
5. Erro tira 5 pontos e uma vida, zera o combo e não reduz o nível.
6. Três erros encerram imediatamente; pontuação negativa e bloqueio após o fim.
7. Substantivo expirado interrompe o combo sem tirar pontos nem vidas.
8. Outras classes expiradas não contam como erro.
9. Pausa conserva tempo e cartões, bloqueia respostas e permite retomar.
10. Mudança de visibilidade pausa; voltar não retoma automaticamente.
11. Contagem regressiva não aceita respostas nem consome o tempo de jogo.
12. Fim aos 60 segundos e precisão de 0% quando não há cliques.
13. Reinício limpa contadores e impede resposta com cartão da rodada anterior.
14. Revisão com explicações e filtros de resultado.
15. Recordes persistidos, separados por dificuldade e limitados a cinco.
16. Dados corrompidos ignorados; falha de gravação informada sem quebrar a partida.
17. Botão de som alterna sem interromper o jogo.
18. Teclas dos cartões e atalho P para pausar e retomar.
19. Layout em 320 px, sem cartões sobrepostos, cortados ou fora da arena.
20. Layout em 390 px, nas mesmas condições.
21. Layout em 768 px, nas mesmas condições.
22. Layout em 1100 px, nas mesmas condições.
23. Todas as 116 combinações de palavra e frase cabem no cartão em tela de 320 px.
24. Menu e resultado sem rolagem horizontal em 320 px.
25. Arena adaptada à altura de 667 px, com largura de 320 px e verificação de todas as palavras.

Também foram conferidos visualmente o menu e a arena, e foi usado o tutorial na interface. A sintaxe do JavaScript foi validada e os três arquivos finais não têm dependências remotas.

## Limites da verificação

Esses resultados cobrem os cenários descritos e não significam garantia de ausência absoluta de bugs. A visualização de celular foi feita por tamanhos de tela simulados no navegador, sem teste em aparelhos físicos. Firefox, Safari e execução direta por `file://` não foram testados nesta sessão. O jogo usa arquivos relativos e JavaScript clássico, sem módulos, chamadas de rede, fontes externas ou recursos que exijam servidor.

A integração opcional WebMCP foi protegida por detecção de suporte. O navegador de teste não forneceu essa API, então sua execução real não pôde ser validada. Ela não é necessária para nenhuma função do jogo.
