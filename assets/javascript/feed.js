document.addEventListener("DOMContentLoaded", function () {
  var stars = document.querySelectorAll(".star");
  stars.forEach(function (star) {
    star.addEventListener("click", function () {
      star.classList.add("selected");
    });
    star.addEventListener("mouseover", function () {
      if (star.classList.contains("selected")) {
        star.classList.remove("selected");
      }
    });
  });
});
