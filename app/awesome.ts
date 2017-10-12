class Greeter {
  saySomething(message: string = 'what\'s up') {
    return message + ' something';
  }
}

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
