

var name = prompt("What is you Name");
name = capitalize(name);

function capitalize(n){
    return n.charAt(0).toUpperCase()
    + n.slice(1);
}
//can use n.substring(1, n.length) instead of slice
console.log(name);
alert(name);
