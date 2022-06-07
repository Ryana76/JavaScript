const person1 = {
    firstName1: "Aryana",
    lastName1: "Najafi",
    language1: "en",
    get lang1() {
        return this.language1;
    }
};
document.getElementById("ex1").innerHTML = person1.lang1;



const person2 = {
    firstName2: "Aryana",
    lastName2: "Najafi",
    language2: "Null",
    set lang2(value2) {
        this.language2 = value2;
    }
};
person2.lang2 = "Persian";
document.getElementById("ex2").innerHTML = person2.language2;




const person3 = {
    firstName3: "John",
    lastName3: "Doe",
    language3: "en",
    get lang3() {
        return this.language3.toUpperCase();
    }
};
document.getElementById("ex3").innerHTML = person3.lang3;



const person4 = {
    firstName4: "John",
    lastName4: "Doe",
    language4: "en",
    set lang4(value4) {
        this.language4 = value4.toUpperCase();
    }
};
person4.lang4 = "en";
document.getElementById("ex4").innerHTML = person4.language4;




const obj5 = {counter5 : 0};

Object.defineProperty(obj5, "reset", {
    get : function () {this.counter5 = 0;}
});
Object.defineProperty(obj5, "increment", {
    get : function () { this.counter5++;}
});
Object.defineProperty(obj5, "decrement", {
    get : function () {this.counter5--;}
});
Object.defineProperty(obj5, "add", {
    set : function (value5) { this.counter5 += value5;}
});
Object.defineProperty(obj5, "subtract", {
    set : function (value5) {this.counter5 -= value5;}
});

obj5.reset;
obj5.increment;
obj5.decrement;
obj5.add = 8;
obj5.subtract = 2;
document.getElementById("ex5").innerHTML = obj5.counter5;