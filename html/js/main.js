"use strict";

$('.partners__swiper').each(function (index, element) {
  new Swiper(element, {
    slidesPerView: 1,
    spaceBetween: 10,
    keyboard: true,
    navigation: {
      prevEl: $(element).find('.swiper-button-prev')[0],
      nextEl: $(element).find('.swiper-button-next')[0]
    },
    pagination: {
      el: $(element).find('.swiper-pagination')[0],
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 8
    },
    breakpoints: {
      0: {
        slidesPerView: 'auto',
        spaceBetween: 10,
        initialSlide: 3,
        centeredSlides: true,
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
});
$('.projects__swiper').each(function (index, element) {
  new Swiper(element, {
    slidesPerView: 1,
    spaceBetween: 20,
    keyboard: true,
    navigation: {
      prevEl: $(element).find('.swiper-button-prev')[0],
      nextEl: $(element).find('.swiper-button-next')[0]
    },
    pagination: {
      el: $(element).find('.swiper-pagination')[0],
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
$('.history__swiper').each(function (index, element) {
  var swiper = new Swiper(element, {
    slidesPerView: 1,
    spaceBetween: 20,
    effect: "fade",
    speed: 500,
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      prevEl: $(element).find('.swiper-button-prev')[0],
      nextEl: $(element).find('.swiper-button-next')[0]
    },
    pagination: {
      el: $(element).find('.swiper-pagination')[0],
      clickable: true
    },
    on: {
      // При изменении активного слайда
      slideChange: function slideChange() {
        syncActiveButton(swiper.activeIndex);
      }
    }
  });
});
$('.card__table-swiper').each(function (index, element) {
  new Swiper(element, {
    slidesPerView: 2,
    spaceBetween: 15,
    keyboard: true,
    navigation: {
      prevEl: $(element).find('.swiper-button-prev')[0],
      nextEl: $(element).find('.swiper-button-next')[0]
    },
    pagination: {
      el: $(element).find('.swiper-pagination')[0],
      clickable: true
    },
    breakpoints: {
      768: {
        spaceBetween: 20
      }
    }
  });
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
$('.account__products-swiper').each(function (index, element) {
  new Swiper(element, {
    slidesPerView: 2,
    spaceBetween: 20,
    navigation: {
      nextEl: $(element).find('.swiper-button-next')[0],
      prevEl: $(element).find('.swiper-button-prev')[0]
    },
    pagination: {
      el: $(element).find('.swiper-pagination')[0],
      clickable: true
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      992: {
        slidesPerView: 3
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  });
});
$('.account__tabs-btn').on('click', function (e) {
  e.preventDefault();
  var tabId = $(this).data('tab');
  if (!tabId) return;
  var parentTabsData = $(this).closest('[data-tabs]').data('tabs');
  if (!parentTabsData) return;
  var $tabsContent = $('[data-content="' + parentTabsData + '"]');
  if (!$tabsContent.length) return;
  var $tabItem = $tabsContent.find('[data-tab="' + tabId + '"]');
  if (!$tabItem.length) return;
  $(this).addClass('is-active').siblings('.account__tabs-btn').removeClass('is-active');
  $tabsContent.addClass('is-changed');
  $tabItem.addClass('is-active').siblings('[data-tab]').removeClass('is-active');
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
$(".content__swiper-slider").each(function (index, element) {
  new Swiper(element, {
    slidesPerView: 1,
    spaceBetween: 20,
    keyboard: true,
    effect: "fade",
    speed: 300,
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      prevEl: $(element).closest('.content__swiper').find('.swiper-button-prev')[0],
      nextEl: $(element).closest('.content__swiper').find('.swiper-button-next')[0]
    }
  });
});
$('.books__swiper-slider').each(function (index, element) {
  new Swiper(element, {
    slidesPerView: 4,
    spaceBetween: 40,
    keyboard: true,
    pagination: {
      el: $(element).find('.swiper-pagination')[0],
      clickable: true
    },
    navigation: {
      prevEl: $(element).find('.swiper-button-prev')[0],
      nextEl: $(element).find('.swiper-button-next')[0]
    }
  });
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
      return;
    }
    this.applyMasks($phoneElements);
  },
  applyMasks: function applyMasks($elements) {
    $elements.each(function () {
      var $element = $(this);
      if (!$element.length) {
        return;
      }
      IMask($element[0], {
        mask: '+{7}(000)000-00-00'
      });
    });
  }
};
var mapModule = {
  init: function init() {
    if (typeof ymaps === 'undefined') {
      return;
    }
    ymaps.ready(this.initializeMaps);
  },
  initializeMaps: function initializeMaps() {
    var mapElements = document.querySelectorAll('.map');
    if (!mapElements.length) {
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
        this.burger.addClass('is-visible');
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
    $selectActive.addClass('is-selected');
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
$(document).ready(function () {
  function toggleControls() {
    if ($(window).width() <= 991) {
      $(".controls__toggle").on('click', function (e) {
        e.stopPropagation();
        $(this).toggleClass("is-active").next().stop().slideToggle(300);
      });
      $(document).on('click', function (e) {
        if (!$(e.target).closest(".controls").length) {
          $(".controls__toggle").removeClass("is-active").next().stop().slideUp(300);
        }
      });
    } else {
      $(".controls__toggle").off('click'); // Отключаем обработчики, если ширина больше 1360px
      $(document).off('click');
    }
  }
  toggleControls(); // Запускаем при загрузке
  $(window).on('resize', toggleControls); // Перезапускаем при изменении размера окна
});
$(document).ready(function () {
  function toggleSidebar() {
    if ($(window).width() <= 991) {
      $(".sidebar__toggle").on('click', function (e) {
        e.stopPropagation();
        $(this).toggleClass("is-active").next().stop().slideToggle(300);
      });
      $(document).on('click', function (e) {
        if (!$(e.target).closest(".sidebar").length) {
          $(".sidebar__toggle").removeClass("is-active").next().stop().slideUp(300);
        }
      });
    } else {
      $(".sidebar__toggle").off('click'); // Отключаем обработчики, если ширина больше 1360px
      $(document).off('click');
    }
  }
  toggleSidebar(); // Запускаем при загрузке
  $(window).on('resize', toggleSidebar); // Перезапускаем при изменении размера окна
});
var fileUploadModule = {
  init: function init() {
    var $fileInputs = $('.webform__label-file input');
    if (!$fileInputs.length) return;
    this.bindEvents($fileInputs);
  },
  bindEvents: function bindEvents($fileInputs) {
    $fileInputs.on('change', function () {
      fileUploadModule.updateFileName($(this));
    });
  },
  updateFileName: function updateFileName($input) {
    var fileName = $input[0].files.length ? $input[0].files[0].name : "Выберите файл";
    $input.closest('.webform__label-file').find('.webform__label-file-name').text(fileName);
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
$("[data-validate-form]").each(function () {
  var $form = $(this);
  $form.validate({
    errorPlacement: function errorPlacement(error, element) {
      if (element.closest(".agree").length) {
        // Если чекбокс внутри .agree — показываем .agree__error
        element.closest(".agree").find(".agree__error").show();
      } else if (element.closest(".webform__label").length) {
        // Если инпут внутри .webform__label — показываем .webform__label-error
        element.closest(".webform__label").find(".webform__label-error").show();
      } else {
        // Для остальных инпутов: добавляем класс и показываем .form__error
        var $label = element.closest(".form__label");
        $label.addClass("is-error");
        $label.find(".form__error").show();
      }
    },
    success: function success(label, element) {
      if ($(element).closest(".agree").length) {
        // Если чекбокс внутри .agree — скрываем .agree__error
        $(element).closest(".agree").find(".agree__error").hide();
      } else if ($(element).closest(".webform__label").length) {
        // Если инпут внутри .webform__label — скрываем .webform__label-error
        $(element).closest(".webform__label").find(".webform__label-error").hide();
      } else {
        // Для остальных инпутов: убираем класс и скрываем .form__error
        var $label = $(element).closest(".form__label");
        $label.removeClass("is-error");
        $label.find(".form__error").hide();
      }
    }
  });
});
var tabsModule = {
  init: function init() {
    var $tabsLinks = $('.tabs-link');
    if (!$tabsLinks.length) return;
    this.bindEvents($tabsLinks);
  },
  bindEvents: function bindEvents($tabsLinks) {
    $tabsLinks.on('click', function (e) {
      e.preventDefault();
      tabsModule.activateTab($(this));
    });
  },
  activateTab: function activateTab($clickedTab) {
    var $nav = $clickedTab.closest('.tabs-nav');
    $nav.find('.tabs-link').removeClass('is-active');
    $clickedTab.addClass('is-active');
    var tabId = $clickedTab.data('tabs');
    var parentTabsData = $nav.data('tabs');
    var $tabsContent = $('.tabs-content[data-tabs="' + parentTabsData + '"]');
    if ($tabsContent.length) {
      var $tabItem = $tabsContent.find('.tabs-item[data-tabs="' + tabId + '"]');
      if ($tabItem.length) {
        $tabItem.addClass('is-active').siblings().removeClass('is-active');
      }
    }
  }
};
var webformOptionsModule = {
  init: function init() {
    this.$options = $('.webform__options-method');
    if (this.$options.length === 0) {
      return;
    }
    this.bindEvents();
  },
  bindEvents: function bindEvents() {
    var _this = this;
    this.$options.on('click', function (e) {
      e.preventDefault();
      _this.toggleActiveClass($(e.currentTarget));
    });
  },
  toggleActiveClass: function toggleActiveClass($clickedOption) {
    var $parent = $clickedOption.closest('.webform__options');
    $parent.find('.webform__options-method').removeClass('is-active');
    $clickedOption.addClass('is-active');
  }
};
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
var fancyboxModule = {
  init: function init() {
    Fancybox.bind("[data-fancybox]", {});
  }
};
var favoriteButtonModule = {
  init: function init() {
    var $favoriteButtons = $('.favorite-button');
    if ($favoriteButtons.length === 0) {
      return;
    }
    this.bindFavoriteEvents($favoriteButtons);
  },
  bindFavoriteEvents: function bindFavoriteEvents($buttons) {
    $buttons.on('click', function (e) {
      e.preventDefault();
      $(this).toggleClass('is-active');
    });
  }
};
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
        $button.toggleClass('is-active');
      });
    });
  }
};
var webformModule = {
  init: function init() {
    this.initEvents();
  },
  initEvents: function initEvents() {
    var $buttons = $('.webform__toggle');
    if (!$buttons.length) {
      return;
    }
    $buttons.on('click', this.toggleWebform);
  },
  toggleWebform: function toggleWebform(e) {
    if (!e || !e.currentTarget) {
      return;
    }
    e.preventDefault();
    var $button = $(e.currentTarget);
    if (!$button.hasClass('webform__toggle')) {
      return;
    }
    var $webformWrapper = $button.next('.webform__wrapper');
    if ($webformWrapper.length) {
      if ($webformWrapper.is(':animated')) {
        return;
      }
      $webformWrapper.slideToggle(300);
      $button.toggleClass('is-active');
    }
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
  webformModule.init();
  favoriteButtonModule.init();
  fancyboxModule.init();
  webformOptionsModule.init();
  tabsModule.init();
  fileUploadModule.init();
});