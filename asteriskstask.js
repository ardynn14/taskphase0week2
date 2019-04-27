// 1

for ( x = 1; x <= 5; x++){
    console.log (' * ')
}
break
break
// 2

function kotak(a){
  var z ='';
  for ( x = 1; x <= a; x++){
     for ( y = 1; y <= a; y++){
      z+=' * '
    }z+='\n'
  }return z
}

console.log (kotak(5))

// 3

function segitiga(a){
  var z ='';
  for ( x = 1; x <= a; x++){
     for ( y = 1; y <= x; y++){
      z+=' * '
    }z+='\n'
  }return z
}

console.log (segitiga(5))
