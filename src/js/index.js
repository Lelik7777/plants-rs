//constants

//for hamburger
const $navigation = document.querySelector('.navigation');
const $hamburger = document.querySelector('.hamburger');

//for section service
const btnActive = 'btn_active';
const blur = 'blur';
const $btnService = document.querySelector('.service__btns');
const $serviceItems = document.querySelectorAll('.service__item');

//for section prices
const activePrice = 'prices__btn_active';
const $pricesItems = document.querySelector('.prices__items');
const $btnsPrices = $pricesItems.querySelectorAll('.prices__btn');
//const $btnOrder=document.querySelector('.accordion__btn');



//hamburger animation

$hamburger.addEventListener('click', function () {
    this.classList.toggle('_active');
    $navigation.classList.toggle('_active');
    document.body.classList.toggle('_lock');
});
$navigation.addEventListener('click', function (e) {
    document.body.classList.toggle('_lock');
    this.classList.toggle('_active');
    $hamburger.classList.toggle('_active');

});

///////////////////////////////////////////////////////////////

//button connections for section service and implementation of blur for images
let count = 0;
$btnService.addEventListener('click', function (e) {
    const btn = e.target;
    //get button name
    const nameBtn = btn.className.match(/btn__[a-z]+/g).join('').replace(/btn__/g, '');

    const setBlur = (arr, name, effect) => arr.forEach(item => {
        const nameItem = item.getAttribute('class').replace(/[a-z]+__[a-z]+|blur/g, '').trim();
        nameItem === name && item.classList.toggle(effect);
    });
    const changeBlur = (arr, effect, type = true) =>
        arr.forEach(el => type ? el.classList.add(effect) : el.classList.remove(effect));
//добавляем blur для всех картинок вначале
    count === 0 && changeBlur([...$serviceItems], blur);


    //add and remove class btn_active for buttons
    if (btn.classList.contains(btnActive)) {
        btn.classList.remove(btnActive);
        --count;
        setBlur([...$serviceItems], nameBtn, blur);
        //обнуляем blur для всех картинок,когда неактивны все кнопки
        count === 0 && changeBlur([...$serviceItems], blur, false);

    } else {
        if (count === 2) return;
        btn.classList.add(btnActive);
        ++count;
        setBlur([...$serviceItems], nameBtn, blur);
    }

});
//////////////////////////////////////////////////////////////

// prices
$pricesItems.addEventListener('click', function (e) {
    //block close opened accordion when press button 'Order'
    if (e.target.closest('.accordion__btn')) return;

    //close all accordions except current
    [...$btnsPrices].forEach(btn => {
        if (btn !== e.target) {
            btn.classList.remove(activePrice);
            btn.closest('.prices__item').classList.remove('price_open');
        }
    });
//logic accordion
    if (e.target.closest('.prices__btn')) {
        e.target.closest('.prices__item').classList.toggle('price_open');
        //change bg button
        e.target.closest('.prices__btn').classList.toggle(activePrice);
    }

});
/////////////////////////////////////////////////////////////


// console.log(
//     `
// Вёрстка соответствует макету. Ширина экрана 768px +24
// блок <header> +2
// секция welcome +3
// секция about +4
// секция service +4
// секция prices +4
// секция contacts +4
// блок <footer> + 3
// Вёрстка соответствует макету. Ширина экрана 380px +24
// блок <header> +2
// секция welcome +3
// секция about +4
// секция service +4
// секция prices +4
// секция contacts +4
// блок <footer> + 3
// Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15
// нет полосы прокрутки при ширине страницы от 1440рх до 380px +7
// нет полосы прокрутки при ширине страницы от 380px до 320рх +8
// На ширине экрана 380рх и меньше реализовано адаптивное меню +22 (Допускается появление адаптивного меня на ширине более 380, но не допускается на ширине более 770px)
// при ширине страницы 380рх панель навигации скрывается, появляется бургер-иконка +2
// при нажатии на бургер-иконку плавно появляется адаптивное меню +4
// адаптивное меню соответствует цветовой схеме макета +4
// при нажатии на крестик адаптивное меню плавно скрывается уезжая за экран +4
// ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям +4
// при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, также скрытие меню происходит если сделать клик вне данного окна +4
// Баллы: 75
// `)