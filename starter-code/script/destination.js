import dados from '../data.json' assert {type: 'json'};
const destinations = dados.destinations;
const planetaLista = document.querySelectorAll('.destination-lista li');
const planetas = Array.from(planetaLista)

const planetaNome = document.querySelector('.planeta-titulo');
const planetaDescricao = document.querySelector('.planeta-descricao');
const planetaDistancia = document.querySelector('.planeta-distancia span');
const planetaTempo = document.querySelector('.planeta-tempo span');
const planetaImg = document.querySelector('.destination-img img');


let destinoNome = '';
let destinoDescricao = '';
let destinoDistancia = '';
let destinoTempo = '';
let destinoImg = ''

function alterarLista() {
  planetas.forEach((planeta, index) => {
    planeta.addEventListener('click', (e) => {
      e.preventDefault();
      for (let i = 0; i < destinations.length; i++) {
        if(planeta.id == destinations[i].name.toLowerCase()){
          destinoNome = destinations[i].name;
          destinoDescricao = destinations[i].description;
          destinoDistancia = destinations[i].distance;
          destinoTempo = destinations[i].travel;
          destinoImg = destinations[i].images.png;
          inserindoPlaneta(destinoNome, destinoDescricao, destinoDistancia, destinoTempo, destinoImg);
        }
      } 
      resetAtivo();
      planetaAtivo(planeta);
    })
  })
};

alterarLista()

function inserindoPlaneta(nome, descricao, distancia, tempo, img) {
  planetaNome.textContent = nome;
  planetaDescricao.textContent = descricao;
  planetaDistancia.textContent = distancia;
  planetaTempo.textContent = tempo;
  planetaImg.setAttribute('src', img);
}

function resetAtivo() {
  planetas.forEach((planeta) => {
    planeta.firstChild.style.color = 'rgba(255, 255, 255, 0.5)';
    planeta.classList.remove('planeta-ativo');
  })
}

function planetaAtivo (planeta) {
  planeta.classList.add('planeta-ativo');
  planeta.firstChild.style.color = "#FFFFFF";
}