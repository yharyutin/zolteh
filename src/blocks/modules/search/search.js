import gsap from 'gsap';

const Search = class Search {
    constructor({openerClass, closerClass, searchClass, logoClass}) {
        this.openerClass = openerClass;
        this.searchClass = searchClass;
        this.closerClass = closerClass;
        this.logoClass = logoClass;
        this.init();
    }
    addSearchHandler({handlerClass, direction}) {
        document.querySelector(handlerClass).addEventListener('click', (event) => {
            
            document.querySelector(this.searchClass).classList.toggle('isOpened');
            this.calculateLogoPosition(direction);
        })
    }
    addOpenHandler() {
        if (!document.querySelector(this.openerClass) && !document.querySelector(this.searchClass)) return;

        this.addSearchHandler({
            handlerClass: this.openerClass,
            direction: '>',
        });

    }
    addCloseHandler() {
        if (!document.querySelector(this.closerClass) && !document.querySelector(this.searchClass)) return;
        this.addSearchHandler({
            handlerClass: this.closerClass,
            direction: '<',
        });
    }

    calculateLogoPosition(direction) {
        if (!document.querySelector(this.logoClass)) return;
        gsap.to(this.logoClass, {
            x: direction == '>' ? (position, element) => {
                let containerWidth = (element.closest('.header__top_in').clientWidth - 80) / 2;
                let elementWidth = element.clientWidth / 2;
                console.log(position, element, containerWidth)
                return containerWidth - elementWidth;
            } : 0
        })
    }
    init() {
        this.addOpenHandler();
        this.addCloseHandler();
    }
}

export default Search;