document.addEventListener("DOMContentLoaded", function () {
  const toggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector("#navbarScroll");

  toggler.addEventListener("click", function () {
    const isExpanded = toggler.getAttribute("aria-expanded") === "true";

    if (isExpanded) {
      navbarCollapse.classList.remove("show");
      toggler.setAttribute("aria-expanded", "false");
    } else {
      navbarCollapse.classList.add("show");
      toggler.setAttribute("aria-expanded", "true");
    }
  });

  // Đóng menu khi click bên ngoài
  document.addEventListener("click", function (event) {
    const isClickInsideNavbar =
      navbarCollapse.contains(event.target) || toggler.contains(event.target);
    if (!isClickInsideNavbar && navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
      toggler.setAttribute("aria-expanded", "false");
    }
  });
});
