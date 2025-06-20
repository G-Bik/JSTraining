/**
 BELAJAR PERULANGAN di JAVASCRIPT
 for, for of, for in, foreach
 while & do while
 */

data = [
  "saya",
  4,
  5,
  "mungkin saja",
  function arrayFunction(...parrams) {
    parrams[0] = console.log("kamu melakukan print fungsi dalam array");
    parrams[1] = console.log(
      "Oke sekarang kita melakukan display parameter kedua"
    );
    return parrams[2] + parrams[3];
  },
  "yuk semangat kerja",
  18,
  2025,
];

for (let index = 0; index < data.length; index++) {
  if (typeof data[index] === "function") {
    // Menangkap jenis data array berupa function dengan operator typeof
    console.log(data[4](null, null, 45, 46));
  }

  console.log(typeof data[index]);
}
