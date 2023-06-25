export class Slider {
    constructor(mainContainer, customSlideChangeEvent) {
        this.sliderContainer = mainContainer;
        this.sliderNext = mainContainer.querySelector(`[data-slider-next="true"]`)
        this.sliderPrevious = mainContainer.querySelector(`[data-slider-previous="true"]`)
        this.sliderItemsContainer = mainContainer.querySelector(`[data-slider-items-container="true"]`);
        this.sliderItems = this.sliderItemsContainer.querySelectorAll(`[data-slider-item="true"]`);
        this.customSliderChangeEvent = customSlideChangeEvent
        this.initEvents()
    }

    defaultPreviousEvent = (e) => {
        const activeSlider = this.findActive()
        const activeID = Number(activeSlider.dataset.sliderIndex);
        this.unactivate(activeSlider)
        const previous = this.findPreviousSlider(activeID)
        this.activate(previous)
    }

    defaultNextEvent = (e) => {
        const activeSlider = this.findActive()
        const activeID = Number(activeSlider.dataset.sliderIndex);
        this.unactivate(activeSlider)
        const next = this.findNextSlider(activeID)
        this.activate(next)
    }

    initEvents() {
        this.sliderNext.addEventListener('click', (e) => {
            this.defaultNextEvent(e)
            if(this.customSliderChangeEvent) {
                this.customSliderChangeEvent(e)
            }
        })
        this.sliderPrevious.addEventListener('click', (e) => {
            this.defaultPreviousEvent();
            if(this.customSliderChangeEvent) {
                this.customSliderChangeEvent(e)
            }
        })
    }

    findFirstItem() {
        return this.sliderItemsContainer.querySelector(`[data-slider-index="0"]`)
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

    reset(){
        this.unactivate(this.findActive())
        this.activate(this.findFirstItem())
    }
}
