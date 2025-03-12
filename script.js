const menuButton = document.getElementById("menu-button");
const menuDialog = document.getElementById("menu-dialog");
const menuClose = document.getElementById("menu-close");

const lightboxButton = document.getElementById("lightbox-button");
const lightboxDialog = document.getElementById("lightbox-dialog");
const lightboxClose = document.getElementById("lightbox-close");

const slider = document.getElementById("slider");
const sliderImage = slider.querySelector(".slider__image");

const [sliderLeft, sliderRight] = slider.querySelectorAll(".slider__button");

const images = [
    "/images/image-product-1.jpg",
    "/images/image-product-2.jpg",
    "/images/image-product-3.jpg",
    "/images/image-product-4.jpg",
];

const thumbnails = [
    "/images/image-product-1-thumbnail.jpg",
    "/images/image-product-2-thumbnail.jpg",
    "/images/image-product-3-thumbnail.jpg",
    "/images/image-product-4-thumbnail.jpg",
];

let sliderIndex = 0;

const handleOpenMenu = (e) => {
    menuDialog.showModal();
};

const handleCloseMenu = (e) => {
    menuDialog.close();
};

const handleLeaveMenu = (e) => {
    var rect = menuDialog.getBoundingClientRect();
    var isInDialog =
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width;
    if (!isInDialog) {
        menuDialog.close();
    }
};

const handleOpenLightbox = (e) => {
    lightboxDialog.showModal();
};

const handleSliderLeft = (e) => {
    sliderIndex = (sliderIndex - 1 + 4) % 4;
    const newSource = images[sliderIndex];
    sliderImage.src = newSource;
};

const handleSliderRight = (e) => {
    sliderIndex = (sliderIndex + 1) % 4;
    const newSource = images[sliderIndex];
    sliderImage.src = newSource;
};

menuButton.addEventListener("click", handleOpenMenu);
menuDialog.addEventListener("click", handleLeaveMenu);
menuClose.addEventListener("click", handleCloseMenu);
lightboxButton.addEventListener("click", handleOpenLightbox);
sliderLeft.addEventListener("click", handleSliderLeft);
sliderRight.addEventListener("click", handleSliderRight);
