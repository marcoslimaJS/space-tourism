const btnMobile = document.querySelector('#btn-mobile');
const body = document.querySelector('body')

btnMobile.addEventListener('click', toggleMenu);

function toggleMenu() {
  const html = document.querySelector('html');
  const nav = document.querySelector('.menu');
  nav.classList.toggle('menu-ativo');

  if(nav.classList.contains('menu-ativo')) {
    nav.style.height = `${html.offsetHeight}px`;
    btnMobile.firstChild.setAttribute('src', '../assets/shared/icon-close.svg');
    if(body.id == 'home') {
      btnMobile.firstChild.setAttribute('src', './assets/shared/icon-close.svg');
    }
  }else {
    nav.style.height = '72px';
   
    btnMobile.firstChild.setAttribute('src', '../assets/shared/icon-hamburger.svg')
    if(body.id == 'home') {
      btnMobile.firstChild.setAttribute('src', './assets/shared/icon-hamburger.svg')
    }
  }
};

// Ativar Links do Menu
const menuLinks = document.querySelectorAll('#menu-lista li a');

menuLinks.forEach(ativarLink);

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if(url.includes(href)) {
    link.classList.add("ativo")
  }
}