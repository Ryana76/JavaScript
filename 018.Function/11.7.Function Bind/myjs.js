const person1 = {
    firstName1: "Aryana",
    lastName1: "Najafi",
    fullName1: function(){
        return this.firstName1 + " " + this.lastName1;
    }
};
const member1 = {
    firstName1: "Mehran",
    lastName1: "Mousavi"
};
let fullNameVal1 = person1.fullName1.bind(member1);
document.getElementById("ex1").innerHTML = fullNameVal1();


const person2 = {
    firstName2: "Aryana",
    lastName2: "Najafi",
    display: function(){
        let text = document.getElementById("ex2");
        text.innerHTML = this.firstName2 + " " + this.lastName2;
    }
}
// person2.display();

// setTimeout(person2.display, 3000);

let display4 = person2.display.bind(person2);
setTimeout(display4, 3000);
