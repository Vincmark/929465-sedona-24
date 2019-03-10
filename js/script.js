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
var booking_find_btn = document.querySelector('.booking-form-find');
var booking_form = document.querySelector('.booking-form');
var ArrivalDate = document.getElementById('id-arrival-date');
var DepartureDate = document.getElementById('id-departure-date');
var ArrivalDateText = document.querySelector('.arrival-date-text');
var DepartureDateText = document.querySelector('.departure-date-text');
var AdultsNum = document.getElementById('id-adults');
var ChildrenNum = document.getElementById('id-children');
var AdultsNumText = document.querySelector('.adults-num-text');
var ChildrenNumText = document.querySelector('.children-num-text');

if (button!==null) {
    button.addEventListener('click', function (evt) {
        evt.preventDefault();
        var isShowAnimation=booking_form.classList.contains('form-show');
        var isShowForm = booking_form.classList.contains('form-show-no-animation');
        if (!isShowAnimation && !isShowForm)
            booking_form.classList.add('form-show');
        else if (isShowAnimation || isShowForm) {
            booking_form.classList.remove('form-show');
            booking_form.classList.remove('form-show-no-animation');
        }
        clearError();
    });
    booking_find_btn.addEventListener('click', function (evt) {
        evt.preventDefault();
        clearError();
        booking_form.offsetWidth = booking_form.offsetWidth;

        var ADateError=false;
        var DDateError=false;
        var AdultsError=false;
        var ChildrenError=false;
        var DateError=false;

        var ADateVal = ArrivalDate.value;
        var DDateVal = DepartureDate.value;
        var ANum = AdultsNum.value;
        var CNum = ChildrenNum.value;
        var ArrivalDateValid=isDate(ADateVal);
        var DepartureDateValid=isDate(DDateVal);
        var TodayDate = new Date();
        TodayDate.setHours(0);
        TodayDate.setMinutes(0);
        TodayDate.setSeconds(0);

        if (ArrivalDateValid === false){
            ADateError = true;
        }
        if (DepartureDateValid === false){
            DDateError = true;
        }
        if (ADateError || DDateError){
            DateError = true;
        }
        if (ArrivalDateValid - TodayDate < 0){
            ADateError = true;
            DateError = true;
        }
        if ((DepartureDateValid - ArrivalDateValid < 0) || (DepartureDateValid - TodayDate < 0)){
            DDateError = true;
            DateError = true;
        }
        if ((ANum === '') || (Number(ANum) < 1)){
            AdultsError = true;
            DateError = true;
        }
        if (CNum === ''){
            ChildrenError = true;
            DateError = true;
        }
        if (!DateError) {
            document.getElementById("id-booking-form").submit();
        } else{
            setError(ADateError, DDateError, AdultsError, ChildrenError, DateError);
        }
    });
}

var isDate = function(date) {
    date.toLowerCase();
    date.trim();
    var monthList = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
    var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
    var dateElems = date.split(' ');

    if (dateElems.length !== 3)
        return false;

    var monthIndex=monthList.indexOf(dateElems[1]);
    if (monthIndex === -1)
        return false;

    var day = dateElems[0];
    var month = monthIndex;
    var year = dateElems[2];

    // Check the ranges of month and year
    if(year < 2000 || year > 2100)
        return false;

    // Adjust for leap years
    if(year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0))
        monthLength[1] = 29;

    if ((day < 0) || (day > monthLength[month]))
        return false;

    var d = new Date();
    d.setDate(day);
    d.setMonth(month);
    d.setFullYear(year);
    d.setHours(0);
    d.setMinutes(0);
    d.setSeconds(0);

    return(d);
};

var setError = function(aDate, dDate, Adults, Children, Date) {

    if (aDate){
        ArrivalDateText.classList.add('input-error');
    }
    if (dDate){
        DepartureDateText.classList.add('input-error');
    }
    if (Adults){
        AdultsNumText.classList.add('input-error');
    }
    if (Children){
        ChildrenNumText.classList.add('input-error');
    }
    if (aDate || dDate || Date) {
        booking_form.classList.add('form-error');
        booking_form.classList.add('form-show-no-animation');
        booking_form.classList.remove('form-show');
    }
};

var clearError = function() {
    booking_form.classList.remove('form-error');
    ArrivalDateText.classList.remove('input-error');
    DepartureDateText.classList.remove('input-error');
    AdultsNumText.classList.remove('input-error');
    ChildrenNumText.classList.remove('input-error');
};

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