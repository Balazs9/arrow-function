// Vanilla JavaScript Functions
// function addTwoNumbers(a, b) {
    // Code Block
//    return a + b;
//}

// let sum = addTwoNumbers(3, 5);
// console.log(sum);

const addTwoNumbers = (a, b) => {
    return a + b;
}

let sum = addTwoNumbers(3, 5);
console.log(sum);

// Single line arrow

const addTwoNumbers2 = (a, b) => a + b;
let sum2 = addTwoNumbers2(6, 4);
console.log(sum2)

const saySomething = message => console.log(message);
saySomething("Hello");

const sayHello = () => console.log("hello there");
sayHello();

const returnMultipleLines = () => (
    `<p>
    This is a multiple string
    </p>`
)
console.log(returnMultipleLines());