$(document).ready(function () {
    "use strict";
    if ($(window).width() <= 767) {
        // menu 
        var slide_wrp = ".side-menu-wrapper"; //Menu Wrapper
        var open_button = ".menu-open"; //Menu Open Button
        var close_button = ".menu-close"; //Menu Close Button
        var overlay = ".menu-overlay"; //Overlay

        //Initial menu position
        $(slide_wrp).hide().css({ "left": -$(slide_wrp).outerWidth() + 'px' }).delay(50).queue(function () { $(slide_wrp).show() });

        $(open_button).click(function (e) { //On menu open button click
            e.preventDefault();
            $(slide_wrp).css({ "left": "0px" }); //move menu left position to 0
            setTimeout(function () {
                $(slide_wrp).addClass('active'); //add active class
            }, 50);
            $(overlay).css({ "opacity": "1", "width": "100%" });
        });

        $(close_button).click(function (e) { //on menu close button click
            e.preventDefault();
            $(slide_wrp).css({ "left": -$(slide_wrp).outerWidth() + 'px' }); //hide menu by setting left position 
            setTimeout(function () {
                $(slide_wrp).removeClass('active'); // remove active class
            }, 50);
            $(overlay).css({ "opacity": "0", "width": "0" });
        });

        $(document).on('click', function (e) { //Hide menu when clicked outside menu area
            if (!e.target.closest(slide_wrp) && $(slide_wrp).hasClass("active")) { // check menu condition
                $(slide_wrp).css({ "left": -$(slide_wrp).outerWidth() + 'px' }).removeClass('active');
                $(overlay).css({ "opacity": "0", "width": "0" });
            }
        });
    }
    $('ul.dropdown-menu').on('click', function(event){
        event.stopPropagation();
    });
    // work-slider

    $('.banner-carousel').owlCarousel({
        items: 1,
        margin: 0,
        loop: true,
        dots: true,
        autoplayHoverPause: true,
        smartSpeed: 650,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1,
            },
            768: {
                items: 1,
            },
            992: {
                items: 1
            }
        }
    });
    AOS.init();
});