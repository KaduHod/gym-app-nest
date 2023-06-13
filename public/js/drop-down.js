export const toggleIcon = (dropContainer) => {
    const [icon] = [... dropContainer.getElementsByClassName('drop-down-icon')];
    icon.classList.toggle('rotate-180')
}

export const toggleSize = (dropContainer) => {
    const [target] = [... dropContainer.querySelectorAll('[data-drop-down="true"]')]
    target.classList.toggle('hidden')
}

export const toogleBG = (container) => {
    container.classList.toggle('bg-stone-900')
    container.classList.toggle('bg-red-700')
}

export const setDropEvents = (id) => {
    const dropContainer = document.getElementById(id);
    dropContainer.addEventListener('click', (e) => {
        const {dropDownAllowClose} = e.target.dataset
        if(!dropDownAllowClose) return;
        toggleIcon(dropContainer);
        toggleSize(dropContainer);
        toogleBG(dropContainer)
    })
}