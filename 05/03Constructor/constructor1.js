const constrUser = new Object();

constrUser.password = 12345;
constrUser.fName = 'Tom';
console.log(constrUser);


function ProductConstructor(name, price){
    this.name = name;
    this.price = price;
    this.info = function(){
        console.log(`This product ${this.name}  with ${this.price}`);
    }
}

ProductConstructor.number = 1;
const tv = new ProductConstructor('TVbrand', 1000);
const phone = new ProductConstructor('PhoneBrand', 500);
console.log(tv.name);
console.log(tv.price);
console.log(tv.info());

const productArr =[tv, phone];
console.log(productArr);
