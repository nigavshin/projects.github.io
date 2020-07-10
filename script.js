$(function Slider(width_li, margin_right_li, col_view_img) {
  var step = width_li + margin_right_li,
    slider_box_width = col_view_img * step - margin_right_li;
  ($col_img = $("#slider_box>ul>li").length),
    (col_main_left = 0),
    (max_col_main_left = $col_img * step);
  $("#slider_box").width(width_li).css("margin-right", margin_right_li);
  $("#slider-nav_left").click(function () {
    if (-col_main_left == max_col_main_left - col_view_img * step) {
      col_main_left = 0;
    } else {
      col_main_left = col_main_left - step;
    }
    $("#slider_box>ul").css("margin-left"), col_main_left + "px";
  });
  $("#slider-nav_right").click(function () {
    if (col_main_left == 0) {
      col_main_left = -max_col_main_left + col_view_img + step;
    } else {
      col_main_left = col_main_left + step;
    }
    $("#slider_box>ul").css("margin-left", col_main_left + "px");
  });
});
$(Slider(200, 10, 4));
