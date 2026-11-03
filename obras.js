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
    - Atualização que chegou em partes continua sendo UMA faixa: use
      midias: { att: 4, partes: [ { prefixo: "a606-att4a-", total, videos, narracoes },
                                 { prefixo: "a606-att4b-", total, videos, narracoes } ] }
      Cada parte numera as próprias narrações (1, 2, 3...); no site a contagem
      das mídias continua (Cap 111 = 1º arquivo da segunda parte).
    - "tempo": marcações da conta TEMPO; "texto": narração em prosa.
    - "omitir": imagem que é continuação da narração anterior (não aparece).
    - A legenda no visualizador sai sozinha: "Att 6 - Cap 12".

  - jogo:        opcional; cria a aba "Jogo" ao lado de Personagens:
        jogo: { arquivo: "interfone.html", titulo: "...", descricao: "..." }

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
  {
    id: "se-amar-for-crime",
    tipo: "oneshot",
    titulo: "se amar for crime, me prenda agora",
    autora: "ias | @medverias",
    capa: "capa-se-amar-for-crime.jpg",
    icone: "onca",
    sinopse: "Na qual a investigadora Fragoso é acionada 3 vezes na mesma semana por causa de desordem pública, e a causa das 3 ocorrências era sempre a mesma morena de olhos verdes.",
    tags: ["cidade pequena", "policial", "filha do prefeito"],
    maior18: true,
    data: "2026-11-02",
    texto: `## 1º ocorrência

Quando Eduarda ingressou no Departamento de Polícia da pacata cidade de Sales Oliveira, não foi bem aquilo que ela havia imaginado. Certo, ela deveria prever que, por ter 10.000 habitantes, a cidade não seria tão movimentada e não haveria tantas ocorrências, mas nem de longe antecipou que, durante o plantão da madrugada de uma sexta à noite, era aquilo que ela faria.

Até porque aquele tipo de ocorrência era função da Polícia Militar, não da Polícia Civil. E, caro leitor, não quero que você a entenda mal, mas ela não havia se formado em Direito e estudado feito uma condenada para passar em um concurso público para ser solicitada para separar briga de bar. Não que ela fosse orgulhosa demais para aquilo, Eduarda apenas simplesmente sabia que aquela situação se tratava de um desvio de função.

Mas, como às vezes a única patrulha daquela cidade estava ocupada com outra ocorrência qualquer e ela estava ocupada com absolutamente nada, era a ela a quem a Delegacia Municipal recorria. E Eduarda, estando a aproximadamente um ano ali, já havia visto muitas coisas.

Já havia recebido denúncias sobre um ladrão de galinhas, que resultou em uma briga entre dois vizinhos. Posteriormente, descobriu que o “ladrão” das galinhas era um cachorro que vivia nas ruas apelidado carinhosamente pela vizinhança de *Fábio Júnior.* Já havia interferido em ocorrências domésticas, em brigas familiares e em todo tipo de esquisitice de cidade pequena, inclusive como aquela a qual estava se dirigindo: uma briga de bar.

Era sexta-feira de madrugada, pós jogo clássico entre Corinthians e Palmeiras e os ânimos estavam alterados na pequena cidade. Eduarda esperava dois velhos bêbados, talvez um corno brigando à toa, mas nada a preparou para a cena que viu quando chegou ao local.

-Polícia civil, abaixa essa garrafa! - gritou, adentrando o bar meio vazio com facilidade - Mãos pra cima! - Sua arma empunhada, sua feição séria.

Do outro lado do estabelecimento, com uma garrafa de pinga 51 quebrada e um olhar meio desvairado, uma morena cessou por um instante os próprios movimentos, impedindo que a garrafa finalizasse seu caminho até a cabeça de um homem sentado em uma cadeira velha. Atrás dela, segurando em sua cintura desesperadamente, outra mulher tentava impedi-la.

Ao passar os olhos pelo local e especialmente pelo homem, Eduarda percebeu que talvez tenha chegado meio atrasada. O pobre rapaz já estava até tonto, de tanto apanhar. Possuía arranhões pelos braços, rosto e um olho que certamente ficaria roxo. Alguns homens de meia idade estavam ao redor dele, tentando, de forma bêbada, fazer um escudo de proteção contra a mulher.

Ao ouvir o grito da policial, que ao mesmo tempo que empunhava a arma erguia seu distintivo, todos congelaram. Ao fundo, *Cindy Lauper* berrava nas caixas de som. Pelo chão, vidro, papel e restos de bebidas. O cheiro de cerveja cercava todos os presentes, que assistiam aquele momento com expectativa.

-Agora deu a merda mesmo! - Reclamou a morena que portava a garrafa, soltando-a e erguendo as mãos.

O homem, ainda que meio grogue de apanhar, copiou seus movimentos sem se levantar da cadeira. O restante do bar ergueu também os braços. Atrás da morena encrenqueira, a outra mulher, de pele mais escura, parecia completamente apavorada.

-Eu falei que ia dar merda, Lorena! Meu pai vai me matar! - reclamou, a voz embargada.

-Eu resolvo, Maggye, respira. - A morena tentou tranquilizá-la, e, ao dizer, abaixou as mãos.

-Levanta as mãos! - Eduarda ordenou - Não mandei você se mexer!

Como se estivesse se dirigindo à porta e não a ela, a mulher caminhou em sua direção com um sorriso confiante.

-Olha só, dona policial. - E parando mais próxima, apertou os olhos para ler o distintivo de Eduarda - Dona policial Fragoso. - Completou - Foi apenas um grande mal entendido. Aquele maluco tentou assediar eu e minha amiga, e eu apenas nos defendi.

Eduarda, policial treinada, piscou duas vezes antes de compreender a *audácia* da mulher. Era realmente doida, afinal, estava estática e sem emoção diante de uma *Glock* apontada para ela.

-Mandei levantar a porra das mãos! - Reforçou com a voz mais alta e a morena finalmente pareceu se surpreender, os braços se erguendo juntamente com seu sorriso sacana.

-Não manda em mim assim que eu me apaixono. - Disse e lançou uma piscadela em direção a ela.

Eduarda queria muito dar um tabefe nela pela ousadia, mas também queria voltar o mais rápido possível para o conforto da delegacia. Ao notar que a briga havia sido neutralizada e que não precisava estar com uma postura tão rígida, apenas guardou a arma no coldre, exausta. O lema do plantão da madrugada era “Evite, a todos custo, a papelada”.

-Quem iniciou essa confusão, afinal?

Todos os pares de olhos se voltaram para a morena na sua frente, a tal Lorena, como a outra mulher a havia chamado, e um a um ergueram o dedo em sua direção, até mesmo sua suposta amiga. Eduarda deu um passo à frente, já retirando as algemas de seu cinto, e Lorena deu um passo para trás.

-Hey, o que você vai fazer?

-Não é óbvio? Você está causando um distúrbio à paz. - apontou para ela - Minha função é manter a paz. - apontou para si - Então eu vou detê-la.

Lorena, surpreendendo-a ainda mais, soltou uma risada sonora ao passo em que ia afastando.

-Você por acaso sabe de quem eu sou filha?

E aquela frase foi o estopim. Se antes Eduarda se comportava feito um monge das colinas mesmo diante da cara de pau da mulher, ao ouvir aquelas palavras ela se tornou uma discípula do capitão Nascimento. Com destreza e rapidez, agarrou os braços de Lorena, imobilizando-as em suas costas, e empurrou seu corpo com força contra a primeira mesa que viu. O baque surdo do rosto da mulher batendo contra a madeira causou um burburinho entre os bêbados, que não ousavam se mexer.

-Não sei de quem você é filha, mas estou prestes a descobrir.

Saiu empurrando-a como se fosse um saco de batatas. Enquanto conduzia a mulher para a viatura, Lorena ia soltando piadinhas idiotas.

-Eu juro por tudo que é mais sagrado, se você me apertar mais uma vez desse jeito eu vou gozar.

-Isso é desacato! - Eduarda rebateu, fervendo de raiva.

-Desacato é você ainda não ter me passado seu número.

A policial parou antes de colocá-la na viatura descaracterizada.

-Eu vou te jogar em uma cela pra te mostrar como a polícia trata vagabundo. - Praticamente cuspiu, muito mais próxima ao rosto de Lorena do que era o socialmente aceitável.

Mordendo o lábio inferior e com as pupilas dos olhos verdes completamente dilatadas, Lorena conseguiu puxar o ar com força o suficiente para responder em um tom sussurrado:

*-Prometa.*

Eduarda participou de muitos treinamentos antes de entrar para a polícia, mas nenhum deles possuía um módulo com o título *“Como reagir quando uma morena linda, de olhos verdes e briguenta te provoca enquanto morde o lábio com cara de quem está implorando por peitos.”*.

Para aquela investida, ela não teve respostas, e teve que se contentar em empurrar Lorena para dentro da viatura de forma brusca. Assim, conduziu a mulher até a pequena delegacia de Sales Oliveira. Quando adentrou o local, foi recepcionada pelos olhos enormes e arregalados de José, o recepcionista da madrugada. Depois de praticamente largar Lorena em uma das 3 celas do local, voltou-se para a recepção para providenciar a papelada.

-Você faz ideia de quem é aquela menina que você acabou de conduzir? - José perguntou.

-Até você com essa? Não, José, não faço a mínima ideia.

-Eduarda, você acabou de prender a filha do prefeito.

-E desde quando ser filha do prefeito dá liberdade para ela me desacatar? - Perguntou, indignada.

-Desde quando você está em período probatório e mora em uma cidade que fica no cu do mundo! - Ele esbravejou - O delegado vai comer seu cu no seco, já tô até vendo…

É, José tinha razão, não havia como negar. As coisas nas cidades pequenas eram muito mais dadas ao *jeitinho brasileiro* de se resolver. Percebendo que talvez tivesse se precipitado, roeu a unha do polegar e pediu a ajuda do recepcionista.

-O que eu faço agora, então? Eu solto ela?

-Agora não adianta mais, a merda já tá feita. - Ele resmungou, mas se compadeceu da colega - Vai oferecer alguma coisa pra ela comer, sei lá. Tenta não fazer da experiência dela aqui tão traumática enquanto eu ligo para o delegado Jairo.

E assim Eduarda fez, ainda que contrariada. Apesar de reconhecer os mecanismos de poder e influência, jamais deixaria de discordar deles. No caminho para a cela, parou para pegar um pouco de café e algumas bolachas para oferecer à mais nova prisioneira. Precisava arranjar uma forma de fazê-la esquecer que havia a tratado como um carrapato indesejado minutos atrás.

Parando próxima a cela, encarou-a através das grades. Lorena possuía um olhar felino, os verdes cristalinos a encarando como a uma onça. Levantou-se do banquinho de cimento acoplado à parede e se aproximou lentamente.

-Você gosta de café? - Iniciou Eduarda, como uma espécie de oferta de paz.

Lorena sorriu, aquele sorriso cafajeste que já havia oferecido antes. Naquele momento, Eduarda notou como ela realmente era bonita. Os olhos, de um verde límpido; os lábios, cheios e avermelhados; até mesmo as roupas demonstravam um estilo alternativo e disruptivo demais para um fim de mundo como o que em que estavam.

Os dedos repletos de anéis e de unhas pretas se apertaram ao redor da grade fria de metal.

-Sabe do que eu gosto, policial? Gosto de algemas, gosto de tapa na cara… - E, pausando a fala, a encarou profundamente antes de olhá-la de cima a baixo e continuar - E no caso de um rostinho bonito como o seu, gosto até que cuspam na minha boca.

O arrepio cortante que atravessou a coluna de Eduarda foi o motivo pelo qual ela se arrependeu amargamente de ter sequer tentado uma trégua. A passos rápidos, retirou-se dali e foi concluir a burocracia. Pouco depois da cena, o delegado chegou na delegacia e pediu que ela retirasse sua denúncia de desacato, mas ela foi firme em sua decisão.

-Menina, isso ainda vai dar na sua cabeça…

Ignorou-o paulatinamente, decidida a prosseguir.

Quem comunicou ao prefeito foi o delegado, que o conhecia desde sempre. Santiago Ferette adentrou a delegacia como um furacão, indo diretamente para onde a filha estava. Ouviu atentamente o relato do delegado Jairo, que explicava enquanto apontava para Lorena e Eduarda, que assistia tudo através da janela de sua sala. Não ouviu muito, apenas quando o prefeito perguntou “De quem ela é filha?”, referindo-se a Eduarda.

Depois disso, não teve como não ouvir, porque o que saiu da boca do prefeito, saiu em forma de grito. Ele gritou ininterruptamente por 15 minutos, frisando com palavras de baixíssimo calão o quão irresponsável era sua filha e o quanto ele tinha vergonha dela. Lorena ouviu tudo com a cabeça tão baixa, que Eduarda, por um momento, achou que o queixo da mulher se fundiria com seu pescoço.

Perto do pai, aos berros, parecia uma criança indefesa. Os olhos, antes repletos de malícia e provocação, estavam vermelhos de lágrimas. Ao passar em sua frente e antes de sair porta afora, Lorena lhe lançou um último olhar resignado e triste.

## 2º ocorrência

Depois daquele dia, durante aquela semana, tal acontecimento continuou visitando a mente de Eduarda insistentemente. O sentimento de raiva por ter sido desacatada descaradamente havia sido substituído por outros sentimentos um tanto quanto *engraçados.*

Inicialmente, após presenciar o prefeito praticamente amaldiçoando toda a descendência da própria filha, Eduarda quase sentiu pena de Lorena. Foi ali, depois daquela gritaria, que sua raiva esmaeceu. Colocou-se no lugar da mulher por alguns segundos, e chegou à conclusão de que devia ser infernal. Ela mesma precisou se afastar da própria família devido ao rumo que sua vida havia levado. Seu pai não aprovava sua profissão, muito menos seu estilo de vida. Concluiu consigo mesma que entendia o motivo da rebeldia de Lorena. Então, de raiva o sentimento passou para compreensão.

Foi depois disso que, começando a compreender a natureza de Lorena (pelo menos em sua cabeça, uma vez que havia visto ela apenas uma vez na vida e não tinha sido lá o melhor dos cenários), justificou sua forma de agir como sendo o escape de uma garota da cidade pequena extravasando. E esse era o perigo: o seu ato de *desdemonizar* a morena. Porque aí seus comentários indecentes voltavam à mente de Eduarda, que passou a imaginar os cenários mais profanos. Era óbvio, ela tinha olhos, e Lorena era muito bonita. Então, de compreensão o sentimento passou para algo mais quente e molhado, que Eduarda resolveu não nomear de imediato, mas permitiu-se, em seu cubículo na delegacia altas horas da noite, sentir.

Naquela mesma semana, havia um evento que exigia sua presença. Era a cerimônia de alistamento oficial da cidade. Consistia em, basicamente, juntar todos os meninos que haviam completado 18 anos até aquele momento em uma quadra poliesportiva para cantar o hino nacional e fazer fotos para o jornal da cidade. Era uma cerimônia solene, com a participação do corpo da Polícia (Civil e Militar), o delegado, prefeitos e até vereadores. E, naquele caso, delegado Jairo exigiu a presença de todos.

Não fosse por isso, Eduarda provavelmente não compareceria. Ela era *literalmente* a única mulher da equipe toda da delegacia (fora a faxineira e a copeira). Aquilo atraía olhares, comentários e um preconceito velado que a policial não tinha muita paciência para aguentar. Ainda assim, lá estava ela: uniforme tático, toda de preto, de bota, colete, arma e distintivo. O traje também havia sido exigência do delegado, que, assim como ela, estava vestido a caráter juntamente com Paulinho. Os três integravam os trajes táticos, enquanto os demais policiais militares usavam a farda normal.

Procurando evitar atenção indesejada, Eduarda ficou o tempo todo ao lado dos seus dois companheiros, usando a própria estatura de Paulinho como escudo contra olhares curiosos. Ficou durante a cerimônia inteira com o queixo levantado e o olhar sério, esperando a tortura acabar.

Viu quando o prefeito, Santiago Ferette, fez um discurso inspirador agradecendo pelo trabalho impecável das forças policiais. Como bom homem de bem, ressaltou o trabalho do exército e da polícia como fundamental para manter a ordem na cidade. Agradeceu a Deus e sabe-se lá mais quem, em um discurso repleto de demagogia e falsidade política. Quando estava em destaque, nem parecia o homem arrogante que havia humilhado a filha na delegacia.

E, ao pensar isso, o olhar de Eduarda passou do pai para a filha. Lorena estava ao lado da mãe e do irmão, em um lugar separado para a família do prefeito. Ao contrário de quando a havia visto pela primeira vez, usava um vestido florido leve, nada original e muito “boa moça”. No rosto, uma maquiagem muito leve, quase inexistente, diferente dos olhos marcados por um contorno escuro, como estava no dia do bar. Parecia menor, quase diminuta diante de todo aquele cenário. Sorria apenas pela boca, não pelos olhos.

Eduarda a encarou por um tempo maior do que o indicado, e quando sentiu os verdes olhos predatórios a encarando de volta através da multidão, desviou o olhar. Era aquele olhar que voltaria a assombrá-la pelo resto da semana.

A cerimônia de alistamento havia ocorrido em uma terça-feira, e a policial seguiu normalmente sua rotina de trabalho. Era a madrugada de quarta para quinta-feira, Eduarda estava digitando pacientemente um relatório de uma das investigações que participava, quando José apareceu em sua sala com um sorriso enorme.

-Essa você não vai acreditar.

-Manda.

-Ocorrência no bairro do Escorrega Sapo. - Anunciou, e Eduarda sempre se surpreendia com a criatividade dos nomes dos bairros daquela cidade - Marido corno chega em casa e pega a mulher e o amante no pulo. A confusão está armada por lá, não direcionei nem pra ronda, já vim direto pra você.

Era costume na delegacia que José lhe encaminhasse os casos mais constrangedores ou interessantes, então Eduarda não hesitou em pegar suas coisas e ir em direção ao local, prometendo gravar bem o nome do corno para fofocarem mais tarde.

Assim que desceu da viatura descaracterizada, ouviu os gritos através do portão. Anunciou sua chegada e foi adentrando, a mão sobre a arma na cintura.

-Eu não acredito nisso, Charlene! - ouviu uma voz grave gritar e seguiu o som, que vinha acompanhado do barulho de vidro se partindo - E logo com ela?! Uma mulher?!

Eduarda adentrou a casa pela cozinha e, pela segunda vez na semana, seu olhar trombou em olhos verdes ferozes.

A cena armada consistia em: uma esposa, um marido e uma amante. A esposa chorava próxima a porta do outro lado da cozinha, o marido segurava uma frigideira em riste, contornando a mesa e tentando alcançar a amante. Lorena, a suposta amante, rodeava a mesa para escapar da fúria do corno. Vestia apenas uma calça jeans desabotoada, um sutiã preto de renda e um olhar do mais profundo pânico.

-Investigadora Eduarda Fragoso, polícia civil. - Se anunciou ao aproximar-se da confusão - Preciso que o senhor mantenha a calma.

O homem, cego de ódio, fez mais uma tentativa de se aproximar de Lorena, que em um reflexo, puxou uma garrafa de vinho vazia por sobre a pia. *Ah não,* Eduarda pensou, *uma garrafa de novo não.*

-Eu vou matar essa sapatona desgraçada! - o homem anunciou, pulando por sobre a mesa.

Três minutos de confusão se seguiram até que Eduarda conseguisse controlar a situação. O homem se via algemado, emburrado e com o orgulho ferido, sentado no chão da cozinha. Lorena estava descabelada, portando um sorriso vitorioso, e a esposa não sabia se suspirava aliviada ou se desatava chorar.

Eduarda solicitou que os policiais da ronda viessem ajudá-la, uma vez que o homem não poderia ir para a delegacia na mesma viatura que Lorena, que estava jurada de morte. A esposa não os acompanhou, alegando que não iria prestar queixas, porém a policial achou melhor encaminhar as outras duas partes, uma vez que a ocorrência envolvia ameaças claras à integridade de alguém.

O corno foi com a viatura da ronda e sobrou Lorena para que Eduarda escoltasse. Dessa vez, no entanto, não a algemou. Ao guiá-la em completo silêncio até a viatura, a policial notou como seus ombros nus tremiam levemente por conta do frio da madrugada. Em um reflexo, e tentando não demorar sua atenção no busto parcialmente descoberto, Eduarda retirou a própria jaqueta militar verde e depositou por sobre os ombros da morena.

Lorena ficou surpresa por alguns segundos, mas logo se aconchegou no calor que lhe havia sido oferecido. Inalou profundamente o cheiro que emanava da jaqueta, controlando-se para não soltar alguma piadinha sobre algemas.

-Você está bem? - Eduarda foi quem quebrou o silêncio.

Não entendia como o espírito de boca de sacola havia evaporado do corpo daquela mulher atrevida de repente. Na última ocorrência, Lorena havia sido uma cafajeste de marca maior.

-No momento estou repassando mentalmente meu testamento. Meu pai vai me matar assim que chegar na delegacia.

É, tinha *aquilo.*

-Você não precisa contar para ele. - Sugeriu.

-Eu não preciso contar para ninguém, investigadora. - respondeu - Numa hora dessas um dos milhares de súditos do *oh tão grandioso Santiago Ferette* já deve ter me dedurado.

-Entendi.

Eduarda se concentrou no caminho, o silêncio pesado entre elas. Lorena sentia o julgamento silencioso da ruiva pairando sobre elas.

-Não é o que parece. - Disse, e se Eduarda não tivesse ouvido daquela mesma pessoa um “gosto que cuspam na minha boca”, poderia jurar que ela estava quase tímida - Aquele cara agride ela. - referiu-se à mulher da ocorrência - Eu a vi procurá-lo no bar todas as madrugadas durante duas semanas, e vi quando ele gritou barbaridades para ela em algumas ocasiões.

-E foi no bar que você a conheceu?

-Sim.

-Hm. - murmurou em concordância, sem entender ao certo o porquê das explicações, mas secretamente aproveitando o diálogo - E qual o seu lance com bares duvidosos durante as madrugadas? Você não tem cara de que gosta de velhos calvos alcoólatras.

-Não, não gosto mesmo. Mas os bares são os únicos lugares em que ninguém vai ligar para a presença da filha do prefeito. - explicou - Ou, se ligarem, vão associar a uma noite de cachaça. Não espere fofoca de um velho calvo.

-Entendi. - respondeu e o silêncio voltou a perdurar por alguns segundos, quando, disposta a manter a conversa, Eduarda perguntou, casualmente. - E você faz algo da vida além de brigar em bares e comer mulher casada?

Lorena soltou um riso fraco, encarando-a com os olhos verdes afiados.

-Eu também frequento cerimônias chatíssimas da cidade. Aliás, uniforme bacana, *investigadora Fragoso*.

Eduarda murmurou um “obrigada” metade pergunta e metade tremelique. Tinha ciência de que havia sido pega no flagra a encarando durante a cerimônia, mas jamais admitira. E, caro leitor, se tinha uma coisa em que ela era boa, era de se fazer de *sonsa*.

-Eu devo dizer que aquele uniforme deixa muito para a imaginação… - Lorena comentou e, apesar de não estar olhando na sua direção, Eduarda sentiu o sorriso sacana em sua fala.

Agora sim, lá estava ela. Lorena boca de sacola havia ressuscitado, e a policial não sabia se ficava feliz ou sem graça com aquela constatação. Estacionou o carro na frente da delegacia e as duas desceram.

A noite foi regada a burocracia, e Eduarda foi a responsável por iniciar o boletim de ocorrência no nome de Lorena. O corno estava em uma sala, detido, enquanto era acusado de agressão e homofobia na sala ao lado. Lorena vez ou outra soltava um comentário engraçadinho, mas seu semblante parecia caído.

Eduarda digitava freneticamente em seu computador, registrando o B.O, mas seus olhos vez ou outra recaíam sobre a morena a sua frente. Lorena se sentava displicentemente na cadeira, pernas abertas e olhar distraído. Não havia se dado ao trabalho de fechar a jaqueta, o que fazia com que grande parte de sua pele pálida ainda estivesse exposta. Vez ou outra, quando se movia para depositar o polegar nervosamente na boca, a jaqueta se mexia, revelando mais do seu colo. Eduarda engoliu em seco, tentando se concentrar em outra coisa. Mas o espaço era apertado naquela sala, e as teclas do seu computador não eram nem de longe tão atraentes quanto a clavícula delicada e descoberta de Lorena.

-Meus olhos estão aqui em cima. - A voz rouca da morena a puxou de volta para a realidade.

Antes que Eduarda pudesse analisar o sorriso maroto que Lorena lançou em sua direção, o prefeito adentrou sua sala.

-A segunda vez na semana, Lorena! - Berrou, e a mulher se encolheu na cadeira - Não tenho uma noite de paz nesse inferno! E por causa de mulher? Você é *nojenta,* Lorena, *nojenta!* É por isso que gente do seu tipinho não deveria existir. - Eduarda engoliu um xingamento ao ver a cena - Vamos, levanta e vai direto pro carro que eu ainda tenho muita merda pra te falar!

-Nós ainda não terminamos o boletim de ocorrência. - interveio a policial.

-Boletim de ocorrência? - Santiago a olhou como se ela fosse uma barata que estava debaixo de seu sapato.

-Pai ele… - Lorena começou, sua voz falhando - ele me ameaçou e…

-Mas é óbvio que ele te ameaçou, você estava trepando com a mulher dele! - esbravejou - Você não vai dar queixa de nada, já me deu trabalho o suficiente hoje. Vamos, vá para o carro.

-Com todo respeito, senhor Ferette, mas eu acredito ser de extrema importância que…

-Não me interessa o que você acredita ou não, policial. - o prefeito a interrompeu, a voz firme - Você vai apagar essa merda de boletim e fingir que ele nunca aconteceu, e vai voltar pra sua vida medíocre de funcionária pública.

-Pai… - Lorena o censurou, tomada de uma coragem vinda de não se sabe onde - Ela só está tentando me ajudar.

-Cala a boca, Lorena! Você já me passou vergonha o suficiente para uma vida inteira! Não consigo compreender como você e seu irmão nasceram da mesma fonte! Você vai afundar o nome dos Ferette na lama, Lorena, na lama! - E levantando-se, dirigiu-se à porta - Reze para que essa ceninha ridícula de hoje não atrapalhe nas próximas eleições, ou eu juro que te faço se arrepender de ter nascido!

Lorena, orgulhosa que era, chorou sem fazer som. Deixou que suas lágrimas escorressem pelos seus olhos sem se mover, trincando a mandíbula com força o suficiente para rachar a casca de uma noz. Eduarda não soube ao certo como reagir, e olhou através da janela para o delegado, que fazia gestos para que ela permanecesse em silêncio.

-E você, policialzinha novata. - Santiago se dirigiu a ela, erguendo um dedo em riste em sua direção, a saliva escorrendo de sua boca como veneno - Trate de resolver as merdas dos problemas fora dessa pocilga que vocês chamam de delegacia. Não quero minha filha no meio desse ambiente imundo. Espero nunca mais ter que olhar para a cara de nenhum de vocês desse lugarzinho esquecido por Deus. A próxima vez será a última.

-O senhor está me ameaçando? - Disse e se levantou, a mão voando diretamente para a arma no coldre - O senhor está ameaçando uma Policial Civil?

Lorena arregalou os olhos, preparada para se intrometer novamente. Sabia muito bem do que o pai era capaz.

-Eu não ameaço. - Ele decretou, por fim, em uma voz baixa - Eu faço acontecer. Passar bem.

E assim, saiu da sala, sendo acompanhado de perto pelo delegado que o aguardava do lado de fora. Lorena lançou um olhar quebrado para a policial e se dirigiu à porta.

-Lorena. - Eduarda ouviu a própria voz chamar pela morena antes de perceber - Você é bonita demais para se contentar com tão pouco. - referia-se à mulher casada que havia a colocado naquela situação.

A morena abriu a boca para responder, mas foi puxada à realidade pelo grito estridente de seu pai chamando por ela.

## 3º ocorrência

Eduarda não conseguia parar de pensar no acontecido da madrugada passada. Sua mente girava e girava em torno da mesma morena com os mesmos olhos verdes e um pai babaca. Detestava admitir, mas parecia estar criando um hiperfoco em Lorena, e não sabia ao certo como parar. Sales Oliveira era minúscula e nada ali havia chamado a atenção de Eduarda o suficiente para que ela não conseguisse esquecer daquela forma. A não ser *Lorena*.

Era sexta-feira novamente, e mais uma vez Eduarda estava no turno da madrugada. O correto seria que ela alternasse com seu outro colega, Paulinho, de modo que cada semana um deles estivesse no turno da madrugada. Mas, excepcionalmente naquela semana, Paulinho havia pedido para que Eduarda o cobrisse pois tinha o aniversário de seu afilhado. Ela não possuía família por perto, não tinha tantos amigos assim e era solteira demais para o próprio bem. Não ligava de trocar com ele algumas madrugadas a mais.

E foi assim que ela, mais uma vez, foi parar em uma ocorrência em um bar.

Era perto das 5h da manhã (seu plantão se encerraria às 6h00), quando Eduarda estacionou em frente ao Bar do Tonho. Aquele bar era quase um ponto turístico de Sales Oliveira, de tão famoso. Era um boteco dos mais típicos: de esquina, com tocos de madeira na calçada em vez de bancos, uma única unidade de mesa velha de madeira na parte de dentro, balcão sujo e o melhor frango frito da cidade. Mas, seu diferencial maior nem era isso, e sim o fato de que, além de bar, funcionava como uma loja de cacarecos. Tonho, o dono, possuía uma variedade de produtos que ia desde cordas de violão até borracha de panela de pressão.

A queixa da noite havia sido que ele queria fechar o bar, mas uma moça se recusava a sair dali. Havia feito de tudo: gritou, praguejou, jogou água nela e até tentou espantá-la com uma vassoura, mas nada surtiu efeito. E, assim, Eduarda havia sido acionada.

-Olha, policial, eu não sei quem machucou aquela pobre coitada. - Tonho disse quando Eduarda estacionou a viatura na frente do bar - Mas em 40 anos de boteco eu nunca vi algo assim.

Ao mirar a única mesa do bar, Eduarda soltou um longo suspiro. Lorena era quem estava com um olhar fúnebre, olheiras profundas e cara de bêbada, jogada por sobre a mesa. Uma blusa listrada por baixo da jaqueta militar que Eduarda havia lhe entregado dois dias atrás. Realmente achou que toda aquela estapafúrdia com a filha do prefeito tinha chegado ao fim na madrugada de quarta para quinta, mas aparentemente estava errada.

Puxou uma cadeira e se sentou ao lado dela, reparando em como seus cabelos estavam úmidos. Lembrou-se do relato do dono, que havia tentado espantá-la com água como se fosse um cachorro de rua.

-Não me diga que está desse jeito por causa de uma casada, Lorena Ferette.

Os olhos verdes finalmente se ergueram para os castanhos.

-Achei que eu parecesse mais autêntica do que uma lésbica sofrendo por uma casada, investigadora Fragoso.

-Se não é isso, então qual é o problema?

Lorena pareceu despertar diante de sua pergunta. Ergueu a cabeça da mesa e lhe lançou um olhar tão cortante que Eduarda sentiu-se momentaneamente e metaforicamente esfaqueada.

-Qual é o problema? - Ela disse, a voz mais alta - Qual é o problema, policial? Você quer mesmo saber qual é o problema? - E, erguendo-se meio cambaleante, abriu os braços - O problema é essa merda de cidade, esse é o problema! - Explodiu, e daí, as palavras jorraram em descontrole - Eu moro em um ovo, investigadora Fragoso. Eu juro que se você descer o *Escorrega Sapo* até o fim, você vai encontrar a beirada da porra da Terra!

Interrompeu seu monólogo para agarrar uma garrafa de 51 disposta por sobre a mesa, deu um longo gole e a devolveu com um baque surdo. Seus olhos encararam um ponto em específico de algum lugar perdido lá fora na rua.

-Eu não tenho nome, você sabia? Eu sou só a porra da filha do prefeito. Eu não sou ninguém por mim mesma, só sou filha do meu pai. Ninguém conhece a Lorena nessa porra de cidade infernal. - Seus olhos voltaram a encarar Eduarda - E aqui não tem *nada.* Não tem faculdade, não tem cultura, não tem merda nenhuma. Caralho, mal tem hospital! Você sabia que eu nasci na cidade vizinha porque essa merda de hospital não comportava um parto? Sendo que minha avó nasceu na porra da mesa de uma fazenda e cortaram o cordão umbilical dela com uma tesoura de costura! São uns bostas, todos vocês! - gritou, chutando uma cadeira perdida.

Eduarda ouviu pacientemente, ainda sentada na cadeira, as palavras emboladas de Lorena.

-E sabe o pior, investigadora Fragoso? Eu sei que não sou medíocre como eles. Eu sei que nasci pra mais que isso, eu sei que essa cidade não me comporta. Mas não tem o que fazer, eu estou presa aqui para todo o sempre, fadada a uma existência medíocre vivendo à sombra do meu pai e do meu irmão perfeito e loiro e hétero. - cuspiu com desprezo.

A ruiva sentia que não deveria comentar nada, estava ali apenas para escutar. Era como se Lorena fosse explodir se não colocasse para fora. E, enquanto ia ouvindo, sentiu-se compadecida. Sabia o que era viver à sombra das vontades de alguém. Havia feito Direito para agradar ao pai, mas de última hora entrou para a polícia, frustrando os planos de um dos maiores desembargadores do Brasil: Henrique Fragoso.

Seu pai era do luxo, das posições de poder; Eduarda nunca quisera nada daquilo. Queria a paz e a tranquilidade de uma cidade pequena, queria poder fazer o que amava e ter o doce sossego do tédio. Não queria uma mansão e carros da elite, contentava-se apenas com a cervejinha pós-plantão e poucos porém bons amigos.

-Você sabe qual é o partido do meu pai, Investigadora? Vamos lá, aposto que fez o dever de casa. - Lorena prosseguiu. Eduarda sabia, afinal, a propaganda de Santiago Ferette era a mais conservadora da cidade - Você sabia, investigadora, que eu sou lésbica? Assumidamente. Agora, tente você ser filha do prefeito, lésbica, em uma cidade do interior com 10.000 habitantes. Não é a melhor experiência, acredite. Eu sei que mereço mais do que aquilo que você viu, mas não é como se eu tivesse um leque de opções por aqui.

Eduarda quis dizer algo, quis consolar Lorena de alguma forma. Mas estava ela mesma embebida demais na dor da outra para conseguir pronunciar algo.

-É por isso, investigadora Fragoso, que eu estou nessa merda desse bar e não quero sair. - Finalizou, enfim, jogando-se sobre a cadeira - Espero que isso tenha respondido à sua pergunta.

Parcialmente derrotada pela brutalidade das palavras de Lorena, Eduarda puxou a cadeira um pouco mais para perto e posicionou-se de frente a ela na mesa, buscando seus olhos.

-Não vou fingir que entendo totalmente como você se sente, Lorena. - Começou, meio incerta - Só posso dizer o que eu vi. E eu vi que não é fácil. Sei que você sofre e está tentando fazer barulho para calar a própria infelicidade, mas também sei que não é assim que você quer ser ouvida. - E, ao finalizar, recolheu a garrafa de pinga da mesa, colocando-a atrás da própria cadeira.

O que se seguiu fez o coração já compadecido de Eduarda se estilhaçar em mil pedaços: Lorena desatou a chorar, um choro dolorido e agudo. Enfiou o rosto entre as mãos, tentando inútilmente conter a maré de pérolas cristalinas que se desprendia dos olhos já tristes. Seus ombros tremiam e soluços sofridos ecoavam de seus lábios.

Eduarda se levantou de um pulo, erguendo as mãos debilmente no ar, receosa demais de tocá-la. Olhou de um lado para o outro, incerta do que fazer. Bateu os olhos no relógio velho que estava na parede do bar: 5h25. O final do seu turno estava chegando. Rapidamente, digitou uma mensagem a José dizendo que iria para casa mais cedo, mas que qualquer ocorrência era só telefonar. Aproximou-se mais uma vez de Lorena.

-Vamos, vou te levar para casa. - Disse baixinho, agachando-se na frente de Lorena e retirando as mãos trêmulas do rosto delicado. Olhos escuros de maquiagem borrada a encararam de volta - Me deixa te ajudar.

-Eu… não… quero… ir… pra… casa… - conseguiu responder entre soluços - meu… pai…

Eduarda compreendeu rapidamente, e reformulou a frase:

-Eu te levo para a minha casa até você se acalmar.

Aquilo convenceu Lorena, que de forma trôpega se levantou. Eduarda precisou segurar com firmeza em sua cintura, apoiando todo o peso mole em seus ombros para conseguir carregá-la até o carro. A morena cheirava a lágrimas, cachaça e algo que era puramente Lorena.

A viagem de carro foi muito curta para que conversassem, mas longa o bastante para que o álcool se assentasse no corpo magro de Lorena, de modo que tirá-la do carro e levá-la até a sala de estar de sua casa se provou muito mais difícil para Eduarda. Entre trancos e barrancos, conseguiu sentá-la em seu sofá.

-Você quer comer alguma coisa? Precisa de algo? - Perguntou, genuinamente preocupada. Não ficaria muito bonito no seu currículo ter a filha do prefeito desmaiada em coma alcoólico na sua casa.

Lorena, no fundo, precisava de um cochilo. E foi pensando nisso que ela se encolheu no sofá como se fosse uma vírgula, pronta para dormir. No entanto, tremia de leve por conta do frio. Eduarda morava em uma parte mais alta da cidade, o que tornava sua casa estranhamente fresca. Em madrugadas como aquela, a temperatura ficava baixa, e Lorena ainda estava molhada pela tentativa do dono do bar de enxotá-la.

-Quer tomar um banho? Ou pelo menos trocar de roupa? Você está toda molhada.

Lorena reuniu forças para lhe lançar um sorriso torto, uma tentativa de sedução.

-É você quem me deixa molhada assim, *meu bem.*

Eduarda abriu a boca e a fechou, ficando vermelha como um pimentão.

-Como é que você consegue ser uma cafajeste até em situações como essa, Lorena? - Bufou, mas no fundo queria rir do flerte bêbado - Vem, você precisa descansar e eu não vou te deixar dormir no sofá.

Guiou Lorena pela pequena casa e a colocou sentada na própria cama. Não havia arrumado o quarto de hóspedes desde que se mudara, e ele consistia apenas em um quarto da bagunça com milhares de coisas por sobre a cama. Assim, deixaria Lorena na cama e dormiria ela mesma no sofá - se sequer dormisse, no caso. Separou uma blusa quentinha e uma calça de moletom, colocando-as ao lado da morena.

-Troca suas roupas, eu vou buscar um pouco de água pra você, ok? Já volto.

Foi até a cozinha, encheu um copo de água. Tomou um gole e esperou encostada no balcão. Havia trazido Lorena para sua casa. Porque *diabos* havia trazido Lorena para sua casa!? Não bastasse a ameaça do prefeito, não bastasse a falta de vergonha na cara da mulher de ficar flertando com ela o tempo todo, não bastasse mais milhares de motivos? Aquele só podia ser um episódio de mania.

*-Mas eu nem sou bipolar!* - Eduarda se pegou praguejando baixo antes de voltar para o quarto.

Ao chegar, se deparou com uma Lorena sem calça, com a blusa toda embolada na cabeça, como se houvesse desistido de tirá-la no meio do processo. Pacientemente depositou o copo sobre a estante ao lado da cama e a ajudou a terminar de tirar a blusa. Auxiliou na troca de roupas, e sentiu o olhar de Lorena praticamente queimar sua pele o tempo todo.

Quando terminou de ajudá-la com as calças, estavam frente a frente. Lorena olhou de seus olhos para a sua boca, encarando-a descaradamente.

-Eu quero muito te beijar. - confessou em seu torpor bêbado.

-Lorena… - Eduarda automaticamente entrou na defensiva.

-Tá tudo bem se você não quiser me beijar, eu sei que não sou tão beijável assim. - Continuou, os olhos tristes encarando o fundo de sua alma - Eu sou *nojenta.*

Eduarda rapidamente ergueu as mãos, limpando lágrimas que escorriam pelas bochechas de Lorena.

-Hey, não é isso. - respondeu e acariciou seu rosto com os polegares - Você é extremamente beijável, mas você também está extremamente bêbada. Você não é o tipo de mulher que merece ser beijada em uma madrugada qualquer para cair no esquecimento, Lorena Ferette.

-Jura? - questionou com a voz quebrada.

-Juro. - Eduarda garantiu.

Sentiu um nó gigantesco na garganta. Também queria beijá-la, *por Deus,* como queria beijá-la. Mas não iria, por vários motivos. Mas o principal era a sua embriaguez, ela jamais se perdoaria por se aproveitar da situação de Lorena.

-Deita um pouco e descansa, amanhã é um novo dia. Vem.

Ajudou-a a se deitar, ajeitou os travesseiros e a cobriu. Lorena estava tão bêbada e tão exausta, que mal se encostou e entrou em um sono profundo. Eduarda a deixou ali, ressonando baixinho e pegou uma manta para dormir na sala.

Tentou dormir, mas não conseguiu. Sua mente o tempo todo mandava imagens de Lorena dizendo que queria beijá-la, de Lorena dormindo profundamente a poucos metros usando suas roupas, de Lorena flertando descaradamente com ela. Antes das 9h00 da manhã estava de pé, tentando ocupar a mente com alguma coisa. Organizou a casa, colocou roupa para lavar e mexeu no celular por um tempo. Vez ou outra ia até o quarto ver se Lorena estava bem. Perto das 11h00 decidiu começar a preparar algo para comer, e foi para a cozinha.

***

Lorena acordou sentindo que uma bigorna havia despencado sobre sua cabeça. Piscou lentamente, o peso da consciência a atingiu com força total. Demorou bons minutos para entender que não estava em seu quarto, e levantou-se de um salto. Arrependeu-se imediatamente ao sentir outra pontada aguda na cabeça. Olhou ao redor, tentando se localizar. Nunca havia dormido fora de casa daquele jeito, a não ser que fosse na casa de Maggye, sua amiga. Constatou, com certo pânico, que não estava na casa de Maggye.

Ela era dada a muitas aventuras sexuais, mas nenhuma delas culminava em uma noite na casa de uma estranha. Estava mais acostumada a entrar, botar pra quebrar e sair pelos fundos. Por Deus no céu, estava acostumada a frequentar motéis de beira de estrada e sair ainda no meio da madrugada sem sequer pregar os olhos. O que não estava acostumada era com *aquilo.*

Devagar, forçou a mente a refazer os passos da noite passada. Estava em casa, seu pai brigou com ela, então foi para o bar do Tonho e aí a policial ruiva apareceu e…

-Eduarda! - Lorena constatou, seu coração pulando freneticamente dentro do peito.

Olhou para baixo e analisou suas roupas. Não eram as que havia vestido antes de sair de casa. Não foi preciso nada mais do que uma fungada na camiseta para reconhecer o cheiro. Era o mesmo cheiro do casaco que havia sido emprestado por Eduarda.

*Eduarda.*

Caminhou devagar para fora do quarto, incerta do que fazer. Sentia-se tímida de repente, como se tivesse invadido o santuário de alguém, e nem se permitiu observar a casa direito antes de aparecer na cozinha. Eduarda estava distraída cozinhando algo, o cheiro de café passado inundou seus sentidos e sua barriga roncou alto.

A policial virou-se ao ouvi-la, e lhe lançou um sorriso pequeno. Ela vestia um conjunto de pijamas preto de botão, que deixava suas pernas à mostra. Lorena se pegou olhando a pele nua por um tempo antes de subir o olhar confuso de volta para a mulher, que servia um prato com ovos mexidos por sobre a bancada da cozinha.

-Eu… você… ahm, a gente? - Tentou formular uma frase, mas o que saiu foram meias-palavras confusas - Bom dia? - aquilo foi mais uma pergunta do que uma saudação.

-Bom dia. - Eduarda a cumprimentou de volta, sentando-se na bancada e sorvendo um gole de sua própria xícara - Está se sentindo melhor?

Lorena estava descabelada, com dor de cabeça, provavelmente remelenta e com bafo. É, aquela era uma pergunta cuja resposta era mais visível do que pronunciável.

-Parece que eu fui mastigada por um cavalo. - Conseguiu responder.

-Senta aí, eu fiz café. Você deve estar morrendo de fome.

Lorena a encarou, cerrando os olhos. Aquilo parecia uma espécie de pegadinha.

-A gente transou? - perguntou na lata.

Eduarda, que enfiava uma garfada de ovos mexidos na boca, engasgou imediatamente.

-O que?! Não! Claro que não!

Lorena não se convenceu.

-Então você planeja transar comigo agora, é isso? - Insistiu.

-Que tipo de pergunta é essa, garota? - Eduarda tomou mais um gole de café para limpar a garganta - Eu te achei bêbada igual a um gambá no bar, apenas te trouxe aqui para te ajudar!

-Ah sim, porque as pessoas são boas assim sem esperar nada em troca! - Lorena rebateu, seu tom pingando ironia.

-Mas eu realmente não quero nada em troca, só fiz meu dever como policial.

-E quantas ocorrências você leva para sua casa, investigadora Fragoso?

Eduarda encarou aquela morena descabelada, os olhos verdes cristalinos, e por um momento não soube o que responder.

-Talvez eu só seja uma pessoa boa. - Balbuciou.

-Não existem pessoas boas nessa cidade, investigadora. - Lorena respondeu, seu tom de finalidade e certeza total - Não existe compreensão, não existe altruísmo e eu estou convencida de que não existe amor.

-Não é porque algumas pessoas daqui te trataram com desdém e te maltrataram, que todas são ruins. - Eduarda argumentou, suspirando cansada - Eu realmente não espero nada em troca, Lorena. Só não queria confusão com o seu pai, e você também não queria ir para a sua casa. Eu dormi no sofá, você dormiu no meu quarto e nada aconteceu, porque eu não sou esse tipo de pessoa.

A honestidade nas palavras de Eduarda desmontou Lorena por um momento, mas antes que ela pudesse formular uma frase ou sequer agradecer, um som estridente veio da sala. A morena mais do que depressa identificou como sendo o toque do seu celular. Meio cambaleante pela dor de cabeça insistente, procurou seu aparelho e quando o encontrou leu o nome do contato do seu pai na tela. Arregalou os olhos imediatamente.

Santiago a mataria por ter dormido fora de casa, aquele era seu fim definitivo. Correu para a cozinha.

-Eu… eu preciso ir! - Anunciou - Muito obrigada, eu acho. - E, tão rápido quanto sua ressaca lhe permitiu, saiu batendo a porta da casa.

Eduarda ficou alguns minutos observando o espaço por onde ela saiu, sem saber ao certo o que fazer.

-Eduarda Fragoso, o que você está pensando da vida?

E, foi pensando nisso, que decidiu que essa obsessão pela filha do prefeito tinha que acabar. Primeiro, ficou a semana toda em que seu plantão era à tarde, se martirizando. Condenou-se por ter levado Lorena até a sua casa, condenou-se por ter pensado nela e condenou-se mais ainda por ter tido o desejo de beijá-la. Aquilo era antiprofissional e não poderia, em hipótese alguma, acontecer.

Quando deu a próxima sexta-feira, Eduarda determinou para si mesma a missão pessoal de acabar com aquele mal pela raiz. Estava a muito tempo sem se envolver com alguém, fazia tempo que não beijava na boca, que não sentia a maciez de um peito feminino. Chegou à conclusão de que era aquele o motivo desse surto momentâneo.

Pensando nisso, combinou de ir a um barzinho na cidade vizinha com uma mulher que ficava de vez em quando. Arrumou-se, perfumou-se, subiu em sua moto e saiu sexta-noite afora. Estava nos seus trajes mais típicos: jaqueta de couro, coturno e regata. Era o simples que sempre funcionava, e parecia fazer sucesso com as mulheres daquela região.

Não tinha grandes planos, pretendia apenas sair, conversar, talvez ir para a casa de sua companhia e tirar toda aquela carência do seu organismo. E até certo momento, estava funcionando. Marina era bonita, era interessante e tinha um ótimo papo. Eduarda estava pagando a conta e prestes a ir para a casa dela quando seu celular tocou. Rapidamente atendeu ao ler o contato do delegado.

- *Eduarda, boa noite.* - Ele disse, a voz grave - *Eu sei que não é o seu horário e que hoje você não está no seu plantão noturno, mas preciso da sua ajuda.*

-O que aconteceu, delegado Jairo? Está tudo bem? - perguntou alarmada.

- *Na realidade, não, não está tudo bem*. - Ele respondeu - *A semana toda eu tive uma pedra no meu sapato, mas já está passando dos limites. É a filha do prefeito, Eduarda, a Lorena tá dando mais trabalho do que porco solto e eu não aguento mais.*

-A Lorena? Como assim?

*-É a terceira vez na semana que temos uma ocorrência e ela está envolvida. Essa menina é o foco da dengue, Eduarda. Na segunda ela foi pega tentando invadir a casa de uma família, a filha do casal me ligou desesperada. Na quarta ela tentou roubar o cachorro do vizinho de madrugada, e agora ela está toda machucada depois de começar uma briga de bar, parada em cima da sacada do sobrado desse mesmo bar ameaçando pular e disse que só desce com você aqui.*

-Eu?!

*-Você. E eu detesto cobrar algo assim, mas o prefeito está no meu pé. Aquele engomadinho do filho dele é vereador e tá com um vídeo pronto pra soltar nas redes sociais criticando nosso trabalho. Se não fossem as ameaças, eu mesmo já teria derrubado essa tonta dessa merda de sobrado.*

Eduarda ficou em silêncio por um momento, processando todas aquelas informações. Concluiu que não era a única se sentindo maluca, afinal, Lorena sempre seria dez vezes mais maluca que qualquer outro ser vivente.

-Me envia o endereço, logo eu chego aí. - Disse apenas.

Despediu-se de seu encontro com mil desculpas e um convite para repetirem aquilo outra vez, e da próxima com um desfecho melhor. Vestiu seu capacete, subiu em sua moto e dirigiu o mais rápido que pôde. Em 15 minutos estava estacionando a moto no aglomerado de policiais e frequentantes do bar que assistiam Lorena sentada sobre a sacada.

Assim que retirou o capacete, Lorena se levantou por sobre a grade, equilibrando-se porcamente. Eduarda lançou um olhar curto em direção ao delegado, que estava observando a cena junto dos dois policiais fardados da ronda da madrugada. Ele apenas maneou com a cabeça em direção ao bar e ela o adentrou apressadamente.

-Por onde eu subo? - dirigiu-se ao senhor do balcão, que apontou para uma porta que dava em uma escada.

Eduarda subiu dois degraus por vez, guiando-se meio cegamente até encontrar a porta da sacada, que Lorena havia trancado por fora. Bateu no vidro com o punho fechado e esperou que a morena o destrancasse. A filha do prefeito destrancou rapidamente, correu até o beiral e passou uma das pernas para o lado de fora, impedindo que Eduarda pudesse agarrá-la e arrastá-la (mas bem que ela queria ser agarrada por aquela ruiva).

-Lorena, o que você pensa que está fazendo? - Eduarda questionou em um tom baixo.

-Eu.. - ela começou, um leve rubor tomando suas bochechas. Só então Eduarda notou um pequeno corte no seu lábio inferior e um ralado em seu queixo - Eu precisava falar com você mas não te encontrava. Todas as vezes que eu fui na delegacia te procurar, você não estava. - Explicou, como se aquela fosse uma explicação perfeita e repleta de sentido.

-Você foi até a delegacia me procurar? - Foi a única coisa que Eduarda conseguiu absorver daquele relato.

-Sim.

-Por que?

-Você é gostosa, é gente boa, claramente é lésbica e eu realmente espero que seja solteira. Não que esse seja um empecilho para mim… - Lorena acrescentou, dando de ombros.

Eduarda se pegou corando pateticamente com o comentário, incerta sobre como prosseguir o assunto depois daquele cortejo inesperado.

-Por que você mandou me chamar hoje? - É, aquele parecia um bom ponto de partida.

-Você ainda não entendeu? Eduarda, eu causei confusão não uma, nem duas, mas TRÊS vezes essa semana tentando te encontrar. - Disse, exasperada - Na terceira tentativa eu tive que dar uma de louca varrida.

*Só na terceira?* Eduarda quis questionar, mas se conteve.

-Por que você está machucada?

-Porque eu escolhi um cara grandalhão demais pra caçar confusão, esperta.

Eduarda a encarou, uma perna para dentro e a outra para fora da sacada, os olhos verdes selvagens. Aproximou-se devagar, sentando-se de frente a ela, pernas cruzadas em posição de meditação. Após um segundo contemplativo, começou a rir. Definitivamente não era a única obcecada da situação, e aquilo a fez se sentir menos maluca.

-Do que você está rindo, idiota? - Lorena enfureceu-se - Eu me meti em encrenca por sua causa, apanhei por sua causa!

-Lorena, você poderia ter simplesmente me ligado. - Eduarda argumentou.

-Você não me deu seu número!

-Mas existe uma coisa chamada “Lista telefônica”? Ou talvez Instagram? Você sabe meu nome Lorena, você sabe até onde eu moro!

-Eu não me lembrava da sua casa, saí tão rápido e tão passada de ressaca que não consegui me lembrar! - Explicou, a voz subindo duas oitavas e as mãos gesticulando sem parar - Aqueles inúteis da delegacia não quiseram me passar informação nenhuma sua, e você nunca aparecia quando eu causava confusão. O mais sensato a se fazer foi isso e pronto!

Eduarda sorriu de novo, incapaz de se conter.

-Lorena, não é toda madrugada que eu estou de plantão. Essa semana quem fica é o Paulinho, e pelo visto nem ele está por aqui hoje.

Eduarda podia jurar que viu a morena suspirar aliviada, mas a escuridão da rua e da sacada não a deixavam ter tanta clareza.

-O que você quer falar comigo? - Perguntou, curiosa.

-Como assim? - Lorena a encarou, enfiando o polegar na boca e roendo a unha nervosamente.

-Você estava me procurando, ué. - Deu de ombros - Como posso ajudá-la?

A morena ficou em silêncio, os olhos agitados e preocupados sem saber o que fazer ou o que falar.

-Não sei ao certo, eu não tinha planejado essa parte. - Respondeu.

Eduarda se levantou, fazendo que ia embora, e Lorena tornou a chamá-la.

-Ok, ok. - Disse e tomou uma respiração - Por acaso você quer, sei lá, sair comigo?

Eduarda travou no lugar, muda. Queria sair com Lorena, queria muito. Só ela sabia o quanto havia pensado na doidinha do centro de Sales Oliveira, mas ainda assim havia implicações naquela proposta. Primeiro que Lorena era filha do prefeito, que por sua vez além de estar péssimo com a galera da delegacia, não aprovava o fato da filha sair com mulheres. E então havia também a relação policial/civil que elas haviam estabelecido desde o início. Eduarda estava no probatório, finalmente havia encontrado sua paz e não queria prejudicar isso.

-Lorena, eu não sei se essa é uma boa ideia… - Respondeu, embora nem ela tivesse tanta certeza assim de sua resposta.

-E por que, exatamente, não seria uma boa ideia? - Lorena rebateu - Eu me lembro de pouquíssimas coisas no meio do meu devaneio de bêbada, mas tenho quase certeza de que te ouvir dizer que eu era bem beijável.

-Alto lá, não foi bem assim! - Eduarda tentou inutilmente se defender, mas o tremor em suas mãos e seu rubor a denunciavam - Quem disse que não era beijável foi você, eu apenas discordei.

- *Você é extremamente beijável.* - A morena repetiu exatamente as palavras que Eduarda havia dito naquela noite - Eu me lembro, disso eu me lembro. O que mudou agora?

Em um mato sem cachorro, a policial apenas suspirou, mudando o peso de uma perna para a outra.

-Nada, nada mudou. - Respondeu - Você continua sendo extremamente beijável, Lorena. Beijável até demais, e esse é justamente o problema. Além de beijável, você é maluca! E, infelizmente, é filha de uma pessoa pública que adoraria me tirar do meu tão suado cargo público.

-Meu pai nem é tudo isso, ele finge que é um Pitbull raivoso, mas é um Pinscher magro que só late.

-Não sei se eu quero pagar para ver, honestamente.

As duas ficaram em silêncio por um tempo, a decepção de Lorena era nítida em seu rosto. Ela só não imaginava que Eduarda compartilhava da mesmíssima frustração. Em um lapso, resolveu que daria sua última cartada de maluca. Já estava ali mesmo, não custava pagar de doida mais um pouquinho, afinal: estava machucada (sentia até mesmo as costelas doerem), tinha um público bem diverso abaixo dela assistindo sua maluquice, seu pai provavelmente já havia tido notícias suas naquele momento, e ela não tinha absolutamente nada a perder.

-Então eu vou ser obrigada a continuar arranjando confusão em todo plantão que você estiver. - Declarou, decidida - Você não vai poder sair comigo, mas também não vai poder me prender. - Teorizou, ainda gesticulando - E, de quebra, se em uma dessas confusões um brutamontes me matar, você ainda fica com peso da consciência.

-Lorena, você por acaso é maluca? - Eduarda esbravejou, incrédula.

-Achei que você já tivesse percebido a esse ponto. -Falou, gesticulando para si mesma e depois para a queda da sacada.

Eduarda suspirou pela centésima vez.

-Tá, tá bom. - Respondeu - Você me convenceu. Eu te passo meu número, a gente pode sair amanhã. Mas depois disso, nada de você se meter mais em confusão, combinado? - Lorena abriu um sorriso enorme, concordando veemente com a cabeça - Agora desce logo daí, o pessoal da delegacia está exausto e você está atrapalhando os bêbados que querem cantar *Beatles* no violão. Bora, sai daí.

-Me passa seu número primeiro. - Lorena exigiu, puxando o celular do bolso.

-Você não confia em mim?

-O mundo é instável, eu não confio nem em mim.

Eduarda concordou e enfim passou seu número. Lorena finalmente saiu da sacada, e as duas caminharam lado a lado pela escada.

-Que horas te pego amanhã? - A policial perguntou, referindo-se ao encontro.

-A noite inteira, se Deus quiser. - Respondeu ela.

-Lorena, eu tô falando sério!

-Eu também! - Lorena continuou provocando, com um sorriso lindo de canto - Mas pode ser às oito horas, *investigadora Fragoso.*

Eduarda sentiu um arrepio cortar sua coluna, o jeito que Lorena falava seu sobrenome era quase profano.

-Certo, às oito, então. - Ambas pararam na frente do bar, a multidão começando a se dispersar e Jairo liberando o camburão para seguir com a ronda - Te vejo amanhã?

-Te vejo amanhã, policial.

E assim, Jairo prometeu uma carona a Lorena enquanto Eduarda voltava para sua casa. Sua noite não havia sido como esperava, mas algo a dizia que, de longe, havia sido muito melhor.

***

No sábado, pontualmente às oito da noite, Eduarda estava estacionando sua Harley Davidson Fat Boy preta cromada na frente da casa do prefeito da cidade (Lorena havia enviado o endereço por mensagem). Aquela moto era o único presente que mantinha do seu pai, era seu maior tesouro e ela possuía um grande apreço pela peça. Desceu da moto, puxando o pezinho e se escorando nela. Mandou uma mensagem para Lorena, e a esperou pacientemente.

Quando Lorena abriu o portão, quase babou com a cena. Claro, já havia visto Eduarda de jaqueta de couro, regata e coturno várias vezes, mas vê-la encostada displicentemente em uma moto, exalando uma energia de gostosa *bad girl* daquela forma, quase a fez ter um passamento. Naquele dia, a jaqueta de couro possuía detalhes bordados em formato de rosas delicadas, dando um ar feminino e mais sutil a Eduarda, acompanhando seu cabelo ruivo impecável que caía em ondas por seus ombros.

Eduarda não estava muito longe de Lorena, e a encarou longamente enquanto ela se aproximava, repentinamente tímida. A morena vestia sua típica roupa listrada, mas de uma forma que era toda dela. Blusa com uma listra de um jeito, casaco com listra de outro e calça de alfaiataria. No pulso, um delicado relógio de couro, e os cabelos negros perfeitamente alinhados. Mas o que realmente chamava a atenção de Eduarda todas as vezes eram os olhos: um verde quase cristalino, com um contorno de maquiagem mais escuro que deixava Lorena com uma cara de predadora da selva que chagava a causar arrepios.

-Pronta? - Eduarda perguntou, desencostando-se da moto e entregando um capacete a mais para Lorena.

-Pronta. - Respondeu ela e vestiu o capacete.

Eduarda montou na moto primeiro, dando partida. Lorena subiu em seguida, e tentou se ajeitar sem ocupar tanto o espaço pessoal da policial.

-Segura firme na minha cintura pra não correr o risco de cair.

Lorena a obedeceu, e o perfume amadeirado de Eduarda incendiou seu olfato. Ruiva desgraçada, além de linda, estilosa, ainda era estupidamente cheirosa. A morena a segurou firme como havia sido instruída, e no caminho para onde quer que estivesse sendo levada, esfregou um rosto nas costas da policial como se fosse uma gatinha manhosa, tentando passar aquele perfume para a própria pele.

-Chegamos. - Eduarda anunciou depois de algum tempo.

Lorena desceu da moto e encarou o lugar enquanto Eduarda terminava de estacionar. Mal conseguiu analisar direito, porque logo a ruiva tirava o capacete e balançava os cabelos em sua direção de uma forma quase pornográfica. Lorena tinha quase certeza de que estava com o queixo caído, parecendo uma pateta.

-E aí, gostou do lugar? - Eduarda apontou para um barzinho, muito mais organizado do que os que Lorena costumava frequentar, mas ainda assim com a essência parecida - Achei que seria de bom tom te trazer de volta para o seu *habitat natural* das madrugadas, assim não seremos interrompidas e ninguém vai encher nosso saco. Se bem me lembro, “não espere fofoca de um velho calvo”, estou correta?

Diante daquele comentário e daquele sorriso galanteador, Lorena não teve chance alguma.

-Sim, Eduarda, você está corretíssima. E eu adorei, de verdade.

-Vamos, eu conheço o dono e ele deixou uma mesa mais afastada reservada para nós. - Eduarda estendeu a mão em sua direção e Lorena travou por dois segundos antes de aceitar.

Não estava acostumada com aquilo. Desde que havia se assumido, estava acostumada a se esgueirar pelas sombras, sempre se escondendo dos olhares e do julgamento das pessoas daquela cidade. Nunca havia assumido ninguém e nem sido assumida, e andar de mãos dadas com uma mulher havia sido negado a ela tantas vezes, que ela já havia se convencido de que aquilo nunca aconteceria. Quando segurou a mão quente de Eduarda e a sentiu entrelaçar os dedos no seu, sentiu um calor bom no peito, uma satisfação enorme com aquele pequeno toque.

Eduarda as guiou para a mesa reservada após cumprimentar o moço por detrás do balcão.

-Esse bar não toca Cindy Lauper e não tem tantos velhos pagando cofrinho, mas tem uma mesa de sinuca, um truco de vez em quando e depois das 22h00 o Zé Maria libera o karaokê. - Eduarda explicou, divertida.

*Minha filha, com você eu iria até para o risca faca*, Lorena pensou, mas limitou-se a sorrir.

-Pensei da gente comer alguma coisa por aqui, tomar uma cerveja trincando, até arriscar na sinuca, e depois a gente podia sei lá, tomar um sorvete. Você topa?

-Topo, claro. - Lorena respondeu debilmente.

Assistiu em silêncio o tal Zé Maria, que era o moço de detrás do balcão, chegar na mesa para anotar os pedidos. Ficou muda enquanto Eduarda pedia duas cervejas trincando, uma porção de batata e uma porção de torresmo.

Sentia que cada mísera gota de mulher loba que considerava haver no seu corpo havia desaparecido. Sentia-se patética, como se, semanas atrás, não houvesse insinuado para Eduarda que queria que ela cuspisse na sua boca e a algemasse.

-E aí? Quer me contar das confusões que você aprontou nos plantões que eu não estava? - Eduarda perguntou - Ouvi dizer que você invadiu a casa de uma família.

Lorena riu, balançando a cabeça em negação.

-Na real, isso não aconteceu. - Explicou - Era a casa da Maggye, a minha amiga. Ela meio que me ajudou quando eu expliquei que precisava falar com você.

-E ela não achou estranho?

-Não. Quer dizer, sim. Mas ela me conhece desde a infância, ela sabe que eu sou toda especial desse jeito.

-E o cachorro do seu vizinho?

-Bem, esse foi meio real. Eu tentei roubar porque sabia que seria pega.

Os pedidos finalmente chegaram, e elas brindaram rapidamente os copos americanos com cerveja antes de tomar um longo gole.

-E a briga de ontem?

-Essa foi engraçada, na verdade. - Lorena comentou enquanto mastigava preguiçosamente uma batata - Eu cheguei no bar já empurrando o primeiro que eu vi, e calhou dele ser o dono da academia que ficava ali do lado. Ele revidou o empurrão e eu me quebrei toda, tô com a costela meio dolorida ainda.

-E onde isso é engraçado, criatura? - Eduarda estava, mais uma vez, incrédula.

-É que até a polícia chegar, eles me deixaram amarrada pelo pé em uma mesa pra eu não escapar. Mas assim que o delegado chegou e me soltou, eu saí correndo para a sacada.

-Misericórdia… - foi a única coisa que Eduarda conseguiu responder.

-Mas chega de falar sobre mim, você já sabe muito sobre mim. E quanto a você, policial? O que te traz a esse fim de mundo?

-Como sabe que não sou daqui?

-O seu sotaque entrega tudo, senhora “sou da capital”. Anda, desembucha.

-Bem… - Eduarda começou, tomando outro gole da sua cerveja - Eu sou formada em Direito, e meio que queria um pouco de paz, por isso prestei o concurso pra cá.

-E porque exatamente para Sales Oliveira? Dentre todas as cidades do estado?

-Por que era a mais longe do meu pai. - Confessou.

-E porque você iria querer ficar longe do seu pai? - Lorena parecia intrigada com aquela afirmação.

-Bem, eu formei em direito porque ele queria, na realidade. Ele é desembargador, e achou que eu seguiria no ramo. - Explicou - Na realidade, ele almeja uma carreira política. Quer entrar para o STF. - Lorena arregalou os olhos diante daquela revelação - E eu nunca quis isso, eu sempre quis ingressar na polícia civil. Então quando eu estava pesquisando concursos, Sales Oliveira caiu no meu colo e aqui estou.

-E você mantém contato com seu pai?

-Bem, não com tanta frequência. Ele não aceitou muito bem minha decisão, embora não tenha sido uma decisão dele para tomar. Nossa relação não é das melhores, mas ainda nos falamos.

Lorena finalmente entendeu toda a delicadeza de Eduarda em relação a ela. Ela também possuía problemas com o pai, em um nicho muito parecido com o seu próprio pai, Santiago Ferette. De repente, a admiração que ela sentia pela ruiva apenas aumentou, e ela desejou um dia ter a coragem de enfrentar o próprio pai em troco da sua felicidade.

-E você gosta de trabalhar na polícia?

-Olha, não é um jardim de infância, mas eu gosto. - Eduarda respondeu - Principalmente quando não tem nenhuma morena bonita de olhos verdes perturbando o plantão.

Eduarda assistiu as bochechas de Lorena ficarem vermelhas, e a morena logo tratou de tomar um gole de sua cerveja para disfarçar o calor que lhe subiu pelo pescoço.

-Tá afim de jogar uma sinuca? Logo o Zé Maria libera o karaokê e isso aqui vai ficar muito mais interessante. Esses dias um senhor cantou *Bohemian Rhapsody* tão perfeitamente que por um momento eu realmente achei que ele era estadunidense.

Lorena riu alto, e seguiu Eduarda pelo boteco até chegar na mesa de sinuca. A policial pegou algumas fichas e elas começaram a jogar. Lorena jogava muitíssimo mal, e Eduarda era até mais ou menos, mas ainda assim elas se divertiram. A morena não conseguia parar de sorrir, um sentimento bom a rodeando o tempo todo. Nunca tinha saído daquela forma, flertado daquela forma e recebido tanta atenção. Notou que a ruiva reparava até mesmo nos seus mínimos detalhes, coisa que nem sequer sua família reparava.

Depois de alguns copos de cerveja e algumas partidas bem humoradas de sinuca, o karaokê foi liberado. As duas voltaram para a mesa, e a performance bêbada dos velhos do boteco se iniciou. Cantaram junto com um senhor parcialmente banguelo a música *Boate Azul*, e gritaram ainda mais alto quando uma mulher com um batom vermelhíssimo convocou todos os cornos ao som de *Dama de vermelho.*

Mas, foi quando um senhor completamente careca e barrigudo tomou o microfone e o som de *Dirty Dancing* ecoou pelo bar que os ânimos se transformaram. Eduarda, animada depois de três garrafas de cerveja, pulou da cadeira e estendeu a mão para Lorena, que rapidamente aceitou. As duas começaram uma sequência de passos desordenados, uma tentativa pífia de imitar a dança do filme famoso. Algumas pessoas do bar as acompanharam, mulheres balançando o vestido e homens de chinelo sapateando.

Quando o ponto alto da música iniciou, Eduarda se direcionou para uma extremidade do barzinho, abaixando-se e erguendo os braços em expectativa. Lorena, entrando na brincadeira, foi para o outro lado do bar e se preparou. Quando o senhor começou novamente o refrão, ela correu em direção à policial e saltou em seus braços. Usando toda a sua técnica e força física, Eduarda a ergueu ao ar sob os aplausos bêbados e animados dos espectadores do bar.

Lorena sorriu, equilibrando-se por alguns segundos e logo sendo devolvida ao chão. Ao colocá-la lentamente de volta à terra firme, Eduarda percebeu o quão próximas elas estavam. Suas mãos, firmes na cintura da morena, a apertaram. Seu sorriso esmaeceu, dando lugar a um olhar faminto. O perfume de Lorena invadiu cada poro do seu corpo, e de repente ela não tinha mais controle sobre si. Nunca estiveram tão próximas, nunca haviam compartilhado uma respiração ofegante como aquela vez. Lorena pareceu perceber a tensão, pois seus olhos verdes falharam para a boca de Eduarda.

-Eduarda… - Meio falou meio suspirou.

Rapidamente, buscando sair do olhar dos curiosos do bar, Eduarda se afastou dela e a agarrou pela mão. Caminhou apressadamente para fora do bar, olhando de um lado para o outro para checar se havia alguém espiando. Guiou Lorena para uma espécie de rua sem saída, um pequeno beco, que ficava atrás do estabelecimento. Checou mais uma vez antes de empurrá-la levemente pelos ombros, encostando-a contra a parede de tijolos aparentes.

-Você não está bêbada, está? - Perguntou, séria.

-Não. - Lorena, meio ofegante, respondeu - Por que?

-Porque eu vou querer que você se lembre disso amanhã. - Eduarda respondeu e se aproximou.

Suas mãos envolveram delicadamente o rosto de Lorena e seus lábios se aproximaram. O beijo se iniciou lento, um roçar de lábios experimental. O coração de Eduarda castigava suas costelas, e Lorena não estava muito diferente.

Permitiu-se ser beijada, as mãos estáticas erguidas ao lado do corpo da policial sem tocá-la. Só reagiu quando sentiu a língua quente e úmida pedindo passagem. Mais que depressa, depositou as mãos no pescoço da ruiva, usando uma para arranhar de leve a nuca e a outra para se embrenhar pelos seus cabelos, concedendo a passagem.

O beijo era lento, mas muito encaixado e, na opinião de Lorena, *delicioso.* Eduarda a beijava com tanta delicadeza e ao mesmo tempo de forma tão firme, que ela não podia evitar imaginar o estrago que aquela língua faria em *outros lugares.* E tudo só piorou quando, para provocar, sugou demoradamente a língua da ruiva, e como resposta teve seu corpo pressionado ainda mais contra a parede e mãos firmes lhe apertando a cintura.

Os rostos viravam, buscando um novo encaixe, o barulho molhado ecoava pelo beco e Lorena se sentia derreter sob aquele toque. As mãos da policial ergueram um pouco a sua blusa e se esgueiraram pela pele febril de sua cintura, fazendo-a soltar um gemido fraco contra os lábios ardidos de tantos beijos. Aquele foi o estopim para Eduarda, que sentiu o peito produzir um mínimo rosnado antes de enfiar uma de suas pernas entre as pernas de Lorena.

A morena partiu o beijo, engasgando-se em um gemido mais alto, menos contido. Os lábios de Eduarda escorregaram para o pescoço da mulher, sem dar tempo para recuperar o fôlego. Começaram uma doce tortura de beijos de boca aberta e lambidas nada inocentes, partindo de detrás da sua orelha até quase alcançar o osso da clavícula. Sentia-se alucinada por aquela morena, pelo seu calor, pelo gosto da sua pele.

Lorena era toda entrega, e recebeu as carícias em sua pele como a um bálsamo sobre suas feridas. Ela mesma não se aguentou e puxou Eduarda pelos cabelos para voltar a beija-la, e beijaram-se com tanta força que ela pôde sentir o gosto de sangue do pequeno machucado em seu lábio inferior, que havia aberto durante o duro ataque a seus lábios. Sem conseguir se conter, moveu as mãos dos cabelos ruivos para baixo, pousando-as sobre a bunda de Eduarda e puxando-a ainda mais contra si, aumentando a pressão entre suas pernas.

Foi a vez de Eduarda gemer pela pegada firme, e começar a esfregar a coxa contra Lorena. Aquilo escalava, e escalava rápido demais. Quando sentiu as mãos da morena saindo de sua bunda e tentando desabotoar a braguilha de sua calça jeans, Eduarda partiu o beijo e a segurou firmemente pelos pulsos.

-Lorena, calma… - Pediu, a respiração curta e o rosto completamente vermelho e bagunçado - a gente não pode fazer isso, pelo menos não aqui.

Lorena, ignorando-a, se desprendeu da parede e aproximou-se, tomando sua orelha entre os lábios e mordendo.

-Mas tá tão gostoso, Duda… - o apelido saiu rente ao ouvido de Eduarda em forma de miado.

–Eu sei, linda… mas você não é o tipo de mulher pra foder em um beco e esquecer.

Lorena parou as provocações, a demonstração de afeto excitando-a mais do que o próprio beijo (e olha que a sua calcinha já estava arruinada).

-Então me leva pra sua casa, Duda, me tira daqui. - Pediu, sua voz em um fio.

Eduarda não se permitiu pensar, apenas segurou em sua mão novamente e a guiou até a moto.

-Veste o capacete, eu vou pagar a conta. - E saiu de volta para o bar, retornando em seguida - Segura firme, Lorena, segura e não solta.

Aquela foi a viagem mais rápida de moto que Eduarda fez na vida. O gosto de Lorena estava impregnado em sua boca, os pequenos gemidos perturbavam seus ouvidos e aquele cheiro floral parecia ter se grudado em seu nariz.

Quando chegaram e ultrapassaram o portão, Lorena mal conseguiu entrar na casa e foi pressionada contra a porta fechada. *Porra, aquilo era o paraíso.* A brutalidade de Eduarda vinha misturada de uma paciência quase devocional, e apesar do tranco na porta, a ruiva tomou seu tempo beijando e sugando o lábio inferior de Lorena, arrancando mais suspiros sôfregos. Pausou apenas para murmurar, entre beijos:

-Eu realmente espero que você não tenha bebido o suficiente pra se esquecer disso amanhã.

-Eu não me esqueceria da sua língua nem se eu tentasse muito, Eduarda. - Foi o que Lorena respondeu.

-Ótimo, porque eu pretendo enfiar ela em outro lugar muito em breve.

Lorena agarrou com força o pescoço da ruiva, fazendo-a sustentar seus olhos dilatados pelo tesão.

-Prometa. - Pediu, puxando os fios ruivos com força.

-Eu prometo. - Eduarda respondeu, os dentes quase trincados de vontade, e em um movimento guiado por um desejo quase cego, apoiou as mãos nas coxas de Lorena e a puxou para seu colo.

Meio cambaleante, conseguiu alcançar seu quarto, e depositou calmamente a morena em sua cama. Lorena descobriu que gostava muito mais de ser beijada na horizontal quando sentiu o corpo de Eduarda se pressionar contra o seu, seio contra seio, cintura contra cintura, bocas grudadas e línguas se enroscando. Era delicioso, apesar de ainda estarem com as roupas. Mas claro, aquilo não durou muito.

A realidade atingiu Lorena com toda força quando Eduarda montou no seu colo e tirou a jaqueta, seguida da regata, ficando apenas com um sutiã preto de renda. Lorena, mais que depressa, sentou-se e se agarrou à sua cintura, beijando-a com tanto gosto que voltou a sentir o sangue na boca. Subiu as mãos para suas costelas, delineando a pele até alcançar os seios e apertá-los. Eduarda arfou, remexendo-se sobre ela, mas logo retomou o controle.

Empurrou-a pelos ombros e a ajudou a tirar o casaco listrado e a blusa, aguando quando percebeu que ela não usava sutiã. Seus olhos escureceram e ela lambeu o lábio inferior, hipnotizada. Voltou a deitar Lorena na cama e não esperou um segundo sequer para descer a boca a um de seus seios.

Lorena, ao sentir a língua quente e molhada contornar seu mamilo e sugá-lo com força, enrroscou novamente as mãos no fios ruivos e descontou ali todo seu prazer avassalador. Tremia sob Eduarda, insinuava-se na boca dela e gemia despudoradamente. Mal teve tempo de se recuperar quando ela passou de um seio para o outro, mordiscando e provocando a pele sensível.

Logo uma das mãos de Eduarda desceu para sua calça, desabotoando e começando a puxá-la para baixo enquanto ainda mantinha a boca em seu seio, concentrada. Lorena entendeu, e terminou de descer a calça, chutando-a de qualquer jeito. Com um último estalo, Eduarda soltou seu seio e se ergueu.

Seus olhos possuíam tanta fome, que Lorena se sentiu arrepiar dos pés a cabeça. Sua calcinha já estava em um estado deplorável, grudando na pele junto de sua umidade, e ela se sentiu fechar ao redor do nada quando Eduarda jogou todo o cabelo para o lado de voltou a se aproximar. Segurou os seus dois seios, aplicando um aperto brusco e se debruçou sobre ela.

-Você não faz ideia do quanto é gostosa, Lorena. - Disse baixo em seu ouvido, mordendo levemente o lóbulo de sua orelha.

Lorena tentou se mover, tentou puxá-la contra si, tentou retomar o controle, mas foi impedida. Com apenas um braço, Eduarda agarrou seus pulsos e os ergueu por sobre sua cabeça, imobilizando-a contra a cama.

-Shi… - disse, seus lábios resvalando sobre os de Lorena - Hoje não é sobre mim, é sobre você. E você vai ficar quietinha.

Lorena nada fez além de concordar com a cabeça e tentar lamber os lábios de Eduarda, que se esquivou. Desceu o corpo, olhando fundo nos olhos da morena e enganchou cada lado de sua calcinha nos polegares, descendo-a lentamente pelas suas pernas.

-Primeiro você vai gozar na minha boca, depois vou te comer olhando nos seus olhos. - Disse.

Lorena quase desfaleceu com aquela conversa suja, sentindo o ar que saia da boca de Eduarda atingindo sua intimidade vergonhosamente molhada. A ruiva então pareceu perceber seu estado, e sorriu um sorriso perverso.

-Tudo isso pra mim? - perguntou, mas não deu chances de Lorena responder, afundando sua boca diretamente na fonte.

Lambeu, chupou e se lambuzou. E Lorena, bem, Lorena precisou segurar nos lençóis com toda força para não gozar em segundos. Sabia que Eduarda seria talentosa quando a beijou, mas aquele oral beirava o paraíso.

Gemeu, rebolou contra a boca que a devorava avidamente e descontou sua vontade de explodir em mil pedaços nos cabelos da ruiva, puxando-os e empurrando ainda mais seu rosto contra a própria intimidade. Chamou desesperada pelo nome dela, um mantra de longos *Eduardas* saindo gemidos de seus lábios agora secos.

E Eduarda se esbaldou, fazendo círculos no nervo sensível, descendo a língua até a entrada e coletando umidade, lambendo e mordiscando. Engoliu a umidade abundante, voltou a chupá-la e agarrou suas coxas com tanta força e tanta fome, que tinha quase certeza de que deixaria a marca de seus dedos grudada na pele clara.

Lorena sentia a cabeça girar, o corpo começar a denunciar que seu orgasmo se aproximava. Ergueu-se nos cotovelos e a cena que viu trouxe seu derradeiro fim: Eduarda, cabelos selvagens e avermelhados entre suas mãos, a língua aparente e molhada no meio do seu sexo e os olhos, felinos e escuros, encarando diretamente através de sua alma, buscando reações.

Lorena colapsou com tanta força, que seu corpo se ergueu levemente do colchão. Tentou fechar as pernas, tentou se ancorar em algo para não ser arrebatada, mas Eduarda segurou suas coxas bem abertas para terminar de beber de si, e não parou de lambê-la até que o último tremor passasse. Devagar, o queixo molhado de excitação e os olhos úmidos de tesão, subiu pelo corpo suado de Lorena em uma trilha de beijos.

Não estava saciada, estava longe disso. Beijou-a, fazendo-a provar do próprio gosto, querendo que ela degustasse do próprio sabor divino. Lorena, ainda mole, resfolegou contra o beijo, e, em uma necessidade quase pungente de sentir pele contra pele, encaixou as mãos na calça de Eduarda, forçando-a para baixo. Mais que depressa, a policial a atendeu. Ergueu-se para terminar de se despir, e ficou nua.

Quando a policial voltou a se pressionar contra si, Lorena gemeu apenas por sentir o contato direto entre seus seios. Sentia-se ainda mais molhada, se é que era possível. Depois daquela noite, Lorena desconfiava que nunca mais deixaria de ficar molhada. Abriu mais as pernas, querendo que Eduarda se encaixasse ali, contra ela, intimidades tocando-se como os seios.

Aquele não era o plano de Eduarda, mas quando sentiu Lorena esfregar-se contra si, insinuando-se novamente contra ela, mandou os planos para a casa do caralho. Só percebeu o quão molhada e necessitada estava quando sentiu sua própria intimidade contra a intimidade da morena. Esfregou-se longamente uma vez, sentindo sua carne inchada e castigada contra a dela. Lorena gemeu, manhosa, e levou as mãos até a sua bunda, puxando-a contra si.

Eduarda voltou a se mover, os clitoris se amassando, se estimulando e deslizando com a umidade. Lorena a puxava, cravava as unhas em sua pele, arranhava com força as suas costas e se esfregava continuamente enquanto ela aumentava as reboladas de seu quadril. Os movimentos tornaram-se tão bruscos e necessitados que a cabeceira da cama começou a colidir contra a parede, juntando-se ao mantra de gemidos e o barulho das peles se chocando.

Eduarda tomou uma das mãos de Lorena, empurrando-a contra o coxão e entrelaçando seus dedos. Seus lábios partidos pairavam sobre a boca da morena, engolindo seus gemidos e depositando seus próprios sons contra ela. Lorena, que possuía os olhos fechados, começou a implorar sem perceber.

-Por favor, por favor… - se viu repetir, desesperada. Sentia seu corpo querendo explodir de novo, a sua excitação escorrendo por entre suas coxas, misturando-se a de Eduarda, que investia impiedosamente contra ela.

-Abre os olhos, linda. - Eduarda pediu, diminuindo um pouco o ritmo - Olha pra mim enquanto eu te como, olha pra você saber que sou eu aqui.

Lorena, apesar da dificuldade e da névoa de prazer, a obedeceu, e foi recompensada com um ritmo ainda mais impiedoso. Uma mão pressionada contra o colchão, a outra puxando Eduarda pela bunda para mais incrivelmente perto. A ruiva se aproximou de sua boca, e o beijo desajeitado que trocaram foi o golpe final. Primeiro Eduarda colapsou, tremendo violentamente e se esfregando com força em Lorena, que gozou em seguida, umedecendo ainda mais as coisas entre elas.

Entre tremores, gemidos e respirações cálidas, os corpos quentes e suados foram se acalmando. Eduarda deixou-se cair ao lado de Lorena, e não demorou a puxá-la contra seu peito acelerado. Lorena se ajeitou, abraçando sua cintura com braços moles feito macarrão cozido.

-Isso foi… - a morena começou, de olhos fechados.

-Legendário? - Eduarda completou, um sorriso bobo nos lábios.

-Eu ia dizer gostoso pra caralho, mas acho que legendário funciona.

As duas sorriram, e Lorena virou-se para Eduarda, as duas trocando um olhar significativo.

-Que fique claro que eu ainda não acabei com você, ouviu? - Eduarda disse baixo, ajeitando uma mexa do cabelo escuro de Lorena para trás de sua orelha - Temos a noite toda pela frente, e amanhã de manhã a senhorita não vai fugir de mim. Vou preparar o café da manhã e vamos comer juntas.

Lorena faz alguns padrões com a ponta do dedo no peito de Eduarda, encantada com tudo que aquela mulher estava sendo naquele encontro. Jamais pensou que pudesse criar uma conexão como aquela em tão pouco tempo.

-Que pena, achei que eu ia ser seu café da manhã. - Comentou, casualmente.

-Ah, mas você vai ser. - Eduarda respondeu, colocando-se por cima dela de novo - Se depender de mim, Lorena, você é café da manhã, almoço e janta.

Beijou-a profundamente, sorrindo contra seus lábios, as duas se atiçando mais uma vez.

-Vai me prender em cárcere privado, investigadora Fragoso? - Eduarda concordou, esfregando seu nariz no rosto de Lorena manhosamente - Pois saiba que isso é crime, sabia?

Eduarda gargalhou, e ergueu-se para encarar os verdes olhos de Lorena.

-Pois se amar é crime, me prenda agora!

Aquela noite foi só a primeira noite longa das vidas delas. Poderiam não se amar *ainda,* mas, num futuro não tão distante, aquela coceira insistente no peito se tornaria o caso de amor mais puro que a cidade de Sales Oliveira já ousou presenciar. No fim, Lorena estava errada: havia, sim, amor naquela cidade.`
  },
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
    // Aba "Jogo" (aparece ao lado de Personagens). Suba o arquivo do jogo solto, junto dos outros.
    jogo: {
      arquivo: "interfone.html",
      titulo: "Interfone do Rochester",
      descricao: "Meia-noite no condomínio: a Eduarda interfona para a vizinha de cima reclamar do barulho. Toque no chão da sala para andar e no quarto escuro para espiar."
    },

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
      { numero: 4, titulo: "4ª atualização",
        midias: { att: 4, partes: [
          {prefixo: "a606-att4a-", total: 110, videos: [28, 29, 30, 33, 36, 53, 60],
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
          } },
          {prefixo: "a606-att4b-", total: 78, videos: [32, 48, 57, 60, 62, 68, 73],
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
          } }
        ] } },
      { numero: 5, titulo: "5ª atualização",
        midias: { att: 5, prefixo: "a606-att5-", total: 160, videos: [18, 26, 52, 60, 83, 85, 93, 96, 104],
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
