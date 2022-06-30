const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
document.getElementById("demo1").innerHTML = fruits.join("<br>");

fruits.reverse();
document.getElementById("demo2").innerHTML = fruits.join("<br>");



const points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo3_1").innerHTML = points.join("\t");
points.sort(function(a,b){return(a-b)});
document.getElementById("demo3_2").innerHTML = points.join("\t");


const points2 = [40, 100, 1, 5, 25, 10];
document.getElementById("demo4_1").innerHTML = points2.join("\t");
points2.sort(function(a,b){return(b-a)});
document.getElementById("demo4_2").innerHTML = points2.join("\t");


const points5 = [40, 100, 1, 5, 25, 10];
document.getElementById("demo5").innerHTML = points5;
function myAlphabetically(){
    points5.sort();
    document.getElementById("demo5").innerHTML = points5;
}
function myNumerically(){
    points5.sort(function(a,b){return(a-b)});
    document.getElementById("demo5").innerHTML = points5;
}
function myRandom(){
    points5.sort(function(a,b){return 0.5 - Math.random()});
    document.getElementById("demo5").innerHTML = points5;
}



const points6 = [40, 100, 1, 5, 25, 10];
document.getElementById("demo6_1").innerHTML = myArrayMax(points6); 
document.getElementById("demo6_2").innerHTML = myArrayMin(points6); 
function myArrayMax(arr){
    return Math.max.apply(null, arr);
}
function myArrayMin(arr){
    return Math.min.apply(null, arr);
}




const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
];
var text = 
`<pre>cars = [<br>\t{type:"Volvo", year:2016},<br><br>\t{type:"Saab", year:2001},<br><br>\t{type:"BMW", year:2010}<br><br>\t]</pre>`;
document.getElementById("demo7").innerHTML = text; 
function mysortfunction(){
    var text = "<ul>";
    cars.sort(function(a,b){return (a.year - b.year)});
    for (let index = 0; index < cars.length; index++) {
        text += "<li><strong>" + cars[index].year + "\t" + cars[index].type + "</strong></li>"
        document.getElementById("demo7").innerHTML = text; 
    }
    text += "</ul>";
}

 