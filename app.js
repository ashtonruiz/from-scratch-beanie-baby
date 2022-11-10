/* Imports */
import { fetchBabies, fetchSigns } from './fetch.utils.js';
import { renderBabyElement, renderAstroOption } from './render_utils.js';

/* Get DOM Elements */
const babyListEl = document.getElementById('baby-list');

/* State */
let babyList = [];

/* Events */
window.addEventListener('load', async () => {
    // get data from database
    const response = await fetchBabies('Pisces');
    // load data into array
    babyList = response.data;
    displayBabies();
});

/* Display Functions */
function displayBabies() {
    for (let baby of babyList) {
        let babyEl = renderBabyElement(baby);
        babyListEl.append(babyEl);
    }
}

// (don't forget to call any display functions you want to run on page load!)
