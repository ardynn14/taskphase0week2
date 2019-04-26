var day =24;
var month = 12;
var year = 2201;

if       (month > 8 && day > 30 && month % 2 === 1){
    console.log ('Tanggal tidak valid,mohon cek kembali!')
}else if (month < 8 && day > 30 && month % 2 === 0){
    console.log ('Tanggal tidak valid,mohon cek kembali!')
}else if (month === 2 && day > 29 && year %4 === 0 ){
    console.log ('Tanggal tidak valid,mohon cek kembali!')
}else if (month === 2 && day > 28 && year %4 !== 0 ){
    console.log ('Tanggal tidak valid,mohon cek kembali!')
}else if(((day >= 1 && day <= 31) && (month >= 1 && month <= 12)) && (year >= 1900 && year <= 2200)){
   switch (month) {
    case 1: month= 'Januayi'; 
    break;
    case 2: month= 'February'; 
    break;
    case 3: month= 'March'; 
    break;
    case 4: month= 'April'; 
    break;
    case 5: month= 'May'; 
    break;
    case 6: month= 'Juny'; 
    break;
    case 7: month= 'July'; 
    break;
    case 8: month= 'August'; 
    break;
    case 9: month= 'September'; 
    break;
    case 10: month= 'October'; 
    break;
    case 11: month= 'November'; 
    break;
    case 12: month= 'Deccember'; 
    break;}
    console.log ( day + ' ' + month + ' ' + year )
}else {
  console.log ('Tanggal tidak valid,mohon cek kembali!')
}