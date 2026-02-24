const display = document.querySelector('input');
const container = document.querySelector('.calc');

container.addEventListener('click', event => {

    if (!event.target.innerText) return;

    if (event.target.innerText === '=') {
        display.value = eval(display.value);

    } else if (event.target.innerText === 'AC') {
        display.value = '';

    } else if (event.target.innerText === '√') {
        display.value = Math.sqrt(display.value);

    } else if (event.target.innerText === 'C') {
        display.value = String(display.value).substring(
            0,
            String(display.value).length - 1
        );

    } else {
        display.value = display.value + event.target.innerText;
    }
});