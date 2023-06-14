import { toggle } from "/js/utils.js";

const menuItems = document.getElementById('list-menu');
const closeMenu = document.getElementById('menu-close');
const menu = document.getElementById('menu-hamburguer');
const bcMenu = document.getElementById('background-menu');

menu.onclick = function() {
    toggleMenuIcon();
    toggle(menuItems, ['-translate-x', 'opacity-0']);
}

closeMenu.onclick = function(){
    toggleMenuIcon();
    toggle(menuItems, ["-translate-x", 'opacity-0']);
}

const toggleMenuIcon = () => {
    toggle(menu, ['hidden']);
    toggle(closeMenu, ['hidden']);
    toggle(bcMenu, ['border-red-950','border-red-800','shadow-2xl']);
}