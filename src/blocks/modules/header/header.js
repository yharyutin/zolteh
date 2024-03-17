import gsap from 'gsap';


const Header = class Header {
    constructor({headerClass, openerClass, burgerClass, openedClass}) {
        this.openerClass = openerClass;
        this.burgerClass = burgerClass;
        this.openedClass = openedClass;
        this.headerClass = headerClass;

        this.init();
    }
    toggleBurger() {
        if (!document.querySelector(this.burgerClass) && !document.querySelector(this.headerClass)) return;

        gsap.to(this.burgerClass, {
            height: this.calculateBurgerHeight(),
        })

        document.querySelector(this.burgerClass).classList.toggle(this.openedClass);
    }

    calculateBurgerHeight() {
        return window.innerHeight - document.querySelector(this.headerClass).offsetHeight;
    }

    addOpenerClickHandler() {
        if (!document.querySelector(this.openerClass)) return;

        document.querySelector(this.openerClass).addEventListener('click', (event) => {
            event.currentTarget.classList.toggle(this.openedClass);
            this.toggleBurger();
        })
    }
    setBurgerHeight() {
        if (document.querySelector(this.burgerClass)) {
            document.querySelector(this.burgerClass).style.height = `${this.calculateBurgerHeight()}px`;
        }
    }
    init() {
        this.addOpenerClickHandler();
        this.setBurgerHeight();
        window.addEventListener('resize', () => {
            this.setBurgerHeight();
        })
    }
}

export default Header;