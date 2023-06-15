import { toggle, hide, show } from '/js/utils.js';
const groupContainer = document.querySelector('[data-muscle-group-options-container="true"'); 
const portionContainer = document.querySelector('[data-muscle-portions-options-container="true"]');
const articulationContainer = document.querySelector('[data-articulations-options-container="true"]');
const movementContainer = document.querySelector('[data-movements-options-container="true"]');
const getIconFromOption = (option) => option.querySelector('[data-option-icon="true"]'); 
const getIconsFromContainer = (container) => [...container.querySelectorAll('[data-option-icon="true"]')];
const getOptionsByContainer = (container) => [...container.querySelectorAll('[data-option="true"]')];
const portionsOptions = getOptionsByContainer(portionContainer);
const articulationOptions = getOptionsByContainer(articulationContainer);
const movementsOptions = getOptionsByContainer(movementContainer);
const ARM = JSON.parse(document.getElementById('AMP').value)

let optionClick = (option, container) => {
    resetSelectionOption(container);
    toggle(getIconFromOption(option), ['opacity-0', 'translate-x-pq']);
}

let optionClickDecorator = (customHandler) => {
    return (option, container) => {
        optionClick(option, container);
        return customHandler(option, container);
    }
}

let groupClick = (option) => {
    const groupID = option.dataset.uniqueId
    const portionsOptionsFromGroup = portionsOptions.filter( portionOption => {
        const { groupId } = portionOption.dataset;
        return groupId === groupID;
    })

    portionsOptions.forEach(hide);
    articulationOptions.forEach(hide);
    portionsOptionsFromGroup.forEach(show);
}

groupClick = optionClickDecorator(groupClick)

let portionClick = (option) => {
    const portionID = option.dataset.uniqueId;
    const articulationsIdsFromPortion = ARM
        .filter(({muscle_portion_id}) => muscle_portion_id === Number(portionID))
        .map(({articulation_id}) => articulation_id);

    const articulationOptionsFromPortion = articulationOptions
        .filter( el => articulationsIdsFromPortion.includes(Number(el.dataset.uniqueId)))

    articulationOptions.forEach(hide);
    articulationOptionsFromPortion.forEach(show);
}

portionClick = optionClickDecorator(portionClick)

let movementClick = (option) => {
    const movementID = 
} 

function resetSelectionOption(container){
    const icons = getIconsFromContainer(container)
    icons.forEach( icon => {
        icon.classList.add('opacity-0');
        icon.classList.remove('translate-x-pq');
    });
}

function initEvents(container, fn) {
    const options = getOptionsByContainer(container)
    options.forEach( option => option.addEventListener('click', () => { 
        return fn ? fn(option,container) : optionClick(option,container) 
    }));
}

initEvents(groupContainer, groupClick);
initEvents(portionContainer, portionClick);
initEvents(movementContainer);
initEvents(articulationContainer);