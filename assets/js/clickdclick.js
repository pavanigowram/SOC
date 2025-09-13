$("#myDiv").click(function () {
  $(this).css("background-color", "red").text("Clicked");
});

$("#myDiv").dblclick(function () {
  $(this).css("background-color", "blue").text("Double Clicked");
});

$("#myDiv").hover(
  function () {
    $(this).css("background-color", "green").text("Hovered");
  },
  function () {
    $(this).css("background-color", "lightgray").text("Interact with me");
  }
);

$(document).keydown(function () {
  $("#myDiv").css("background-color", "yellow").text("Key Pressed");
});