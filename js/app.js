$(document).ready(function (e) {

    //Setup carousel delay
    $('#quote-carousel').carousel({
        pause: true,
        interval: 5000,
    });

    //Setup scroll to fix
    $('#test').scrollToFixed();
    $('.res-nav_click').click(function () {
        $('.main-nav').slideToggle();
        return false

    });

    //stup magnific popup
    $('.Portfolio-box').magnificPopup({
        delegate: 'a',
        type: 'image'
    });

});


//setup wow js animation
wow = new WOW({
    animateClass: 'animated',
    offset: 100
});
wow.init();

//setup nav scroll animation
$(window).load(function () {

    $('.main-nav li a, .servicelink').bind('click', function (event) {
        var $anchor = $(this);

        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 102
        }, 1500, 'easeInOutExpo');
        /*
        if you don't want to use the easing effects:
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000);
        */
        if ($(window).width() < 768) {
            $('.main-nav').hide();
        }
        event.preventDefault();
    });
})


//setup portfolio stacks animation
$(window).load(function () {


    var $container = $('.portfolioContainer'),
        $body = $('body'),
        colW = 375,
        columns = null;


    $container.isotope({
        // disable window resizing
        resizable: true,
        masonry: {
            columnWidth: colW
        }
    });

    $(window).smartresize(function () {
        // check if columns has changed
        var currentColumns = Math.floor(($body.width() - 30) / colW);
        if (currentColumns !== columns) {
            // set new column count
            columns = currentColumns;
            // apply width to container manually, then trigger relayout
            $container.width(columns * colW)
                .isotope('reLayout');
        }

    }).smartresize(); // trigger resize to set container width
    $('.portfolioFilter a').click(function () {
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');

        var selector = $(this).attr('data-filter');
        $container.isotope({

            filter: selector,
        });
        return false;
    });

});