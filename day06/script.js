/*var input1 = document.getElementById('input1');
var inputs = document.getElementsByClassName('input');
var inputsTag = document.getElementsByTagName('input');
var btnEl = document.querySelector('button[type="button"]');
var btn = document.getElementById('btn');


function getInputs(){
  for(var i = 0; i < inputs.length; i++){
    console.log(inputs[i].value);
  }
}


//target btn
//create function for btn//console value of inputs
*/
var submitBtn = document.getElementById('submit');
var form = document.getElementsByTagName('form')[0];

submitBtn.onclick = getVals;


function getVals(event){
    event.preventDefault();
    //console.log(form.elements);
    for(var i=0; i < form.elements.length; i++){
      console.log(form.elements[i].value);
    }
}
