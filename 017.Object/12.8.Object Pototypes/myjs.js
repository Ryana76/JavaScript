function Person1 (firstName1, lastName1, age1, eyeColor1){
    this.firstName1 = firstName1;
    this.lastName1 = lastName1;
    this.age1 = age1;
    this.eyeColor1 = eyeColor1;
    // this.nationality = "English";
}
Person1.prototype.nationality1 = "English";
const myFather1 = new Person1("John", "Doe", 50, "blue");
const myMother1 = new Person1("Sally", "Rally", 48, "green");
document.getElementById("ex1").innerHTML =
myFather1.age1 + "<br>" + 
myMother1.age1 + "<br>" +
myFather1.nationality1;





function Person2(firstName2, lastName2, age2, eyeColor2){
    this.firstName2 = firstName2;
    this.lastName2 = lastName2;
    this.age2 = age2;
    this.eyeColor2 = eyeColor2;
}
Person2.prototype.fullName = function() {
    return this.firstName2 + " " + this.lastName2;
}

