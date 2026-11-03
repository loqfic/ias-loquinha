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
      midias: { att: 6, prefixo: "a606-att6-", total: 80, videos: [12, 30],
                narracoes: { 1: { tempo: "DOMINGO, manhã." },
                             40: { texto: `narração transcrita...` },
                             41: { omitir: true } } }
    - Os arquivos se chamam prefixo + número com 3 dígitos: a606-att6-001.jpg,
      a606-att6-012.mp4 (vídeo) e a606-att6-012-capa.jpg (capa do vídeo).
    - Atualização em partes: uma faixa por parte, com prefixo próprio
      (a606-att4a-, a606-att4b-) e att: "4 · parte I" / "4 · parte II".
    - "tempo": marcações da conta TEMPO; "texto": narração em prosa.
    - "omitir": imagem que é continuação da narração anterior (não aparece).
    - A legenda no visualizador sai sozinha: "Att 6 - Cap 12".

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
          } } },
      { numero: 4, titulo: "4ª atualização · parte I",
        midias: { att: "4 · parte I", prefixo: "a606-att4a-", total: 110, videos: [28, 29, 30, 33, 36, 53, 60],
          narracoes: {
            1: { texto: `Lorena não se considerava uma pessoa violenta, tampouco barraqueira.

Muito pelo contrário; ela muitas vezes foi elogiada por conseguir manter-se calma diante dos piores cenários possíveis. Como quando seu pai a expulsou de casa depois de anunciar que trancaria a faculdade de Direito e faria Letras. Ou quando Leonardo, seu irmão mais velho, explanou no meio do jantar em família com seus avós que Lorena estava beijando mulheres.

Quando se mudou para o apartamento de Samantha, sua amiga de infância, sentiu como se seu peito fosse de aço por não ter derrubado sequer uma lágrima na frente de Santiago Ferette. Lorena, naquele dia, nem ao menos havia levantado sua voz, por mais que estivesse se sentindo mais enervada do que nunca. Não admitia injustiças.

Mas, ao abrir o vídeo enviado por sua vizinha de baixo durante sua pausa no bar, ela sentiu que tudo aquilo que estava guardado dentro de si em seus 28 anos de vida havia entrado em erupção. Lorena podia jurar que estava enxergando tudo vermelho naquele momento.

Não avisou ninguém, sequer pensou antes de arrancar o avental (seu uniforme de trabalho) e jogá-lo por sobre o balcão. Nem se lembrava de ter pedido o Uber, só sabia que chegou no prédio e empurrou a porta da frente com tanta força e tanta pressa, que sequer respondeu ao “boa noite” animado do porteiro Jairo.

E, se Lorena havia entrado no elevador *cega* de ódio, cruzou a porta do apartamento com o dobro da ira. Depois daquilo, tudo foi um grande borrão de acontecimentos distorcidos pelas suas lágrimas. Pérolas líquidas de pura *decepção.* Um bolo na garganta que só saiu quando começou a berrar a plenos pulmões.

Se perguntarmos a ela hoje o que gritou, não saberia nos responder. Quando entrou no quarto, primeiro ouviu *o prazer.* Depois viu, *a nudez.* E então um amontoado de roupas e gritos. A amante partiu logo, não sabe-se para onde. A roupa do corpo e o pânico no olhar. E então ela fitou sua algoz.

Beatriz, assustada e pelada como havia vindo ao mundo, a encarou de volta. Lorena não deu nem sequer a chance de ouvir o que ela tinha a dizer. Ensandecida, apenas se lembrava de ter recolhido roupas, malas, bolsas, calçados - não necessariamente nessa ordem - e arremessado para o corredor do sexto andar.

Sua, agora, ex-namorada, tentou impedi-la, cabelos bagunçados e braguilha da calça aberta. Mas era inútil. Lorena jamais seria parada depois que iniciou. Precisava de um *detox.* Como quando estava comendo muita besteira e ficou um mês sem comer ultraprocessados para limpar seu organismo. Só que, naquele caso em específico, precisava se limpar de Beatriz.

Passou os minutos seguintes jogando porta afora - corredor adentro - tudo em sua casa que era de Beatriz. Jogou suas roupas, com cabide e tudo. Jogou sapato, jogou as almofadas bordadas que haviam ganhado da sogra, porta-retratos, casaco, chinelo, e até mesmo os salgadinhos da cozinha que Lorena *odiava* o cheiro e se forçava a aturar porque sua companheira adorava. Não parou um segundo sequer, até que tudo que lhe lembrava Beatriz estivesse fora de seu apartamento.

No corredor, os vizinhos começavam a se juntar. Paulinho, o síndico, foi o primeiro a chegar. Depois sua esposa e sua enteada. E então, dona Josefa, uma senhora que era vizinha de porta de Lorena. Os outros vizinhos daquele andar, a drag recém chegada, todos começaram a aparecer por causa da gritaria.

Ao prever a enorme confusão e pensando em cumprir seu papel de síndico, Paulinho havia mandando uma mensagem para Eduarda, pedindo que ela viesse intervir enquanto figura de autoridade da lei. Ela logo respondeu que estaria lá em 5 minutos, mas que era para ele segurar as pontas até que ela chegasse.

-Meninas, eu acho melhor nós levarmos essa conversa para… - Paulinho até tentou intervir, mas Lorena não permitiu que ele continuasse, gritando por cima de sua voz.

-Junta os teus *trapos* e some! - Berrou Lorena, olhos e rosto vermelhos - Eu não quero te ver nunca mais na minha vida!

-Meu amor, você precisa se acalmar… - Beatriz, com as mãos erguidas em oferta de paz, começou a dizer.

-Eu preciso que você suma da porra da minha frente! E nunca mais me chama assim! - E, ao responder, pegou um punhado de roupa do chão e empurrou contra o peito de sua ex.

Nesse momento, o elevador abriu e dele saíram Maggye, Samantha e Celina. Não foi preciso mais que três segundos para que elas fizessem uma barreira protetora ao redor de Lorena, que seguia histérica e fragilizada.

-Beatriz, eu acho melhor você ir agora. - Samantha, que sempre foi a pacificadora, pediu.

-Mas eu não tenho pra onde ir!

-Vai pra casa da puta que você tava comendo! - Retrucou Celina, envolvendo Lorena em seus braços.

-Quer saber? - Beatriz, enfim, espelhou a ira de Lorena - Eu vou, sim. Porque pelo menos ela me comia direito!

-Como é que é? - Lorena tentou se desvencilhar do abraço de Celina, mas foi contida pela amiga - Repete!

-Eu disse que pelo menos a minha amante me comia, diferente de você que não prestou pra passar em uma merda de um concurso público e tinha que ficar o dia todo trabalhando. - Beatriz disse de boca cheia, a saliva se acumulando nos cantos dos seus lábios - Com ela eu não precisava mendigar atenção e não precisava fingir interesse em um monte de poemas *ridículos.* Ela pelo menos não é burra como você.

Celina, que funcionava como barreira de contenção, explodiu juntamente com Lorena. As duas, quase de forma ensaiada, se soltaram e avançaram sobre Beatriz. Samantha foi rápida o suficiente para segurar Celina, mas não para evitar que Lorena colocasse as mãos nela.

E, no momento em que punho encontrou rosto, pé encontrou boca e os corpos, antes tão conhecidos, se emaranharam como nunca antes, o elevador novamente se abriu e Eduarda saiu de dentro dele. Mais que depressa, enfiou-se no meio do tumulto dos vizinhos, tropeçando nos objetos que estavam espalhados e segurou a primeira mulher que conseguiu lançar as mãos.

Essa mulher, para sorte ou azar, era Lorena.

Descabelada, vermelha, ofegante e sangrando um pouco, foi afastada da briga enquanto esperneava. Eduarda a segurou firme pela cintura, suas mãos calejadas de policial prendendo-a contra o próprio peito, impedindo que voltasse a brigar.

Lorena não via nada, apenas sentiu mãos fortes a desconectarem dos cabelos de Beatriz e a arrastarem para longe da confusão. Um perfume forte lhe envolveu e ela sentiu contra a pele o tecido de algo áspero. Apesar de toda gritaria e confusão, a voz que alcançou seu ouvido era calma, contida.

Eduarda pedia que ela se acalmasse, que não valia a pena. Repetia que tudo ia ficar bem, que ela ia ficar bem. Por sobre sua cabeça, ouviu a vizinha ordenando que tirassem Beatriz dali, e, ao ver Maggye arrastar sua ex-companheira elevador adentro, ela finalmente sentiu o baque.

Antes, apenas a raiva a consumia enlouquecidamente. Ao ver Beatriz *finalmente* afastar-se, tudo veio à tona.

Quando nosso coração é partido, não são apenas as imagens das dores que nos acometem. Ora, o amor nunca começava ruim, muito pelo contrário. E foi ali, naquele corredor repleto de vizinhos e roupas espalhadas, que Lorena afundou-se em lembranças.

O primeiro beijo, a primeira noite, o pedido de namoro, tudo voltou. Arrastou-a para um mar de pranto tão grande, que antes de fazer com que a represa de seu peito se rompesse, ela gritou de agonia. As pernas cederam e ela se colocou de joelhos ali mesmo, no chão. Agarrou o tecido áspero que a rodeava com ambas as mãos e puxou, desesperada para se ancorar em algo.

Eduarda, igualmente surpresa e abalada, abaixou-se com ela e a sustentou. Deixou que enfiasse o rosto molhado em seu pescoço, que a puxasse pela jaqueta.

-Vai ficar tudo bem. - Repetiu mais uma vez, ainda mais baixo, envolvendo-a em um abraço - Eu prometo.

Os vizinhos, como quem sentia que estava vendo algo que não deveria, começaram a sair, um a um. Restaram apenas Paulinho, Samantha e Celina. Suas amigas se aproximaram com pressa, e Lorena foi entregue a elas.

Não sabe ao certo como conseguiu se erguer e como parou no apartamento de Samantha, mas sabe que naquele dia chorou até o peito arder, até a voz sumir e até que o sono a levasse. Dormiu embalada em dois pares de braços amigos, e permaneceu com o cheiro do perfume doce de Eduarda incrustado em sua roupa.` },
            2: { omitir: true },
            3: { omitir: true },
            4: { omitir: true },
            5: { omitir: true },
            6: { omitir: true },
            37: { tempo: "DOMINGO, manhã." },
            98: { tempo: "DOMINGO, noite." },
            110: { tempo: "⌚ QUEBRA DE TEMPO ⌚\nDE DOMINGO PARA SEXTA-FEIRA" }
          } } },
      { numero: 5, titulo: "4ª atualização · parte II",
        midias: { att: "4 · parte II", prefixo: "a606-att4b-", total: 78, videos: [32, 48, 57, 60, 62, 68, 73],
          narracoes: {
            1: { tempo: "⌚ QUEBRA DE TEMPO ⌚\nSEGUNDA PARA SEXTA" },
            24: { tempo: "SÁBADO, manhã" },
            69: { tempo: "SÁBADO, noite." },
            77: { texto: `Eduarda era uma policial treinada.

Foi por isso que, durante a queda de energia, todos seus instintos estavam aflorados. Acendeu algumas velas pela casa, cozinhou uma massa simples ao molho sugo para comer e abriu um vinho chileno. Nada de extraordinário, afinal, estava apenas na própria companhia. Outrora, teria ligado um som baixo enquanto cozinhava, mas daquela vez não o fez.

Assim, sentou-se no tapete da própria sala durante a madrugada, alerta demais para dormir. A taça de vinho repousava ao seu lado, pela metade. Havia escolhido um livro para se distrair, e o escolhido foi seu favorito: Como água para chocolate. Pela décima vez, folheava as páginas gastas, relembrando de sua avó a cada linha lida.

Foi quando, perto das duas da manhã, imersa pela luz das velas e pela narrativa de Laura Esquivel, Eduarda ouviu um barulho. Era metódica o suficiente para saber que se tratava do terceiro degrau da escadaria que dava acesso ao seu andar - na qual, ela havia observado porque sempre usava as escadas, um piso estava oco. Imediatamente se levantou do chão.

Acendendo a lanterna do próprio celular, posicionou-o virado para a porta de seu apartamento. Ouviu, através da madeira, um murmúrio baixo e passos barulhentos, o que a deixou apenas mais preocupada. Foi então que a maçaneta se moveu, e um estrondo se fez ouvir em sua porta.

Mais que depressa, apanhou sua arma na gaveta do aparador que ficava próximo à entrada, e apontou-a para onde vinha o barulho. Contou até três mentalmente e, em um impulso rápido, destrancou e abriu a porta. De uma só vez, o corpo que estava apoiado contra a madeira despencou para frente, caindo aos seus pés.

-Lorena? - Eduarda murmurou, meio incrédula e meio surpresa.` },
            78: { omitir: true }
          } } },
      { numero: 6, titulo: "5ª atualização",
        midias: { att: "5", prefixo: "a606-att5-", total: 160, videos: [18, 26, 52, 60, 83, 85, 93, 96, 104],
          narracoes: {
            1: { texto: `*-Lorena? - Eduarda murmurou, meio incrédula e meio surpresa.*

-Merda! - Foi a única coisa que a Lorena disse, estatelada no chão.

O cheiro de álcool alcançou Eduarda antes do próprio perfume de Lorena, que também estava presente. Mais que depressa, ela depositou a arma no aparador, guardou o celular no bolso e se abaixou.

-Você está bem? Está machucada? - Perguntou, analisando o corpo estirado sem encostá-lo.

-Machucada? Eu? - E, por um momento, Lorena pareceu ultrajada. Tentou virar-se de bruços para se levantar, mas mal sustentou o próprio peso pelos braços e caiu com a cara no chão de taco novamente - Eu tô com o coração partido, isso configura machucado?

E, surpreendendo a si mesma e a Eduarda, começou a chorar copiosamente.

Sob a luz das velas, a policial sentiu o peito apertar. Manejou fechar a porta e se abaixou novamente, tocando o ombro da bêbada mulher em uma tentativa de consolo. Lorena chorava e soluçava alto, sua respiração dificultosa por conta do pranto honesto. Sua avó dizia que o choro de pinguço era o mais verdadeiro de todos, pois não havia amarra alguma em quem se embriagava àquele ponto.

Eduarda, com delicadeza, ajudou-a a se levantar. Lorena, bêbada como estava, parecia um peso morto, e, por ser maior que a ruiva, deu certo trabalho para ser arrastada até o sofá.

-Eu sou patética. - Disse entre soluços, e começou a repetir um mantra de “desculpa” infinito.

Eduarda, completamente perdida, não sabia ao certo o que fazer. Cogitou levá-la ao próprio apartamento e colocá-la para dormir na própria cama, então analisou suas opções. Não queria entrar no apartamento sem a autorização dela; não sabia se sustentaria uma bêbada chorona por um lance inteiro de escadas; não queria deixá-la sozinha e sem energia, perdida e confusa.

Rapidamente, buscou o próprio celular no bolso, sentou-se no tapete e vasculhou pelos contatos no grupo do condomínio. Mandaria uma mensagem para as amigas de Lorena, que moravam ali mesmo.` },
            2: { omitir: true },
            5: { texto: `Depois da tentativa frustrada de se comunicar com as mulheres, Eduarda até pensou em descer ao andar delas e bater na porta. Mas, naquele momento, Lorena parecia bem desperta. Sentou-se abobadamente no sofá, seus olhos verdes dilatados e opacos.

-Eu achei que ela me amava. - Balbuciou, limpando as próprias lágrimas com as costas da mão de um jeito violento - Mas como alguém pode me amar se eu mesmo me odeio?

Eduarda largou o celular de qualquer jeito sobre a mesa de centro e se aproximou das pernas dela, ainda sentada no tapete.

-Hey, não fala assim. - Disse, um nó em sua garganta. Lorena era linda mesmo caindo de bêbada e com cheiro forte de cerveja. Seus cachos rebeldes moldaram seu lindo rosto, suas bochechas estavam rosadas e até a forma como sua blusa listrada parecia amassada, revelando um filete de pele de sua barriga era estranhamente atraente para Eduarda.

-Mas é verdade. - Ela continuou - Eu sou uma fudida. Meus pais não me querem, minha ex não me quer, nem a porra do concurso que eu passei me quer. - E voltou a chorar.

Eduarda então levantou-se, e sentou ao seu lado. Antes que pudesse dizer algo que se arrependeria como “*eu te quero, Lorena*”, a morena atirou-se contra ela. Enfiou a cabeça em seu pescoço e enlaçou-a em um abraço meio molengo, mas firme o suficiente para que ela não tivesse forças de escapar.

E chorou novamente, com todo o desespero de uma mulher bêbada e traída, que entregou-se como nunca a uma pessoa e foi decepcionada. Chorou alto, bagunçadamente, agarrou mais uma vez a blusa de Eduarda e ela deixou, abraçando-a de volta. Era a segunda vez que fazia aquilo, mas jamais se acostumaria.

Eduarda sentia seu coração querendo alçar vôo, não sabia ao certo se pela proximidade com Lorena, ou pela preocupação. Ela não merecia aquilo, não merecia mesmo.

-Eu deveria ter te ouvido, me desculpa… - Murmurou Lorena contra seu pescoço, o hálito quente enviando arrepios involuntários por seu corpo - Me desculpa, por favor…

E repetiu uma, duas, dez vezes. Eduarda apenas alisou suas costas carinhosamente, repetindo que a desculpava e que tudo ficaria bem, como havia feito uma semana atrás, no meio do corredor do sexto andar. Lorena ficou ali por um tempo, e Eduarda deixou-se sujar pelas lágrimas dela.

Quando sentiu que a morena começava a se acalmar, desgrudou-se dela e arrumou seus cachos rebeldes para trás das orelhas, em um gesto terno.

-Eu vou pegar uma roupa pra você e você vai descansar um pouco, ok? Se quiser pode até tomar um banho.

Lorena, em meio ao seu torpor bêbado, ergueu uma sobrancelha.

-Você vai me dar banho?

Eduarda abriu a boca e fechou umas três vezes, sentindo o rosto esquentar.

-Não, não! - Disse apressadamente quando voltou a si - O banho foi apenas uma sugestão, acho melhor você ir dormir logo, né? Vem, eu te levo até o quarto.

Lorena seguia completamente aérea, o álcool correndo em suas veias mais rápido que o próprio sangue. Depositou todo seu peso sobre Eduarda e se esforçou o mínimo para chegar até o quarto com as próprias pernas. Enquanto praticamente a carregava, a policial se perguntou o que estava fazendo da própria vida. Não bastasse carregá-la, ainda precisou iluminar o caminho com a lanterna do próprio celular para evitar acidentes.

Ao chegarem ao quarto, colocou-a sentada na cama e acendeu algumas velas em lugares estratégicos - sobre a escrivaninha do quarto, na cômoda ao lado da cama e uma sobre o armário. Remexeu seu armário à procura de uma roupa confortável, e quando se virou, encontrou Lorena com a blusa presa na altura do rosto, o busto coberto apenas por um delicado sutiã preto.

-Lorena, o que você está fazendo!? - Perguntou, exasperada, seu rosto ficando novamente vermelho. Agradeceu à penumbra e à própria embriaguez da mulher por não permitir que ela reparasse no rubor de suas bochechas.

-Ué, você não disse pra eu trocar de roupa? - Sua voz saiu abafada contra o tecido enrolado da blusa - Porra, eu acho que a blusa tá tentando me sufocar.

Eduarda jogou a muda de roupas que havia separado sobre a cama, e aproximou-se de Lorena tomando cuidado para não tocá-la em qualquer outro lugar que não fosse a blusa enrolada. Assim que a livrou da peça, percebeu a proximidade que estavam. Para conseguir realizar sua tarefa, Eduarda havia se inclinado sobre a mulher sentada na cama, e acabou por ficar entre suas pernas abertas. Lorena a encarava de perto, sem realmente enxergá-la direito, mas se esforçando muito para que conseguisse.

Estavam, sem querer, a uma respiração de distância. Por um momento, nenhuma das duas se mexeu. Lorena, bêbada de cair, sussurrou:

-Você é muito bonita, policial. - E seus olhos opacos desceram pelo rosto de Eduarda.

Esta, por sua vez, engoliu em seco. Queria se afastar, mas o cheiro do perfume de Lorena estava muito mais forte que o cheiro de álcool e ela sentia-se presa.

-Sabe - Lorena continuou, ainda sussurrando e ergueu uma das mãos, tocando levemente a ponta do nariz de Eduarda, sorrindo - mesmo quando eu era uma mulher comprometida, ficava difícil não reparar em você de farda. - confessou.

Ali estava a sinceridade escancarada dos bêbados. Eduarda, pela terceira vez na noite e como uma adolescente na puberdade, corou. Quando Lorena abaixou o olhar pela segunda vez para sua boca, reuniu forças para se afastar.

-A roupa está do seu lado na cama, vou sair pra você terminar de se trocar. - Disse, passando as mãos nervosamente pelos cabelos e foi em direção à porta do quarto - Vou buscar água e já volto, fique à vontade.

E saiu a passos apressados. Parou na cozinha, encheu um copo de água e jogou no próprio rosto, molhando sua blusa e o chão da cozinha.

-Toma jeito, porra! - falou para si mesma mais alto do que deveria, e estapeou a bochecha esquerda com um pouco de força - A mulher tá bêbada, tá fragilizada. Foca, caralho!

Então, encheu novamente o copo de água e foi em direção ao quarto. Parou na porta assim que viu Lorena jogada de qualquer forma na sua cama, de blusa e calcinha. Olhou para o teto do apartamento.

*Deus é testemunha de que eu estou tentando muito não olhar pra ela dessa forma, mas ela não tá me ajudando. Senhor, escolha outra guerreira, por favor…*

-Hm… - pigarreou - Você precisa de ajuda para colocar o short? - Ofereceu, olhando para os próprios pés, para a cômoda e para todo canto que não fosse a morena na sua cama, quase seminua e iluminada à luz de velas.

-Gosto de dormir fresquinha. - Disse Lorena simplesmente, encarando o teto.

-Tudo bem. - Eduarda respondeu, colocando o copo de água na cômoda ao lado da cama - A água está aqui se você quiser, vou te deixar à vontade.

Mas, antes que pudesse sair, Lorena chamou por seu nome.

-Você pode me cobrir?

Eduarda franziu a sobrancelha. *Ela não acabou de dizer que gostava de dormir “fresquinha”?*

Ficou em silêncio por dez segundos, até perceber que não poderia cobrar coerência de uma mulher *bêbada.* Aproximou-se dela, desviando do que parecia ser um sutiã no chão do quarto. *O sutiã de Lorena.* Suspirou alto.

*Porque Deus nos abandonou?*

Lorena, meio torta, se acomodou na cama esperando pela coberta. Eduarda a ajeitou, tomando todo cuidado do mundo para não se aproximar demais, como se a mulher deitada ali na sua cama pudesse queimá-la ao toque. Depois de acomodada, Lorena lhe lançou um sorriso bêbado.

-Deixa só a Celina saber que a policial gostosa me deu banho e me colocou pra dormir. - disse e riu alto.

Eduarda, apesar de envergonhada, acompanhou o riso, escondendo o rosto entre as mãos.

-Eu não te dei banho, Lorena.

-Shhhhh. - Ela a interrompeu, erguendo um dedo longo de unha preta e o depositando bruscamente sobre os lábios de Eduarda - Ela não precisa saber dessa parte.

Eduarda sorriu, e Lorena abaixou a mão, cedendo ao cansaço.

-Boa noite, Lorena. - disse, e não obteve resposta.

Assim que ouviu o ressoar da morena, levantou-se, desviou novamente do sutiã jogado no chão e assoprou cada uma das velas, caso a bêbada acordasse e tivesse uma péssima ideia no meio da madrugada. Deixou a porta entreaberta e se dirigiu ao sofá.

Naquela noite, não conseguiu dormir. Só conseguia pensar na vizinha deitada em sua cama, dormindo pacificamente no seu travesseiro, acomodada entre os seus lençóis. Imaginou o cheiro que seu quarto ficaria, o cheiro cítrico de Lorena, o meu cheiro que tinha ficado em sua jaqueta e ela não teve coragem de lavar.

Eduarda era patética, definitivamente. Ficou repetindo esse mantra na cabeça durante a noite enquanto não dormiu, criando cenários fictícios nos quais sua vizinha a houvesse conhecido sob outras circunstâncias. Nesses cenários, elas tinham uma chance de dar certo.` },
            6: { omitir: true },
            7: { omitir: true },
            8: { omitir: true },
            9: { omitir: true },
            10: { omitir: true },
            11: { omitir: true },
            23: { tempo: "DOMINGO, manhã" },
            41: { texto: `A primeira coisa que Lorena sentiu ao acordar, foi uma lancinante dor de cabeça.

E então seu nariz detectou um cheiro diferente, mas, ainda assim, estranhamente familiar. Apertou os olhos, tentando abri-los sem sentir que teria o próprio cérebro sugado para fora - falhou. Suspirou e se enfiou ainda mais no travesseiro macio, e, ao notar que não era o seu, levantou-se abruptamente.

A cabeça latejou, sua retina ardeu tentando se acostumar à escuridão e, em meio a ressaca *imoral,* Lorena conseguiu identificar que não estava em seu próprio quarto. Olhou ao redor e tentou com todas as suas forças se localizar, mas as lembranças da noite anterior eram meros borrões em sua mente.

Pelo menos não estava na cama da ex, afinal, Beatriz nem casa tinha.

Mesmo em tempos difíceis, Lorena sempre tentava ver o lado positivo das coisas. Um dia depois de descobrir que havia sido traída, tentou se convencer de que pelo menos não era viciada em crack. Mas, naquele momento, a constatação de que a ex não tinha onde cair morta não lhe pareceu tão animadora. Talvez fosse a ressaca, ou talvez fosse o gosto amargo em sua boca, ela não saberia ao certo dizer.

E tudo só piorou drasticamente quando percebeu que estava de blusa e calcinha. Uma blusa que *não era sua*. E, com o resto de energia e dignidade que ainda lhe restava, parafraseou o que todo ex-bêbado diz logo após acordar com uma ressaca devastadora:

-*Nunca mais eu bebo…*

E, após resmungar, esfregou os olhos. Descobriu-se, levantou aos trancos e barrancos e nem sequer cogitou analisar um pouco mais a situação - ou até mesmo suas vestimentas - antes de sair andando pelo apartamento. Passou pelas fotos penduradas no corredor e não reparou, passou ao lado de um vaso de plantas bem cuidado, e, ao chegar na sala, também não reparou na arma esquecida por sobre o aparador ao lado da porta.

Desde o quarto, sentiu um cheiro fresco de coisa sendo assada, algo muito parecido com pão quentinho. Sua barriga roncou, sua saliva grossa da ressaca deu uma trégua e ela apenas seguiu até encontrar o cheiro. O apartamento era pequeno, e, se não fosse pela posição da mobília, Lorena poderia jurar que era *igualzinho* ao seu.

Chegando até a cozinha, paralisou na entrada do cômodo. Quem lhe encarava do outro lado da ilha de granito era ninguém mais, ninguém menos, que sua vizinha de baixo. Ela mesma, a policial ruiva. *E gostosa*, como diria sua amiga Celina.

Eduarda, que segurava uma forma de pães recém-saídos do forno, ao virar-se e deparar-se com sua vizinha vestindo sua blusa e calcinha, com o rosto inchado de sono e os cabelos castanhos esvoaçados, sentiu um solavanco no peito. O sol da janela da cozinha banhou Lorena com uma luz natural que deixava os seus olhos verdes ainda mais límpidos, e a pele das suas pernas desnudas parecia reluzir em dourado.

Eduarda Fragoso, investigadora renomada em sua delegacia, com anos de treinamento e concursada pelo estado, fez o que qualquer policial faria:

Deixou a forma inteira de pães cair da sua mão.

Lorena, em um reflexo meio bêbado, ergueu as mãos de onde estava, mas não conseguiu impedir a catástrofe.

-Merda! - Eduarda murmurou e passou o próximo minuto tentando pegar os pães pelando de quente para devolver para a forma sob olhos verdes atentos.

-Você tá bem? - Lorena perguntou, a voz rouca levando arrepios para a coluna de Eduarda.

-Sim, sim. - Respondeu rápido, se erguendo, pendurando o pano de prato que estava em sua mão no ombro e tentando escorar no mármore da pia, quase escorregando novamente - Eu que deveria perguntar, na verdade. - E gesticulou nervosamente em direção a Lorena - Você acordou melhor?

Lorena, ainda sem perceber que estava pobremente vestida diante de uma semi-desconhecida, lançou a Eduarda um olhar confuso.

-Defina “melhor”. - Disse, fazendo aspas - Sinto que fui atropelada por um caminhão.

Eduarda sorriu, um sorriso pequeno e singelo.

-Eu imagino.

-Imagina? - Lorena questionou, sentindo nas panturrilhas um vento frio da janela. Sob a blusa, sentiu seus mamilos ficarem rígidos e automaticamente ergueu a mão para cobri-los. Empalideceu *na hora.* Lembrava-se de ter saído de casa de sutiã - Onde está meu sutiã!? - Vocalizou antes que pudesse pensar.

Eduarda, em contraste a ela, envermelhou.

-No chão do meu quarto. - Respondeu automaticamente, e a resposta crua foi o estopim para o mini-surto de Lorena.

-No chão do seu quarto. - Repetiu, e nenhuma das duas sabia ao certo se aquela era uma pergunta ou uma afirmação - O que meu sutiã está fazendo no chão do seu quarto? - Aquela, sim, era uma pergunta. Uma pergunta muito válida.

Eduarda pigarreou e trocou o pano de ombro.

-Você tirou e jogou lá.

As respostas estavam lacônicas, é fato. Mas ela se deu um desconto, afinal, depois do tópico *sutiã* e de sua vizinha estar na sua frente segurando os próprios seios por cima da blusa, sua concentração não era a das melhores.

-Eu tirei e joguei lá. - Lorena repetiu, como a um disco riscado - Tem mais alguma coisa que eu fiz ontem que eu deva saber? - Perguntou, mesmo que estivesse assustada com as possíveis respostas - Por acaso a gente… - e gesticulou primeiro para si e depois para Eduarda.

A policial, meio abobada pelas pernas desnudas a sua frente, engoliu a saliva.

-A gente…?

Lorena, percebendo que ela era meio lentinha, fez uma tesoura em cada mão e gesticulou, unindo-as. Eduarda imediatamente arregalou os olhos.

-O que!? Não! - Se apressou em responder - Não, não foi nada disso! Eu jamais faria isso!- E trocou o pano de ombro - Quer dizer, não é que eu *jamais* faria isso, não me entenda mal! Você é uma mulher muito linda, é óbvio que eu faria *isso* com você mas…

E, enquanto balbuciava tentando se explicar, um pequeno sorriso se ergueu nos lábios de Lorena. Eduarda soava adorável tentando desesperadamente garantir que elas não haviam transado e se perdendo em seu raciocínio.

-E aí a energia acabou e você apareceu bêbada aqui! - Respirou fundo e trocou o pano de ombro - Acho que você errou o apartamento, estava muito escuro e, como eu disse, você estava bêbada. Mas eu juro, nada aconteceu e…

-Eduarda… - Lorena tentou interrompê-la.

-Você estava muito bêbada, tipo, muito, e…

-Eduarda… - tentou novamente.

-E eu sei que você está só de calcinha, mas você disse que era porque gostava de dormir fresquinha e…

-Eduarda! - falou mais alto e Eduarda finalmente se calou, puxando uma longa respiração - Não precisa se explicar, eu acredito em você.

-Acredita? - a ruiva perguntou abobalhadamente e trocou o pano de ombro.

-Acredito.

A cozinha então foi imersa em um silêncio desconfortável, até que Eduarda, notando como Lorena estava sem graça, manejou dizer:

-Eu fiz pão.

Lorena abriu a boca para responder, mas sentiu uma pontada na cabeça. A ressaca ainda estava ali, latente. Olhou para Eduarda, para a assadeira de pães e finalmente para as próprias pernas desnudas. Ouviu a voz de seu controlador pai a repreendendo.

*Lorena Ferette, esses não são os trajes de uma dama!*

De repente, sentiu-se pequena diante da imensidão dos olhos castanhos que lhe aguardavam com expectativa em uma cozinha que não era sua. Os olhos de sua vizinha sempre foram tão brilhantes daquele jeito? Ela sempre foi tão simpática? Até o pão daquela mulher parecia mais cheiroso que os outros, era bizarro.

Retomando brevemente a consciência e ignorando o roncar da própria barriga, Lorena sentiu uma urgência em sair dali e ir surtar pela sua irresponsabilidade no próprio apartamento.

-Muito obrigada, Eduarda, por tudo. Mesmo. - Disse e começou a se afastar bem devagar - Mas eu me lembrei que eu tenho um compromisso à tarde e eu meio que preciso ir rápido pro meu apartamento. Mais uma vez, muito obrigada. Eu vou… - Pigarreou e quase tropeçou andando de costas, Eduarda a acompanhou - eu vou agora.

E, em um fôlego só, sem pegar sutiã, sem colocar calça, sem ao menos calçar a cara, saiu batendo a porta do apartamento. Eduarda ficou por longos segundos parada na sala encarando a porta.

-*Eu fiz pão.* - imitou a própria fala com uma vozinha irritante - Porra, Eduarda! Menina tapada!` },
            42: { omitir: true },
            43: { omitir: true },
            44: { omitir: true },
            45: { omitir: true },
            46: { omitir: true },
            47: { omitir: true },
            91: { tempo: "DOMINGO, tarde." },
            115: { tempo: "DOMINGO, noite." },
            159: { texto: `Eduarda leu a mensagem de Lorena e ficou por alguns segundos parada encarando a tela do celular. A mulher havia visualizado, mas não respondeu. Frustrada e confusa, deixou o aparelho sobre a bancada da cozinha e voltou ao que estava fazendo.

Era domingo à noite, o que significava que, para acabar com aquele sentimento ruim do fim de semana, Eduarda estava fazendo o que mais gostava: cozinhar e tomar vinho.

Sempre que começava o preparo de alguma comida, abria uma garrafa e bebia lentamente enquanto fazia as coisas. Naquela noite o prato escolhido era carbonara, o favorito de sua avó. Já tinha tudo mais ou menos preparado, e só precisava colocar a massa fresca na água fervente.

O aroma do bacon já frito exalava pelo apartamento, o vinho estava gelado e ela tinha acabado de tomar um banho refrescante. Colocou uma música baixinho para tentar se distrair, convencendo-se de que aquele era apenas mais um domingo normal.

Estava prestes a colocar o macarrão na água quando sua campainha tocou. Congelou com a massa na mão, confusa. Não estava esperando ninguém. Puxou o celular da bancada e conferiu a hora. 20h03 da noite. Achou estranho, mas ainda assim caminhou calmamente até a porta.

Ao abri-la, deparou-se com um dos motivos da repentina vontade de beber em pleno domingo.

Encarando-a do outro lado da porta, Lorena segurava uma garrafa de vinho e portava um sorriso de covinhas que era considerado ilegal em pelo menos 54 países diferentes. Sem perceber, Eduarda espelhou o sorriso dela, mas de uma maneira muito mais *abobada.*

-Boa noite, Eduarda.

A ruiva abriu a boca uma, duas, três vezes. Ainda acreditava piamente que aquela era uma visão provinda da segunda taça de vinho, era a única explicação. Nunca achou verdadeira a frase que dizia que “*você atrai aquilo que pensa*”, mas estava muito enganada.

-Boa noite. - Conseguiu dizer.

Lorena a encarou, divertida. Deixou seus olhos verdes *lindos* vagarem por detrás do ombro de Eduarda, conferindo se ela estava sozinha no apartamento. Ergueu a garrafa de vinho de um jeito charmoso e disse, por fim:

-Eu juro que dessa vez eu acertei o apartamento.` },
            160: { omitir: true }
          } } }
    ]
  },
];
