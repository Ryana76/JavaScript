try {
    addlert("Welcome guest!");
} catch (err) {
    document.getElementById("ex1").innerHTML = err.message;
}



function myFunction(){
    const message = document.getElementById("ex2");
    message.innerHTML = "";
    let number = document.getElementById("input").value;
    try{
        if(number == ""){throw "empity"};
        if(number == " "){throw "empity"};
        if(isNaN(number)){throw "not a number"};
        number = Number(number);
        if(number < 5){throw "too low"};
        if(number > 10){throw "too big"};
    }
    catch(err){
        message.innerHTML = "Input is " + err;
    }
    finally{
        if((number>=5)&&(number<=10)){
            message.innerHTML = "number is " + number;
        }
            document.getElementById("input").value = "";
    }
}



let number3 = 1;
try{
    number3.toPrecision(500);
}
catch(err){
    document.getElementById("ex3").innerHTML = err.name ;
}


let number4 = 5;
try {
    x = y + 1;
} catch (error) {
    document.getElementById("ex4").innerHTML = error.name ;    
}


try {
    eval("alert('Hello)")
} catch (error) {    
    document.getElementById("ex5").innerHTML = error.name ;    
}


let x = 5 * 15;
console.log(x);
debugger;
document.getElementById("ex6").innerHTML =x;    
