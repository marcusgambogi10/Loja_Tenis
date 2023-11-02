$(document).ready(function(){
    $('#carrossel-imagens').slick({
        arrows: false,
        dots: false,
        infinite: true,
        speed: 800,
        fade: true,
        cssEase: 'linear',
        autoplay: true
    })

    $('#todos-produtos').slick({

        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
            breakpoint: 1112,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            }
            },
        {
            breakpoint: 1023,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2
            }
        },
        {
            breakpoint: 640,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
        ]
    });
})