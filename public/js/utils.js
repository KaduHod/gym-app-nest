export const toggleHidden = (htmlElmement) => htmlElmement.classList.toggle('hidden')

export const switchContainer = (containers) => {
    containers.forEach(toggleHidden)
}