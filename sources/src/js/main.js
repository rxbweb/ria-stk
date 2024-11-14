"use strict";

$(document).ready(function () {
   // Your code here

});

// Your functions here

new Swiper(".js-partners-swiper", {
   slidesPerView: 1,
   spaceBetween: 10,
   keyboard: true,
   navigation: {
      prevEl: ".js-partners-prev",
      nextEl: ".js-partners-next",
   },
   pagination: {
      el: ".js-partners-pagination",
      clickable: true,
   },
   breakpoints: {
      0: {
         slidesPerView: 'auto',
         spaceBetween: 10,
         initialSlide: 3,
         centeredSlides: 'true',
         loop: true
      },
      768: {
         slidesPerView: 3,
         spaceBetween: 30,
      },
      1100: {
         slidesPerView: 4,
         spaceBetween: 30,
      },
      1366: {
         slidesPerView: 5,
         spaceBetween: 30,
      },
      1600: {
         slidesPerView: 6,
         spaceBetween: 30,
      },
   },
});

new Swiper(".js-projects-swiper", {
   slidesPerView: 1,
   spaceBetween: 20,
   keyboard: true,
   navigation: {
      prevEl: ".js-projects-prev",
      nextEl: ".js-projects-next",
   },
   pagination: {
      el: ".js-projects-pagination",
      clickable: true,
   },
   breakpoints: {
      768: {
         slidesPerView: 2,
         spaceBetween: 30,
      },
      1200: {
         slidesPerView: 3,
         spaceBetween: 40,
      },
   },
});

new Swiper(".js-history-swiper", {
   slidesPerView: 1,
   spaceBetween: 20,
   effect: "fade",
   speed: 500,
   fadeEffect: {
      crossFade: true
   },
   navigation: {
      prevEl: ".js-history-prev",
      nextEl: ".js-history-next",
   },
   pagination: {
      el: ".js-history-pagination",
      clickable: true,
   },
});

new Swiper(".hero__books-img-swiper", {
   slidesPerView: "auto",
   effect: "cards",
   grabCursor: true,
   spaceBetween: 50,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   cardsEffect: {
      slideShadows: false,
      rotate: false,
      perSlideOffset: 30,
      perSlideRotate: 0,
   },
   // on: {
   //    init: function () {
   //       const slides = this.slides;
   //       slides.forEach((slide, index) => {
   //          const content = slide.querySelector('img');
   //          if (content) {
   //             content.style.transform = `scale(${1 - index * 0.1})`;
   //           }
   //       });
   //    },
   // },
   on: {
      init: function () {
        applyScale(this);
      },
      slideChange: function () {
        applyScale(this);
      },
    },
});

function applyScale(swiper) {
   const slides = swiper.slides;
   slides.forEach((slide, index) => {
     const content = slide.querySelector('img');
     if (content) {
       content.style.transform = `scale(${1 - index * 0.1})`;
     }
   });
 }

function init() {
   var mapElements = document.querySelectorAll('.map');
   if (mapElements.length === 0) {
      return;
   }

   var markers = [
      { lat: 55.708495, lon: 37.656412, title: 'Метка 1' },
   ];

   if (!markers || markers.length === 0) {
      console.log('Объект "markers" не найден или пуст.');
      return;
   }

   mapElements.forEach(function(mapElement) {
      var map = new ymaps.Map(mapElement, {
         center: [55.708495, 37.656412],
         zoom: 18
      });

      markers.forEach(function(marker) {
         var placemark = new ymaps.Placemark([marker.lat, marker.lon], {
            balloonContent: marker.title
         });

         map.geoObjects.add(placemark);
      });
   });
}

if (typeof ymaps !== 'undefined') {
   ymaps.ready(init);
} else {
   console.log('Яндекс карты не подключены.');
}

document.addEventListener('DOMContentLoaded', function() {
   const navList = document.querySelector('.header__nav-list');
   const wrapper = document.querySelector('.header__wrapper');

   if (!navList || !wrapper) {
      console.error('Required elements are missing.');
      return;
   }

   const navItems = Array.from(navList.querySelectorAll('.header__nav-item'));

   if (navItems.length === 0) {
      console.error('No navigation items found.');
      return;
   }

   function checkOverflow() {
      // Возвращаем все элементы обратно в navList для повторной проверки
      while (wrapper.firstChild) {
         navList.appendChild(wrapper.firstChild);
      }

      let overflow = false;
      let currentItems = Array.from(navList.querySelectorAll('.header__nav-item'));

      currentItems.forEach(item => {
         console.log('navList.scrollWidth ', navList.scrollWidth)
         console.log('navList.clientWidth ', navList.clientWidth)
         if (navList.scrollWidth > navList.clientWidth) {
            overflow = true;
            wrapper.appendChild(item);
         }
      });

      if (overflow) {
         // wrapper.style.display = 'block';
      } else {
         wrapper.style.display = 'none';
      }
   }

   checkOverflow();

   window.addEventListener('resize', checkOverflow);
});

$(document).ready(function() {
   $('.accordion__button').on('click', function(e) {
      e.preventDefault();
      var $wrapper = $(this).next('.accordion__wrapper');
      if ($wrapper.length) {
         $wrapper.slideToggle(300);
         $(this).parent('.accordion__item').toggleClass('is-active');
      }
   });
});