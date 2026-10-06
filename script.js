/* Acerte o Substantivo! | JavaScript puro, sem servidor e sem dependências.
 * Organização: conteúdo → estado → som → interface → partida → eventos.
 * A classificação vale para a palavra na frase: o contexto faz diferença.
 */
(() => {
  'use strict';

  // 1. Conteúdo. Nível 1: cotidiano; 2: próprios/abstratos; 3: vocabulário avançado.
  const WORDS = [];
  function addWords(type, level, lines) {
    lines.trim().split('\n').forEach((line) => {
      const [word, context, explanation] = line.trim().split('|');
      WORDS.push({ id: WORDS.length, word, context, explanation, type, level });
    });
  }
  addWords('noun', 1, `
    casa|A casa tem janelas.|Casa é um substantivo comum e concreto: nomeia uma construção.
    cachorro|O cachorro abanou o rabo.|Cachorro é um substantivo comum e concreto: nomeia um animal.
    escola|A escola abriu cedo.|Escola é um substantivo comum e concreto: nomeia uma instituição ou lugar de estudo.
    mesa|A mesa está limpa.|Mesa é um substantivo comum e concreto: nomeia um móvel.
    cidade|A cidade tem uma praça.|Cidade é um substantivo comum e concreto: nomeia um lugar.
    árvore|A árvore cresceu.|Árvore é um substantivo comum e concreto: nomeia um ser vivo.
    menino|O menino chegou.|Menino é um substantivo comum e concreto: nomeia uma pessoa.
    livro|O livro tem cem páginas.|Livro é um substantivo comum e concreto: nomeia um objeto.
    bola|A bola caiu no chão.|Bola é um substantivo comum e concreto: nomeia um objeto.
    gato|O gato dormiu.|Gato é um substantivo comum e concreto: nomeia um animal.
    cadeira|A cadeira é de madeira.|Cadeira é um substantivo comum e concreto: nomeia um móvel.
    flor|A flor abriu.|Flor é um substantivo comum e concreto: nomeia uma parte de uma planta.
    praia|A praia está vazia.|Praia é um substantivo comum e concreto: nomeia um lugar.
    janela|A janela está aberta.|Janela é um substantivo comum e concreto: nomeia parte de uma construção.
    lápis|O lápis caiu.|Lápis é um substantivo comum e concreto: nomeia um objeto.
    mochila|A mochila está cheia.|Mochila é um substantivo comum e concreto: nomeia um objeto.
    professora|A professora explicou.|Professora é um substantivo comum e concreto: nomeia uma pessoa pela profissão.
    rio|O rio atravessa a cidade.|Rio é um substantivo comum e concreto: nomeia um curso de água.
    sapato|Meu sapato está limpo.|Sapato é um substantivo comum e concreto: nomeia uma peça de vestuário.
    bicicleta|A bicicleta tem duas rodas.|Bicicleta é um substantivo comum e concreto: nomeia um veículo.
    caderno|O caderno está na mesa.|Caderno é um substantivo comum e concreto: nomeia um objeto.
    peixe|O peixe está no aquário.|Peixe é um substantivo comum e concreto: nomeia um animal.
    porta|A porta está fechada.|Porta é um substantivo comum e concreto: nomeia parte de uma construção.
    nuvem|A nuvem cobriu o sol.|Nuvem é um substantivo comum e concreto: nomeia um elemento da natureza.
  `);
  addWords('noun', 2, `
    João|João chegou à escola.|João é um substantivo próprio: identifica uma pessoa por seu nome.
    Brasil|O Brasil é um país.|Brasil é um substantivo próprio: nomeia um país específico.
    Maria|Maria gosta de ler.|Maria é um substantivo próprio: identifica uma pessoa por seu nome.
    Chapecó|Chapecó fica em Santa Catarina.|Chapecó é um substantivo próprio: nomeia uma cidade específica.
    felicidade|A felicidade contagiou a turma.|Felicidade é um substantivo abstrato: nomeia um estado ou sentimento.
    amizade|Nossa amizade é forte.|Amizade é um substantivo abstrato: nomeia uma relação de afeto.
    coragem|Sua coragem impressionou.|Coragem é um substantivo abstrato: dá nome a uma qualidade.
    alegria|A alegria tomou conta.|Alegria é um substantivo abstrato: nomeia um sentimento.
    saudade|Senti saudade da escola.|Saudade é um substantivo abstrato: nomeia um sentimento.
    tristeza|A tristeza passou.|Tristeza é um substantivo abstrato: nomeia um sentimento.
    beleza|A beleza da flor encanta.|Beleza é um substantivo abstrato: dá nome a uma qualidade. Bonita seria um adjetivo.
    paciência|A paciência ajuda.|Paciência é um substantivo abstrato: dá nome a uma qualidade.
    esperança|A esperança renasceu.|Esperança é um substantivo abstrato: nomeia um sentimento.
    viagem|A viagem foi longa.|Viagem, com G, é um substantivo: nomeia o ato ou o percurso de viajar.
    abraço|O abraço foi carinhoso.|Abraço é substantivo nesta frase: nomeia o ato de abraçar.
    leitura|A leitura começou.|Leitura é um substantivo abstrato: nomeia a ação de ler.
    oceano|O oceano é imenso.|Oceano é um substantivo comum e concreto: nomeia uma grande extensão de água.
    biblioteca|A biblioteca empresta livros.|Biblioteca é um substantivo comum e concreto: nomeia um lugar.
  `);
  addWords('noun', 3, `
    cidadania|A cidadania envolve direitos.|Cidadania é um substantivo abstrato: nomeia uma condição ligada a direitos e deveres.
    honestidade|A honestidade inspira confiança.|Honestidade é um substantivo abstrato: dá nome a uma qualidade.
    empatia|A empatia aproxima as pessoas.|Empatia é um substantivo abstrato: nomeia a capacidade de compreender o outro.
    liberdade|A liberdade é um direito.|Liberdade é um substantivo abstrato: nomeia uma condição.
    justiça|A justiça é necessária.|Justiça é um substantivo abstrato: nomeia uma ideia ou princípio.
    escassez|A escassez de água preocupa.|Escassez é um substantivo abstrato: nomeia a falta ou insuficiência de algo.
    gentileza|A gentileza fez diferença.|Gentileza é um substantivo abstrato: nomeia uma qualidade ou um gesto gentil.
    sabedoria|Sua sabedoria nos inspira.|Sabedoria é um substantivo abstrato: nomeia uma qualidade ligada ao conhecimento.
    pesquisa|A pesquisa trouxe respostas.|Pesquisa é substantivo nesta frase: nomeia uma atividade de investigação.
    arquipélago|O arquipélago tem várias ilhas.|Arquipélago é um substantivo coletivo: nomeia um conjunto de ilhas.
    enxame|O enxame saiu da colmeia.|Enxame é um substantivo coletivo: nomeia um conjunto de abelhas ou outros insetos.
    cardume|O cardume nadou junto.|Cardume é um substantivo coletivo: nomeia um conjunto de peixes.
    constelação|A constelação aparece no céu.|Constelação é um substantivo coletivo: nomeia um agrupamento aparente de estrelas.
    Amazônia|A Amazônia abriga muitas espécies.|Amazônia é um substantivo próprio: nomeia uma região específica.
    adolescência|A adolescência traz mudanças.|Adolescência é um substantivo abstrato: nomeia uma fase da vida.
    hipótese|A hipótese foi testada.|Hipótese é um substantivo abstrato: nomeia uma suposição a ser verificada.
  `);
  addWords('verb', 1, `
    correr|Eu gosto de correr.|Correr é um verbo no infinitivo: indica uma ação nesta frase.
    estudar|Precisamos estudar hoje.|Estudar é um verbo no infinitivo: indica uma ação.
    brincar|Vamos brincar no pátio.|Brincar é um verbo no infinitivo: indica uma ação.
    cantar|Ela adora cantar.|Cantar é um verbo no infinitivo: indica uma ação.
    pular|O sapo consegue pular.|Pular é um verbo no infinitivo: indica uma ação.
    ler|Quero ler esse livro.|Ler é um verbo no infinitivo: indica uma ação.
    dormir|Preciso dormir cedo.|Dormir é um verbo no infinitivo: indica o ato de dormir.
    escrever|Vamos escrever uma carta.|Escrever é um verbo no infinitivo: indica uma ação.
    chegou|O ônibus chegou cedo.|Chegou é um verbo conjugado: indica uma ação já ocorrida.
    correu|O atleta correu ontem.|Correu é um verbo conjugado: indica uma ação no passado.
  `);
  addWords('verb', 2, `
    aprender|Podemos aprender juntos.|Aprender é um verbo no infinitivo: indica uma ação.
    construir|Queremos construir uma ponte.|Construir é um verbo no infinitivo: indica uma ação.
    existem|Existem muitas respostas.|Existem é um verbo conjugado: expressa existência.
    viajem|Espero que eles viajem.|Viajem, com J, é uma forma do verbo viajar. Viagem, com G, é substantivo.
    sorriu|A criança sorriu.|Sorriu é um verbo conjugado: indica uma ação no passado.
  `);
  addWords('verb', 3, `
    refletir|É preciso refletir antes.|Refletir é um verbo no infinitivo: indica uma ação mental.
    compreender|Quero compreender a questão.|Compreender é um verbo no infinitivo: indica uma ação mental.
    argumentou|A aluna argumentou bem.|Argumentou é um verbo conjugado: indica uma ação no passado.
    investigaram|Os alunos investigaram o caso.|Investigaram é um verbo conjugado: indica uma ação no passado.
    permanecer|Podemos permanecer aqui.|Permanecer é um verbo no infinitivo: indica continuidade de estado ou lugar.
  `);
  addWords('adjective', 1, `
    bonito|O desenho ficou bonito.|Bonito é um adjetivo: caracteriza o desenho nesta frase.
    grande|A casa é grande.|Grande é um adjetivo: caracteriza o tamanho da casa.
    feliz|O menino está feliz.|Feliz é um adjetivo: caracteriza o menino. Felicidade é o nome do sentimento.
    rápido|O carro é rápido.|Rápido é um adjetivo nesta frase: caracteriza o carro.
    pequeno|O gato é pequeno.|Pequeno é um adjetivo: caracteriza o tamanho do gato.
    azul|O caderno é azul.|Azul é um adjetivo nesta frase: caracteriza o caderno pela cor.
    alegre|A turma está alegre.|Alegre é um adjetivo: caracteriza a turma. Alegria é substantivo.
    doce|A fruta está doce.|Doce é um adjetivo nesta frase: caracteriza o sabor da fruta.
    alto|O prédio é alto.|Alto é um adjetivo nesta frase: caracteriza o prédio.
    limpo|O quarto está limpo.|Limpo é um adjetivo: caracteriza o estado do quarto.
  `);
  addWords('adjective', 2, `
    corajoso|O atleta é corajoso.|Corajoso é um adjetivo: caracteriza o atleta. Coragem é substantivo.
    gentil|A colega foi gentil.|Gentil é um adjetivo: caracteriza a colega.
    inteligente|A menina é inteligente.|Inteligente é um adjetivo: caracteriza a menina.
    silencioso|O corredor está silencioso.|Silencioso é um adjetivo: caracteriza o corredor.
    curioso|O aluno é curioso.|Curioso é um adjetivo nesta frase: caracteriza o aluno.
  `);
  addWords('adjective', 3, `
    solidário|O vizinho foi solidário.|Solidário é um adjetivo: caracteriza o vizinho.
    persistente|A equipe é persistente.|Persistente é um adjetivo: caracteriza a equipe.
    efêmero|O brilho foi efêmero.|Efêmero é um adjetivo: caracteriza o brilho como passageiro.
    resiliente|A comunidade é resiliente.|Resiliente é um adjetivo: caracteriza a comunidade.
    coerente|O argumento é coerente.|Coerente é um adjetivo: caracteriza o argumento.
  `);
  addWords('adverb', 1, `
    ontem|Cheguei ontem.|Ontem é um advérbio de tempo: informa quando a ação aconteceu.
    hoje|Vamos estudar hoje.|Hoje é um advérbio de tempo nesta frase: informa quando vamos estudar.
    aqui|O livro está aqui.|Aqui é um advérbio de lugar: informa onde o livro está.
    cedo|Acordei cedo.|Cedo é um advérbio de tempo: informa quando acordei.
    lentamente|A tartaruga andou lentamente.|Lentamente é um advérbio de modo: informa como a tartaruga andou.
    rapidamente|Ela respondeu rapidamente.|Rapidamente é um advérbio de modo: informa como ela respondeu.
    longe|A escola fica longe.|Longe é um advérbio de lugar: informa onde a escola fica.
    sempre|Ela sempre lê.|Sempre é um advérbio de tempo: indica a frequência da ação.
  `);
  addWords('adverb', 2, `
    amanhã|Viajaremos amanhã.|Amanhã é um advérbio de tempo nesta frase: informa quando viajaremos.
    talvez|Talvez chova hoje.|Talvez é um advérbio de dúvida: expressa incerteza.
    bastante|Ela estudou bastante.|Bastante é um advérbio nesta frase: indica a intensidade da ação de estudar.
    muito|Ele correu muito.|Muito é um advérbio nesta frase: intensifica a ação expressa pelo verbo.
    calmamente|A professora falou calmamente.|Calmamente é um advérbio de modo: informa como a professora falou.
  `);
  addWords('adverb', 3, `
    provavelmente|Provavelmente teremos aula.|Provavelmente é um advérbio: expressa dúvida ou probabilidade.
    jamais|Jamais esquecerei a lição.|Jamais é um advérbio: exprime negação, com o sentido de em nenhum momento.
    cuidadosamente|Ela revisou cuidadosamente.|Cuidadosamente é um advérbio de modo: informa como ela revisou.
    simultaneamente|Os dois chegaram simultaneamente.|Simultaneamente é um advérbio de tempo: indica que as ações ocorreram ao mesmo tempo.
    ali|A mochila ficou ali.|Ali é um advérbio de lugar: informa onde a mochila ficou.
  `);

  // 2. Regras e estado. Um único ciclo de animação controla todos os tempos.
  const ROUND_MS = 60000;
  const MAX_LEVEL = 8;
  const STORAGE_KEY = 'acerte-substantivo-v1';
  const SETTINGS_KEY = 'acerte-substantivo-som-v1';
  const MODES = {
    easy: { label: 'Fácil', rank: 1, count: 4, lifetime: 7000, spawn: 1150, minLife: 4000 },
    medium: { label: 'Médio', rank: 2, count: 6, lifetime: 5500, spawn: 850, minLife: 3300 },
    hard: { label: 'Difícil', rank: 3, count: 8, lifetime: 4200, spawn: 600, minLife: 2900 }
  };
  const TYPE_LABELS = { noun: 'Substantivo', verb: 'Verbo', adjective: 'Adjetivo', adverb: 'Advérbio' };
  const CARD_COLORS = [
    ['#efe9fe', '#dbcfef', '#d9cfea'], ['#fff2db', '#efddbc', '#e8d8ba'],
    ['#e5f3fa', '#caddE8', '#ccdde7'], ['#f7eaf3', '#e7d4e1', '#e5cfe0'],
    ['#eaf3eb', '#d0e2d0', '#ccdccc']
  ];
  const KEYS = '1234567890QWERTYUIOPASDFGHJKLZXCVBNM';
  const $ = (id) => document.getElementById(id);
  const dom = {};
  ['menu-screen','game-screen','result-screen','arena','word-layer','countdown','countdown-number',
    'score','lives','time','combo','best','level','level-note','time-fill','time-progress',
    'learning-feedback','feedback-icon','feedback-title','feedback-text','pause-dialog','arena-paused',
    'how-dialog','records-dialog','review-list'].forEach((id) => { dom[id] = $(id); });
  let selectedMode = 'easy';
  let game = null;
  let animationId = 0;
  let nextCardId = 1;
  let currentRecordMode = 'easy';
  let storageOK = true;
  let recordData = loadRecords();
  let soundEnabled = loadSound();
  let audioContext = null;
  let currentFilter = 'all';

  // Dados locais são opcionais. Um erro de armazenamento nunca interrompe o jogo.
  function loadRecords() {
    const clean = { easy: [], medium: [], hard: [] };
    try {
      const raw = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
      if (!raw || typeof raw !== 'object') return clean;
      for (const mode of Object.keys(MODES)) {
        if (!Array.isArray(raw[mode])) continue;
        clean[mode] = raw[mode].filter((r) => r && Number.isInteger(r.score) && Math.abs(r.score) <= 1000000 &&
          Number.isInteger(r.hits) && r.hits >= 0 && Number.isInteger(r.combo) && r.combo >= 0 &&
          Number.isFinite(r.date) && r.date > 0 && r.date <= 8640000000000000)
          .map((r) => ({ score: r.score, hits: r.hits, combo: r.combo, date: r.date }))
          .sort((a, b) => b.score - a.score || b.combo - a.combo || b.date - a.date).slice(0, 5);
      }
    } catch (_) { /* Dados inválidos são ignorados; a próxima gravação os substitui. */ }
    return clean;
  }
  function loadSound() {
    try { return localStorage.getItem(SETTINGS_KEY) === 'true'; } catch (_) { return false; }
  }
  function bestFor(mode) { return Math.max(0, ...recordData[mode].map((r) => r.score)); }
  function saveResult() {
    recordData[game.mode].push({ score: game.score, hits: game.hits, combo: game.maxCombo, date: Date.now() });
    recordData[game.mode].sort((a, b) => b.score - a.score || b.combo - a.combo || b.date - a.date);
    recordData[game.mode] = recordData[game.mode].slice(0, 5);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(recordData)); storageOK = true; }
    catch (_) { storageOK = false; }
  }

  // 3. Sons sintetizados, sem arquivos remotos. O áudio só é iniciado por gesto.
  function prepareAudio() {
    if (!soundEnabled) return;
    try {
      const Audio = window.AudioContext || window.webkitAudioContext;
      if (!Audio) return;
      if (!audioContext) audioContext = new Audio();
      if (audioContext.state === 'suspended') audioContext.resume().catch(() => {});
    } catch (_) { audioContext = null; }
  }
  function tone(freq, offset, duration, volume = 0.08, wave = 'sine') {
    if (!soundEnabled || !audioContext || audioContext.state !== 'running') return;
    try {
      const oscillator = audioContext.createOscillator();
      const gain = audioContext.createGain();
      const start = audioContext.currentTime + offset;
      oscillator.type = wave;
      oscillator.frequency.setValueAtTime(freq, start);
      gain.gain.setValueAtTime(0, start);
      gain.gain.linearRampToValueAtTime(volume, start + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.001, start + duration);
      oscillator.connect(gain); gain.connect(audioContext.destination);
      oscillator.start(start); oscillator.stop(start + duration + 0.03);
      oscillator.onended = () => { oscillator.disconnect(); gain.disconnect(); };
    } catch (_) { /* O som é um extra: mantenha a partida utilizável. */ }
  }
  function playSound(kind) {
    if (kind === 'hit') { tone(660, 0, 0.12); tone(880, 0.08, 0.15); }
    if (kind === 'error') { tone(180, 0, 0.14, 0.055, 'triangle'); tone(120, 0.14, 0.2, 0.06, 'triangle'); }
    if (kind === 'life') tone(90, 0.24, 0.25, 0.06, 'triangle');
    if (kind === 'bonus') [523, 659, 784, 1047].forEach((f, i) => tone(f, i * 0.07, 0.19));
    if (kind === 'end') [523, 659, 784, 1047].forEach((f, i) => tone(f, i * 0.14, 0.25, 0.055));
    if (kind === 'countdown') tone(440, 0, 0.09, 0.035);
  }
  function updateSoundUI() {
    $('sound-toggle').setAttribute('aria-pressed', String(soundEnabled));
    $('sound-toggle').setAttribute('aria-label', soundEnabled ? 'Desativar som' : 'Ativar som');
    $('sound-label').textContent = soundEnabled ? 'Som ligado' : 'Som desligado';
    $('sound-toggle').querySelector('use').setAttribute('href', soundEnabled ? '#i-sound' : '#i-mute');
  }

  // 4. Interface e revisão educativa. Conteúdo variável sempre usa textContent.
  function showScreen(name) {
    document.body.dataset.screen = name;
    ['menu', 'game', 'result'].forEach((screen) => { dom[screen + '-screen'].hidden = screen !== name; });
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
  function updateMenu() {
    $('menu-difficulty').textContent = MODES[selectedMode].label.toLocaleLowerCase('pt-BR');
    $('menu-best').replaceChildren(document.createTextNode(bestFor(selectedMode) + ' '));
    const small = document.createElement('small'); small.textContent = 'pts'; $('menu-best').append(small);
  }
  function showFeedback(title, text, kind = '') {
    dom['learning-feedback'].className = 'learning-feedback' + (kind ? ' ' + kind : '');
    dom['feedback-title'].textContent = title;
    dom['feedback-text'].textContent = text;
    dom['feedback-icon'].textContent = kind === 'good' ? '✓' : kind === 'bad' ? '×' : '✦';
  }
  function updateHUD() {
    dom.score.textContent = game.score;
    dom.combo.textContent = game.combo;
    dom.best.textContent = Math.max(game.bestBefore, game.score);
    $('mobile-best').textContent = Math.max(game.bestBefore, game.score);
    dom.level.textContent = 'NÍVEL ' + game.level;
    dom['level-note'].textContent = game.level === MAX_LEVEL ? 'Velocidade máxima. Você consegue!' : 'Próximo nível em ' + (game.level * 100) + ' pts';
    dom.lives.replaceChildren();
    for (let i = 0; i < 3; i++) {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.classList.add('icon', 'life');
      if (i >= game.lives) svg.classList.add('lost');
      svg.setAttribute('aria-hidden', 'true');
      const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
      use.setAttribute('href', '#i-heart'); svg.append(use); dom.lives.append(svg);
    }
    dom.lives.setAttribute('aria-label', game.lives + (game.lives === 1 ? ' vida restante' : ' vidas restantes'));
    renderTime();
  }
  function renderTime() {
    const ms = Math.max(0, ROUND_MS - game.elapsed);
    const seconds = Math.ceil(ms / 1000);
    if (dom.time.textContent !== String(seconds)) {
      dom.time.textContent = seconds;
      dom['time-progress'].setAttribute('aria-valuenow', seconds);
    }
    dom['time-fill'].style.width = (ms / ROUND_MS * 100) + '%';
    dom['time-progress'].classList.toggle('urgent', seconds <= 10);
    document.querySelector('.time-stat').classList.toggle('urgent', seconds <= 10);
  }
  function logAnswer(entry, outcome) {
    let item = game.review.get(entry.id);
    if (!item) { item = { entry, hit: 0, error: 0, missed: 0 }; game.review.set(entry.id, item); }
    item[outcome] += 1;
  }
  function element(tag, className, text) {
    const node = document.createElement(tag); if (className) node.className = className;
    if (text !== undefined) node.textContent = text; return node;
  }
  function renderReview(filter = 'all') {
    currentFilter = filter;
    document.querySelectorAll('[data-filter]').forEach((button) => {
      const active = button.dataset.filter === filter;
      button.classList.toggle('active', active); button.setAttribute('aria-pressed', String(active));
    });
    dom['review-list'].replaceChildren();
    const items = [...game.review.values()].filter((item) => filter === 'all' || item[filter] > 0);
    items.sort((a, b) => Number(b.error > 0) - Number(a.error > 0) || a.entry.word.localeCompare(b.entry.word, 'pt-BR'));
    for (const item of items) {
      const { entry } = item;
      const card = element('article', 'review-card');
      const header = element('div', 'review-card-header');
      header.append(element('h3', '', entry.word), element('span', 'word-type', TYPE_LABELS[entry.type]));
      card.append(header, element('p', 'review-context', '“' + entry.context + '”'), element('p', 'review-explanation', entry.explanation));
      const tags = element('div', 'review-tags');
      if (item.hit) tags.append(element('span', 'tag-hit', '✓ ' + item.hit + (item.hit === 1 ? ' acerto' : ' acertos')));
      if (item.error) tags.append(element('span', 'tag-error', '× ' + item.error + (item.error === 1 ? ' erro' : ' erros')));
      if (item.missed) tags.append(element('span', 'tag-missed', '↷ Passou ' + item.missed + (item.missed === 1 ? ' vez' : ' vezes')));
      card.append(tags); dom['review-list'].append(card);
    }
    if (!items.length) dom['review-list'].append(element('p', 'empty-state', filter === 'all' ? 'Nenhuma palavra para revisar ainda. Jogue uma rodada e faça suas descobertas!' : 'Nenhuma palavra nesta categoria.'));
  }
  function renderRecords(mode) {
    currentRecordMode = mode;
    document.querySelectorAll('[data-record-mode]').forEach((button) => {
      const active = button.dataset.recordMode === mode;
      button.classList.toggle('active', active); button.setAttribute('aria-pressed', String(active));
    });
    const container = $('records-content'); container.replaceChildren();
    recordData[mode].forEach((record, i) => {
      const row = element('div', 'record-row');
      const details = element('div', 'record-detail');
      details.append(element('strong', '', record.hits + ' acertos · combo ' + record.combo + '×'));
      details.append(element('span', '', new Date(record.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })));
      const points = element('span', 'record-points', record.score); points.append(element('small', '', 'pts'));
      row.append(element('span', 'record-rank', String(i + 1).padStart(2, '0')), details, points); container.append(row);
    });
    if (!recordData[mode].length) container.append(element('p', 'empty-state', 'Seu primeiro recorde começa com uma partida. Vamos jogar?'));
    $('records-storage-note').textContent = storageOK ? 'Se você apagar os dados do navegador, os recordes também serão apagados.' : 'O navegador bloqueou o salvamento. Por enquanto, os resultados ficam só nesta sessão.';
  }

  // 5. Arena. Sorteamos posições em uma grade invisível, com pequenos deslocamentos.
  // A célula garante separação; a cor é sorteada sem consultar a classe gramatical.
  function calculateLayout() {
    const width = dom.arena.clientWidth;
    const height = dom.arena.clientHeight;
    const columns = width < 470 ? 2 : width < 740 ? 3 : 4;
    // Fontes ampliadas também aumentam a altura mínima reservada aos cartões.
    const fontScale = Math.max(1, parseFloat(getComputedStyle(document.documentElement).fontSize) / 16);
    const rows = Math.max(2, Math.min(4, Math.floor(height / ((width < 470 ? 132 : 110) * fontScale))));
    return { width, height, columns, rows, total: columns * rows, cellW: width / columns, cellH: height / rows };
  }
  function placeCard(card) {
    const layout = game.layout;
    const column = card.slot % layout.columns;
    const row = Math.floor(card.slot / layout.columns);
    const width = Math.max(100, layout.cellW - 22);
    const height = Math.max(92, Math.min(110, layout.cellH - 20));
    card.node.style.width = width + 'px';
    card.node.style.minHeight = height + 'px';
    card.node.style.left = (column * layout.cellW + 11 + card.jitterX) + 'px';
    card.node.style.top = (row * layout.cellH + (layout.cellH - height) / 2 + card.jitterY) + 'px';
    card.node.querySelector('.key-label').textContent = KEYS[card.slot];
    card.node.setAttribute('aria-keyshortcuts', KEYS[card.slot]);
  }
  function resizeArena() {
    if (!game || !['playing', 'paused', 'countdown'].includes(game.status)) return;
    game.layout = calculateLayout();
    // Reduzir a janela não é um erro do jogador: retire excedentes sem penalidade.
    const cards = [...game.cards.values()];
    cards.forEach((card, index) => {
      if (index >= game.layout.total) { removeCard(card); return; }
      card.slot = index; placeCard(card);
    });
  }
  function currentSettings() {
    const config = MODES[game.mode];
    const step = game.level - 1;
    return {
      count: Math.min(game.layout.total, config.count + Math.floor(step / 2)),
      lifetime: Math.max(config.minLife, config.lifetime - step * 300),
      spawn: Math.max(360, config.spawn - step * 70)
    };
  }
  function pickWord() {
    const active = new Set([...game.cards.values()].map((card) => card.entry.id));
    const hasNoun = [...game.cards.values()].some((card) => card.state === 'active' && card.entry.type === 'noun');
    const nounWanted = !hasNoun || Math.random() < 0.55;
    const available = WORDS.filter((entry) => entry.level <= MODES[game.mode].rank && !active.has(entry.id) && (entry.type === 'noun') === nounWanted);
    const fresh = available.filter((entry) => !game.recent.includes(entry.id));
    const pool = fresh.length ? fresh : available;
    if (!pool.length) return null;
    const entry = pool[Math.floor(Math.random() * pool.length)];
    game.recent.push(entry.id); if (game.recent.length > 18) game.recent.shift();
    return entry;
  }
  function spawnCard() {
    const settings = currentSettings();
    if (game.cards.size >= settings.count) return;
    const usedSlots = new Set([...game.cards.values()].map((card) => card.slot));
    const slots = Array.from({ length: game.layout.total }, (_, i) => i).filter((i) => !usedSlots.has(i));
    if (!slots.length) return;
    const entry = pickWord(); if (!entry) return;
    const node = element('button', 'word-card'); node.type = 'button';
    node.setAttribute('aria-label', entry.word + '. ' + entry.context);
    const word = element('span', 'word', entry.word);
    const context = element('span', 'word-context', entry.context);
    const key = element('span', 'key-label'); key.setAttribute('aria-hidden', 'true');
    const progress = element('span', 'card-time'); progress.setAttribute('aria-hidden', 'true');
    node.append(word, context, key, progress);
    const palette = CARD_COLORS[Math.floor(Math.random() * CARD_COLORS.length)];
    node.style.setProperty('--card-bg', palette[0]); node.style.setProperty('--card-line', palette[1]); node.style.setProperty('--card-shadow', palette[2]);
    const card = { id: nextCardId++, entry, node, progress, state: 'active',
      slot: slots[Math.floor(Math.random() * slots.length)],
      jitterX: Math.random() * 6 - 3, jitterY: Math.random() * 8 - 4,
      born: game.elapsed, lifetime: settings.lifetime + Math.random() * 450, removeAt: 0 };
    node.addEventListener('click', () => chooseCard(card.id));
    game.cards.set(card.id, card); dom['word-layer'].append(node); placeCard(card);
  }
  function removeCard(card) { card.node.remove(); game.cards.delete(card.id); }
  function expireCard(card) {
    if (card.entry.type === 'noun') {
      game.missed++; logAnswer(card.entry, 'missed');
      if (game.combo > 0) {
        game.combo = 0; updateHUD();
        showFeedback('Um substantivo passou', '“' + card.entry.word + '” encerrou seu combo. Você não perdeu pontos nem vidas.');
      }
    }
    removeCard(card);
  }

  // 6. Pontuação atômica: bloqueie o cartão antes de alterar qualquer contador.
  function chooseCard(id) {
    if (!game || game.status !== 'playing') return;
    advance(performance.now());
    if (game.status !== 'playing') return;
    const card = game.cards.get(id);
    if (!card || card.state !== 'active') return;
    if (game.elapsed - card.born >= card.lifetime) { expireCard(card); return; }
    card.state = 'resolved'; card.node.disabled = true;
    card.node.classList.add('resolved'); card.removeAt = game.elapsed + 650;
    const entry = card.entry;
    if (entry.type === 'noun') {
      game.hits++; game.combo++; game.maxCombo = Math.max(game.maxCombo, game.combo);
      const bonus = game.combo % 5 === 0 ? 15 : 0;
      game.score += 10 + bonus; logAnswer(entry, 'hit');
      card.node.classList.add('correct');
      card.node.querySelector('.word-context').textContent = bonus ? '✓ +25 · BÔNUS!' : '✓ +10 pontos';
      if (bonus) { playSound('bonus'); showFeedback('Combo de ' + game.combo + '! +15 de bônus', entry.explanation, 'good'); }
      else { playSound('hit'); if (game.hits <= 2 || game.hits % 3 === 0) showFeedback(entry.word + ' é substantivo!', entry.explanation, 'good'); }
      const nextLevel = Math.min(MAX_LEVEL, Math.floor(game.score / 100) + 1);
      if (nextLevel > game.level) {
        game.level = nextLevel;
        showFeedback('Nível ' + game.level + '! Vamos acelerar um pouco.', entry.explanation, 'good');
      }
    } else {
      game.score -= 5; game.errors++; game.lives--; game.combo = 0; logAnswer(entry, 'error');
      card.node.classList.add('wrong');
      card.node.querySelector('.word-context').textContent = '× −5 pontos · −1 vida';
      showFeedback('Não é substantivo nesta frase!', entry.explanation, 'bad');
      playSound('error'); playSound('life');
    }
    updateHUD();
    if (game.lives <= 0) finishGame('lives');
  }

  // O relógio monotônico evita a deriva de vários setInterval e ignora a pausa.
  function advance(now) {
    if (!game) return;
    const delta = Math.max(0, now - game.lastTick); game.lastTick = now;
    if (game.status === 'countdown') {
      game.countdown -= delta;
      const numeral = Math.max(1, Math.ceil(game.countdown / 1000));
      if (dom['countdown-number'].textContent !== String(numeral)) {
        dom['countdown-number'].textContent = numeral; playSound('countdown');
      }
      if (game.countdown <= 0) {
        game.status = 'playing'; dom.countdown.hidden = true;
        for (let i = 0; i < currentSettings().count; i++) spawnCard();
        game.nextSpawn = currentSettings().spawn;
      }
      return;
    }
    if (game.status !== 'playing') return;
    game.elapsed = Math.min(ROUND_MS, game.elapsed + delta);
    renderTime();
    // Primeiro retire cartões cuja vida útil terminou, inclusive no último frame.
    for (const card of [...game.cards.values()]) {
      if (card.state === 'resolved') { if (game.elapsed >= card.removeAt) removeCard(card); continue; }
      const fraction = Math.max(0, 1 - (game.elapsed - card.born) / card.lifetime);
      card.progress.style.transform = 'scaleX(' + fraction + ')';
      card.node.classList.toggle('expiring', fraction < 0.2);
      if (fraction <= 0) expireCard(card);
    }
    if (game.elapsed >= ROUND_MS) { finishGame('time'); return; }
    if (game.elapsed >= game.nextSpawn) {
      spawnCard(); game.nextSpawn = game.elapsed + currentSettings().spawn;
    }
  }
  function frame(now) {
    animationId = 0;
    advance(now);
    if (game && ['countdown','playing','paused'].includes(game.status)) animationId = requestAnimationFrame(frame);
  }
  function startGame(mode = selectedMode) {
    if (!Object.prototype.hasOwnProperty.call(MODES, mode)) return false;
    cancelAnimationFrame(animationId);
    selectedMode = mode;
    document.querySelector('input[name="difficulty"][value="' + mode + '"]').checked = true;
    for (const dialog of document.querySelectorAll('dialog[open]')) dialog.close();
    dom['word-layer'].replaceChildren();
    game = { status: 'countdown', mode, score: 0, hits: 0, errors: 0, lives: 3, combo: 0,
      maxCombo: 0, missed: 0, level: 1, elapsed: 0, countdown: 3000,
      lastTick: performance.now(), cards: new Map(), review: new Map(), recent: [],
      layout: null, nextSpawn: 0, bestBefore: bestFor(mode), previousStatus: 'countdown' };
    showScreen('game'); game.layout = calculateLayout();
    $('game-difficulty').textContent = 'DESAFIO ' + MODES[mode].label.toLocaleUpperCase('pt-BR');
    dom.countdown.hidden = false; dom['countdown-number'].textContent = '3';
    dom['arena-paused'].hidden = true; dom['word-layer'].hidden = false;
    showFeedback('Dica de partida', 'Substantivos dão nome a seres, lugares, objetos, sentimentos e ideias. Leia a frase se ficar em dúvida.');
    updateHUD(); prepareAudio(); playSound('countdown');
    $('game-title').focus({ preventScroll: true });
    animationId = requestAnimationFrame(frame);
    return true;
  }
  function pauseGame() {
    if (!game || !['playing','countdown'].includes(game.status)) return false;
    advance(performance.now());
    if (!['playing','countdown'].includes(game.status)) return false;
    game.previousStatus = game.status; game.status = 'paused';
    dom['word-layer'].hidden = true; dom['arena-paused'].hidden = false;
    dom['pause-dialog'].showModal(); $('resume-button').focus(); return true;
  }
  function resumeGame() {
    if (!game || game.status !== 'paused' || document.hidden) return false;
    game.status = game.previousStatus; game.lastTick = performance.now();
    dom['pause-dialog'].close(); dom['word-layer'].hidden = false; dom['arena-paused'].hidden = true;
    $('pause-button').focus({ preventScroll: true }); prepareAudio(); return true;
  }
  function performanceMessage(accuracy) {
    if (!game.hits && !game.errors) return 'A primeira descoberta começa com um clique. Tente outra vez e procure os nomes!';
    if (!game.hits) return 'Você já deu o primeiro passo. Veja a revisão: substantivos dão nome, enquanto verbos indicam ações ou estados.';
    if (accuracy >= 90 && game.hits >= 15) return 'Olhar afiado! Você reconheceu muitos substantivos. Que tal tentar uma dificuldade maior?';
    if (accuracy >= 80) return 'Muito bem! Você está reconhecendo os substantivos. Continue praticando para aumentar sua sequência.';
    return 'Cada tentativa ensina. Reveja as palavras abaixo e procure o que dá nome a seres, coisas, sentimentos e ideias.';
  }
  function finishGame(reason) {
    if (!game || game.status === 'result') return;
    cancelAnimationFrame(animationId); animationId = 0;
    game.status = 'result';
    if (dom['pause-dialog'].open) dom['pause-dialog'].close();
    game.cards.forEach((card) => { card.node.disabled = true; });
    const accuracy = game.hits + game.errors ? Math.round(game.hits / (game.hits + game.errors) * 100) : 0;
    const newRecord = game.score > game.bestBefore;
    saveResult();
    $('result-reason').textContent = reason === 'lives' ? 'GAME OVER · AS VIDAS ACABARAM' : reason === 'time' ? 'TEMPO ESGOTADO!' : 'PARTIDA ENCERRADA';
    $('result-title').textContent = newRecord ? 'Seu novo recorde está aqui!' : reason === 'lives' ? 'Todo acerto começa com uma tentativa.' : 'Uma rodada, muitas descobertas.';
    $('result-message').textContent = performanceMessage(accuracy);
    $('final-score').textContent = game.score;
    $('final-hits').textContent = game.hits;
    $('final-errors').textContent = game.errors;
    $('final-combo').textContent = game.maxCombo + '×';
    $('final-accuracy').textContent = accuracy + '%';
    $('final-missed').textContent = game.missed;
    $('final-best').textContent = bestFor(game.mode);
    $('new-record').hidden = !newRecord;
    $('result-mode').textContent = MODES[game.mode].label + ' · ' + Math.floor(game.elapsed / 1000) + ' segundos jogados';
    $('storage-note').hidden = storageOK;
    $('storage-note').textContent = 'Seu navegador bloqueou o salvamento dos recordes. Você pode continuar jogando; os resultados ficam disponíveis nesta sessão.';
    renderReview('all'); updateMenu(); showScreen('result'); playSound('end');
    $('result-title').focus({ preventScroll: true });
  }
  function goHome() {
    cancelAnimationFrame(animationId); animationId = 0;
    if (game) game.status = 'menu';
    dom['word-layer'].replaceChildren();
    showScreen('menu'); updateMenu(); $('play-button').focus({ preventScroll: true });
  }

  // 7. Eventos: clique, toque, teclado, pausa automática e redimensionamento.
  document.querySelectorAll('input[name="difficulty"]').forEach((input) => input.addEventListener('change', () => { selectedMode = input.value; updateMenu(); }));
  $('play-button').addEventListener('click', () => startGame());
  $('replay-button').addEventListener('click', () => startGame(game.mode));
  $('home-button').addEventListener('click', goHome);
  $('pause-button').addEventListener('click', pauseGame);
  $('resume-button').addEventListener('click', resumeGame);
  $('quit-button').addEventListener('click', () => finishGame('quit'));
  dom['pause-dialog'].addEventListener('cancel', (event) => { event.preventDefault(); resumeGame(); });
  $('brand-link').addEventListener('click', (event) => {
    event.preventDefault();
    if (game && ['playing','countdown'].includes(game.status)) pauseGame(); else if (!game || game.status !== 'paused') goHome();
  });
  $('how-button').addEventListener('click', () => dom['how-dialog'].showModal());
  $('records-button').addEventListener('click', () => { renderRecords(selectedMode); dom['records-dialog'].showModal(); });
  document.querySelectorAll('[data-close]').forEach((button) => button.addEventListener('click', () => $(button.dataset.close).close()));
  document.querySelectorAll('[data-filter]').forEach((button) => button.addEventListener('click', () => renderReview(button.dataset.filter)));
  document.querySelectorAll('[data-record-mode]').forEach((button) => button.addEventListener('click', () => renderRecords(button.dataset.recordMode)));
  $('sound-toggle').addEventListener('click', () => {
    soundEnabled = !soundEnabled; updateSoundUI();
    try { localStorage.setItem(SETTINGS_KEY, String(soundEnabled)); } catch (_) { /* Preferência só nesta sessão. */ }
    if (soundEnabled) { prepareAudio(); playSound('hit'); }
    else if (audioContext && audioContext.state === 'running') audioContext.suspend().catch(() => {});
  });
  document.addEventListener('keydown', (event) => {
    if (event.repeat || event.ctrlKey || event.altKey || event.metaKey || !game) return;
    const key = event.key.toUpperCase();
    if (key === 'P' || key === 'ESCAPE') {
      if (game.status === 'paused') { event.preventDefault(); resumeGame(); }
      else if (['playing','countdown'].includes(game.status)) { event.preventDefault(); pauseGame(); }
      return;
    }
    if (game.status !== 'playing' || document.querySelector('dialog[open]')) return;
    const slot = KEYS.indexOf(key);
    if (slot < 0 || key.length !== 1) return;
    const card = [...game.cards.values()].find((item) => item.slot === slot && item.state === 'active');
    if (card) { event.preventDefault(); chooseCard(card.id); }
  });
  document.addEventListener('visibilitychange', () => { if (document.hidden) pauseGame(); });
  window.addEventListener('pagehide', () => pauseGame());
  if ('ResizeObserver' in window) new ResizeObserver(resizeArena).observe(dom.arena);
  else window.addEventListener('resize', resizeArena);

  // Integração progressiva: não é necessária para jogar em nenhum navegador.
  // As ações usam as mesmas funções da interface. Não expomos o gabarito da rodada.
  if (document.modelContext && typeof document.modelContext.registerTool === 'function') {
    const lifecycle = new AbortController();
    const register = (tool) => {
      try { Promise.resolve(document.modelContext.registerTool(tool, { signal: lifecycle.signal })).catch(() => {}); }
      catch (_) { /* API experimental e opcional. */ }
    };
    register({ name: 'read_game_status', title: 'Consultar partida', description: 'Consulta pontuação, tempo, vidas e dificuldade, sem revelar respostas.',
      inputSchema: { type: 'object', properties: {}, additionalProperties: false }, annotations: { readOnlyHint: true },
      execute(input) {
        if (!input || typeof input !== 'object' || Object.keys(input).length) throw new Error('Use um objeto vazio.');
        return game ? { status: game.status, difficulty: game.mode, score: game.score, lives: game.lives, seconds: Math.ceil((ROUND_MS - game.elapsed) / 1000), combo: game.combo } : { status: 'menu', difficulty: selectedMode };
      }
    });
    register({ name: 'start_noun_game', title: 'Iniciar partida', description: 'Inicia uma rodada de 60 segundos na dificuldade escolhida. Só funciona no menu ou após o resultado.',
      inputSchema: { type: 'object', properties: { difficulty: { type: 'string', enum: ['easy','medium','hard'] } }, required: ['difficulty'], additionalProperties: false }, annotations: { readOnlyHint: false },
      execute(input) {
        if (!input || typeof input !== 'object' || Object.keys(input).some((key) => key !== 'difficulty') || !Object.prototype.hasOwnProperty.call(MODES, input.difficulty)) throw new Error('Dificuldade inválida.');
        if (game && ['playing','paused','countdown'].includes(game.status)) throw new Error('Já existe uma partida em andamento.');
        startGame(input.difficulty); return { status: game.status, difficulty: game.mode };
      }
    });
    window.addEventListener('pagehide', () => lifecycle.abort(), { once: true });
  }
  updateSoundUI(); updateMenu();
})();
