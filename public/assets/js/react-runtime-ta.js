// Menu toggle is handled by React onClick in TamilPage.jsx — no legacy setup needed.

function mobileshowSection(sectionId, clickedItem) {
    // Close the mobile menu
    document.getElementById("mobileMenu").classList.add("hidden");
    document.getElementById("overlay").classList.add("hidden");

    showSection(sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const newsTicker = document.getElementById("newsTicker");
    const newsModalList = document.getElementById("newsModalList");

    fetch("/assets/__data/news.json")
        .then(response => response.json())
        .then(data => {
            if (!Array.isArray(data)) throw new Error("Invalid updates format");

            // Clear existing content
            newsTicker.innerHTML = "";
            // newsModalList.innerHTML = "";

            data.forEach(update => {
                // Create ticker item (small screen)
                const tickerItem = document.createElement("a");
                tickerItem.href = update.href || "#";
                tickerItem.target = "_blank"; // Open link in new tab
                tickerItem.className = "hover:underline text-sm flex items-center gap-2";
                tickerItem.innerHTML = `<i class="fas fa-arrow-right"></i> ${update.message}`;
                newsTicker.appendChild(tickerItem);

                // Create modal list item
                const modalItem = document.createElement("li");
                modalItem.innerHTML = `<i class="fas fa-bullhorn text-amber-500"></i> ${update.message}`;
                // newsModalList.appendChild(modalItem);
            });
        })
        .catch(error => console.error("Error loading updates:", error));

    // Modal functions
    window.openNewsModal = function () {
        document.getElementById("newsModal").classList.remove("hidden");
        document.body.classList.add("modal-open");
    };

    window.closeNewsModal = function () {
        document.getElementById("newsModal").classList.add("hidden");
        document.body.classList.remove("modal-open");
    };

    // Close modal when clicking outside
    document.getElementById("newsModal").addEventListener("click", function (event) {
        if (event.target === this) {
            closeNewsModal();
        }
    });

    window.pauseNewsTicker = function () {
        newsTicker.style.animationPlayState = "paused";
    };

    window.resumeNewsTicker = function () {
        newsTicker.style.animationPlayState = "running";
    };
});

new Swiper(".swiper-container", {
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        640: { slidesPerView: 1 },
        1024: { slidesPerView: 3 },
    },
});

new Swiper(".swiper-container", {
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        640: { slidesPerView: 1 },
        1024: { slidesPerView: 3 },
    },
});

// Global variables
let certificatesData = [];
let currentImages = [];
let currentSlide = 0;

// Load events when the page is ready
document.addEventListener("DOMContentLoaded", function () {
    function setupCarousel(id) {
        const carousel = document.getElementById(id);
        let index = 0;
        setInterval(() => {
            index = (index + 1) % carousel.children.length;
            carousel.style.transform = `translateX(-${index * 100}%)`;
        }, 3000);
    }

    function closeModal() {
        const modal = document.getElementById("eventModal");
        modal.classList.add("hidden");
        document.body.style.overflow = "auto";
    }

    const modal = document.getElementById("eventModal");
    const cancelBtn = document.getElementById("cancelBtn");

    // Method 1: Cancel button click
    cancelBtn.addEventListener('click', function () {
        modal.classList.add("hidden");
        document.body.style.overflow = "auto";
    });

    // Method 2: Click outside modal content (overlay click)
    modal.addEventListener('click', function (e) {
        if (e.target === modal) { // only overlay
            modal.classList.add("hidden");
            document.body.style.overflow = "auto";
        }
    });



    function closeMobileMenu() {
        const mobileMenu = document.getElementById("mobileMenu");
        const overlay = document.getElementById("overlay");

        if (window.innerWidth <= 768) {
            mobileMenu.classList.add("hidden");
            overlay.classList.add("hidden");
        }
    }

    function openModal() {
        const modal = document.getElementById("eventModal");
        modal.classList.remove("hidden");
        document.body.style.overflow = "hidden";
    }

    // Mobile Menu Toggle
    document.getElementById("menuButton").addEventListener("click", function () {
        document.getElementById("mobileMenu").classList.remove("hidden");
        document.getElementById("overlay").classList.remove("hidden");
    });

    document.getElementById("closeMenu").addEventListener("click", closeMobileMenu);
    document.getElementById("overlay").addEventListener("click", closeMobileMenu);

    // Event Modal Buttons
    document.querySelectorAll("[data-open-modal]").forEach(button => {
        button.addEventListener("click", openModal);
    });

    document.querySelectorAll("[data-close-modal]").forEach(button => {
        button.addEventListener("click", closeModal);
    });
});


async function loadCertificates() {
    try {
        const response = await fetch('/assets/tamil_datas/certdet.json'); // Adjust path
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        certificatesData = await response.json();
    } catch (error) {
        console.error("Error loading certificate data:", error);
    }
}

