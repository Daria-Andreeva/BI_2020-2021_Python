/* for (var i = 0; i < 10; i++) {  //.. 
};
    console.log(i);


let f = function g() {
    return 23;
}
console.log(typeof g());

'use strict';
function getThis() {
    return this;
}
console.log(getThis())

console.log((function (a) {
    arguments[0] = 10;
    return a;
})(5));

printMessage();
function printMessage() {
    console.log('Hello');
}

var name = 'John';
var user = {
    name: 'Peter',
    printMessage() {

    }
}

var name = 'John';
var user = {
    name: 'Peter',
    printMessage() {
        console.log(`Hello, ${this.name}!`);
    }
};
var printMessage = user.printMessage;
printMessage();

let name = "John";
function printName() {
    let name = 'Peter';
    console.log(name);
}
printName();

for (let i = 0; i < 3; i++) {
    setTimeout(function () {
        console.log(i)
    }, 1000)
}

function getThis() {
    return this;
}
console.log(getThis())
*/

function brightestComponent(color) {
    let red = color.slice(1);
    let green = color.slice(2, 4);
    let blue = color.slice(-2);
    let maxColor = red;
    if (maxColor < green) {
        maxColor = green;
    } ;
    if (maxColor < blue) {
        maxColor = blue
    }
}
console.log(brightestComponent("#001000"));
/*
function brightest(colors) {
    let maxColor = colors[0];
    for (let i = 0; i < colors.length; i++) {
        if (brightestComponent(colors[i]) < brightestComponent(colors[i + 1])) {
            maxColor = colors[i + 1];
        }
    }
}



console.log(brightest(["#001000", "#000000"]))
*/
