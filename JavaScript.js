document.getElementById("nav-toggle").onclick = function () {
    document.getElementById("nav-content").classList.toggle("hidden");
  };

  function scrollfunction(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  }

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