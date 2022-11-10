export function renderBabyElement(baby) {
    let babyBoxEl = document.createElement('li');
    let babyNameEl = document.createElement('h2');
    let babyReleaseYear = document.createElement('p');
    let babySignEl = document.createElement('p');

    babyNameEl.textContent = baby.title;
    babyReleaseYear.textContent = `Released ${baby.releaseYear}`;
    babySignEl.textContent = baby.astroSign;

    babyBoxEl.append(babyNameEl, babyReleaseYear, babySignEl);
    babyBoxEl.classList.add('baby-box');

    return babyBoxEl;
}

export function renderAstroOption(sign) {
    const listEl = document.createElement('li');
    listEl.value = sign;
    listEl.textContent = sign;

    return listEl;
}
