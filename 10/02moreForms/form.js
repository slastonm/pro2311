window.onload = function(){
    let [...formInputs] = myForm.elements;
    console.log(formInputs);
    let send = document.querySelector('.submit');
    send.onclick = function(e){
        e.preventDefault();
        for(let i=0; i<formInputs.length; i++){
            let el = formInputs[i];
            console.log(`${el.value} type:${el.type} ${el.name}`);
        }
    }
    let output = document.querySelector('.output');
    for(let j=0; j<formInputs.length; j++){
        let el = formInputs[j];
        el.onchange = function(){
            output.innerHTML = `Change value in ${this.id} now value ${this.value}`
        }
    }
}