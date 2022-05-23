let header1 = "-Ex1-";
let title1 = "JavaScript Comparison";
let para1 = "Assign 5 to number(#), and display the value \
                of the comparison (==)";
let html1 = `<h2>${header1}</h2>
            <h3>${title1}</h3>
            <p>${para1}</p>`;
let num1 = 5;
document.getElementById("ex1").innerHTML = html1 +
"(number(5) == 8): " + (num1 == 8) +
"<br>(number(5) == 5): " + (num1 == 5) +
"<br>(number(5) == \"5\"): " + (num1 == "5");



let header2 = "-Ex2-";
let title2 = "JavaScript Comparison";
let para2 = "Assign 5 to number(#), and display the value \
                of the comparison (===)";
let html2 = `<h2>${header2}</h2>
            <h3>${title2}</h3>
            <p>${para2}</p>`;
document.getElementById("ex2").innerHTML = html2 +
"(number(5) === 5): " + (num1 === 5) +
"<br>(number(5) === \"5\"): " + (num1 === "5");



let header3 = "-Ex3-";
let title3 = "JavaScript Comparison";
let para3 = "Assign 5 to number(#), and display the value \
                of the comparison (!=)";
let html3 = `<h2>${header3}</h2>
            <h3>${title3}</h3>
            <p>${para3}</p>`;
document.getElementById("ex3").innerHTML = html3 +
"(number(5) != 8): " + (num1 != 8);



let header4 = "-Ex4-";
let title4 = "JavaScript Comparison";
let para4 = "Assign 5 to number(#), and display the value \
                of the comparison (!==)";
let html4 = `<h2>${header4}</h2>
            <h3>${title4}</h3>
            <p>${para4}</p>`;
document.getElementById("ex4").innerHTML = html4 +
"(number(5) !== 5): " + (num1 !== 5) +
"<br>(number(5) !== \"5\"): " + (num1 !== "5") +
"<br>(number(5) !== 8): " + (num1 !== 8);


let header5 = "-Ex5-";
let title5 = "JavaScript Comparison";
let para5 = "Assign 5 to number(#), and display the value \
                of the comparison (>, <, >=, <=)";
let html5 = `<h2>${header5}</h2>
            <h3>${title5}</h3>
            <p>${para5}</p>`;
document.getElementById("ex5").innerHTML = html5 +
"(number(5) > 8): " + (num1 > 8) +
"<br>(number(5) < 8): " + (num1 < 8) +
"<br>(number(5) >= 8): " + (num1 >= 8) +
"<br>(number(5) <= 8): " + (num1 <= 8);


let num6_1 = 6;
let num6_2 = 3;
let header6 = "-Ex6-";
let title6 = "JavaScript Comparison";
let para6 = "The operator ";
let html6 = `<h2>${header6}</h2>
            <h3>${title6}</h3>
            <p>${para6}</p>`;
document.getElementById("ex6").innerHTML = html6 +
"(num1(6) < 10 && num2(3) > 1): " + (num6_1 < 10 && num6_2 > 1) +
"<br>(num1(6) == 5 || num2(3) == 5): " + (num6_1 == 5 || num6_2 == 5) +
"<br>!(num1(6) < 10 || num2(3) > 1): " + !(num6_1 < 10 || num6_2 > 1) ;


let header7 = "<h2>-Ex7-</h2>";
let title7 = "<h3>JavaScript Comparison</h3>";
let para7 = "<p>Input your age and click the button:</p>";
let inputBox7 = `<input id="ageInput7" value=""/>`;
let buttonBox7 = `<button type="button" 
                    onclick="myFunction7()">
                        Try it</button>`;
let html7 = `${header7}
            ${title7}
            ${para7}
            ${inputBox7}
            ${buttonBox7}
            <p id="quest7"></p>`;
document.getElementById("ex7").innerHTML = html7;
function myFunction7(){
    let age7 = document.getElementById("ageInput7").value;
    let risult7 = (age7 < 18) ? "Too young" : "Old enough";
    document.getElementById("quest7").innerHTML = "your age is: " +
    age7 + "<br>" + risult7 + " to vote.";
}