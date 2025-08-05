
$('.owl-screen').owlCarousel({

    loop: true,
    margin: 30,
    dots: true,
    center: true,
    stagePadding: 50,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }

})


$('.owl-comments').owlCarousel({

    loop: true,
    margin: 40,
    dots: true,
    stagePadding: 30,
    autoHeight: false,
    nav: true,
    navText: [
        '<i class="fa-solid fa-chevron-left"></i>',
        '<i class="fa-solid fa-chevron-right"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1.5
        },
        1000: {
            items: 2.5
        }
    }

})

function unifyItemHeights() {
    let maxHeight = 0;
    $('.comments .owl-carousel .owl-item .item').css('height', 'auto').each(function () {
        maxHeight = Math.max(maxHeight, $(this).outerHeight());
    });

    $('.comments .owl-carousel .owl-item .item').css('height', maxHeight + 'px');
}

// بعد ما الصور والداتا تتحمل بالكامل
$(window).on('load resize', function () {
    setTimeout(unifyItemHeights, 500); // تأخير بسيط للتأكد إن كل حاجة اتحملت
});
