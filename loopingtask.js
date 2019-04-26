// 1)

var x = 2;

console.log ( 'LOOPING PERTAMA' )
while ( x <= 20 ){
  console.log ( x + ' - I love coding' )
  x+=2;
}

console.log ( 'LOOPING KEDUA' )
while ( x >+ 0 ){
  console.log ( x + ' - I will become fullstack developer' )
  x-=2
}

// 2

console.log ('LOOPING PERTAMA')
for (x = 1; x <= 20; x++){
  console.log (x + ' - I love coding' )
}
console.log ('LOOPING KEDUA')
for (x = 20; x >= 0; x--){
  console.log (x + ' - I will become fullstack developer')
}

// 3
// 3.1 & 3.2
for ( x = 1; x <= 100; x++ ) {
    if (x %2 === 1){
      console.log ('GANJIL')
    }else {
      console.log ('GENAP')
    }
  }
// 3.3

for ( x = 1;x <= 100; x+=2){
    if (x %3 === 0){
        console.log (x + ' kelipatan 3')
    }else{   
    }
}

for ( x = 1;x <= 100; x+=5){
    if (x %6 === 0){
        console.log (x + ' kelipatan 6')
    }else{   
    }
}

for ( x = 1;x <= 100; x+=9){
    if (x %10 === 0){
        console.log (x + ' kelipatan 10')
    }else{   
    }
}
