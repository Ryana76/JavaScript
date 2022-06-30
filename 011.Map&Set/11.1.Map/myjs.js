const fruits = new Map([
    ["Apples", 200],
    ["Oranges", 300],
    ["bananas", 500]
]);
document.getElementById("demo1").innerHTML = fruits.get("Apples");
fruits.set("Kiwis", 600);
document.getElementById("demo2").innerHTML = fruits.get("Kiwis");
fruits.set("Apples", 250);
document.getElementById("demo3").innerHTML = fruits.get("Apples");
let sizeOfFruits = fruits.size;
document.getElementById("demo4").innerHTML = sizeOfFruits;
fruits.delete("Apples");
let sizeOfFruits2 = fruits.size;
document.getElementById("demo5").innerHTML = sizeOfFruits2;
document.getElementById("demo6").innerHTML = fruits.has("Apples");
let text = "<ul>";
fruits.forEach((key, value) => {
    text +="<li><strong>" + key + " = " + value + "</strong></li>";
});
text += "</ul>";
document.getElementById("demo6").innerHTML = text;
let text2 = "<ul>";
for (const index of fruits.entries()) {
    text2 += "<li>" + index.join(" = ") + "</li>";
}
text2 += "</ul>";
document.getElementById("demo7").innerHTML = text2;
