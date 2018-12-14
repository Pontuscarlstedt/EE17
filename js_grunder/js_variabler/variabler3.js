window.onload = start()

function start() {
    const eKnapp = document.querySelector('button');
    const eRuta1 = document.querySelector('#ruta1')
    const eRuta2 = document.querySelector('#ruta2')

    let lista = [
        "Sonic",         
        "Mario", 
        "Luigi",
        "Zelda",
        "Carl-Axel",
        "Felix",
        "Anton",
        "Kasper",
        "Albin",
        "Karl"
    ];

    eKnapp.addEventListener('click', slumpTal)

    function slumpTal() {

        let slumptal = Math.ceil(Math.random() * 10 - 1)
        eRuta1.value = slumptal;

        eRuta2.value = lista[slumptal];


    }



}