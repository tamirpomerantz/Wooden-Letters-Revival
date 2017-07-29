$(document).ready(function () {

    $('.wl-carousel').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        prevArrow: '<div class="slick-prev wl-arrow"></div>',
        nextArrow: '<div class="slick-next wl-arrow"></div>'
        //   adaptiveHeight: true
    });

    
    $( ".wl-download" ).on( "click", function(e) {
    // console.log();
     e.preventDefault();  //stop the browser from following
    window.location.href = $(".slick-active").attr('data-link');

});


});