$(document).ready(function () {


    $('.filter').on('click', function () {
        $('.filter.active').removeClass('active');
        $(this).addClass('active');


        if ($(this).hasClass('filterAll')) {
            $('.gallery-item').fadeIn();
        }
        else if ($(this).hasClass('filterForest')) {
            $('.gallery-item:not(.forest)').fadeOut();
            $('.gallery-item.forest').fadeIn();
        }
        else if ($(this).hasClass('filterRoad')) {
            $('.gallery-item:not(.road)').fadeOut();
            $('.gallery-item.road').fadeIn();
        }
    });


    var xsection1 = $('#contact-us').offset().top;
    $('.contact-us').click(function () {
        $('html , body').animate({scrollTop: xsection1}, 2000);

    });
    var xsection2 = $('#home').offset().top;
    $('.home').click(function () {
        $('html , body').animate({scrollTop: xsection2}, 2000);

    });
    var xsection3 = $('#about-us').offset().top;
    $('.about-us').click(function () {
        $('html , body').animate({scrollTop: xsection3}, 2000);

    });
    var xsection4 = $('#teachers').offset().top;
    $('.teachers').click(function () {
        $('html , body').animate({scrollTop: xsection4}, 2000);

    });
    var xsection5 = $('#courses').offset().top;
    $('.courses').click(function () {
        $('html , body').animate({scrollTop: xsection5}, 2000);

    });
    var xsection6 = $('#gallery').offset().top;
    $('.gallery').click(function () {
        $('html , body').animate({scrollTop: xsection6}, 2000);

    });
});