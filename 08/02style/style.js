window.onload = ()=>{
    let h1 = document.querySelector('h1');
    h1.setAttribute('style','color:red;background-color:black');
    // overwrite style h1.setAttribute('style','padding:40px');
    h1.style.cssText +='padding:40px';
    h1.style.textAlign = 'center';
    h1.style.fontSize = '40px';
    // tex-align:center
    let styleP = document.querySelector('p');
    let computedPstyle = getComputedStyle(styleP);
    // console.log(computedPstyle.fontSize);
    // console.log(computedPstyle.margin);
    // console.log(computedPstyle.padding);
    styleP.className += ' new';
    console.log(styleP.className);
    styleP.classList.add('navigation', 'dark', 'text-white');
    console.log(styleP.classList);
    styleP.classList.remove('dark');
    console.log(styleP.classList.contains('new2'));
    styleP.classList.replace('text-white', 'text-info');

}