import { show } from '/js/utils.js';
import { getContainer, getOptionsByContainer, resetContainer, optionClick, setOptionEvents, getOptionSelectedByContainer } from '/js/select/main.js'
const groupContainer = getContainer('muscle-group');
const portionContainer = getContainer('muscle-portion');
const articulationContainer = getContainer('articulation');
const movementContainer = getContainer('movement');
const portionsOptions = getOptionsByContainer(portionContainer);
const articulationOptions = getOptionsByContainer(articulationContainer);
const movementsOptions = getOptionsByContainer(movementContainer);
const AMP = JSON.parse(document.getElementById('AMP').value);

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
    portionsOptionsFromGroup.forEach(show);
}

let portionClick = (option) => {
    const portionID = option.dataset.uniqueId;
    const articulationsIdsFromPortion = AMP
        .filter(({muscle_portion_id}) => muscle_portion_id === Number(portionID))
        .map(({articulation_id}) => articulation_id);

    const articulationOptionsFromPortion = articulationOptions
        .filter( el => articulationsIdsFromPortion.includes(Number(el.dataset.uniqueId)))

    resetContainer(movementContainer);
    resetContainer(articulationContainer);
    articulationOptionsFromPortion.forEach(show);
}

let articulationClick = (option) => {
    const articulationID = Number(option.dataset.uniqueId);
    const portionID = Number(getOptionSelectedByContainer(portionContainer).dataset.uniqueId);
    
    const movementsIdsFromArticulationAndPortion = AMP.filter(({muscle_portion_id, articulation_id}) => {
        return muscle_portion_id === portionID && articulation_id === articulationID;
    }).map(({movement_id}) => movement_id);

    const movementsOptionsFromArticulationAndPortion = movementsOptions.filter(
        el => movementsIdsFromArticulationAndPortion.includes(Number(el.dataset.uniqueId))
    )

    resetContainer(movementContainer);
    movementsOptionsFromArticulationAndPortion.forEach(show);
} 

articulationClick = optionClickDecorator(articulationClick);
portionClick = optionClickDecorator(portionClick);
groupClick = optionClickDecorator(groupClick);
setOptionEvents(groupContainer, groupClick);
setOptionEvents(portionContainer, portionClick);
setOptionEvents(articulationContainer, articulationClick);
setOptionEvents(movementContainer);