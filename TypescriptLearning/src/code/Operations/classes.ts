class Person {
    public firtsName: string;
    public lastName: string;
    public email: string;
    private age: number;

    constructor(
        fn: string,
        ln: string,
        email: string,
        age: number
    ) {
        this.firtsName = fn;
        this.lastName = ln;
        this.email = email;
        this.age = age;
    }

    greetMe() {
        console.log(`Hello ${this.firtsName}`);
    }
}

var p = new Person("Alen", "Alex", "alen.alex", 28);
p.greetMe();