import * as globalFunctions from './modules/functions.js';
globalFunctions.isWebp();

// import Vue from 'vue/dist/vue.js';
// import $ from 'jquery';

import Header from '../blocks/modules/header/header.js';
import Modals from '../blocks/modules/modals/modals.js';
import Search from '../blocks/modules/search/search.js';


document.addEventListener('DOMContentLoaded', () => {
    window.app = {
        header: new Header(),
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
        })
    };
});