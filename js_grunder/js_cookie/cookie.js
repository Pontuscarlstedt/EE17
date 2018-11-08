/* http://www.chinese-fortune-cookie.com/fortune-cookie-quotes.html */

/* När webbsidan laddtas klart kör start() */
window.onload = start;

/* Start-delen */
function start() {
    const elementHallon = document.querySelector('.hallon');
    console.log(elementHallon);
    const elementVanilj = document.querySelector('.vanilj');
    console.log(elementVanilj);
    const elementChoklad = document.querySelector('.choklad');
    console.log(elementChoklad);
    const elementDiv = document.querySelector('div');
    console.log(elementDiv);
    const elementSlump = document.querySelector('.chocklad');
    const elementDivv = document.querySelector('.cocklad')

    /* Knapp 1: skriv ut en cookie i loggen */
    elementHallon.addEventListener('click', skrivLog);

    function skrivLog() {
        console.log('It takes more than good memory to have good memories.');
    }

    /* Knapp 2: skriv ut cookie i webbsidan */
    elementVanilj.addEventListener('click', infogaText);

    function infogaText() {
        elementDiv.textContent = 'It takes more than good memory to have good memories.';
    }
    /* Knapp 3: skriv ut nya cookies en-efter-en som en lista */
    elementChoklad.addEventListener('click', infogaLista)

    function infogaLista() {
        elementDiv.innerHTML += 'Pray for what you want, but work for the things you need.<br>';
    }

    /* Slumpa fram cookies */
    elementSlump.addEventListener('click', slumpaCookies);
    var cookies = [
        'The time is right to make new friends',
        'You will inherit some money or a small piece of land.',
        'Your life will be happy and peaceful.',
        'A friend is a present you give yourself.',
        'A member of your family will soon do something that will make you proud.',
        'A quiet evening with friends is the best tonic for a long day.',
        'A single kind word will keep one warm for years.',
        'Anger begins with folly, and ends with regret.',
        'Generosity and perfection are your everlasting goals.'
    ];

    function slumpaCookies() {
        var slumpTal = Math.ceil(Math.random() * 10 - 2);
        elementDivv.innerHTML += cookies[slumpTal] + '<br>';

    }

}