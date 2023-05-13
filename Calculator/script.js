
//-------One Button Function---------------
var One = document.querySelector('#one');
One.addEventListener('click',oNE);
function oNE(){
    document.forms.display.value += 1;
}
//-------Two Button Function---------------
var Two = document.querySelector('#two');
Two.addEventListener('click',tWo);
function tWo(){
    document.forms.display.value += 2;
}
//-------Three Button Function---------------
var Three = document.querySelector('#three');
Three.addEventListener('click',tHREE);
function tHREE(){
    document.forms.display.value += 3;
}
//-------Four Button Function---------------
var Four = document.querySelector('#four');
Four.addEventListener('click',fOUR);
function fOUR(){
    document.forms.display.value += 4;
}
//-------Five Button Function---------------
var Five = document.querySelector('#five');
Five.addEventListener('click',fiVE);
function fiVE(){
    document.forms.display.value += 5;
}
//-------Six Button Function---------------
var Six = document.querySelector('#six');
Six.addEventListener('click',sIx);
function sIx(){
    document.forms.display.value += 6;
}
//-------seven Button Function---------------
var seven = document.querySelector('#seven');
seven.addEventListener('click',sEven);
function sEven(){
    document.forms.display.value += 7;
}
//-------eight Button Function---------------
var eight = document.querySelector('#eight');
eight.addEventListener('click',eIght);
function eIght(){
    document.forms.display.value += 8;
}
//-------nine Button Function---------------
var nine = document.querySelector('#nine');
nine.addEventListener('click',niNe);
function niNe(){
    document.forms.display.value += 9;
}
//-------dot Button Function---------------
var dot = document.querySelector('#dot');
dot.addEventListener('click',dOt);
function dOt(){
    document.forms.display.value += "." ;
}
//-------zero Button Function---------------
var zero = document.querySelector('#zero');
zero.addEventListener('click',zEro);
function zEro(){
    document.forms.display.value += 0;
}
//-------plus Button Function---------------
var plus = document.querySelector('#plus');
plus.addEventListener('click',pLUs);
function pLUs(){
    document.forms.display.value += '+';
}
//-------minus Button Function---------------
var minus = document.querySelector('#minus');
minus.addEventListener('click',Minus);
function Minus(){
    document.forms.display.value +="-";
}
//-------Multiply Button Function---------------
var multiply = document.querySelector('#multiply');
multiply.addEventListener('click',Multiply);
function Multiply(){
    document.forms.display.value +="*";
}
//-------divison Button Function---------------
var divison = document.querySelector('#percent');
divison.addEventListener('click',Divison);
function Divison(){
    document.forms.display.value +="%";
}
//-------Claer Button Function---------------
var Claer = document.querySelector('#clear');
Claer.addEventListener('click',CLEAR);
function CLEAR(){
    document.forms.display.value ="";
}

//-----------EQUAL BUTTON FUCNTION---------

var equal = document.querySelector('#equl');
equal.addEventListener('click',EQUAL);
function EQUAL(){
    if(display.value==""){
        alert("Please enter any numbers");
    }

    else
    {
        document.forms.display.value =
        eval(document.forms.display.value);
    }
}