async function openServiceModal(eventId) {
    if (!certificatesData || certificatesData.length === 0) {
        await loadCertificates();
    }

    const modal = document.getElementById("eventModal");
    const modalContent = document.getElementById("modalContent");
    const carousel = document.getElementById("carousel");
    const titleElement = document.getElementById("eventTitle");
    const documentsList = document.getElementById("documentsList");
    const timeElement = document.getElementById("eventTime");

    const event = certificatesData.find(e => e.id === eventId);
    if (!event) return;

    // Set title
    titleElement.textContent = event.title;

    // Set documents
    documentsList.innerHTML = event.documents
        .map(doc => `<li class="text-gray-950">📄 ${doc}</li>`)
        .join("");

    // Set processing time
    timeElement.textContent = `⏳ செயலாக்க நேரம்: ${event.time}`;

    // Show first image if available
    const currentImages = event.images || [];
    if (currentImages.length > 0) {
        carousel.innerHTML = `<img src="${currentImages[0]}" class="w-full h-full object-cover rounded-lg" alt="${event.title}">`;
    } else {
        carousel.innerHTML = `<div class="text-gray-500 text-center py-12">படங்கள் இல்லை</div>`;
    }

    // Show modal
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    setTimeout(() => modalContent.classList.remove("opacity-0"), 10);
}



function closeModal() {
    const modal = document.getElementById("eventModal");
    const modalContent = document.getElementById("modalContent");

    modalContent.classList.add("opacity-0", "scale-95");
    setTimeout(() => {
        modal.classList.add("hidden");
        document.body.style.overflow = "auto";
    }, 300);
}


function nextSlide() {
    if (currentImages.length === 0) return;
    currentSlide = (currentSlide + 1) % currentImages.length;
    updateCarousel();
}

function prevSlide() {
    if (currentImages.length === 0) return;
    currentSlide = (currentSlide - 1 + currentImages.length) % currentImages.length;
    updateCarousel();
}
function updateCarousel() {
    const carousel = document.getElementById("carousel");
    carousel.innerHTML = `<img src="${currentImages[currentSlide]}" class="w-full h-full object-cover rounded-lg" alt="Event Image">`;
}

setTimeout(() => {
    document.querySelectorAll(".certificate-item").forEach(item => {
        item.style.transform = "none";
    });
}, 5000); // after bounce ends

document.addEventListener("DOMContentLoaded", function () {
    AOS.init({ duration: 1500, once: true }); // Initialize AOS on page load

    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray(".section").forEach((section, index) => {
        gsap.fromTo(section,
            { opacity: 0, y: 50 },
            {
                opacity: 1, y: 0,
                duration: 0.4,
                delay: index * 0.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 90%",
                    toggleActions: "play none none none",
                }
            }
        );
    });
});

window.addEventListener("load", function () {
    // Fade out loading screen
    gsap.to("#loading-screen", {
        opacity: 0, duration: 0.5, onComplete: function () {
            document.getElementById("loading-screen").style.display = "none";
            document.getElementById("main-content").classList.remove("hidden");

            // Reinitialize AOS after revealing content
            AOS.refreshHard();

            // Animate background movement
            gsap.to("#background-desktop", { x: "0%", opacity: 1, duration: 1.5, ease: "power2.out" });
            // Animate background movement
            gsap.to("#background-mobile", { x: "0%", opacity: 1, duration: 1.5, ease: "power2.out" });

            // Animate navigation items
            gsap.from(".nav-item", { opacity: 0, y: -20, duration: 1, stagger: 0.2, ease: "power2.out" });
            gsap.from("header", {
                y: -100,  // Moves from -100px (off-screen)
                opacity: 0, // Starts fully invisible
                duration: 0.75, // Smooth effect
                ease: "power2.out"
            });
        }
    });
});

let scrollUpBtn = document.createElement("button");
scrollUpBtn.innerHTML = `<i class="fas fa-arrow-up"></i>`;
scrollUpBtn.id = "scrollUpBtn";
scrollUpBtn.className =
    "fixed bottom-6 right-6 w-12 h-12 bg-amber-400 text-white text-2xl flex items-center justify-center rounded-full shadow-lg transition-opacity duration-300 opacity-0 pointer-events-none hover:bg-blue-700 hover:scale-110";
document.body.appendChild(scrollUpBtn);

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        scrollUpBtn.classList.remove("opacity-0", "pointer-events-none");
    } else {
        scrollUpBtn.classList.add("opacity-0", "pointer-events-none");
    }
});

scrollUpBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


function handleSelection(selectedValue) {
    if (selectedValue) {
        showList(selectedValue);
    }
}

fetch('/assets/tamil_datas/electedmember_ta.json') // Fetch Tamil elected members data
    .then(response => response.json())
    .then(data => {
        ElectedMembers("ElectedMembers", data.members);
    })
    .catch(error => console.error("Error loading JSON:", error));