document.addEventListener("DOMContentLoaded", () => {

    /* ===== HAMBURGER MENU ===== */
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });
    }

    /* ===== LIGHTBOX ===== */
    const galleryItems = document.querySelectorAll(".gallery-item");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    const closeBtn = document.querySelector(".lightbox .close");

    if (galleryItems.length && lightbox && lightboxImg && closeBtn) {
        galleryItems.forEach(item => {
            item.addEventListener("click", () => {
                lightbox.style.display = "flex";
                lightboxImg.src = item.src;
            });
        });

        closeBtn.addEventListener("click", () => {
            lightbox.style.display = "none";
        });
    }

    /* ===== HERO SLIDER ===== */
    const slides = document.querySelectorAll(".hero-slide");
    let currentSlide = 0;
    const slideInterval = 2000;

    if (slides.length > 0) {
        setInterval(() => {
            slides[currentSlide].classList.remove("active");
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add("active");
        }, slideInterval);
    }

});
