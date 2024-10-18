(function ($) {
    "use strict";

    // Page loading animation
    $(window).on('load', function() {
        $('#js-preloader').addClass('loaded');
        if ($('.cover').length) {
            $('.cover').parallax({
                imageSrc: $('.cover').data('image'),
                zIndex: '1'
            });
        }
        $("#preloader").animate({ 'opacity': '0' }, 600, function() {
            setTimeout(function() {
                $("#preloader").css("visibility", "hidden").fadeOut();
            }, 300);
        });
    });

    // Scroll event for header background toggle
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        var box = $('.header-text').outerHeight();
        var header = $('header').outerHeight();

        if (scroll >= (box - header)) {
            $("header").addClass("background-header");
        } else {
            $("header").removeClass("background-header");
        }
    });

    // Isotope filtering
    var $grid = $(".grid").isotope({
        itemSelector: ".all",
        percentPosition: true,
        masonry: {
            columnWidth: ".all"
        }
    });

    $('.filters ul').on('click', 'li', function() {
        $('.filters ul li').removeClass('active');
        $(this).addClass('active');
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });

    // Owl Carousel initialization
    $('.owl-banner').owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        nav: true,
        autoplay: true,
        margin: 30,
        responsive: {
            0: { items: 1 },
            600: { items: 1 },
            1000: { items: 1 }
        }
    });

    $('.owl-features, .owl-collection').owlCarousel({
        items: 3,
        loop: true,
        dots: false,
        nav: true,
        autoplay: true,
        margin: 30,
        responsive: {
            0: { items: 1 },
            800: { items: 2 },
            1000: { items: 3 },
            1800: { items: 4 } // For .owl-features only
        }
    });

    // Menu Dropdown Toggle
    $('.menu-trigger').on('click', function() {
        $(this).toggleClass('active');
        $('.header-area .nav').slideToggle(200);
    });

    // Smooth scrolling and updating active menu item
    $('.scroll-to-section a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = $(this.hash);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 79
            }, 700, 'swing');
        }
    });

   

    // Window resize reload logic
    var width = $(window).width();
    $(window).on('resize', function() {
        if ((width > 992 && $(window).width() < 992) || (width < 992 && $(window).width() > 992)) {
            location.reload();
        }
    });

    // Dropdown Menu Handling
    const dropdownOpener = $('.main-nav ul.nav .has-sub > a');
    dropdownOpener.on('tap click', function(e) {
        e.preventDefault();
        var parentItem = $(this).parent('li');
        var siblingItems = parentItem.siblings('.has-sub');

        if (parentItem.hasClass('is-open-sub')) {
            parentItem.removeClass('is-open-sub').find('.sub-menu').slideUp(250);
        } else {
            parentItem.addClass('is-open-sub').find('.sub-menu').slideDown(250);
            siblingItems.removeClass('is-open-sub').find('.sub-menu').slideUp(250);
        }
    });
})(window.jQuery);
