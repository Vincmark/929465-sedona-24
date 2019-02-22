let priceFrom=document.getElementById('id-min-price');
let priceTo=document.getElementById('id-max-price');

console.log(priceFrom);
console.log(priceFrom!==null);
if (priceFrom!==null) {
    priceFrom.addEventListener('change', function (evt) {
        evt.preventDefault();
        let vmin = Number(priceFrom.value);
        let vmax = Number(priceTo.value);

        if (vmin === 0) vmin = 0;
        if (vmin > vmax) vmin = vmax - 1;
        if (vmin > 3499) vmin = 3499;
        if (vmin < 0) vmin = 0;
        priceFrom.value = vmin;

        let togglMin = document.getElementById('id-toggle-min');
        togglMin.style.left = getBarPosition(vmin) + '%';

    });
}

if (priceTo!==null) {
    priceTo.addEventListener('change', function (evt) {
        evt.preventDefault();
        let vmin = Number(priceFrom.value);
        let vmax = Number(priceTo.value);

        console.log('0. ' + vmax);
        if (vmax === 0) vmax = 3500;
        console.log('1. ' + vmax);
        if (vmax < vmin) vmax = vmin + 1;
        if (vmax > 3500) vmax = 3500;
        if (vmax < 0) vmax = 0;
        priceTo.value = vmax;

        let togglMax = document.getElementById('id-toggle-max');
        togglMax.style.left = getBarPosition(vmax) + '%';
    });
}

function getBarPosition (price) {
    return Math.round(100/3500*price);
}


let button = document.querySelector('.booking-CTA-button');
let booking_form = document.querySelector('.booking-form');
if (button!==null) {
    button.addEventListener('click', function (evt) {
        evt.preventDefault();
        booking_form.classList.toggle('form-show');
    });
}

let adultsAddBtn=document.getElementById('id-adults-add');
if (adultsAddBtn!==null) {
    adultsAddBtn.addEventListener('click', function (evt) {
        evt.preventDefault();
        let adultsNum = document.getElementById('id-adults');
        let num = adultsNum.value;
        num++;
        if (num <= 9) {
            adultsNum.value = num;
        }
    });
}

let adultsSubBtn = document.getElementById('id-adults-sub');
if (adultsSubBtn!==null) {
    adultsSubBtn.addEventListener('click', function (evt) {
        evt.preventDefault();
        let adultsNum = document.getElementById('id-adults');
        let num = adultsNum.value;
        num--;
        if (num >= 1) {
            adultsNum.value = num;
        }
    });
}

let childrenAddBtn=document.getElementById('id-children-add');
if (childrenAddBtn!==null) {
    childrenAddBtn.addEventListener('click', function (evt) {
        evt.preventDefault();
        let childrenNum = document.getElementById('id-children');
        let num = childrenNum.value;
        num++;
        if (num <= 9) {
            childrenNum.value = num;
        }
    });
}

let childrenSubBtn=document.getElementById('id-children-sub');
if (childrenSubBtn!==null) {
    childrenSubBtn.addEventListener('click', function (evt) {
        evt.preventDefault();
        let childrenNum = document.getElementById('id-children');
        let num = childrenNum.value;
        num--;
        if (num >= 0) {
            childrenNum.value = num;
        }
    });
}