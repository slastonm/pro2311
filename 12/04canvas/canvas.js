window.onload = function(){
    let canvas = document.querySelector('canvas');
    let context = canvas.getContext('2d');
    function drawLine(){
        context.beginPath();
        context.moveTo(0, 0);
        context.lineTo(100, 200);

        context.moveTo(50, 50);
        context.lineTo(150, 90);
        context.stroke();
    }
    // drawLine();
    function drawPath(){
        context.translate(50,50);

        context.beginPath();
        context.moveTo(0, 0);
        context.lineTo(120, 0);
        context.lineTo(100, 150);
        context.lineTo(0, 200);
        context.closePath();
        context.stroke();
    }
    // drawPath();
    function printText(value){
        context.font = "30px Arial";
        context.strokeText(value, 10, 50);
    }
    printText('Hello value');
}