
function annoy(){
    alert("runnings")
    var fname = prompt('tell me your name');

    document.getElementById("annoy").innerHTML = "I am annoyed";
}


function mark_present()
{
    alert("running");
    var cadet_name = $('#cadet_name').val();
    alert(cadet_name+ " is here!");
    $('#present_cadets').append("<ul id = 'cadets_list'></ul>");
    $('#cadets_list').append("<li>"+cadet_name+"</lu>");
}

$(document).ready(function() {
var flag = false;
setInterval(function() {
flag = !flag;
$("body").css("background", flag ? "red" : "green");
$("body").css("background", flag ? "green" : "red");
}, 1000);

});





















