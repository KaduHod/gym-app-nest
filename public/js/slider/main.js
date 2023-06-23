export class Slider {
    constructor(mainContainer) {
        this.sliderContainer = mainContainer;
        this.sliderNext = mainContainer.querySelector(`[data-slider-next="true"]`)
        this.sliderPrevious = mainContainer.querySelector(`[data-slider-previous="true"]`)
        this.sliderItemsContainer = mainContainer.querySelector(`[data-slider-items-container="true"]`);
        this.sliderItems = this.sliderItemsContainer.querySelectorAll(`[data-slider-item="true"]`);
        this.initEvents()
    }
    initEvents() {
        this.sliderNext.addEventListener('click', () => {
            const activeSlider = this.findActive()
            const activeID = Number(activeSlider.dataset.sliderIndex);
            this.unactivate(activeSlider)
            const next = this.findNextSlider(activeID)
            this.activate(next)
        })

        this.sliderPrevious.addEventListener('click', () => {
            const activeSlider = this.findActive()
            const activeID = Number(activeSlider.dataset.sliderIndex);
            this.unactivate(activeSlider)
            const previous = this.findPreviousSlider(activeID)
            this.activate(previous)
        })
    }

    findActive() {
        return this.sliderItemsContainer.querySelector('[data-slider-item-active="true"]')
    }

    findNextSlider(previousID){
        return this.sliderItemsContainer.querySelector(`[data-slider-index="${Number(previousID + 1)}"]`) ?? this.sliderItemsContainer.querySelector(`[data-slider-index="0"]`)
    }

    findPreviousSlider(previousID){
        return this.sliderItemsContainer.querySelector(`[data-slider-index="${Number(previousID - 1)}"]`) ?? this.sliderItemsContainer.querySelector(`[data-slider-index="${this.sliderItems.length -1}"]`)
    }

    activate(sliderItem) {
        sliderItem.setAttribute('data-slider-item-active', "true")
        sliderItem.classList.remove("hidden")
        sliderItem.classList.add("animate-translate-y")
    }

    unactivate(sliderItem){
        sliderItem.setAttribute('data-slider-item-active', "false")
        sliderItem.classList.add("hidden")
        sliderItem.classList.remove("animate-translate-y")
    }
}
