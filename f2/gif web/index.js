$(document).ready(function() {
    var flag = false;
    setInterval(function() {
    flag = !flag;
    $("body").css("background", flag ? "red" : "green");
    $("body").css("background", flag ? "green" : "red");
    }, 1000);