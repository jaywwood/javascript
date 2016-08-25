/* String Object
var str = '    Matthew    ';
nwStr = str;
console.log(str.trim());
console.log(nwStr);*/

/*Math Object
var randNum = Math.floor(Math.random()*10)+1;
console.log(randNum); *?

/*Date Object
var toDay = new Date;
console.log(toDay.getFullYear());
/*
concatenate Multiple results to get
today's date*/

/*
var toDay = date;
var day = (toDay.getday.getDay());
var Month = (toDay.getday.getMonth());
var Year = (toDay.getday.getFullYear());
var tdasDt = month
console.log(toDay.LocaleString( locale, {month:"long" } )+' '+toDay.getDate()
*/

/*function
var firstName = "Jerry"
function newFunction(){
    var lastName = "Wood"
  alert(firstName);

}

  newFunction();
  alert(lastName)
*/
/*
Set strings outside of function
Set date from inside the function
alert your name and birthday
*/
/*
var UserFirst = promt('first Name');
var userLast = prompt('Last Name');
var UserBday = prompt('Birthday');
var userColor = prompt('choose a color');
var firtName = "Jerry";
var LastName = "Wood";
var locale = 'en-us';
function setbirthday(){
  var toDay = new Date;
  toDay.setFullYear(1965);
  //toDay.setDate(28);
  //toDay.setMonth(10):
  console.log(toDay.getFullYear());
  alert (toDay.getFullYear());
}
setBirthday */
/*console.log(toDay.getDate()
consoloe.log(firstName)
+ ' '
+ lastName
+ ' '
 + FullMon);
+' '
+'. And my color is '
+color);


//}
setBirthday(userColor)
*/
var userFirst = prompt('first Name');
var userLast = prompt('Last Name');
var userBday = prompt('Birthday');
var userColor = prompt('choose a color');
function setBday(uF, UL, uB, uC){
  var bDayArr = uB.split(' ');
//  console.log(bdayArr[0] + ' ' + bdayArr[1] + ', ' + bdayArr[2]);
  console.log(
    uF
    + ' '
    + uL
    + ' '
    + uB
    + ' '
    + '. Your color is '
    + uC
  );
}
console.log(setBday(userFirst, userLast, userBday, userColor));
setBday(userFirst, userLast, userBday, userColor);
