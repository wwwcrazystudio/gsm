/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    createPopper,
} from '@popperjs/core';

const button = document.querySelector('#button');
const tooltip = document.querySelector('#tooltip');

const popperInstance = createPopper(button, tooltip, {
    placement: 'bottom-end',
});

$(button).on('click', function (event) {
    event.stopPropagation();
    $('.cart-modal').toggleClass('cart-modal--shown');
    popperInstance.update();
});
$(tooltip).on('click', function (event) {
    event.stopPropagation();
});
$(document).on('click', () => {
    $('.select-btn__list').slideUp();
    $('.cart-modal').removeClass('cart-modal--shown');
});

$('#test').on('click', function () {
    $('#exampleModalLong').modal();
});
