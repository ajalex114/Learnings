var TraditionalPhone = /** @class */ (function () {
    function TraditionalPhone(model, version) {
        this.model = model;
        this.version = version;
    }
    TraditionalPhone.prototype.ring = function () {
        return "ring ring";
    };
    return TraditionalPhone;
}());
var ModernPhone = /** @class */ (function () {
    function ModernPhone(model, version) {
        this.model = model;
        this.version = version;
    }
    ModernPhone.prototype.ring = function () {
        return "ring tone";
    };
    return ModernPhone;
}());
var landline = new TraditionalPhone("ll", 5.1);
var iPhone = new ModernPhone("iPhone", 7);
var phones = [];
phones.push(landline);
phones.push(iPhone);
for (var index in phones) {
    console.log(index.ring());
}
//# sourceMappingURL=internafes.js.map