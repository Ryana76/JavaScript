// document.getElementById("num#").innerHTML =
// "-Ex#-";
// document.getElementById("header#").innerHTML =
// "###";
// document.getElementById("ex#").innerHTML =
// " <br>" +
// " " + ;



let text4 = "Hello world, welcome to the universe.";
document.getElementById("num4").innerHTML =
"-Ex4-";
document.getElementById("header4").innerHTML =
"JavaScript String Search";
document.getElementById("ex4").innerHTML =
"Check if a string starts with \"Hello\": <br>" +
"text: " + text4 + "<br><br>" + 
"startsWith(\"Hello\") = " + text4.startsWith("Hello") + "<br>" +
"startsWith(\"world\", 6) = " + text4.startsWith("world", 6) + "<br>" +
"startsWith(\"world\", 5) = " + text4.startsWith("wolrd", 5);



let text3 = "Hello world, welcome to the universe.";
document.getElementById("num3").innerHTML =
"-Ex3-";
document.getElementById("header3").innerHTML =
"JavaScript String Search";
document.getElementById("ex3").innerHTML =
"Check if a string includes \"world\": <br>" +
"text: " + text3 + "<br><br>" + text3.includes("world") +
"The includes(\"Hello\") method is not supported in Internet Explorer." +
"<br><br>" +
"Controlla se una stringa include \"mondo\", iniziando la\
 ricerca dalla posizione 12: " + text3.includes("world", 12);



let text2 = "The rain in SPAIN stays mainly in the plain";
document.getElementById("num2").innerHTML =
"-Ex2-";
document.getElementById("header2").innerHTML =
"JavaScript String Search";
document.getElementById("ex2").innerHTML =
"Search a string for \"ain\": <br>" +
" text: The rain in SPAIN stays mainly in the plain <br>" +
text2.match(/ain/g) +
"<br><br>" +
"Perform a global, case-insensitive search for \"ain\": <br>" +
" text: The rain in SPAIN stays mainly in the plain <br>" +
text2.match(/ain/gi);



let text1 = "please locate where 'locate' occurs!";
document.getElementById("num1").innerHTML =
"-Ex1-";
document.getElementById("header1").innerHTML =
"JavaScript String Methods";
document.getElementById("ex1").innerHTML =
"The indexOf() method returns the position of the\
first occurrence of a specified text: <br>" +
"indexOf(\"locate\") = " + text1.indexOf("locate") +
"<br><br>"+
"The lastIndexOf() method returns the position of the\
last occurrence of a specified text: <br>" + 
"lastIndexOf(\"locate\") = " + text1.lastIndexOf("locate") +
"<br><br>"+
"Both indexOf(), and lastIndexOf() return -1 if the text\
is not found: <br>" + 
"lastIndexOf(\"Johnny\") = " + text1.lastIndexOf("johnny") +
"<br><br>"+
"The indexOf() method accepts a second parameter as the\
starting position for the search: <br>" + 
"indexOf(\"locate\") = " + text1.indexOf("locate", 13) +
"<br><br>"+
"The lastIndexOf() method accepts a second parameter as the\
 starting position for the search.Remember that the lastIndexOf()\
 method searches backwards, so position 15 means start the search \
 at position 15, and search to the beginning.<br>" + 
"lastIndexOf(\"locate\") = " + text1.lastIndexOf("locate", 13) +
"<br><br>"+
"The search() method returns the position of the first occurrence\
of a specified text in a string:" + 
"search(\"locate\") = " + text1.search("locate");