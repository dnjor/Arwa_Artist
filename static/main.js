document.addEventListener("DOMContentLoaded", () => {
  startCountUpAnimation();
  startImageLoop();
  renderPaintingGallery();
  startPaintingGalleryModal();
  startLazyVideoLoading();
  startWorkshopCountdown();
});

const paintingGalleryItems = [
  {
    id: 1,
    fullSrc: "static/pic/painting-1.webp",
    srcset:
      "static/pic/painting-1-400.webp 400w, static/pic/painting-1.webp 600w",
    fallbackSrc: "static/pic/painting_%20(1).jpeg",
    alt: "لوحة فنية من أعمال أروى 1",
    width: 1200,
    height: 1600,
  },
  {
    id: 2,
    fullSrc: "static/pic/painting-2.webp",
    srcset:
      "static/pic/painting-2-400.webp 400w, static/pic/painting-2.webp 600w",
    fallbackSrc: "static/pic/painting_%20(2).jpeg",
    alt: "لوحة فنية من أعمال أروى 2",
    width: 1200,
    height: 1600,
  },
  {
    id: 3,
    fullSrc: "static/pic/painting-3.webp",
    srcset:
      "static/pic/painting-3-400.webp 400w, static/pic/painting-3.webp 600w",
    fallbackSrc: "static/pic/painting_%20(3).jpeg",
    alt: "لوحة فنية من أعمال أروى 3",
    width: 1170,
    height: 1466,
  },
  {
    id: 4,
    fullSrc: "static/pic/painting-4.webp",
    srcset:
      "static/pic/painting-4-400.webp 400w, static/pic/painting-4.webp 600w",
    fallbackSrc:
      "static/pic/WhatsApp%20Image%202026-06-06%20at%209.09.03%20AM.jpeg",
    alt: "لوحة فنية من أعمال أروى 4",
    width: 742,
    height: 1078,
  },
  {
    id: 5,
    fullSrc: "static/pic/painting-5.webp",
    srcset:
      "static/pic/painting-5-400.webp 400w, static/pic/painting-5.webp 600w",
    fallbackSrc: "static/pic/painting_%20(5).jpeg",
    alt: "لوحة فنية من أعمال أروى 5",
    width: 1200,
    height: 1600,
  },
  {
    id: 6,
    fullSrc: "static/pic/painting-6.webp",
    srcset:
      "static/pic/painting-6-400.webp 400w, static/pic/painting-6.webp 600w",
    fallbackSrc: "static/pic/painting_%20(6).jpeg",
    alt: "لوحة فنية من أعمال أروى 6",
    width: 1440,
    height: 1440,
  },
  {
    id: 7,
    fullSrc: "static/pic/painting-7.webp",
    srcset:
      "static/pic/painting-7-400.webp 400w, static/pic/painting-7.webp 600w",
    fallbackSrc: "static/pic/painting_%20(7).jpeg",
    alt: "لوحة فنية من أعمال أروى 7",
    width: 1200,
    height: 1600,
  },
  {
    id: 8,
    fullSrc: "static/pic/painting-8.webp",
    srcset:
      "static/pic/painting-8-400.webp 400w, static/pic/painting-8.webp 600w",
    fallbackSrc: "static/pic/painting_%20(8).jpeg",
    alt: "لوحة فنية من أعمال أروى 8",
    width: 1170,
    height: 1547,
  },
  {
    id: 9,
    fullSrc: "static/pic/painting-9.webp",
    srcset:
      "static/pic/painting-9-400.webp 400w, static/pic/painting-9.webp 600w",
    fallbackSrc: "static/pic/painting_%20(9).jpeg",
    alt: "لوحة فنية من أعمال أروى 9",
    width: 1170,
    height: 1451,
  },
  {
    id: 10,
    fullSrc: "static/pic/painting-10.webp",
    srcset:
      "static/pic/painting-10-400.webp 400w, static/pic/painting-10.webp 600w",
    fallbackSrc: "static/pic/painting_%20(10).jpeg",
    alt: "لوحة فنية من أعمال أروى 10",
    width: 853,
    height: 1280,
  },
  {
    id: 11,
    fullSrc: "static/pic/painting-11.webp",
    srcset:
      "static/pic/painting-11-400.webp 400w, static/pic/painting-11.webp 600w",
    fallbackSrc: "static/pic/painting_%20(11).jpeg",
    alt: "لوحة فنية من أعمال أروى 11",
    width: 882,
    height: 1280,
  },
  {
    id: 12,
    fullSrc: "static/pic/painting-12.webp",
    srcset:
      "static/pic/painting-12-400.webp 400w, static/pic/painting-12.webp 600w",
    fallbackSrc: "static/pic/painting_%20(12).jpeg",
    alt: "لوحة فنية من أعمال أروى 12",
    width: 1023,
    height: 1280,
  },
  {
    id: 13,
    fullSrc: "static/pic/painting-13.webp",
    srcset:
      "static/pic/painting-13-400.webp 400w, static/pic/painting-13.webp 600w",
    fallbackSrc: "static/pic/painting_%20(13).jpeg",
    alt: "لوحة فنية من أعمال أروى 13",
    width: 720,
    height: 1280,
  },
  {
    id: 14,
    fullSrc: "static/pic/painting-14.webp",
    srcset:
      "static/pic/painting-14-400.webp 400w, static/pic/painting-14.webp 600w",
    fallbackSrc: "static/pic/painting_%20(14).jpeg",
    alt: "لوحة فنية من أعمال أروى 14",
    width: 817,
    height: 1280,
  },
  {
    id: 15,
    fullSrc: "static/pic/painting-15.webp",
    srcset:
      "static/pic/painting-15-400.webp 400w, static/pic/painting-15.webp 600w",
    fallbackSrc: "static/pic/painting_%20(15).jpeg",
    alt: "لوحة فنية من أعمال أروى 15",
    width: 885,
    height: 1280,
  },
  {
    id: 16,
    fullSrc: "static/pic/painting-16.webp",
    srcset:
      "static/pic/painting-16-400.webp 400w, static/pic/painting-16.webp 600w",
    fallbackSrc: "static/pic/painting_%20(16).jpeg",
    alt: "لوحة فنية من أعمال أروى 16",
    width: 885,
    height: 1280,
  },
  {
    id: 17,
    fullSrc: "static/pic/painting-17.webp",
    srcset:
      "static/pic/painting-17-400.webp 400w, static/pic/painting-17.webp 1200w",
    fallbackSrc: "static/pic/painting-17.jpg",
    alt: "لوحة طبيعة صامتة لزهور دوار الشمس والليمون وطائر وسلة وإبريق سقاية من أعمال أروى",
    width: 1200,
    height: 1600,
  },
  {
    id: "sold-1",
    fullSrc: "static/pic/painting-sold-1.webp",
    srcset:
      "static/pic/painting-sold-1-400.webp 400w, static/pic/painting-sold-1.webp 600w",
    fallbackSrc: "static/pic/painting_sold_%20(1).png",
    alt: "لوحة فنية مباعة من أعمال أروى 1",
    width: 1254,
    height: 1254,
  },
  {
    id: "sold-2",
    fullSrc: "static/pic/painting-sold-2.webp",
    srcset:
      "static/pic/painting-sold-2-400.webp 400w, static/pic/painting-sold-2.webp 600w",
    fallbackSrc: "static/pic/painting_sold_%20(2).png",
    alt: "لوحة فنية مباعة من أعمال أروى 2",
    width: 1254,
    height: 1254,
  },
  {
    id: "sold-3",
    fullSrc: "static/pic/painting-sold-3.webp",
    srcset:
      "static/pic/painting-sold-3-400.webp 400w, static/pic/painting-sold-3.webp 600w",
    fallbackSrc: "static/pic/painting_sold_%20(3).png",
    alt: "لوحة فنية مباعة من أعمال أروى 3",
    width: 1448,
    height: 1086,
  },
  {
    id: "sold-4",
    fullSrc: "static/pic/painting-sold-4.webp",
    srcset:
      "static/pic/painting-sold-4-400.webp 400w, static/pic/painting-sold-4.webp 600w",
    fallbackSrc: "static/pic/painting_sold_%20(4).png",
    alt: "لوحة فنية مباعة من أعمال أروى 4",
    width: 1150,
    height: 1367,
  },
];

