import * as globalFunctions from './modules/functions.js';
globalFunctions.isWebp();


// import Vue from 'vue/dist/vue.js';
// import $ from 'jquery';

import Header from '../blocks/modules/header/header.js';
import Modals from '../blocks/modules/modals/modals.js';
import Search from '../blocks/modules/search/search.js';
import Calendar from '../blocks/components/calendar/calendar.js';
import { Slider } from './modules/classes.js';



document.addEventListener('DOMContentLoaded', () => {
    globalFunctions.transferItems();
    globalFunctions.addTabsChangeHandler({
        openerDataSelector: 'tab-id',
        tabDataSelector: 'tab-body'
    });

    // document.querySelectorAll('select').forEach(select => {
    //     new NiceSelect(select, {searchable: false});
    // })

    window.addEventListener('resize', () => {
        console.log('resize');
        globalFunctions.transferItems();
    });
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
        }),
        interviews: new Slider({
            selector: '.interviews__slider--js',
            options: {
                gap: 20,
                perView: 4,
                peek: {
                    before: 0,
                    after: 137
                },
                bound: true
            }
        }),
        events: new Slider({
            selector: '.events__slider--js',
            options: {
                gap: 20,
                perView: 3,
                bound: true
            }
        })
    };
});