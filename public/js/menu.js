import { toggle } from "/js/utils.js";

const menuItems = document.getElementById('list-menu');
const closeMenu = document.getElementById('menu-close');
const menu = document.getElementById('menu-hamburguer');
const bcMenu = document.getElementById('background-menu');
const lisMenu = [...document.getElementsByClassName('menu-li')]

const toggleMenuIcon = () => {
    toggle(menu, ['hidden']);
    toggle(closeMenu, ['hidden']);
    toggle(bcMenu, ['border-red-950','border-red-800','shadow-2xl']);
}

const toggleMenuMain = () => {
    toggleMenuIcon();
    toggle(menuItems, ["-translate-x-full-full"]);
    lisMenu.forEach( li => toggle(li, ['opacity-0','-translate-x']))
}

menu.onclick = toggleMenuMain
closeMenu.onclick = toggleMenuMain
