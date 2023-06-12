export const toggleIcon = (container) => {
    const [icon] = [... container.getElementsByClassName('drop-down-icon')];
    icon.classList.toggle('rotate-180')
}

export const toggleSize = (container) => {
    const [target] = [... container.querySelectorAll('[data-drop-down="true"]')]
    target.classList.toggle('hidden')
}

export const setDropEvents = () => {
    const dropContainers = [...document.querySelectorAll('[data-drop-container="true"]')];

    dropContainers.forEach(container => {
        container.addEventListener('click', () => {
            toggleIcon(container);
            toggleSize(container);
        });
    })
}