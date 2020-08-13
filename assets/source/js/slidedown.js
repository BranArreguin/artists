$(function() {
    $('.slide-nav a, .down-button, footer-nav-up a').click(function(e) {
        e.preventDefault();
        $('body, html').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 750);
    });
});