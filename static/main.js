document.addEventListener("DOMContentLoaded", () => {
    if (window.AOS) {
        AOS.init({
            duration: 800,
            once: true,
        });
    }

    startCountUpAnimation();
    startImageLoop();
});

function startCountUpAnimation() {
    const countUpElements = document.querySelectorAll(".animation-count-up");

    countUpElements.forEach((element) => {
        const target = Number(element.getAttribute("data-target"));
        element.innerText = "0";

        const updateCount = () => {
            const current = Number(element.innerText);
            const increment = target / 500;

            if (current < target) {
                element.innerText = `${Math.min(Math.ceil(current + increment), target)}`;
                setTimeout(updateCount, 10);
            } else {
                element.innerText = `${target}`;
            }
        };

        updateCount();
    });
}

function startImageLoop() {
    const images = document.querySelectorAll(".image-loop");

    if (!images.length) {
        return;
    }

    let current = 0;

    setInterval(() => {
        images[current].classList.remove("active");
        current = (current + 1) % images.length;
        images[current].classList.add("active");
    }, 5000);
}
