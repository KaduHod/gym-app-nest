import { toggle } from "/js/utils.js";

export const toggleIcon = (dropContainer) => {
    const [icon] = [... dropContainer.getElementsByClassName('drop-down-icon')];
    toggle(icon, ['rotate-180']);
}

export const toggleSize = (dropContainer) => {
    const [target] = [... dropContainer.querySelectorAll('[data-drop-down="true"]')]
    toggle(target, ['-translate-y', "opacity-100","opacity-0", 'h-0']);
}

export const toggleCommon = (container) => {
    toggle(container, ['shadow-2xl']);
}

export const setDropEvent = (dropContainer) => {
    dropContainer.addEventListener('click', (e) => {
        const {dropDownAllowClose} = e.target.dataset
        if(!dropDownAllowClose) return;
        toggleIcon(dropContainer);
        toggleSize(dropContainer);
        toggleCommon(dropContainer)
    });
}

export const init = () => {
    const containers = [...document.querySelectorAll('[data-drop-container="true"]')];
    containers.forEach(setDropEvent);
}

init();