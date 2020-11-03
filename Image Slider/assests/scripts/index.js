// Necessary variables needed.
let image = document.getElementsByClassName('image');
let imageIndex = 0;
let time = 4000;

// Slider arrows, on click takes you back to the prev or next
let leftArrow = document.getElementById('left-arrow');
let rightArrow = document.getElementById('right-arrow');

function nextFunction() {
    image[imageIndex++].style.display = 'block';
    if (imageIndex > image.length) {
        // imageIndex = 1;
    }
}

function prevFunction() {
    image[imageIndex--].style.display = 'block';
    if (imageIndex < image.length) {
        // imageIndex = 0;
    }
}

// Image Nav, every small image takes you to that exact one!
let imageOne = document.getElementById('image1');
let imageTwo = document.getElementById('image2');
let imageThree = document.getElementById('image3');
let imageFour = document.getElementById('image4');
let imageFive = document.getElementById('image5');
let imageSix = document.getElementById('image6');
let imageSeven = document.getElementById('image7');
let imageEight = document.getElementById('image8');

imageOne.addEventListener('click', function() {
    image[0].style.display = 'block';
});
imageTwo.addEventListener('click', function() {
    image[1].style.display = 'block';
});
imageThree.addEventListener('click', function() {
    image[2].style.display = 'block';
});
imageFour.addEventListener('click', function() {
    image[3].style.display = 'block';
});
imageFive.addEventListener('click', function() {
    image[4].style.display = 'block';
});
imageSix.addEventListener('click', function() {
    image[5].style.display = 'block';
});
imageSeven.addEventListener('click', function() {
    image[6].style.display = 'block';
});
imageEight.addEventListener('click', function() {
    image[7].style.display = 'block';
});



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
let interval = setInterval(() => {showImage()}, time);

// Image stop on hover
function hoverFunction() {
    clearInterval(interval);
}

// Image continue on mouse leave
function mouseOutFunction() {
    interval = setInterval(() => {showImage()}, time);
}

// Transitions

