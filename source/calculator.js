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
        cnt+=1;
        if(isNaN(max) || current>max) max=current;
        if(isNaN(min) || current<min) {min=current;}
        avgValue+=current;
    },args[0]);
    avgValue=Number((avgValue/cnt).toFixed(2));
    return JSON.stringify({elements:cnt, avgValue:avgValue, max:max, min:min});
}


class CalculatorError{
    constructor(message){
        this.message;
    }
}

module.exports = {addCalculator, subCalculator, mullCalculator, divCalculator, analyzeArray};