var m = document.getElementById("menuBtn");
var n = document.getElementById("nav");

if (m && n) {
  m.addEventListener("click", function () {
    if (n.classList.contains("open")) {
      n.classList.remove("open");
    } else {
      n.classList.add("open");
    }
  });
}
