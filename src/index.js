import {Model1, showModel1,NewClass} from './js/Module1';
showModel1();
//functions
const getElement = selector => document.querySelector(selector);
const getClosestEl = (selector, event) => event.target.closest(selector);

//constants

//for hamburger
const $navigation = document.querySelector('.navigation');
const $hamburger = document.querySelector('.hamburger');
const lock = '_lock';

//for section service
const btnActive = 'btn_active';
const blur = 'blur';
let count = 0;
const $btnService = document.querySelector('.service__btns');
const $serviceItems = document.querySelectorAll('.service__item');

//for section prices
const activePrice = 'prices__btn_active';
const accordionBtn = '.accordion__btn';
const pricesBtn = '.prices__btn';
const priceOpen = 'price_open';
const $pricesItems = document.querySelector('.prices__items');
const $btnsPrices = $pricesItems.querySelectorAll('.prices__btn');
$pricesItems.classList.add('home','leave','life');

//for section contact us
const $contactUs = document.querySelector('.contact-us__btn');
const active = '_active';
const btnContact = '.btn-contact-us';
const open = '_open';
const bgButtonCity = ' #C1E698';
const listContact = '.contact-us__list';
const $namesCities = document.querySelectorAll('.drop-block');


///////////////////////////////////////////////////////////////////////////////

//hamburger animation

$hamburger.addEventListener('click', function () {
    this.classList.toggle(active);
    $navigation.classList.toggle(active);
    document.body.classList.toggle(lock);
});
$navigation.addEventListener('click', function (e) {
    document.body.classList.toggle(lock);
    this.classList.toggle(active);
    $hamburger.classList.toggle(active);
});

///////////////////////////////////////////////////////////////

//section service
//button connections for section service and implementation of blur for images

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

// section prices
$pricesItems.addEventListener('click', function (e) {
    //block close opened accordion when press button 'Order'
    if (getClosestEl(accordionBtn, e)) return;

    //close all accordions except current
    [...$btnsPrices].forEach(btn => {
        if (btn !== e.target) {
            btn.classList.remove(activePrice);
            btn.closest('.prices__item').classList.remove(priceOpen);
        }
    });
//logic accordion
    if (getClosestEl(pricesBtn, e)) {
        getClosestEl('.prices__item', e).classList.toggle(priceOpen);
        //change bg button
        getClosestEl(pricesBtn, e).classList.toggle(activePrice);
    }

});
/////////////////////////////////////////////////////////////

//section contact us

$contactUs.addEventListener('click', function (e) {
    //close all drop-blocks
    [...$namesCities].forEach(city => city.classList.remove(open));

    if (getClosestEl(btnContact, e)) {
        //change bg button
        getClosestEl(btnContact, e).classList.toggle(active);
        //open cities list
        getElement(listContact).classList.toggle(active);
    }
    if (getClosestEl(listContact, e)) {
        let nameCity = e.target.textContent.replace(/,\sNY/g, '').toLowerCase();
        if (e.target.textContent.toLowerCase().startsWith('new')) nameCity = 'new-york-city';

        getElement(btnContact).style.backgroundColor = bgButtonCity;
        //change name city button
        getElement('.btn-contact-us__title').textContent = e.target.textContent;
        getElement(btnContact).classList.toggle(active);
        //close cities list
        getElement(listContact).classList.toggle(active);

        //open drop-block
        [...$namesCities].forEach(city => {
            if (city.classList.contains(nameCity)) city.classList.add(open);
        })
    }
});

console.log(
    `
При нажатии на кнопки:Gardens,Lawn,Planting происходит смена фокуса на услугах в разделе service +50
При выборе одной услуги (нажатии одной кнопки), остальные карточки услуг принимают эффект blur, выбранная услуга остается неизменной + 20
Пользователь может нажать одновременно две кнопки услуги, тогда эта кнопка тоже принимает стиль активной и карточки с именем услуги выходят из эффекта blur. При этом пользователь не может нажать одновременно все три кнопки услуг. При повторном нажатии на активную кнопку она деактивируется (становится неактивной) а привязанные к ней позиции возвращаются в исходное состояние (входит в состяние blur если есть еще активная кнопка или же перестають быть в блюре если это была единственная нажатая кнопка). +20
Анимации плавного перемещения кнопок в активное состояние и карточек услуг в эффект blur +10
Accordion в секции prices реализация 3-х выпадающих списков об услугах и ценах + 50
При нажатии на dropdown кнопку появляется описание тарифов цен в соответствии с макетом. Внутри реализована кнопка order, которая ведет на секцию contacts, при нажатии на нее Accordion все еще остается открытым. +25
Пользователь может самостоятельно закрыть содержимое нажав на кнопку dropup, но не может одновременно открыть все тарифы услуг, при открытии нового тарифа предыдущее автоматически закрывается. +25
В разделе contacts реализован select с выбором городов +25
В зависимости от выбора пользователя появляется блок с адресом и телефоном офиса в определенном городе +15
При нажатии на кнопку Call us реализован вызов по номеру, который соответствует выбранному городу +10
Итого: 125 баллов.
`);
console.log('hello,Rolling Scopes');
const bob=new NewClass('bob',45);
bob.getAge();