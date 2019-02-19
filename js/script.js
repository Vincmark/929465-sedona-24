var buttonSub = document.getElementById('id-adults-sub');
var buttonAdd = document.getElementById('id-adults-add');
var valueSub;


buttonSub.addEventListener('click', function (evt) {
    evt.preventDefault();
    valueSub = document.getElementById('id-adults').value;
    if (valueSub>1) {
        document.getElementById('id-adults').value = valueSub - 1;
    }
});


buttonAdd.addEventListener('click', function (evt) {
    evt.preventDefault();
    valueSub = document.getElementById('id-adults').value;
    if (valueSub<8) {
        document.getElementById('id-adults').value = Number(valueSub) + 1;
    }
});
