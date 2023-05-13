//---------------------NUMBERS------------------------------------
//-------one button function---
var one = document.querySelector('#one');
one.addEventListener('click', ONE);
function ONE(){
  document.forms.display.value += 1;   
}
//-------two button function---
var two = document.querySelector('#two');
two.addEventListener('click', TW0);
function TW0(){
  document.forms.display.value += 2;   
}
//-------three button function---
var three = document.querySelector('#three');
three.addEventListener('click', THREE);
function THREE(){
  document.forms.display.value += 3;   
}
//-------four button function---
var four = document.querySelector('#four');
four.addEventListener('click', FOUR);
function FOUR(){
  document.forms.display.value += 4;   
}
//-------five button function---
var five = document.querySelector('#five');
five.addEventListener('click', FIVE);
function FIVE(){
  document.forms.display.value += 5;   
}
//-------six button function---
var six = document.querySelector('#six');
six.addEventListener('click', SIX);
function SIX(){
  document.forms.display.value += 6;   
}
//-------seven button function---
var seven = document.querySelector('#seven');
seven.addEventListener('click', SEVEN);
function SEVEN(){
  document.forms.display.value += 7;   
}
//-------eight button function---
var eight = document.querySelector('#eight');
eight.addEventListener('click', EIGHt);
function EIGHt(){
  document.forms.display.value += 8;   
}
//-------nine button function---
var nine = document.querySelector('#nine');
nine.addEventListener('click', NINE);
function NINE(){
  document.forms.display.value += 9;   
}
//----------------SYMBOLS-----------------------------------------
//-------dot button function---
var dot = document.querySelector('#dot');
dot.addEventListener('click',DOT);
function DOT(){
  document.forms.display.value += ".";   
}
//-------zero button function---
var zero = document.querySelector('#zero');
zero.addEventListener('click',ZERO);
function ZERO(){
  document.forms.display.value +=0 ;   
}
//-------plus button function---
var plus = document.querySelector('#plus');
plus.addEventListener('click',PLUS);
function PLUS(){
  document.forms.display.value +="+";   
}
//-------All Clear button function---
var AC = document.querySelector('#clear');
AC.addEventListener('click',CLEAR);
function CLEAR(){
  document.forms.display.value += "";   
}


//-------divisonl button function---
var dot = document.querySelector('#dot');
dot.addEventListener('click',DOT);
function DOT(){
  document.forms.display.value += ".";   
}
//-------zero button function---
var zero = document.querySelector('#zero');
zero.addEventListener('click',ZERO);
function ZERO(){
  document.forms.display.value +=0 ;   
}
//-------plus button function---
var plus = document.querySelector('#plus');
plus.addEventListener('click',PLUS);
function PLUS(){
  document.forms.display.value +="+";   
}
//-------All Clear button function---
var AC = document.querySelector('#clear');
AC.addEventListener('click',CLEAR);
function CLEAR(){
  document.forms.display.value += "";   
}



//-------minus button function---
var minus = document.querySelector('#minus');
minus.addEventListener('click',MINUS);
function MINUS(){
  document.forms.display.value += "-";   
}
//-------multiply button function---
var multiply = document.querySelector('#multiply');
multiply.addEventListener('click',MULTIPLY);
function MULTIPLY(){
  document.forms.display.value += "*";   
}
//-------division button function---
var division = document.querySelector('#divison');
division.addEventListener('click',DIVISION);
function DIVISION(){
  document.forms.display.value += "-";   
}
//-------equal button function---
var equal = document.querySelector('#equl');
equal.addEventListener('click',EQUL);
function EQUL(){
  document.forms.display.value = eval(document.forms.display.value);   
}


