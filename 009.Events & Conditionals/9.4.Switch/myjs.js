let switch_header_Ex1 = "-Ex1-";
let switch_title_Ex1 = "JavaScript switch";
let switch_para_Ex1 = "Today is ";
let switch_day_Ex1;
switch (new Date().getDay()) {
    case 0:
        switch_day_Ex1 = "Sunday";
        break;
    case 1:
        switch_day_Ex1 = "Monday";
        break;
    case 2:
        switch_day_Ex1 = "Tuesday";
        break;
    case 3:
        switch_day_Ex1 = "Wednesday";
        break;    
    case 4:
        switch_day_Ex1 = "Thursday";
        break;
    case 5:
        switch_day_Ex1 = "Friday";
        break;    
    case 6:
        switch_day_Ex1 = "Saturday";
        break;
}
let switch_numOfDay_Ex1 = new Date().getDay();
let switch_html_Ex1 = `<h2>${switch_header_Ex1}</h2>
                       <h3>${switch_title_Ex1}</h3>
                       <p>${switch_para_Ex1}
                          ${switch_day_Ex1}</p>`;
document.getElementById("ex1").innerHTML = switch_html_Ex1 +
"<br>" + switch_numOfDay_Ex1; 



let switch_header_Ex2 = "-Ex2-";
let switch_title_Ex2 = "JavaScript switch";
let switch_para_Ex2 = "Today is ";
let switch_day_Ex2;
switch(new Date().getDay()){
    default:
        switch_day_Ex2 = "Looking forward to the Weekend";
        break;
    case 0:
        switch_day_Ex2 = "Sunday";
        break;
    case 6:
        switch_day_Ex2 = "Saturday";
}
let switch_html_Ex2 = `<h2>${switch_header_Ex2}</h2>
                       <h3>${switch_title_Ex2}</h3>
                       <p>${switch_para_Ex2}
                          ${switch_day_Ex2}</p>`;
document.getElementById("ex2").innerHTML = switch_html_Ex2; 



let switch_header_Ex3 = "-Ex3-";
let switch_title_Ex3 = "JavaScript switch";
let switch_para_Ex3 = "Today is ";
let switch_day_Ex3;
switch(new Date().getDay()){
    default:
        switch_day_Ex3 = "Looking forward to the Weekend";
        break;
    case 4:
    case 5:
        switch_day_Ex3 = "Soon it is Weekend";
        break;
    case 0:
    case 6:
        switch_day_Ex3 = "It is Weekend";
        break;
}
let switch_html_Ex3 = `<h2>${switch_header_Ex3}</h2>
                       <h3>${switch_title_Ex3}</h3>
                       <p>${switch_para_Ex3}
                          ${switch_day_Ex3}</p>`;
document.getElementById("ex3").innerHTML = switch_html_Ex3;
