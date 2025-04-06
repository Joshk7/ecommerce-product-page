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

const quantityAmount = document.getElementById("quantity-amount");
const quantityDecrease = document.getElementById("quantity-decrease");
const quantityIncrease = document.getElementById("quantity-increase");

const addToCart = document.getElementById("add-to-cart");
const cartButton = document.getElementById("cart");
const cartAmount = document.getElementById("cart-amount");
const checkoutDialog = document.getElementById("checkout-dialog");

const checkoutEmpty = document.getElementById("checkout-empty");
const checkoutFilled = document.getElementById("checkout-filled");

const checkoutAmount = document.getElementById("checkout-amount");
const checkoutTotal = document.getElementById("checkout-total");

const mediaQuery = window.matchMedia("(min-width: 64rem)");
const large = window.matchMedia("(min-width: 40rem)");

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
let quantity = 0;

const setMainIndex = (index) => {
    mainThumbnailButtons[mainIndex].dataset.selected = "false";
    mainIndex = index;
    mainThumbnailButtons[index].dataset.selected = "true";
    const newSource = images[mainIndex];
    sliderImage.src = newSource;
};

const setLightboxIndex = (index) => {
    lightboxThumbnailButtons[lightboxIndex].dataset.selected = "false";
    lightboxIndex = index;
    lightboxThumbnailButtons[index].dataset.selected = "true";
    const newSource = images[lightboxIndex];
    lightboxImage.src = newSource;
};

const setQuantity = (newQuantity) => {
    quantity = newQuantity;
    quantityAmount.textContent = quantity;
};

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

const handleLeaveCheckout = (e) => {
    console.log(e.target);
    if (!cartButton.contains(e.target) && !checkoutDialog.contains(e.target)) {
        checkoutDialog.close();
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
};

const handleLightboxRight = (e) => {
    const newIndex = (lightboxIndex + 1) % 4;
    setLightboxIndex(newIndex);
};

const handleMainThumbnail = (e) => {
    const newIndex = e.target.dataset.index;
    setMainIndex(newIndex);
};

const handleCloseLightbox = (e) => {
    lightboxDialog.close();
};

const handleLightboxThumbnail = (e) => {
    const newIndex = e.target.dataset.index;
    setLightboxIndex(newIndex);
};

const handleQuantityDecrease = (e) => {
    if (quantity > 0) {
        setQuantity(quantity - 1);
    }
};

const handleQuantityIncrease = (e) => {
    setQuantity(quantity + 1);
};

const handleCartButton = (e) => {
    if (large.matches) {
        const rect = cartButton.getBoundingClientRect();
        checkoutDialog.style.position = "absolute";
        checkoutDialog.style.top = `${rect.bottom + window.scrollY}px`;
        checkoutDialog.style.left = `${
            rect.left + rect.width / 2 + window.scrollX
        }px`;
        checkoutDialog.style.transform = "translateX(-50%)";
    }

    if (checkoutDialog.open) {
        checkoutDialog.close();
    } else {
        checkoutDialog.show();
    }
};

const handleLargeScreen = (e) => {
    if (e.matches) {
        lightboxButton.disabled = false;
    }
};

const handleAddToCart = (e) => {
    const productQuantity = parseInt(quantityAmount.textContent);
    if (productQuantity === 0) {
        cartAmount.textContent = "";
        checkoutFilled.style.display = "none";
        checkoutEmpty.style.display = "block";
    } else {
        checkoutAmount.textContent = productQuantity;
        checkoutTotal.textContent = `$${productQuantity * 125}`;
        cartAmount.textContent = productQuantity;
        checkoutFilled.style.display = "flex";
        checkoutEmpty.style.display = "none";
    }
};

menuButton.addEventListener("click", handleOpenMenu);
// menuDialog.addEventListener("click", handleLeaveMenu);
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
quantityDecrease.addEventListener("click", handleQuantityDecrease);
quantityIncrease.addEventListener("click", handleQuantityIncrease);
cartButton.addEventListener("click", handleCartButton);
handleLargeScreen(mediaQuery);

addToCart.addEventListener("click", handleAddToCart);

document.addEventListener("click", handleLeaveCheckout);
