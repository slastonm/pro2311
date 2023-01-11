window.onload = function(){
    let btn = document.querySelector('#alertBtn');
    function displayAlert(){
        alert('Click button');
    }
    // addEventListener(event, fn, true/false) dblclick mouseover
    btn.addEventListener('click', displayAlert);
    // btn.addEventListener('dblclick', displayAlert);
    // btn.addEventListener('mouseover', displayAlert);
    let removeEv = document.querySelector('#remove');
    removeEv.addEventListener('click', ()=>{
        btn.removeEventListener('click', displayAlert);
        alert('Done!');
    });
    let h1 = document.querySelector('h1');
    h1.addEventListener('click', function(){
        console.log(this);
        this.textContent = 'Js work';
    });
    let [...pArr] = document.querySelectorAll('div p');
    console.log(pArr);
    for (let i = 0; i<pArr.length; i++){
        pArr[i].addEventListener('click', function(){
            this.style.background = 'red';
            this.textContent = `My index ${i}`;
        });
    }
    let h2 = document.querySelector('h2');
    h2.addEventListener('click', function(event){
        alert(111);
        console.log(event);
    })
    let link = document.querySelector('a');
    link.addEventListener('click', function(event){
        console.log('clicked!');
        event.preventDefault();
    });

    document.querySelector('body').onclick = (e)=>{
        console.log(e, 'body');
    }
    document.querySelector('body').onkeydown = (e)=>{
        console.log(e, 'keydown');
    }
    let input = document.querySelector('input');
    let getData = document.querySelector('#get');

    getData.onclick = function(){
        let inputData = input.value;
        console.log(inputData, 'InputData');
    }
}