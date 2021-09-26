$(document).ready(function () {
  $(".numbers").click(function () {
    var num1 = $(this).val();
    var num2 = $(".input").val();
    $(".input").val(num2 + num1);
  });

  $(".clear").click(function () {
    $(".input").val("");
  });

  $(".delete").click(function () {
    var del = $(".input").val();
    $(".input").val(del.slice(0, -1));
  });

  $(".operations").click(function () {
    var oper1 = $(this).val();
    var oper2 = $(".input").val();
    $(".input").val(oper2 + " " + oper1 + " ");
  });

  $(".equal").click(function () {
    var equal = eval($(".input").val());
    $(".input").val(equal);
  });
});
