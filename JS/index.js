const slider = document.getElementById('slider');
const range = document.getElementById('range');

const password = document.getElementById('pass');
const btn = document.getElementById('btn');

const lowercase = document.getElementById('lowercase');
const uppercase = document.getElementById('uppercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');

const checkbox = document.querySelectorAll('.checkbox');
const level_text = document.querySelector('.type-text');
const level = document.querySelectorAll('.level')

const copy = document.getElementById('copy');


slider.addEventListener('input', ()=> {
    range.innerHTML = slider.value;


    // Level...
    if(slider.value >= 8) {
        level_text.innerHTML = 'STRONG';
        level[2].style.background = '#ffe23d';
        level[1].style.background = '#ffe23d';
        level[0].style.background = '#ffe23d';

    } 
    if( slider.value >=5 && slider.value <=8) {
        level_text.innerHTML = 'MEDIUM';
        level[2].style.background = '#7c7c7c';
        level[1].style.background = '#ffe23d';
    } 
    if( slider.value <= 4) {
        level_text.innerHTML = 'EASY';
        level[2].style.background = '#7c7c7c';
        level[1].style.background = '#7c7c7c';
    }
    
})


function generatePassword() {
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const number = '0123456789';
    const symbol = '!@#$%^&*_*'

    let allowChars = '';

    if(lowercase.checked) allowChars += lower; 
    if(uppercase.checked) allowChars += upper; 
    if(numbers.checked) allowChars += number; 
    if(symbols.checked) allowChars += symbol; 

    if(allowChars === '') {
        alert('select atleast one checkbox');
        return '';
    }

    let genPassword = '';
    const length = slider.value;

    for(let i = 0; i< length; i++) {
        const randomIndex = Math.floor(Math.random()* allowChars.length);
        genPassword += allowChars[randomIndex];
    }

    
    return genPassword;
}


btn.addEventListener('click', (e)=> {
    e.preventDefault();
    password.value = generatePassword();
})

copy.addEventListener('click', ()=>{
    if(password.value != '') {
        navigator.clipboard.writeText(password.value);
        alert('copied');
    } else {
        alert('Generate Password.')
    }
})
