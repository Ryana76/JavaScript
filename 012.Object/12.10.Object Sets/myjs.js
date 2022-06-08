const letters1 = new Set([1,2,3]);
document.getElementById("ex1").innerHTML = letters1.size;



const letters2 = new Set();
letters2.add("a");
letters2.add("b");
letters2.add("c");
letters2.add("d");
document.getElementById("ex2").innerHTML = 
letters2.size;




const letters3 = new Set();
const a = "a";
const b = "b";
const c = "c";
const d = "d";
const e = "e";
letters3.add(a);
letters3.add(b);
letters3.add(c);
letters3.add(d);
letters3.add(e);
document.getElementById("ex3").innerHTML = 
letters3.size;



letters1.add(a);
letters1.add(c);
document.getElementById("ex4").innerHTML = 
letters1.size;


letters1.add(c);
letters1.add(c);
letters1.add(c);
letters1.add(c);
letters1.add(a);
letters1.add(a);
letters1.add(a);
letters1.add(b);
document.getElementById("ex5").innerHTML = 
letters1.size;





const letters6 = new Set(["a", "b", "c"]);
let text6 = "";
letters6.forEach(function(value) {
    text6 += value + ", ";
});
letters1.forEach(function(value) {
    text6 += value + ", ";
});
document.getElementById("ex6").innerHTML = text6 ;



let text7 = "";
for (const key6 of letters6.values()) {
    text7 += key6 + ", ";
}
document.getElementById("ex7").innerHTML = text7;




const iteratot8 = letters1.entries();
let text8 = "";
for (const entry of iteratot8) {
    text8 += entry + ", ";
}
document.getElementById("ex8").innerHTML = text8;
