window.onload = start;
/*
* Enkel kundvagn
* 1. Läs av priset på varorna och skriv ut dom i konsolen
* 2. När man klickar på plus fylls rutan "total" med varans pris
* 3. Dessutom skall man addera varans pris till "total"
* 4. När man klickar på plus skall antalet varor räknas upp
* 5. Och priset för vald fraktsät skall visas i rutan "frakt"
*/
function start() {
    var skorAntal = 0;
    var byxaAntal = 0;
    var mossaAntal = 0;



    const eSkorPris = document.querySelector('#skorPris');
    const eSkorAntal = document.querySelector('#skorAntal');

    const eByxaPris = document.querySelector('#byxaPris');
    const eByxaAntal = document.querySelector('#byxaAntal');

    const eMossaPris = document.querySelector('#mössaPris');
    const eMossaAntal = document.querySelector('#mössaAntal');

    const eFrakt = document.querySelector('#frakt');
    const eTotalt = document.querySelector('#totalt');

    const eSkorPlus = document.querySelector('#skorPlus');
    const eByxaPlus = document.querySelector('#byxaPlus');
    const eMossaPlus = document.querySelector('#mössaPlus');

    const eLev = document.querySelectorAll('input[name="frakt"]');


    console.log(eSkorPris.value);
    console.log(eByxaPris.value);
    console.log(eMossaPris.value);

    eSkorPlus.addEventListener('click', LaggTillSkor)
    function LaggTillSkor() {
        skorAntal += 1;
        eSkorAntal.value = skorAntal;

        if (eLev[0].checked) {
            eFrakt.value = eLev[0].value
        }
        if (eLev[1].checked) {
            eFrakt.value = eLev[1].value  
        }
        if (eLev[2].checked) {
            eFrakt.value = eLev[2].value
            
        }

        eTotalt.value = eSkorPris.value * skorAntal + eByxaPris.value * byxaAntal + eMossaPris.value * mossaAntal + Number(eFrakt.value);
        
    }
    eByxaPlus.addEventListener('click', LaggTillByxa)
    function LaggTillByxa() {
        byxaAntal += 1;
        eByxaAntal.value = byxaAntal;

        if (eLev[0].checked) {
            eFrakt.value = eLev[0].value
        }
        if (eLev[1].checked) {
            eFrakt.value = eLev[1].value  
        }
        if (eLev[2].checked) {
            eFrakt.value = eLev[2].value
            
        }

        eTotalt.value = eSkorPris.value * skorAntal + eByxaPris.value * byxaAntal + eMossaPris.value * mossaAntal + Number(eFrakt.value);
        
    }
    eMossaPlus.addEventListener('click', LaggTillMossa)
    function LaggTillMossa() {
        mossaAntal += 1;
        eMossaAntal.value = mossaAntal;

        if (eLev[0].checked) {
            eFrakt.value = eLev[0].value
        }
        if (eLev[1].checked) {
            eFrakt.value = eLev[1].value  
        }
        if (eLev[2].checked) {
            eFrakt.value = eLev[2].value
            
        }

        eTotalt.value = eSkorPris.value * skorAntal + eByxaPris.value * byxaAntal + eMossaPris.value * mossaAntal + Number(eFrakt.value);
        
    }
    



}

