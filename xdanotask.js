function xo(str) {
  var a = '';
  var b = '';
  for ( x = str.length-1; x >= 0; x--){
    if (str[x] === 'x'){
      a += 'x'
    }else if(str[x] === 'o'){
      b += 'o'
    }
  }
  if( a.length === b.length){
   return true
  }else{
   return false
  }
}

// TEST CASES
console.log(xo('xoxoxo'));
console.log(xo('oxooxo'));
console.log(xo('oxo'));
console.log(xo('xxxooo'));
console.log(xo('xoxooxxo'));