"use strict";

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
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 8
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
    // dynamicBullets: true,
    // dynamicMainBullets: 6,
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
new Swiper(".hero__slideshow", {
  slidesPerView: 1,
  spaceBetween: 20,
  effect: "fade",
  speed: 500,
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: ".hero__bullets",
    clickable: true
  }
});

// Инициализация Swiper
var swiper = new Swiper(".history__swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  effect: "fade",
  speed: 500,
  fadeEffect: {
    crossFade: true
  },
  navigation: {
    prevEl: ".history__prev",
    nextEl: ".history__next"
  },
  pagination: {
    el: ".history__pagination",
    clickable: true
  },
  on: {
    // При изменении активного слайда
    slideChange: function slideChange() {
      syncActiveButton(swiper.activeIndex);
    }
  }
});

// Синхронизация кнопок и слайдов
var dateButtons = document.querySelectorAll(".history__dates-btn");

// Клик на кнопку - смена слайда
dateButtons.forEach(function (button, index) {
  button.addEventListener("click", function (e) {
    e.preventDefault();

    // Устанавливаем активный слайд
    swiper.slideTo(index);

    // Удаляем класс is-active у всех кнопок и добавляем только нужной
    setActiveButton(index);
  });
});

// Функция обновления активной кнопки при смене слайда
function syncActiveButton(activeIndex) {
  dateButtons.forEach(function (button) {
    return button.classList.remove("is-active");
  }); // Удаляем класс у всех
  if (dateButtons[activeIndex]) {
    dateButtons[activeIndex].classList.add("is-active"); // Добавляем только нужной
  }
}

