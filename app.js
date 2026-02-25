const display = document.querySelector('div');
const container = document.querySelector('section');

container.addEventListener('click', event => {
    if (event.target.innerText === '=') {
        display.innerText = eval(display.innerText)
    } else if (event.target.innerText === 'AC') {
        display.innerText = ''
    } else if (event.target.innerText === '√') {
        display.innerText = Math.sqrt(display.innerText)
    } else if (event.target.innerText === 'C') {
        (display.innerText = String(display.innerText).substring(0, String((display.innerText).length - 1)))
    } else{
        display.innerText = display.innerText + event.target.innerText
    }
})

const local = window.localStorage;
const light = document.querySelector('.light');
const dark = document.querySelector('.dark');

if (local.getItem('color')) {
    document.body.style.backgroundColor = local.getItem('color');
} else {
    local.setItem('color', 'black');
    document.body.style.backgroundColor = local.getItem('color');
}


dark.addEventListener('click', () => {
    local.setItem('color', 'black');
    document.body.style.backgroundColor = local.getItem('color')
})

light.addEventListener('click', () => {
    local.setItem('color', 'white');
    document.body.style.backgroundColor = local.getItem('color')
})