const paintingGalleryOrder = [
  1,
  "sold-1",
  2,
  3,
  4,
  5,
  "sold-2",
  6,
  7,
  8,
  9,
  10,
  "sold-3",
  11,
  12,
  13,
  "sold-4",
  14,
  15,
  16,
  17,
];

const workshopStartDate = new Date("2026-08-01T15:00:00+03:00");

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

function getOrderedPaintingGalleryItems() {
  const paintingsById = new Map(
    paintingGalleryItems.map((painting) => [painting.id, painting]),
  );

  return paintingGalleryOrder
    .map((id) => paintingsById.get(id))
    .filter(Boolean);
}

function renderPaintingGallery() {
  const gallery = document.querySelector(".painting-gallery-strip");

  if (!gallery) {
    return;
  }

  gallery.innerHTML = "";

  getOrderedPaintingGalleryItems().forEach((painting) => {
    const button = document.createElement("button");
    button.className =
      "painting-gallery-item flex-shrink-0 border-0 bg-transparent p-0";
    button.type = "button";
    button.dataset.paintingSrc = painting.fullSrc;
    button.setAttribute("aria-label", `Open painting ${painting.id}`);

    const picture = document.createElement("picture");
    const source = document.createElement("source");
    const image = document.createElement("img");

    source.srcset = painting.srcset;
    source.sizes = "(max-width: 940px) 72vw, 28vw";
    source.type = "image/webp";

    image.className = "painting-gallery-image";
    image.src = painting.fallbackSrc;
    image.alt = painting.alt;
    image.width = painting.width;
    image.height = painting.height;
    image.loading = "lazy";

    picture.append(source, image);
    button.appendChild(picture);
    gallery.appendChild(button);
  });
}

