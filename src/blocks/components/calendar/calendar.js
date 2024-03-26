import AirDatepicker from 'air-datepicker';

const Calendar = class Calendar {
    constructor({selector, settings}) {
        this.selector = selector;
        this.settings = settings;
        this.calendars = [];
        this.init()
    }

    initDatepicker() {
        if (!document.querySelector(this.selector)) return;
        document.querySelectorAll(this.selector).forEach(calendar => {
            let title = "";
            
            if (calendar.querySelector('.calendar__title--js')) {
                title = document.createElement("div");
                title.append(calendar.querySelector('.calendar__title--js').content.cloneNode(true));
            }
            console.log(title);
            this.calendars.push(new AirDatepicker(calendar, {
                ...this.settings,
                selectedDates: calendar.dataset.selectedDates.split(','),
                navTitles: {
                    days: title.innerHTML
                },
            }));
        })
        console.log('this.calendars', this.calendars);
    }
    addEventsOpenerHandler() {
        if (!document.querySelector(`${this.selector} .calendar__events_opener--js`)) return;

        document.querySelectorAll(`${this.selector} .calendar__events_opener--js`).forEach(opener => {
            opener.addEventListener('click', (event) => {
                console.log(event.currentTarget);
                event.currentTarget.closest('.js-closest').classList.toggle('isOpened')
            })
        })

    }

    init() {
        this.initDatepicker();
        this.addEventsOpenerHandler();
    }
}

export default Calendar;





// TODO Сделать передачу выбранных дат через data аттрибут в html