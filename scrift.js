const hero = document.querySelector(".hero");

const slides = [
    "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=1600",
    "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1600",
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600"
];

let currentSlide = 0;

function showSlide(index) {

    currentSlide = (index + slides.length) % slides.length;

    hero.style.backgroundImage =
        url("${slides[currentSlide]}");
}

document.getElementById("next").addEventListener("click", function() {
    showSlide(currentSlide + 1);
});

document.getElementById("prev").addEventListener("click", function() {
    showSlide(currentSlide - 1);
});

// Automatic Slider

setInterval(function() {
    showSlide(currentSlide + 1);
}, 5000);