function startPaintingGalleryModal() {
  const paintingButtons = document.querySelectorAll("[data-painting-src]");
  const modalElement = document.getElementById("paintingLightbox");
  const modalImage = document.getElementById("paintingLightboxImage");

  if (
    !paintingButtons.length ||
    !modalElement ||
    !modalImage ||
    !window.bootstrap
  ) {
    return;
  }

  const lightbox = new bootstrap.Modal(modalElement);

  paintingButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const previewImage = button.querySelector("img");

      modalImage.src = button.dataset.paintingSrc;
      modalImage.alt = previewImage ? previewImage.alt : "Painting";
      lightbox.show();
    });
  });

  modalElement.addEventListener("hidden.bs.modal", () => {
    modalImage.removeAttribute("src");
    modalImage.alt = "";
  });
}

function startLazyVideoLoading() {
  const lazyVideos = document.querySelectorAll("video[preload='none']");

  if (!lazyVideos.length) {
    return;
  }

  if (!("IntersectionObserver" in window)) {
    lazyVideos.forEach((video) => {
      video.preload = "metadata";
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const video = entry.target;
          video.preload = "metadata";
          observer.unobserve(video);
        }
      });
    },
    { threshold: 0.25 },
  );

  lazyVideos.forEach((video) => {
    observer.observe(video);
  });
}

function startWorkshopCountdown() {
  const divCountdown = document.getElementById("div-countdown");
  const countdownEl = document.getElementById("countdown");
  const logoHero = document.getElementById("logo-hero");

  function updateCountdown() {
    const now = new Date();
    const distance = workshopStartDate - now;

    if (distance <= 0) {
      divCountdown.style.display = "none";
      logoHero.style.display = "block";
      if (interval) {
        clearInterval(interval);
      }
      return;
    }

    divCountdown.style.display = "block";
    logoHero.style.display = "none";

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownEl.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  let interval = null;
  updateCountdown();

  if (new Date() < workshopStartDate) {
    interval = setInterval(updateCountdown, 1000);
  }
}
