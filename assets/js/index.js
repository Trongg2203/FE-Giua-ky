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

//cate
fetch("https://api.escuelajs.co/api/v1/categories")
  .then((res) => res.json())
  .then((result) => {
    const categoryItem = document.querySelector(".category-item a");

    if (result.length > 0 && categoryItem) {
      // categoryItem.href = `/category/${result[0].id}`;
      categoryItem.textContent = result[0].name;
    }

    const categoriesList = document.getElementById("categories-list");

    result.slice(1).forEach((cate) => {
      const listItem = document.createElement("li");
      const link = document.createElement("a");
      link.classList.add("no-underline");

      // link.href = `/category/${cate.id}`;
      link.href = "";
      link.textContent = cate.name;

      listItem.appendChild(link);
      categoriesList.appendChild(listItem);
    });
  })
  .catch((err) => {
    console.log("err", err);
  });

// product

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((products) => {
    const productList = document.getElementById("product-list");

    // Xóa sản phẩm mẫu ban đầu nếu cần, giữ khung trống nếu muốn
    productList.innerHTML = "";

    // Lặp qua các sản phẩm từ API và tạo HTML cho mỗi sản phẩm
    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add(
        "col-6",
        "col-md-3",
        "col-lg-2",
        "mb-4",
        "animate__animated",
        "animate__fadeIn"
      );

      // Tạo thẻ HTML cho sản phẩm
      productCard.innerHTML = `
            <a href="assets/pages/detailProduct.html" class="card">
              <img src="${product.image}" class="card-img-top" alt="${product.title}" />
              <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">${product.description}</p>
                <p class="card-price">$ ${product.price}</p>
                <p class="card-rating"><i class="fa-solid fa-star"></i> ${product.rating.rate}</p>
              </div>
            </a>
          `;

      productCard.querySelector("a").addEventListener("click", (event) => {
        event.preventDefault();
        loadingPage("detailProduct"); // Khi click vào sản phẩm, sẽ tải trang news.html vào #content-main
      });

      // Thêm thẻ vừa tạo vào productList
      productList.appendChild(productCard);
    });
  })
  .catch((err) => {
    console.log("Error:", err);
  });

const toggleBtn = document.getElementById("toggle-btn");
const categoriesList = document.getElementById("categories-list");
let isVisible = false;

// Toggle danh sách khi click nút
toggleBtn.addEventListener("click", () => {
  isVisible = !isVisible;

  if (isVisible) {
    categoriesList.style.display = "grid";
    categoriesList.classList.add("animate__animated", "animate__bounceInDown");
  } else {
    categoriesList.style.display = "none";
    categoriesList.classList.remove(
      "animate__animated",
      "animate__bounceInDown"
    );
  }
  toggleBtn.textContent = isVisible ? "Hide Categories" : "Show Categories";
});
