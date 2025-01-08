console.log("Hello");

var child = document.querySelector(".image_container").childElementCount;
console.log(child);

var counter = 1;
document.querySelector("img").setAttribute("src", "images/" + counter + ".jpg");

let autoSlideInterval;

function startAutoSlide() {
    autoSlideInterval = setInterval(function () {
        counter++;
        if (counter > 2) {
            counter = 1;
        }
        document.querySelector("img").setAttribute("src", "images/" + counter + ".jpg");
        console.log(counter);
    }, 3000);
}

// Start the auto slide initially
startAutoSlide();

document.querySelector(".right").addEventListener("click", function (e) {
    clearInterval(autoSlideInterval); // Stop auto slide when manually clicking
    counter++;
    if (counter > 2) {
        counter = 1;
    }
    document.querySelector("img").setAttribute("src", "images/" + counter + ".jpg");
    console.log(counter);
    startAutoSlide(); // Restart auto slide after the click
});

document.querySelector(".left").addEventListener("click", function (e) {
    clearInterval(autoSlideInterval); // Stop auto slide when manually clicking
    counter--;
    if (counter < 1) {
        counter = 2;
    }
    document.querySelector("img").setAttribute("src", "images/" + counter + ".jpg");
    console.log(counter);
    startAutoSlide(); // Restart auto slide after the click
});
