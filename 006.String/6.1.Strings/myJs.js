let text1 = "John Doe";
document.getElementById("ex1").innerHTML = 
text1;



let text2 = "Volvo XC60";
let text3 = 'Volvo XC60';
document.getElementById("ex2").innerHTML =  
text2 + " " + text3;



let text4 = "It's alright";
let text5 = "He is called 'Johnny'";
let text6 = 'He is called "Johnny"';
document.getElementById("ex3").innerHTML =  
text4 + "<br>" + text5+ "<br>" + text6;



let text7 = "abcdefghijklmnopqrstuvwxyz" ;
let numOfText = text7.length;
document.getElementById("ex4").innerHTML = numOfText;



let text8 = "We are the so-called <em>\"Vikings\"</em> \
 from the north.";
document.getElementById("ex5").innerHTML = 
text8;



let text9 = 'It\'s alright.';
document.getElementById("ex6").innerHTML = 
text9;



let text10 = "The character \\ is called" +
" backslash.";
document.getElementById("ex7").innerHTML = 
text10;



let text11 = new String("John");
let text12 = "John";
let text13 = new String("John");
let risult1 = (text11 == text12);
let risult2 = (text11 === text12);
let risult3 = (text11 == text13);
let risult4 = (text11 === text13);
document.getElementById("ex8").innerHTML =
text11 + "(text1) is a " + typeof text11 + "<br>" +
text12 + "(text2) is a " + typeof text12 + "<br>" +
text13 + "(text3) is a " + typeof text13 + "<br><br>" +


"text1 == text2 (" + typeof text11 + " == " +
typeof text12 + ") ==> " + risult1 + "<br><br>" +


"text1 === text2 (" + typeof text11 + " === " +
typeof text12 + ") ==> " + risult2 + "<br><br>" +


"text1 == text3 (" + typeof text11 + " == " +
typeof text13 + ") ==> " + risult3 + "<br><br>" +


"text1 === text3 (" + typeof text11 + " === " +
typeof text13 + ") ==> " + risult3;