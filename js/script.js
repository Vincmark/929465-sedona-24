var priceFrom=document.getElementById('id-min-price');
var priceTo=document.getElementById('id-max-price');
var wMax = 298;

if (priceFrom!==null) {
    priceFrom.addEventListener('change', function (evt) {
        evt.preventDefault();
        var vmin = Number(priceFrom.value);
        var vmax = Number(priceTo.value);

        if (vmin === 0) vmin = 0;
        if (vmin > vmax) vmin = vmax - 1;
        if (vmin > 3499) vmin = 3499;
        if (vmin < 0) vmin = 0;
        priceFrom.value = vmin;

        var togglMin = document.getElementById('id-toggle-min');
        // console.log(vmin);
        togglMin.style.left = getBarPosition(vmin) + 'px';
        setBarLine ();
    });
}

if (priceTo!==null) {
    priceTo.addEventListener('change', function (evt) {
        evt.preventDefault();
        var vmin = Number(priceFrom.value);
        var vmax = Number(priceTo.value);

        if (vmax === 0) vmax = vmin + 1;
        if (vmax < vmin) vmax = vmin + 1;
        if (vmax > 3500) vmax = 3500;
        if (vmax < 0) vmax = 0;
        priceTo.value = vmax;

        var togglMax = document.getElementById('id-toggle-max');
        togglMax.style.left = getBarPosition(vmax) + 'px';
        setBarLine ();
    });
}

function getBarPosition (price) {
    // console.log(wMax/3500*price);
    return Math.round(wMax/3500*price);
}

function setBarLine () {
    var startVal = Number(priceFrom.value);
    var endVal = Number(priceTo.value);
    var x1=Math.round(wMax/3500*startVal);
    var x2=Math.round(wMax/3500*endVal);
    var w=x2-x1;
    var bar = document.querySelector('.bar');
    bar.style.left = (x1+10)+'px';
    bar.style.width = w+'px';
}

var button = document.querySelector('.booking-CTA-button');
var booking_form = document.querySelector('.booking-form');
if (button!==null) {
    // booking_form.classList.remove('form-show');
    button.addEventListener('click', function (evt) {
        evt.preventDefault();
        booking_form.classList.toggle('form-show');
    });
}

var adultsAddBtn=document.getElementById('id-adults-add');
if (adultsAddBtn!==null) {
    adultsAddBtn.addEventListener('click', function (evt) {
        evt.preventDefault();
        var adultsNum = document.getElementById('id-adults');
        var num = adultsNum.value;
        num++;
        if (num <= 9) {
            adultsNum.value = num;
        }
    });
}

var adultsSubBtn = document.getElementById('id-adults-sub');
if (adultsSubBtn!==null) {
    adultsSubBtn.addEventListener('click', function (evt) {
        evt.preventDefault();
        var adultsNum = document.getElementById('id-adults');
        var num = adultsNum.value;
        num--;
        if (num >= 1) {
            adultsNum.value = num;
        }
    });
}

var childrenAddBtn=document.getElementById('id-children-add');
if (childrenAddBtn!==null) {
    childrenAddBtn.addEventListener('click', function (evt) {
        evt.preventDefault();
        var childrenNum = document.getElementById('id-children');
        var num = childrenNum.value;
        num++;
        if (num <= 9) {
            childrenNum.value = num;
        }
    });
}

var childrenSubBtn=document.getElementById('id-children-sub');
if (childrenSubBtn!==null) {
    childrenSubBtn.addEventListener('click', function (evt) {
        evt.preventDefault();
        var childrenNum = document.getElementById('id-children');
        var num = childrenNum.value;
        num--;
        if (num >= 0) {
            childrenNum.value = num;
        }
    });
}