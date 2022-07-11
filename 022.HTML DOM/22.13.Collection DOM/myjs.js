const myCollection = document.getElementsByTagName("p");
document.getElementById("demo0").innerHTML = "new elem is : " + myCollection[1].innerHTML;
document.getElementById("demo1").innerHTML = "lent is:" + myCollection.length;
for (let index = 0; index < myCollection.length; index++) {
    myCollection[index].style.color = "red";
    
}