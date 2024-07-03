console.log(
  "This is my Jquery clicker project" + "\n" + "Created by Anton Kamaev"
);

lucide.createIcons();

const btn = $("#btn");
let userCountStat = $("#count");

// NOTE: Change color and count
const colors = ["#7DA58D", "60718C", "#BF748E", "#F7C9B5", "#C49766"];
let count = 0;

btn.on("click", () => {
  btn.toggleClass("active");

  count++;
  $("#count").text(count);

  userCountStat.css("color", colors[Math.floor(Math.random() * colors.length)]);
});

// NOTE: Reset
$("#reset").on("click", () => {
  count = 0;

  userCountStat.text("");
});

// NOTE: Back animation
$("#back").on("click", () => {
  $("body").toggleClass("dark");

  const btnState = $(".btn__state");
  const currentText = btnState.text();
  const newText = currentText === "☀️" ? "🌒" : "☀️";

  btnState.text(newText);

  newText === "🌒" ? btnState.css("left", "28px") : btnState.css("left", "2px");
});
