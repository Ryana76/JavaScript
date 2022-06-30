function myDisplayer(some){
    document.getElementById("demo1").innerHTML = some;
}
let myPromise = new Promise(function(myResolve, myReject){
    let res = 0;

    // res = 5;
    if(res == 0){myResolve("OK!");}
    else{myReject("NO!");}
});

myPromise.then(
    function(value){myDisplayer(value);},
    function(error){myDisplayer(error);}
);


setTimeout(function (){myFunction("I Love You!!");}, 3000);
function myFunction(message){
    document.getElementById("demo2").innerHTML = message;
}


let myPromise2 = new Promise(function(myResolve2, myReject2){
    setTimeout(function(){myResolve2("I love you!!!!");}, 3000);
});
myPromise2.then(function(message){
    document.getElementById("demo3").innerHTML = message;
})
