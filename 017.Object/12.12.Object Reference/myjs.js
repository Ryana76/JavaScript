const person1 = {
    firstName1: "John",
    lastName1 : "Doe",
    language1 : "EN"
};
Object.defineProperty(person1, "language1", {value: "NO"});
document.getElementById("ex1").innerHTML = person1.language1;


Object.defineProperty(person1, "language1", {enumerable:false});
document.getElementById("ex2").innerHTML = Object.getOwnPropertyNames(person1);

document.getElementById("ex3").innerHTML = Object.keys(person1);

Object.defineProperty(person1, "year1", {value: 2008});
document.getElementById("ex4").innerHTML = person1.year1;




const person5 = {firstName5: "aryana", lastName5: "najafi"};
Object.defineProperty(person5, "fullName5", {
    get: function(){
        return this.firstName5 + " " + this.lastName5
    }
});

document.getElementById("ex5").innerHTML = person5.fullName5;




const obj = {counter:0};

Object.defineProperty(obj, "reset", {
    get : function(){return this.counter = 0;}
});
function myReset(){
    obj.reset;
    document.getElementById("ex6").innerHTML = obj.counter;
}
Object.defineProperty(obj, "increment", {
    get: function(){return this.counter++;}
});
function myIncrement(){
    obj.increment;
    document.getElementById("ex6").innerHTML = obj.counter;
}
Object.defineProperty(obj, "decrement", {
    get : function(){return this.counter--;}
});
function myDecrement(){
    obj.decrement;
    document.getElementById("ex6").innerHTML= obj.counter;
}
Object.defineProperty(obj, "add", {
    set : function(value){this.counter += value;}
});
function myAdd(){
    obj.add = 2;
    document.getElementById("ex6").innerHTML= obj.counter;
}
Object.defineProperty(obj, "subtract", {
    set : function(value){this.counter -= value;}
});
function mySubtract(){
    obj.subtract = 2;
    document.getElementById("ex6").innerHTML= obj.counter;
}


