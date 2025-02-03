"use strict";

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
      dynamicBullets: true,
      dynamicMainBullets: 8,
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
      // dynamicBullets: true,
      // dynamicMainBullets: 6,
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

// Инициализация Swiper
const swiper = new Swiper(".history__swiper", {
   slidesPerView: 1,
   spaceBetween: 20,
   effect: "fade",
   speed: 500,

   fadeEffect: {
      crossFade: true
   },
   navigation: {
      prevEl: ".history__prev",
      nextEl: ".history__next",
   },
   pagination: {
      el: ".history__pagination",
      clickable: true,
   },
   on: {
      // При изменении активного слайда
      slideChange: function () {
         syncActiveButton(swiper.activeIndex);
      },
   },
});

$('.card__table-swiper').each(function () {
   const $this = $(this);

   new Swiper($this[0], {
      slidesPerView: 2,
      spaceBetween: 15,
      keyboard: true,
      navigation: {
         prevEl: $this.find('.card__table-prev')[0],
         nextEl: $this.find('.card__table-next')[0],
      },
      pagination: {
         el: $this.find('.card__table-pagination')[0],
         clickable: true,
      },
      breakpoints: {
         768: {
            spaceBetween: 20,
         },
      },
   });
});

// Синхронизация кнопок и слайдов
const dateButtons = document.querySelectorAll(".history__dates-btn");

// Клик на кнопку - смена слайда
dateButtons.forEach((button, index) => {
   button.addEventListener("click", (e) => {
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
         prevEl: $(element).find('.swiper-button-prev')[0],
      },
      pagination: {
         el: $(element).find('.swiper-pagination')[0],
         clickable: true,
      },
      breakpoints: {
         1280: {
            slidesPerView: 3,
            spaceBetween: 40,
         },
      },
   });
});

// Функция обновления активной кнопки при смене слайда
function syncActiveButton(activeIndex) {
   dateButtons.forEach(button => button.classList.remove("is-active")); // Удаляем класс у всех
   if (dateButtons[activeIndex]) {
      dateButtons[activeIndex].classList.add("is-active"); // Добавляем только нужной
   }
}

