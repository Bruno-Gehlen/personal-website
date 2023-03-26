// Abre e fecha o menu de navegação quando o ícone é clicado
document.querySelector('.menu-btn').addEventListener('click', () => {
  document.querySelector('.nav-menu').classList.toggle('show');
});

// Fecha o menu de navegação quando um item é clicado
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.remove('show');
  });
});
