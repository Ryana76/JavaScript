function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("demo0").innerHTML = this.responseText;
    }
    xhttp.open("GET", "ajax_info.txt");
    xhttp.send();
}




function loadDoc1(){
    const xhttp1 = new XMLHttpRequest();
    xhttp1.onload = function() {
        document.getElementById("demo1").innerHTML =
        this.responseText;
    }
    xhttp1.open("GET", "ajax_info.txt");
    xhttp1.send();
}

/*
readyState	
Holds the status of the XMLHttpRequest.
0: request not initialized
1: server connection established
2: request received
3: processing request
4: request finished and response is ready

status	
200: "OK"
403: "Forbidden"
404: "Page not found"
For a complete list go to the 
*/


function loadDoc2() {
    const xhttp2 = new XMLHttpRequest();
    xhttp2.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo2").innerHTML = 
            this.responseText;
        }
    }
    xhttp2.open("GET", "ajax_info.txt");
    xhttp2.send();
}


function loadDoc3() {
    const xhttp3 = new XMLHttpRequest();
    xhttp3.onload = function () {
        document.getElementById("demo3").innerHTML = 
        this.responseText;
    }
    xhttp3.open("GET", "ajax_info.txt", true);
    xhttp3.send();
}

function loadDoc4(){
    const xhttp4 = new XMLHttpRequest();
    xhttp4.onload = function () {
        document.getElementById("demo4").innerHTML = 
        this.responseText;
    }
    xhttp4.open("GET", "ajax_info.txt", true);
    xhttp4.send();
}

function loadDoc5(url, xFunction) {
    const xhttp5 = new XMLHttpRequest();
    xhttp5.onload = function () {xFunction(this);}
    xhttp5.open("GET", url, true);
    xhttp5.send();
}
function myCallBack5(xhttp5) {
    document.getElementById("demo5").innerHTML = 
    xhttp5.responseText;
}



function loadDoc6() {
    const xhttp6 = new XMLHttpRequest();
    xhttp6.onload = function () {
        document.getElementById("demo6").innerHTML =
        this.getAllResponseHeaders();
    }
    xhttp6.open("GET", "ajax_info.txt", true);
    xhttp6.send();
}