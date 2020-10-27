//Necessary vars to start with
let image = document.querySelectorAll('img');
let time = 3000;
let i;
let image1;
//Displaying all images block
for (i = 0; i < image.length; i++) {
    let myTimer = setInterval(() => {
                    displayBlock()
                  }, time);
    function displayBlock() {
        image[i].style.display = 'block';
    }
    displayBlock()
    myTimer
    //Looping through the images being displayed.
         for (image1 = 0; image1 < image.length; image1++) {
            function imageChange() {
                image[i -= image1].style.display = 'none';
            }
            let myTimer2 = setInterval(() => {
                                imageChange()
                           }, time);
            imageChange()
            myTimer2
            if (i === 7) {
                i === 0
            } else {
                i++
            }
         }
}
//Image freeze on hover
// image.addEventListener("click", stopFunction);

// function stopFunction() {
//     clearInterval(myTimer);
// }
//Navigation bar for images

//Images nav on click

//Displaying clicked image
