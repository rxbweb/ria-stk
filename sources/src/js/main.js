"use strict";

$('.partners__swiper').each(function (index, element) {
   new Swiper(element, {
      slidesPerView: 1,
      spaceBetween: 10,
      keyboard: true,
      navigation: {
         prevEl: $(element).find('.swiper-button-prev')[0],
         nextEl: $(element).find('.swiper-button-next')[0],
      },
      pagination: {
         el: $(element).find('.swiper-pagination')[0],
         clickable: true,
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
});

$('.projects__swiper').each(function (index, element) {
   new Swiper(element, {
      slidesPerView: 1,
      spaceBetween: 20,
      keyboard: true,
      navigation: {
         prevEl: $(element).find('.swiper-button-prev')[0],
         nextEl: $(element).find('.swiper-button-next')[0],
      },
      pagination: {
         el: $(element).find('.swiper-pagination')[0],
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
      clickable: true,
   },
});

$('.history').each(function () {
   const $historyBlock = $(this);
   const $swiperElement = $historyBlock.find('.history__swiper')[0];
   const $dateButtons = $historyBlock.find('.history__dates-btn');

   const swiper = new Swiper($swiperElement, {
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
         nextEl: $historyBlock.find('.swiper-button-next')[0],
      },
      pagination: {
         el: $historyBlock.find('.swiper-pagination')[0],
         clickable: true,
      },
      on: {
         slideChange: function () {
            $dateButtons.removeClass('is-active');
            $dateButtons.eq(swiper.activeIndex).addClass('is-active');
         },
      },
   });

   $dateButtons.on('click', function (e) {
      e.preventDefault();
      const index = $(this).index();
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
         nextEl: $(element).find('.swiper-button-next')[0],
      },
      pagination: {
         el: $(element).find('.swiper-pagination')[0],
         clickable: true,
      },
      breakpoints: {
         768: {
            spaceBetween: 20,
         },
      },
   });
});

const dateButtons = document.querySelectorAll(".history__dates-btn");

dateButtons.forEach((button, index) => {
   button.addEventListener("click", (e) => {
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
         prevEl: $(element).find('.swiper-button-prev')[0],
      },
      pagination: {
         el: $(element).find('.swiper-pagination')[0],
         clickable: true,
      },
      breakpoints: {
         768: {
            slidesPerView: 2,
            spaceBetween: 30,
         },
         992: {
            slidesPerView: 3,
         },
         1200: {
            slidesPerView: 3,
            spaceBetween: 40,
         }
      },
   });
});

$('.account__tabs-btn').on('click', function (e) {
   e.preventDefault();

   let tabId = $(this).data('tab');
   if (!tabId) return;

   let parentTabsData = $(this).closest('[data-tabs]').data('tabs');
   if (!parentTabsData) return;

   let $tabsContent = $('[data-content="' + parentTabsData + '"]');
   if (!$tabsContent.length) return;

   let $tabItem = $tabsContent.find('[data-tab="' + tabId + '"]');
   if (!$tabItem.length) return;

   $(this).addClass('is-active').siblings('.account__tabs-btn').removeClass('is-active');
   $tabsContent.addClass('is-changed');
   $tabItem.addClass('is-active').siblings('[data-tab]').removeClass('is-active');
});

function syncActiveButton(activeIndex) {
   dateButtons.forEach(button => button.classList.remove("is-active"));
   if (dateButtons[activeIndex]) {
      dateButtons[activeIndex].classList.add("is-active");
   }
}

function setActiveButton(index) {
   dateButtons.forEach(button => button.classList.remove("is-active"));
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
            slidesPerView: 5,
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
         nextEl: $(element).closest('.content__swiper').find('.swiper-button-next')[0],
      },
   });
});

$('.books__swiper-slider').each(function (index, element) {
   new Swiper(element, {
      slidesPerView: 2,
      spaceBetween: 20,
      keyboard: true,
      pagination: {
         el: $(element).find('.swiper-pagination')[0],
         clickable: true,
      },
      navigation: {
         prevEl: $(element).find('.swiper-button-prev')[0],
         nextEl: $(element).find('.swiper-button-next')[0],
      },
      breakpoints: {
         768: {
            slidesPerView: 3,
            spaceBetween: 20,
         },
         1200: {
            slidesPerView: 4,
            spaceBetween: 40,
         },
      },
   });
});

