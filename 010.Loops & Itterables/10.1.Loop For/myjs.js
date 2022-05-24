let FOR_HEADER_EX1 = "-Ex1-";
let FOR_TITLE_EX1 = "JavaScript For Loop";
const FOR_carArray_Ex1 = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
let FOR_TEXT_EX1 = "";
for (let index = 0; index < FOR_carArray_Ex1.length; index++) {
    FOR_TEXT_EX1 += FOR_carArray_Ex1[index] + "<br>";
}
let FOR_HTML_EX1 = `<h2>${FOR_HEADER_EX1}</h2>
                    <h3>${FOR_TITLE_EX1}</h3>
                    <p>${FOR_carArray_Ex1}</p>
                    <p>${FOR_TEXT_EX1}</p>`
document.getElementById("ex1").innerHTML = FOR_HTML_EX1;


let FOR_HEADER_EX2 = "-Ex2-";
let FOR_TITLE_EX2 = "JavaScript For Loop";
let FOR_TEXT_EX2 = "";
for(let index = 0; index < 5; index++){
    FOR_TEXT_EX2 += "The number is " + index + "<br>";  
}
let FOR_HTML_EX2 = `<h2>${FOR_HEADER_EX2}</h2>
                    <h3>${FOR_TITLE_EX2}</h3>
                    <p>${FOR_TEXT_EX2}</p>`
document.getElementById("ex2").innerHTML = FOR_HTML_EX2;