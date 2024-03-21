import Glide from '@glidejs/glide';

export const Slider = class Slider {
    constructor({selector, options = {}}) {
        this.selector = selector;
        this.options = options;

        this.slider = null;
        this.init();
    }
    sliderInit() {
        if (!document.querySelector(this.selector)) return;

        this.slider = new Glide(this.selector, this.options).mount()
    }
    init() {
        this.sliderInit()
    }
}