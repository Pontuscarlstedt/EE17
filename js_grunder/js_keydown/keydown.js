window.onload = start;

function start() {

    const eAlien = document.querySelector('img');

    let x = 0;
    let y = 0;

    document.addEventListener("keydown", flyga);
    function flyga(event) {
        console.log(event.key)
        if (event.key == "ArrowLeft") {
            x -= 10;
           
            
        }
        if (event.key == "ArrowRight") {
            x += 10;
           
            
        }
        if (event.key == "ArrowUp") {
            y -= 10;
           
            
        }
        if (event.key == "ArrowDown") {
            y += 10;
           
            
        }
        eAlien.style.left = x + "px";
        eAlien.style.top = y + "px";


    
        
    }
    
}