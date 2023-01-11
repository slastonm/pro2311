window.onload = ()=>{
    let isTunnel = false; // by default`
    let e1 = document.querySelector('#first');
    let e2 = document.querySelector(
        '#second'
    );
    let e3 = document.querySelector('#third');

    e1.addEventListener('click', function(){
        this.style.backgroundColor = 'yellow';
        alert('Div 1 event work');
    }, isTunnel);
    e2.addEventListener('click',function(){
        this.style.backgroundColor = 'green';
        alert('Div 2 event work');
    }, isTunnel);
    e3.addEventListener('click',function(e){
        this.style.backgroundColor = 'orange';
        alert('Div 3 event work');
        e.stopPropagation();
    }, isTunnel);
    document.querySelector('body').addEventListener('click', ()=>{
        alert('body');
    });
}