// Підключення з node_modules
import * as noUiSlider from 'nouislider';

// Підключення стилів з scss/base/forms/range.scss 
// у файлі scss/forms/forms.scss

// Підключення стилів з node_modules
//import 'nouislider/dist/nouislider.css';

export function rangeInit() {
    const priceSlider = document.querySelector('#range');
    const priceStart = document.getElementById('price-start');
    const priceEnd = document.getElementById('price-end');
    if (priceSlider) {
        let textFrom = priceSlider.getAttribute('data-from');
        let textTo = priceSlider.getAttribute('data-to');
        let textMin = priceSlider.getAttribute('data-min');
        let textMax = priceSlider.getAttribute('data-max');
        noUiSlider.create(priceSlider, {
            start: [parseInt(textFrom), parseInt(textTo)],
            connect: true,
            range: {
                'min': [parseInt(textMin)],
                'max': [parseInt(textMax)]
            },

            // format: wNumb({
            //     decimals: 0
            // })

        });
        priceSlider.noUiSlider.on('update', (values) => {
            priceStart.value = parseInt(values[0]);
            priceEnd.value = parseInt(values[1]);
        })

        priceStart.addEventListener('change', setPriceValues);
        priceEnd.addEventListener('change', setPriceValues);

        function setPriceValues() {
            let priceStartValue;
            let priceEndValue;
            if (priceStart.value != '') {
                priceStartValue = priceStart.value;
            }
            if (priceEnd.value != '') {
                priceEndValue = priceEnd.value;
            }
            priceSlider.noUiSlider.set([priceStartValue, priceEndValue]);
        }
    }
}

rangeInit();
