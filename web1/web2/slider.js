$(document).ready(function(){
    $(".slider").slick({
        arrows: true,
        dots: true,
        infinite: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>', 

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1
                }
            }
        ],

        slidesToScroll: 3,
        slidesToShow: 3
    });
});
