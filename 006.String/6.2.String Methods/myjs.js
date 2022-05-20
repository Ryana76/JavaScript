// document.getElementById("num#").innerHTML =
// "-Ex#-";
// document.getElementById("header#").innerHTML =
// "###";
// document.getElementById("ex#").innerHTML =
// "###" +
// " " + ##;






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