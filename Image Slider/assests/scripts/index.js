// Necessary variables needed.
let image = document.querySelectorAll('img');
let imageIndex = 0;
let time = 1000;

// Calling showImage function
showImage()

// Making all images display none
function showImage() {
    for (let i = 0; i < image.length; i++) {
        image[i].style.display = 'none';
    }

    // Looping through each image making it display block
    imageIndex++
    if (imageIndex > image.length) {
        imageIndex = 1;
    }
    image[imageIndex-1].style.display = 'block';
}

// Timing between each displayed image
function sliderTime() {
    let interval = setInterval(() => {showImage()}, time);
}

// Image stop on hover
function hoverFunction() {
    clearInterval(interval);
}

// Image continue on mouse leave
function mouseOutFunction() {
    sliderTime();
}