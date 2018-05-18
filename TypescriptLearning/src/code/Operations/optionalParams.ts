function add(
    num1: number,
    num2: number,
    num3?: number
): number {

    let total = num1 + num2;
    if (num3 != undefined) {
        total += num3;
    }

    return total;
}

console.log(add(1,2));
console.log(add(1,2,3)); 