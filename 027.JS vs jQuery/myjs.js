// ----------------- JavaScript / jQuery DOM Selectors -----------------
$(document).ready(function() {
    var myElements = $("#id01");
    $("#demo").text("The text from the id01 paragraph is: " + myElements[0].innerHTML);
  });