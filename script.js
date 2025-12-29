const overlay = document.getElementById('overlay');

overlay.addEventListener('click', () => {
    overlay.style.opacity = 0;
    overlay.style.pointerEvents = "none";

    setTimeout(() => {
        overlay.style.display = "none";
    }, 5000); // passt zu transition: 5s
});



const heroes = document.querySelectorAll(".hero");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            } else {
                entry.target.classList.remove("active");
            }
        });
    },
    {
        threshold: 0.8 // Section gilt als aktiv, wenn 50% sichtbar
    }
);

heroes.forEach(hero => observer.observe(hero));

const menuBtn = document.getElementById("menu-btn");
const menuOverlay = document.getElementById("menu-overlay");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("open");
    menuOverlay.classList.toggle("active");
});
const menuLinks = document.querySelectorAll("#menu-overlay a");

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        menuOverlay.classList.remove("active");
        menuBtn.classList.remove("open");
    });
});


const banner = document.getElementById("banner");
const bandSection = document.getElementById("band");
const introSection = document.getElementById("intro");

const bannerObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.target.id === "band") {
                if (entry.isIntersecting) {
                    banner.style.opacity = 1;
                }
            }
            if (entry.target.id === "intro") {
                if (entry.isIntersecting) {
                    banner.style.opacity = 0;
                }
            }
        });
    },
    { threshold: 0.9 }
);

bannerObserver.observe(bandSection);
bannerObserver.observe(introSection);


