import * as globalFunctions from './modules/functions.js';
globalFunctions.isWebp();
globalFunctions.transferItems();
window.addEventListener('resize', () => {
    globalFunctions.transferItems();
});

// import Vue from 'vue/dist/vue.js';
// import $ from 'jquery';

import Header from '../blocks/modules/header/header.js';
import Modals from '../blocks/modules/modals/modals.js';
import Search from '../blocks/modules/search/search.js';
import Calendar from '../blocks/components/calendar/calendar.js';


document.addEventListener('DOMContentLoaded', () => {
    window.app = {
        header: new Header({
            headerClass: '.header',
            openerClass: '.header__burger_opener--js',
            burgerClass: '.header__burger_body--js',
            openedClass: 'isOpened'
        }),
        modals: new Modals({
            modalsSelector: "data-modal",
            modalsOpenerSelector: "data-modal-id",
            openedClass: "isOpened"
        }),
        search: new Search({
            openerClass: '.header__search--opener',
            closerClass: '.search_modal--closer',
            searchClass: '.search_modal--js',
            logoClass: '.header__logo--js'
        }),
        sidebarCalendar: new Calendar({
            selector: '#calendar'
        })
    };
});