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
  - capitulos:   lista de capítulos: { numero: 1, titulo: "...", texto: `...` }
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
    sinopse: "Eduarda tem uma regra no carro: ninguém mexe na playlist. Lorena tem outros planos.",
    capa: "teste-capa-au.jpg",
    icone: "onca",
    autora: "@autora_teste",
    status: "Em andamento",
    tags: ["teste", "comédia", "universitária"],
    maior18: false,
    data: "2026-11-02",
    infos: `
Esta é uma AU de **teste**, só para mostrar como o site funciona. Pode apagar quando a AU de verdade chegar.

Aqui a autora pode deixar avisos, a playlist da AU, agradecimentos ou o link para o perfil dela.
`,
    personagens: [
      { id: "eduarda", nome: "Duda 🧡", arroba: "@juquinhafragoso", foto: "eduarda.jpg", cor: "#F26B21", verificado: true,
        papel: "A dona do carro", descricao: "Leva a regra da playlist muito a sério. Até a Lorena aparecer." },
      { id: "lorena", nome: "Lorena", arroba: "@loreferette", foto: "lorena.jpg", cor: "#1F8A5B", verificado: true,
        papel: "A passageira", descricao: "Estudante de Psicologia, tímida, e com um plano para o bluetooth." },
      { id: "maggye", nome: "Maggye", arroba: "@maggyefofoca", foto: "maggye.jpg", cor: "#B85C9E",
        papel: "A melhor amiga", descricao: "Acompanha tudo de perto e nunca perde uma fofoca." },
      { id: "doutora", nome: "Doutora 🌿", arroba: "@capivaradocampus", foto: "doutora.jpg", cor: "#7A5232",
        papel: "A capivara do campus", descricao: "Comenta em todos os tweets. Ninguém sabe quem administra a conta." }
    ],
    capitulos: [
      {
        numero: 1,
        titulo: "Regras do carro",
        texto: `
tweet @eduarda | 7h
regra número 1 do meu carro: quem dirige escolhe a música
regra número 2: ver regra número 1

resposta @maggye | 7h
quem será que vai quebrar essa regra primeiro 🤔

tweet @lorena | 6h
alguém sabe como hackear o bluetooth de um carro? é pra um trabalho da faculdade

resposta @eduarda | 6h
lorena ferette eu sei que é você
`
      },
      {
        numero: 2,
        titulo: "Plano em ação",
        texto: `
Na manhã seguinte, o carro estava estranhamente silencioso até a primeira curva.

conversa @lorena
@maggye: e aí, conseguiu???
@lorena: coloquei a minha playlist enquanto ela abastecia
@maggye: E ELA?
@lorena: ela tá cantando junto 😭
@maggye: isso é amor ou síndrome de estocolmo

***

tweet @eduarda | 2h
atualizando as regras do carro:
regra número 1: a lorena escolhe a música
regra número 2: não comentem

resposta @doutora | 1h
🌿🌿🌿

tweet @lorena | 30min
ela disse que é só porque a minha playlist é boa. vou fingir que acredito 🧡💚
`
      }
    ]
  },

  /* ------------------------- TESTE: FANFIC ------------------------- */
  {
    id: "teste-fanfic-carona",
    tipo: "fanfic",
    titulo: "Carona de segunda a sexta",
    sinopse: "Cinco dias, um carro e duas garotas fingindo que é só uma carona.",
    capa: "",
    icone: "cenoura",
    autora: "@autora_teste",
    status: "Em andamento",
    tags: ["teste", "slow burn"],
    maior18: false,
    data: "2026-10-30",
    infos: `
Fanfic de **teste** com dois capítulos curtos. Pode apagar.
`,
    personagens: [
      { id: "lorena", nome: "Lorena Ferette", foto: "lorena.jpg", cor: "#1F8A5B", papel: "Estudante de Psicologia", descricao: "Pontual, exceto quando a carona é da Eduarda." },
      { id: "eduarda", nome: "Eduarda Fragoso", foto: "eduarda.jpg", cor: "#F26B21", papel: "Estudante de Nutrição", descricao: "Chega sempre dois minutos antes. De propósito." }
    ],
    capitulos: [
      {
        numero: 1,
        titulo: "Segunda-feira",
        texto: `
Eduarda buzinou às seis e vinte e três, dois minutos antes do combinado.

Lorena desceu com o cabelo ainda molhado e um copo de café equilibrado na mão. Entrou no carro, prendeu o cinto e encarou a motorista.

— Você chegou cedo de novo.

— Cheguei na hora certa — Eduarda corrigiu. — Você que é atrasada por natureza.
`
      },
      {
        numero: 2,
        titulo: "Terça-feira",
        texto: `
Na terça, a discussão foi sobre a playlist.

Na verdade, foi sobre quem ia ganhar a discussão sobre a playlist, e as duas sabiam que a resposta seria a mesma de sempre.

*Ela deixa eu ganhar*, Lorena pensou, olhando a ruiva cantar errado o refrão. *E finge que não deixa.*
`
      }
    ]
  },

  /* -------------------------- TESTE: ONESHOT -------------------------- */
  {
    id: "teste-oneshot-chuva",
    tipo: "oneshot",
    titulo: "Chuva de terça-feira",
    sinopse: "Uma tempestade, um carro parado na frente do prédio e uma conversa que ninguém quer terminar.",
    capa: "teste-capa-oneshot.jpg",
    icone: "veado",
    autora: "@autora_teste",
    tags: ["teste", "fofo", "conforto"],
    maior18: false,
    data: "2026-11-01",
    texto: `
A chuva começou no meio do caminho, sem aviso, do jeito que as chuvas de São Paulo gostam de começar.

Lorena apertou o cinto um pouco mais forte do que precisava. Eduarda percebeu, porque sempre percebia, e diminuiu a velocidade sem dizer nada. Depois aumentou o volume da música, só um pouco, o suficiente para cobrir o barulho das gotas no teto.

— Você escolheu essa de propósito — Lorena acusou, reconhecendo a primeira nota.

— Escolhi — Eduarda admitiu, sem tirar os olhos da rua. — Você sempre fica mais calma quando tá ocupada me julgando pelo meu gosto musical.

*Era verdade*, Lorena pensou, e odiou um pouquinho que fosse.

***

Quando pararam em frente ao prédio, a chuva ainda não tinha decidido ir embora. Nenhuma das duas fez menção de abrir a porta.

— A gente pode esperar passar — Eduarda sugeriu.

— Pode demorar.

— Eu sei.

Lorena encostou a cabeça no vidro e ficou olhando as luzes da rua se desmancharem na água. Pela primeira vez em muito tempo, a tempestade não parecia grande demais.

Parecia só uma desculpa boa para ficar.
`
  },
];
