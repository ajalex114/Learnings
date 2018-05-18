class Person2 {
    private isMarried : boolean
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        private age: number,
        isMarried: boolean
    ) { 
        this.isMarried = isMarried;
    }

    greetMe() {
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
}

var p2 = new Person2("Alen", "Alex", "alen.alex", 28, false);
p2.greetMe();