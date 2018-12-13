
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

var audio = new Audio('first-noel-r&b.mp3');
audio.play();




 
<h1>HTML 5 Audio Player</h1>

<div class="container gradient">
     
    <img class="cover" src="images/cover.jpg" alt="">

    <div class="player gradient">

        <a class="button gradient" id="play" href="" title=""></a>
        <a class="button gradient" id="mute" href="" title=""></a>
     
            <input type="range" id="seek" value="0" max=""/>
 
        <a class="button gradient" id="close" href="" title=""></a>
         
    </div> <!-- / player -->
     
</div> <!-- / Container-->
















