export function renderBabyElement(baby) {
    let babyBoxEl = document.createElement('div');
    let babyNameEl = document.createElement('h2');
    let babyReleaseYear = document.createElement('p');
    let babySignEl = document.createElement('p');

    babyNameEl.textContent = baby.title;
    babyNameEl.classList.add('baby-box-text');
    babyReleaseYear.textContent = `Released ${baby.releaseYear}`;
    babyReleaseYear.classList.add('baby-box-text');
    babySignEl.textContent = baby.astroSign;
    if (baby.astroSign === null) {
        babySignEl.textContent = 'no sign';
    }
    babySignEl.classList.add('baby-box-text');

    babyBoxEl.append(babyNameEl, babyReleaseYear, babySignEl);
    babyBoxEl.classList.add('baby-box');
    babyBoxEl.style.backgroundImage = `url(${baby.image})`;
    return babyBoxEl;
}

export function renderAstroOption(sign) {
    const listEl = document.createElement('option');
    listEl.value = sign.name;
    listEl.textContent = sign.name;

    return listEl;
}
