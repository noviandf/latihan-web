// navbar
document.addEventListener("DOMContentLoaded", function () {
  const menuCheckbox = document.getElementById("menuCheckbox");
  const menuLinks = document.querySelectorAll(".menu-link");

  menuLinks.forEach((link) => {
    link.addEventListener("click", function () {
      menuCheckbox.checked = false;
    });
  });
});
