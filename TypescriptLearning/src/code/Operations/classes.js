var Person = /** @class */ (function () {
    function Person(fn, ln, email, age) {
        this.firtsName = fn;
        this.lastName = ln;
        this.email = email;
        this.age = age;
    }
    Person.prototype.greetMe = function () {
        console.log("Hello " + this.firtsName);
    };
    return Person;
}());
var p = new Person("Alen", "Alex", "alen.alex", 28);
p.greetMe();
//# sourceMappingURL=classes.js.map