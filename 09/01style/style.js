window.onload = function(){
    let container = document.querySelector('.container');
    container.classList.toggle('show');
    let width = container.offsetWidth;
    let height = container.offsetHeight;
    console.log(width, height);
    let domRext = container.getBoundingClientRect();
    console.log(domRext);

    let widthC = container.clientWidth;
    let heightC = container.clientHeight;
    console.log(widthC, heightC, 'Client');
    let containerStyle = getComputedStyle(container);
    console.log(containerStyle);
    let marginLeft = parseInt(containerStyle.marginLeft);
    let marginRight = parseInt(containerStyle.marginRight);
    let marginTop = parseInt(containerStyle.marginTop);
    let marginBottom = parseInt(containerStyle.marginBottom);
    console.log(`Mt: ${marginTop} Mx${marginLeft} and ${marginRight} Mb:${marginBottom}`);
}