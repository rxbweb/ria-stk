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
    nextEl: ".js-partners-next"
  },
  pagination: {
    el: ".js-partners-pagination",
    clickable: true
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
      spaceBetween: 30
    },
    1100: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    1366: {
      slidesPerView: 5,
      spaceBetween: 30
    },
    1600: {
      slidesPerView: 6,
      spaceBetween: 30
    }
  }
});
new Swiper(".js-projects-swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  keyboard: true,
  navigation: {
    prevEl: ".js-projects-prev",
    nextEl: ".js-projects-next"
  },
  pagination: {
    el: ".js-projects-pagination",
    clickable: true
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
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
    nextEl: ".js-history-next"
  },
  pagination: {
    el: ".js-history-pagination",
    clickable: true
  }
});
new Swiper(".hero__slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  keyboard: true,
  pagination: {
    el: ".js-hero-bullets",
    clickable: true
  }
});
new Swiper(".hero__books-swiper", {
  slidesPerView: 3,
  spaceBetween: -195,
  loop: true,
  speed: 500,
  centeredSlides: false,
  pagination: {
    el: ".js-books-pagination",
    clickable: true
  },
  // autoplay: {
  // 	delay: 4000,
  // },
  breakpoints: {
    0: {
      spaceBetween: -150,
      centeredSlides: false
    },
    768: {
      centeredSlides: false
    },
    1040: {
      centeredSlides: true
    },
    1261: {
      centeredSlides: false
    },
    1441: {
      slidesPerView: 4,
      spaceBetween: -195,
      centeredSlides: false
    },
    1641: {
      slidesPerView: 5,
      spaceBetween: -195,
      centeredSlides: false
    },
    1700: {
      slidesPerView: 6,
      spaceBetween: -195,
      centeredSlides: false
    }
  },
  on: {
    init: function init() {
      swiperClassHandler(this.activeIndex, '.hero__books-slide');
    },
    slideChange: function slideChange() {
      swiperClassHandler(this.activeIndex, '.hero__books-slide');
    }
  }
});
function swiperClassHandler(i, csl) {
  var sliders = document.querySelectorAll(csl);
  sliders.forEach(function (n) {
    return n.classList.remove('swiper-slide__1', 'swiper-slide__2', 'swiper-slide__3', 'swiper-slide__4', 'swiper-slide__5', 'swiper-slide__6');
  });
  Array.prototype.slice.call(sliders, i, i + 1).forEach(function (n) {
    return n.classList.add('swiper-slide__1');
  });
  Array.prototype.slice.call(sliders, i + 1, i + 2).forEach(function (n) {
    return n.classList.add('swiper-slide__2');
  });
  Array.prototype.slice.call(sliders, i + 2, i + 3).forEach(function (n) {
    return n.classList.add('swiper-slide__3');
  });
  Array.prototype.slice.call(sliders, i + 3, i + 4).forEach(function (n) {
    return n.classList.add('swiper-slide__4');
  });
  Array.prototype.slice.call(sliders, i + 4, i + 5).forEach(function (n) {
    return n.classList.add('swiper-slide__5');
  });
  Array.prototype.slice.call(sliders, i + 5, i + 6).forEach(function (n) {
    return n.classList.add('swiper-slide__6');
  });
}
function init() {
  var mapElements = document.querySelectorAll('.map');
  if (mapElements.length === 0) {
    return;
  }
  var markers = [{
    lat: 55.708495,
    lon: 37.656412,
    title: 'Метка 1'
  }];
  if (!markers || markers.length === 0) {
    console.log('Объект "markers" не найден или пуст.');
    return;
  }
  mapElements.forEach(function (mapElement) {
    var map = new ymaps.Map(mapElement, {
      center: [55.708495, 37.656412],
      zoom: 18
    });
    markers.forEach(function (marker) {
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
document.addEventListener('DOMContentLoaded', function () {
  var navList = document.querySelector('.header__nav-list');
  var wrapper = document.querySelector('.header__wrapper');
  if (!navList || !wrapper) {
    console.error('Required elements are missing.');
    return;
  }
  var navItems = Array.from(navList.querySelectorAll('.header__nav-item'));
  if (navItems.length === 0) {
    console.error('No navigation items found.');
    return;
  }
  function checkOverflow() {
    while (wrapper.firstChild) {
      navList.appendChild(wrapper.firstChild);
    }
    var overflow = false;
    var currentItems = Array.from(navList.querySelectorAll('.header__nav-item'));
    currentItems.forEach(function (item) {
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
$(document).ready(function () {
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

  $('.select__active').on('click', function (e) {
    e.preventDefault();
    $(this).next('.select__list').toggleClass('is-active');
  });
  $('.select__item').on('click', function (e) {
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
  $(document).on('click', function (e) {
    if (!$(e.target).closest('.select').length) {
      $('.select__list').removeClass('is-active');
    }
  });
  $('.header__toggle').on('click', function (e) {
    e.preventDefault();
    $('.menu').toggleClass('is-active');
    $('body').toggleClass('no-scroll');
  });
  $('.accordion__button').on('click', function (e) {
    e.preventDefault();
    var accordionWrapper = $(this).next('.accordion__wrapper');
    var accordionButton = $(this).attr('data-accordion');
    var accordionImg = $('.accordion__pic[data-img="' + accordionButton + '"]');
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