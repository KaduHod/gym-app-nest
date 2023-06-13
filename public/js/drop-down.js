import { toggle } from "/js/utils.js";

export const toggleIcon = (dropContainer) => {
    const [icon] = [... dropContainer.getElementsByClassName('drop-down-icon')];
    toggle(icon, ['rotate-180']);
}

export const toggleSize = (dropContainer) => {
    const [target] = [... dropContainer.querySelectorAll('[data-drop-down="true"]')]
    toggle(target, ['hidden']);
}

export const toogleBG = (container) => {
    toggle(container, [
        'border-red-900',
        'border-red-950', 
        'shadow-2xl',
    ]);
}

export const setDropEvent = (dropContainer) => {
    dropContainer.addEventListener('click', (e) => {
        const {dropDownAllowClose} = e.target.dataset
        if(!dropDownAllowClose) return;
        toggleIcon(dropContainer);
        toggleSize(dropContainer);
        toogleBG(dropContainer)
    });
}

export const init = () => {
    const containers = [...document.querySelectorAll('[data-drop-container="true"]')];
    containers.forEach(setDropEvent);
}

init();