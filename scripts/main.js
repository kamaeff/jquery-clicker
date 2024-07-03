import "./type.js";

let userCountStat = $("#count");
let count = 0;

// NOTE: Change color and count
window.clickBtn = () => {
  const colors = ["#7DA58D", "60718C", "#BF748E", "#F7C9B5", "#C49766"];
  $(".cliker__btn").toggleClass("active");

  count++;
  $("#count").text(count);

  userCountStat.css("color", colors[Math.floor(Math.random() * colors.length)]);
};

// NOTE: Reset
$("#reset").on("click", () => {
  count = 0;
  userCountStat.text("");
});

// NOTE: Back animation
window.changeBg = () => {
  $("body").toggleClass("dark");

  const btnState = $(".btn__state");
  const currentText = btnState.text();
  const newText = currentText === "☀️" ? "🌒" : "☀️";

  btnState.text(newText);

  newText === "🌒" ? btnState.css("left", "32px") : btnState.css("left", "2px");
};

$(document).ready(() => {
  console.log(
    "This is my Jquery clicker project" + "\n" + "Created by Anton Kamaev"
  );

  lucide.createIcons();
});
