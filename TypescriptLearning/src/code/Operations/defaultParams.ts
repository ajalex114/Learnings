function addit(
    num1 : number,
    num2 : number,
    num3 : number = 0
) : number {

    let total = num1 + num2 + num3;

    return total;
}

var result = addit(1,2);
console.log(result);
result = addit(1,2,3);
console.log(result);