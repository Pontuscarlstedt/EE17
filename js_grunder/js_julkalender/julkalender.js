window.onload = start;

function start() {

    const elementGrid = document.querySelector('.grid');

    elementGrid.addEventListener('click', lucka);

    let vinst = Math.ceil(Math.random() * 23 + 1);
    console.log(vinst);


    function lucka(event) {
        console.log('Klickat på grid');
        console.log(event.target.className);


        if (event.target.className == 'animated dag') {
            console.log(event.target.textContent);


            if (event.target.textContent == vinst) {
                console.log('Hurrahh!!')
                event.target.classList.add('flipInX');

            } else {

                event.target.classList.add('zoomOut');
            }

        }

    }

}