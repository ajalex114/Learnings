function addWithRest(
    num1: number,
    num2: number,
    ...numbers: number[]
): number {

    let total = num1 + num2;
    for (var i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }

    return total;
}

var result = addWithRest(1, 2, 3, 4, 5);
console.log(result);