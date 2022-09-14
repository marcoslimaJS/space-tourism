const btnMobile = document.querySelector('#btn-mobile');
const body = document.querySelector('body')

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
    nav.style.height = '98px';
    btnMobile.firstChild.setAttribute('src', '../assets/shared/icon-hamburger.svg')
    if(body.id == 'home') {
      btnMobile.firstChild.setAttribute('src', './assets/shared/icon-hamburger.svg')
    }
  }
  
};


btnMobile.addEventListener('click', toggleMenu);