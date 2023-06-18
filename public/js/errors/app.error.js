export class AppError extends Error {
    constructor(message, class_){
        super(message)
        this.show(class_)
    }

    show(class_){
        const screenModal = document.getElementById('screen-modal');
        const screenModalResult = document.getElementById('screen-modal-result');
        const screenModalBox = document.getElementById('screen-modal-inner-container');
        screenModalBox.classList.add(class_)
        screenModalResult.innerHTML = `${this.message}`
        screenModal.classList.remove('hidden')
    }
}