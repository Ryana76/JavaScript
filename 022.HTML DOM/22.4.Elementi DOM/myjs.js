let element = document.getElementById("intro");
document.getElementById("demo").innerHTML =
"The text from the intro paragraph is: " + 
element.innerHTML;


const element2 = document.getElementsByTagName("h2");
document.getElementById("demo2").innerHTML =
"The text from the intro paragraph is: " + 
element2[2].innerHTML;


const x = document.getElementById("main3");
const y = x.getElementsByTagName("p");
document.getElementById("demo3").innerHTML =
'The first paragraph (index 0) inside "main" is: ' +
y[0].innerHTML;

const x4 = document.getElementsByClassName("intro4");
document.getElementById("demo4").innerHTML =
`The first paragraph (index 0) with class="intro" is: ` +
x4[0].innerHTML;



const x5 = document.querySelectorAll("p.intro5");
document.getElementById("demo5").innerHTML =
`The first paragraph (index 0) with class="intro" is: `+
x5[0].innerHTML;



const x6 = document.forms["frm1"];
let text = "<ul>";
for (let index = 0; index < x6.length; index++) {
    text += "<li>" + x6.elements[index].value + "</li>"; 
}
text += "</ul>";
document.getElementById("demo6").innerHTML = text;



document.getElementById("demo7").innerHTML = 
"Number of anchors are: " + document.anchors.length;

// document.getElementById("demo8").innerHTML = document.body.innerHTML;

