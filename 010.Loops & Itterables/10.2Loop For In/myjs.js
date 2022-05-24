let FOR_IN_HEADER_EX1 = "-Ex1-";
let FOR_IN_TITLE_EX1 = "JavaScript For In Loop";
let FOR_IN_PARA_EX1 = "The for in statement loops through \
the properties of an object:";
const FOR_IN_PERSON_1_EX1 = {FIRST_NAME:"Johnny", LAST_NAME:"Doe", AGE:"25"};
let FOR_IN_TEXT_EX1 = "";
for(let ITEM in FOR_IN_PERSON_1_EX1){
    FOR_IN_TEXT_EX1 += FOR_IN_PERSON_1_EX1[ITEM] + " ";
}
let FOR_IN_HTML_EX1 = `<h2>${FOR_IN_HEADER_EX1}</h2>
                       <h3>${FOR_IN_TITLE_EX1}</h3>
                       <p>${FOR_IN_PARA_EX1}</p>
                       <p>${FOR_IN_TEXT_EX1}</p>`;
document.getElementById("ex1").innerHTML = FOR_IN_HTML_EX1;


let FOR_IN_HEADER_EX2 = "-Ex2-";
let FOR_IN_TITLE_EX2 = "JavaScript For In Loop";
let FOR_IN_PARA_EX2 = "The for in statement loops through \
the properties of an object:";
const FOR_IN_myArray_EX2 = [45, 4, 9, 16, 25];
let FOR_IN_TEXT_EX2 = "";
for(let item in FOR_IN_myArray_EX2){
    FOR_IN_TEXT_EX2 += FOR_IN_myArray_EX2[item] + " ";
}
let FOR_IN_HTML_EX2 = `<h2>${FOR_IN_HEADER_EX2}</h2>
                       <h3>${FOR_IN_TITLE_EX2}</h3>
                       <p>${FOR_IN_PARA_EX2}</p>
                       <p>${FOR_IN_TEXT_EX2}</p>`;
document.getElementById("ex2").innerHTML = FOR_IN_HTML_EX2;




let FOR_IN_HEADER_EX3 = "-Ex3-";
let FOR_IN_TITLE_EX3 = "JavaScript For In Loop";
let FOR_IN_PARA_EX3 = "Calls a function once for each array element.";

const FOR_IN_NUMBER_EX3 = [45, 4, 9, 16, 25];
let FOR_IN_TEXT_EX3 = "";
FOR_IN_NUMBER_EX3.forEach(myFunction);

let FOR_IN_HTML_EX3 = `<h2>${FOR_IN_HEADER_EX3}</h2>
                       <h3>${FOR_IN_TITLE_EX3}</h3>
                       <p>${FOR_IN_PARA_EX3}</p>

                       <p>${FOR_IN_TEXT_EX3}</p>`;
document.getElementById("ex3").innerHTML = FOR_IN_HTML_EX3;

function myFunction(value, index, array){
    FOR_IN_TEXT_EX3 += value + "<br>";
}
function getLanguage(){
    FOR_IN_PERSON_1_EX1.FIRST_NAME
}