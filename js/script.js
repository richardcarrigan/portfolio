$(".section-nav li").click(function() {
  $(".section-nav li").removeClass("active");
  $(this).addClass("active");
});

$(document).scroll(function() {
  var windowTop = $(window).scrollTop();
  var aboutTop = $("#about").offset().top;
  var coursesTop = $("#courses").offset().top;
  if (coursesTop - windowTop <= 0) {
    $(".section-nav li").removeClass("active");
    $("#courses-link").addClass("active");
  } else if(aboutTop - windowTop <= 0) {
    $(".section-nav li").removeClass("active");
    $("#about-link").addClass("active");
  } else {
    $(".section-nav li").removeClass("active");
    $("#home-link").addClass("active");
  }
});
