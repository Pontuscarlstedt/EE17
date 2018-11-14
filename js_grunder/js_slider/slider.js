window.onload = start;

function start() {
    /* Element vi jobbar med */
    const elementImg = document.querySelector('img');
    const elementBredd = document.querySelector('#myRange1');
    const elementHojd = document.querySelector('#myRange2');
    const elementOutput = document.querySelector('#output')

    elementImg.width = 500;

    /* Läs av värdet på slider */


    /* Lyssna på när vi drar i slidern */
    elementBredd.addEventListener('input', slideUpdatering1);
    elementHojd.addEventListener('input', slideUpdatering2);

    function slideUpdatering1() {
        console.log('Bredd=' + elementBredd.value);
        elementImg.width = elementBredd.value;
        elementImg.height = '(' + elementHojd.value + 'x' + elementHojd + ')';
        elementOutput.textContent = 
    }
    function slideUpdatering2() {
        console.log('Höjd=' + elementHojd.value);
        elementImg.height = elementHojd.value;
        elementOutput.textContent = '(' + elementHojd.value + 'x' + elementHojd + ')';
        
    }
    
   
        
    
}