export function initializeDropdown() {
  document.addEventListener("DOMContentLoaded", function () {
    var arrowbtn = document.querySelector(".arrow-btn");
    var dropdownContent = document.querySelector(".dropdown-social");

    arrowbtn.addEventListener("click", function () {
      dropdownContent.classList.toggle("show");
    });

    window.addEventListener("click", function (event) {
      if (!event.target.matches(".arrow-btn")) {
        if (dropdownContent.classList.contains("show")) {
          dropdownContent.classList.remove("show");
        }
      }
    });
  });
}
