/*
  ============================================================
  PERFIS PADRÃO DAS PERSONAGENS
  Usados nos tweets e conversas quando a AU não lista a personagem
  em "personagens" (cada AU pode ter os próprios nomes, @ e fotos).
  ============================================================

  - id: o apelido curto que você usa nas AUs, depois do @ (ex.: @lorena).
    Use só letras minúsculas, sem acento e sem espaço.
  - nome: o nome que aparece no tweet.
  - arroba: o @ que aparece embaixo do nome.
  - foto: o nome do arquivo da foto (envie a imagem solta, junto com os
    outros arquivos). Sem foto, aparece um círculo com a inicial.
  - cor: a cor do círculo quando não há foto.
  - verificado: true para aparecer o selinho ao lado do nome.

  Para adicionar alguém, copie um bloco { ... }, e cole antes do "];".
  ============================================================
*/

const PERFIS = [
  { id: "lorena",   nome: "Lorena",       arroba: "@loreferette",     foto: "lorena.jpg",   cor: "#1F8A5B", verificado: true },
  { id: "eduarda",  nome: "Duda 🧡",      arroba: "@juquinhafragoso", foto: "eduarda.jpg",  cor: "#F26B21", verificado: true },
  { id: "maggye",   nome: "Maggye",       arroba: "@maggyefofoca",    foto: "maggye.jpg",   cor: "#B85C9E" },
  { id: "paulinho", nome: "Paulinho",     arroba: "@paulinho.dp",     foto: "paulinho.jpg", cor: "#3C6FB0" },
  { id: "gerluce",  nome: "Gerluce",      arroba: "@gerlucee",        foto: "gerluce.jpg",  cor: "#C9A227" },
  { id: "doutora",  nome: "Doutora 🌿",   arroba: "@capivaradocampus", foto: "doutora.jpg", cor: "#7A5232" },
];
