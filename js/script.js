
let button = document.querySelector('.booking-CTA-button');
let booking_form = document.querySelector('.booking-form');
button.addEventListener('click', function (evt) {
    evt.preventDefault();
    let isFormOpened=booking_form.classList.contains('form-show');
    if (isFormOpened) {
        booking_form.classList.remove('form-show');
    } else {
        booking_form.classList.add('form-show');
    }
});


let adultsAddBtn=document.getElementById('id-adults-add');
adultsAddBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    let adultsNum=document.getElementById('id-adults');
    let num=adultsNum.value;
    num++;
    if (num<=9) {
        adultsNum.value=num;
    }
});

let adultsSubBtn=document.getElementById('id-adults-sub');
adultsSubBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    let adultsNum=document.getElementById('id-adults');
    let num=adultsNum.value;
    num--;
    if (num>=1) {
        adultsNum.value=num;
    }
});

let childrenAddBtn=document.getElementById('id-children-add');
childrenAddBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    let childrenNum=document.getElementById('id-children');
    let num=childrenNum.value;
    num++;
    if (num<=9) {
        childrenNum.value=num;
    }
});

let childrenSubBtn=document.getElementById('id-children-sub');
childrenSubBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    let childrenNum=document.getElementById('id-children');
    let num=childrenNum.value;
    num--;
    if (num>=0) {
        childrenNum.value=num;
    }
});