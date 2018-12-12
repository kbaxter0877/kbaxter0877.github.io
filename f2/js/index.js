
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























