const burgerBtn = document.querySelector('.burger-btn');
const navMobile = document.querySelector('.nav-mobile');
const navMobileItems = document.querySelectorAll('.nav-mobile__item');

const displayMobNav = () => {
	navMobile.classList.toggle('nav-mobile--active');

	navMobileItems.forEach((item) => {
		item.addEventListener('click', () => {
			navMobile.classList.remove('nav-mobile--active');
		});
	});
};
burgerBtn.addEventListener('click', displayMobNav);
