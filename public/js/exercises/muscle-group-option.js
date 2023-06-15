import { toggle } from '/js/utils.js';
const groupContainer = document.querySelector('[data-muscle-group-options-container="true"'); 
const portionContainer = document.querySelector('[data-muscle-portions-options-container="true"]');
const articulationContainer = document.querySelector('[data-articulations-options-container="true"]');
const movementContainer = document.querySelector('[data-movements-options-container="true"]');
const getIconFromOption = (option) => option.querySelector('[data-option-icon="true"]'); 
const getIconsFromContainer = (container) => [...container.querySelectorAll('[data-option-icon="true"]')];
const getPortionsOptions = () => [...portionContainer.querySelectorAll('[data-muscle-portion-option="true"]')];
const getOptionsGroups = () => [...groupContainer.querySelectorAll('[data-muscle-group-option="true"]')];
const getOptionsByContainer = (container) => [...container.querySelectorAll('[data-option="true"]')];

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

let groupClick = (option, container) => {
    const groupID = option.dataset.uniqueId
    const portionsOptions = getPortionsOptions()
    const portionsOptionsFromGroup = portionsOptions.filter( portionOption => {
        const { groupId } = portionOption.dataset;
        return groupId === groupID;
    })

    console.log({portionsOptionsFromGroup, portionsOptions})
    portionsOptions.forEach( el => el.classList.add('hidden'))
    portionsOptionsFromGroup.forEach( el => el.classList.remove('hidden'));
}

groupClick = optionClickDecorator(groupClick)

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


function initSelectEvents() {
    getOptionsGroups().forEach( el => el.addEventListener('click', (e) => {
        const { uniqueId } = el.target.dataset 
        filterSelectedPortions(uniqueId);
    }))
}

function filterSelectedPortions(groupID) {
    const portions = getPortionsOptions();
    portions.forEach( portion => {
        const { groupId } = portion.dataset
        if(groupId === groupID) portion.classList.remove('hidden')
        else portion.classList.add('hidden')
    })
}

initEvents(groupContainer, groupClick);
initEvents(portionContainer);
initEvents(movementContainer);
initEvents(articulationContainer);
initSelectEvents();