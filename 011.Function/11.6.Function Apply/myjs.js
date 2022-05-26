const PersonApply1 = 
{
    fullName1: function(){
        return this.firstName1 + " " + this.lastName2;
    }
};
const person1 = 
{
    firstName1: "Aryana",
    lastName2: "Najafi"
};
document.getElementById("ex1").innerHTML =
    PersonApply1.fullName1.apply(person1);




const PersonApply2 =
{
    fullName2: function(country, city)
    {
        return this.firstName2 + " " + this.lastName2 +
                ", " + country + ", " + city;
    }
};
const person2 = {
    firstName2: "Aryana",
    lastName2: "Najafi"
};
document.getElementById("ex2").innerHTML =
    PersonApply2.fullName2.apply(person2, ["Iran", "Tehran"]);
document.getElementById("ex3").innerHTML =
    PersonApply2.fullName2.call(person2, "Iran", "Tehran");



function maxNumber(){
    return Math.max(1, 2, 9, 3);
}
let maxNumVal = maxNumber();
document.getElementById("ex4").innerHTML = maxNumVal; 
    // maxNumber()



document.getElementById("ex5").innerHTML = Math.max.apply(null, [1,2,3,8,5]);
document.getElementById("ex6").innerHTML = Math.max.apply(Math, [1,2,3,10,5]);
document.getElementById("ex7").innerHTML = Math.max.apply(" ", [1,2,3,11,5]);
document.getElementById("ex8").innerHTML = Math.max.apply(0, [1,2,3,12,5]);