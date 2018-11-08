/* Skapa ett tal mellan 1 - 100 */
var slumptal = Math.ceil(Math.random() * 100);
console.log('Nytt slumptal:' + slumptal);

/* Reagera på när man trycker på knappen  */
function gissa() {
    /* Läsa av gissningen i föesta input-rutan */
    var element = document.querySelector('#gissning');
    var gissning = element.value;
    console.log('Gissningen: ' + gissning);

    /* Om gissning = talet, då har man vunnit */
    if (gissning == slumptal) {
        console.log('Yippee! Du har vunnit!');

        /* Skriv i andra input-rutan */
        var element = document.querySelector('#svar');
        element.value = 'Yippee! Du har vunnit!';
    }

    /* Om gissning > större än talet, skriv ut "För högt" */
    if (gissning > slumptal) {
        console.log('För högt!');
        var element = document.querySelector('#svar');
        element.value = 'För högt!';

    }

    /* Om gissning < mindre än talet, skriv ut "För lågt" */
    if (gissning < slumptal) {
        console.log('För lågt!');
        var element = document.querySelector('#svar');
        element.value = 'För lågt!';

    }

    /* Om talet är > över 100 så skriv ut "Ogiltigt tal" */
    if (gissning > 100) {
        console.log('Ogiltigt tal');
        var element = document.querySelector('#svar');
        element.value = 'Ogiltigt tal';

    }
    

}