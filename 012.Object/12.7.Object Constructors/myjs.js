function Person1(first1, last1, age1, eye1){
    this.firstName1 = first1;
    this.lastName1 = last1;
    this.age1 = age1;
    this.eye1 = eye1;
}
const father1 = new Person1("Mansuor", "Najafi", 58, "Green");
document.getElementById("ex1").innerHTML = 
"My father is " + father1.age1 + ".";



function Person2(firstName2, lastName2, age2, eye2) {
    this.firstName2 = firstName2;
    this.lastName2 = lastName2;
    this.age2 = age2;
    this.eye2 = eye2;
    this.nationality2 = "English";
}

const myFather2 = new Person2("Mansuor", "Najafi", 58, "Green");
const myMother2 = new Person2("Bita", "Malayeri", 54, "Brown");

myMother2.nationality1 = "Persian"
document.getElementById("ex2").innerHTML = 
"My father is " + myFather2.age2 + " " +
"and my mother is " + myMother2.age2 + " and she is " + 
myMother2.nationality + ".";



myFather2.fullName = function(){
    return this.firstName2 + " " + this.lastName2; 
};
document.getElementById("ex3").innerHTML = 
myFather2.fullName();




document.getElementById("ex3").innerHTML = 
myFather2.nationality2;


function Person4(firstName4, lastName4, age4, eye4){
    this.firstName4 = firstName4;
    this.lastName4 = lastName4;
    this.age4 = age4;
    this.eye4 = eye4;
    this.fullName4 = function(){
        return this.firstName4 + " " + this.lastName4;
    }
    this.changName = function(firstName4){
        this.firstName4 = firstName4;
    }
}
const myFather4 = new Person4("Mansuor", "Najafi", 58, "Green");
document.getElementById("ex4").innerHTML = 
myFather4.fullName4();

myFather4.changName("Bita")
document.getElementById("ex5").innerHTML = 
myFather4.fullName4();
