function myFunction(id){
    id.innerHTML = "Opss!"
}

function displayDate(){
    document.getElementById("demo2").innerHTML = Date();
}

document.getElementById("myBtn").onclick = displayDate4;

function displayDate4(){
    document.getElementById("demo4").innerHTML = Date();
}


function checkCookies(){
    var text = "";
    if (navigator.cookieEnabled == true) {
        text = "Cookies are enabled."
    } else {
        text = "Cookies are not enabled."
    }
    document.getElementById("demo5").innerHTML = text;
}


function upperCase(){
    const x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
}


function mOver(obj){
    obj.innerHTML = "Thank You";
}
function mOut(obj){
    obj.innerHTML = "Mouse Over Me";
}

function myUp(obj){
    obj.style.backgroundColor = "#D94A38";
    obj.innerHTML = "Thank You";
}
function myDown(obj){
    obj.style.backgroundColor = "#1ec5e5";
    obj.innerHTML = "Release Me";
}


function lightOff(){
    document.getElementById("myimg").src = "bulboff.gif";
}
function lightOn(){
    document.getElementById("myimg").src = "bulbon.gif";
}


function myMessage(){
    alert("This message is onload!!");
}


function myFunction(obj){
    obj.style.backgroundColor = "yellow"
}