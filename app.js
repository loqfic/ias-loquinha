/*
  Loquinha — lógica do site. O conteúdo vem de obras.js e perfis.js.
  Rotas: #inicio · #aus · #fanfics · #oneshots
         #au/ID  (abas: #au/ID/personagens · #au/ID/infos)  · #au/ID/cap/N
         #fanfic/ID (mesmas abas) · #fanfic/ID/cap/N
         #oneshot/ID
*/
(function () {
  'use strict';

  var PALAVRAS_POR_MINUTO = 200;
  var FONTE_MIN = 14, FONTE_MAX = 26, FONTE_PASSO = 2, FONTE_PADRAO = 18;
  var $ = function (s, el) { return (el || document).querySelector(s); };
  var $$ = function (s, el) { return Array.prototype.slice.call((el || document).querySelectorAll(s)); };
  var guardar = {
    ler: function (k, p) { try { var v = localStorage.getItem(k); return v === null ? p : JSON.parse(v); } catch (e) { return p; } },
    salvar: function (k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  };
  var NOMES = {
    au: { um: 'AU', varios: 'AUs', rota: 'aus', emoji: '🐆' },
    fanfic: { um: 'Fanfic', varios: 'Fanfics', rota: 'fanfics', emoji: '🦌' },
    oneshot: { um: 'Oneshot', varios: 'Oneshots', rota: 'oneshots', emoji: '🥕' }
  };

  /* ---------- Ícones (desenhos originais) ---------- */

  var ICONES = {
    cenoura:
      '<svg viewBox="0 0 64 64" aria-hidden="true">' +
        '<path d="M33 20c-2-7 1-13 6-16-1 6 0 10 3 13 3-4 8-6 13-5-3 5-8 8-14 9z" fill="#1F8A5B"/>' +
        '<path d="M27 21c7-3 15 1 16 9 1 6-13 27-22 31-3 1-5-1-4-4 3-10 3-32 10-36z" fill="#F26B21"/>' +
        '<path d="M25 33l6 2M23 42l5 2M22 50l4 1" stroke="#C4501A" stroke-width="2.4" stroke-linecap="round"/>' +
      '</svg>',
    onca:
      '<svg viewBox="0 0 64 64" aria-hidden="true">' +
        '<circle cx="15" cy="17" r="8" fill="#E8912E"/><circle cx="49" cy="17" r="8" fill="#E8912E"/>' +
        '<circle cx="15" cy="17" r="4" fill="#5A3416"/><circle cx="49" cy="17" r="4" fill="#5A3416"/>' +
        '<ellipse cx="32" cy="35" rx="23" ry="21" fill="#F2A33A"/>' +
        '<g fill="#5A3416"><circle cx="18" cy="30" r="2.6"/><circle cx="46" cy="30" r="2.6"/><circle cx="23" cy="21" r="2.2"/><circle cx="41" cy="21" r="2.2"/><circle cx="32" cy="17" r="2.4"/><circle cx="14" cy="40" r="2"/><circle cx="50" cy="40" r="2"/></g>' +
        '<ellipse cx="32" cy="44" rx="11" ry="8.5" fill="#FFF3DF"/>' +
        '<circle cx="24" cy="33" r="3" fill="#1C140E"/><circle cx="40" cy="33" r="3" fill="#1C140E"/>' +
        '<circle cx="25" cy="32" r="1" fill="#fff"/><circle cx="41" cy="32" r="1" fill="#fff"/>' +
        '<path d="M28.5 40h7l-3.5 3.5z" fill="#3A2213"/>' +
        '<path d="M32 43.5v3M32 46.5c-2 2-4 2-5.5 1M32 46.5c2 2 4 2 5.5 1" stroke="#3A2213" stroke-width="1.6" fill="none" stroke-linecap="round"/>' +
      '</svg>',
    veado:
      '<svg viewBox="0 0 64 64" aria-hidden="true">' +
        '<path d="M22 20c-3-5-4-10-2-15M20 10c-3-1-5-3-6-6M21 14c-4 0-7-1-9-3" stroke="#7A4E2B" stroke-width="2.8" fill="none" stroke-linecap="round"/>' +
        '<path d="M42 20c3-5 4-10 2-15M44 10c3-1 5-3 6-6M43 14c4 0 7-1 9-3" stroke="#7A4E2B" stroke-width="2.8" fill="none" stroke-linecap="round"/>' +
        '<path d="M15 25c-6-1-10 2-11 6 5 1 9 0 12-3z" fill="#C98648"/><path d="M49 25c6-1 10 2 11 6-5 1-9 0-12-3z" fill="#C98648"/>' +
        '<path d="M32 19c10 0 16 7 15 17-1 9-7 21-15 21s-14-12-15-21c-1-10 5-17 15-17z" fill="#D9995A"/>' +
        '<path d="M32 38c5 0 8 4 8 9 0 6-4 10-8 10s-8-4-8-10c0-5 3-9 8-9z" fill="#F5DDBF"/>' +
        '<circle cx="25" cy="32" r="2.8" fill="#1C140E"/><circle cx="39" cy="32" r="2.8" fill="#1C140E"/>' +
        '<circle cx="26" cy="31" r=".9" fill="#fff"/><circle cx="40" cy="31" r=".9" fill="#fff"/>' +
        '<ellipse cx="32" cy="48" rx="3.6" ry="2.6" fill="#2A1A10"/>' +
        '<circle cx="21" cy="40" r="2.4" fill="#F28C6B" opacity=".5"/><circle cx="43" cy="40" r="2.4" fill="#F28C6B" opacity=".5"/>' +
      '</svg>'
  };
  function icone(n) { return ICONES[n] || ICONES.cenoura; }
  function pintarIcones(raiz) { $$('[data-icone]', raiz).forEach(function (el) { el.innerHTML = icone(el.getAttribute('data-icone')); }); }

  /* ---------- Texto ---------- */

  function escapar(s) {
    return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; });
  }
  function formatar(s) {
    return escapar(s)
      .replace(/\*\*(?=\S)([^*\n]+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(?=\S)([^*\n]+?)\*/g, '<em>$1</em>')
      .replace(/(^|[\s(])@([a-z0-9_.]+)/gi, '$1<span class="mencao">@$2</span>');
  }
  function contarPalavras(t) { var m = String(t).match(/[\p{L}\p{N}]+(?:[-'’][\p{L}\p{N}]+)*/gu); return m ? m.length : 0; }
  function numeroBR(n) { return Number(n).toLocaleString('pt-BR'); }
  function minutosDe(p) { return Math.max(1, Math.ceil(p / PALAVRAS_POR_MINUTO)); }
  var ehDivisor = function (l) { return /^(\*\s*){3,}$/.test(l) || /^\[(\.{3}|…)\]$/.test(l); };
  function divisor() { return '<div class="divisor" role="separator"><span data-icone="cenoura"></span></div>'; }

  function prosaHTML(texto) {
    var html = [], atual = [];
    function fechar() { if (atual.length) html.push('<p>' + atual.map(formatar).join('<br>') + '</p>'); atual = []; }
    String(texto).replace(/\r\n?/g, '\n').split('\n').forEach(function (b) {
      var l = b.trim();
      if (!l) { fechar(); return; }
      if (ehDivisor(l)) { fechar(); html.push(divisor()); return; }
      if (atual.length && /^[—–]/.test(l)) fechar();
      atual.push(l);
    });
    fechar();
    return html.join('\n');
  }
  function dataBR(iso) {
    var d = new Date(iso + 'T12:00:00');
    return isNaN(d) ? '' : d.toLocaleDateString('pt-BR', { day: 'numeric', month: 'short', year: 'numeric' });
  }
  function horaBR(min) { return new Date(Date.now() + min * 60000).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }); }

  /* ---------- AU: leitura da marcação ---------- */

  function lerAU(texto) {
    var blocos = [], linhas = [];
    function fechar() {
      if (!linhas.length) return;
      var primeira = linhas[0], resto = linhas.slice(1), m;
      if ((m = primeira.match(/^(tweet|resposta)\s+@([\w.]+)\s*(?:\|\s*(.+))?$/i))) {
        var img = null, corpo = [];
        resto.forEach(function (l) { var mi = l.match(/^imagem:\s*(.+)$/i); if (mi) img = mi[1].trim(); else corpo.push(l); });
        blocos.push({ tipo: m[1].toLowerCase(), autor: m[2].toLowerCase(), quando: (m[3] || '').trim(), texto: corpo.join('\n'), imagem: img });
      } else if ((m = primeira.match(/^conversa\s+@([\w.]+)\s*(?:\|\s*(.+))?$/i))) {
        var msgs = [];
        resto.forEach(function (l) {
          var mm = l.match(/^@([\w.]+)\s*:\s*(.*)$/);
          if (mm) msgs.push({ autor: mm[1].toLowerCase(), texto: mm[2] });
          else if (msgs.length) msgs[msgs.length - 1].texto += '\n' + l;
        });
        blocos.push({ tipo: 'conversa', dona: m[1].toLowerCase(), titulo: (m[2] || '').trim(), mensagens: msgs });
      } else if ((m = primeira.match(/^imagem\s+([^|]+?)\s*(?:\|\s*(.+))?$/i)) && resto.length === 0) {
        blocos.push({ tipo: 'imagem', arquivo: m[1].trim(), legenda: (m[2] || '').trim() });
      } else if (linhas.length === 1 && ehDivisor(primeira)) {
        blocos.push({ tipo: 'divisor' });
      } else {
        blocos.push({ tipo: 'narracao', texto: linhas.join('\n') });
      }
      linhas = [];
    }
    String(texto).replace(/\r\n?/g, '\n').split('\n').forEach(function (b) { var l = b.trim(); if (!l) fechar(); else linhas.push(l); });
    fechar();
    return blocos;
  }

  /* ---------- Dados ---------- */

  var perfisPadrao = {};
  (typeof PERFIS !== 'undefined' ? PERFIS : []).forEach(function (p) { if (p && p.id) perfisPadrao[String(p.id).toLowerCase()] = p; });

  var obras = (typeof OBRAS !== 'undefined' && Array.isArray(OBRAS) ? OBRAS : [])
    .filter(function (o) { return o && o.id; })
    .map(function (o) {
      var tipo = String(o.tipo || 'oneshot').toLowerCase();
      if (!NOMES[tipo]) tipo = 'oneshot';
      var obra = {
        id: String(o.id), tipo: tipo, titulo: String(o.titulo || 'Sem título'), sinopse: String(o.sinopse || ''),
        capa: o.capa || '', icone: o.icone || (tipo === 'au' ? 'onca' : tipo === 'fanfic' ? 'veado' : 'cenoura'),
        autora: String(o.autora || ''), status: String(o.status || ''), tags: (o.tags || []).map(String),
        maior18: !!o.maior18, data: o.data || '', infos: String(o.infos || ''),
        personagens: (o.personagens || []).filter(function (p) { return p && (p.id || p.nome); }),
        mapa: {}
      };
      obra.personagens.forEach(function (p) { obra.mapa[String(p.id || p.nome).toLowerCase()] = p; });
      if (tipo === 'oneshot') {
        obra.texto = String(o.texto || '');
        obra.palavras = contarPalavras(obra.texto);
      } else {
        var caps = Array.isArray(o.capitulos) && o.capitulos.length ? o.capitulos : (o.texto ? [{ numero: 1, titulo: obra.titulo, texto: o.texto }] : []);
        obra.capitulos = caps.map(function (c, i) {
          var texto = String(c.texto || ''), blocos = tipo === 'au' ? lerAU(texto) : null;
          return {
            numero: Number(c.numero) || i + 1, titulo: String(c.titulo || ''), texto: texto, blocos: blocos,
            palavras: contarPalavras(texto),
            posts: blocos ? blocos.filter(function (b) { return b.tipo !== 'narracao' && b.tipo !== 'divisor'; }).length : 0
          };
        }).sort(function (a, b) { return a.numero - b.numero; });
        obra.palavras = obra.capitulos.reduce(function (s, c) { return s + c.palavras; }, 0);
      }
      obra.minutos = minutosDe(obra.palavras);
      return obra;
    })
    .sort(function (a, b) { return String(b.data).localeCompare(String(a.data)); });

  function acharObra(id) { return obras.find(function (o) { return o.id === id; }); }
  function linkObra(o) { return '#' + o.tipo + '/' + encodeURIComponent(o.id); }
  function tituloCap(c) { return c.titulo ? c.titulo : 'Capítulo ' + c.numero; }

  function perfil(id, obra) {
    var p = (obra && obra.mapa[id]) || perfisPadrao[id];
    if (p) return { nome: p.nome || id, arroba: p.arroba || '@' + id, foto: p.foto || '', cor: p.cor || '#8A7A6E', verificado: !!p.verificado, papel: p.papel || '', descricao: p.descricao || '' };
    return { nome: id.charAt(0).toUpperCase() + id.slice(1), arroba: '@' + id, foto: '', cor: '#8A7A6E' };
  }
  function avatar(p, classe) {
    var ini = escapar(String(p.nome || '?').replace(/[^\p{L}\p{N}]/gu, '').charAt(0).toUpperCase() || '?');
    return '<span class="avatar ' + (classe || '') + '" style="--cor:' + escapar(p.cor || '#8A7A6E') + '">' +
      '<span class="avatar-ini">' + ini + '</span>' +
      (p.foto ? '<img src="' + escapar(p.foto) + '" alt="" loading="lazy" onload="this.parentNode.classList.add(\'tem-foto\')" onerror="this.remove()">' : '') +
    '</span>';
  }

  /* ---------- AU: tweets e conversas ---------- */

  function semente(s) { var h = 2166136261; for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
  function numeroCurto(n) { return n >= 1000 ? (n / 1000).toLocaleString('pt-BR', { maximumFractionDigits: 1 }) + ' mil' : String(n); }
  var SELO = '<svg class="selo" viewBox="0 0 24 24" aria-label="verificado"><path d="M12 2l2.4 2.1 3.2-.4.9 3.1 2.8 1.6-1.1 3 1.1 3-2.8 1.6-.9 3.1-3.2-.4L12 22l-2.4-2.1-3.2.4-.9-3.1-2.8-1.6 1.1-3-1.1-3 2.8-1.6.9-3.1 3.2.4z" fill="#F26B21"/><path d="M8 12.2l2.6 2.6L16.2 9" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var IC = {
    resp: '<svg viewBox="0 0 24 24"><path d="M4 5h16v11H9l-5 4z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',
    rt: '<svg viewBox="0 0 24 24"><path d="M7 7h10v6M17 17H7v-6M14 10l3 3 3-3M10 14l-3-3-3 3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    curt: '<svg viewBox="0 0 24 24"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>'
  };

  function tweetHTML(b, ligado, obra) {
    var p = perfil(b.autor, obra), h = semente(b.autor + b.texto);
    var curt = 8 + (h % 4200), rt = 1 + ((h >>> 8) % 900), resp = (h >>> 16) % 120;
    return '<article class="tweet' + (b.tipo === 'resposta' ? ' resposta' : '') + (ligado ? ' ligado' : '') + '">' +
      '<div class="tweet-lado">' + avatar(p, 'avatar-tweet') + '<span class="tweet-fio" aria-hidden="true"></span></div>' +
      '<div class="tweet-corpo">' +
        '<header class="tweet-topo"><strong>' + escapar(p.nome) + '</strong>' + (p.verificado ? SELO : '') +
          '<span class="tweet-arroba">' + escapar(p.arroba) + (b.quando ? ' · ' + escapar(b.quando) : '') + '</span></header>' +
        '<div class="tweet-texto">' + b.texto.split('\n').map(formatar).join('<br>') + '</div>' +
        (b.imagem ? '<img class="tweet-img" src="' + escapar(b.imagem) + '" alt="" loading="lazy" onerror="this.remove()">' : '') +
        '<footer class="tweet-acoes" aria-hidden="true">' +
          '<span>' + IC.resp + resp + '</span><span>' + IC.rt + numeroCurto(rt) + '</span>' +
          '<button type="button" class="curtir" data-n="' + curt + '" tabindex="-1">' + IC.curt + '<b>' + numeroCurto(curt) + '</b></button>' +
        '</footer>' +
      '</div>' +
    '</article>';
  }

  function conversaHTML(b, obra) {
    var dona = b.dona, outros = [], ultimo = null;
    b.mensagens.forEach(function (m) { if (m.autor !== dona && outros.indexOf(m.autor) < 0) outros.push(m.autor); });
    var titulo = b.titulo || (outros.length ? outros.map(function (o) { return perfil(o, obra).nome; }).join(', ') : perfil(dona, obra).nome);
    var grupo = outros.length > 1;
    var msgs = b.mensagens.map(function (m) {
      var minha = m.autor === dona, p = perfil(m.autor, obra);
      var nome = grupo && !minha && ultimo !== m.autor ? '<span class="msg-nome" style="color:' + escapar(p.cor) + '">' + escapar(p.nome) + '</span>' : '';
      ultimo = m.autor;
      return '<div class="msg ' + (minha ? 'minha' : 'dela') + '">' + nome + m.texto.split('\n').map(formatar).join('<br>') + '</div>';
    }).join('');
    var principal = outros.length === 1 ? perfil(outros[0], obra) : { nome: titulo, cor: '#1F8A5B' };
    return '<figure class="conversa">' +
      '<div class="conversa-topo"><span class="conversa-voltar" aria-hidden="true">‹</span>' + avatar(principal, 'avatar-conversa') +
        '<span class="conversa-titulo"><strong>' + escapar(titulo) + '</strong><small>' + (grupo ? (outros.length + 1) + ' participantes' : 'online') + '</small></span></div>' +
      '<div class="conversa-msgs">' + msgs + '</div>' +
      '<figcaption class="visualmente-oculto">Conversa no celular de ' + escapar(perfil(dona, obra).nome) + '</figcaption>' +
    '</figure>';
  }

  function auHTML(blocos, obra) {
    return blocos.map(function (b, i) {
      var prox = blocos[i + 1];
      if (b.tipo === 'tweet' || b.tipo === 'resposta') return tweetHTML(b, prox && prox.tipo === 'resposta', obra);
      if (b.tipo === 'conversa') return conversaHTML(b, obra);
      if (b.tipo === 'imagem') return '<figure class="au-imagem"><img src="' + escapar(b.arquivo) + '" alt="" loading="lazy" onerror="this.parentNode.remove()">' + (b.legenda ? '<figcaption>' + formatar(b.legenda) + '</figcaption>' : '') + '</figure>';
      if (b.tipo === 'divisor') return divisor();
      return '<p class="narracao">' + b.texto.split('\n').map(formatar).join('<br>') + '</p>';
    }).join('');
  }

  /* ---------- Capas e selos ---------- */

  function capaHTML(o, extra) {
    return '<div class="capa capa-' + escapar(o.icone) + (o.capa ? ' com-imagem' : '') + (extra ? ' ' + extra : '') + '">' +
      '<span class="capa-padrao" aria-hidden="true"></span>' +
      '<span class="capa-icone" data-icone="' + escapar(o.icone) + '"></span>' +
      (o.capa ? '<img src="' + escapar(o.capa) + '" alt="" loading="lazy" onerror="this.parentNode.classList.remove(\'com-imagem\');this.remove()">' : '') +
      '<span class="selo-tipo">' + NOMES[o.tipo].emoji + ' ' + NOMES[o.tipo].um + '</span>' +
      (o.maior18 ? '<span class="selo-18">+18</span>' : '') +
    '</div>';
  }
  function metaObra(o) {
    if (o.tipo === 'oneshot') return '≈ ' + o.minutos + ' min de leitura';
    var n = o.capitulos.length;
    return n + (n === 1 ? ' capítulo' : ' capítulos') + (o.status ? ' · ' + o.status.toLowerCase() : '');
  }
  function tagsHTML(t) { return t.length ? '<ul class="tags">' + t.map(function (g) { return '<li>' + escapar(g) + '</li>'; }).join('') + '</ul>' : ''; }

  /* ---------- Galeria ---------- */

  var filtroAtual = 'todas', termo = '';
  var semAcento = function (s) { return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); };

  function montarGaleria() {
    var t = semAcento(termo);
    var lista = obras.filter(function (o) {
      if (filtroAtual !== 'todas' && o.tipo !== filtroAtual) return false;
      return !t || semAcento(o.titulo + ' ' + o.sinopse + ' ' + o.tags.join(' ') + ' ' + o.autora).indexOf(t) >= 0;
    });
    var ROTULOS = { todas: ['obra', 'obras'], au: ['AU', 'AUs'], fanfic: ['fanfic', 'fanfics'], oneshot: ['oneshot', 'oneshots'] };
    $('#contagem').textContent = lista.length + ' ' + ROTULOS[filtroAtual][lista.length === 1 ? 0 : 1];
    $('#galeria').innerHTML = lista.length ? lista.map(function (o, i) {
      return '<a class="cartao" href="' + linkObra(o) + '" style="--atraso:' + (i * 40) + 'ms">' + capaHTML(o) +
        '<div class="cartao-corpo"><h2>' + escapar(o.titulo) + '</h2>' +
          '<p class="cartao-sinopse">' + formatar(o.sinopse) + '</p>' +
          '<p class="cartao-meta">' + metaObra(o) + (o.data ? ' · ' + dataBR(o.data) : '') + '</p>' + tagsHTML(o.tags) +
        '</div></a>';
    }).join('') : '<p class="vazio">Nada por aqui ainda. 🥕</p>';
    pintarIcones($('#galeria'));
    $$('.filtro').forEach(function (b) { var a = b.getAttribute('data-filtro') === filtroAtual; b.classList.toggle('ativo', a); b.setAttribute('aria-selected', String(a)); });
    marcarMenu(filtroAtual);
  }
  function marcarMenu(tipo) {
    $$('.menu a').forEach(function (a) { if (a.getAttribute('data-filtro') === tipo) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
  }
  $$('.filtro').forEach(function (b) {
    b.addEventListener('click', function () { var f = b.getAttribute('data-filtro'); location.hash = f === 'todas' ? '#inicio' : '#' + NOMES[f].rota; });
  });
  $('#busca').addEventListener('input', function (e) { termo = e.target.value; montarGaleria(); });

  (function () {
    var fundo = $('#capa-fundo'), nomes = ['cenoura', 'onca', 'veado'], html = '';
    for (var i = 0; i < 18; i++) {
      var x = (i * 37 + 7) % 100, y = (i * 53 + 11) % 100, r = ((i * 47) % 50) - 25, s = 0.7 + ((i * 13) % 6) / 10;
      html += '<span class="flutua" style="left:' + x + '%;top:' + y + '%;--r:' + r + 'deg;--s:' + s + ';--d:' + (i % 6) + 's">' + icone(nomes[i % 3]) + '</span>';
    }
    fundo.innerHTML = html;
  })();

  /* ---------- Aviso +18 ---------- */

  function precisaAviso(o, alvo, depois) {
    if (!o.maior18 || guardar.ler('lq-18', false)) return false;
    alvo.innerHTML = '<div class="aviso-18"><span class="selo-18 grande">+18</span><h1>' + escapar(o.titulo) + '</h1>' +
      '<p>Esta obra tem conteúdo adulto e é indicada apenas para maiores de 18 anos.</p>' +
      '<button type="button" class="botao" id="aceitar-18">Tenho 18 anos ou mais</button>' +
      '<a class="botao botao-texto" href="#inicio">Voltar para a galeria</a></div>';
    $('#aceitar-18').addEventListener('click', function () { guardar.salvar('lq-18', true); depois(); });
    return true;
  }

  /* ---------- AU / fanfic: abas Capítulos · Personagens · Infos ---------- */

  function mostrarHub(o, aba) {
    var alvo = $('#hub');
    if (precisaAviso(o, alvo, function () { mostrarHub(o, aba); })) return;
    var base = linkObra(o);
    var abas = [['capitulos', 'Capítulos', base], ['personagens', 'Personagens', base + '/personagens'], ['infos', 'Infos', base + '/infos']];
    var conteudo = '';

    if (aba === 'personagens') {
      conteudo = o.personagens.length ? '<div class="grade-personagens">' + o.personagens.map(function (p) {
        var pp = perfil(String(p.id || p.nome).toLowerCase(), o);
        return '<article class="personagem">' + avatar(pp, 'avatar-grande') +
          '<div><h3>' + escapar(pp.nome) + (pp.verificado ? SELO : '') + '</h3>' +
          (o.tipo === 'au' && p.arroba ? '<p class="personagem-arroba">' + escapar(p.arroba) + '</p>' : '') +
          (pp.papel ? '<p class="personagem-papel">' + escapar(pp.papel) + '</p>' : '') +
          (pp.descricao ? '<p class="personagem-desc">' + formatar(pp.descricao) + '</p>' : '') + '</div></article>';
      }).join('') + '</div>' : '<p class="vazio">As personagens ainda não foram cadastradas.</p>';
    } else if (aba === 'infos') {
      var linhas = [
        ['Tipo', NOMES[o.tipo].um], ['Autora', o.autora], ['Status', o.status],
        ['Capítulos', String(o.capitulos.length)], ['Palavras', numeroBR(o.palavras)], ['Leitura', '≈ ' + o.minutos + ' min no total'],
        ['Publicada em', dataBR(o.data)], ['Classificação', o.maior18 ? '+18' : 'Livre']
      ].filter(function (l) { return l[1]; });
      conteudo = '<div class="infos">' +
        (o.sinopse ? '<p class="infos-sinopse">' + formatar(o.sinopse) + '</p>' : '') +
        '<dl class="infos-lista">' + linhas.map(function (l) { return '<div><dt>' + l[0] + '</dt><dd>' + escapar(l[1]) + '</dd></div>'; }).join('') + '</dl>' +
        (o.tags.length ? '<h3>Tags</h3>' + tagsHTML(o.tags) : '') +
        (o.infos.trim() ? '<h3>Notas da autora</h3><div class="infos-notas">' + prosaHTML(o.infos) + '</div>' : '') +
      '</div>';
    } else {
      aba = 'capitulos';
      var lidos = guardar.ler('lq-lidos', {});
      conteudo = o.capitulos.length ? '<ol class="lista-caps">' + o.capitulos.map(function (c) {
        var lido = lidos[o.id + '/' + c.numero];
        return '<li><a class="cap-linha' + (lido ? ' lido' : '') + '" href="' + base + '/cap/' + c.numero + '">' +
          '<span class="cap-num">' + c.numero + '</span>' +
          '<span class="cap-corpo"><strong>' + escapar(tituloCap(c)) + '</strong><small>' +
            (o.tipo === 'au' ? c.posts + (c.posts === 1 ? ' post' : ' posts') : '≈ ' + minutosDe(c.palavras) + ' min de leitura') +
            (lido ? ' · <span class="lido-selo">lido</span>' : '') + '</small></span>' +
          '<span class="cap-seta" aria-hidden="true">›</span></a></li>';
      }).join('') + '</ol>' : '<p class="vazio">Nenhum capítulo publicado ainda.</p>';
    }

    var primeiro = o.capitulos[0];
    alvo.innerHTML =
      '<div class="hub">' +
        '<a class="voltar" href="#' + NOMES[o.tipo].rota + '">‹ ' + NOMES[o.tipo].varios + '</a>' +
        '<header class="hub-topo">' + capaHTML(o, 'capa-hub') +
          '<div class="hub-texto"><h1>' + escapar(o.titulo) + '</h1>' +
            (o.autora ? '<p class="hub-autora">por ' + escapar(o.autora) + '</p>' : '') +
            '<p class="hub-meta">' + metaObra(o) + '</p>' +
            (primeiro ? '<a class="botao" href="' + base + '/cap/' + primeiro.numero + '">Começar a ler</a>' : '') +
          '</div>' +
        '</header>' +
        '<nav class="abas" aria-label="Seções">' + abas.map(function (a) {
          return '<a href="' + a[2] + '"' + (a[0] === aba ? ' aria-current="page"' : '') + '>' + a[1] + '</a>';
        }).join('') + '</nav>' +
        '<div class="hub-conteudo">' + conteudo + '</div>' +
      '</div>';
    pintarIcones(alvo);
  }

  /* ---------- Leitura: cabeçalho "lendo agora" ---------- */

  var leituraAtual = null; // { minutos, rotuloMini }

  function cabecalhoLeitura(opc) {
    // opc: { status, titulo, subtitulo, minutos, dados:[[valor,rotulo]], partida, destino, autora, voltar:[href,texto], proximo:[href,texto] }
    return '<header class="viagem" id="viagem">' +
      '<nav class="viagem-nav">' +
        '<a class="voltar" href="' + opc.voltar[0] + '">‹ ' + escapar(opc.voltar[1]) + '</a>' +
        (opc.proximo ? '<a class="viagem-proximo" href="' + opc.proximo[0] + '">' + escapar(opc.proximo[1]) + ' ›</a>' : '') +
      '</nav>' +
      '<p class="viagem-status"><span class="viagem-ponto" aria-hidden="true"></span>' + escapar(opc.status) + '</p>' +
      '<h1>' + escapar(opc.titulo) + '</h1>' +
      (opc.subtitulo ? '<p class="viagem-sub">' + formatar(opc.subtitulo) + '</p>' : '') +
      '<p class="viagem-eta"><strong id="viagem-falta">Termina em ' + opc.minutos + ' min</strong> <span id="viagem-hora">· previsão ' + horaBR(opc.minutos) + '</span></p>' +
      '<div class="viagem-barra" aria-hidden="true"><span id="viagem-barra"></span></div>' +
      (opc.partida ? '<ol class="viagem-rota"><li><span class="marca-rota" data-icone="cenoura"></span><span><small>Partida</small>' + escapar(opc.partida) + '</span></li>' +
        '<li><span class="marca-rota" data-icone="' + escapar(opc.iconeDestino || 'veado') + '"></span><span><small>Destino</small>' + escapar(opc.destino) + '</span></li></ol>' : '') +
      '<ul class="viagem-dados">' + opc.dados.map(function (d) { return '<li><strong>' + d[0] + '</strong><small>' + d[1] + '</small></li>'; }).join('') + '</ul>' +
      (opc.autora ? '<p class="viagem-autora"><span class="viagem-autora-icone" data-icone="onca"></span><span><small>Escrita por</small>' + escapar(opc.autora) + '</span></p>' : '') +
    '</header>';
  }

  function prepararLeitura(alvo, minutos, rotuloMini) {
    pintarIcones(alvo);
    leituraAtual = { minutos: minutos, rotuloMini: rotuloMini };
    $('#mini').innerHTML = '<span class="viagem-ponto"></span><span>' + escapar(rotuloMini) + ' · <strong id="mini-falta">' + minutos + ' min</strong></span><span class="mini-barra"><span id="mini-barra"></span></span>';
    $('#mini').classList.remove('visivel');
    vigiarCabecalho();
    $$('.curtir', alvo).forEach(function (b) {
      b.addEventListener('click', function () {
        var n = Number(b.getAttribute('data-n')) + (b.classList.toggle('curtido') ? 1 : 0);
        b.querySelector('b').textContent = numeroCurto(n);
      });
    });
    atualizarLeitura();
  }

  function mostrarCapitulo(o, numero) {
    var alvo = $('#leitura');
    if (precisaAviso(o, alvo, function () { mostrarCapitulo(o, numero); })) return;
    var i = o.capitulos.findIndex(function (c) { return c.numero === numero; });
    var c = o.capitulos[i];
    if (!c) { alvo.innerHTML = '<div class="nao-achei"><h1>Capítulo não encontrado</h1><a class="botao" href="' + linkObra(o) + '">Ver capítulos</a></div>'; return; }
    var ant = o.capitulos[i - 1], prox = o.capitulos[i + 1], base = linkObra(o), ehAU = o.tipo === 'au';
    var lidos = guardar.ler('lq-lidos', {}); lidos[o.id + '/' + c.numero] = true; guardar.salvar('lq-lidos', lidos);
    var corpo = ehAU ? auHTML(c.blocos, o) : prosaHTML(c.texto);
    var paragrafos = ehAU ? c.posts : (corpo.match(/<p>/g) || []).length;
    var min = minutosDe(c.palavras);
    alvo.innerHTML =
      '<article class="leitura leitura-' + o.tipo + '">' +
        cabecalhoLeitura({
          status: 'Lendo agora · ' + NOMES[o.tipo].um + ' · Capítulo ' + c.numero + ' de ' + o.capitulos.length,
          titulo: tituloCap(c), subtitulo: o.titulo, minutos: min,
          partida: ant ? 'Capítulo ' + ant.numero + ' · ' + tituloCap(ant) : 'Início da ' + (ehAU ? 'AU' : 'fanfic'),
          destino: tituloCap(c), iconeDestino: ehAU ? 'onca' : 'veado',
          dados: [['≈ ' + min + ' min', 'de leitura'], [numeroBR(c.palavras), 'palavras'], [numeroBR(paragrafos), ehAU ? 'posts' : 'parágrafos']],
          autora: o.autora,
          voltar: [base, 'Capítulos'],
          proximo: prox ? [base + '/cap/' + prox.numero, 'Próximo'] : null
        }) +
        '<div class="' + (ehAU ? 'fio' : 'texto') + '">' + corpo + '</div>' +
        '<p class="fim" aria-hidden="true"><span data-icone="onca"></span><span data-icone="cenoura"></span><span data-icone="veado"></span></p>' +
        '<nav class="leitura-rodape">' +
          (ant ? '<a class="botao botao-claro" href="' + base + '/cap/' + ant.numero + '"><small>Anterior</small>' + escapar(tituloCap(ant)) + '</a>' : '<span></span>') +
          '<a class="botao botao-claro centro" href="' + base + '">Capítulos</a>' +
          (prox ? '<a class="botao" href="' + base + '/cap/' + prox.numero + '"><small>Próximo</small>' + escapar(tituloCap(prox)) + '</a>' : '<span></span>') +
        '</nav>' +
      '</article>';
    prepararLeitura(alvo, min, 'Cap. ' + c.numero);
  }

  function mostrarOneshot(o) {
    var alvo = $('#leitura');
    if (precisaAviso(o, alvo, function () { mostrarOneshot(o); })) return;
    var corpo = prosaHTML(o.texto);
    var paragrafos = (corpo.match(/<p>/g) || []).length;
    var outras = obras.filter(function (x) { return x.tipo === 'oneshot' && x.id !== o.id; }).slice(0, 2);
    alvo.innerHTML =
      '<article class="leitura leitura-oneshot">' +
        (o.capa ? capaHTML(o, 'capa-leitura') : '') +
        cabecalhoLeitura({
          status: 'Lendo agora · Oneshot',
          titulo: o.titulo, subtitulo: o.sinopse, minutos: o.minutos,
          dados: [['≈ ' + o.minutos + ' min', 'de leitura'], [numeroBR(o.palavras), 'palavras'], [numeroBR(paragrafos), 'parágrafos']],
          autora: o.autora,
          voltar: ['#oneshots', 'Oneshots'], proximo: null
        }) +
        '<div class="texto">' + corpo + '</div>' +
        '<p class="fim" aria-hidden="true"><span data-icone="onca"></span><span data-icone="cenoura"></span><span data-icone="veado"></span></p>' +
        (outras.length ? '<h2 class="mais-titulo">Outras oneshots</h2><div class="mais">' + outras.map(function (x) {
          return '<a class="mais-item" href="' + linkObra(x) + '">' + capaHTML(x) + '<strong>' + escapar(x.titulo) + '</strong><small>≈ ' + x.minutos + ' min</small></a>';
        }).join('') + '</div>' : '') +
        '<nav class="leitura-rodape uma"><a class="botao" href="#inicio">Voltar para a galeria</a></nav>' +
      '</article>';
    prepararLeitura(alvo, o.minutos, 'Oneshot');
  }

  /* ---------- Progresso, tempo restante e pílula ---------- */

  var barraTopo = $('#progresso span');
  function posicao() { var max = document.documentElement.scrollHeight - innerHeight; return max > 0 ? Math.min(1, Math.max(0, scrollY / max)) : 0; }
  function atualizarLeitura() {
    var pos = leituraAtual ? posicao() : 0;
    barraTopo.style.transform = 'scaleX(' + pos + ')';
    if (!leituraAtual) return;
    var falta = Math.max(1, Math.ceil((1 - pos) * leituraAtual.minutos)), chegou = pos >= 0.985;
    var f = $('#viagem-falta'), h = $('#viagem-hora'), b = $('#viagem-barra'), mf = $('#mini-falta'), mb = $('#mini-barra');
    if (f) f.textContent = chegou ? 'Você chegou ao fim 💚' : 'Termina em ' + falta + ' min';
    if (h) h.textContent = chegou ? '' : '· previsão ' + horaBR(falta);
    if (b) b.style.transform = 'scaleX(' + Math.max(0.02, pos) + ')';
    if (mf) mf.textContent = chegou ? 'fim' : 'faltam ' + falta + ' min';
    if (mb) mb.style.transform = 'scaleX(' + pos + ')';
  }
  var agendado = false;
  window.addEventListener('scroll', function () {
    if (agendado) return;
    agendado = true;
    requestAnimationFrame(function () { agendado = false; atualizarLeitura(); });
  }, { passive: true });
  setInterval(function () { if (leituraAtual) atualizarLeitura(); }, 30000);

  var observador = null;
  function vigiarCabecalho() {
    if (observador) observador.disconnect();
    var cab = $('#viagem'), mini = $('#mini');
    if (!cab || typeof IntersectionObserver === 'undefined') return;
    observador = new IntersectionObserver(function (e) { mini.classList.toggle('visivel', !e[0].isIntersecting && e[0].boundingClientRect.top < 0); });
    observador.observe(cab);
  }

  /* ---------- Tamanho da letra e tema (sempre no topo) ---------- */

  function fonteAtual() { return guardar.ler('lq-fonte', FONTE_PADRAO); }
  function aplicarFonte(px) {
    document.documentElement.style.setProperty('--fonte-leitura', px + 'px');
    $('#fonte-menos').disabled = px <= FONTE_MIN;
    $('#fonte-mais').disabled = px >= FONTE_MAX;
    $('#fonte-valor').textContent = Math.round(px / FONTE_PADRAO * 100) + '%';
  }
  function mudarFonte(d) {
    var pos = posicao();
    var px = Math.min(FONTE_MAX, Math.max(FONTE_MIN, fonteAtual() + d));
    guardar.salvar('lq-fonte', px);
    aplicarFonte(px);
    if (leituraAtual) { var max = document.documentElement.scrollHeight - innerHeight; scrollTo(0, Math.round(max * pos)); }
  }
  var painel = $('#fonte-painel'), botaoFonte = $('#botao-fonte');
  function abrirPainel(sim) { painel.hidden = !sim; botaoFonte.setAttribute('aria-expanded', String(sim)); }
  botaoFonte.addEventListener('click', function (e) { e.stopPropagation(); abrirPainel(painel.hidden); });
  painel.addEventListener('click', function (e) { e.stopPropagation(); });
  document.addEventListener('click', function () { abrirPainel(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') abrirPainel(false); });
  $('#fonte-menos').addEventListener('click', function () { mudarFonte(-FONTE_PASSO); });
  $('#fonte-mais').addEventListener('click', function () { mudarFonte(FONTE_PASSO); });
  aplicarFonte(fonteAtual());

  $('#botao-tema').addEventListener('click', function () {
    var novo = document.documentElement.getAttribute('data-tema') === 'escuro' ? 'claro' : 'escuro';
    document.documentElement.setAttribute('data-tema', novo);
    guardar.salvar('lq-tema', novo);
  });

  /* ---------- Rotas ---------- */

  function mostrar(nome) {
    $$('.pagina').forEach(function (s) { s.classList.toggle('ativa', s.getAttribute('data-pagina') === nome); });
    document.body.setAttribute('data-pagina', nome);
  }

  function rota() {
    var h = decodeURIComponent(location.hash.replace(/^#\/?/, '')) || 'inicio';
    var partes = h.split('/');
    window.scrollTo(0, 0);
    abrirPainel(false);
    leituraAtual = null;
    $('#mini').classList.remove('visivel');
    if (observador) observador.disconnect();

    // endereço antigo #obra/id
    if (partes[0] === 'obra' && partes[1]) { var antiga = acharObra(partes[1]); if (antiga) { location.replace(linkObra(antiga)); return; } }

    var o = partes[1] ? acharObra(partes[1]) : null;
    if (o && partes[0] === o.tipo) {
      marcarMenu(o.tipo);
      if (o.tipo === 'oneshot') { mostrar('leitura'); mostrarOneshot(o); document.title = o.titulo + ' · Loquinha'; }
      else if (partes[2] === 'cap') { mostrar('leitura'); mostrarCapitulo(o, Number(partes[3])); document.title = o.titulo + ' · Loquinha'; }
      else { mostrar('hub'); mostrarHub(o, partes[2] || 'capitulos'); document.title = o.titulo + ' · Loquinha'; }
      atualizarLeitura();
      return;
    }
    filtroAtual = h === 'aus' ? 'au' : h === 'fanfics' ? 'fanfic' : h === 'oneshots' ? 'oneshot' : 'todas';
    mostrar('galeria');
    montarGaleria();
    atualizarLeitura();
    document.title = 'Loquinha · AUs, fanfics & oneshots';
  }

  pintarIcones(document);
  window.addEventListener('hashchange', rota);
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', rota); else rota();
})();
