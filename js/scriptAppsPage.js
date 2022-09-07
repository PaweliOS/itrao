const burgerBtn = document.querySelector('.burger-btn');
const navMobile = document.querySelector('.nav-mobile');
const navMobileItems = document.querySelectorAll('.nav-mobile__item');
const arrowDownBtn = document.querySelector('.apps__page-one-arrow--down')
const arrowUpBtn = document.querySelector('.apps__page-one-arrow--up')
const appsPageOne = document.querySelector('.apps__page-one')

const displayMobNav = () => {
	navMobile.classList.toggle('nav-mobile--active');

	navMobileItems.forEach((item) => {
		item.addEventListener('click', () => {
			navMobile.classList.remove('nav-mobile--active');
		});
	});
};




// ===== arrowDownBtn =================
const switchPageOne = () => {
	appsPageOne.classList.toggle('apps__page-one-move')
    // console.log('wcisnieto guzik')
}

// =================================
// ===== arrowUpBtn =================
const moveUpPageOne = () => {
	appsPageOne.classList.remove('apps__page-one-move')
    // console.log('wcisnieto guzik')
}

// =================================


burgerBtn.addEventListener('click', displayMobNav);
arrowDownBtn.addEventListener('click', switchPageOne)
arrowUpBtn.addEventListener('click', moveUpPageOne)