/*
  ======================================================================
  AUs E ONESHOTS — é só editar este arquivo para publicar algo novo.
  (Os blocos abaixo marcados como TESTE podem ser apagados.)
  ======================================================================

  CAMPOS QUE SERVEM PARA AU E ONESHOT
  - id:        nome curto para o endereço, sem acento e sem espaço. Não repita.
  - tipo:      "au", "fanfic" ou "oneshot".
               AU e fanfic abrem com as abas Capítulos, Personagens e Infos.
               Oneshot abre direto na leitura.
  - titulo, sinopse (1 ou 2 frases, aparece no cartão da galeria)
  - capa:      imagem da própria obra, ex.: "capa-minha-au.jpg" (envie solta).
               Sem capa, aparece um desenho (escolha em "icone").
  - icone:     "cenoura", "onca" ou "veado" (só usado quando não há capa).
  - autora:    nome ou @ de quem escreveu.
  - tags:      ex.: ["comédia", "universitária"]
  - maior18:   true se tiver conteúdo adulto (aparece um aviso antes).
  - data:      "AAAA-MM-DD" (a mais nova aparece primeiro na galeria).

  SÓ PARA AU E FANFIC
  - status:      "Em andamento" ou "Completa".
  - infos:       texto livre da aba Infos (notas da autora, avisos, playlist...).
  - personagens: lista com quem aparece na AU (aba Personagens e nos tweets):
        { id: "lorena", nome: "Lorena", arroba: "@loreferette",
          foto: "lorena.jpg", cor: "#1F8A5B", verificado: true,
          papel: "Estudante de Psicologia", descricao: "Texto curto." }
    O "id" é o que vai depois do @ nos tweets e conversas.
  - capitulos:   lista de faixas (capítulos): { numero: 1, titulo: "...", texto: `...` }
    No site, cada capítulo aparece como uma "faixa" do disco.
    Na AU, o texto usa tweets/conversas (veja abaixo). Na fanfic, é texto
    corrido, igual ao da oneshot.

  SÓ PARA ONESHOT
  - texto:     o texto inteiro, entre as crases.

  TEXTO CORRIDO (oneshot e capítulos de fanfic)
    Linha em branco = parágrafo · *itálico* · **negrito** · *** = divisor

  ----------------------------------------------------------------------
  COMO ESCREVER UM CAPÍTULO DE AU (blocos separados por UMA linha em branco)

    tweet @lorena | 2h            ← tweet (o "| 2h" é opcional)
    texto do tweet
    imagem: foto-do-tweet.jpg     ← opcional, foto dentro do tweet

    resposta @eduarda | 1h        ← fica ligada ao tweet de cima
    texto da resposta

    conversa @lorena              ← print de conversa; o 1º @ é a dona do celular
    @maggye: amiga???
    @lorena: nem começa

    imagem foto.jpg | legenda     ← imagem solta (foto, meme, story)

    Qualquer outro bloco vira narração. *** vira divisor de cena.
  Não use o caractere ` (crase sozinha) dentro do texto.
  ======================================================================
*/

