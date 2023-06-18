import { toggle, hide, show } from '/js/utils.js';

export const getIconFromOption = (option) => option.querySelector('[data-option-icon="true"]'); 

export const getOptionsByContainer = (container) => [...container.querySelectorAll('[data-option="true"]')];

export const getContainer = (name) => document.querySelector(`[data-container-name="${name}"]`)

export const resetIcon = (icon) => {
    icon.classList.add('opacity-0')
    icon.classList.remove('translate-x-pq')
}

export const resetContainer = (container) => { 
    const options = getOptionsByContainer(container)
    options.forEach( opt => {
        resetOption(opt);
        hide(opt);
    });
}

export const resetOption = (option) => {
    option.setAttribute('selected', 'false');
    resetIcon(getIconFromOption(option));
}

export const optionClick = (option, container) => {
    getOptionsByContainer(container).forEach(resetOption);
    toggle(getIconFromOption(option), ['opacity-0', 'translate-x-pq']);
    option.setAttribute('selected',"true");
}

export let optionClickDecorator = (customHandler) => {
    return (option, container) => {
        optionClick(option, container);
        return customHandler(option, container);
    }
}

export const getOptionSelectedByContainer = (container) => container.querySelector('[selected="true"]');

export const unselectContainer = (container) => resetOption(getOptionSelectedByContainer(container));

export const setOptionEvents = (container, fn) => {
    const options = getOptionsByContainer(container)
    options.forEach( option => option.addEventListener('click', () => { 
        return fn 
            ? fn(option, container) 
            : optionClick(option, container) 
    }));
}