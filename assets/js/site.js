const menuButton = document.querySelector('.menu-button');
const scrim = document.querySelector('.nav-scrim');

function closeNavigation() {
  document.body.classList.remove('nav-open');
  menuButton?.setAttribute('aria-expanded', 'false');
}

menuButton?.addEventListener('click', () => {
  const open = document.body.classList.toggle('nav-open');
  menuButton.setAttribute('aria-expanded', String(open));
});

scrim?.addEventListener('click', closeNavigation);
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeNavigation();
});
