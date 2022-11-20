//FUNCTION RETURN TYPE: 
//a function return type is term that means what kind of type will the function return when its done 
//for example the function below will return a number type
//(if you hover over the addNumber word you will see how typescript suggests this)
function addNumber(n1: number, n2:number) {
    return n1 + n2
}

//but this function will return a string type so this function return type is string 
//(if you hover over the addString word you will see how typescript suggests this)
function addStrings(n1: number, n2:number) {
    return n1.toString() + n2.toString()
}

// OR if you want you can assign a return type to a function 
//function nameOfFunction (): type (the type you want the function to return)
//EX:
function addAssigned(n1: number, n2:number): number{
    return n1 + n2
}