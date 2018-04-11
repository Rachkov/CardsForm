import { BUTTON_COLOR, MONEY_RUB, MONEY_BYN } from './config';

const but = document.getElementById('but');
but.style.backgroundColor = BUTTON_COLOR;

const mon = document.getElementsByClassName('money');
const monArr = Array.from(mon);
monArr.forEach((item) => item.innerHTML = MONEY_BYN);

const myCardNum = document.getElementById('myCardNum');
const personCardNum = document.getElementById('personCardNum');

function changeBrand(event, brand) {
    const checkBrand = document.getElementById(brand);
    let fNum = event.target.value[0];
    switch (fNum) {
    case '4':
        return checkBrand.setAttribute('src', './resources/visa.svg');
    case '5':
        return checkBrand.setAttribute('src', './resources/mastercard.svg');
    case '6':
        return checkBrand.setAttribute('src', './resources/maestro.svg');
    default:
        return checkBrand.removeAttribute('src');
    }
}

myCardNum.addEventListener('keyup', (event) => changeBrand(event, 'myBrand'));

personCardNum.addEventListener('keyup', (event) => changeBrand(event, 'personBrand'));