$('.article__process-slider').each(function (index, element) {
   new Swiper(element, {
      slidesPerView: 1,
      spaceBetween: 30,
      keyboard: true,
      pagination: {
         el: $(element).find('.swiper-pagination')[0],
         clickable: true,
      },
      navigation: {
         prevEl: $(element).find('.swiper-button-prev')[0],
         nextEl: $(element).find('.swiper-button-next')[0],
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
});

$('.place__swiper').each(function (index, element) {
   new Swiper(element, {
      slidesPerView: 'auto',
      spaceBetween: 26,
      speed: 500,
      keyboard: true,
      pagination: {
         el: $(element).find('.swiper-pagination')[0],
         clickable: true,
      },
      breakpoints: {
         575: {
            slidesPerView: 2,
            spaceBetween: 30,
         },
         768: {
            slidesPerView: 3,
            spaceBetween: 30,
         },
         1200: {
            slidesPerView: 4,
            spaceBetween: 40,
         },
      },
   });
});

const numbersModule = {
   isMobile: window.matchMedia("(max-width: 768px)").matches,

   init() {
      this.nums = lozad('[data-nums]', {
         rootMargin: this.getRootMargin(),
         threshold: 0.3,
         loaded: this.onLoaded.bind(this),
      });
      this.nums.observe();
   },

   getRootMargin() {
      return this.isMobile ? '-20px 0px' : '-100px 0px';
   },

   onLoaded(el) {
      $(el).find('[data-value]').each((_, elem) => {
         const text = $(elem).attr('data-value').replace(/\s/g, '');

         $(elem).prop('Counter', 0).animate({
            Counter: text
         }, {
            duration: 1100,
            easing: 'swing',
            step: this.formatNumber
         });
      });
   },

   formatNumber(now) {
      const formattedNumber = Math.ceil(now).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
      $(this).text(formattedNumber);
   },
};

const phoneMaskModule = {
   init() {
      const $phoneElements = $('[name="tel"]');
      if ($phoneElements.length === 0) {
         return;
      }

      this.applyMasks($phoneElements);
   },

   applyMasks($elements) {
      $elements.each(function() {
         const $element = $(this);

         if (!$element.length) {
            return;
         }

         IMask($element[0], {
            mask: '+{7}(000)000-00-00'
         });
      });
   }
};

const mapModule = {
   init() {
      if (typeof ymaps === 'undefined') {
         return;
      }

      ymaps.ready(this.initializeMaps);
   },

   initializeMaps() {
      const mapElements = document.querySelectorAll('.map');
      if (!mapElements.length) {
         return;
      }

      const markers = [
         { lat: 55.708495, lon: 37.656412, title: 'Метка 1' },
      ];

      if (!markers || markers.length === 0) {
         return;
      }

      mapElements.forEach((mapElement, index) => {
         if (!mapElement) {
            return;
         }

         const map = new ymaps.Map(mapElement, {
            center: [55.708495, 37.656412],
            zoom: 18,
         });

         markers.forEach((marker, markerIndex) => {
            if (!marker.lat || !marker.lon) {
               return;
            }

            const placemark = new ymaps.Placemark([marker.lat, marker.lon], {
               balloonContent: marker.title,
            });

            map.geoObjects.add(placemark);
         });
      });
   },
};

const navModule = {
   init() {
      const $navList = $('.header__nav-list');
      const $boxNav = $('.header__box-nav');
      const $headerBox = $boxNav.closest('.header__box');
      const $burger = $('.header__burger');

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

   checkOverflow() {
      if (!this.navList.length || !this.boxNav.length) {
         return;
      }

      while (this.boxNav[0].firstChild) {
         this.navList.append(this.boxNav[0].firstChild);
      }

      const navListItems = Array.from(this.navList.children('.header__nav-item'));
      for (let i = navListItems.length - 1; i >= 0; i--) {
         if (this.navList[0].scrollWidth > this.navList[0].clientWidth) {
            const item = navListItems[i];
            this.boxNav.prepend(item);
            this.burger.addClass('is-visible');
         } else {
            break;
         }
      }
   },

   toggleBoxActive() {
      if (this.boxNav.children().length > 0) {
         this.headerBox.toggleClass('is-active');
         this.burger.toggleClass('is-active');
      } else {
         this.headerBox.removeClass('is-active');
         this.burger.removeClass('is-active');
      }
   },
};

const selectModule = {
   init() {
      this.initSelectEvents();
      this.initMenuToggle();
   },

   initSelectEvents() {
      const $selectActive = $('.select__active');
      if (!$selectActive.length) {
         return;
      }

      $selectActive.on('click', this.toggleSelectList.bind(this));

      const $selectItems = $('.select__item');
      if (!$selectItems.length) {
         return;
      }

      $selectItems.on('click', this.selectItem.bind(this));

   },

   toggleSelectList(e) {
      e.preventDefault();

      const $button = $(e.currentTarget);
      const $selectList = $button.next('.select__list');

      if (!$selectList.length) {
         return;
      }

      // Закрываем все остальные списки
      $('.select__list').not($selectList).removeClass('is-active');

      // Переключаем текущий
      $selectList.toggleClass('is-active');
   },

   selectItem(e) {
      const $item = $(e.currentTarget);

      if (!$item.is('a')) {
         e.preventDefault();
      }

      const selectedText = $item.text();
      const $selectList = $item.closest('.select__list');
      const $selectActive = $selectList.prev('.select__active');

      if (!$selectActive.length || !$selectList.length) {
         return;
      }

      $selectList.find('.select__item').removeClass('is-active');
      $item.addClass('is-active');
      $selectActive.find('.select__active-text').html(`${selectedText}`);
      $selectActive.addClass('is-selected');
      $selectList.removeClass('is-active');
   },

   initMenuToggle() {
      const $menuToggle = $('.header__toggle');
      if (!$menuToggle.length) {
         return;
      }

      $menuToggle.on('click', this.toggleMenu.bind(this));
   },

   toggleMenu(e) {
      e.preventDefault();

      const $toggleButton = $(e.currentTarget);
      const $menu = $('.menu');
      const $body = $('body');

      if (!$menu.length) {
         return;
      }

      $toggleButton.toggleClass('is-active');
      $menu.toggleClass('is-active');
      $body.toggleClass('no-scroll');
   },
};

const accordionModule = {
   init() {
      this.initEvents();
   },
   initEvents() {
      const $buttons = $('.accordion__button');
      if (!$buttons.length) {
         return;
      }
      $buttons.on('click', this.toggleAccordion);
   },
   toggleAccordion(e) {
      if (!e || !e.currentTarget) {
         return;
      }

      e.preventDefault();

      const $button = $(e.currentTarget);

      if (!$button.hasClass('accordion__button')) {
         return;
      }

      const $accordionWrapper = $button.next('.accordion__wrapper');
      const accordionButton = $button.attr('data-accordion');

      const $accordionImg = $('.accordion__pic[data-img="' + accordionButton + '"]');

      if ($accordionImg.length) {
         $('.accordion__pic')
            .not('[data-img="' + accordionButton + '"]')
            .removeClass('is-active');
         $accordionImg.toggleClass('is-active');
      }

      if ($accordionWrapper.length) {
         if ($accordionWrapper.is(':animated')) {
            return;
         }
         $accordionWrapper.slideToggle(300);
         $button.parent('.accordion__item').toggleClass('is-active');
      }
   },
};

const controlsModule = {
   init() {
      this.$controlsToggle = $(".controls__toggle");
      this.$document = $(document);
      this.handleResize();
      this.bindResizeEvent();
   },

   handleResize() {
      if ($(window).width() <= 991) {
         this.bindEvents();
      } else {
         this.unbindEvents();
      }
   },

   bindResizeEvent() {
      $(window).on('resize', this.onResize.bind(this));
   },

   onResize() {
      this.handleResize();
   },

   bindEvents() {
      this.$controlsToggle.on('click', this.toggleControls.bind(this));
      this.$document.on('click', this.closeControls.bind(this));
   },

   unbindEvents() {
      this.$controlsToggle.off('click');
      this.$document.off('click');
   },

   toggleControls(e) {
      e.preventDefault();
      e.stopPropagation();
      this.$controlsToggle.toggleClass("is-active").next().stop().slideToggle(300);
   },

   closeControls(e) {
      if (!$(e.target).closest(".controls").length) {
         this.$controlsToggle.removeClass("is-active").next().stop().slideUp(300);
      }
   },
};

const filterModule = {
   init() {
      this.$controlsToggle = $(".filter__toggle");
      this.$document = $(document);
      this.handleResize();
      this.bindResizeEvent();
   },

   handleResize() {
      if ($(window).width() <= 991) {
         this.bindEvents();
      } else {
         this.unbindEvents();
      }
   },

   bindResizeEvent() {
      $(window).on('resize', this.onResize.bind(this));
   },

   onResize() {
      this.handleResize();
   },

   bindEvents() {
      this.$controlsToggle.on('click', this.toggleControls.bind(this));
      this.$document.on('click', this.closeControls.bind(this));
   },

   unbindEvents() {
      this.$controlsToggle.off('click');
      this.$document.off('click');
   },

   toggleControls(e) {
      e.preventDefault();
      e.stopPropagation();
      this.$controlsToggle.toggleClass("is-active").next().stop().slideToggle(300);
   },

   closeControls(e) {
      if (!$(e.target).closest(".filter").length) {
         this.$controlsToggle.removeClass("is-active").next().stop().slideUp(300);
      }
   },
};

const sortModule = {
   init() {
      this.$controlsToggle = $(".sort__toggle");
      this.$document = $(document);
      this.handleResize();
      this.bindResizeEvent();
   },

   handleResize() {
      if ($(window).width() <= 991) {
         this.bindEvents();
      } else {
         this.unbindEvents();
      }
   },

   bindResizeEvent() {
      $(window).on('resize', this.onResize.bind(this));
   },

   onResize() {
      this.handleResize();
   },

   bindEvents() {
      this.$controlsToggle.on('click', this.toggleControls.bind(this));
      this.$document.on('click', this.closeControls.bind(this));
   },

   unbindEvents() {
      this.$controlsToggle.off('click');
      this.$document.off('click');
   },

   toggleControls(e) {
      e.preventDefault();
      e.stopPropagation();
      this.$controlsToggle.toggleClass("is-active").next().stop().slideToggle(300);
   },

   closeControls(e) {
      if (!$(e.target).closest(".sort").length) {
         this.$controlsToggle.removeClass("is-active").next().stop().slideUp(300);
      }
   },
};

const sidebarModule = {
   init() {
      this.$sidebarToggle = $('.sidebar__toggle');
      this.$document = $(document);
      this.handleResize();
   },

   handleResize() {
      if ($(window).width() <= 991) {
         this.bindEvents();
      } else {
         this.unbindEvents();
      }
   },

   bindEvents() {
      this.$sidebarToggle.on('click', this.toggleSidebar.bind(this));
      this.$document.on('click', this.closeSidebar.bind(this));
   },

   unbindEvents() {
      this.$sidebarToggle.off('click');
      this.$document.off('click');
   },

   toggleSidebar(e) {
      e.stopPropagation();
      e.preventDefault();
      this.$sidebarToggle.toggleClass("is-active").next().stop().slideToggle(300);
   },

   closeSidebar(e) {
      if (!$(e.target).closest(".sidebar").length) {
         this.$sidebarToggle.removeClass("is-active").next().stop().slideUp(300);
      }
   },
};

const fileUploadModule = {
   init() {
      const $fileInputs = $('.webform__label-file input');

      if (!$fileInputs.length) return;

      this.bindEvents($fileInputs);
   },

   bindEvents($fileInputs) {
      $fileInputs.on('change', function () {
         fileUploadModule.updateFileName($(this));
      });
   },

   updateFileName($input) {
      const fileName = $input[0].files.length ? $input[0].files[0].name : "Выберите файл";
      $input.closest('.webform__label-file').find('.webform__label-file-name').text(fileName);
   }
};

const lazyLoadModule = {
   init() {
      this.$lazyElements = $('.lazyload');

      if (!this.$lazyElements.length) return;

      this.observer = lozad('.lazyload', {
         rootMargin: '60px 0px',
         loaded: this.onLoad.bind(this),
      });

      this.bindEvents();
      this.observer.observe();
   },

   bindEvents() {
      this.$lazyElements.on('error', this.onError);
   },

   onLoad(el) {
      const $el = $(el);

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

   onError() {
      $(this).addClass('is-error');
   },
};

const formValidationModule = {
   init() {
      this.$forms = $("[data-validate-form]");
      this.bindEvents();
   },

   bindEvents() {
      this.$forms.each((_, form) => {
         this.setupValidation($(form));
      });
   },

   setupValidation($form) {
      $form.validate({
         errorPlacement: this.errorPlacement,
         success: this.success,
      });
   },

   errorPlacement(error, element) {
      if (element.closest(".agree").length) {
         element.closest(".agree").find(".agree__error").show();
      } else if (element.closest(".webform__label").length) {
         element.closest(".webform__label").find(".webform__label-error").show();
      } else {
         let $label = element.closest(".form__label");
         $label.addClass("is-error");
         $label.find(".form__error").show();
      }
   },

   success(label, element) {
      if ($(element).closest(".agree").length) {
         $(element).closest(".agree").find(".agree__error").hide();
      } else if ($(element).closest(".webform__label").length) {
         $(element).closest(".webform__label").find(".webform__label-error").hide();
      } else {
         let $label = $(element).closest(".form__label");
         $label.removeClass("is-error");
         $label.find(".form__error").hide();
      }
   },
};

const tabsModule = {
   init() {
      const $tabsLinks = $('.tabs-link');

      if (!$tabsLinks.length) return;

      this.bindEvents($tabsLinks);
   },

   bindEvents($tabsLinks) {
      $tabsLinks.on('click', function (e) {
         e.preventDefault();
         tabsModule.activateTab($(this));
      });
   },

   activateTab($clickedTab) {
      const $nav = $clickedTab.closest('.tabs-nav');
      $nav.find('.tabs-link').removeClass('is-active');
      $clickedTab.addClass('is-active');

      const tabId = $clickedTab.data('tabs');
      const parentTabsData = $nav.data('tabs');
      const $tabsContent = $('.tabs-content[data-tabs="' + parentTabsData + '"]');

      if ($tabsContent.length) {
         const $tabItem = $tabsContent.find('.tabs-item[data-tabs="' + tabId + '"]');

         if ($tabItem.length) {
            $tabItem.addClass('is-active').siblings().removeClass('is-active');
         }
      }
   }
};

const webformOptionsModule = {
   init() {
      this.$options = $('.webform__options-method');

      if (this.$options.length === 0) {
         return;
      }

      this.bindEvents();
   },

   bindEvents() {
      this.$options.on('click', (e) => {
         e.preventDefault();
         this.toggleActiveClass($(e.currentTarget));
      });
   },

   toggleActiveClass($clickedOption) {
      const $parent = $clickedOption.closest('.webform__options');
      $parent.find('.webform__options-method').removeClass('is-active');
      $clickedOption.addClass('is-active');
   }
};

const authorsLabelModule = {
   init() {
      this.$authorsLabel = $('.authors__label');

      if (this.$authorsLabel.length === 0) {
         return;
      }

      this.bindEvents();
   },

   bindEvents() {
      if (window.matchMedia('(hover: none)').matches) {
         this.$authorsLabel.on('click', this.toggleActiveClass.bind(this));
      }

      $(document).on('click', this.handleDocumentClick.bind(this));
   },

   toggleActiveClass(event) {
      const $target = $(event.currentTarget);
      $target.toggleClass('is-active');
   },

   handleDocumentClick(event) {
      if (!$(event.target).closest(this.$authorsLabel).length) {
         this.$authorsLabel.removeClass('is-active');
      }
   }
};

const fancyboxModule = {
   init() {
      Fancybox.bind("[data-fancybox]", {});
   }
};

const favoriteButtonModule = {
   init() {
      const $favoriteButtons = $('.favorite-button');
      if ($favoriteButtons.length === 0) {
         return;
      }

      this.bindFavoriteEvents($favoriteButtons);
   },

   bindFavoriteEvents($buttons) {
      $buttons.on('click', function (e) {
         e.preventDefault();
         e.stopPropagation();
         $(this).toggleClass('is-active');
      });
   }
};

const passwordToggleModule = {
   init() {
      const $toggleButtons = $('.button-eye');
      if ($toggleButtons.length === 0) {
         return;
      }

      this.bindToggleEvents($toggleButtons);
   },

   bindToggleEvents($buttons) {
      $buttons.each(function() {
         const $button = $(this);

         $button.on('click', function() {
            const $input = $button.siblings('input[type="password"], input[type="text"]');
            if ($input.length === 0) {
               return;
            }

            const currentType = $input.attr('type');
            const newType = currentType === 'password' ? 'text' : 'password';
            $input.attr('type', newType);

            $button.toggleClass('is-active');
         });
      });
   }
};

const webformModule = {
   init() {
      this.initEvents();
   },
   initEvents() {
      const $buttons = $('.webform__toggle');
      if (!$buttons.length) {
         return;
      }
      $buttons.on('click', this.toggleWebform);
   },
   toggleWebform(e) {
      if (!e || !e.currentTarget) {
         return;
      }

      e.preventDefault();

      const $button = $(e.currentTarget);

      if (!$button.hasClass('webform__toggle')) {
         return;
      }

      const $webformWrapper = $button.next('.webform__wrapper');

      if ($webformWrapper.length) {
         if ($webformWrapper.is(':animated')) {
            return;
         }
         $webformWrapper.slideToggle(300);
         $button.toggleClass('is-active');
      }
   },
};

const dateInputModule = {
   init() {
      const $dateInput = $('[name="date"]');
      if ($dateInput.length === 0) {
         return;
      }

      this.bindDateEvents($dateInput);
   },

   bindDateEvents($input) {
      $input.on("input", (e) => {
         this.formatDate(e.target);
      });

      $input.on("keydown", (e) => {
         this.handleBackspace(e);
      });
   },

   formatDate(input) {
      let value = $(input).val().replace(/\D/g, "");
      let formattedValue = "";

      let day = value.substring(0, 2);
      if (parseInt(day) > 31) {
         day = "31";
      }
      formattedValue = day;

      let month = value.substring(2, 4);
      if (parseInt(month) > 12) {
         month = "12";
      }
      if (month.length > 0) {
         formattedValue += "." + month;
      }

      let year = value.substring(4, 8);
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

   handleBackspace(e) {
      const $input = $(e.target);
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

const buttonLoadingModule = {
   init() {
      const $button = $('.button-loading');
      if ($button.length === 0) {
         return;
      }

      this.handleLoading($button);
   },

   handleLoading($button) {
      $button.on('click', function(e) {
         e.preventDefault();

         const $currentButton = $(this);
         const dataLoadingValue = $currentButton.data('loading');

         if (!dataLoadingValue) {
            return;
         }

         const $targetBlock = $(`[data-loading="${dataLoadingValue}"]`);
         
         if ($targetBlock.length) {
            $targetBlock.addClass('is-active');
         }

         $currentButton.remove();
      });
   }
};

const glossaryModule = {
   init() {
      const $buttons = $('.glossary__listing-theme');
      if ($buttons.length === 0) {
         return;
      }

      this.handleToggle($buttons);
   },

   handleToggle($buttons) {
      $buttons.on('click', function () {
         const $currentButton = $(this);
         const $parentItem = $currentButton.closest('.glossary__listing-item');
         const $infoBlock = $parentItem.find('.glossary__listing-info');

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

const goodsTableModule = {
   init() {
      const $buttons = $('.goods__table-controls-button');
      if ($buttons.length === 0) {
         return;
      }
      this.handleCountChange($buttons);
   },

   handleCountChange($buttons) {
      $buttons.on('click', function () {
         const $currentButton = $(this);
         const $parent = $currentButton.closest('.goods__table-controls');
         const $countElement = $parent.find('.goods__table-controls-count');

         if ($countElement.length === 0) {
            return;
         }

         let count = parseInt($countElement.val(), 10);
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

const rangeSliderModule = {
   init() {
      const $sliders = $('.range__slider');
      if ($sliders.length === 0) {
         return;
      }
      this.setupSliders($sliders);
   },

   setupSliders($sliders) {
      $sliders.each((_, slider) => {
         const $slider = $(slider);
         const $parent = $slider.closest('.range');
         const $minInput = $parent.find('[data-range="min"]');
         const $maxInput = $parent.find('[data-range="max"]');

         if ($minInput.length === 0 || $maxInput.length === 0) {
            return;
         }

         const minValue = 10000;
         const maxValue = 1000000;
         const stepValue = 10000;

         noUiSlider.create(slider, {
            start: [minValue, maxValue / 2],
            connect: true,
            step: stepValue,
            range: {
               min: minValue,
               max: maxValue
            },
            format: {
               to: value => Math.round(value).toLocaleString('ru-RU'),
               from: value => Number(value.replace(/\s/g, ''))
            }
         });

         const sliderInstance = slider.noUiSlider;

         sliderInstance.on('update', values => {
            $minInput.val(values[0]);
            $maxInput.val(values[1]);
         });

         this.handleInputChange($minInput, sliderInstance, 0, minValue, maxValue);
         this.handleInputChange($maxInput, sliderInstance, 1, minValue, maxValue);
      });
   },

   handleInputChange($input, sliderInstance, handleIndex, minValue, maxValue) {
      $input.on('change', function () {
         let min = parseInt($input.closest('.range').find('[data-range="min"]').val().replace(/\s/g, ''), 10) || minValue;
         let max = parseInt($input.closest('.range').find('[data-range="max"]').val().replace(/\s/g, ''), 10) || maxValue;

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

const filterToggleModule = {
   init() {
      const $buttons = $('.filter__btn');
      if ($buttons.length === 0) {
         return;
      }
      this.handleToggle($buttons);
   },

   handleToggle($buttons) {
      $buttons.on('click', function (e) {
         e.preventDefault();

         const $currentButton = $(this);
         const $nextBlock = $currentButton.next();

         if ($nextBlock.length === 0) {
            return;
         }

         $currentButton.toggleClass('is-active');
         $nextBlock.stop(true, true).slideToggle(300);
      });
   }
};

const figuresModule = {
   init() {
      const $links = $('.figures__link');
      if ($links.length === 0) {
         return;
      }
      this.handleClick($links);
   },

   handleClick($links) {
      $links.on('click', function (e) {
         e.preventDefault();
   
         const $link = $(this);
         const $content = $link.next('.figures__content');
   
         $links.removeClass('is-active');
   
         if ($content.length) {
            $('.figures__content').not($content).stop(true, true).slideUp(300);
            $content.stop(true, true).slideToggle(300);
            $link.toggleClass('is-active');
            return;
         }
   
         const dataId = $link.data('id');
         if (!dataId) return;
   
         const dataName = $link.closest('[data-name]').data('name');
         if (!dataName) return;
   
         const $categoryBlock = $('[data-category="' + dataName + '"]');
         if (!$categoryBlock.length) return;
   
         const $items = $categoryBlock.find('.figures__item');
         $items.removeClass('is-active');
   
         const $targetItem = $items.filter('[data-tab="' + dataId + '"]');
         $targetItem.addClass('is-active');
   
         $link.addClass('is-active');
      });
   }
};

const questionToggleModule = {
   init() {
      const $questionLabels = $('.webform__label-question');
      if ($questionLabels.length === 0) {
         return;
      }

      this.bindEvents($questionLabels);
   },

   bindEvents($elements) {
      $elements.each(function() {
         const $element = $(this);

         if (!$element.length) {
            return;
         }

         $element.on('click', function(e) {
            e.preventDefault();

            const $text = $element.find('.webform__label-question-text');

            if ($text.length) {
               $text.toggleClass('is-active');
            }
         });
      });
   }
};

const downloadBoxModule = {
  init() {
    const $boxes = $('.download__box');
    if ($boxes.length === 0) {
      return;
    }

    this.bindEvents($boxes);
  },

  bindEvents($boxes) {
    $boxes.each(function () {
      const $box = $(this);
      const $input = $box.find('input[type="file"]');
      const $deleteBtn = $box.find('.download__delete');

      if ($input.length) {
        $input.on('change', function () {
          const file = this.files[0];

          if (file) {
            $box.addClass('is-active');

            $box.find('.download__loaded .download__file').text(file.name);

            const size = file.size;
            const readableSize = size > 1024 * 1024
              ? (size / (1024 * 1024)).toFixed(1) + ' MB'
              : (size / 1024).toFixed(1) + ' KB';

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

const filterSelectedModule = {
  init() {
    const $blocks = $('.filter__selected');
    if ($blocks.length === 0) {
      return;
    }

    this.bindEvents($blocks);
  },

  bindEvents($blocks) {
    $blocks.each(function () {
      const $block = $(this);
      const $input = $block.find('input');
      const $deleteBtn = $block.find('.filter__delete');

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
   $(window).on('resize', () => sidebarModule.handleResize());

   $(document).on('click', function (e) {
      const $target = $(e.target);
      if (!$target.closest('.select').length) {
         $('.select__list').removeClass('is-active');
      }
   });
});

$('.complex__controls').each(function() {
   const $control = $(this);
   const $radios = $control.find('input[type="radio"]');
   const $tabs = $control.find('.complex__tabs-btn');
   const $costPlans = $control.find('.complex__cost-plan');

   $radios.each(function(idx) {
      $(this).on('change', function() {
         $tabs.removeClass('is-active');
         $tabs.eq(idx).addClass('is-active');

         $costPlans.removeClass('is-active');
         $costPlans.eq(idx).addClass('is-active');
      });
   });
});