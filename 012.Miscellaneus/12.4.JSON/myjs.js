let text = '{"employees":[' +
    '{"firstName":"John", "lastName":"Doe"},' +
    '{"firstName":"Anna", "lastName":"Smit"},' +
    '{"firstName":"Peter", "lastName":"Jones"}]}';
const obj = JSON.parse(text);
document.getElementById("demo1").innerHTML = 
obj.employees[1].firstName + " " + obj.employees[1].lastName;