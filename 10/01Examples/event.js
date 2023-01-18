window.onload = function(){
    let div = document.querySelector('.mouse');
    div.addEventListener("mousemove", handler);
    function handler(e){
        console.log(e);
        let text ="";
        text =`Alt ${e.altKey} Ctrl ${e.ctrlKey} shift ${e.shiftKey} x cordinate ${e.clientX} y:${e.clientY}`
        div.innerHTML = text;
    }
    let header = document.querySelector('header');
    let hover = document.querySelector('.hover');
    hover.onmouseover = function(){
        header.style.backgroundColor = 'red';
        this.style.backgroundColor = 'red';
    }
    hover.onmouseout =function(){
        header.style.backgroundColor = 'green';
        this.style.backgroundColor = 'green';
    }

    let onmousemoveDiv = document.querySelector('.onmousemove');
    let onmousedownDiv = document.querySelector('.onmousedown');
    let onmuseupDiv = document.querySelector('.onmuseup');

    function returnOffSet(e){
        return `${e.type} and X: ${e.offsetX} Y: ${e.offsetY}`
    }

    onmousedownDiv.onmousedown= function(e){
        this.innerHTML = returnOffSet(e);
    }
    onmousemoveDiv.onmousemove = function(e){
        this.innerHTML = returnOffSet(e);
    }
    onmuseupDiv.onmouseup =function(e){
        this.innerHTML = returnOffSet(e);
    }
    let main = document.querySelector('body');
    let output = document.querySelector('.output');
    function clear(){
        output.innerHTML = "";
    }
    main.onkeydown = function(e){
        clear();
        console.log(e);
        output.innerHTML = `${e.key} code ${e.keyCode}`;
    }
}