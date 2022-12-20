//Добавление товара в корзину

const cartWrapper = document.querySelector('.cart-wrapper');

//отслеживаем клик на странице

window.addEventListener('click', function (event) {

	//Проверяем что клик был совершен по кнопке "в корзинк"
	if (event.target.hasAttribute('data-cart')) {
		//находим карточку кнопки и родителя кнопки в кликнутой карточке
		const card = event.target.closest('.card');

		//собираем данные с товара и записываем их в объект productInfo
		const productInfo = {
			id: card.dataset.id,
			imgSrc: card.querySelector('.product-img').getAttribute('src'),
			title: card.querySelector('.item-title').innerText,
			weight: card.querySelector('.price__weight').innerText,
			price: card.querySelector('.price__currency').innerText,
			counter: card.querySelector('[data-counter]').innerText,
		};

        //проверяем наличие добавляемого товара в корзине
        const itemInBasket = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);
        //если товар уже есть в корзине
        if (itemInBasket) {
            const counterElement = itemInBasket.querySelector('[data-counter]');
            counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
        } else {
            //если товара нет
            //вставляем данные из productInfo в шаблон
            const cartItemHTML = `<div class="card mb-3 cart-item" data-id="${productInfo.id}">
                                    <div class="row g-0 cart-item__top">
                                        <div class="col-md-4 cart-item__img">
                                            <img src="${productInfo.imgSrc}" class="img-fluid rounded-start" alt="product-image">
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body cart-item__desc">
                                                <h5 class="card-title cart-item__title">${productInfo.title}</h5>
                                                <p class="card-text cart-item__weight">${productInfo.weight}</p>
                                                <div class="cart-item__details">
                                                    <div class="items items--small counter-wrapper d-flex">
                                                        <button class="btn btn-primary items__control" data-action="plus">+</button>
                                                        <div class="items__current px-2" data-counter="">${productInfo.counter}</div>
                                                        <button class="btn btn-danger items__control" data-action="minus">--</button>
                                                    </div>
                                                    <div class="price">
                                                        <p class="card-text price__currency">${productInfo.price}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>`;

            //отображаем товар в корзине
            cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);

        }

        //сбрасываем счётчик добавленного товара
        card.querySelector('[data-counter]').innerText = '1';	

	}
})