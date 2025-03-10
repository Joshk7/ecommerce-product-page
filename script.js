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

const handleSliderLeft = (e) => {
    sliderIndex = (sliderIndex - (1 % 4) + 4) % 4;
    const newSource = images[sliderIndex];
    sliderImage.src = newSource;
};

const handleSliderRight = (e) => {
    sliderIndex = (sliderIndex + 1) % 4;
    const newSource = images[sliderIndex];
    sliderImage.src = newSource;
};

sliderLeft.addEventListener("click", handleSliderLeft);
sliderRight.addEventListener("click", handleSliderRight);
