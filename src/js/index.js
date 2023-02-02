//constants

//for hamburger
const $navigation = document.querySelector('.navigation');
const $hamburger = document.querySelector('.hamburger');

//for section service
const active = 'btn_active';
const blur = 'blur';
const $btnService = document.querySelector('.service__btns');
const $serviceItems = document.querySelectorAll('.service__item');

/////////////////////////////////////////////////////////////

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

//button connections for section service
$btnService.addEventListener('click', function (e) {
    const btn = e.target;
    //get button name
    const nameBtn = btn.className.match(/btn__[a-z]+/g).join('');

    //add and remove class btn_active for buttons
    [...$btnService.children].forEach(item => {
        item.classList.remove(active);
        if (item.classList.contains(nameBtn)) {
            item.classList.add(active);
        }
    });
//add blur for images or remove
    [...$serviceItems].forEach(item => {

        const nameItem = item.getAttribute('class').replace(/[a-z]+__[a-z]+|blur/g, '').trim();

        item.classList.add(blur);
        if (nameItem === nameBtn.replace(/btn__/g, '').trim()) {
            item.classList.remove(blur);
        }
    })

})
//////////////////////////////////////////////////////////////
console.log(
    `
Вёрстка соответствует макету. Ширина экрана 768px +24
блок <header> +2
секция welcome +3
секция about +4
секция service +4
секция prices +4
секция contacts +4
блок <footer> + 3
Вёрстка соответствует макету. Ширина экрана 380px +24
блок <header> +2
секция welcome +3
секция about +4
секция service +4
секция prices +4
секция contacts +4
блок <footer> + 3
Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15
нет полосы прокрутки при ширине страницы от 1440рх до 380px +7
нет полосы прокрутки при ширине страницы от 380px до 320рх +8
На ширине экрана 380рх и меньше реализовано адаптивное меню +22 (Допускается появление адаптивного меня на ширине более 380, но не допускается на ширине более 770px)
при ширине страницы 380рх панель навигации скрывается, появляется бургер-иконка +2
при нажатии на бургер-иконку плавно появляется адаптивное меню +4
адаптивное меню соответствует цветовой схеме макета +4
при нажатии на крестик адаптивное меню плавно скрывается уезжая за экран +4
ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям +4
при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, также скрытие меню происходит если сделать клик вне данного окна +4
Баллы: 75
`)