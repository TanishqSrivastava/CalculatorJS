const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');
const add = document.getElementById('plus');
const subtract = document.getElementById('minus');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const clear = document.getElementById('clear');
const equals = document.getElementById('equal');
const display = document.getElementById('screen');
const del = document.getElementById('delete');

//add event listeners for all buttons
one.addEventListener('click', function() {
    display.textContent += 1;
});
two.addEventListener('click', function() {
    display.textContent += 2;
});
three.addEventListener('click', function() {
    display.textContent += 3;
});
four.addEventListener('click', function() {
    display.textContent += 4;
});
five.addEventListener('click', function() {
    display.textContent += 5;
});
six.addEventListener('click', function() {
    display.textContent += 6;
});
seven.addEventListener('click', function() {
    display.textContent += 7;
});
eight.addEventListener('click', function() {
    display.textContent += 8;
});
nine.addEventListener('click', function() {
    display.textContent += 9;
});
zero.addEventListener('click', function() {
    display.textContent += 0;
});
add.addEventListener('click', function() {
    display.textContent += '+';
});
subtract.addEventListener('click', function() {
    display.textContent += '-';
});
multiply.addEventListener('click', function() {
    display.textContent += '*';
});
divide.addEventListener('click', function() {
    display.textContent += '/';
});
clear.addEventListener('click', function() {
    display.textContent = '';
});
equals.addEventListener('click', function() {
    display.textContent = eval(display.textContent);
});
del.addEventListener('click',function(){
    display.textContent = display.textContent.slice(0, -1);
});