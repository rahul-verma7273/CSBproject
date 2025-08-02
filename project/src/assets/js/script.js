 /* 2. JQUERY STICKY MENU */
 $(".sticky-menu").sticky({
    topSpacing: 0
});
/* 3. MENU JS */
$('nav#dropdown').meanmenu({
    meanMenuContainer: '.mobile-menu-area',
    meanScreenWidth: "991"
});
$(window).on('scroll', function() {
    if ($(this).scrollTop() > 200) {
        $('.mainmenu-area').addClass('menu-animation');
    } else {
        $('.mainmenu-area').removeClass('menu-animation');
    }
});
$('a.js-scroll-trigger').on('click', function(e) {
    var anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top - 48
    }, 1000);
    e.preventDefault();
});
// Activate scrollspy to add active class to navbar items on scroll
$('body').scrollspy({
    target: '.mainmenu-area',
    offset: 54
});