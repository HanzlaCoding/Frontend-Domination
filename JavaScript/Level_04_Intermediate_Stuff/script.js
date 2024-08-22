// functions
// es5 and es6
// es5 = fun statement, fun expresions, anonymous function
// es6 = fat arrow function
// a) basic fat arrow function
// b) fat arrow function with parameters
// c) fat arrow function with implicit return

// functions - js mein function normal programming language jaise nhi hote, iska matlba ye hai, yaha pr js mein, functions bnane ke liay type nhi btana parta. bas ap apko function word likhna padega and ap use koi naam deke bana skte ho, ~ iska mtlb ho skta ya nhi jaise ke (~params)

// indepth - js mein functoins first class functoins ka darja diya gya hai, jiska matlab ha ke js mein functions ko value/variable ki tarah treat kia ja skta hai.

// what is function
// koi asa code jo apko baar baar use krna ho asa code jo foran na chlana ho use function me rkhte hein.
// why we need
// to reuse code and to wrap the code which want to to run in future at some point
// how to use
// function name(){} or function name = () => {} or function name = function(){}.

// extras we need to know
// parametres and argumetns
// function abc (param) -----> parameter
// abc(12) ---------> argument

// prepertion for interview
function abc(){
    // function statement
}

var abc = function(){
    // function expression
}

// function(){
    // anonymous function
// }

// fat arrow
var abc = () => {}

// fat param function with one parameteres
var abc = a => {}
// () we called it fat

// fat arrow fuction with implicit return
var abc = a => console.log("I am fat arrow function");


// return - iska mtlb ye hai ke jb function call hua tha sb kxh cord kr min function ke body ke pas aya code run krne or phr or jb return ayega to wo kxh wapis le ke ajayega

// functio hamesha return krta hai or undefined return krta h agr kxh return na ho.

// for(var num = 0; num < 20; num++){
//     console.log('hellow', num);
// }

var i = 0;

while(i < 28){
    console.log('hellow', i);
}