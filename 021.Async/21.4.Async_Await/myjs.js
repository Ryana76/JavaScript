function myDisplayer1(message){
    document.getElementById("demo1").innerHTML = message;
}
async function myFunction1(){
    return "Hello";
}
myFunction1().then(
    function(message){myDisplayer1(message);}
);


async function myDisplayer2(){
    let myPromise2 = new Promise(function(resolve){
        setTimeout(function(){resolve("I Love You!!!");}, 3000)
    });
    document.getElementById("demo2").innerHTML = await myPromise2;
}
myDisplayer2();