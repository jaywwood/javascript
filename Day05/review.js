function getUser(){
  var user = prompt('what is your username');
  console.log(user);
  splitWord(user);
}

function splitWord(string){
  string = string.split(' ');
  userArr = [];
  for(var i = 0;i<string.length; i++){
      userArr.push( formatUser( checkUser( string[i] ) ) );
    }
  outputUser(userArr);
}

function checkUser(user){
  var canParse = parseInt(user);
  if(isNaN(canParse) && user !== null && user.trim() ){
    return user.trim();
    }
}

function formatUser(string){
  return string.charAt(0).toUpperCase() +
  string.toLowerCase().substr(1, string.length);
}
getUser();

function outputUser(user){
  var msg = 'test';
    msg = 'Welcome ';
  for(var i = 0; i < user.length; i++){
     msg += user[i] + ' ';
  }

  msg += ' to my new site!';
  alert(msg);
}
