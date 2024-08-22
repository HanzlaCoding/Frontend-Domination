// global scope
console.log(this);

// function
function sayHello() {
    console.log(this);
}

// method
var obj = {
    name: function() {
        console.log(this);
    }
}