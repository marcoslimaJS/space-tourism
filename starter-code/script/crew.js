import dados from '../data.json' assert {type: 'json'};

const crews = dados.crew;
const crewLista = document.querySelectorAll('.crew-lista li');
const tripulacao = Array.from(crewLista)

const oficialNome = document.querySelector('.crew-name');
const oficialBio = document.querySelector('.crew-descricao');
const oficialRole = document.querySelector('.crew-role');
const oficialImg = document.querySelector('.crew-img img');


let crewNome = '';
let crewBio = '';
let crewRole = '';
let crewImg = ''

function alterarLista() {
  tripulacao.forEach((element, index) => {
    element.addEventListener('click', () => {
      for (let i = 0; i < crews.length; i++) {
        if(element.id == crews[i].name.toLowerCase()){
          crewNome = crews[i].name;
          crewBio = crews[i].bio;
          crewRole = crews[i].role;
          crewImg = crews[i].images.png;
          inserindoCrew(crewNome, crewRole, crewBio, crewImg);
        }
      } 
      resetAtivo();
      crewAtivo(element);
    })
  })
};

alterarLista()

function inserindoCrew(nome, role, bio, img) {
  oficialNome.textContent = nome;
  oficialRole.textContent = role;
  oficialBio.textContent = bio;
  oficialImg.setAttribute('src', img)
}

function resetAtivo() {
  tripulacao.forEach((crew) => {
    crew.style.color = 'rgba(255, 255, 255, 0.5)'
    crew.classList.remove('crew-ativo')
  })
}

function crewAtivo (crew) {
  crew.classList.add('crew-ativo')
  crew.style.background = "#FFFFFF"
}