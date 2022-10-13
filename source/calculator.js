//const axios = require('axios').default;

function addCalculator(...a){
    if(a.length<2) throw CalculatorError("Prosledili ste manje od 2 parametara"); 
    return a.reduce((accumulator, current) => {
        if(!isFinite(current)) throw CalculatorError("Calculator radi samo sa brojevima"); 
		return accumulator += current;
	});
}


function subCalculator(a,b){
    if(!isFinite(a) || !isFinite(b)) throw CalculatorError("Calculator radi samo sa brojevima");
    return a-b;
}

function mullCalculator(a,b){
    if(!isFinite(a) || !isFinite(b)) throw CalculatorError("Calculator radi samo sa brojevima");
    return a*b;
}

function divCalculator(a,b){
    if(!isFinite(a) || !isFinite(b)) throw CalculatorError("Calculator radi samo sa brojevima");
    if(b==0) throw CalculatorError("Dividing with zero is not allowed");
    return a/b;
}

function analyzeArray(...args){
    let cnt=0;
    let avgValue=0;
    let max = NaN;
    let min = NaN;
    args.reduce((accumulator, current)=>{
        if(!isFinite(current)) throw CalculatorError("Calculator radi samo sa brojevima"); 
        if(typeof(current)=="boolean") {current=+current;}
        cnt+=1;
        if(isNaN(max) || current>max) max=current;
        if(isNaN(min) || current<min) {min=current;}
        avgValue+=current;
    },args[0]);
    avgValue=Number((avgValue/cnt).toFixed(2));
    return JSON.stringify({elements:cnt, avgValue:avgValue, max:max, min:min});
}

async function fetchData(){
    let url = 'https://api.nationalize.io/?name=nathaniel';
    let response = await fetch(url);
    let data = response.json();
    return data;
}

function addElementToArray(array, elements){
    if(!Array.isArray(array)) throw Error("Prvi argument treba da bude niz");
    //array.push(elements);
    elements.forEach(element => {
        array.push(element);
    });
    return array;
}

function removeElementFromArray(array, elements){
    if(!Array.isArray(array)) throw Error("Prvi argument treba da bude niz");
    elements.forEach(element => {
        for(var i=0; i<array.length; i++){
            if(array[i]==element){
                array.splice(i,1);
                i--;
            }
        }
    });
    //array.pop(elements);
    return array;
}

function getChangeVendingMachine(totalPrice, paidAmmount){
    let array = [];
    if(paidAmmount<totalPrice) throw Error("Niste dovoljno platili");
    if(paidAmmount==totalPrice) return array;
    let coins = [1, 2, 5, 10, 20, 50, 100, 200];
    let exchange = paidAmmount-totalPrice;
    //console.log(coins[7]);
    for(let i=coins.length-1; i>=0; i--){
        if(coins[i]<=exchange) {
            array.push(coins[i]); 
            exchange-=coins[i]; 
            i++

            // console.log(coins[i]);
            // console.log(array);
            // console.log(exchange);
            // console.log(i);
        }
    }
    if(exchange==0) return array;
    else return null;
}

class CalculatorError{
    constructor(message){
        this.message;
    }
}

module.exports = {addCalculator, subCalculator, mullCalculator, divCalculator, analyzeArray, fetchData, addElementToArray, removeElementFromArray, getChangeVendingMachine};