// Counter
//Элементы для взаимодействия
const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector('[data-counter]');

//Клик "-"
btnMinus.addEventListener('click', function() {

	if (parseInt(counter.innerText) > 1) {
		counter.innerText = --counter.innerText;
	}

});

//Клик "+"
btnPlus.addEventListener('click', function() {
	counter.innerText = ++counter.innerText;
});