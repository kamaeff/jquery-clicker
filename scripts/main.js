console.log(
  "This is my Jquery clicker project" + "\n" + "Created by Anton Kamaev"
);

lucide.createIcons();
let count = 0;

const btn = $("#btn");

// NOTE: Change color and count
btn.on("click", () => {
  btn.toggleClass("active");

  count++;
  $("#count").text(count);
});

// NOTE: Reset
$("#reset").on("click", () => {
  count = 0;

  $("#count").text("");
});
