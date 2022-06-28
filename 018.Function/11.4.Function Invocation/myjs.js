function myFunction1(){
    return this;
}
let result1 = window.myFunction1();
document.getElementById("ex1").innerHTML = result1;


let myObject2 = {
                    firstName: "Johnny",
                    lastName: "Doe",
                    fullName: function(){
                        return this.firstName + " " + this.lastName;
                    },
                    prov2: function(){
                        return this;
                    }
               };
let thisProv2 = myObject2.prov2();    
let result2 = myObject2.fullName();
document.getElementById("ex2").innerHTML = result2 + "<br>" + thisProv2;



function fullName3(arg3_1, arg3_2){
    this.firstName3_1 = arg3_1;
    this.lastName3_2 = arg3_2;
}

const myObject3 = new fullName3("johnny", "Doe");
document.getElementById("ex3").innerHTML = myObject3.firstName3_1; 