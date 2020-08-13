"use strict";

$(function () {
  $('.slide-nav a, .down-button').click(function (e) {
    e.preventDefault();
    $('body, html').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 750);
  });
});