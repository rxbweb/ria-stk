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

new Swiper(".hero__slider", {
   slidesPerView: 1,
   spaceBetween: 20,
   simulateTouch: false,
   allowTouchMove: false,
   keyboard: true,
   speed: 500,
   // autoplay: {
   //    delay: 10000,
   //    disableOnInteraction: false,
   // },
   pagination: {
      el: ".js-hero-bullets",
      clickable: true,
   },
});

document.querySelectorAll(".hero__books-swiper").forEach(swiperContainer => {
   const swiper = new Swiper(swiperContainer, {
      slidesPerView: 3,
      spaceBetween: -195,
      loop: true,
      speed: 700,
      centeredSlides: false,
      allowTouchMove: false,
      autoplay: {
         delay: 3000,
         disableOnInteraction: false,
      },
      pagination: {
         el: swiperContainer.querySelector(".js-books-pagination"),
         clickable: true
      },
      breakpoints: {
         0: {
            spaceBetween: -150,
            centeredSlides: false,
         },
         768: {
            centeredSlides: false,
         },
         1040: {
            centeredSlides: true,
         },
         1261: {
            centeredSlides: false,
         },
         1441: {
            slidesPerView: 4,
            spaceBetween: -195,
            centeredSlides: false,
         },
         1641: {
            slidesPerView: 5,
            spaceBetween: -195,
            centeredSlides: false,
         },
         1700: {
            slidesPerView: 6,
            spaceBetween: -195,
            centeredSlides: false,
         },
      },
      on: {
         init: function () {
            updateFractionPagination(this);
            swiperClassHandler(this.activeIndex, swiperContainer.querySelectorAll('.hero__books-slide'));
         },
         slideChange: function () {
            updateFractionPagination(this);
            swiperClassHandler(this.activeIndex, swiperContainer.querySelectorAll('.hero__books-slide'));
         },
      },
   });

   swiperContainer.querySelectorAll('.swiper-slide').forEach((slide, index) => {
      slide.addEventListener('click', () => {
         swiper.slideToLoop(index);
      });
   });
});

function updateFractionPagination(swiper) {
   const fractionPaginationCurrent = swiper.el.querySelector(".js-books-pagination-current");
   const fractionPaginationTotal = swiper.el.querySelector(".js-books-pagination-total");
   if (fractionPaginationCurrent && fractionPaginationTotal) {
      const currentIndex = swiper.realIndex + 1;
      const totalSlides = swiper.slides.length;

      fractionPaginationCurrent.innerHTML = currentIndex <= 9 ? `0${currentIndex}` : currentIndex;
      fractionPaginationTotal.innerHTML = totalSlides <= 9 ? `0${totalSlides}` : totalSlides;
   }
}

function swiperClassHandler(i, sliders) {
   sliders.forEach(n => n.classList.remove('swiper-slide__1', 'swiper-slide__2', 'swiper-slide__3', 'swiper-slide__4', 'swiper-slide__5', 'swiper-slide__6'));

   for (let j = 1; j <= 6; j++) {
      const slice = Array.from(sliders).slice(i + j - 1, i + j);
      slice.forEach(n => n.classList.add(`swiper-slide__${j}`));
   }
}

new Swiper(".content__swiper-slider", {
   slidesPerView: 1,
   spaceBetween: 20,
   keyboard: true,
   effect: "fade",
   speed: 300,
   fadeEffect: {
      crossFade: true
   },
   navigation: {
      prevEl: ".content__swiper-prev",
      nextEl: ".content__swiper-next",
   },
});

new Swiper(".books__swiper-slider", {
   slidesPerView: 4,
   spaceBetween: 40,
   keyboard: true,
   pagination: {
      el: ".js-books-pagination",
      clickable: true,
   },
   navigation: {
      prevEl: ".js-books-prev",
      nextEl: ".js-books-next",
   },
});

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
      return;
   }

   const navItems = Array.from(navList.querySelectorAll('.header__nav-item'));

   if (navItems.length === 0) {
      return;
   }

   function checkOverflow() {
      while (wrapper.firstChild) {
         navList.appendChild(wrapper.firstChild);
      }

      let overflow = false;
      let currentItems = Array.from(navList.querySelectorAll('.header__nav-item'));

      currentItems.forEach(item => {
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
   // $(window).on('scroll', function() {
   //    const organization = $('.organization');
   //    const scrollTop = $(window).scrollTop();
   //    const elementOffset = organization.offset().top;
   //    const distance = elementOffset - scrollTop;

   //    if (distance < $(window).height() && distance >= 0) {
   //        organization.addClass('is-active');
   //    } else {
   //        organization.removeClass('is-active');
   //    }
   // });

   $('.select__active').on('click', function(e) {
      e.preventDefault();
      $(this).next('.select__list').toggleClass('is-active');
   })

   $('.select__item').on('click', function(e) {
      e.preventDefault();
      var selectedText = $(this).text();
      var $selectList = $(this).closest('.select__list');
      var $selectActive = $selectList.prev('.select__active');
      // Удаляем класс is-active у всех элементов .select__item в текущем списке
      $selectList.find('.select__item').removeClass('is-active');
      // Добавляем класс is-active кликнутому элементу
      $(this).addClass('is-active');
      // Обновляем текст в .select__active
      $selectActive.text(selectedText);
      // Скрываем список
      $selectList.removeClass('is-active');
   });
   
   $(document).on('click', function(e) {
      if (!$(e.target).closest('.select').length) {
         $('.select__list').removeClass('is-active');
      }
   });

   $('.header__toggle').on('click', function(e) {
      e.preventDefault();
      $(this).toggleClass('is-active');
      $('.menu').toggleClass('is-active');
      $('body').toggleClass('no-scroll');
   })

   $('.accordion__button').on('click', function(e) {
      e.preventDefault();
      const accordionWrapper = $(this).next('.accordion__wrapper');
      const accordionButton = $(this).attr('data-accordion');
      const accordionImg = $('.accordion__pic[data-img="' + accordionButton + '"]');
      if (accordionImg.length) {
         $('.accordion__pic').not('[data-img="' + accordionButton + '"]').removeClass('is-active');
         accordionImg.toggleClass('is-active');
      }
      if (accordionWrapper.length) {
         accordionWrapper.slideToggle(300);
         $(this).parent('.accordion__item').toggleClass('is-active');
      }
   });
});