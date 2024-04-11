const btnShowMore = document.querySelector(".testimonials-content-btn");
const testimonialsContent = document.querySelector(".testimonials-content");

btnShowMore.addEventListener("click", function () {
  testimonialsContent.classList.toggle("active");
});

const btnMenu = document.querySelector('.btn-menu');
const btnMenuClose = document.querySelector('.btn-close');
const headerList = document.querySelector('.header__list');

btnMenu.addEventListener('click', function () {
    headerList.classList.add('active');
});

btnMenuClose.addEventListener('click', function () {
    headerList.classList.remove('active');
});