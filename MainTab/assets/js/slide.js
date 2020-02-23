$(function() {
  var text = $(".text");
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 60) {
      text.removeClass("hidden");
    } else {
      text.addClass("hidden");
    }
  });
});

$(function() {
  var text = $(".context");
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 60) {
      text.removeClass("hidden");
    } else {
      text.addClass("hidden");
    }
  });
});
