
// var popup = document.querySelector('.booking-form');
// popup.classList.add('form-show');
var button = document.querySelector('.booking-CTA-button');
button.addEventListener('click', function () {
    console.log('Клик по кнопке');
});

var popup = document.querySelector('.modal');
var openPopupButton = document.querySelector('.button-open');
var closePopupButton = popup.querySelector('.button-close');

openPopupButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.add('modal--show');
});

closePopupButton.addEventListener('click', function () {
    popup.classList.remove('modal--show');
});








// var buttonSub = document.getElementById('id-adults-sub');
// var buttonAdd = document.getElementById('id-adults-add');
// var valueSub;
//
//
// buttonSub.addEventListener('click', function (evt) {
//     evt.preventDefault();
//     valueSub = document.getElementById('id-adults').value;
//     if (valueSub>1) {
//         document.getElementById('id-adults').value = valueSub - 1;
//     }
// });
//
//
// buttonAdd.addEventListener('click', function (evt) {
//     evt.preventDefault();
//     valueSub = document.getElementById('id-adults').value;
//     if (valueSub<8) {
//         document.getElementById('id-adults').value = Number(valueSub) + 1;
//     }
// });
