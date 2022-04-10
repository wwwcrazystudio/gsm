import Swiper from 'swiper/bundle';
import AOS from 'aos';

AOS.init();

const hotToggleCheckbox = document.querySelector('.hot__toggle .hot__hot-toggle input');
const numbersHotSliderEl = document.querySelector('#numbersHotSlider');
const tariffsHotSliderEl = document.querySelector('#tariffsHotSlider');
const numbersSliderExsist = document.querySelector('#numbersHotSlider');
const tariffsSliderExsist = document.querySelector('#tariffsHotSlider');
const reviesSliderExsist = document.querySelector('#reviewsSlider');
const promoSliderExsist = document.querySelector('#promoSlider');

if (numbersSliderExsist) {
    const numbersHotSlider = new Swiper('#numbersHotSlider', {
        loop: true,
        autoplay: false,
        slidesPerView: 1,
        spaceBetween: 24,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        observer: true,
        observeParents: true,
        init: true,
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
        },
        pagination: {
            el: '#numbersHotSlider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.tariffsHotSlider-swiper-controls .swiper-button-next',
            prevEl: '.tariffsHotSlider-swiper-controls .swiper-button-prev',
        },
    });
    // Looks like shit but it's the only way I managed to make it work properly
    setTimeout(() => {
        numbersHotSlider.update();
        setTimeout(() => {
            numbersHotSlider.update();
        }, 100);
    }, 10);
}

if (tariffsSliderExsist) {
    const tariffsHotSlider = new Swiper('#tariffsHotSlider', {
        loop: true,
        autoplay: false,
        slidesPerView: 1,
        spaceBetween: 24,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        observer: true,
        observeParents: true,
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
        },
        pagination: {
            el: '#tariffsHotSlider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.tariffsHotSlider-swiper-controls .swiper-button-next',
            prevEl: '.tariffsHotSlider-swiper-controls .swiper-button-prev',
        },

    });

    setTimeout(() => {
        tariffsHotSlider.update();
        setTimeout(() => {
            tariffsHotSlider.update();
        }, 100);
    }, 10);
}

if (reviesSliderExsist) {
    const reviewsSlider = new Swiper('#reviewsSlider', {
        loop: true,
        autoplay: false,
        slidesPerView: 1,
        spaceBetween: 24,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        observer: true,
        observeParents: true,
        init: true,
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
        },
        navigation: {
            nextEl: '.reviews-slider-swiper-controls .swiper-button-next',
            prevEl: '.reviews-slider-swiper-controls .swiper-button-prev',
        },
    });

    setTimeout(() => {
        reviewsSlider.update();
        setTimeout(() => {
            reviewsSlider.update();
        }, 100);
    }, 10);
}

if (promoSliderExsist) {
    const promoSlider = new Swiper('#promoSlider', {
        loop: true,
        autoplay: false,
        slidesPerView: 1,
        spaceBetween: 24,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        observer: true,
        observeParents: true,
        init: true,
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
        },
        navigation: {
            nextEl: '.promo-slider-swiper-controls .swiper-button-next',
            prevEl: '.promo-slider-swiper-controls .swiper-button-prev',
        },
    });

    setTimeout(() => {
        promoSlider.update();
        setTimeout(() => {
            promoSlider.update();
        }, 100);
    }, 10);
}

// eslint-disable-next-line curly
if (hotToggleCheckbox) {
    hotToggleCheckbox.addEventListener('change', () => {
        if (hotToggleCheckbox.checked === true) {
            document.querySelectorAll('.hot__toggle p')[0].classList.remove('slider-active');
            numbersHotSliderEl.classList.remove('slider-active');

            document.querySelectorAll('.hot__toggle p')[1].classList.add('slider-active');
            tariffsHotSliderEl.classList.add('slider-active');
        } else {
            document.querySelectorAll('.hot__toggle p')[1].classList.remove('slider-active');
            tariffsHotSliderEl.classList.remove('slider-active');
            document.querySelectorAll('.hot__toggle p')[0].classList.add('slider-active');
            numbersHotSliderEl.classList.add('slider-active');
        }
    });
}

