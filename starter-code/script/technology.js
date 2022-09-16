import dados from '../data.json' assert {type: 'json'};

const tecnologia = dados.technology;
const tecnologiaLista = document.querySelectorAll('.technology-lista li');
const fogueteLista = Array.from(tecnologiaLista)

const fogueteNome = document.querySelector('.technology-name');
const fogueteDescricao = document.querySelector('.technology-descricao');
const fogueteImgDesktop = document.querySelector('.img-desktop');
const fogueteImgMobile = document.querySelector('.img-mobile');


let tecnologiaNome = '';
let tecnologiaDescricao = '';
let tecnologiaImgDesktop = '';
let technologiaImgMobile = ''

function alterarLista() {
  fogueteLista.forEach((foguete, index) => {
    foguete.addEventListener('click', (e) => {
      e.preventDefault();
      for (let i = 0; i < tecnologia.length; i++) {
        if(foguete.id == tecnologia[i].name.toLowerCase()){
          tecnologiaNome = tecnologia[i].name;
          tecnologiaDescricao = tecnologia[i].description;
          tecnologiaImgDesktop = tecnologia[i].images.portrait;
          technologiaImgMobile = tecnologia[i].images.landscape;

          inserindoCrew(tecnologiaNome, tecnologiaDescricao, tecnologiaImgDesktop, technologiaImgMobile);
        }
      } 
      resetAtivo();
      fogueteAtivo(foguete);
    })
  })
};

alterarLista()

function inserindoCrew(nome, descricao, imgDesktop, imgMobile) {
  fogueteNome.textContent = nome;
  fogueteDescricao.textContent = descricao;
  fogueteImgDesktop.setAttribute('src', imgDesktop);
  fogueteImgMobile.setAttribute('src', imgMobile);
}

function resetAtivo() {
  fogueteLista.forEach((foguete) => {
    foguete.classList.remove('foguete-ativo');
  })
}

function fogueteAtivo (foguete) {
  foguete.classList.add('foguete-ativo')
}