/*
function hello(){
    var msg = "Hello";
    world(msg);
}

function world(message){
    alert(message+" World!");
}

hello()
*/

function getUserName(){
  var user = prompt("What is your name");
  checkUserName(user);
}


function craftMsg(p){
  var msg = 'Welcome ';
  //msg = msg.trim();
  msg += formatUserName(low);
  msg += ' to my site';
  alertUser(msg);
}

function alertUser(m){
  alert(m);
}

function formatUserName(u){
    var low = u.toLowerCase();
    return low.charAt(0).toUpperCase()+ low.slice(1);
}



function checkUserName(use){
  var preparsed = use;
  use = parseInt(use);

  if( !isNaN(use) || preparsed === null || preparsed === '' || preparsed.trim() === '' ){
    alert('that is not a proper user name');
  return;
}
  preparsed = preparsed.trim();
  craftMsg(preparsed);
}

//if(preparsed === ''){
//  alert('that is not a proper user name');
//  return;

//}




getUserName();






/*
name = capitalize(name);

function capitalize(n){
    return n.charAt(0).toUpperCase()
    + n.slice(1);
}
//can use n.substring(1, n.length) instead of slice
console.log(name);
alert(name);*/
