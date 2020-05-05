$(function() {
  var text = $(".text");
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 35) {
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

    if (scroll >= 40) {
      text.removeClass("hidden");
    } else {
      text.addClass("hidden");
    }
  });
});

$(function() {
  var text = $(".pre");
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 40) {
        text.addClass("hidden");
      
    } else {
      text.removeClass("hidden");
    }
  });
});

$(document).scrollTop(0);
$(document).scrollTop($(document).height());

