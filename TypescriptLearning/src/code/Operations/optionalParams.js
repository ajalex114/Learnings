function add(num1, num2, num3) {
    var total = num1 + num2;
    if (num3 != undefined) {
        total += num3;
    }
    return total;
}
console.log(add(1, 2));
console.log(add(1, 2, 3));
//# sourceMappingURL=optionalParams.js.map