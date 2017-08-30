const imgTag = document.querySelector('img');

let isBig = false;


// Run this function when you click an <img> tag
imgTag.onclick = function () {

    // if the image isn't big
    if (!isBig) {
        // increase it's width
        imgTag.style.width = '500px';
        // set the variable to true for next time
        isBig = true;
    }

    // if the image IS big
    else {
        // reduce the width
        imgTag.style.width = '200px';
        // set the variable to FALSE for next time
        isBig = false;
    }

};
