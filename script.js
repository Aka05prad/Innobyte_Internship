document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.getElementById('overlay');
    const textElement = document.getElementById("typewriter-text");
    const text = "Welcome to KingSukh Guest House__________";
    const typingSpeed = 100; // typing speed in milliseconds
    const serviceItems = document.querySelectorAll(".service-item");
    const floatingBox = document.getElementById('floatingBox');
    // Function to type the text
    let index = 0;
    function typeText() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, typingSpeed);
        }
    }

    // Fade out overlay and start typing effect
    setTimeout(() => {
        overlay.style.opacity = 0;
        setTimeout(() => {
            overlay.style.display = 'none'; // Hides the overlay after fading out
            typeText(); // Start the typing effect
        }, 100); // Delay corresponds to the transition duration in CSS
    }, 100); // Initial delay for the overlay visibility
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let delay = 0;
                serviceItems.forEach((item) => {
                    setTimeout(() => {
                        item.classList.add("visible");
                    }, delay);
                    delay += 500; // Increase delay for each item
                });
                observer.unobserve(entry.target); // Unobserve after animation starts
                floatingBox.classList.add('show');
            }
        });
    }, {
        threshold: 0.1
    });

    observer.observe(document.querySelector("#services"));
    observer.observe(floatingBox);

    var carousel = document.getElementById('carouselExample');
    carousel.addEventListener('slid.bs.carousel', function () {
        var activeItem = document.querySelector('.carousel-item.active');
        var drops = activeItem.querySelectorAll('.drop');
        drops.forEach(function(drop) {
            drop.style.opacity = '1';
            drop.style.transform = 'translateY(0)';
        });
    });
    carousel.addEventListener('slide.bs.carousel', function () {
        var activeItem = document.querySelector('.carousel-item.active');
        var drops = activeItem.querySelectorAll('.drop');
        drops.forEach(function(drop) {
            drop.style.opacity = '0';
            drop.style.transform = 'translateY(-50px)';
        });
    });
    
    
});

