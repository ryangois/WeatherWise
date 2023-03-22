'use strict';

import { fetchData, url } from "./api";
import * as module from "./module";


/**
 * Add event listener on multiple elements
 * @param {NodeList} elements Elements node array
 * @param {string} eventType Event type e.g.: "click"
 * @param {function} callback Callback function
 */
const addEventonElements = function (elements, eventType, callback) {
    for (const element of elements) element.addEventListener(eventType, callback);
}

// Search on mobile 

const searchView = document.querySelector("[data-search-view]");
const searchTogglers = document.querySelectorAll("[data-search-toggler]");

const toggleSearch = () => searchView.classList.toggle("active");
addEventonElements(searchTogglers, "click", toggleSearch);