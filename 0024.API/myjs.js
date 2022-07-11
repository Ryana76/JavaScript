const myInp0 = document.querySelector(".myInp0");
const myBtn0 = document.querySelector(".myBtn0");
myBtn0.addEventListener("click", myIsValid0);
function myIsValid0() {
    if (!myInp0.checkValidity()) {
        document.getElementById("demo0").innerHTML =
        myInp0.validationMessage;
    } else {
        document.getElementById("demo0").innerHTML =
        "Input OK";
    }
}

const myInp1 = document.querySelector(".myInp1");
const myBtn1 = document.querySelector(".myBtn1");
myBtn1.addEventListener("click", myIsValid1);
function myIsValid1() {
    let text1;
    if (myInp1.validity.rangeOverflow) {
        text1 = "Value too large";
    } else {
        text1 = "Input Ok";
    }
    document.getElementById("demo1").innerHTML = text1;
}



const myInp2 = document.querySelector(".myInp2");
const myBtn2 = document.querySelector(".myBtn2");
myBtn2.addEventListener("click", myIsValid2);
function myIsValid2() {
    let text2;
    if (myInp2.validity.rangeUnderflow) {
        text2 = "Value too small";
    } else {
        text2 = "Input Ok";
    }
    document.getElementById("demo2").innerHTML = text2;
}


localStorage.setItem("name", "Aryana");
document.getElementById("demo3").innerHTML = localStorage.getItem("name");



const result4 = document.querySelector(".result4");
const myBtnStart4 = document.querySelector(".myBtnStart4");
const myBtnStop4 = document.querySelector(".myBtnStop4");

myBtnStart4.addEventListener("click", myFuncStart4);
myBtnStop4.addEventListener("click", myFuncStop4);

let myWork4;
function myFuncStart4() {
    if (typeof(myWork4) == "undefined") {
        myWork4 = new Worker("myjs.js")
    }
    myWork4.onmessage = function (event) {
        document.getElementById("res4").innerHTML = event.data;
    };
}


let file5 = "fetch_info.txt";
fetch(file5)
.then(x => x.text())
.then(y => document.getElementById("demo5").innerHTML = y)