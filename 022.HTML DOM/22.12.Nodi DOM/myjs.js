const para = document.createElement("h2");
const node = document.createTextNode("new paraghraph");
para.appendChild(node);
const element = document.getElementById("div0");
element.appendChild(para);


const para1 = document.createElement("h3");
const node1 = document.createTextNode("New Paragraph")
para1.appendChild(node1);

const element1 = document.getElementById("div1");
const child = document.getElementById("p11");
element1.insertBefore(para1, child);


document.getElementById("myBtn20").addEventListener("click", function(){
    let textBtn = document.getElementById("myBtn20");
    textBtn.innerHTML = "Removed";
    textBtn.style.backgroundColor = "green"
    document.getElementById("p22").remove();
})

document.getElementById("myBtn30").addEventListener("click", function(){
    let textBtn = document.getElementById("myBtn30");
    textBtn.style.backgroundColor = "green";
    textBtn.innerHTML = "Removed!!!!";
    document.getElementById("p31").remove();
})

const parent4 = document.getElementById("div4");
const child4 = document.getElementById("p41");
const newChild4 = document.createElement("p");
const textNewChild4 = document.createTextNode("new Paragraph");
newChild4.appendChild(textNewChild4);
parent4.replaceChildren(newChild4, child4);