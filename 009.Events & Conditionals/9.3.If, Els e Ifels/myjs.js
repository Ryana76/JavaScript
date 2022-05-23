let header1 = "-Ex1-";
let title1 = "JavaScript if";
let para1 = "Display \"Good day!\" if the hour is less than 18:00:";
let result1; 
myFunction(result1);
let html1 = `<h2>${header1}</h2>
             <h3>${title1}</h3>
             <p>${para1}</p>
             <p>${result1}</p>`;

document.getElementById("ex1").innerHTML = html1;
function myFunction(){  
    let dateTime1 = new Date().getHours(); 
    if (dateTime1 < 10) {
        result1 ="Good morning!";
    }
    else if(dateTime1 < 18){
        result1 = "good day!"
    }
    else{
        result1 = "Good Evening"
    }
}