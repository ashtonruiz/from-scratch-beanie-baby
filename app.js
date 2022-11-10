/* Imports */
import { fetchBabies, fetchSigns } from './fetch.utils.js';
import { renderBabyElement, renderAstroOption } from './render_utils.js';

/* Get DOM Elements */
const babyListEl = document.getElementById('baby-list');

/* State */
let babyList = [];
let astroSigns = [];

/* Events */
window.addEventListener('load', async () => {
    displayBabies(); // do not initially filter babies
});

/* Display Functions */
async function displayBabies(sign) {
    const response = await fetchBabies(sign);
    babyList = response.data;
    for (let baby of babyList) {
        let babyEl = renderBabyElement(baby);
        babyListEl.append(babyEl);
    }
}

// (don't forget to call any display functions you want to run on page load!)
