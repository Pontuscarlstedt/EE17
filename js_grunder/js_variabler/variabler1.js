window.onload = start()

function start() {
    const eRuta1 = document.querySelector('#ruta1');
    const eRuta2 = document.querySelector('#ruta2');
    const eKnapp1 = document.querySelector('#knapp1');
    const eKnapp2 = document.querySelector('#knapp2');
    const eKnapp3 = document.querySelector('#knapp3');
    const eRuta3 = document.querySelector('#ruta3');
    const eRuta4 = document.querySelector('#ruta4');
    const eRuta5 = document.querySelector('#ruta5');

    eKnapp1.addEventListener('click', addera)
    eKnapp2.addEventListener('click', subtrahera)
    eKnapp3.addEventListener('click', multiplusera)

    function addera() {
        let tal1 = Number(eRuta1.value);
        let tal2 = Number(eRuta2.value);

        let summa = tal1 + tal2;
         
        eRuta3.value = summa;


    }
    function subtrahera() {
        let tal1 = Number(eRuta1.value);
        let tal2 = Number(eRuta2.value);

        let summa = tal1 - tal2;
         
        eRuta4.value = summa;
        
    }
    function multiplusera() {
        let tal1 = Number(eRuta1.value);
        let tal2 = Number(eRuta2.value);

        let summa = tal1 * tal2;
         
        eRuta5.value = summa;
        
    }



}