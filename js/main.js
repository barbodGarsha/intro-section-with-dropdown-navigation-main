pre_load_hidden = document.querySelectorAll('[data-pre-load-hide]')

shadow = document.querySelector('[data-shadow]')
header_nav = document.querySelector('[data-header-nav]')
header_nav_close_menu_btn = document.querySelector('[data-header-close-menu]')
header_nav_open_menu_btn = document.querySelector('[data-header-open-menu]')
 
pre_load_hidden.forEach(el => {
    el.classList.remove('pre-load--hide')
});


header_nav_open_menu_btn.addEventListener('click', function(e) {
    shadow.classList.add('shadow--visible')
    header_nav.classList.add('header__nav--open')
})

header_nav_close_menu_btn.addEventListener('click', function(e) {
    shadow.classList.remove('shadow--visible')
    header_nav.classList.remove('header__nav--open')
})