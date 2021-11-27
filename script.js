let hamburger = document.getElementById('hamburger');
let navbar = document.querySelector('.navbar');
let menuWrapper = document.querySelector('.menu-wrapper');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('fa-times');
    menuWrapper.classList.toggle('active');
})

window.onscroll = () => {
    hamburger.classList.remove('fa-times');
    menuWrapper.classList.remove('active');
    navbar.classList.add('active');
}


// -------------home section------------------------
let homeMainImg = document.querySelector('.home-main-img');
let homeImgSlider = document.querySelectorAll('.image-slider img');

homeImgSlider.forEach(function (image) {
    image.addEventListener('mouseover', () => {
        let src = image.getAttribute('src');
        homeMainImg.src = src;
    })
})

var swiper = new Swiper(".reviews-slider", {
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
    },
});
(function() {
    var elements;
    var windowHeight;
  
    function init() {
      elements = document.querySelectorAll('.fade-in');
      windowHeight = window.innerHeight;
    }
  
    function checkPosition() {
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var positionFromTop = elements[i].getBoundingClientRect().top;
  
        if (positionFromTop - windowHeight <= 0) {
          element.classList.add('active');
          element.classList.remove('hidden');
        }
      }
    }
  
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  
    init();
    checkPosition();
  })();
(function() {
    var elements;
    var windowHeight;
  
    function init() {
      elements = document.querySelectorAll('.fade-in-left');
      windowHeight = window.innerHeight;
    }
  
    function checkPosition() {
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var positionFromTop = elements[i].getBoundingClientRect().top;
  
        if (positionFromTop - windowHeight <= 0) {
          element.classList.add('active');
          element.classList.remove('hidden');
        }
      }
    }
  
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  
    init();
    checkPosition();
  })();
(function() {
    var elements;
    var windowHeight;
  
    function init() {
      elements = document.querySelectorAll('.fade-in-right');
      windowHeight = window.innerHeight;
    }
  
    function checkPosition() {
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var positionFromTop = elements[i].getBoundingClientRect().top;
  
        if (positionFromTop - windowHeight <= 0) {
          element.classList.add('active');
          element.classList.remove('hidden');
        }
      }
    }
  
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  
    init();
    checkPosition();
  })();