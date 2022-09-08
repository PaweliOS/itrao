const burgerBtn = document.querySelector('.burger-btn');
const navMobile = document.querySelector('.nav-mobile');
const navMobileItems = document.querySelectorAll('.nav-mobile__item');
const arrowDownBtn = document.querySelector('.apps__page-one-arrow--down')
const arrowUpBtns = document.querySelectorAll('.apps__page-two-arrow--up')
// const appsPageOne = document.querySelector('.apps__page-one')
const arrowDownBtns = document.querySelectorAll('.apps__page-one-arrow--down')
// const arrowDownPanelTwo = document.querySelector('.btn-panel-two');

let appsPageOne
// deklaracja zidentyfikowanego arrowDownBtn
let arrowDown


const displayMobNav = () => {
	navMobile.classList.toggle('nav-mobile--active');

	navMobileItems.forEach((item) => {
		item.addEventListener('click', () => {
			navMobile.classList.remove('nav-mobile--active');
		});
	});
};

const arrowListenerSettings = () => {
    arrowDownBtns.forEach((btn) => {
        btn.addEventListener('click', checkArrowDownBtn)

    })
    arrowUpBtns.forEach((btn) => {
        btn.addEventListener('click', checkArrowUpBtn )
    })
}

const checkArrowDownBtn = (e) => {
    arrowDown = e.target.closest('button')
    arrowDown.classList.add('hidding')
    appsPageOne = e.target.closest('.apps__page-one')
    appsPageOne.classList.toggle('apps__page-one-move')

}
const checkArrowUpBtn = () => {
    appsPageOne.classList.toggle('apps__page-one-move')
    arrowDown.classList.remove('hidding')

}


burgerBtn.addEventListener('click', displayMobNav);
document.addEventListener('DOMContentLoaded', arrowListenerSettings)
