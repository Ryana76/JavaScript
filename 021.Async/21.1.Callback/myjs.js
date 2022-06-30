function myDisplayer(some){
    document.getElementById("demo").innerHTML = some;
}
function myFirst(){
    myDisplayer("Hello");
}
function mySecond(){
    myDisplayer("Goodbye");
}
// myFirst();
// mySecond();

mySecond();
myFirst();


function mydisplayer2(some){
    document.getElementById("demo2").innerHTML = some;
}

function myCalcolatur(num1, num2){
    let sum = num1 + num2;
    // return sum;
    mydisplayer2(sum);
}
myCalcolatur(5, 6);


function myDisplayer3(some3){
    document.getElementById("demo3").innerHTML = some3;
}
function myCalcolatur3(num1, num2, myCallback){
    let sum = num1 + num2;
    myCallback(sum);
}
myCalcolatur3(5, 6 , myDisplayer3);