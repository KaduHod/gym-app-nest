import { toggle, STATUS } from '/js/utils.js';
const groupContainer = document.querySelector('[data-muscle-group-options-container="true"'); 
const portionContainer = document.querySelector('[data-muscle-portions-options-container="true"]');
const articulationContainer = document.querySelector('[data-articulations-options-container="true"]');
const movementContainer = document.querySelector('[data-movements-options-container="true"]');
const getIconFromOption = (option) => option.querySelector('[data-option-icon="true"]'); 
const getIconsFromContainer = (container) => [...container.querySelectorAll('[data-option-icon="true"]')];

async function groupClick(option,container) {
    resetSelectionOption(container)
    toggle(getIconFromOption(option), ['opacity-0', 'translate-x-pq']);
}

function resetSelectionOption(container){
    const icons = getIconsFromContainer(container)
    icons.forEach( icon => {
        icon.classList.add('opacity-0');
        icon.classList.remove('translate-x-pq');
    });
}

const getOptionsByContainer = container => {
    return [...container.querySelectorAll('[data-option="true"]')]
}

function initEvents(container) {
    const options = getOptionsByContainer(container)
    options.forEach( option => option.addEventListener('click', () => { groupClick(option,container) }));
}

const getPortionsOptions = () => [...portionContainer.querySelectorAll('[data-icon-muscle-portion-option="true"]')]

const getOptionsGroups = () => [...groupContainer.querySelectorAll('[data-icon-muscle-group-option="true"]')]


function initSelectEvents() {
    console.log(getOptionsGroups())
    getOptionsGroups().forEach( el => el.addEventListener('click', (e) => {
        const { uniqueId } = el.target.dataset 
        filterSelectedPortions(uniqueId);
    }))
}

function filterSelectedPortions(groupID) {
    const portions = getPortionsOptions();
    console.log({portions})
    portions.forEach( portion => {
        const { groupId } = portion.dataset
        if(groupId === groupID) portion.classList.remove('hidden')
        else portion.classList.add('hidden')
    })
}

initEvents(groupContainer)
initEvents(portionContainer)
initEvents(movementContainer)
initEvents(articulationContainer)
initSelectEvents()