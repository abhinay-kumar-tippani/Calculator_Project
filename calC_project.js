const display = document.getElementById("display");

function appendNum(num) {
    display.value += num;
}

let one = document.getElementById('1');
one.onclick = () => { appendNum('1') }
let two = document.getElementById('2');
two.onclick = () => { appendNum('2') }
let three = document.getElementById('3');
three.onclick = () => { appendNum('3') }
let four = document.getElementById('4');
four.onclick = () => { appendNum('4') }
let five = document.getElementById('5');
five.onclick = () => { appendNum('5') }
let six = document.getElementById('6');
six.onclick = () => { appendNum('6') }
let seven = document.getElementById('7');
seven.onclick = () => { appendNum('7') }
let eight = document.getElementById('8');
eight.onclick = () => { appendNum('8') }
let nine = document.getElementById('9');
nine.onclick = () => { appendNum('9') }
let zero = document.getElementById('0');
zero.onclick = () => { appendNum('0') }
let dblzero = document.getElementById('00');
dblzero.onclick = () => { appendNum('00') }

let dot = document.getElementById('.');
dot.onclick = () => { appendNum('.') }

let plus = document.getElementById('+');
plus.onclick = () => { appendNum('+') }
let minus = document.getElementById('-');
minus.onclick = () => { appendNum('-') }
let mul = document.getElementById('X');
mul.onclick = () => { appendNum('*') }
let div = document.getElementById('/');
div.onclick = () => { appendNum('/') }

function calculate() {
    display.value = eval(display.value);
}

let equal = document.getElementById('eql');
equal.onclick = () => {
    calculate()
}

display.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        calculate();
    }
})

function del() {
    display.value = display.value.slice(0, -1);
}

let DE = document.getElementById('DE');
DE.onclick = () => {
    del();
}
let AC = document.getElementById('AC');
AC.onclick = () => {
    display.value = '';
}

