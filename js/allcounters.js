// Счётчики и удаление товара из корзины
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
		//остановка счётчика на единице
		if (parseInt(counter.innerText) > 1) {
			counter.innerText = --counter.innerText;
		//удаление товара из корзины кнопкой "-"
		//проверка на то что товар находится в корзине, а не в каталоге и проверка значения в счётчике
		} else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
			//удаляем
			event.target.closest('.cart-item').remove();

			//отображение статуса корзины(пустая/полная)
        	toggleBasketStatus();

        	//считаем стоимость
			calcCartPriceAndDelivery();
		}
	}

	//проверяем что клик по "+"/"-" совершен внутри корзины и только тогда запускаем функцию calCartPrice
	if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
		//считаем стоимость
		calcCartPriceAndDelivery();
	}
})


