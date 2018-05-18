function addWithRest(num1, num2) {
    var numbers = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        numbers[_i - 2] = arguments[_i];
    }
    var total = num1 + num2;
    for (var i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}
var result = addWithRest(1, 2, 3, 4, 5);
console.log(result);
//# sourceMappingURL=restParams.js.map