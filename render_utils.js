export function renderBabyElement(baby) {
    let babyBoxEl = document.createElement('li');
    let babyNameEl = document.createElement('p');
    let babySignEl = document.createElement('p');

    babyNameEl = baby.title;
    babySignEl = baby.astroSign;

    babyBoxEl.append(babyNameEl, babySignEl);
    babyBoxEl.classList.add('baby-box');

    return babyBoxEl;
}

export function renderAstroOption(sign) {}
