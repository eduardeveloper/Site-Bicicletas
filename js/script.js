




//ativar links do menu

const links = document.querySelectorAll('.header-menu a')

function ativarLink (link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);


// ativar itens do orcamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if(elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);


// perguntas frequentes 

const perguntas = document.querySelectorAll('.perguntas button');

function ativarPergunta (event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);


  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", "true");
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener('click', ativarPergunta);
}

perguntas.forEach(eventosPerguntas);


// Galeria de bicicletas

const galeria = document.querySelectorAll(".bicicleta-imgaens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");


function trocarImagem(event) {
  const img = event.currentTarget;
  const media = matchMedia('(min-width: 1000px)').matches;
  if(media) {
    galeriaContainer.prepend(img);
  }
}


function eventosGaleria(img) {
  img.addEventListener("Click", trocarImagem);
}

galeria.forEach(eventosGaleria);



// Animação 
if(window.SimpleAnime) {
  new SimpleAnime();
}