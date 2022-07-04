function validateForm(){
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Error!!");
        return false;
    }
}


function myFunction(){
    let num = document.forms["myf"]["myNumber"].value;
    if((num >= 1) && (num <= 10)){ alert("OK!"); return true}
    else{alert("Error!"); return false}
}