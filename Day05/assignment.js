/*
create js object for input1, input2, btn, div
After inputting values for input1 & input2
user clicks go
input1 value replaced with text "Helloa JavaScript!"
alert new value of input1
replace div text with value of input2



*/
var btn = document.getElementById('btn');
var inp1 = document.getElementById('input1');
var inp2 = document.getElementById('input2');
var output = document.getElementById('output');

function btnClick(){
    inp1.value = 'Hello JavaScript';
    output.textContent = inp2.value;
  };

btn.onclick = btnClick;
//txtBx.innerHTML=inpt2;
