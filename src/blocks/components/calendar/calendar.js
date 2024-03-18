import AirDatepicker from 'air-datepicker';

const Calendar = class Calendar {
    constructor({selector}) {
        this.selector = selector;
        this.caalendar = null;
        this.init()
    }

    initDatepicker() {
        if (!document.querySelector(this.selector)) return;

        new AirDatepicker(this.selector, {
            navTitles: {
                days: '<div class="calendar__top"><div class="calendar__title">ВСЕ МЕРОПРИЯТИЯ <span>yyyy</span>г.</div><div class="calendar__seeall"><span class="text">смотреть</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none"> <path d="M1.76953 7.36597H13.7515M13.7515 7.36597L7.7605 1.375M13.7515 7.36597L7.7605 13.3569" stroke="white" stroke-width="1.99699" stroke-linecap="round" stroke-linejoin="round"/> </svg></span></div></div>'
            },
            multipleDates: true,
            selectedDates: ['2024-03-18', '2024-03-19', '2024-03-20']
        })
    }

    init() {
        this.initDatepicker();
    }
}

export default Calendar;





// TODO Сделать передачу выбранных дат через data аттрибут в html