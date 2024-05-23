document.getElementById("nav-toggle").onclick = function () {
    document.getElementById("nav-content").classList.toggle("hidden");
  };

  function scrollfunction(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  }


  let defaultTransform = 0;
  function goNext() {
      defaultTransform = defaultTransform - 380;
      var slider = document.getElementById("slider");
      if (Math.abs(defaultTransform) >= slider.scrollWidth / 1.7) defaultTransform = 0;
      slider.style.transform = "translateX(" + defaultTransform + "px)";
  }
  next.addEventListener("click", goNext);
  function goPrev() {
      var slider = document.getElementById("slider");
      if (Math.abs(defaultTransform) === 0) defaultTransform = 0;
      else defaultTransform = defaultTransform + 380;
      slider.style.transform = "translateX(" + defaultTransform + "px)";
  }
  prev.addEventListener("click", goPrev)


  let defaultTransform2 = 0;
  function goNext2() {
      defaultTransform2 = defaultTransform2 - 380;
      var slider = document.getElementById("slider2");
      if (Math.abs(defaultTransform2) >= slider.scrollWidth / 1.7) defaultTransform2 = 0;
      slider.style.transform = "translateX(" + defaultTransform2 + "px)";
  }
  next2.addEventListener("click", goNext2);

  function goPrev2() {
      var slider = document.getElementById("slider2");
      if (Math.abs(defaultTransform2) === 0) defaultTransform2 = 0;
      else defaultTransform2 = defaultTransform2 + 380;
      slider.style.transform = "translateX(" + defaultTransform2 + "px)";
  }
  prev2.addEventListener("click", goPrev2)

  /*
  function rotateDishPhotosOnScroll() {
    const dishPhotos = document.querySelectorAll("#dish-photo");

    dishPhotos.forEach((dishPhoto) => {
      const scrollY = window.scrollY || window.pageYOffset;
      const rotationAngle = scrollY * 0.2;

      dishPhoto.style.transform = `rotate(${rotationAngle}deg)`;
    });
  }

  window.onscroll = function () {
    rotateDishPhotosOnScroll();
  };
  */

  var swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true, // Enable loop mode (optional)
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  let scrollPosition = 0;
  const cardWidth = 400; // Adjust this according to your card width

  function scrollRight() {
    const scroller = document.getElementById("scroller");
    if (scroller) {
      const maxScroll = scroller.scrollWidth - scroller.clientWidth;
      scrollPosition += cardWidth;
      if (scrollPosition > maxScroll) {
        scrollPosition = 0; // Reset to beginning if end is reached
      }
      scroller.scrollTo({
        top: 0,
        left: scrollPosition,
        behavior: "smooth",
      });
    } else {
      console.error("Scroller element not found!");
    }
  }

  function scrollRight2() {
    const scroller = document.getElementById("scroller2");
    if (scroller) {
      const maxScroll = scroller.scrollWidth - scroller.clientWidth;
      scrollPosition += cardWidth;
      if (scrollPosition > maxScroll) {
        scrollPosition = 0; // Reset to beginning if end is reached
      }
      scroller.scrollTo({
        top: 0,
        left: scrollPosition,
        behavior: "smooth",
      });
    } else {
      console.error("Scroller element not found!");
    }
  }


  const config = {
    type: 'carousel',
    startAt: 0,
    perView: 4,
    gap: 32,
    breakpoints: {
      1280: {
        perView: 3,
      },
      1024: {
        perView: 2,
      },
      768: {
        perView: 1,
      }
    }
  }
  new Glide('.glide', config).mount()