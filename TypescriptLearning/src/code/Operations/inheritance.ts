class Person3 {
    private isMarried : boolean
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        private age: number
    ) { }

    greetMe() {
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
}

class Student extends Person3 {
    constructor(
        firstName: string,
        lastName: string,
        email: string,
        age: number,
        private grade: string
    ) {
        super(firstName, lastName, email, age);
    }

    greetMe() { 
        super.greetMe();
        console.log(`I'm in the ${this.grade} grade.`);
    }
}

var st = new Student("Alen", "Alex", "alen.alex", 28, "CS");
st.greetMe();