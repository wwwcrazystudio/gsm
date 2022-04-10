import noUiSlider from 'no-ui-slider';

jQuery(() => {
    var minSlider = document.getElementById('minute-slider');
    var minInputNumber = document.getElementById('min-input-number');
    var minShowNumber = document.getElementById('min-show-number');
    var smsSlider = document.getElementById('sms-slider');
    var smsInputNumber = document.getElementById('sms-input-number');
    var smsShowNumber = document.getElementById('sms-show-number');
    var vebSlider = document.getElementById('veb-slider');
    var vebInputNumber = document.getElementById('veb-input-number');
    var vebShowNumber = document.getElementById('veb-show-number');
    var mountlySlider = document.getElementById('mountly-slider');
    var mountlyInputNumber = document.getElementById('mountly-input-number');
    var mountlyShowNumber = document.getElementById('mountly-show-number');
    if (minSlider) {
        noUiSlider.create(minSlider, {
            start: 0,
            connect: 'lower',
            range: {
                min: 0,
                max: 555,
            },
        });

        /* Activate if you need to update input */

        /* testslider.noUiSlider.on('update', function (values, handle) {
            var value = values[handle];
            inputNumber.value = parseInt(value, 10);
        }); */

        minInputNumber.addEventListener('input', function () {
            minSlider.noUiSlider.set(this.value);
        });

        minSlider.noUiSlider.on('update', function (values, handle) {
            /* var showInput = values >= 1; */
            minShowNumber.innerHTML = parseInt(values[handle], 10) + ' мин.';
            /*   if (showInput) this.target.offsetParent.querySelector('.form__slinput-wrap').classList.add('form__slinput-wrap--shown');
              else this.target.offsetParent.querySelector('.form__slinput-wrap').classList.remove('form__slinput-wrap--shown'); */
        });
    }
    if (smsSlider) {
        noUiSlider.create(smsSlider, {
            start: 0,
            connect: 'lower',
            range: {
                min: 0,
                max: 30,
            },
        });

        smsInputNumber.addEventListener('input', function () {
            smsSlider.noUiSlider.set(this.value);
        });

        smsSlider.noUiSlider.on('update', function (values, handle) {
            smsShowNumber.innerHTML = parseInt(values[handle], 10) + ' мин.';
        });

        /* $('.form__slider-wrapper').on('mouseover', function () {
            $(this).parent().find('.form__slinput-wrap').addClass('form__slinput-wrap--shown');
        });
        $('.form__slider-wrap').on('mouseleave', function () {
            $(this).find('.form__slinput-wrap').removeClass('form__slinput-wrap--shown');
        }); */
    }

    if (vebSlider) {
        noUiSlider.create(vebSlider, {
            start: 0,
            connect: 'lower',
            range: {
                min: 0,
                max: 30,
            },
        });
        vebInputNumber.addEventListener('input', function () {
            vebSlider.noUiSlider.set(this.value);
        });

        vebSlider.noUiSlider.on('update', function (values, handle) {
            var maxValue = values >= 30;
            vebShowNumber.innerHTML = parseInt(values[handle], 10) + ' мин.';
            if (maxValue) document.getElementById('veb-show-number').innerHTML = 'Безлимит';
            else;
        });
    }

    if (mountlySlider) {
        noUiSlider.create(mountlySlider, {
            start: 0,
            connect: 'lower',
            range: {
                min: 0,
                max: 30,
            },
        });
        mountlyInputNumber.addEventListener('input', function () {
            mountlySlider.noUiSlider.set(this.value);
        });

        mountlySlider.noUiSlider.on('update', function (values, handle) {
            mountlyShowNumber.innerHTML = parseInt(values[handle], 10) + ' мин.';
        });
    }
});
