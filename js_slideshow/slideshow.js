window.onload = start;

function start() {
    /* Element vi jobbar med */
    const elementYta = document.querySelector('.yta')
    const elementVanster = document.querySelector('.fa-chevron-circle-left')
    const elementHoger = document.querySelector('.fa-chevron-circle-right')
    const elementPunkter = document.querySelector('.punkter')

    var bildLista = [
        './foton/charl-van-rooy-672182-unsplash.jpg',
        './foton/jared-verdi-420154-unsplash.jpg',
        './foton/jf-brou-358069-unsplash.jpg',
        './foton/jonathan-riley-118591-unsplash.jpg',
        './foton/luca-bravo-177552-unsplash.jpg',
        './foton/marion-michele-444261-unsplash.jpg',
        './foton/maxi-am-brunnen-584496-unsplash.jpg',
        './foton/montylov-373292-unsplash.jpg',
        './foton/piotr-chrobot-276746-unsplash.jpg',
        './foton/ryan-cheng-508787-unsplash.jpg'

    ];

    /* Posetion på bilden man tittar på */
    var index = 0;

    elementYta.style.cssText = 'background: url("' + bildLista[0] + '") no-repeat center;';

    /* Skapa punkter */
    for (let i = 0; i < bildLista.length; i++) {
  
        elementPunkter.innerHTML += '<i class="fas fa-circle"></i>';
    }




    /* Lyssnar på knapperna */
    elementVanster.addEventListener('click', bytBild)
    elementHoger.addEventListener('click', bytBild)

    /* Byter bild */
    function bytBild() {
        if (this.dataset.riktning == 'höger') {
         index++;  
        }


        if (this.dataset.riktning == 'vänster') {
          index--;  
        }

        /* Om man går förbi 0, dvs -1 så fösvinner vänster-knappen */
        if (index == -1) {
            index = bildLista.length - 1;
            
        }

        /* Om man går förbi sista så försvinner höger-kanppen */
        if (index == bildLista.length) {
            index = 0;           
        }

    
        console.log(this.dataset.riktning + ' ' + index + ' ' + bildLista[index])
        
        elementYta.style.cssText = 'background: url("' + bildLista[index] + '") no-repeat center;';


        
    }


}