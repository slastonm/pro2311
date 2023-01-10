window.onload = ()=>{
    let header = document.querySelector('header');
    let newElement = document.createElement('p');
    newElement.innerHTML = 'Hello from P';
    header.appendChild(newElement);
    let footer = document.querySelector('footer');
    let div = document.createElement('div');
    div.id = 'js';
    div.className = 'js-class';
    div.innerText = 'Hello from div';
    footer.appendChild(div);

    let list = document.querySelector('.list');
    let li = document.createElement('li');
    li.innerText = 'FirstItem';
    list.appendChild(li);
    // не працює повторно  бо нема заново створення list.appendChild(li);
    // не працює  list.appendChild(new li);



    function createMenuItem(name){
        let li = document.createElement('li');
        li.textContent = name;
        return li;
    }
    list.appendChild(createMenuItem('Home'));
    list.appendChild(createMenuItem('About'));
    list.appendChild(createMenuItem('Sale'));
    lastItem = list.lastElementChild;
    console.log(lastItem);
    // list.removeChild(lastItem);
    let removeLastChild = function(list){
        let item = list.lastElementChild;
        if( item !=null){
            list.removeChild(item);
        }
        return 
    }
    removeLastChild(list);
    removeLastChild(list); 
    removeLastChild(list);

    let firstLink = document.querySelector('#first');
    let secondLink = document.querySelector('#second');
    let thirdLink = document.querySelector('#third');

    firstLink.setAttribute('href', 'https://prog.kiev.ua/');
    firstLink.innerText = 'Html & css';

    secondLink.removeAttribute('href');
    let linkHref = thirdLink.getAttribute('href');
    console.log(linkHref);

    let menuItems = ['Home', 'News', 'Posts'];
    let nav = document.querySelector('nav');
    let fragment = new DocumentFragment();
    menuItems.forEach((item)=>{
        let link = document.createElement('a');
        link.innerText = item;
        link.setAttribute('href', item);
        fragment.appendChild(link);
    });
    nav.appendChild(fragment);
    let title = document.querySelector('h1');
    let textP = document.createElement('p');
    textP.innerText = 'Hello in P';
    title.after(textP);

    let sideMenu = document.querySelector('.sideMenu');
    let links = nav.children;
    console.log(links);
    let cloneData = links[0].cloneNode(true);
    sideMenu.appendChild(cloneData);

    let deepP = document.querySelector('header p');
    let cloneP = deepP.cloneNode(false);
    footer.appendChild(cloneP);


}