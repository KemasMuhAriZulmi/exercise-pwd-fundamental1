let i = 0;
let result = "";

for (i = 0; i< 10; i++){
}
if (i % 2 == 0){
    // console.log(`mo kamu genap ${i}`);
    result = "no kamu genap"
}
else  {
    // console.log( "ganjil ");
    result = "no kamu ganjil"
}
 console.log(result);



 const celsius = 12;

const fahrenheit = (celsius * 9/5) + 32;

console.log(`${celsius} ini celcius dan ini adalah ${fahrenheit}`);




const angka = 5;
let factorial = 1;

for (let i=1; i<= angka; i++){
    factorial *=i;
}

console.log(`factorial ${angka} adalah ini yaa ${factorial}`);



const fibo = 2;
let angka1 = 0;
let angka2 = 1;

for(let i = 0; i < fibo; i++){
    const perhitungan = angka1 + angka2;
    console.log(perhitungan);
    angka1 = angka2;
    angka2 = perhitungan;
}





let prime = 1;
let hasil = "";

for(let i=2; i<=prime; i++){
    if(i===prime){
        hasil = "prima cuy";
    }
    else if (prime % 1 === 0){
        hasil= "ganjil cuy";
    } else{
        hasil = "prima boy";
    }
    }
    console.log(hasil);



let angka = 4; // panjangdata yang bakal di hasilin 4 suku 1 2 3 4
let counter = 0; // sudah pasti bernilai 0

for (let i = 1; i <= angka; i++)// 1 2 3 4 
 {
  if (angka % i == 0) counter++;
  console.log(counter);
}

if (counter == 1){
  console.log("a");
}
else if (counter == 2){
  console.log("ab");
}
else{
  console.log("c");
}





const n = 10;
let sum = 0;

for (let i =1; i<=n; i++){
    sum += i;
}

console.log(`ini angkat dari 1 ke ${n} : ${sum}`);
