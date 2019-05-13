window.onload = start;

function start() {
    var canvas = document.querySelector("#myCanvas")
    var ctx = canvas.getContext("2d")

    ctx.moveTo(250, 100);
    ctx.lineTo(250, 250);
    ctx.stroke();

    ctx.moveTo(250, 130);
    ctx.lineTo(220, 200);
    ctx.stroke();

    ctx.moveTo(250, 130);
    ctx.lineTo(280, 200);
    ctx.stroke();

    ctx.moveTo(250, 250);
    ctx.lineTo(280, 320);
    ctx.stroke();

    ctx.moveTo(250, 250);
    ctx.lineTo(220, 320);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(250, 60, 40, 0, 2* Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(230, 62, 5, 0, 2* Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(270, 62, 6, 0, 2* Math.PI);
    ctx.stroke();


}