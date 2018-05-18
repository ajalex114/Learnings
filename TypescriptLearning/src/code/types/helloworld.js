"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HelloWorld = /** @class */ (function () {
    function HelloWorld() {
    }
    HelloWorld.prototype.sayHi = function () {
        console.log("Hello World from typescript");
    };
    return HelloWorld;
}());
exports.HelloWorld = HelloWorld;
var helloWorld = new HelloWorld();
helloWorld.sayHi();
//# sourceMappingURL=helloworld.js.map