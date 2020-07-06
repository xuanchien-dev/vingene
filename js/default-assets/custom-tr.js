
$(document).ready(function () {
    $(".price-tabs1").click(function () {
        $(".price-tabs-show1").fadeToggle("slow");
    });
    $(".price-tabs2").click(function () {
        $(".price-tabs-show2").fadeToggle("slow");
    });
    $(".price-tabs3").click(function () {
        $(".price-tabs-show3").fadeToggle("slow");
    });



});
/*
$('.dc-top2').click(function(event) {
    event.preventDefault();
    $('.phieuketqua').css('display', 'block');
});*/

$('.button-close').click(function(event) {
    event.preventDefault();
    $('.phieuketqua').css('display', 'none');
});


$('.button-close').click(function(event) {
    event.preventDefault();
    $('#dangkidichvu').css('display', 'none');
});
















