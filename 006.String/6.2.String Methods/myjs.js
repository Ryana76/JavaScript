// document.getElementById("num#").innerHTML =
// "-Ex#-";
// document.getElementById("header#").innerHTML =
// "###";
// document.getElementById("ex#").innerHTML =
// "###" +
// " " + ##;



let text13 = "Hello";
let myArray = text13.split("");
text13 = "";
document.getElementById("num13").innerHTML =
"-Ex13-";
document.getElementById("header13").innerHTML =
"JavaScript String Methods";
for (let index = 0; index < myArray.length; index++) {
    text13 += myArray[index] + "<br>";
}

document.getElementById("ex13").innerHTML =
"Using String.split(): <br>" +
text13;



let text12 = "a,b,c,d,e,f";
const myArray12 = text12.split(",")
document.getElementById("num12").innerHTML =
"-Ex12-";
document.getElementById("header12").innerHTML =
"JavaScript String Methods";
document.getElementById("ex12").innerHTML =
"Display the first array element, after a string split:<br>" +
"myArray[0] = " + myArray12[0];



let str11 = "Hello World";
let text11 = str11.toUpperCase();
document.getElementById("num11").innerHTML =
"-Ex11-";
document.getElementById("header11").innerHTML =
"JavaScript String Methods";
document.getElementById("ex11").innerHTML =
"The charAt() method returns the character at a given \
position in a string: <br>" + text11 + "<br>" +
"charAt(0) = " + text11.charAt(0) + 
"<br>charCodeAt(0) = " + text11.charCodeAt(0) +
"<br>text[0] = " + text11[0];



// let text10 = "5";
let num10 = 5;
let text10 = num10.toString();
document.getElementById("num10").innerHTML =
"-Ex10-";
document.getElementById("header10").innerHTML =
"JavaScript String Methods";
document.getElementById("ex10").innerHTML =
"The padStart() method pads a string with another string: <br>" +
text10 + "<br>" + text10.padStart(4, "*") ;



let text9_1= "Hello";
let text9_2= "World!";
document.getElementById("num9").innerHTML =
"-Ex9-";
document.getElementById("header9").innerHTML =
"JavaScript String Methods";
document.getElementById("ex9").innerHTML =
"The concat() method joins two or more strings:" +
"<br> text1 = Hello<br>text2 = World<br> concat() = " + 
text9_1.concat(" ", text9_2);




let text8 = "Hello World!"
document.getElementById("num8").innerHTML =
"-Ex8-";
document.getElementById("header8").innerHTML =
"JavaScript String Methods";
document.getElementById("ex8").innerHTML =
"Convert string to upper and lower case:" + "<br>" + text8 + "<br><br>" + 
"toUpperCase() = " + text8.toUpperCase() + "<br>" + 
".toLowerCase() =" + text8.toLowerCase();



let text1 = "abcdefghijklmnopqrstuvwxyz";
let numOfText = text1.length;
document.getElementById("num1").innerHTML =
"-Ex1-";
document.getElementById("header1").innerHTML =
"JavaScript String Properties";
document.getElementById("ex1").innerHTML =
"The length property returns the length of a string:" +
" " + numOfText;



let str2 = "Apple, Banana, Kiwi";
document.getElementById("num2").innerHTML = 
"-Ex2-";
document.getElementById("header2").innerHTML =
"The slice() method extract a part of a string and returns \
 the extracted parts in a new string:";
 document.getElementById("ex2").innerHTML =
 "str2 = " + str2 + "<br>" + "slice(7,13) = " +
 str2.slice(7, 13) + "." + "<br>" + "slice(-12, -6) = " +
 str2.slice(-12, -6) + "." + "<br>" + "slice(7) = " +
 str2.slice(7) + "." + "<br>" + "slice(-12) = " +
 str2.slice(-12) + ".";
 
 

 let part = str2.substring(7, 13);
document.getElementById("num3").innerHTML =
"-Ex3-";
document.getElementById("header3").innerHTML =
"JavaScript String Methods";
document.getElementById("ex3").innerHTML =
"The substring() method extract a part of a string" +
" and returns the extracted parts in a new string:" + 
"<br>" + "substring(7, 13) = " + part;



let text4 = "I'm study *** .";
document.getElementById("num4").innerHTML =
"-Ex4-";
document.getElementById("header4").innerHTML =
"Replace \"***\" with \"Information Technology\" in the paragraph below:";
document.getElementById("ex4").innerHTML =
text4;

function myFunction4(){
    document.getElementById("ex4").innerHTML =
    text4.replace("***", "Information Technology");
}



let text5 = "Please visit Microsoft and Microsoft!"
document.getElementById("num5").innerHTML =
"-Ex5-";
document.getElementById("header5").innerHTML =
"JavaScript String Methods";
document.getElementById("ex5").innerHTML =
"Replace \"Microsoft\" with \"W3Schools\" in the paragraph below:" +
"<br>" + text5;
function myFunction5(){
    document.getElementById("ex5").innerHTML =
    "Replace \"Microsoft\" with \"W3Schools\" in the paragraph below:" +
    "<br>" + text5.replace("Microsoft", "W3Schools")
}



let text6 = "Please visit Microsoft!"
document.getElementById("num6").innerHTML =
"-Ex6-";
document.getElementById("header6").innerHTML =
"JavaScript String Methods";
document.getElementById("ex6").innerHTML =
"Replace \"Microsoft\" with \"W3Schools\" in the paragraph below:" +
"<br>" + text6;
function myFunction6(){
    document.getElementById("ex6").innerHTML =
    "Replace \"Microsoft\" with \"W3Schools\" in the paragraph below:" +
    "<br>" + text6.replace(/MICROSOFT/i, "W3Schools")
}



let text7 = "Please visit Microsoft and Microsoft!"
document.getElementById("num7").innerHTML =
"-Ex7-";
document.getElementById("header7").innerHTML =
"JavaScript String Methods";
document.getElementById("ex7").innerHTML =
"Replace all occurrences of \"Microsoft\" with \"W3Schools\" in the paragraph below:" +
"<br>" + text7;
function myFunction7(){
    document.getElementById("ex7").innerHTML =
    "Replace all occurrences of \"Microsoft\" with \"W3Schools\" in the paragraph below:" +
    "<br>" + text7.replace(/Microsoft/g, "W3Schools")
}