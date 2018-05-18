var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person3 = /** @class */ (function () {
    function Person3(firstName, lastName, email, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
    }
    Person3.prototype.greetMe = function () {
        console.log("Hello " + this.firstName + " " + this.lastName);
    };
    return Person3;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(firstName, lastName, email, age, grade) {
        var _this = _super.call(this, firstName, lastName, email, age) || this;
        _this.grade = grade;
        return _this;
    }
    Student.prototype.greetMe = function () {
        _super.prototype.greetMe.call(this);
        console.log("I'm in the " + this.grade + " grade.");
    };
    return Student;
}(Person3));
var st = new Student("Alen", "Alex", "alen.alex", 28, "CS");
st.greetMe();
//# sourceMappingURL=inheritance.js.map