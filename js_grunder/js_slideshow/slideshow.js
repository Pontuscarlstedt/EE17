window.onload = start;

function start() {
    /* Element vi jobbar med */
    const elementYta = document.querySelector('.yta')
    const elementVanster = document.querySelector('.fa-chevron-circle-left')
    const elementHoger = document.querySelector('.fa-chevron-circle-right')

    /* Lyssnar på knapperna */
    elementVanster.addEventListener('click', bytBild)
    elementHoger.addEventListener('click', bytBild)

    /* Byter bild */
    function bytBild() {
        console.log(this.dataset.riktning)


        
    }


}