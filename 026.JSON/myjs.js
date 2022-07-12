const text0 = '{"name": "Aryana", "age": 25, "city": "Roma"}';
const person0 = JSON.parse(text0);
document.getElementById("demo0").innerHTML = 
person0.name + ", " + person0.age;


const text1 = '["a", "b", "c", "d"]';
const myObj1 = JSON.parse(text1);
document.getElementById("demo1").innerHTML = myObj1[2];


const text2 = '{"name": "Aryana", "birthday": "1997-11-06", "city": "Roma"}';
const person2 = JSON.parse(text2, function (key, value) {
    if (key == "birthday") {
        return new Date(value);
    }else{
        return value;
    }
});
document.getElementById("demo2").innerHTML = person2.name + ", " + person2.birthday;


const text3 = {"name":"John","age":30,"city":"New York"};
const myObj3 = JSON.stringify(text3);
// const myObj3 = JSON.stringify(text3["name"]);
document.getElementById("demo3").innerHTML = myObj3;



const arr4 = ["John","Peter","Sally","Jane"];
const myJSON4 = JSON.stringify(arr4);
document.getElementById("demo4").innerHTML = myJSON4;


const myJSON5 = '{"name":"John", "age":30, "car":["Fiat", "BMW", "500"]}';
const myObj5 = JSON.parse(myJSON5);
let text5 = "";
for (const key in myObj5) {
    text5 += key + ", ";
    if(key == "car"){
            text5 += "<br>" + myObj5.car;
    }
}
for (const key in myObj5.car) {
    text5 += "<br>" + myObj5.car[key]
}
document.getElementById("demo5").innerHTML = text5;


const xhttp6 = new XMLHttpRequest();
xhttp6.onload = function () {
    const myObj6 = JSON.parse(this.responseText);
    let text6 = "";
    for (const key in myObj6) {
        text6 += key + ": " + myObj6[key] + "<br>";
    }
    document.getElementById("demo6").innerHTML = text6;
}
xhttp6.open("GET", "myjson.json", true);
xhttp6.send();