import gsap from 'gsap';

const Search = class Search {
    constructor({openerClass, closerClass, searchClass, logoClass}) {
        this.openerClass = openerClass;
        this.searchClass = searchClass;
        this.closerClass = closerClass;
        this.logoClass = logoClass;
        this.init();
    }
    addOpenHandler() {
        if (!document.querySelector(this.openerClass) && !document.querySelector(this.searchClass)) return;
        document.querySelector(this.openerClass).addEventListener('click', (event) => {
            this.toggleSearch('>')
        })

    }
    addCloseHandler() {
        if (!document.querySelector(this.closerClass) && !document.querySelector(this.searchClass)) return;
        document.querySelector(this.closerClass).addEventListener('click', (event) => {
            this.toggleSearch('<')
        })
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
    toggleSearch(direction) {
        document.querySelector(this.searchClass).classList.toggle('isOpened');
        document.querySelector('body').classList.toggle('overflow-hidden');
        document.querySelector('html').classList.toggle('overflow-hidden');
        setTimeout(() => {
            this.calculateLogoPosition(direction);
        }, direction == '>' ? 500 : 0)
    }
    init() {
        this.addOpenHandler();
        this.addCloseHandler();
    }
}

export default Search;