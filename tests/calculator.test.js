const calculator = require('../source/calculator')

test('Jest is working', ()=>{
    expect(1).toBe(1);
});

test("addition of 2 and 3 to equal 5", () => {
  expect(calculator.addCalculator(2, 3)).toBe(5);
});

describe('Test calculator functions', ()=>{
  test("Subtracting two numbers (valid numbers)", () => {
    expect(calculator.subCalculator(2,3)).toBe(-1);
  });

  test("Subtracting two numbers (float numbers)", () => {
    expect(calculator.subCalculator(0.2,3)).toBe(-2.8);
  });

  test("Subtracting two numbers (one element is not number)", () => {
    expect(()=>{calculator.subCalculator("Nikola", 3)}).toThrow(calculator.CalculatorError);
  });

  test("Multiplication two numbers (valid numbers)", ()=>{
    expect(calculator.mullCalculator(2,3)).toBe(6);
  });

  test("Nan", () => {
    expect(()=>{calculator.subCalculator(NaN, 3)}).toThrow(calculator.CalculatorError);
  });

  test("Infinity as param SUB CALC", () => {
    expect(()=>{calculator.subCalculator(Infinity, 3)}).toThrow(calculator.CalculatorError);
  });

  test("Multiplication two numbers (float numbers)", ()=>{
    expect(calculator.mullCalculator(0.2,3)).toBeCloseTo(0.6);
  });

  test("Multiplication two numbers (one element is not number)", () => {
    expect(()=>{calculator.mullCalculator("Nikola", 3)}).toThrow(calculator.CalculatorError);
  });

  test("Dividing two numbers (valid numbers - second is not zero)", ()=>{
    expect(calculator.divCalculator(6,3)).toBe(2);
  });

  test("Dividing two numbers (valid numbers - second is zero)", ()=>{
    expect(()=>{calculator.divCalculator(6,0)}).toThrow(calculator.CalculatorError);
  });

  test("Dividing two numbers (one is not valid number)", ()=>{
    expect(()=>{calculator.divCalculator(6,"Nikola")}).toThrow(calculator.CalculatorError);
  });

  test("Addition a few numbers in one call(call addCalculator with more than 2 arguments and get correct result)", ()=>{
    expect(calculator.addCalculator(6,3,1)).toBe(10);
  });

  test("Addition a few numbers in one call (some params are not number)", ()=>{
    expect(()=>{calculator.addCalculator(6,"Nikola", "Brkovic", 2)}).toThrow(calculator.CalculatorError);
  });

  test("Adding without parameters", ()=>{
    expect(()=>{calculator.addCalculator()}).toThrow(calculator.CalculatorError);
  });

  test("Subbing without parameters", ()=>{
    expect(()=>{calculator.subCalculator()}).toThrow(calculator.CalculatorError);
  });

  test("Mull without parameters", ()=>{
    expect(()=>{calculator.mullCalculator()}).toThrow(calculator.CalculatorError);
  });

  test("Dividing without parameters", ()=>{
    expect(()=>{calculator.divCalculator()}).toThrow(calculator.CalculatorError);
  });

  test("Subbing with only 1 param", ()=>{
    expect(()=>{calculator.subCalculator(1)}).toThrow(calculator.CalculatorError);
  });

  test("Mull with only 1 param", ()=>{
    expect(()=>{calculator.mullCalculator(1)}).toThrow(calculator.CalculatorError);
  });

  test("Dividing with only 1 param", ()=>{
    expect(()=>{calculator.divCalculator(1)}).toThrow(calculator.CalculatorError);
  });

  test("Adding with only 1 param", ()=>{
    expect(()=>{calculator.addCalculator(1)}).toThrow(calculator.CalculatorError);
  });

  test("Analyze array [true,2,3,4,5,6,7,8,9,10]", ()=>{
    expect(calculator.analyzeArray(true,2,3,4,5,6,7,8,9,10)).toEqual(JSON.stringify({elements:10, avgValue:5.50, max:10, min:1}))
  });

  test("Fetch data from API and add it to array", async ()=>{
    var array = [1, 2, 3];
    const fetchData = jest.fn();
    fetchData.mockReturnValue(
      {
        "country":[
          {
            "country_id":"GH",
            "probability":0.224
          },
          {
            "country_id":"PH",
            "probability":0.084
          },
          {
            "country_id":"NG",
            "probability":0.073
          },
          {
            "country_id":"US",
            "probability":0.061
          },
          {
            "country_id":"NE",
            "probability":0.034
          }],
          "name":"nathaniel"
        });
    
        // fetchData().country.forEach(element => {
        //   console.log(element)
        // });
        //console.log(typeof(fetchData().country));
    
        //console.log(typeof(array));
    expect(calculator.addElementToArray(array, fetchData().country)).toEqual(expect.arrayContaining(fetchData().country))
        //expect(calculator.addElementToArray(array, fetchData().country)).objectContaining(fetchData().country);
  });

  test("Fetch data from API and Remove from Array", async ()=>{
    var array = [1,2,3];
    const fetchData = jest.fn();
    fetchData.mockReturnValue(
      {
        "country":[
          {
            "country_id":"GH",
            "probability":0.224
          },
          {
            "country_id":"PH",
            "probability":0.084
          },
          {
            "country_id":"NG",
            "probability":0.073
          },
          {
            "country_id":"US",
            "probability":0.061
          },
          {
            "country_id":"NE",
            "probability":0.034
          }],
          "name":"nathaniel"
        });
    calculator.addElementToArray(array, fetchData().country);
    //expect(calculator.removeElementFromArray(array, fetchData().country)).not.toContainEqual(fetchData().country);
    expect(calculator.removeElementFromArray(array, fetchData().country)).toEqual(expect.not.arrayContaining(fetchData().country))
  });


  test("Machine for buying snacks", ()=>{
    let totalPrice = 202;
    let paidAmmount = 400;
    expect(calculator.getChangeVendingMachine(totalPrice, paidAmmount)).toEqual([100, 50, 20, 20, 5, 2, 1]);
  });



  test("Machine for buying snacks", ()=>{
    let totalPrice = 202;
    let paidAmmount = 400;
    expect(calculator.getChangeVendingMachine(totalPrice, paidAmmount)).toEqual([100, 50, 20, 20, 5, 2, 1]);
  });

});