let text1 = "";
let index = 0;
while(index < 10){
    text1 += "<br>The number is " + index;
    index++;
}
document.getElementById("ex1").innerHTML = text1;


let index2 = 0;
let text2 = "";
do{
    text2 += "<br>The number is " + index2;
    index2++;
}while(index2 < 10);
document.getElementById("ex2").innerHTML = text2;