// Установка активной кнопки вручную
function setActiveButton(index) {
  dateButtons.forEach(function (button) {
    return button.classList.remove("is-active");
  }); // Удаляем класс у всех
  if (dateButtons[index]) {
    dateButtons[index].classList.add("is-active"); // Добавляем только нужной
  }
}
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
    clickable: true
  }
});
document.querySelectorAll(".hero__books-swiper").forEach(function (swiperContainer) {
  var swiper = new Swiper(swiperContainer, {
    slidesPerView: 3,
    spaceBetween: -195,
    loop: true,
    speed: 700,
    centeredSlides: false,
    // allowTouchMove: false,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    pagination: {
      el: swiperContainer.querySelector(".js-books-pagination"),
      clickable: true
    },
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
        updateFractionPagination(this);
        swiperClassHandler(this.activeIndex, swiperContainer.querySelectorAll('.hero__books-slide'));
      },
      slideChange: function slideChange() {
        updateFractionPagination(this);
        swiperClassHandler(this.activeIndex, swiperContainer.querySelectorAll('.hero__books-slide'));
      }
    }
  });
  swiperContainer.querySelectorAll('.swiper-slide').forEach(function (slide, index) {
    slide.addEventListener('click', function () {
      swiper.slideToLoop(index);
    });
  });
});
function updateFractionPagination(swiper) {
  var fractionPaginationCurrent = swiper.el.querySelector(".js-books-pagination-current");
  var fractionPaginationTotal = swiper.el.querySelector(".js-books-pagination-total");
  if (fractionPaginationCurrent && fractionPaginationTotal) {
    var currentIndex = swiper.realIndex + 1;
    var totalSlides = swiper.slides.length;
    fractionPaginationCurrent.innerHTML = currentIndex <= 9 ? "0".concat(currentIndex) : currentIndex;
    fractionPaginationTotal.innerHTML = totalSlides <= 9 ? "0".concat(totalSlides) : totalSlides;
  }
}
function swiperClassHandler(i, sliders) {
  sliders.forEach(function (n) {
    return n.classList.remove('swiper-slide__1', 'swiper-slide__2', 'swiper-slide__3', 'swiper-slide__4', 'swiper-slide__5', 'swiper-slide__6');
  });
  var _loop = function _loop(j) {
    var slice = Array.from(sliders).slice(i + j - 1, i + j);
    slice.forEach(function (n) {
      return n.classList.add("swiper-slide__".concat(j));
    });
  };
  for (var j = 1; j <= 6; j++) {
    _loop(j);
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
    nextEl: ".content__swiper-next"
  }
});
new Swiper(".books__swiper-slider", {
  slidesPerView: 4,
  spaceBetween: 40,
  keyboard: true,
  pagination: {
    el: ".js-books-pagination",
    clickable: true
  },
  navigation: {
    prevEl: ".js-books-prev",
    nextEl: ".js-books-next"
  }
});
var isMobile = window.matchMedia("(max-width: 768px)").matches;
var nums = lozad('[data-nums]', {
  rootMargin: isMobile ? '-20px 0px' : '-100px 0px',
  threshold: 0.3,
  loaded: function loaded(el) {
    $(el).find('[data-value]').each(function () {
      var text = $(this).attr('data-value').replace(/\s/g, ''); // Убираем пробелы из атрибута

      $(this).prop('Counter', 0).animate({
        Counter: text
      }, {
        duration: 1100,
        easing: 'swing',
        step: function step(now) {
          // Форматирование числа с пробелами
          var formattedNumber = Math.ceil(now).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
          $(this).text(formattedNumber); // Устанавливаем отформатированное значение
        }
      });
    });
  }
});
nums.observe();
var phoneMaskModule = {
  init: function init() {
    var $phoneElements = $('[data-name="phone"]');
    if ($phoneElements.length === 0) {
      console.warn('Нет элементов с data-name="phone" на странице.');
      return;
    }
    this.applyMasks($phoneElements);
  },
  applyMasks: function applyMasks($elements) {
    $elements.each(function () {
      var $element = $(this);
      if (!$element.length) {
        console.warn('Элемент с data-name="phone" не найден.');
        return;
      }

      // Применение маски для каждого элемента
      IMask($element[0], {
        mask: '+{7}(000)000-00-00'
      });
    });
  }
};
var mapModule = {
  init: function init() {
    if (typeof ymaps === 'undefined') {
      console.log('Яндекс карты не подключены.');
      return;
    }
    ymaps.ready(this.initializeMaps);
  },
  initializeMaps: function initializeMaps() {
    var mapElements = document.querySelectorAll('.map');
    if (!mapElements.length) {
      console.warn('Нет элементов с классом .map на странице.');
      return;
    }
    var markers = [{
      lat: 55.708495,
      lon: 37.656412,
      title: 'Метка 1'
    }];
    if (!markers || markers.length === 0) {
      console.warn('Объект "markers" не найден или пуст.');
      return;
    }
    mapElements.forEach(function (mapElement, index) {
      if (!mapElement) {
        console.warn("\u042D\u043B\u0435\u043C\u0435\u043D\u0442 \u043A\u0430\u0440\u0442\u044B \u0441 \u0438\u043D\u0434\u0435\u043A\u0441\u043E\u043C ".concat(index, " \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D."));
        return;
      }
      var map = new ymaps.Map(mapElement, {
        center: [55.708495, 37.656412],
        zoom: 18
      });
      markers.forEach(function (marker, markerIndex) {
        if (!marker.lat || !marker.lon) {
          console.warn("\u041C\u0430\u0440\u043A\u0435\u0440 \u0441 \u0438\u043D\u0434\u0435\u043A\u0441\u043E\u043C ".concat(markerIndex, " \u0438\u043C\u0435\u0435\u0442 \u043D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0435 \u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442\u044B."));
          return;
        }
        var placemark = new ymaps.Placemark([marker.lat, marker.lon], {
          balloonContent: marker.title
        });
        map.geoObjects.add(placemark);
      });
    });
  }
};
var navModule = {
  init: function init() {
    var $navList = $('.header__nav-list');
    var $boxNav = $('.header__box-nav');
    var $headerBox = $boxNav.closest('.header__box'); // Ищем контейнер header__box
    var $burger = $('.header__burger'); // Находим кнопку бургер

    if (!$navList.length || !$boxNav.length || !$burger.length) {
      return;
    }
    this.navList = $navList;
    this.boxNav = $boxNav;
    this.headerBox = $headerBox;
    this.burger = $burger;
    $(window).on('resize', this.checkOverflow.bind(this));
    $burger.on('click', this.toggleBoxActive.bind(this)); // Добавляем обработчик клика по бургеру

    this.checkOverflow();
  },
  checkOverflow: function checkOverflow() {
    if (!this.navList.length || !this.boxNav.length) {
      return;
    }

    // Возвращаем все элементы из boxNav обратно в navList
    while (this.boxNav[0].firstChild) {
      this.navList.append(this.boxNav[0].firstChild);
    }

    // Перемещаем элементы, которые не помещаются
    var navListItems = Array.from(this.navList.children('.header__nav-item'));
    for (var i = navListItems.length - 1; i >= 0; i--) {
      if (this.navList[0].scrollWidth > this.navList[0].clientWidth) {
        // Убираем последний элемент из navList и добавляем его в начало boxNav
        var item = navListItems[i];
        this.boxNav.prepend(item);
      } else {
        break;
      }
    }
  },
  toggleBoxActive: function toggleBoxActive() {
    // Проверяем, есть ли элементы внутри boxNav
    if (this.boxNav.children().length > 0) {
      this.headerBox.toggleClass('is-active'); // Добавляем класс на header__box
      this.burger.toggleClass('is-active'); // Добавляем класс на header__burger
    } else {
      this.headerBox.removeClass('is-active'); // Убираем класс с header__box
      this.burger.removeClass('is-active'); // Убираем класс с header__burger
    }
  }
};
var selectModule = {
  init: function init() {
    this.initSelectEvents();
    this.initMenuToggle();
  },
  initSelectEvents: function initSelectEvents() {
    var $selectActive = $('.select__active');
    if (!$selectActive.length) {
      return;
    }
    $selectActive.on('click', this.toggleSelectList);
    var $selectItems = $('.select__item');
    if (!$selectItems.length) {
      return;
    }
    $selectItems.on('click', this.selectItem);
    $(document).on('click', this.closeSelectList);
  },
  toggleSelectList: function toggleSelectList(e) {
    e.preventDefault();
    var $button = $(e.currentTarget);
    var $selectList = $button.next('.select__list');
    if (!$selectList.length) {
      return;
    }
    $selectList.toggleClass('is-active');
  },
  selectItem: function selectItem(e) {
    e.preventDefault();
    var $item = $(e.currentTarget);
    var selectedText = $item.text();
    var $selectList = $item.closest('.select__list');
    var $selectActive = $selectList.prev('.select__active');
    if (!$selectActive.length) {
      return;
    }
    if (!$selectList.length) {
      return;
    }
    $selectList.find('.select__item').removeClass('is-active');
    $item.addClass('is-active');
    $selectActive.html("<span>".concat(selectedText, "</span>"));
    $selectList.removeClass('is-active');
  },
  closeSelectList: function closeSelectList(e) {
    if (!$(e.target).closest('.select').length) {
      $('.select__list').removeClass('is-active');
    }
  },
  initMenuToggle: function initMenuToggle() {
    var $menuToggle = $('.header__toggle');
    if (!$menuToggle.length) {
      return;
    }
    $menuToggle.on('click', this.toggleMenu);
  },
  toggleMenu: function toggleMenu(e) {
    e.preventDefault();
    var $toggleButton = $(e.currentTarget);
    var $menu = $('.menu');
    var $body = $('body');
    if (!$menu.length) {
      return;
    }
    $toggleButton.toggleClass('is-active');
    $menu.toggleClass('is-active');
    $body.toggleClass('no-scroll');
  }
};
var accordionModule = {
  init: function init() {
    this.initEvents();
  },
  initEvents: function initEvents() {
    var $buttons = $('.accordion__button');
    if (!$buttons.length) {
      return;
    }
    $buttons.on('click', this.toggleAccordion);
  },
  toggleAccordion: function toggleAccordion(e) {
    if (!e || !e.currentTarget) {
      return;
    }
    e.preventDefault();
    var $button = $(e.currentTarget);
    if (!$button.hasClass('accordion__button')) {
      return;
    }
    var $accordionWrapper = $button.next('.accordion__wrapper');
    var accordionButton = $button.attr('data-accordion');
    if (!accordionButton) {
      return;
    }
    var $accordionImg = $('.accordion__pic[data-img="' + accordionButton + '"]');
    if ($accordionImg.length) {
      $('.accordion__pic').not('[data-img="' + accordionButton + '"]').removeClass('is-active');
      $accordionImg.toggleClass('is-active');
    }
    if ($accordionWrapper.length) {
      if ($accordionWrapper.is(':animated')) {
        return;
      }
      $accordionWrapper.slideToggle(300);
      $button.parent('.accordion__item').toggleClass('is-active');
    }
  }
};

