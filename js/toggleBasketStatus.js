//Проверка наличия товаров в корзине, скрытие/показ блока "корзина пуста"

//функция перещёта товаров в корзине
function toggleBasketStatus() {
	//создаем переменную - внутренности корзины
	const cartWrapper = document.querySelector('.cart-wrapper');
	//создаем переменную блока "корзина пуста"
	const cartEmptyBadge = document.querySelector('[data-cart-empty]');
	//создаем переменную блока "оформить заказ"
	const orderForm = document.querySelector('#order-form');

	//проверяем наличие/отсутствие товара и скрываем/показываем блок "корзина пуста"
	if (cartWrapper.children.length > 0) {
		cartEmptyBadge.classList.add('d-none');
		orderForm.classList.remove('d-none');
	} else {
		cartEmptyBadge.classList.remove('d-none');
		orderForm.classList.add('d-none');
	}
}