// Установка активной кнопки вручную
function setActiveButton(index) {
   dateButtons.forEach(button => button.classList.remove("is-active")); // Удаляем класс у всех
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
      // allowTouchMove: false,
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

const isMobile = window.matchMedia("(max-width: 768px)").matches;

const nums = lozad('[data-nums]', {
   rootMargin: isMobile ? '-20px 0px' : '-100px 0px',
   threshold: 0.3,
   loaded: function(el) {
      $(el).find('[data-value]').each(function() {
         const text = $(this).attr('data-value').replace(/\s/g, ''); // Убираем пробелы из атрибута

         $(this).prop('Counter', 0).animate({
            Counter: text
         }, {
            duration: 1100,
            easing: 'swing',
            step: function(now) {
               // Форматирование числа с пробелами
               const formattedNumber = Math.ceil(now).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
               $(this).text(formattedNumber); // Устанавливаем отформатированное значение
            }
         });
      });
   }
});

nums.observe();

const phoneMaskModule = {
   init() {
      const $phoneElements = $('[data-name="phone"]');
      if ($phoneElements.length === 0) {
         console.warn('Нет элементов с data-name="phone" на странице.');
         return;
      }

      this.applyMasks($phoneElements);
   },

   applyMasks($elements) {
      $elements.each(function() {
         const $element = $(this);

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

const mapModule = {
   init() {
      if (typeof ymaps === 'undefined') {
         console.log('Яндекс карты не подключены.');
         return;
      }

      ymaps.ready(this.initializeMaps);
   },

   initializeMaps() {
      const mapElements = document.querySelectorAll('.map');
      if (!mapElements.length) {
         console.warn('Нет элементов с классом .map на странице.');
         return;
      }

      const markers = [
         { lat: 55.708495, lon: 37.656412, title: 'Метка 1' },
      ];

      if (!markers || markers.length === 0) {
         console.warn('Объект "markers" не найден или пуст.');
         return;
      }

      mapElements.forEach((mapElement, index) => {
         if (!mapElement) {
            console.warn(`Элемент карты с индексом ${index} не найден.`);
            return;
         }

         const map = new ymaps.Map(mapElement, {
            center: [55.708495, 37.656412],
            zoom: 18,
         });

         markers.forEach((marker, markerIndex) => {
            if (!marker.lat || !marker.lon) {
               console.warn(`Маркер с индексом ${markerIndex} имеет некорректные координаты.`);
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
      const $headerBox = $boxNav.closest('.header__box'); // Ищем контейнер header__box
      const $burger = $('.header__burger'); // Находим кнопку бургер

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

   checkOverflow() {
      if (!this.navList.length || !this.boxNav.length) {
         return;
      }

      // Возвращаем все элементы из boxNav обратно в navList
      while (this.boxNav[0].firstChild) {
         this.navList.append(this.boxNav[0].firstChild);
      }

      // Перемещаем элементы, которые не помещаются
      const navListItems = Array.from(this.navList.children('.header__nav-item'));
      for (let i = navListItems.length - 1; i >= 0; i--) {
         if (this.navList[0].scrollWidth > this.navList[0].clientWidth) {
            // Убираем последний элемент из navList и добавляем его в начало boxNav
            const item = navListItems[i];
            this.boxNav.prepend(item);
         } else {
            break;
         }
      }
   },

   toggleBoxActive() {
      // Проверяем, есть ли элементы внутри boxNav
      if (this.boxNav.children().length > 0) {
         this.headerBox.toggleClass('is-active'); // Добавляем класс на header__box
         this.burger.toggleClass('is-active'); // Добавляем класс на header__burger
      } else {
         this.headerBox.removeClass('is-active'); // Убираем класс с header__box
         this.burger.removeClass('is-active'); // Убираем класс с header__burger
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

      $selectActive.on('click', this.toggleSelectList);

      const $selectItems = $('.select__item');
      if (!$selectItems.length) {
         return;
      }

      $selectItems.on('click', this.selectItem);

      $(document).on('click', this.closeSelectList);
   },

   toggleSelectList(e) {
      e.preventDefault();

      const $button = $(e.currentTarget);
      const $selectList = $button.next('.select__list');
      
      if (!$selectList.length) {
         return;
      }

      $selectList.toggleClass('is-active');
   },

   selectItem(e) {
      e.preventDefault();

      const $item = $(e.currentTarget);
      const selectedText = $item.text();
      const $selectList = $item.closest('.select__list');
      const $selectActive = $selectList.prev('.select__active');

      if (!$selectActive.length) {
         return;
      }

      if (!$selectList.length) {
         return;
      }

      $selectList.find('.select__item').removeClass('is-active');
      $item.addClass('is-active');
      $selectActive.html(`<span>${selectedText}</span>`);
      $selectList.removeClass('is-active');
   },

   closeSelectList(e) {
      if (!$(e.target).closest('.select').length) {
         $('.select__list').removeClass('is-active');
      }
   },

   initMenuToggle() {
      const $menuToggle = $('.header__toggle');
      if (!$menuToggle.length) {
         return;
      }

      $menuToggle.on('click', this.toggleMenu);
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

      if (!accordionButton) {
         return;
      }

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

const observer = lozad('.lozad', {
   rootMargin: '10px 0px',
   threshold: 0.3
});

observer.observe();

$("form[name='form-callback']").each(function() {
   $(this).validate({
      rules: {
         "form-name": "required",
         "form-email": "required",
         "form-agree": "required",
      },
      messages: {
         "form-name": "Обязательное поле",
         "form-email": "Обязательное поле",
         "form-agree": "Обязательное поле",
      }
   });
});

$(document).ready(function() {
   // 1. Проверяем, есть ли элементы с классом .tabs-link на странице
   if ($('.tabs-link').length) {
       
       // 2. Добавляем событие на клик по .tabs-link
       $('.tabs-link').on('click', function(e) {
           e.preventDefault();  // 3. Останавливаем стандартное поведение ссылки
           
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

Fancybox.bind("[data-fancybox]", {

});

$('.books__like').on('click', function(e) {
   e.preventDefault();
   $(this).toggleClass('is-active');
})

const passwordToggleModule = {
   init() {
      const $toggleButtons = $('.btn--eye');
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
