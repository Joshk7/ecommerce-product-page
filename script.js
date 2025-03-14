const menuButton = document.getElementById("menu-button");
const menuDialog = document.getElementById("menu-dialog");
const menuClose = document.getElementById("menu-close");

const mainThumbnails = document.getElementById("main-thumbnails");
const mainThumbnailButtons = mainThumbnails.querySelectorAll("button");

const lightboxButton = document.getElementById("lightbox-button");
const lightboxDialog = document.getElementById("lightbox-dialog");
const lightboxClose = document.getElementById("lightbox-close");

const slider = document.getElementById("slider");
const sliderImage = document.getElementById("slider-image");

const [sliderLeft, sliderRight] = slider.querySelectorAll(".slider__button");

const lightboxImage = document.getElementById("lightbox-image");
const lightboxLeft = document.getElementById("lightbox-left");
const lightboxRight = document.getElementById("lightbox-right");
const lightboxThumbnails = document.getElementById("lightbox-thumbnails");
const lightboxThumbnailButtons = lightboxThumbnails.querySelectorAll("button");

const mediaQuery = window.matchMedia("(min-width: 64rem)");

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

let mainIndex = 0;
let lightboxIndex = 0;

const setMainIndex = (index) => {
    mainThumbnailButtons[mainIndex].dataset.selected = "false";
    mainIndex = index;
    mainThumbnailButtons[index].dataset.selected = "true";
    const newSource = images[mainIndex];
    sliderImage.src = newSource;
}

const setLightboxIndex = (index) => {
    lightboxThumbnailButtons[lightboxIndex].dataset.selected = "false";
    lightboxIndex = index;
    lightboxThumbnailButtons[index].dataset.selected = "true";
    const newSource = images[lightboxIndex];
    lightboxImage.src = newSource;
}

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
    const newIndex = (mainIndex - 1 + 4) % 4;
    setMainIndex(newIndex);
};

const handleSliderRight = (e) => {
    const newIndex = (mainIndex + 1) % 4;
    setMainIndex(newIndex);
};

const handleLightboxLeft = (e) => {
    const newIndex = (lightboxIndex - 1 + 4) % 4;
    setLightboxIndex(newIndex);
}

const handleLightboxRight = (e) => {
    const newIndex = (lightboxIndex + 1) % 4;
    setLightboxIndex(newIndex);
}

const handleMainThumbnail = (e) => {
    const newIndex = e.target.dataset.index;
    setMainIndex(newIndex);
}

const handleCloseLightbox = (e) => {
    lightboxDialog.close();
}

const handleLightboxThumbnail = (e) => {
    const newIndex = e.target.dataset.index;
    setLightboxIndex(newIndex);
}

const handleLargeScreen = (e) => {
    if (e.matches) {
        lightboxButton.disabled = false;
    }
}

menuButton.addEventListener("click", handleOpenMenu);
menuDialog.addEventListener("click", handleLeaveMenu);
menuClose.addEventListener("click", handleCloseMenu);
lightboxButton.addEventListener("click", handleOpenLightbox);
mainThumbnailButtons.forEach((button) => {
    button.addEventListener("click", handleMainThumbnail);
});
sliderLeft.addEventListener("click", handleSliderLeft);
sliderRight.addEventListener("click", handleSliderRight);
lightboxClose.addEventListener("click", handleCloseLightbox);
lightboxLeft.addEventListener("click", handleLightboxLeft);
lightboxRight.addEventListener("click", handleLightboxRight);
lightboxThumbnailButtons.forEach((button) => {
    button.addEventListener("click", handleLightboxThumbnail);
});
handleLargeScreen(mediaQuery);