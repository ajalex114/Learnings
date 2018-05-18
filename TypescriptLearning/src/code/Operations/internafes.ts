interface Phone {
    model: string;
    version: number;
    ring(): string;
}

class TraditionalPhone implements Phone {
    constructor(
        public model: string,
        public version: number
    ) { }

    ring() {
        return "ring ring";
    }
}

class ModernPhone implements Phone {
    constructor(
        public model: string,
        public version: number
    ) { }

    ring() {
        return "ring tone";
    }
}

let landline = new TraditionalPhone("ll", 5.1);
let iPhone = new ModernPhone("iPhone", 7);

var phones: Phone[] = [];
phones.push(landline);
phones.push(iPhone);

for (var index of phones) {
    console.log(index.ring());
}