var Person2 = /** @class */ (function () {
    function Person2(firstName, lastName, email, age, isMarried) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.isMarried = isMarried;
    }
    Person2.prototype.greetMe = function () {
        console.log("Hello " + this.firstName + " " + this.lastName);
    };
    return Person2;
}());
var p2 = new Person2("Alen", "Alex", "alen.alex", 28, false);
p2.greetMe();
//# sourceMappingURL=classes2.js.map