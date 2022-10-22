$("#firstSinger").click(function () {
  $("#firstToggle").slideToggle(1000);
  $("#firstToggle").siblings("div").slideUp(1000);
});
$("#secondSinger").click(function () {
  $("#secondToggle").slideToggle(1000);
  $("#secondToggle").siblings("div").slideUp(1000);
});
$("#thirdSinger").click(function () {
  $("#thirdToggle").slideToggle(1000);
  $("#thirdToggle").siblings("div").slideUp(1000);
});
$("#fourthSinger").click(function () {
  $("#fourthToggle").slideToggle(1000);
  $("#fourthToggle").siblings("div").slideUp(1000);
});

setInterval(function () {
  let countDownDate = new Date("Nov 20, 2022 16:37:52").getTime();
  let now = new Date().getTime();
  let timeLeft = countDownDate - now;
  let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  $("#days").html(`<h2>${days} days</h2>`);
  $("#hours").html(`<h2>${hours} H</h2>`);
  $("#minutes").html(`<h2>${minutes} Min</h2>`);
  $("#seconds").html(`<h2>${seconds} Sec</h2>`);
}, 1000);

function warning() {
  let max = 100;
  let length = $("#textArea").val().length;
  let remainingCharacters = max - length;
  if (remainingCharacters < 0) {
    $("#warning").html("You reached your limit");
  } else {
    $("#warning").html(`remaining characters ${remainingCharacters}`);
  }
}
document.getElementById("textArea").addEventListener("input", warning);

function startTime() {
  let sideBoxWidth = $(".sideBox").outerWidth();
  $("#sideBar").css("left", -sideBoxWidth);
}
startTime();
$(".open").click(function () {
  let sideBoxWidth = $(".sideBox").outerWidth();
  if ($("#sideBar").css("left") == "0px") {
    $("#sideBar").animate({ left: `-${sideBoxWidth}` }, 1000);
  } else {
    $("#sideBar").animate({ left: `0px` }, 1000);
  }
});
