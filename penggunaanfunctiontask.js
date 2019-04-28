// 1
function shoutOut(a){
  return a
}
console.log(shoutOut('Halo function!'))

// 2
function calculateMultiply(num1,num2){
  var a = num1;
  var b = num2;
  var hasilPerkalian = a*b;

  return hasilPerkalian
}

console.log (calculateMultiply(5,6))

// 3
function processSentence(name,age,address,hobby){
  var a = name;
  var b = age;
  var c = address;
  var d = hobby; 
  var e = 'Nama saya ' + a + ', Umur saya ' + b + ' tahun, alamat saya di ' + c + ', dan saya punya hobbi yaitu ' + d + '!';
return e
}
console.log(processSentence('Agus',30,'Jln. Malioboro, Yogjakarta','gaming'));
