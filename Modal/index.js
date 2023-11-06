let open_btn = document.getElementById("open-btn");
let model_container = document.getElementById("model-container");
let close_btn = document.getElementById("close-btn");
open_btn.addEventListener("click", function () {
  model_container.style.display = "block";
});
close_btn.addEventListener("click", function () {
  model_container.style.display = "none";
});
window.addEventListener("click", (e) => {
  if (e.target === model_container) {
    model_container.style.display = "none";
  }
});
