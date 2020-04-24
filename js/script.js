$(document).ready(function() {
    $("[data-target]").click(function(event) {
        var target = $(this).attr("data-target");
        var slide = $("[data-slide=" + target + "]");
        slide.slideToggle(800);
    });
});

$(document).ready(function() {
    if(location.hash) {
        var id = location.hash.slice(1); 
        var slide = $("[data-slide=" + id + "]");
        slide.slideToggle(800);
        $( "001" ).scroll
    }
});

function rollover(my_image) {
    my_image.src = 'image/008/AO_008_IMAGE2_b.png';
} 

function mouseaway(my_image) {
    my_image.src = "image/008/AO_008_IMAGE3.png";
            }

$( "#title" ).click(function() {
$( "#list" ).fadeToggle(800);
});

