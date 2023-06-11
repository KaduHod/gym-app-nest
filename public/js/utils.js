export const toggleHidden = (htmlElmement) => htmlElmement.classList.toggle('hidden')

export const switchContainer = (containers) => {
    containers.forEach(toggleHidden)
}

export const BASEPATH = () => {
    const currentUrl = window.location.href;
    const pathname = window.location.pathname;
    return currentUrl.substring(0, currentUrl.lastIndexOf(pathname) + 1);
}

export const CONTENT_TYPES = {
    JSON: 'application/json',
    XML: 'application/xml',
    HTML: 'text/html',
    PLAIN_TEXT: 'text/plain',
    FORM_DATA: 'multipart/form-data',
    URL_ENCODED: 'application/x-www-form-urlencoded'
}

export const contentType = (type) => {
    const contentType = CONTENT_TYPES[type.toUpperCase()]
    if(!contentType) {
        throw {
            message: `${type.toUpperCase()} is not defined in the constante CONTENT_TYPES`
        }
    }
    return {"Content-type": contentType}
}