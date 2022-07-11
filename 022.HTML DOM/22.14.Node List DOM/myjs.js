const myNodeList = document.querySelectorAll("p");
document.getElementById("demo0").innerHTML = 
"The innerHTML of the second paragraph is:" + 
myNodeList[1].innerHTML;
document.getElementById("demo1").innerHTML = 
myNodeList.length;
for (let index = 0; index < myNodeList.length; index++) {
    myNodeList[index].style.color = "red";
    
}