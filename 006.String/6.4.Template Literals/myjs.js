// document.getElementById("num#").innerHTML =
// "-Ex#-";
// document.getElementById("header#").innerHTML =
// "###";
// document.getElementById("ex#").innerHTML =



let headerVar4 = "Templates Literals";
let tagsVar4 = ["template literals", "javascript", "es6"];
let html = `<h2>${headerVar4}</h2><ul>`;
for(const item4 of tagsVar4){html += `<li>${item4}</li>`}
html += `</ul>`
document.getElementById("num4").innerHTML =
"-Ex4-";
document.getElementById("header4").innerHTML =
"JavaScript Template Literals";
document.getElementById("ex4").innerHTML =
"Template literals allows variables in strings:<br>" +
html + "Template literals are not supported in Internet Explorer.";



let price3 = 10;
let VAT3 = 0.25;
let total3 = `Total: ${(price3 * (1 + VAT3)).toFixed(2)}`;
document.getElementById("num3").innerHTML =
"-Ex3-";
document.getElementById("header3").innerHTML =
"JavaScript Template Literals";
document.getElementById("ex3").innerHTML = 
"Template literals allows variables in strings:<br>" +
total3 +
"<br>Template literals are not supported in Internet Explorer.";



let firstName = "Aryana";
let lastName = "Najafi";
let text2 = `Welcome ${firstName}, ${lastName}`;
document.getElementById("num2").innerHTML =
"-Ex2-";
document.getElementById("header2").innerHTML =
"JavaScript Template Literals";
document.getElementById("ex2").innerHTML =
"Template literals allows variables in strings: <br>" +
text2 + "<br>" + 
"Template literals are not supported in Internet Explorer.";



let text1 = `Hello world!`;
document.getElementById("num1").innerHTML =
"-Ex1-";
document.getElementById("header1").innerHTML =
"JavaScript Template Literals";
document.getElementById("ex1").innerHTML =
"Template literals use back-ticks (\`\`) to define a string:" +
"text is: " + text1 +
"<br><br>" +
`Template literals allows multiline strings: <br>` +
`<b>The quick
 brown fox
 jumps over
 the lazy dog</b>` +
 "<br> Template literals are not supported in Internet Explorer.";