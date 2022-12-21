//Подсчёт стоимости товаров

function calcCartPriceAndDelivery () {
	//находим все cart-item (товары) в корзине  **в других местах cart-item нет**
	const cartItems = document.querySelectorAll('.cart-item');

	const totalPriceEl = document.querySelector('.total-price');

	const deliveryCost = document.querySelector('.delivery-cost'); //AndDelivery
	const cartDeliveryEl = document.querySelector('[data-cart-delivery]'); //AndDelivery

	//переменная для общей стоимости товаров
	let totalPrice = 0;

	//обходим все все блоки товара в корзине
	cartItems.forEach(function(item) {

		const countEl = item.querySelector('[data-counter]');
		const priceEl = item.querySelector('.price__currency');
		const currentPrice = parseInt(countEl.innerText) * parseInt(priceEl.innerText);
		totalPrice = totalPrice + currentPrice;
	})
	//выводим стоимость товаров в блок "Итого"
	totalPriceEl.innerText = totalPrice;




	//AndDelivery

	//скрываем/показываем блок доставки
	if (totalPrice > 0) {
		cartDeliveryEl.classList.remove('d-none');
		deliveryCost.innerText = 'за счёт покупателя';
	} else {
		cartDeliveryEl.classList.add('d-none');
	}


	//выводим стомость доставки
	/*
	if (totalPrice >= 5000) {
		deliveryCost.classList.add('free');
		deliveryCost.innerText = 'бесплатно';
	} else {
		deliveryCost.classList.remove('free');
		deliveryCost.innerText = '900 ₽';
	}
	*/
}