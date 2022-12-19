// Counter
//Клик на всё окно
window.addEventListener('click', function (event) {
	//Объявляем переменную для счётчика
	let counter;

	if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
		//Ищем родителя "+"
		const counterWrapper = event.target.closest('.counter-wrapper');
		//Ищем элемент в родителе
		counter = counterWrapper.querySelector('[data-counter]');
	}

	//Проверка на "+"
	if (event.target.dataset.action === 'plus') {

		counter.innerText = ++counter.innerText;
	}


	//Проверка на "-"
	if (event.target.dataset.action === 'minus') {

		if (parseInt(counter.innerText) > 1) {
			counter.innerText = --counter.innerText;
		}
	}
})