// const lozadModule = {
//    init() {
//       if (typeof lozad === 'undefined') {
//          console.warn('Библиотека lozad не подключена.');
//          return;
//       }

//       const $lozadElements = $('.lozad');
//       if ($lozadElements.length === 0) {
//          console.warn('Нет элементов с классом .lozad на странице.');
//          return;
//       }

//       this.initObserver($lozadElements);
//    },

//    initObserver($elements) {
//       // Убедитесь, что передаем строку селектора для lozad
//       const observer = lozad($elements.get(0), { // передаем только первый элемент, если их несколько
//          rootMargin: '10px 0px',
//          threshold: 0.3,
//          loaded: function(el) {
//             // Когда изображение загружено, убираем прелоадер
//             const $el = $(el);
//             $el.removeClass('lozad');  // Убираем класс lozad
//             $el.css('background-image', 'none'); // Убираем фон-прелоадер
//          }
//       });

//       observer.observe();
//    }
// };

var observer = lozad('.lozad', {
  rootMargin: '10px 0px',
  threshold: 0.3
});
observer.observe();
$("form[name='form-callback']").each(function () {
  $(this).validate({
    rules: {
      "form-name": "required",
      "form-email": "required",
      "form-agree": "required"
    },
    messages: {
      "form-name": "Обязательное поле",
      "form-email": "Обязательное поле",
      "form-agree": "Обязательное поле"
    }
  });
});
$(document).ready(function () {
  // 1. Проверяем, есть ли элементы с классом .tabs-link на странице
  if ($('.tabs-link').length) {
    // 2. Добавляем событие на клик по .tabs-link
    $('.tabs-link').on('click', function (e) {
      e.preventDefault(); // 3. Останавливаем стандартное поведение ссылки

      // 4. Убираем класс .is-active у всех .tabs-link в родителе
      $(this).closest('.tabs__list').find('.tabs-link').removeClass('is-active');

      // 5. Добавляем класс .is-active только к текущей ссылке
      $(this).addClass('is-active');

      // 6. Получаем значение data-tabs у текущей ссылки
      var tabId = $(this).data('tabs');

      // 7. Получаем значение data-tabs у родителя
      var parentTabsData = $(this).closest('.tabs__list').data('tabs');

      // 8. Ищем блок с классом .tabs-content, у которого data-tabs равен значению из родителя
      var $tabsContent = $('.tabs-content[data-tabs="' + parentTabsData + '"]');
      if ($tabsContent.length) {
        // 9. Ищем элемент с data-tabs, равным значению из 3 шага
        var $tabItem = $tabsContent.find('.tabs-item[data-tabs="' + tabId + '"]');
        if ($tabItem.length) {
          // 10. Добавляем класс .is-active к найденному элементу
          $tabItem.addClass('is-active');

          // 11. Убираем класс .is-active у всех остальных .tabs-item в этом блоке
          $tabsContent.find('.tabs-item').not($tabItem).removeClass('is-active');
        }
      }
    });
  }
});
var authorsLabelModule = {
  init: function init() {
    this.$authorsLabel = $('.authors__label');
    if (this.$authorsLabel.length === 0) {
      return;
    }
    this.bindEvents();
  },
  bindEvents: function bindEvents() {
    if (window.matchMedia('(hover: none)').matches) {
      this.$authorsLabel.on('click', this.toggleActiveClass.bind(this));
    }
    $(document).on('click', this.handleDocumentClick.bind(this));
  },
  toggleActiveClass: function toggleActiveClass(event) {
    var $target = $(event.currentTarget);
    $target.toggleClass('is-active');
  },
  handleDocumentClick: function handleDocumentClick(event) {
    if (!$(event.target).closest(this.$authorsLabel).length) {
      this.$authorsLabel.removeClass('is-active');
    }
  }
};
Fancybox.bind("[data-fancybox]", {});
$('.books__like').on('click', function (e) {
  e.preventDefault();
  $(this).toggleClass('is-active');
});
var passwordToggleModule = {
  init: function init() {
    var $toggleButtons = $('.btn--eye');
    if ($toggleButtons.length === 0) {
      return;
    }
    this.bindToggleEvents($toggleButtons);
  },
  bindToggleEvents: function bindToggleEvents($buttons) {
    $buttons.each(function () {
      var $button = $(this);
      $button.on('click', function () {
        var $input = $button.siblings('input[type="password"], input[type="text"]');
        if ($input.length === 0) {
          return;
        }
        var currentType = $input.attr('type');
        var newType = currentType === 'password' ? 'text' : 'password';
        $input.attr('type', newType);

        // Toggle класса is-active на кликнутой кнопке
        $button.toggleClass('is-active');
      });
    });
  }
};
$(function () {
  // numsModule.init();
  // lozadModule.init();
  phoneMaskModule.init();
  mapModule.init();
  selectModule.init();
  accordionModule.init();
  navModule.init();
  passwordToggleModule.init();
  authorsLabelModule.init();
});