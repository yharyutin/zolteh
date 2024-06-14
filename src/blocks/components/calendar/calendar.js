import AirDatepicker from "air-datepicker";
import moment from "moment";
moment.locale('ru')

const Calendar = class Calendar {
  constructor({ selector, settings }) {
    this.selector = selector;
    this.settings = settings;
    this.calendars = [];
    this.init();
  }

  initDatepicker() {
    if (!document.querySelector(this.selector)) return;
    document.querySelectorAll(this.selector).forEach((calendar) => {
      let title = "";

      if (calendar.querySelector(".calendar__title--js")) {
        title = document.createElement("div");
        title.append(
          calendar
            .querySelector(".calendar__title--js")
            .content.cloneNode(true),
        );
      }
      this.calendars.push(
        new AirDatepicker(calendar, {
          ...this.settings,
          selectedDates: calendar.dataset.selectedDates.split(","),
          navTitles: {
            days: title.innerHTML,
          },
          startDate: new Date(`${moment().month(calendar.closest('.calendar').dataset.tabBody).format('MM')}.01.2024`)
        }),
      );
    });
    console.log("this.calendars", this.calendars);
  }
  addEventsOpenerHandler() {
    if (
      !document.querySelector(`${this.selector} .calendar__events_opener--js`)
    )
      return;

    document
      .querySelectorAll(`${this.selector} .calendar__events_opener--js`)
      .forEach((opener) => {
        opener.addEventListener("click", (event) => {
          console.log(event.currentTarget);
          event.currentTarget
            .closest(".js-closest")
            .classList.toggle("isOpened");
        });
      });
  }
  addTabsChangeHandler() {
    if (!document.querySelector(".calendar_tabs__select")) return;
    document
      .querySelector(
        `.calendar.calendar--is_inline[data-tab-body="${document.querySelector(".calendar_tabs__select").value}"]`,
      )
      .classList.add("isActive");
    document
      .querySelector(".calendar_tabs__select")
      .addEventListener("change", (event) => {
        document
          .querySelector(
            `.calendar.calendar--is_inline[data-tab-body="${event.target.value}"]`,
          )
          .classList.add("isActive");
      });
  }

  init() {
    this.initDatepicker();
    this.addEventsOpenerHandler();
    this.addTabsChangeHandler();

    if (document.querySelector(".calendar__top a")) {
      document.querySelectorAll(".calendar__top a").forEach((link) => {
        link.addEventListener("click", (event) => {
          event.stopPropagation();
        });
      });
    }
  }
};

export default Calendar;

// TODO Сделать передачу выбранных дат через data аттрибут в html
