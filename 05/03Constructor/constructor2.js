function ProductConstructor(name, price){
    this.name = name;
    this.price = price;
    this.info = function(){
        console.log(`This product ${this.name}  with ${this.price}`);
    }
    ProductConstructor.number++
    if(ProductConstructor.number>2){
        console.log('Stop create tv');
    }
}
ProductConstructor.number = 0;

const tv = new ProductConstructor('tv1', 1);
const tv2 = new ProductConstructor('tv2', 10);
const tv3 = new ProductConstructor('tv3', 10);
console.log(tv3);

function Calculate(firstValue, secondValue){
    this.firstValue = firstValue;
    this.secondValue = secondValue;
}
Calculate.prototype.sum = function(){
    return `Sum ${this.firstValue + this.secondValue}`
}
Calculate.prototype.minus = function(){
    return `Minus ${this.firstValue - this.secondValue}`
}

let calcValue = new Calculate(2,3);
console.log(calcValue);
console.log(calcValue.sum());
console.log(calcValue.minus());





