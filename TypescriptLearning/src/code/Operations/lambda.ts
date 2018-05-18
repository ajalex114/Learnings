var multiply = function (
    num1: number,
    num2: number
): number {
    return num1 * num2;
}

var multiplyLambda = (num1: number, num2: number) => num1 * num2;

var sayFirstNumber: (firstNumber: number) => void;

sayFirstNumber = function (first: number) {
    console.log(first);
}

console.log(multiplyLambda(2, 2));
sayFirstNumber(1);