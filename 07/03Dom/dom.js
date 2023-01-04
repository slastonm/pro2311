window.onload = ()=>{
    let btn = document.getElementById('clickMe');
    console.log(btn);
    btn.innerHTML = 'Hello button';
    let [...paragraphs] = document.getElementsByTagName('p');
    console.log(paragraphs);
    // let elements = Array.from(paragraphs);
    // console.log(elements);
    paragraphs.forEach(item=>{
        item.innerHTML = `<span>Hello</span>`
    });
    let [...div] = document.getElementsByClassName("item");
    console.log(div);

    let span = document.querySelector(".selector span");
    console.log(span);
    span.innerHTML = 'Hello query';

    let [...listItem] = document.querySelectorAll('.list li');
    console.log(listItem);

    let elementsDivP = document.querySelectorAll("div, p");
    console.log(elementsDivP);

    // let lastChild = document.querySelector('ul li:last-child');
    let lastChild = document.querySelector('ul li:nth-child(2)');
    lastChild.innerHTML = 'Second'
}