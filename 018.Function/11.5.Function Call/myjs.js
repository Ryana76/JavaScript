const Person1 = {
                firstName1: "Aryana",
                lastName1: "Najafi",
                fullName1: function(){
                    return this.firstName1 + " " + this.lastName1;
                }     
              }

document.getElementById("ex1").innerHTML = Person1.fullName1();



const Person2 = {
    fullName2: function(){
        return this.firstName2 + " " + this.lastName2;
    }
}
const person2_1 = {
    firstName2: "Mehran",
    lastName2: "muosavi"
}
const person2_2 = {
    firstName2: "Aryana",
    lastName2: "Najafi"
}
document.getElementById("ex2").innerHTML = 
Person2.fullName2.call(person2_1) + "<br>" + 
Person2.fullName2.call(person2_2);



const Person3 = {
    fullName3: function(country, city){
        return this.firstName3 +
               " " +
               this.lastName3 +
               " " +
               country + " " + city;
    }
};
const person3_1 = {
    firstName3: "Aryana",
    lastName3: "Najafi"
}
document.getElementById("ex3").innerHTML = 
    Person3.fullName3.call(person3_1, "Iran", "Tehran"); 