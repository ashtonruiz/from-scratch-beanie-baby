/* Imports */
import { fetchBabies, fetchSigns } from './fetch.utils.js';
import { renderBabyElement, renderAstroOption } from './render_utils.js';

/* Get DOM Elements */
const babyListEl = document.getElementById('baby-list');
const signSelectEl = document.getElementById('sign-select-dropdown');
const signSelectFormEl = document.getElementById('sign-select-form');
/* State */
let babyList = [];
let astroSigns = [];

/* Events */
window.addEventListener('load', async () => {
    displayBabies(); // do not initially filter babies
    displaySignOptions(); // render options in dropdown menu from database
});

signSelectFormEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(signSelectFormEl);
    displayBabies(formData.get('sign'));
});

/* Display Functions */
async function displayBabies(sign) {
    babyListEl.textContent = '';
    const response = await fetchBabies(sign);
    babyList = response.data;
    for (let baby of babyList) {
        let babyEl = renderBabyElement(baby);
        babyListEl.append(babyEl);
    }
}

async function displaySignOptions() {
    const response = await fetchSigns();
    astroSigns = response.data;

    for (let sign of astroSigns) {
        let signEl = renderAstroOption(sign);
        signSelectEl.append(signEl);
    }
}

// (don't forget to call any display functions you want to run on page load!)
