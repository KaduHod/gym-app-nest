const screenModal = document.getElementById('screen-modal');
export function GlobalErrorHandler(message, source, lineno, colno, error) {
    console.log("sdhasjdh", {error, message}, error.constructor.name)
    screenModal.classList.remove('hidden')
}