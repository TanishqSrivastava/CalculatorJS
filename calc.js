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
var disp = false;
//add event listeners for all buttons
one.addEventListener('click', function() {
    if (disp == true){
        display.textContent = 1;
        disp = false;
    }else{
        display.textContent += 1;
    }
});
two.addEventListener('click', function() {
    if (disp == true){
        display.textContent = 2;
        disp = false;
    }else{
        display.textContent += 2;
    }
});
three.addEventListener('click', function() {
    if (disp== true){
        display.textContent = 3;
        disp = false;  
    }else{
        display.textContent += 3;
    
    }
});
four.addEventListener('click', function() {
    if (disp == true){
        display.textContent = 4;
        disp = false;
    }else{
        display.textContent += 4;
    }
});
five.addEventListener('click', function() {
    if(disp == true){
        display.textContent = 5;
        disp = false;
    }else{
        display.textContent += 5;
    }
});
six.addEventListener('click', function() {
    if (disp == true){
        display.textContent = 6;
        disp = false;
    }else{
        display.textContent += 6;
    }
});
seven.addEventListener('click', function() {
    if(disp == true){
        display.textContent = 7;
        disp = false;
    }else{
        display.textContent += 7;
    }
});
eight.addEventListener('click', function() {
    if(disp == true){
        display.textContent = 8;
        disp = false;
    }else{
        display.textContent += 8;
    }
});
nine.addEventListener('click', function() {
    if (disp == true){
        display.textContent = 9;
        disp = false;
    }else{
        display.textContent += 9;
    
    }
});
zero.addEventListener('click', function() {
    if (disp == true){
        display.textContent = 0;
        disp = false;
    }
    else{
        display.textContent += 0;
    }
});
add.addEventListener('click', function() {
    if(disp == true){
        display.textContent = '+';
        disp = false;
    }else{
        display.textContent += '+';
    }
});
subtract.addEventListener('click', function() {
    if (disp == true){
        display.textContent = '-';
        disp = false;
    }else{
        display.textContent += '-';
    }
});
multiply.addEventListener('click', function() {
    if (disp == true){
        display.textContent = '*';
        disp = false;
    }else{
        display.textContent += '*';
    }
});
divide.addEventListener('click', function() {
    if(disp == true){
        display.textContent = '/';
        disp = false;
    }else{
        display.textContent += '/';
        
    }
});
clear.addEventListener('click', function() {
    display.textContent = '';
});
equals.addEventListener('click', function() {
    try{
        display.textContent = eval(display.textContent);}
    catch(error){
            display.textContent = 'Error';
            disp = true;
        }
        disp = true;
});
del.addEventListener('click',function(){
    display.textContent = display.textContent.slice(0, -1);
});