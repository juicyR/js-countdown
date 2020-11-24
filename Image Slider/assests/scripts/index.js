/*
Unfinished Tasks
1) Prev and Next functionalities
2) Transition
Multiple bugs to fix
*/

// Necessary variables needed.
let image = document.getElementsByClassName('image');
let imageIndex = 0;
let time = 4000;


// Slider arrows, on click takes you back to the prev or next
let leftArrow = document.getElementById('left-arrow');
let rightArrow = document.getElementById('right-arrow');

function prevFunction() {
    if(imageIndex > 0) {
        image[imageIndex - 1].style.display = 'block';
        imageIndex--;
    }else {
        image[image.length - 1].style.display = 'block';
        imageIndex = image.length - 1;
    }
}

function nextFunction() {
    if (imageIndex < image.length - 1) {
        image[imageIndex++].style.display = 'block';
        imageIndex++;
    }else {
        image[0].style.display = 'block';
        imageIndex = 0;
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
    if (image[0].style.display === 'block') {
        image[1].style.display = 'none';
        image[2].style.display = 'none';
        image[3].style.display = 'none';
        image[4].style.display = 'none';
        image[5].style.display = 'none';
        image[6].style.display = 'none';
        image[7].style.display = 'none';
    }
});
imageTwo.addEventListener('click', function() {
    image[1].style.display = 'block';
    if (image[1].style.display === 'block') {
        image[0].style.display = 'none';
        image[2].style.display = 'none';
        image[3].style.display = 'none';
        image[4].style.display = 'none';
        image[5].style.display = 'none';
        image[6].style.display = 'none';
        image[7].style.display = 'none';
    }
});
imageThree.addEventListener('click', function() {
    image[2].style.display = 'block';
    if (image[2].style.display === 'block') {
        image[0].style.display = 'none';
        image[1].style.display = 'none';
        image[3].style.display = 'none';
        image[4].style.display = 'none';
        image[5].style.display = 'none';
        image[6].style.display = 'none';
        image[7].style.display = 'none';
    }
});
imageFour.addEventListener('click', function() {
    image[3].style.display = 'block';
    if (image[3].style.display === 'block') {
        image[0].style.display = 'none';
        image[1].style.display = 'none';
        image[2].style.display = 'none';
        image[4].style.display = 'none';
        image[5].style.display = 'none';
        image[6].style.display = 'none';
        image[7].style.display = 'none';
    }
});
imageFive.addEventListener('click', function() {
    image[4].style.display = 'block';
    if (image[4].style.display === 'block') {
        image[0].style.display = 'none';
        image[1].style.display = 'none';
        image[2].style.display = 'none';
        image[3].style.display = 'none';
        image[5].style.display = 'none';
        image[6].style.display = 'none';
        image[7].style.display = 'none';
    }
});
imageSix.addEventListener('click', function() {
    image[5].style.display = 'block';
    if (image[5].style.display === 'block') {
        image[0].style.display = 'none';
        image[1].style.display = 'none';
        image[2].style.display = 'none';
        image[3].style.display = 'none';
        image[4].style.display = 'none';
        image[6].style.display = 'none';
        image[7].style.display = 'none';
    }
});
imageSeven.addEventListener('click', function() {
    image[6].style.display = 'block';
    if (image[6].style.display === 'block') {
        image[0].style.display = 'none';
        image[1].style.display = 'none';
        image[2].style.display = 'none';
        image[3].style.display = 'none';
        image[4].style.display = 'none';
        image[5].style.display = 'none';
        image[7].style.display = 'none';
    }
});
imageEight.addEventListener('click', function() {
    image[7].style.display = 'block';
    if (image[7].style.display === 'block') {
        image[0].style.display = 'none';
        image[1].style.display = 'none';
        image[2].style.display = 'none';
        image[3].style.display = 'none';
        image[4].style.display = 'none';
        image[5].style.display = 'none';
        image[6].style.display = 'none';
    }
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

