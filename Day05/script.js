/*
var fruitColors = [];
var cherry = ['cherry', 'red'];
var banana = ['banana', 'yellow'];
var kiwi = ['kiwi', 'green'];
var fruits = ['apple', 'banana', 'cherry', 'strawberry', 'pineapple'];
  fruits.push('kiwi');

  fruitColors.push(cherry);
  fruitColors.push(banana);
  fruitColors.push(kiwi);

  var lastFruit = fruitColors.pop();  // remove el from end of array
  var firstFruit = fruitColors.shift();  //remove el from beginning of array
  //console.log(fruitColors);
  //console.log(lastFruit);
  //console.log(firstFruit);

//var selectedFruit = fruits.slice(2,4); creates with selected indexs starting with 1st # to before 2nd #

  //console.log(selectedFruit)

  console.log(fruits);
  fruits.splice(1, 2, 'grape');
  console.log(fruits)
  */

/*
  var fruits = [];

  function getFruit(){
    var fruit = prompt("add a new fruit");
    fruits.push(fruit);
    moreFruit();
  }

  function moreFruit(){
    var addMore = confirm('add more?');
    if( addMore ){
      getFruit();
    }else{
      console.log(fruits);
      removeFruit()
    }
  }

  function removeFruit(){
    var remove = prompt('enter an index number');
    fruits.splice(remove,1);
    console.log(fruits);
  }

  function outputFruits(array){
*/
    /*for(var i = 0, len = array.length; i < len; i++){
      console.log(array[i]);
    }*/


  /*var i = 0;
  whle(i < array.length){
    console.log(array[i]);
    i++;
  }*/


  /*  var i = 0;
    do {
        console.log(array[i]);
        i++;
    } while(i < array.length)
  }*/


  //loop through numbers 1-10 if number is 5 or 7 skip ' continue '
// output numbers

//  var i = 0;

  for(var i = 1;  i <=10; i++){
    if(i === 5 || i === 7){
        continue;
      }
      console.log(i);
    }

/*
for(var i = 1;  i <=10; i++){
  if(i ===6){
      break;
    }
    console.log(i);
  }
*/


/*    while( i<10){  if(i === 5 || i === 7){
          i++
          continue;
        }
        console.log(i);
        i++
      }
*/


  //getFruit();
