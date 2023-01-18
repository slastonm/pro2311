window.onload = function(){
    let div = document.querySelector('div');
    function drag(elDrag, event){
        let startX = event.clientX;
        let startY = event.clientY;

        let origx = elDrag.offsetLeft;
        let origy = elDrag.offsetTop;

        let deltaX = startX - origx;
        let deltaY = startY - origy

        function moveHandler(e){
            elDrag.style.left = (e.clientX - deltaX) +'px';
            elDrag.style.top = (e.clientY - deltaY) + 'px';
        }
        function upHandler(e){
            document.removeEventListener("mouseup", upHandler);
            document.removeEventListener("mousemove", moveHandler);
        }

        document.addEventListener('mousemove', moveHandler);
        document.addEventListener('mouseup', upHandler);
    }
    function init(){
        div.onmousedown = function(e){
            drag(this, e);
        }
    }
    init();

}