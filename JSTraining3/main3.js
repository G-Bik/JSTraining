// contoh Array untuk pengenalan array di JavaScript
// Dalam sebuah  variabel javascript, kita bisa menyimpan berbagai tipe data dalam sebuah array. contohnya seperti dibawah yang mana terdapat string, function, dan object dalam sebuah array.
const contohArray = [
  "hahaha",
  function () {
    return false;
  },
  { token: "123141" },
];

// Contoh sederhana membuat array dengan cara 1
const arraySaya = ["😉", "🙌", "💋"];
// console.log(arraySaya);

// contoh sederhana membuat array dengan cara 2
const arraySaya2 = [];
arraySaya2[0] = "🍏";
arraySaya2[1] = "🍎";
arraySaya2[2] = "🍊";
arraySaya2[3] = "🥑";
// console.log(arraySaya2);
// Menampilkan panjang dari array dengan properti .length
// console.log(`panjang data array ${arraySaya2.length}`);

// Contoh sederhana membuat array dengan cara 3
const arraySaya3 = new Array("🚗", "✈️");
// console.log(arraySaya3);

// Contoh mengcombine array cara 2 dan cara 3
const combineArray = new Array();
combineArray[0] = "🤣";
combineArray[3] = "🍌";

// console.log(
//   `Contoh Combine cara 2 dan cara 3 dan juga menunjukkan contoh array yang memiliki empty value ${combineArray}`
// );
// Contoh cara pemanggilan data dari array
// console.log(combineArray[0]);

// Mengidentifikasi array beserta indexnya

// Contoh Array yang akan diidentifikasi
const arrayIdentifikasi = [
  "🍉",
  "🍇",
  "🍓",
  "🍈",
  "🍒",
  "🍑",
  "🥭",
  "🍍",
  "🥥",
];

// Cara mengidentifikasi apakah sebuah array memiliki data tertentu yang kita inginkan dengan menggunakan method .includes(). Nantinya akan mengembalikan nilai boolean true atau false
const strawberry = arrayIdentifikasi.includes("🍓");
// console.log(strawberry); // Output: boolean

// Untuk mengetahui posisi dari data tertentu dalam sebuah array, kita bisa menggunakan method .indexOf(). Nantinya akan mengembalikan nilai berupa index dari data yang kita cari. Jika tidak ditemukan, maka akan mengembalikan nilai -1
const posisiStrawberry = arrayIdentifikasi.indexOf("🍓");
// Menggunakan kondisi untuk mengecek apakah data ditemukan diposisi yang mana atau tidak
// menggunakan if steatement hanya dengan parameter tanpa operator logika akan langsung dibantingkan dengan nilai true seperti dibawah ini.
// if strawberry === true sama saja dengan if (strawberry)
if (strawberry) {
  //   console.log(`Data 🍓 ditemukan dalam array di posisi ${posisiStrawberry}`);
} else {
  //   console.log("Data 🍓 tidak ditemukan dalam array.");
}

// Untuk mengetahui data sebelum dan sesudah dari data yang kita cari, kita bisa menggunakan index yang sudah didapatkan sebelumnya
const indexBefore = posisiStrawberry - 1;
const indexAfter = posisiStrawberry + 1;
const before = arrayIdentifikasi[indexBefore];
const after = arrayIdentifikasi[indexAfter];
// console.log(`Sebelum 🍓 ada ${before} dan setelahnya ada ${after}`);

// Cara mengetahui value pertama dan terakhir dari sebuah array dapat dilakukan dengan metode shift() dan pop(). Hal ini berguna untuk mengambil data dari sebuah array yang memiliki banyak value dan multiple jenis data (bukan hanya string saja). Ini akan sangat memudahkan kita untuk mempelajari dan mengidentifikasi array yang lebih kompleks.
const firstIndex = arrayIdentifikasi.shift(); // Mengambil data pertama dan menghapusnya dari array
const lastIndex = arrayIdentifikasi.pop(); // Mengambil data terakhir dan menghapusnya dari array
// console.log(
//   `Data pertama adalah ${firstIndex} dan data terakhir adalah ${lastIndex}`
// );

// Cara dalam mendeklarasikan objek kedalam array pada Javascript
const arrayNew = [];
arrayNew["semangka"] = "🍉";
arrayNew["Anggur"] = "🍇";
arrayNew["ApelIjo"] = "🍏";

// console.log(arrayNew);

// Melakukan duplikasi Array dalam pengelolaan Array
const arrayData = ["🍉", "🍇", "🍓", "🍈", "🍒", "🍑", "🥭"];
