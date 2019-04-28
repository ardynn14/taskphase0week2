function balikKata(kata) {
  var  a = '';
  for ( x = kata.length-1; x >= 0;x--){
    a += kata[x]
  }return a
}

// TEST CASES
console.log(balikKata('Hello World and Coders'));
console.log(balikKata('John Doe'));
console.log(balikKata('I am a bookworm'));
console.log(balikKata('Coding is my hobby'));
console.log(balikKata('Super'));
