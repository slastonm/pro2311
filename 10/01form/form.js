window.onload = function(){
    let formEl = document.querySelector('form');
    console.log(formEl);
    let [...inputs] = formEl.elements;
    console.log(inputs);
    inputs[0].value = 'Text input 1';
    // let nameInput = document.querySelector('#name');
}