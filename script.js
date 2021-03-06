const slideNow = 1;
let slideCount = $("#slidewrapper").children().length;
const translateWidth = 0;
const slideInterval = 3000;
const navBtnId = 0;

function nextSlide() {
  if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
    $("#slidewrapper").css("transform", "translate(0, 0)");
    slideNow = 1;
  } else {
    translateWidth = -$("#viewport").width() * slideNow;
    $("#slidewrapper").css({
      transform: "translate(" + translateWidth + "px, 0)",
      "-webkit-transform": "translate(" + translateWidth + "px, 0)",
      "-ms-transform": "translate(" + translateWidth + "px, 0)",
    });
    slideNow++;
  }
}

$(document).ready(function () {
  var switchInterval = setInterval(nextSlide, setInterval);

  $("#viewport").hover(
    function () {
      clearInterval(switchInterval);
    },
    function () {
      switchInterval = setInterval(nextSlide, slideInterval);
    }
  );
});

function prevSlide() {
  if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
    translateWidth = -$("viewport").width() * (slideCount - 1);
    $("slidewrapper").css({
      transform: "translate(" + translateWidth + "px,0)",
      "-webkit-transform": "translate(" + translateWidth + "px,0)",
      "-ms-transform": "translate(" + translateWidth + "px,0)",
    });
    slideNow = slideCount;
  } else {
    translateWidth = -$("#viewport").width() * (slideNow - 2);
    $("slidewrapper").css({
      transform: "translate(" + translateWidth + "px,0)",
      "-webkit-transform": "translate(" + translateWidth + "px,0)",
      "-ms-transform": "translate(" + translateWidth + "px,0)",
    });
    slideNow--;
  }
}
