document.addEventListener("DOMContentLoaded", () => {
  startCountUpAnimation();
  startImageLoop();
  renderPaintingGallery();
  startPaintingGalleryModal();
  startLazyVideoLoading();
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
    description: `الفنانة التشكيلية أروى أحمد الضيفي – تحليق النسر في الهواء
أروى أحمد الضيفي, فن تشكيلي, طائر جارح, نسر, تحليق, ريش, ألوان طبيعية, خلفية ضبابية, تفاصيل دقيقة, لوحة زيتية, فن حديث
`,
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
    description: `الفنانة التشكيلية أروى أحمد الضيفي – احتضان عاطفي بين الجيل القديم والجيل الصغير
أروى أحمد الضيفي, فن تشكيلي, رسم بالفحم, مشاعر, احتضان, جيل قديم, جيل صغير, تفاصيل دقيقة, لوحة عاطفية, فن معاصر`,
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
    description: `الفنانة التشكيلية أروى أحمد الضيفي – وجه محاصر بالورق  
أروى أحمد الضيفي, فن تشكيلي, وجه, ورق ملفوف, ديكستر مورغان, مسلسل ديكستر, قاتل متسلسل, تفاصيل دقيقة, تعبير, ظلال, فن حديث`,
  },
  {
    id: 4,
    fullSrc: "static/pic/painting-4.webp",
    srcset:
      "static/pic/painting-4-400.webp 400w, static/pic/painting-4.webp 600w",
    fallbackSrc: "static/pic/painting_%20(4).jpeg",
    alt: "لوحة فنية من أعمال أروى 4",
    width: 1200,
    height: 1600,
    description: `الفنانة التشكيلية أروى أحمد الضيفي – حصان واقف على قدميه الخلفيتين، ألوان زاهية، حركة، تفاصيل العضلات والفراء، خلفية سماوية، فن تشكيلي حديث، لوحة حيوية، حركة رقص، تعابير الحصان.`,
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
    description: `الفنانة التشكيلية أروى أحمد الضيفي – رسم الملك سلمان ملك المملكة
أروى أحمد الضيفي, فن تشكيلي, الملك سلمان, شخصية ملكية, وجه, تفاصيل دقيقة, خلفية بسيطة, فن حديث`,
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
    description: `الفنانة التشكيلية أروى أحمد الضيفي – آيات قرآنية مكتوبة بخط عربي متقن ضمن تصميم دائري، ألوان ذهبية وبيضاء على خلفية سوداء، تفاصيل دقيقة، فن حديث، إسلامي، قرآن، مصحف، خطوط عربية، زخارف دائرية، طابع روحاني`,
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
    description: `الفنانة التشكيلية أروى أحمد الضيفي – جملين في الصحراء
أروى أحمد الضيفي, فن تشكيلي, جملين, بعير, صحراء, حيوانات, طبيعة, تفاصيل دقيقة, فن حديث, ألوان واقعية, واقعية, لوحة بيضاء وخلفية هادئة
`,
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
    description: `الفنانة التشكيلية أروى أحمد الضيفي – الملك سلمان ملك المملكة العربية السعودية، رسمة للملك سلمان، تفاصيل دقيقة، ألوان طبيعية، تقليد واقعي، خطوط واضحة، وجه الملك، عمامة، ثوب سعودي، خلفية هادئة، فن معاصر، لوحة رسمت بالزيت، صورة شخصية للملك.
`,
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
    description: `الفنانة التشكيلية أروى أحمد الضيفي – حصان رمادي في الطبيعة
أروى أحمد الضيفي, فن تشكيلي, حصان, خيل, طبيعة, لوحة واقعية, ألوان طبيعية, تفاصيل دقيقة, حركة الحيوان, خلفية مفتوحة
`,
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
    description: `الفنانة التشكيلية أروى أحمد الضيفي – أمير المملكة محمد بن سلمان، أمير السعودية وولي العهد
أروى أحمد الضيفي, فن تشكيلي, الملك محمد بن سلمان, ولي العهد, ملك المملكة العربية السعودية, بورتريه, تفاصيل الوجه, ألوان طبيعية, لوحة رسم, فن حديث
`
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
    description: "عمل فني من معرض أروى",
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
    description: `الفنانة التشكيلية أروى أحمد الضيفي – الملك عبد العزيز
الملك عبد العزيز، مؤسس المملكة العربية السعودية، رسم بورتريه، تقاليد، تاريخ، زعيم، زي شعبي، تفاصيل دقيقة، ألوان زيتية، فن حديث
`,
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
    description: "عمل فني من معرض أروى",
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
    description: "عمل فني من معرض أروى",
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
    description: `الفنانة التشكيلية أروى أحمد الضيفي – الحاج يدعو في مكة أثناء العمرة
أروى أحمد الضيفي, فن تشكيلي, حاج, حجاج, عمرة, معتمر, يدين مرفوعتين, خلفية ضبابية, ألوان دافئة, لحظة روحية, تفاصيل دقيقة
`,
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
    description: `الفنانة التشكيلية أروى أحمد الضيفي – الجمل في الغروب
تمت بيع هذه اللوحة.
أروى أحمد الضيفي, فن تشكيلي, لوحة مباع, جمل, غروب, صحراء, ألوان دافئة, منظر طبيعي, لوحة حمراء, فن ملون`,
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
    description: `الفنانة التشكيلية أروى أحمد الضيفي – انعكاس المشاعر على اليد
تمت بيع هذه اللوحة.
أروى أحمد الضيفي, فن تشكيلي, لوحة مباع, يدين, حبال, ألوان زاهية, حركة, خلفية سوداء, تفاصيل دقيقة, فن حديث`,
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
    description: `الفنانة التشكيلية أروى أحمد الضيفي – رحلة الإيمان
تمت بيع هذه اللوحة.
أروى أحمد الضيفي, فن تشكيلي, لوحة مباع, مصحف, مسبحة, ريشة, ألوان ترابية, خلفية بسيطة, روحانية, لوحة هادئة`,
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
    description: `الفنانة التشكيلية أروى أحمد الضيفي – الحصان والنظرة
تمت بيع هذه اللوحة.
أروى أحمد الضيفي, فن تشكيلي, لوحة مباع, حصان, زي تقليدي, ألوان مختلطة, حركة, واقعية, تفاصيل, فن معاصر`,
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
];

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
    button.dataset.paintingDescription = painting.description;
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
