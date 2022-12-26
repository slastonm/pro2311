// 1)Створити обєкт userWallet  в якому існують ключі (amountUsa, amountEuro, amountUa) які містять числові значення ( збереження юзера)
// Створити массив обєктів bank в якому є обєкети з ключами buy, sell  з числовими значеннями ( продаж і покупка валюти) а також ключ name в який передаємо назву валюти (usa, euro, ua)
// Створити функцію яка отримує данні з обєкту юзер опрацьовує ці данні і повертає скільки долларів чи євро може купити користувач, врахувати можливість неможливості покупки.
// Створити функцію яка прораховує скільки гривень отримує користувач продавши свої збереження


let userWallet = {
    amountUsa:10,
    amountEuro:20,
    amountUa:500
}

const bank =[
    {
        name:'Usd',
        buy:40,
        sell:42
    },
    {
        name:'euro',
        buy:40,
        sell:43
    },
    {
        name:'ua',
        buy:0.9,
        sell:1.1
    }
];

function moneyInfo(arr, firstValue, bankArray){
    if(userWallet.amountUa == 0){
        alert(
            'Try next time'
        );
        return;
    }
    let moneyInfoArr = []
    arr.forEach(value => {
        moneyInfoArr.push(`User can buy ${userWallet.amountUa / value.buy}`)
    });
    console.log(moneyInfoArr);
    return moneyInfoArr;
}
moneyInfo(bank);

function exchangeAll(arr){
    let isRichUser = 0;
    let userWalletAmount = [];
    for (let value in userWallet){
        userWalletAmount.push(userWallet[value]);
        if(userWallet[value] == 0){
            isRichUser +=1;
        }
    }
    if(arr.length == isRichUser){
        alert(
            'Try next time'
        );
        return;
    }
    let totalAmount = 0;
    const sellAmount = [];
    for(let value of arr){
        sellAmount.push(value.sell);
    }
    sellAmount.forEach((sellValue, index)=>{
        let allCost = userWalletAmount[index];
        totalAmount +=sellValue*allCost;
    });
    console.log(totalAmount);
}
exchangeAll(bank);