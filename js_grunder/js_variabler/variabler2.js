window.onload = start()

function start() {
    const eKnapp1 = document.querySelector('#knapp1');
    const eKnapp2 = document.querySelector('#knapp2');
    const eTalet = document.querySelector('#talet');

    eKnapp1.addEventListener('click', raknaNed);
    eKnapp2.addEventListener('click', raknaUpp);

    function raknaNed() {
        let talet = Number(eTalet.value);

        let summaup = talet - 1;
        eTalet.value = summaup;


    }

    function raknaUpp() {
        let talet = Number(eTalet.value);

        let summaned = talet + 1;
        eTalet.value = summaned;
    }

}