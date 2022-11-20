
function add(n1: number, n2:number) {
    return n1 + n2
}

//VOID TYPE
//the void type is the typescripts way of saying that this function doesn't have a return type 
//aka it doesn't return anything
function printResult(num: number): void{
    console.log('Result:' + num)
}

printResult(add(5, 12)) //Output = Result: 17

//if you try to console log the printResult it will return undefined because the function is void 
//void is typescripts way of saying undefined in javascript 
//void === undefined 
//so the code below will return undefined because the function didn't return anything 
console.log(printResult(add(5, 12)))

//UNDEFINED
//undefined is actually a type is typescript
//EX:
let someValue: undefined 


//however using undefined on a function does bring its pluses 
//when suing undefined on a function yuo also have to add the return key word for it not to have an error
//EX: no return
function printResult2(num: number): undefined{
    console.log('Result:' + num)
}

//EX: with return
function printResult2(num: number): undefined{
    console.log('Result:' + num)
    return;
}

//so use void on function types if you want undefined but don't want a return statement 