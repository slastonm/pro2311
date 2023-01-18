window.onload = function(){
    let formEl = document.querySelector('form');
    formEl.onsubmit = function(e){
        let isValid = true;
        let name = document.querySelector('.name');
        let password = document.querySelector('.password');
        if(name.value.length == 0){
            isValid = false;
        }
        if(password.value.length == 0){
            isValid = false;
        }
        if(!isValid){
            e.preventDefault();
            alert('Всі поля повині бути заповнені');
        }
    }
}