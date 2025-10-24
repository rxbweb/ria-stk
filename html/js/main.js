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
      clickable: true
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
$('.history').each(function () {
  var $historyBlock = $(this);
  var $swiperElement = $historyBlock.find('.history__swiper')[0];
  var $dateButtons = $historyBlock.find('.history__dates-btn');
  var swiper = new Swiper($swiperElement, {
    slidesPerView: 1,
    spaceBetween: 20,
    effect: "fade",
    speed: 500,
    keyboard: true,
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      prevEl: $historyBlock.find('.swiper-button-prev')[0],
      nextEl: $historyBlock.find('.swiper-button-next')[0]
    },
    pagination: {
      el: $historyBlock.find('.swiper-pagination')[0],
      clickable: true
    },
    on: {
      slideChange: function slideChange() {
        $dateButtons.removeClass('is-active');
        $dateButtons.eq(swiper.activeIndex).addClass('is-active');
      }
    }
  });
  $dateButtons.on('click', function (e) {
    e.preventDefault();
    var index = $(this).index();
    swiper.slideTo(index);
  });
  $dateButtons.removeClass('is-active');
  $dateButtons.eq(swiper.activeIndex).addClass('is-active');
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
var dateButtons = document.querySelectorAll(".history__dates-btn");
dateButtons.forEach(function (button, index) {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    swiper.slideTo(index);
    setActiveButton(index);
  });
});
$('.account__products-swiper').each(function (index, element) {
  new Swiper(element, {
    slidesPerView: 2,
    spaceBetween: 20,
    keyboard: true,
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
function syncActiveButton(activeIndex) {
  dateButtons.forEach(function (button) {
    return button.classList.remove("is-active");
  });
  if (dateButtons[activeIndex]) {
    dateButtons[activeIndex].classList.add("is-active");
  }
}
function setActiveButton(index) {
  dateButtons.forEach(function (button) {
    return button.classList.remove("is-active");
  });
  if (dateButtons[index]) {
    dateButtons[index].classList.add("is-active");
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
        slidesPerView: 5,
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
    slidesPerView: 2,
    spaceBetween: 20,
    keyboard: true,
    pagination: {
      el: $(element).find('.swiper-pagination')[0],
      clickable: true
    },
    navigation: {
      prevEl: $(element).find('.swiper-button-prev')[0],
      nextEl: $(element).find('.swiper-button-next')[0]
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    }
  });
});
$('.article__process-slider').each(function (index, element) {
  new Swiper(element, {
    slidesPerView: 1,
    spaceBetween: 30,
    keyboard: true,
    pagination: {
      el: $(element).find('.swiper-pagination')[0],
      clickable: true
    },
    navigation: {
      prevEl: $(element).find('.swiper-button-prev')[0],
      nextEl: $(element).find('.swiper-button-next')[0]
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
$('.place__swiper').each(function (index, element) {
  new Swiper(element, {
    slidesPerView: 'auto',
    spaceBetween: 26,
    speed: 500,
    keyboard: true,
    pagination: {
      el: $(element).find('.swiper-pagination')[0],
      clickable: true
    },
    breakpoints: {
      575: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    }
  });
});
var numbersModule = {
  isMobile: window.matchMedia("(max-width: 768px)").matches,
  init: function init() {
    this.nums = lozad('[data-nums]', {
      rootMargin: this.getRootMargin(),
      threshold: 0.3,
      loaded: this.onLoaded.bind(this)
    });
    this.nums.observe();
  },
  getRootMargin: function getRootMargin() {
    return this.isMobile ? '-20px 0px' : '-100px 0px';
  },
  onLoaded: function onLoaded(el) {
    var _this = this;
    $(el).find('[data-value]').each(function (_, elem) {
      var text = $(elem).attr('data-value').replace(/\s/g, '');
      $(elem).prop('Counter', 0).animate({
        Counter: text
      }, {
        duration: 1100,
        easing: 'swing',
        step: _this.formatNumber
      });
    });
  },
  formatNumber: function formatNumber(now) {
    var formattedNumber = Math.ceil(now).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    $(this).text(formattedNumber);
  }
};
var phoneMaskModule = {
  init: function init() {
    var $phoneElements = $('[name="tel"]');
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
      return;
    }
    mapElements.forEach(function (mapElement, index) {
      if (!mapElement) {
        return;
      }
      var map = new ymaps.Map(mapElement, {
        center: [55.708495, 37.656412],
        zoom: 18
      });
      markers.forEach(function (marker, markerIndex) {
        if (!marker.lat || !marker.lon) {
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
    var $headerBox = $boxNav.closest('.header__box');
    var $burger = $('.header__burger');
    if (!$navList.length || !$boxNav.length || !$burger.length) {
      return;
    }
    this.navList = $navList;
    this.boxNav = $boxNav;
    this.headerBox = $headerBox;
    this.burger = $burger;
    $(window).on('resize', this.checkOverflow.bind(this));
    $burger.on('click', this.toggleBoxActive.bind(this));
    this.checkOverflow();
  },
  checkOverflow: function checkOverflow() {
    if (!this.navList.length || !this.boxNav.length) {
      return;
    }
    while (this.boxNav[0].firstChild) {
      this.navList.append(this.boxNav[0].firstChild);
    }
    var navListItems = Array.from(this.navList.children('.header__nav-item'));
    for (var i = navListItems.length - 1; i >= 0; i--) {
      if (this.navList[0].scrollWidth > this.navList[0].clientWidth) {
        var item = navListItems[i];
        this.boxNav.prepend(item);
        this.burger.addClass('is-visible');
      } else {
        break;
      }
    }
  },
  toggleBoxActive: function toggleBoxActive() {
    if (this.boxNav.children().length > 0) {
      this.headerBox.toggleClass('is-active');
      this.burger.toggleClass('is-active');
    } else {
      this.headerBox.removeClass('is-active');
      this.burger.removeClass('is-active');
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
    $selectActive.on('click', this.toggleSelectList.bind(this));
    var $selectItems = $('.select__item');
    if (!$selectItems.length) {
      return;
    }
    $selectItems.on('click', this.selectItem.bind(this));
  },
  toggleSelectList: function toggleSelectList(e) {
    e.preventDefault();
    var $button = $(e.currentTarget);
    var $selectList = $button.next('.select__list');
    if (!$selectList.length) {
      return;
    }

    // Закрываем все остальные списки
    $('.select__list').not($selectList).removeClass('is-active');

    // Переключаем текущий
    $selectList.toggleClass('is-active');
  },
  selectItem: function selectItem(e) {
    var $item = $(e.currentTarget);
    if (!$item.is('a')) {
      e.preventDefault();
    }
    var selectedText = $item.text();
    var $selectList = $item.closest('.select__list');
    var $selectActive = $selectList.prev('.select__active');
    if (!$selectActive.length || !$selectList.length) {
      return;
    }
    $selectList.find('.select__item').removeClass('is-active');
    $item.addClass('is-active');
    $selectActive.find('.select__active-text').html("".concat(selectedText));
    $selectActive.addClass('is-selected');
    $selectList.removeClass('is-active');
  },
  initMenuToggle: function initMenuToggle() {
    var $menuToggle = $('.header__toggle');
    if (!$menuToggle.length) {
      return;
    }
    $menuToggle.on('click', this.toggleMenu.bind(this));
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
var controlsModule = {
  init: function init() {
    this.$controlsToggle = $(".controls__toggle");
    this.$document = $(document);
    this.handleResize();
    this.bindResizeEvent();
  },
  handleResize: function handleResize() {
    if ($(window).width() <= 991) {
      this.bindEvents();
    } else {
      this.unbindEvents();
    }
  },
  bindResizeEvent: function bindResizeEvent() {
    $(window).on('resize', this.onResize.bind(this));
  },
  onResize: function onResize() {
    this.handleResize();
  },
  bindEvents: function bindEvents() {
    this.$controlsToggle.on('click', this.toggleControls.bind(this));
    this.$document.on('click', this.closeControls.bind(this));
  },
  unbindEvents: function unbindEvents() {
    this.$controlsToggle.off('click');
    this.$document.off('click');
  },
  toggleControls: function toggleControls(e) {
    e.preventDefault();
    e.stopPropagation();
    this.$controlsToggle.toggleClass("is-active").next().stop().slideToggle(300);
  },
  closeControls: function closeControls(e) {
    if (!$(e.target).closest(".controls").length) {
      this.$controlsToggle.removeClass("is-active").next().stop().slideUp(300);
    }
  }
};
var filterModule = {
  init: function init() {
    this.$controlsToggle = $(".filter__toggle");
    this.$document = $(document);
    this.handleResize();
    this.bindResizeEvent();
  },
  handleResize: function handleResize() {
    if ($(window).width() <= 991) {
      this.bindEvents();
    } else {
      this.unbindEvents();
    }
  },
  bindResizeEvent: function bindResizeEvent() {
    $(window).on('resize', this.onResize.bind(this));
  },
  onResize: function onResize() {
    this.handleResize();
  },
  bindEvents: function bindEvents() {
    this.$controlsToggle.on('click', this.toggleControls.bind(this));
    this.$document.on('click', this.closeControls.bind(this));
  },
  unbindEvents: function unbindEvents() {
    this.$controlsToggle.off('click');
    this.$document.off('click');
  },
  toggleControls: function toggleControls(e) {
    e.preventDefault();
    e.stopPropagation();
    this.$controlsToggle.toggleClass("is-active").next().stop().slideToggle(300);
  },
  closeControls: function closeControls(e) {
    if (!$(e.target).closest(".filter").length) {
      this.$controlsToggle.removeClass("is-active").next().stop().slideUp(300);
    }
  }
};
var sortModule = {
  init: function init() {
    this.$controlsToggle = $(".sort__toggle");
    this.$document = $(document);
    this.handleResize();
    this.bindResizeEvent();
  },
  handleResize: function handleResize() {
    if ($(window).width() <= 991) {
      this.bindEvents();
    } else {
      this.unbindEvents();
    }
  },
  bindResizeEvent: function bindResizeEvent() {
    $(window).on('resize', this.onResize.bind(this));
  },
  onResize: function onResize() {
    this.handleResize();
  },
  bindEvents: function bindEvents() {
    this.$controlsToggle.on('click', this.toggleControls.bind(this));
    this.$document.on('click', this.closeControls.bind(this));
  },
  unbindEvents: function unbindEvents() {
    this.$controlsToggle.off('click');
    this.$document.off('click');
  },
  toggleControls: function toggleControls(e) {
    e.preventDefault();
    e.stopPropagation();
    this.$controlsToggle.toggleClass("is-active").next().stop().slideToggle(300);
  },
  closeControls: function closeControls(e) {
    if (!$(e.target).closest(".sort").length) {
      this.$controlsToggle.removeClass("is-active").next().stop().slideUp(300);
    }
  }
};
var sidebarModule = {
  init: function init() {
    this.$sidebarToggle = $('.sidebar__toggle');
    this.$document = $(document);
    this.handleResize();
  },
  handleResize: function handleResize() {
    if ($(window).width() <= 991) {
      this.bindEvents();
    } else {
      this.unbindEvents();
    }
  },
  bindEvents: function bindEvents() {
    this.$sidebarToggle.on('click', this.toggleSidebar.bind(this));
    this.$document.on('click', this.closeSidebar.bind(this));
  },
  unbindEvents: function unbindEvents() {
    this.$sidebarToggle.off('click');
    this.$document.off('click');
  },
  toggleSidebar: function toggleSidebar(e) {
    e.stopPropagation();
    e.preventDefault();
    this.$sidebarToggle.toggleClass("is-active").next().stop().slideToggle(300);
  },
  closeSidebar: function closeSidebar(e) {
    if (!$(e.target).closest(".sidebar").length) {
      this.$sidebarToggle.removeClass("is-active").next().stop().slideUp(300);
    }
  }
};
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
var lazyLoadModule = {
  init: function init() {
    this.$lazyElements = $('.lazyload');
    if (!this.$lazyElements.length) return;
    this.observer = lozad('.lazyload', {
      rootMargin: '60px 0px',
      loaded: this.onLoad.bind(this)
    });
    this.bindEvents();
    this.observer.observe();
  },
  bindEvents: function bindEvents() {
    this.$lazyElements.on('error', this.onError);
  },
  onLoad: function onLoad(el) {
    var $el = $(el);
    if ($el.is('img')) {
      $el.attr('src', $el.data('src')).addClass('is-loaded');
    } else if ($el.is('picture')) {
      $el.find('source').each(function () {
        $(this).attr('srcset', $(this).data('srcset'));
      });
      $el.find('img').attr('src', $el.find('img').data('src'));
      $el.addClass('is-loaded');
    }
  },
  onError: function onError() {
    $(this).addClass('is-error');
  }
};
var formValidationModule = {
  init: function init() {
    this.$forms = $("[data-validate-form]");
    this.bindEvents();
  },
  bindEvents: function bindEvents() {
    var _this2 = this;
    this.$forms.each(function (_, form) {
      _this2.setupValidation($(form));
    });
  },
  setupValidation: function setupValidation($form) {
    $form.validate({
      errorPlacement: this.errorPlacement,
      success: this.success
    });
  },
  errorPlacement: function errorPlacement(error, element) {
    if (element.closest(".agree").length) {
      element.closest(".agree").find(".agree__error").show();
    } else if (element.closest(".webform__label").length) {
      element.closest(".webform__label").find(".webform__label-error").show();
    } else {
      var $label = element.closest(".form__label");
      $label.addClass("is-error");
      $label.find(".form__error").show();
    }
  },
  success: function success(label, element) {
    if ($(element).closest(".agree").length) {
      $(element).closest(".agree").find(".agree__error").hide();
    } else if ($(element).closest(".webform__label").length) {
      $(element).closest(".webform__label").find(".webform__label-error").hide();
    } else {
      var $label = $(element).closest(".form__label");
      $label.removeClass("is-error");
      $label.find(".form__error").hide();
    }
  }
};
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
    var _this3 = this;
    this.$options.on('click', function (e) {
      e.preventDefault();
      _this3.toggleActiveClass($(e.currentTarget));
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
      e.stopPropagation();
      $(this).toggleClass('is-active');
    });
  }
};
var passwordToggleModule = {
  init: function init() {
    var $toggleButtons = $('.button-eye');
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
var dateInputModule = {
  init: function init() {
    var $dateInput = $('[name="date"]');
    if ($dateInput.length === 0) {
      return;
    }
    this.bindDateEvents($dateInput);
  },
  bindDateEvents: function bindDateEvents($input) {
    var _this4 = this;
    $input.on("input", function (e) {
      _this4.formatDate(e.target);
    });
    $input.on("keydown", function (e) {
      _this4.handleBackspace(e);
    });
  },
  formatDate: function formatDate(input) {
    var value = $(input).val().replace(/\D/g, "");
    var formattedValue = "";
    var day = value.substring(0, 2);
    if (parseInt(day) > 31) {
      day = "31";
    }
    formattedValue = day;
    var month = value.substring(2, 4);
    if (parseInt(month) > 12) {
      month = "12";
    }
    if (month.length > 0) {
      formattedValue += "." + month;
    }
    var year = value.substring(4, 8);
    if (year.length === 4) {
      if (parseInt(year) < 1900) {
        year = "1900";
      } else if (parseInt(year) > 2025) {
        year = "2025";
      }
    }
    if (year.length > 0) {
      formattedValue += "." + year;
    }
    $(input).val(formattedValue);
  },
  handleBackspace: function handleBackspace(e) {
    var $input = $(e.target);
    if (e.key === "Backspace" && $input.val().endsWith(".")) {
      $input.val($input.val().slice(0, -1));
      e.preventDefault();
    }
  }
};

// const headerModule = {
//    init() {
//       const $headerLogin = $('.header__login');
//       if (!$headerLogin.length) {
//          return;
//       }

//       $headerLogin.on('click', this.toggleLoginCabinet);
//    },

//    toggleLoginCabinet(e) {
//       e.preventDefault();

//       const $loginCabinet = $(e.currentTarget).find('.header__login-cabinet');
//       if ($loginCabinet.length) {
//          $loginCabinet.toggleClass('is-active');
//       }
//    },
// };

var buttonLoadingModule = {
  init: function init() {
    var $button = $('.button-loading');
    if ($button.length === 0) {
      return;
    }
    this.handleLoading($button);
  },
  handleLoading: function handleLoading($button) {
    $button.on('click', function (e) {
      e.preventDefault();
      var $currentButton = $(this);
      var dataLoadingValue = $currentButton.data('loading');
      if (!dataLoadingValue) {
        return;
      }
      var $targetBlock = $("[data-loading=\"".concat(dataLoadingValue, "\"]"));
      if ($targetBlock.length) {
        $targetBlock.addClass('is-active');
      }
      $currentButton.remove();
    });
  }
};
var glossaryModule = {
  init: function init() {
    var $buttons = $('.glossary__listing-theme');
    if ($buttons.length === 0) {
      return;
    }
    this.handleToggle($buttons);
  },
  handleToggle: function handleToggle($buttons) {
    $buttons.on('click', function () {
      var $currentButton = $(this);
      var $parentItem = $currentButton.closest('.glossary__listing-item');
      var $infoBlock = $parentItem.find('.glossary__listing-info');
      if ($infoBlock.length) {
        if ($infoBlock.is(':visible')) {
          $infoBlock.slideUp(300);
          $parentItem.removeClass('is-active');
        } else {
          $infoBlock.slideDown(300);
          $parentItem.addClass('is-active');
        }
      }
    });
  }
};
var goodsTableModule = {
  init: function init() {
    var $buttons = $('.goods__table-controls-button');
    if ($buttons.length === 0) {
      return;
    }
    this.handleCountChange($buttons);
  },
  handleCountChange: function handleCountChange($buttons) {
    $buttons.on('click', function () {
      var $currentButton = $(this);
      var $parent = $currentButton.closest('.goods__table-controls');
      var $countElement = $parent.find('.goods__table-controls-count');
      if ($countElement.length === 0) {
        return;
      }
      var count = parseInt($countElement.val(), 10);
      if (isNaN(count)) {
        count = 0;
      }
      if ($currentButton.hasClass('goods__table-controls-button--plus')) {
        count++;
      } else if ($currentButton.hasClass('goods__table-controls-button--minus')) {
        count = Math.max(0, count - 1);
      }
      $countElement.val(count);
    });
  }
};
var rangeSliderModule = {
  init: function init() {
    var $sliders = $('.range__slider');
    if ($sliders.length === 0) {
      return;
    }
    this.setupSliders($sliders);
  },
  setupSliders: function setupSliders($sliders) {
    var _this5 = this;
    $sliders.each(function (_, slider) {
      var $slider = $(slider);
      var $parent = $slider.closest('.range');
      var $minInput = $parent.find('[data-range="min"]');
      var $maxInput = $parent.find('[data-range="max"]');
      if ($minInput.length === 0 || $maxInput.length === 0) {
        return;
      }
      var minValue = 10000;
      var maxValue = 1000000;
      var stepValue = 10000;
      noUiSlider.create(slider, {
        start: [minValue, maxValue / 2],
        connect: true,
        step: stepValue,
        range: {
          min: minValue,
          max: maxValue
        },
        format: {
          to: function to(value) {
            return Math.round(value).toLocaleString('ru-RU');
          },
          from: function from(value) {
            return Number(value.replace(/\s/g, ''));
          }
        }
      });
      var sliderInstance = slider.noUiSlider;
      sliderInstance.on('update', function (values) {
        $minInput.val(values[0]);
        $maxInput.val(values[1]);
      });
      _this5.handleInputChange($minInput, sliderInstance, 0, minValue, maxValue);
      _this5.handleInputChange($maxInput, sliderInstance, 1, minValue, maxValue);
    });
  },
  handleInputChange: function handleInputChange($input, sliderInstance, handleIndex, minValue, maxValue) {
    $input.on('change', function () {
      var min = parseInt($input.closest('.range').find('[data-range="min"]').val().replace(/\s/g, ''), 10) || minValue;
      var max = parseInt($input.closest('.range').find('[data-range="max"]').val().replace(/\s/g, ''), 10) || maxValue;
      if (min < minValue) min = minValue;
      if (min > max) min = max;
      if (max > maxValue) max = maxValue;
      if (max < min) max = min;
      sliderInstance.set([min, max]);
    });
    $input.on('input', function () {
      $(this).val($(this).val().replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ' '));
    });
  }
};
var filterToggleModule = {
  init: function init() {
    var $buttons = $('.filter__btn');
    if ($buttons.length === 0) {
      return;
    }
    this.handleToggle($buttons);
  },
  handleToggle: function handleToggle($buttons) {
    $buttons.on('click', function (e) {
      e.preventDefault();
      var $currentButton = $(this);
      var $nextBlock = $currentButton.next();
      if ($nextBlock.length === 0) {
        return;
      }
      $currentButton.toggleClass('is-active');
      $nextBlock.stop(true, true).slideToggle(300);
    });
  }
};
var figuresModule = {
  init: function init() {
    var $links = $('.figures__link');
    if ($links.length === 0) {
      return;
    }
    this.handleClick($links);
  },
  handleClick: function handleClick($links) {
    $links.on('click', function (e) {
      e.preventDefault();
      var $link = $(this);
      var $content = $link.next('.figures__content');
      $links.removeClass('is-active');
      if ($content.length) {
        $('.figures__content').not($content).stop(true, true).slideUp(300);
        $content.stop(true, true).slideToggle(300);
        $link.toggleClass('is-active');
        return;
      }
      var dataId = $link.data('id');
      if (!dataId) return;
      var dataName = $link.closest('[data-name]').data('name');
      if (!dataName) return;
      var $categoryBlock = $('[data-category="' + dataName + '"]');
      if (!$categoryBlock.length) return;
      var $items = $categoryBlock.find('.figures__item');
      $items.removeClass('is-active');
      var $targetItem = $items.filter('[data-tab="' + dataId + '"]');
      $targetItem.addClass('is-active');
      $link.addClass('is-active');
    });
  }
};
var questionToggleModule = {
  init: function init() {
    var $questionLabels = $('.webform__label-question');
    if ($questionLabels.length === 0) {
      return;
    }
    this.bindEvents($questionLabels);
  },
  bindEvents: function bindEvents($elements) {
    $elements.each(function () {
      var $element = $(this);
      if (!$element.length) {
        return;
      }
      $element.on('click', function (e) {
        e.preventDefault();
        var $text = $element.find('.webform__label-question-text');
        if ($text.length) {
          $text.toggleClass('is-active');
        }
      });
    });
  }
};
var downloadBoxModule = {
  init: function init() {
    var $boxes = $('.download__box');
    if ($boxes.length === 0) {
      return;
    }
    this.bindEvents($boxes);
  },
  bindEvents: function bindEvents($boxes) {
    $boxes.each(function () {
      var $box = $(this);
      var $input = $box.find('input[type="file"]');
      var $deleteBtn = $box.find('.download__delete');
      if ($input.length) {
        $input.on('change', function () {
          var file = this.files[0];
          if (file) {
            $box.addClass('is-active');
            $box.find('.download__loaded .download__file').text(file.name);
            var size = file.size;
            var readableSize = size > 1024 * 1024 ? (size / (1024 * 1024)).toFixed(1) + ' MB' : (size / 1024).toFixed(1) + ' KB';
            $box.find('.download__loaded .download__size').text(readableSize);
            $box.find('.download__default, .download__loading').hide();
            $box.find('.download__loaded').show();
          }
        });
      }
      if ($deleteBtn.length) {
        $deleteBtn.on('click', function () {
          $input.val('');
          $box.removeClass('is-active');
          $box.find('.download__loaded, .download__loading').hide();
          $box.find('.download__default').show();
        });
      }
    });
  }
};
var filterSelectedModule = {
  init: function init() {
    var $blocks = $('.filter__selected');
    if ($blocks.length === 0) {
      return;
    }
    this.bindEvents($blocks);
  },
  bindEvents: function bindEvents($blocks) {
    $blocks.each(function () {
      var $block = $(this);
      var $input = $block.find('input');
      var $deleteBtn = $block.find('.filter__delete');
      if ($deleteBtn.length && $input.length) {
        $deleteBtn.on('click', function () {
          if ($input.val().trim() !== '') {
            $input.val('').trigger('change').focus();
          }
        });
      }
    });
  }
};
$(function () {
  lazyLoadModule.init();
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
  sidebarModule.init();
  controlsModule.init();
  filterModule.init();
  sortModule.init();
  formValidationModule.init();
  numbersModule.init();
  dateInputModule.init();
  buttonLoadingModule.init();
  glossaryModule.init();
  goodsTableModule.init();
  rangeSliderModule.init();
  filterToggleModule.init();
  figuresModule.init();
  questionToggleModule.init();
  downloadBoxModule.init();
  filterSelectedModule.init();
  $(window).on('resize', function () {
    return sidebarModule.handleResize();
  });
  $(document).on('click', function (e) {
    var $target = $(e.target);
    if (!$target.closest('.select').length) {
      $('.select__list').removeClass('is-active');
    }
  });
});
$('.complex__controls').each(function () {
  var $control = $(this);
  var $radios = $control.find('input[type="radio"]');
  var $tabs = $control.find('.complex__tabs-btn');
  var $costPlans = $control.find('.complex__cost-plan');
  $radios.each(function (idx) {
    $(this).on('change', function () {
      $tabs.removeClass('is-active');
      $tabs.eq(idx).addClass('is-active');
      $costPlans.removeClass('is-active');
      $costPlans.eq(idx).addClass('is-active');
    });
  });
});