import { name1, age1 } from "./person.js";
let text = "My name is " + name1 + "and i have " + age1;
document.getElementById("demo").innerHTML = text;

import { name2, age2 } from "./person.js";
let text2 = name2 + " " + age2;
document.getElementById("demo2").innerHTML = text2;

import message from "./message.js";
document.getElementById("demo3").innerHTML = message();
