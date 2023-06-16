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

const getSelected = (container) => container.querySelector('[data-selected="true"]');

const resetSelectionOption = (container, option) => {
    const icons = getIconsFromContainer(container)
    option.dataset.selected = 'false';
    icons.forEach( icon => {
        icon.classList.add('opacity-0');
        icon.classList.remove('translate-x-pq');
    });
}

const initEvents = (container, fn) => {
    const options = getOptionsByContainer(container)
    options.forEach( option => option.addEventListener('click', () => { 
        return fn ? fn(option,container) : optionClick(option,container) 
    }));
}

let optionClick = (option, container) => {
    resetSelectionOption(container, option);
    toggle(getIconFromOption(option), ['opacity-0', 'translate-x-pq']);
    option.dataset.selected = 'true'
}

let optionClickDecorator = (customHandler) => {
    return (option, container) => {
        optionClick(option, container);
        console.log(option.dataset,option.dataset.uniqueId)
        return customHandler(option, container);
    }
}

let groupClick = (option) => {
    const groupID = option.dataset.uniqueId
    const portionsOptionsFromGroup = portionsOptions.filter( portionOption => {
        const { groupId } = portionOption.dataset;
        return groupId === groupID;
    })

    movementsOptions.forEach(hide);
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

    movementsOptions.forEach(hide);
    articulationOptions.forEach(hide);
    articulationOptionsFromPortion.forEach(show);
}

portionClick = optionClickDecorator(portionClick)

let articulationClick = (option) => {
    const articulationID = option.dataset.uniqueId;
    const portionID = getSelected(portionContainer).dataset.uniqueId;
    const movementsIdsFromArticulationAndPortion = ARM.filter(({muscle_portion_id, articulation_id}) => {
        return muscle_portion_id === Number(portionID) && articulation_id === Number(articulationID);
    }).map(({movement_id}) => movement_id);

    const movementsOptionsFromArticulationAndPortion = movementsOptions.filter(
        el => movementsIdsFromArticulationAndPortion.includes(Number(el.dataset.uniqueId))
    )

    movementsOptions.forEach(hide);
    movementsOptionsFromArticulationAndPortion.forEach(show);
} 

articulationClick = optionClickDecorator(articulationClick);


initEvents(groupContainer, groupClick);
initEvents(portionContainer, portionClick);
initEvents(movementContainer);
initEvents(articulationContainer, articulationClick);