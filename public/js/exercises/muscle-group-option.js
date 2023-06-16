import { toggle, hide, show } from '/js/utils.js';
const groupContainer = document.querySelector('[data-muscle-group-options-container="true"'); 
const portionContainer = document.querySelector('[data-muscle-portions-options-container="true"]');
const articulationContainer = document.querySelector('[data-articulations-options-container="true"]');
const movementContainer = document.querySelector('[data-movements-options-container="true"]');
const getIconFromOption = (option) => option.querySelector('[data-option-icon="true"]'); 
const getOptionsByContainer = (container) => [...container.querySelectorAll('[data-option="true"]')];
const portionsOptions = getOptionsByContainer(portionContainer);
const articulationOptions = getOptionsByContainer(articulationContainer);
const movementsOptions = getOptionsByContainer(movementContainer);
const ARM = JSON.parse(document.getElementById('AMP').value)

const resetIcon = (icon) => {
    icon.classList.add('opacity-0')
    icon.classList.remove('translate-x-pq')
}
const resetIconFromOption = (option) => resetIcon(getIconFromOption(option));

const resetOption = (option) => {
    option.setAttribute('selected', 'false');
    resetIconFromOption(option);
}

const getOptionSelectedByContainer = (container) => container.querySelector('[selected="true"]');

const resetContainer = (container) => getOptionsByContainer(container).forEach(resetOption);

/**
 * EVENTS
 */
const initOptions = (container, fn) => {
    const options = getOptionsByContainer(container)
    options.forEach( option => option.addEventListener('click', () => { 
        return fn 
            ? fn(option,container) 
            : optionClick(option,container) 
    }));
}
let optionClick = (option, container) => {
    resetContainer(container);
    toggle(getIconFromOption(option), ['opacity-0', 'translate-x-pq']);
    option.setAttribute('selected',"true")
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

    resetContainer(movementContainer);
    resetContainer(articulationContainer);
    resetContainer(portionContainer);
    movementsOptions.forEach(hide);
    portionsOptions.forEach(hide);
    articulationOptions.forEach(hide);
    portionsOptionsFromGroup.forEach(show);
}
let portionClick = (option) => {
    const portionID = option.dataset.uniqueId;
    const articulationsIdsFromPortion = ARM
        .filter(({muscle_portion_id}) => muscle_portion_id === Number(portionID))
        .map(({articulation_id}) => articulation_id);

    const articulationOptionsFromPortion = articulationOptions
        .filter( el => articulationsIdsFromPortion.includes(Number(el.dataset.uniqueId)))

    resetContainer(movementContainer);
    resetContainer(articulationContainer);
    movementsOptions.forEach(hide);
    articulationOptions.forEach(hide);
    articulationOptionsFromPortion.forEach(show);
}
let articulationClick = (option) => {
    const articulationID = Number(option.dataset.uniqueId);
    const portionID = Number(getOptionSelectedByContainer(portionContainer).dataset.uniqueId);
    
    const movementsIdsFromArticulationAndPortion = ARM.filter(({muscle_portion_id, articulation_id}) => {
        return muscle_portion_id === portionID && articulation_id === articulationID;
    }).map(({movement_id}) => movement_id);

    const movementsOptionsFromArticulationAndPortion = movementsOptions.filter(
        el => movementsIdsFromArticulationAndPortion.includes(Number(el.dataset.uniqueId))
    )

    resetContainer(movementContainer);
    movementsOptions.forEach(hide);
    movementsOptionsFromArticulationAndPortion.forEach(show);
} 

articulationClick = optionClickDecorator(articulationClick);
portionClick = optionClickDecorator(portionClick);
groupClick = optionClickDecorator(groupClick);
initOptions(groupContainer, groupClick);
initOptions(portionContainer, portionClick);
initOptions(movementContainer);
initOptions(articulationContainer, articulationClick);