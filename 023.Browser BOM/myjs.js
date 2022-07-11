



let height = window.innerHeight;
let width = window.innerWidth;
document.getElementById("demo0").innerHTML = 
"Height" + height + "<br>" +
"Width" + height;


document.getElementById("demo1").innerHTML = 
screen.colorDepth;


document.getElementById("demo2").innerHTML = 
window.location.href + "<br>" +
window.location.hostname + "<br>" +
window.location.pathname + "<br>" +
window.location.protocol + "<br>" +
window.location.port + "<br>";


const myBtn = document.querySelector(".myBtn");
myBtn.addEventListener("click", function myDoc() {
    window.location.assign("https://www.w3schools.com/js/js_window_location.asp")
});


document.getElementById("demo4").innerHTML = 
"navigator : " + navigator.cookieEnabled;



document.getElementById("demo5").innerHTML =
"name app: " + navigator.appName;



document.getElementById("demo6").innerHTML =
"code app: " + navigator.appCodeName;


document.getElementById("demo6").innerHTML =
"browser is online:" + navigator.onLine;


document.getElementById("demo6").innerHTML =
"Java is enable: " + navigator.javaEnabled();


function myFunction9() {
    var txt;
    if (confirm("Press a button!")) {
      txt = "You pressed OK!";
    } else {
      txt = "You pressed Cancel!";
    }
    document.getElementById("demo9").innerHTML = txt;
  }


const mBtn10 = document.querySelector(".mBtn10");
mBtn10.addEventListener("click", function promptFunction() {
    let text10;
    let popName = prompt("Please enter your name:", "Aryana");
    if (popName == null || popName == "") {
        text10 = "User cancelled the prompt.";
    } else {
        text10 = "Hello " + popName + ", How are you?";
    }
    document.getElementById("demo10").innerHTML = text10;
});


function mySetTimeout(){
    alert("Hello!!!");
}



const myBtn13 = document.querySelector(".myBtn13");
let myVar13 = setInterval(() => {
  let myDate = new Date();
  document.getElementById("ex13").innerHTML = myDate.toLocaleTimeString();
}, 1000);


setTimeout(myTimeout1,2000);
setTimeout(myTimeout2,4000);
setTimeout(myTimeout3,6000);
function myTimeout1(){
  document.getElementById("demo14").innerHTML = "2 sec";
}
function myTimeout2(){
  document.getElementById("demo14").innerHTML = "4 sec";
}
function myTimeout3(){
  document.getElementById("demo14").innerHTML = "6 sec";
}