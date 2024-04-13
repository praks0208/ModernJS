TYPE CONVERSION:-
// Type Conversion
let score = '100';


score = Number(score);
console.log(score + 1);
console.log(typeof score);


// let result = Number('hello');
// let result = String(50);
// let result = Boolean(0);
let result = Boolean('');
console.log(result, typeof result);

FOR LOOPS:-
// For Loops
// for(let i=0; i<5;i++){
// console.log("in loop:", i);
// }
// console.log("loop finished");


const names = ['shaun', 'mario', 'luigi'];
for(let i=0; i<names.length; i++){
    // console.log( names[i]);
    let html = `<div>${names[i]}</div>`; //Template Literal
    console.log(html);


}

While & Do While Loop:-
// While Loop
// const names = ['shaun', 'mario', 'luigi'];


// let i=0;
// while(i < 5){
//     console.log('in loop',i);
//    i++;
// }


let i=0;
while(i < names.length){
    console.log(names[i]);
    i++;
}


// Do While Loop
let i=3;
do{
    console.log('val of i is',i)
    i++;
}while(i<5);



If Else Statements
// If Else Statements
// const age = 25;


// if(age > 20){
//     console.log("you are over 20 years old")
// }


// const ninjas = ['shaun', 'ryu', 'chun-li','yoshi'];


// if(ninjas.length >3){
//     console.log("that's a lot of ninjas");
// }


const password = 'password';
if(password.length>=12){
    console.log('that password is mighty strong');
}
else if(password.length >=8){
    console.log('that password is long enough');
}else{
    console.log('password is not long enough');
}

// Logical Operators && and ||


const password = 'p@ssw1';


if(password.length>=12 && password.includes('@')){
    console.log('that password is mighty strong');
}
else if(password.length >=8 || password.includes('@') && password.length>5){
    console.log('that password is strong enough');
}else{
    console.log('password is not strong enough');
}

Logical NOT (!)
// Logical NOT (!)
let user = false;


if(!user){
    console.log('you must be logged in to continue');
}
else{
    console.log('login in to continue')
}


console.log(!true);
console.log(false);

Break and Continue
// Break and Continue


const scores = [50, 20, 0, 30, 100, 20, 10];


for(let i=0; i < scores.length; i++){
    if(scores[i]===0){
        continue;
    }
    console.log('your score:',scores[i]);
    if(scores[i]===100){
        console.log('congrats, you got the top score!');
        break;
    }
}
Switch Statements
// Switch Statements


const grade = 'B';


switch (grade) {
    case 'A':
        console.log('you got an A!');
        break;
    case 'B':
        console.log('you got a B!');
        break;
    case 'C':
        console.log('you got a C!');
        break;
    case 'D':
        console.log('you got an D!');
        break;
    case 'E':
        console.log('you got an E!');
        break;
    default:
        console.log('not a valid grade');
        break;
}



Variables & Block Scope
// Variables & Block Scope


const age = 30;


if(true){
    const age = 40;
    const name = 'shaun';
    console.log('inside 1st code block:',age,name)


    if(true){
        const age = 50;
        console.log('inside 2nd code block:',age);
    }
}


console.log('outside code block:',age,name);






Functions:
// Function Declaration
function greet(){
    console.log('hello there');
}


// Function Expression
const speak = function(name = 'Luigi',time='Night'){
    console.log(`Good ${time} ${name}`);
};


speak();
speak('Prasanna');
speak('Prasanna','Day');


// Returning Values
const calcArea = function(radius){
    return 3.14 * radius**2;
};


const area = calcArea(5);
console.log(area);


const calcVol = function(area){


};


calcVol(area);


// Practice Arrow Functions
const greet = () => 'hello world';
const result = greet();
console.log(result);


const bill = (products, tax) =>{
    let total = 0;
    for (let i=0; i<products.length; i++){
        total += products[i] + products[i]*tax;
    }
    return total;
}


console.log('Total Bill is: ',bill([10,15,30],0.2));


//Functions & Methods
const names = 'prasanna';


// Function
const greet = ()=> 'hello';


let resultOne = greet();
console.log(resultOne);


// Methods
let resultTwo = names.toUpperCase();
console.log(resultTwo);


// Callbacks & Foreach
const myFunc = (callbackFunc) => {
    let value = 50;
    callbackFunc(value);
}


myFunc(value =>{
    console.log(value);
});


// Callback Function with ForEach
let people = ['maria', 'luigi', 'ryu', 'shaun', 'chun-li'];


const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`)
}


people.forEach(logPerson);


// Get a Reference to the 'ul'
const ul = document.querySelector('.people');


const people = ['maria', 'luigi', 'ryu', 'shaun', 'chun-li'];
let html =``;
people.forEach(person=>{
// html template
html += `<li style="color:purple;">${person}</li>`;
});


console.log(html);
ul.innerHTML = html;



