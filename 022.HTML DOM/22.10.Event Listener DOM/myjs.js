document.getElementById("myBtn").addEventListener("click",displayDate);

function displayDate(){
    document.getElementById("demo1").innerHTML = Date();
}


document.getElementById("myBtn2").addEventListener("click", function (){alert("Hello!!!!")});

document.getElementById("body").style.backgroundColor = "gray";
document.getElementById("body").style.color = "white";
document.getElementById("body").style.height = 3000 + "px";


document.getElementById("myBtn3").addEventListener("click", displayMessage);

function displayMessage(){
    alert("hellooooooo")
}


document.getElementById("myBtn4").addEventListener("click", function(){alert("Hello1")});
document.getElementById("myBtn4").addEventListener("click", function(){alert("hello2")});


document.getElementById("myBtn5").addEventListener("mouseover", function(){
    document.getElementById("demo5").innerHTML += "Moused over!<br>";
})
document.getElementById("myBtn5").addEventListener("click", function(){
    document.getElementById("demo5").innerHTML += "Clicked!<br>";
})
document.getElementById("myBtn5").addEventListener("mouseout", function(){
    document.getElementById("demo5").innerHTML += "Moused out!<br>";
})


window.addEventListener("resize", function(){
    document.getElementById("demo6").innerHTML = Math.random();
});



document.getElementById("myDiv1").addEventListener("click", function(){
    alert("orange1");
}, false);
document.getElementById("myP1").addEventListener("click", function(){
    alert("white1");
}, false);
document.getElementById("myDiv2").addEventListener("click", function(){
    alert("orange2");
}, true);
document.getElementById("myP2").addEventListener("click", function(){
    alert("white2");
}, true);



document.getElementById("ex8").addEventListener("mousemove", myFunction);
function myFunction(){
    document.getElementById("demo8").innerHTML = Math.random();
}
document.getElementById("myBtn8").addEventListener("click", removeHandeler)
function removeHandeler(){
    document.getElementById("ex8").removeEventListener("mousemove", myFunction);
}