const OBRAS = [
  /* ---------------------------- TESTE: AU ---------------------------- */
  {
    id: "teste-au-playlist",
    tipo: "au",
    titulo: "A playlist proibida",
    sinopse: "Eduarda comanda a rádio da faculdade e tem uma regra: ninguém mexe na playlist. Lorena tem outros planos.",
    capa: "teste-capa-au.jpg",
    icone: "onca",
    autora: "@autora_teste",
    status: "Em andamento",
    tags: ["teste", "comédia", "rádio universitária"],
    maior18: false,
    data: "2026-11-02",
    infos: `
Esta é uma AU de **teste**, só para mostrar como o site funciona. Pode apagar quando a AU de verdade chegar.

Aqui a autora pode deixar avisos, a playlist da AU, agradecimentos ou o link para o perfil dela.
`,
    personagens: [
      { id: "eduarda", nome: "Duda 🧡", arroba: "@juquinhafragoso", foto: "eduarda.jpg", cor: "#F26B21", verificado: true,
        papel: "A DJ da rádio", descricao: "Leva a regra da playlist muito a sério. Até a Lorena aparecer." },
      { id: "lorena", nome: "Lorena", arroba: "@loreferette", foto: "lorena.jpg", cor: "#1F8A5B", verificado: true,
        papel: "A ouvinte", descricao: "Estudante de Psicologia, tímida, e com um pedido de música na manga." },
      { id: "maggye", nome: "Maggye", arroba: "@maggyefofoca", foto: "maggye.jpg", cor: "#B85C9E",
        papel: "A melhor amiga", descricao: "Acompanha tudo de perto e nunca perde uma fofoca." },
      { id: "doutora", nome: "Doutora 🌿", arroba: "@capivaradocampus", foto: "doutora.jpg", cor: "#7A5232",
        papel: "A capivara do campus", descricao: "Comenta em todos os tweets. Ninguém sabe quem administra a conta." }
    ],
    capitulos: [
      {
        numero: 1,
        titulo: "Regras da rádio",
        texto: `
tweet @eduarda | 7h
regra número 1 da rádio: quem está no microfone escolhe a música
regra número 2: ver regra número 1

resposta @maggye | 7h
quem será que vai quebrar essa regra primeiro 🤔

tweet @lorena | 6h
alguém sabe como mandar pedido de música pra rádio da faculdade? é pra um trabalho

resposta @eduarda | 6h
lorena ferette eu sei que é você
`
      },
      {
        numero: 2,
        titulo: "Lado B",
        texto: `
Na manhã seguinte, a rádio abriu com uma música que não estava na playlist.

conversa @lorena
@maggye: e aí, ela tocou???
@lorena: tocou o meu pedido logo na abertura
@maggye: E ELA?
@lorena: ela tá cantando junto no microfone 😭
@maggye: isso é amor ou falta de repertório

***

tweet @eduarda | 2h
atualizando as regras da rádio:
regra número 1: a lorena escolhe a música
regra número 2: não comentem

resposta @doutora | 1h
🌿🎶🌿

tweet @lorena | 30min
ela disse que é só porque o meu gosto musical é bom. vou fingir que acredito 🧡💚
`
      }
    ]
  },

  /* ------------------------- TESTE: FANFIC ------------------------- */
  {
    id: "teste-fanfic-sebo",
    tipo: "fanfic",
    titulo: "Discos de segunda mão",
    sinopse: "Uma loja de discos usados, um vinil arranhado e duas garotas que sempre escolhem a mesma prateleira.",
    capa: "",
    icone: "cenoura",
    autora: "@autora_teste",
    status: "Em andamento",
    tags: ["teste", "slow burn", "loja de discos"],
    maior18: false,
    data: "2026-10-30",
    infos: `
Fanfic de **teste** com duas faixas curtas. Pode apagar.
`,
    personagens: [
      { id: "lorena", nome: "Lorena Ferette", foto: "lorena.jpg", cor: "#1F8A5B", papel: "Cliente fiel", descricao: "Passa toda sexta na loja, sempre na prateleira de MPB." },
      { id: "eduarda", nome: "Eduarda Fragoso", foto: "eduarda.jpg", cor: "#F26B21", papel: "Atendente da loja", descricao: "Finge que não guarda os melhores discos para a Lorena." }
    ],
    capitulos: [
      {
        numero: 1,
        titulo: "Prateleira de MPB",
        texto: `
A loja de discos abria às dez, mas Lorena chegava às nove e cinquenta e oito.

Eduarda já estava atrás do balcão, fingindo organizar uma pilha de vinis que tinha organizado no dia anterior.

— Chegou cedo de novo — comentou, sem levantar os olhos.

— Cheguei na hora certa — Lorena respondeu. — A loja que abre tarde.
`
      },
      {
        numero: 2,
        titulo: "Disco arranhado",
        texto: `
Na sexta seguinte, o disco que Lorena queria estava separado no balcão, com um bilhete colado na capa.

*Guardei pra você. Tem um arranhão na faixa três, mas acho que você vai gostar mesmo assim.*

Lorena gostou. Principalmente do arranhão.
`
      }
    ]
  },

  /* -------------------------- TESTE: ONESHOT -------------------------- */
  {
    id: "teste-oneshot-faixa",
    tipo: "oneshot",
    titulo: "Faixa escondida",
    sinopse: "No fim do disco favorito de Lorena existe uma faixa que ninguém conhece. Eduarda conhece.",
    capa: "teste-capa-oneshot.jpg",
    icone: "veado",
    autora: "@autora_teste",
    tags: ["teste", "fofo", "conforto"],
    maior18: false,
    data: "2026-11-01",
    texto: `
O disco terminou, e Lorena esticou a mão para tirar a agulha.

— Espera — Eduarda pediu, segurando o pulso dela com cuidado. — Ainda não acabou.

Lorena franziu a testa. Conhecia aquele álbum de cor, cada faixa, cada pausa entre uma música e outra.

— Acabou, sim. São dez faixas.

— São onze — Eduarda corrigiu, com um sorriso de quem guarda um segredo. — Escuta.

*Era verdade.* Depois de quase um minuto de silêncio, uma melodia baixinha começou a tocar, só violão e uma voz que parecia cantar para alguém muito específico.

***

— Como você sabia disso? — Lorena perguntou, quando a música terminou.

— Eu escuto os discos até o fim — Eduarda respondeu, dando de ombros. — Às vezes a melhor parte fica escondida.

Lorena ficou olhando para ela um pouco mais do que precisava.

Às vezes, pensou, fica mesmo.
`
  },
];
