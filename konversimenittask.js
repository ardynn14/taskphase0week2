function konversiMenit(detik) {
  if( detik %60 > 9){
      var a = 0;
      var b = 0;
      for ( x = detik; x >= 60;x-=60){
        a = a+=1;}
      if (detik >= 60){
      b = detik - ( a * 60)
    }else{
      b = detik
    }return a + ':' + b
}else{
    var a = 0;
    var b = 0;
    for ( x = detik; x >= 60;x-=60){
      a = a+=1;}
    if (detik >= 60){
    b = '0' + (detik - ( a * 60))
  }else{
    b = detik
    }return a + ':' + b
  }
}

console.log(konversiMenit(63));
console.log(konversiMenit(124));
console.log(konversiMenit(53));
console.log(konversiMenit(88));
console.log(konversiMenit(120));