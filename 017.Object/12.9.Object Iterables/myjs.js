let text1 = "";
for(const key1 of "W3Schools"){
    text1 += key1;
}
document.getElementById("ex1").innerHTML = text1;

let text2 = "";
const arr2 = [1,2,3,5,9,10];
for(const key2 of arr2){
    text2 += key2 + ", ";
}
document.getElementById("ex2").innerHTML = text2;




function myNumbers(){
    let n = 0;
    return {
        next: function(){
            n += 10;
            return {value: n, done: false};
        }
    };
}    
const n = myNumbers();
function myFunction(){
    document.getElementById("ex3").innerHTML = n.next().value;
}



myNumbers4 = {};
myNumbers4[Symbol.iterator] = function() {
    let n4 = 0;
    done = false;
    return {
        next() {
            n4 += 10;
            if(n4 == 100) {done = true;}
            return {value: n4, done:done};
        } 
    };
}

let text4 = "";
for(const key4 of myNumbers4){
    text4 += key4 + "<br>";
}
document.getElementById("ex4").innerHTML = text4;
