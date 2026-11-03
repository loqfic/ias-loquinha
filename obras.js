/*
  ======================================================================
  AUs E ONESHOTS — é só editar este arquivo para publicar algo novo.
  (Discografia de ias · @medverias)
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

  AU FEITA DE PRINTS (como apartamento 606)
  Em vez de "texto", cada faixa (atualização) tem "midias":
      midias: { att: 4, prefixo: "a606-att4-", total: 80, videos: [12, 30],
                narracoes: { 1: { tempo: "DOMINGO, manhã." },
                             40: { texto: `narração transcrita...` },
                             41: { omitir: true } } }
    - Os arquivos se chamam prefixo + número com 3 dígitos: a606-att4-001.jpg,
      a606-att4-012.mp4 (vídeo) e a606-att4-012-capa.jpg (capa do vídeo).
    - "tempo": marcações da conta TEMPO; "texto": narração em prosa.
    - "omitir": imagem que é continuação da narração anterior (não aparece).
    - A legenda no visualizador sai sozinha: "Att 4 - Cap 12".

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
  /* ======================= APARTAMENTO 606 ======================= */
  {
    id: "apartamento-606",
    tipo: "au",
    titulo: "apartamento 606",
    sinopse: "Na qual Lorena descobre que está sendo corna porque sua vizinha de baixo, Eduarda, manda uma mensagem mal criada no grupo do prédio reclamando de barulho.",
    capa: "a606-capa.jpg",
    icone: "onca",
    autora: "ias | @medverias",
    status: "Em andamento",
    tags: ["comédia", "farofada de condomínio", "vizinhas", "twitter e whatsapp"],
    maior18: false,
    data: "2026-08-26",
    infos: ``,

    personagens: [
      { id: "eduarda", nome: "Eduarda", arroba: "@juquinhalife", papel: "Policial civil · vizinha de baixo da Lorena",
        descricao: "Perfil “duda”, com a bio “trabalhando na delegacia das minúsculas causas”. Tem também uma conta de desabafos, “ruiva gay” (@notdudao): “rant pra desabafar pra mim mesma pois sou maluca”.",
        imagens: [ { arquivo: "a606-perfil-eduarda.jpg", legenda: "duda · @juquinhalife" },
                   { arquivo: "a606-perfil-eduarda-rant.jpg", legenda: "ruiva gay · @notdudao (rant)" } ] },
      { id: "maggye", nome: "Maggye", arroba: "@maggyedam", papel: "Moradora do 808 · amiga da Eduarda",
        descricao: "Perfil “Megs”, com a bio “quem cuida de mim não dorme nem descansa 🍃”.",
        imagens: [ { arquivo: "a606-perfil-maggye.jpg", legenda: "Megs · @maggyedam" } ] },
      { id: "gerluce", nome: "Gerluce", arroba: "@gerdasgracas", papel: "Esposa do Paulinho · amiga da Eduarda",
        descricao: "Perfil “luce”, com a bio “mãe de uma peste”.",
        imagens: [ { arquivo: "a606-perfil-gerluce.jpg", legenda: "luce · @gerdasgracas" } ] },
      { id: "paulinho", nome: "Paulinho", arroba: "@reitzlife", papel: "Síndico do Condomínio Rochester",
        descricao: "Bio: “casado casado casado graças a Deus”.",
        imagens: [ { arquivo: "a606-perfil-paulinho.jpg", legenda: "paulinho · @reitzlife" } ] },
      { id: "lorena", nome: "Lorena", arroba: "@hilorena", papel: "Moradora do 606",
        descricao: "Bio: “servindo drinks quando poderia estar servindo cunt”. Tem também uma conta de desabafos, “sapatona patética” (@notelore): “desabafos de uma sapatona patética”.",
        imagens: [ { arquivo: "a606-perfil-lorena.jpg", legenda: "Lorena · @hilorena" },
                   { arquivo: "a606-perfil-lorena-rant.jpg", legenda: "sapatona patética · @notelore (rant)" } ] },
      { id: "celina", nome: "Celina", arroba: "@celinared", papel: "Moradora do 102 · amiga da Lorena",
        descricao: "Bio: “mãe de gato”.",
        imagens: [ { arquivo: "a606-perfil-celina.jpg", legenda: "Celina · @celinared" } ] },
      { id: "samantha", nome: "Samantha", arroba: "@samantha06", papel: "Moradora do 104 · amiga da Lorena",
        descricao: "Perfil “Sam”, com a bio “artista em construção”.",
        imagens: [ { arquivo: "a606-perfil-samantha.jpg", legenda: "Sam · @samantha06" } ] }
    ],

    // Aba Personagens: cada núcleo com o print do grupo e os perfis
    nucleos: [
      { titulo: "Núcleo da Eduarda", descricao: "Eduarda e os amigos que se reúnem para o café da tarde na casa dela.",
        imagem: "a606-grupo-eduarda-cozinheira.jpg", legenda: "Grupo “Eduarda cozinheira”",
        explicacao: "Grupo de WhatsApp com 4 participantes, criado em 27 de agosto de 2026. Descrição do grupo: “grupo de fofocas no qual falamos mal de todos e somos alimentados pela Eduarda”.",
        personagens: ["eduarda", "maggye", "gerluce", "paulinho"] },
      { titulo: "Núcleo da Lorena", descricao: "Lorena e as amigas Celina e Sam, vizinhas do prédio.",
        imagem: "a606-grupo-todo-mundo-odeia-a-lorena.jpg", legenda: "Grupo “Todo mundo odeia a Lorena”",
        explicacao: "Grupo de WhatsApp com 3 participantes, criado em 28 de agosto de 2026. Descrição do grupo: “aqui não discriminamos ninguém odiamos todos por igual especialmente a Lorena e a namorada dela”.",
        personagens: ["lorena", "celina", "samantha"] },
      { titulo: "Condomínio Rochester", descricao: "O grupo do prédio, onde toda a confusão começa.",
        imagem: "a606-grupo-condominio-rochester.jpg", legenda: "Grupo “Condomínio Rochester”",
        explicacao: "Lista de participantes do grupo do prédio: vizinha 606, Paulinho síndico, Gerluce do paulinho, Júnior do 805, Lucélia 403, Dona Maria 201, Jairo porteiro, celina 102, Samantha 104, Joelly, Meggye 808 e vizinha da metelancia 606.",
        personagens: [] }
    ],

    // Aba Infos: imagens da autora, cada uma com explicação
    secoesInfo: [
      { titulo: "Sinopse original",
        texto: `O tweet que abriu a AU, publicado em 26 de agosto de 2026, traz o título, a sinopse e quatro imagens de apresentação: o print da mensagem no grupo do prédio, uma foto de Lorena, uma foto de Eduarda e a fachada do prédio à noite.`,
        imagens: [
          { arquivo: "a606-sinopse.jpg", legenda: "Tweet de abertura", explicacao: "Título, sinopse e as imagens de apresentação da AU." },
          { arquivo: "a606-capa.jpg", legenda: "O prédio", explicacao: "Fachada do Condomínio Rochester à noite, usada como capa." },
          { arquivo: "a606-sinopse-lorena.jpg", legenda: "Lorena", explicacao: "Foto de apresentação da Lorena, moradora do 606." },
          { arquivo: "a606-sinopse-eduarda.jpg", legenda: "Eduarda", explicacao: "Foto de apresentação da Eduarda, a vizinha de baixo." }
        ] },
      { titulo: "Avisos da autora",
        texto: `**🚨 AVISOS 🚨**

Olá! Não tenho muito o que dizer porque já fiz isso antes, mas faz tanto tempo que parece que eu era outra pessoa, então vamos lá.

A proposta dessa AU é ser uma galhofice, uma farofada de condomínio. Meu foco vai ser o casal Loquinha, obviamente, mas eu pretendo mostrar o dia a dia desse prédio que mais parece uma ecovila de malucos.

Eu honestamente não tenho grandes pretensões com essa história a não ser me divertir! Não vou fixar dia para atualizações porque eu trabalho e muitas vezes a vida adulta cobra a gente, se é que vocês me entendem.

Não me levem a sério, por favor. Sou apenas um pensamento abstrato, um holograma da realidade. Minha função nesse Twitter é falar merda e usar estáticos para me expressar, apenas isso.

Espero que vocês gostem dessa alucinação coletiva de neurônios que eu montei.`,
        imagens: [ { arquivo: "a606-avisos.jpg", legenda: "Avisos (imagem original)", explicacao: "A imagem que a autora publicou com os avisos, transcrita acima." } ] },
      { titulo: "Papéis de parede das conversas",
        texto: `Os prints de WhatsApp da AU usam dois fundos diferentes, que ajudam a saber em qual celular a conversa está acontecendo.`,
        imagens: [
          { arquivo: "a606-fundo-conversas-eduarda.jpg", legenda: "Celular da Eduarda", explicacao: "Fundo de fitas cassete, usado nas conversas vistas pelo celular da Eduarda." },
          { arquivo: "a606-fundo-conversas-lorena.jpg", legenda: "Celular da Lorena", explicacao: "Fundo de flores, usado nas conversas vistas pelo celular da Lorena." }
        ] }
    ],

    // Faixas = atualizações. As narrações foram transcritas e quebram a galeria.
    capitulos: [
      { numero: 1, titulo: "1ª atualização",
        midias: { att: 1, prefixo: "a606-att1-", total: 72, videos: [22, 26, 49, 51, 52],
          narracoes: {
            1:  { tempo: "SEXTA, noite (madrugada de sexta para sábado)" },
            14: { tempo: "SÁBADO, manhã." },
            38: { tempo: "SÁBADO, tarde" },
            65: { tempo: "SÁBADO, noite." }
          } } },
      { numero: 2, titulo: "2ª atualização",
        midias: { att: 2, prefixo: "a606-att2-", total: 77, videos: [11, 14, 29, 31, 40, 43, 44, 61, 75],
          narracoes: {
            1:  { tempo: "SEGUNDA, tarde." },
            35: { texto: `Eduarda Fragoso amava cozinhar.

Ela sempre acreditou que uma das formas mais bonitas de demonstrar o amor por alguém era através da comida. Sua velha avó, dona Elza, dizia que nossas emoções passavam para a comida. Ela se sentava no chão de cimento queimado vermelho, sentindo a fumaça do fogão a lenha queimando em seu nariz arrebitado e ouvia as histórias fantásticas da velhinha.

Vó Elza contava uma história sobre como um dia sua mãe estava tão triste que as próprias lágrimas salgaram o feijão. Ou sobre quando, em um surto de felicidade por ter sido pedida em casamento pelo seu amado, fez um bolo que fazia todos ao seu redor gargalharem.

Eduarda era Policial Civil e não se arrependia de ter traçado este caminho. Amava seu trabalho, apreciava o café barato da delegacia no fim de um expediente e se acalmava com o cheiro de papel burocrático. Porém, o seu cheiro favorito no mundo sempre seria o de bolo assando.

Cozinhava como forma de se acalmar e organizar as próprias emoções. Quando foi morar sozinha, usou a cozinha do apartamento como seu laboratório, e inventava pratos para se distrair e se regular. Por vezes, gostava mais de cozinhar do que de comer.

Já havia virado seu ritual: quando tinha plantão pela madrugada, cozinhava o café da tarde. Vinha de uma família de descendência italiana, que tinha costume de comer à tarde e não jantar. Sua avó preparava um grande café da tarde, chamava a família e empanturrava os netos de pão e guloseimas. Quando tinha plantões diurnos, gostava de cozinhar a janta enquanto tomava um vinho e ouvia música. Massas faziam parte da sua especialidade.

Naquele dia, seus amigos a acompanhavam em seu ritual. Havia assado um bolo de laranja, uma receita muito antiga de sua avó. Aproveitou que tinha laranjas frescas da feira e já fez uma calda, afinal, detestava bolo seco.

-Me sinto uma senhorinha da era vitoriana tomando café às quatro da tarde e fofocando com as comadres. - Paulinho disse, sua enorme mão não conseguia comportar a alça pequena da xícara florida e ele precisava erguer o dedinho para cima.

-Pois me passe o bolo, dona Lurdes, que eu tô com fome. - Meggye pediu, metade de um pão mastigado no canto da boca e a xícara de café fumegante em uma das mãos.

-Juquinha, que história é aquela da sua vizinha de cima não te deixar dormir? - Gerluce começou, servindo-se de um pedaço do bolo - Conta essa fofoca, menina.

-Ai, gente, não querendo soar como uma lésbica amargurada… - começou ela - mas a mulher dá mais que chuchu na cerca.

Paulinho quase engasgou com a fala e Meggye deu uma risada sincera. Eduarda engoliu um pedaço de bolo para disfarçar o nó na garganta, afinal, era uma situação delicada a que se encontrava.

-Amiga, eu consigo sentir a inveja na sua voz. - Meggye pontuou.

-Que nada, Meggye. A mulher deve estar toda esfolada, coitada. Se reparar bem, deve estar andando até torto.

-E por que você não fez uma reclamação formal na portaria? - Gerluce perguntou - Se é tão alto assim, você deveria formalizar.

-A Luce tá certa, Juquinha. - Paulinho concordou - Senão nunca vai parar, na real, só vai piorar.

-Não, gente. - Ela negou com a cabeça - Não sou esse tipo de vizinha não.

-E que tipo de vizinha você é? O tipo trouxa? - Meggye, no seu típico jeito debochado, inquiriu - Todo dia saem na rua um malandro e um otário mesmo.

Antes que Eduarda pudesse rebater, o celular de Paulinho tocou, encerrando o assunto.

-Alô? - Ele atendeu, sério - Ah, oi, Daniel! Sim, estou aqui sim. - Todas olharam para ele com expectativa - Claro, já desço pra liberar sua entrada.

Ao desligar o telefone, três par de olhos estavam fixados em seu rosto.

-O novo vizinho chegou, querem conhecê-lo?` },
            36: { omitir: true },
            37: { omitir: true },
            47: { tempo: "TERÇA, tarde" },
            52: { tempo: "⌚ QUEBRA DE TEMPO ⌚\nDE SEGUNDA-FEIRA PARA SEXTA-FEIRA" },
            53: { tempo: "SEXTA, noite." }
          } } },
      { numero: 3, titulo: "3ª atualização",
        midias: { att: 3, prefixo: "a606-att3-", total: 88, videos: [22, 24, 35, 36, 41, 47, 58, 67],
          narracoes: {
            48: { tempo: "SÁBADO, manhã." },
            85: { tempo: "SÁBADO, noite." },
            86: { texto: `Eduarda se considerava uma mulher íntegra.

O trabalho que fazia na delegacia era sério, ela era uma pessoa dedicada e não admitia que tivesse o caráter questionado. Durante toda a madrugada, ficou se martirizando por ter dito o que disse no grupo do prédio, e depois por ter dito o que disse para sua vizinha de cima.

O fato era que Eduarda também já esteve loucamente apaixonada por alguém, e sabia que esse tipo de sentimento deixa as pessoas cegas. Ora, ela trabalhava na polícia, havia investigado centenas de crimes passionais, o suficiente para saber que o amor nos deixa tontos. Ainda assim, ter sua palavra questionada mexia em lugares sombrios dentro de si.

Por que ela inventaria uma coisa daquelas? Por que faria tal disparate apenas para prejudicar alguém? Era incapaz daquilo, e não só ela como todos os seus amigos sabiam. Lorena não sabia, e aquele era o problema. E foi por isso que Eduarda se sentiu na necessidade de *provar.*

Era uma mulher jovem trabalhando na Polícia Civil, precisava se provar todo santo dia. Não deveria ser daquela forma, mas era. Não conseguia controlar o machismo que envolvia sua profissão, não conseguia controlar a forma como as pessoas a viam, mas conseguia controlar a maneira que ela mesma se enxergava. E era aquilo que faria.

Durante o dia, passou boa parte do seu tempo organizando documentos em sua pequena sala. Já era noite, havia saído da delegacia apenas para uma ocorrência. O tempo todo enquanto trabalhava, mantinha um olho no computador e o outro no celular, por onde tinha acessado o link enviado por Paulinho. Monitorou a movimentação do prédio o dia todo.

Viu quando Joelly saiu pregando diversos cartazes pelo condomínio, viu o porteiro cochilar de boca aberta e viu até mesmo sua amiga Maggye voltando cheia de sacolas do mercado. Mas foi durante a noite que realmente viu o que queria.

Estava terminando um boletim de ocorrência que havia ficado pendente quando viu entrar pela portaria uma mulher diferente. Soltou os dedos do teclado do computador e segurou o celular, aproximando a tela. A mulher era loira, tinha mais ou menos a sua idade e *definitivamente* não morava ali. Eduarda começou a gravar a tela do celular quando a mulher saiu de perto da guarita e entrou no elevador.

Mudou a câmera, focando na do elevador. Ampliou a imagem para o monitor de números brilhantes e… *bingo!* A loira apertou o sexto andar. Mudou para a câmera do corredor daquele andar e observou com um sorriso enorme quando a mulher caminhou lentamente e parou na frente da porta do 606, *o apartamento de Lorena.* A porta foi aberta e logo a loira foi puxada pela cintura para dentro.

-Te peguei. - Eduarda disse baixinho para a tela do celular e finalizou a gravação.` },
            87: { omitir: true }
          } } }
    ]
  },
];
