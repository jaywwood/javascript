function getUserName(){
  var user = prompt("What is your name");
  checkUserName(user);
}

function checkUserName(use){
  var preparsed = use;
  if( !isNaN(use) || preparsed === null || preparsed === '' || preparsed.trim() === '' ){
    alert('that is not a proper user name');
  return;
}
  preparsed = preparsed.trim();
  formatUserName(preparsed);
}


function formatUserName(u){
    var nm = u.replace(/\b[a-z]/g,function(f){return f.toUpperCase();});
    craftMsg(nm);
}

function craftMsg(nm){
  var msg = 'Welcome ';
  msg += nm;
  msg += ' to my site';
  alertUser(msg);
}

function alertUser(m){
  alert(m);
}

getUserName();