/* Header sub-menus */

jQuery(function ($) {
    $('.menu-item-has-children').hover(function () {
        $(this).find('.sub-menu').fadeIn(500);
    }, function () {
        $(this).find('.sub-menu').fadeOut(500);
    });

    $('.mobile-menu-has-children').on('click', function () {
        $(this).find('.mobile-sub-menu').slideToggle();
        $(this).toggleClass('mobile-menu-has-children--expanded');
    });
});

/* Header-mobile */

$(document).ready(function () {
    $('.mobile-menu__close').click(function () {
        var toggleActive = $('.mobile-toggle').hasClass('mobile-toggle--expanded');
        $('.mobile-toggle').toggleClass('mobile-toggle--expanded');
        $('.header__toggle-wrap').toggleClass('header__toggle-wrap--mobile');
        $('.preheader__wrapper').toggleClass('preheader__wrapper--mobile');
        $('html').toggleClass('locked');
        if (!toggleActive) $('.mobile-menu').fadeIn();
        else $('.mobile-menu').fadeOut();
    });
    $('.mobile-toggle').click(function () {
        var toggleActive = $('.mobile-toggle').hasClass('mobile-toggle--expanded');
        $(this).toggleClass('mobile-toggle--expanded');
        $('.header__toggle-wrap').toggleClass('header__toggle-wrap--mobile');
        $('.preheader__wrapper').toggleClass('preheader__wrapper--mobile');
        $('html').toggleClass('locked');
        if (!toggleActive) $('.mobile-menu').fadeIn();
        else $('.mobile-menu').fadeOut();
    });
});

jQuery(function ($) {
    $('.support-page__item').on('click', function () {
        $(this).toggleClass('support-page__item--expanded');
        $(this).find('.support-page__expand-btn').toggleClass('support-page__expand-btn--expanded');
        $(this).find('.support-page__answer').slideToggle();
    });
    $('.tariff-content__item').on('click', function () {
        $(this).toggleClass('tariff-content__item--expanded');
        $(this).find('.tariff-content__expand-btn').toggleClass('tariff-content__expand-btn--expanded');
        $(this).find('.tariff-content__content').slideToggle();
    });
    $('.tariff-content__notice-btn').on('click', function () {
        $(this).toggleClass('tariff-content__notice-btn--expanded');
        $(this).parent().find('.tariff-content__notice-list').slideToggle();
        $(this).parent().toggleClass('tariff-content__notice-wrap--expanded');
    });
    /* custom select */
    $('.select-btn').on('click', function (event) {
        event.stopPropagation();
        $(this).parent().find('.select-btn__list').slideToggle();
        $(this).toggleClass('select-btn--expanded');
    });
    $('.select-btn__item').on('click', function (event) {
        var value = $(this).attr('data-value');
        event.stopPropagation();
        $(this).parents('.form__select-wrap').find('.form__input-hidden').val(value);
        $(this).parents('.form__select-wrap').find('.select-btn').text(value);
        $(this).parent().slideToggle();
        $(this).parents('.form__select-wrap').find('.form__select-btn').toggleClass('select-btn--expanded');
    });
    $(document).on('click', () => {
        $('.select-btn__list').slideUp();
        $('.select-btn').removeClass('select-btn--expanded');
    });
});

$('.form-tabs__switch-btn').click(function () {
    var id = $(this).attr('data-tab');
    var content = $('.form-tabs__tab[data-tab="' + id + '"]');

    $('.form-tabs__switch-btn.form-tabs__switch-btn--active').removeClass('form-tabs__switch-btn--active'); // 1
    $(this).addClass('form-tabs__switch-btn--active'); // 2

    $('.form-tabs__tab.form-tabs__tab--active').removeClass('form-tabs__tab--active'); // 3
    content.addClass('form-tabs__tab--active'); // 4
});

$('#scroll-to-from').click(function () {
    $([document.documentElement, document.body]).animate({
        scrollTop: $('.catalog-content__form').offset().top - 50,
    }, 2000);
});
