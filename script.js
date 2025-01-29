document.addEventListener("DOMContentLoaded", function () {
  const imageContainer = document.querySelector(".image_container");
  imageContainer.style.overflow = "hidden";
  imageContainer.style.whiteSpace = "nowrap";

  function autoScroll() {
    imageContainer.scrollBy({ left: 300, behavior: "smooth" });
    if (
      imageContainer.scrollLeft + imageContainer.clientWidth >=
      imageContainer.scrollWidth
    ) {
      imageContainer.scrollTo({ left: 0, behavior: "smooth" });
    }
  }

  setInterval(autoScroll, 3000);
});
