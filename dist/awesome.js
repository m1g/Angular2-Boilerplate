var Greeter = /** @class */ (function () {
    function Greeter() {
    }
    Greeter.prototype.saySomething = function (message) {
        if (message === void 0) { message = 'what\'s up'; }
        return message + ' something';
    };
    return Greeter;
}());
var greeter = new Greeter();
greeter.saySomething('hello');
// TS SIMPLIFIES DEFAULTS
// const message = 'hello';
//
// function saySomething(message: string = 'what\'s up'){
//   console.log(message);
// };
//
//
// saySomething(3443);
//# sourceMappingURL=awesome.js.map