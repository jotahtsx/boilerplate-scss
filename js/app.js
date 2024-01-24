const menuIconEl = $('.menu-icon');
const sidenavEl = $('.sidebar');
const sidenavCloseEl = $('.sidebar__close-icon');

let isSidebarRed = false; // Flag para verificar se a sidebar está vermelha

function toggleClassName(el, className) {
  if (el.hasClass(className)) {
    el.removeClass(className);
  } else {
    el.addClass(className);
  }
}

function closeSidenav() {
  toggleClassName(sidenavEl, 'active');

  // Restaura a cor de fundo ao fechar se a sidebar estiver vermelha
  if (isSidebarRed) {
    sidenavEl.css('background-color', '');
    isSidebarRed = false;
  }
}

menuIconEl.on('click', function() {
  toggleClassName(sidenavEl, 'active');

  // Altera para a cor de fundo vermelha ou restaura a cor original ao clicar
  if (!isSidebarRed) {
    sidenavEl.css('background-color', 'red');
    isSidebarRed = true;
  } else {
    sidenavEl.css('background-color', '');
    isSidebarRed = false;
  }
});

sidenavCloseEl.on('click', function() {
  closeSidenav();
});

// Fechar o menu ao clicar fora
$(document).on('click', function(event) {
  if (!$(event.target).closest('.menu-icon').length && !$(event.target).closest('.sidebar').length) {
    closeSidenav();
  }
});

// Fechar o menu ao pressionar a tecla "Esc"
$(document).on('keydown', function(event) {
  if (event.key === 'Escape' && sidenavEl.hasClass('active')) {
    closeSidenav();
  }
});
