document.addEventListener("DOMContentLoaded", function () {
  const categories = document.querySelectorAll(".home-main__category");

  categories.forEach(function (category) {
    category.addEventListener("click", function () {
      const categoryId = category.id;

      const allCategoryContents = document.querySelectorAll(
        ".home-main__section"
      );
      allCategoryContents.forEach(function (content) {
        content.classList.remove("active");
      });

      const selectedCategoryContent = document.getElementById(
        `${categoryId}-content`
      );
      selectedCategoryContent.classList.add("active");

      categories.forEach(function (cat) {
        cat.classList.remove("active");
      });
      category.classList.add("active");
    });
  });

  const defaultCategory = document.getElementById("feed");
  defaultCategory.click();
});