import dados from '../data.json' assert {type: 'json'};

const tecnologia = dados.technology;
const tecnologiaLista = document.querySelectorAll('.technology-lista li');
const fogueteLista = Array.from(tecnologiaLista)

const fogueteNome = document.querySelector('.technology-name');
const fogueteDescricao = document.querySelector('.technology-descricao');
const fogueteImg = document.querySelector('.technology-img img');


let tecnologiaNome = '';
let tecnologiaDescricao = '';
let tecnologiaImg = ''

function alterarLista() {
  fogueteLista.forEach((foguete, index) => {
    foguete.addEventListener('click', () => {
      console.log('teste')
      for (let i = 0; i < tecnologia.length; i++) {
        if(foguete.id == tecnologia[i].name.toLowerCase()){
          tecnologiaNome = tecnologia[i].name;
          tecnologiaDescricao = tecnologia[i].description;
          tecnologiaImg = tecnologia[i].images.portrait;
          inserindoCrew(tecnologiaNome, tecnologiaDescricao, tecnologiaImg);
        }
      } 
      resetAtivo();
      fogueteAtivo(foguete);
    })
  })
};

alterarLista()

function inserindoCrew(nome, descricao, img) {
  fogueteNome.textContent = nome;
  fogueteDescricao.textContent = descricao;
  fogueteImg.setAttribute('src', img)
}

function resetAtivo() {
  fogueteLista.forEach((foguete) => {
    foguete.classList.remove('foguete-ativo');
  })
}

function fogueteAtivo (foguete) {
  foguete.classList.add('foguete-ativo')
}