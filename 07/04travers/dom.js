window.onload = ()=>{
    let inside = document.querySelector('.inside');
    console.log(inside.parentNode);

    let ht = document.querySelector('html');
    console.log(ht.parentNode);

    let menu = document.querySelector('.menu');
    console.log(menu.firstChild);
    console.log(menu.firstElementChild);
    console.log(menu.lastChild);
    console.log(menu.lastElementChild);
    let childrens = menu.children;
    console.log(childrens);

    let activeItem = document.querySelector('.active');
    // console.log(activeItem.nextElementSibling);
    console.log(activeItem.previousElementSibling);
}