const findMax = () =>{
    return;
} 
console.log(findMax(Math.sort(-100,2,3,30,20,0)));

// inter javascripts test Question 
// Question no 1
function createCounter() {
    let count  =  0; 
         return function(){
            count ++;
            return count;
    };
}
console.log(createCounter(1));
const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());

// Question no 2
a = 3;
console.log(a);
var a;

// Question no 3
for (let i = 0; i <= 10 ; i++) {
    setTimeout(() => {
        console.log(i);
    }, 500);    
}
// Question no 4
for (var i = 1; i <= 10 ; i++) {
       setTimeout(() => {
        console.log(i);
       }, 500);
}
// Question no 4
const person = [
    {name : "Johan", id: 2, job: "developer"},
    {name : "Johan", id: 2, job: "PC"},
    {name : "Johan", id: 2, job: "Tester"},
    {name : "Johan", id: 2, job: "sales"}
];

const uniqueByName = Array.from(
    new Map(person.map(item => [item.name, item])).values()
);

console.log(uniqueByName);

// question no 6;
const array3 = [1, 2, 3, 4];
const squares = array3.map(num => num * num);
const sumOfSquares = squares.reduce((acc, curr) => acc + curr)
console.log(sumOfSquares);

// question no 7
const [array] = [1,2,3];
console.log(array);

// question no 8
let a1 = [1,2,3,4,5]
let b = [1,2,3,4,5]
let x = 2;
let y = '3';
console.log(a1===b);
console.log(x+y);    
