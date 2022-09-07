const burgerBtn = document.querySelector('.burger-btn');
const navMobile = document.querySelector('.nav-mobile');
const navMobileItems = document.querySelectorAll('.nav-mobile__item');
const remakeBox = document.querySelector('.remake-box');
const remakeBoxBtn = document.querySelector('.remake-box__btn');

const displayMobNav = () => {
	navMobile.classList.toggle('nav-mobile--active');

	navMobileItems.forEach((item) => {
		item.addEventListener('click', () => {
			navMobile.classList.remove('nav-mobile--active');
		});
	});
};

// ====== REMAKE-BOX ==============
const showRemakeBox = () => {
remakeBox.classList.add('box-active')
}

const hideRemakeBox = () => {
	remakeBox.classList.remove('box-active')
}
// =================================

document.addEventListener('DOMContentLoaded',showRemakeBox)
burgerBtn.addEventListener('click', displayMobNav);
remakeBoxBtn.addEventListener('click', hideRemakeBox);