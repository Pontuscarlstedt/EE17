/* När man trycker på knappen så byts bilden */

/* När webbsidan laddats klart kör start() */
window.onload = start;

function start() {

    /* vilka element vi arbetar vi med? */
    const elementImg = document.querySelector('.bild img');
    const elementP = document.querySelector('.bild p');
    const elementKnapp1 = document.querySelector('.knapp1');
    const elementKnapp2 = document.querySelector('.knapp2');
    const elementKnapp3 = document.querySelector('.knapp3');
    const elementKnapp4 = document.querySelector('.knapp4');
    

    /* Vilka händelse behöver vi lyssna på? */
    elementKnapp1.addEventListener('click', visaBild);
    elementKnapp2.addEventListener('click', visaBild);
    elementKnapp3.addEventListener('click', visaBild);
    elementKnapp4.addEventListener('click', visaBild);

    function visaBild() {
        console.log(this.dataset.bild);
        
    }





}