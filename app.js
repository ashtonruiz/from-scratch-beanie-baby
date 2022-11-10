/* Imports */
import { fetchBabies, fetchSigns } from './fetch.utils.js';
import { renderBabyElement, renderAstroOption } from './render_utils.js';

/* Get DOM Elements */
const babyList = document.getElementById('baby-list');

/* State */

/* Events */

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
console.log(fetchBabies('Pisces'));
console.log(fetchSigns());

babyList.append(renderBabyElement({ title: 'Fredrick', astroSign: 'big snake' }));
