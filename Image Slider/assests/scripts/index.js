// Necessary variables needed.
let imageIndex = 0;
let image = document.querySelectorAll('img');
let time = 4000;

// Calling showImage function
showImage();

// Looping through each image
function showImage() {
    for (let i = 0; i < image.length; i++) {
        image[i].style.display = 'none';
    }
}
imageIndex++
if(imageIndex > image.length) {
    imageIndex = 1;
}
image[imageIndex-1].style.display = 'block';
setInterval(() => {
    showImage()
}, time);