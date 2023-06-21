export class AppError extends Error {
    constructor(message, class_){
        super(message)
        this.show(class_)
    }

    show(class_){
        const screenModal = document.getElementById('screen-modal');
        const screenModalBox = document.getElementById('screen-modal-inner-container');
        const screenModalResult = document.getElementById('screen-modal-result');
        screenModal.classList.remove('hidden')
        screenModalBox.classList.add(class_)
        screenModalResult.innerHTML = `${this.message}`
    }
}