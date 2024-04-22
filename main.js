// function showMessage(){
//     let message = 'hello';
//     console.log(message);
// }

// showMessage();

// function helloUser(name, age = 564){
//     console.log(`hello my name is ${name} i am ${age} y.o`);
// }

// helloUser('Taras',10);
// helloUser('Alina');
// helloUser('Yana',78);

// function sum(num1, num2){
//    return num1 + num2;
// }

// console.log(sum(3,4))

function hiMessage(){
    let message = 'hello';
    console.log('hello')

}
// hiMessage();

function hiUser(hi){
    console.log(`hello ${hi}`);
}
// hiMessage('Yana');
function sum (num1,num2){
    return num1 + num2;
}
// console.log(sum(5,6))
function sut(num1,num2){
    return num1 - num2;
}
// console.log(sut(9,3))

// function getMin(num1,num2){
//     if (num1>num2){
//     return num1;
// } else {
//     return num2;
// }
// }
// console.log(getMin(3,2));

// function getMax(num1,num2){
//     if (num1<num2){
//     return num1;
// } else {
//     return num2;
// }
// }
// console.log(getMax(3,2));

// function divBigTosmall(num1,num2){
//     return getMax(num1,num2) / getMin(num1,num2);
// }

function square(a,b){
    return a*b;

}
let a = 4;
let b = 9;
let area = square(a,b);
console.log(4*9 + area);

function getLength(r){
    return 2 * Math.PI * r;
}