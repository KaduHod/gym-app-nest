import { show, hide } from '/js/utils.js';
import { data } from '/js/exercises/create.js';
import { getContainer, getOptionsByContainer, resetContainer, optionClick, setOptionEvents, getOptionSelectedByContainer } from '/js/select/main.js'
const groupContainer = getContainer('muscle-group');
const portionContainer = getContainer('muscle-portion');
const articulationContainer = getContainer('articulation');
const movementContainer = getContainer('movement');
const portionsOptions = getOptionsByContainer(portionContainer);
const articulationOptions = getOptionsByContainer(articulationContainer);
const movementsOptions = getOptionsByContainer(movementContainer);
const AMP = JSON.parse(document.getElementById('AMP').value);
const addAmpButton = document.getElementById('add-amp');
let currentAmpItem = null;

export class AmpItem {
    constructor(portionOption, movementOption, articulationOption) {
        this.portion = {
            name: portionOption.dataset.name,
            id: Number(portionOption.dataset.value)
        };
        this.movement = {
            name: movementOption.dataset.name,
            id: Number(movementOption.dataset.value)
        };
        this.articulation = {
            name: articulationOption.dataset.name,
            id: Number(articulationOption.dataset.value)
        };
        this.id = AMP.find( item => {
            return Number(item.articulation_id) === this.articulation.id
                && Number(item.muscle_portion_id) === this.portion.id 
                && item.movement_id == this.movement.id
        }).id;

        if(!this.id) {
            throw { message: "Invalid combination of portion, articulation and movement. Please report the error!"}
        }
    }
}

let optionClickDecorator = (customHandler) => {
    return (option, container) => {
        optionClick(option, container);
        return customHandler(option, container);
    }
}

let groupClick = (option) => { 
    const groupID = option.dataset.value
    const portionsOptionsFromGroup = portionsOptions.filter( portionOption => {
        const { groupId } = portionOption.dataset;
        return groupId === groupID;
    })

    resetContainer(movementContainer);
    resetContainer(articulationContainer);
    resetContainer(portionContainer);
    portionsOptionsFromGroup.forEach(show);
}

let portionClick = (option) => {
    const portionID = option.dataset.value;
    const articulationsIdsFromPortion = AMP
        .filter(({muscle_portion_id}) => muscle_portion_id === Number(portionID))
        .map(({articulation_id}) => articulation_id);

    const articulationOptionsFromPortion = articulationOptions
        .filter( el => articulationsIdsFromPortion.includes(Number(el.dataset.value)));

    resetContainer(movementContainer);
    resetContainer(articulationContainer);
    articulationOptionsFromPortion.forEach(show);
}

let articulationClick = (option) => {
    const articulationID = Number(option.dataset.value);
    const portionID = Number(getOptionSelectedByContainer(portionContainer).dataset.value);
    
    const movementsIdsFromArticulationAndPortion = AMP.filter(({muscle_portion_id, articulation_id}) => {
        return muscle_portion_id === portionID && articulation_id === articulationID;
    }).map(({movement_id}) => movement_id);

    const movementsOptionsFromArticulationAndPortion = movementsOptions.filter(
        el => movementsIdsFromArticulationAndPortion.includes(Number(el.dataset.value))
    );

    resetContainer(movementContainer);
    movementsOptionsFromArticulationAndPortion.forEach(show);
} 

let movementClick = (option) => {
    const portion = getOptionSelectedByContainer(portionContainer);
    const movement = option;
    const articulation = getOptionSelectedByContainer(articulationContainer);
    currentAmpItem = new AmpItem(portion, movement, articulation);
    show(addAmpButton)
}

const addAmpButtonClick = (e) => {
    data.add(currentAmpItem)
    currentAmpItem = null;
    hide(addAmpButton)
}

groupClick = optionClickDecorator(groupClick);
portionClick = optionClickDecorator(portionClick);
movementClick = optionClickDecorator(movementClick);
articulationClick = optionClickDecorator(articulationClick);
setOptionEvents(groupContainer, groupClick);
setOptionEvents(portionContainer, portionClick);
setOptionEvents(movementContainer, movementClick);
setOptionEvents(articulationContainer, articulationClick);
addAmpButton.addEventListener('click', addAmpButtonClick)