const date = new Date(); 

const date1 = new Date ("2023-03-25");
const date2 = new Date ("2023-03-26");

const selisih =(date1 - date2) / (24 * 3600 * 1000);

console.log(`ini selsih ya jangan kebanyakan tanya ya  ${selisih}`);
 


hari = 400;

const tahunBoy = Math.floor(hari / 365);  //1
const bulanCuy = Math.floor((hari % hariPadaTahun) / 30);
const iniCoba = hari % hariPadaTahun;
const sisaHariNggakSih = iniCoba % hariPadaBulan;
const iniBaruSisaHariCuy = sisaHariNggakSih / 1

console.log(`${tahunBoy} ini tahun, ${bulanCuy} ini bulan, dan ${sisaHariNggakSih} ini hari cuy ${iniBaruSisaHariCuy}`);



const Pi = Math.PI ;
// let pi = 3,14;
let jariJari = 6;

const diamter = 2 * jariJari;
const luas = Pi * (diamter * diamter);
const keliling = 2 * Pi * jariJari; 


console.log(diamter);
console.log(luas);
console.log(keliling);



// Kalau switch case itu pake output ya ingett.


const getMonth = new Date("2023-06-22").getMonth();
console.log(getMonth);


if (getMonth == 5) {
    console.log(`ini bulannya ya jangan banyak tanya kenapa atas 6 bawah 5 karna mulainya dari 0 cuy jadi ini outputnya : ${getMonth}`);
}

switch (getMonth) {
    case 0:
        output = `ini januari cuy ${getMonth}`; // ini yang bener ya console log semua itu salah ya jangan lagi pake console log ya
        break;
//     case 1:
//         console.log(`ini february cuy ${getMonth}`);
//         break;
//     case 2:
//         console.log(`ini msret Kontol cuy ${getMonth}`);
//         break;
//     case 3:
//         console.log(`ini januari cuy ${getMonth}`);
//         break;
//     case 4:
//         console.log(`ini januari cuy ${getMonth}`);
//         break;
//     case 5:
//         console.log(`ini januari cuy ${getMonth}`);
//         break;
//     case 6:
//         console.log(`ini januari cuy ${getMonth}`);
//         break;
//     case 7:
//         console.log(`ini januari cuy ${getMonth}`);
//         break;
//     case 8:
//         console.log(`ini januari cuy ${getMonth}`);
//         break;
//     case 9:
//         console.log(`ini januari cuy ${getMonth}`);
//         break;
//     case 10:
//         console.log(`ini januari cuy ${getMonth}`);
//         break;
//     case 11:
//         console.log(`ini januari cuy ${getMonth}`);
//         break;
    
//     default :
//     console.log("nggak ada kontol");
//         break;
}

console.log(output);



let lebar = 1;
let length =2;

 let luas = lebar * length;
 let keliling =  2* (lebar + length);

console.log(luas);
console.log(keliling);


let sideA = 45 ;
let sideB = 45 ;
let totalSide = 180 ;

const sideC = totalSide - sideA - sideB;

console.log(sideC);

