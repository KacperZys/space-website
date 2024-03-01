$(function () {
    $(".paste-header").load("header.html", function () {
        const openMenu = document.querySelector('.header__menu-image');
        const closeMenu = document.querySelector('.hidden-menu__close-image');
        const menu = document.querySelector('.hidden-menu');

        openMenu.addEventListener('click', e => {
            openMenu.classList.add('hidden');
            closeMenu.classList.remove('hidden');
            menu.style.display = 'block';
        });

        closeMenu.addEventListener('click', e => {
            closeMenu.classList.add('hidden');
            openMenu.classList.remove('hidden');
            menu.style.display = 'none';
        });
    });
});