/** Terdapat 2 Jenis cara pembuatan Fungsi, yakni dengan null parameter(statis) dan dengan parameter(dinamis) / diisi beberapa argument 

Perbedaan 2 jenis fungsi ini adalah: 
-Fungsi statis kita hanya bisa memanggil fungsi teresbut diluar namun tidak bisa mengisikan nilai apapun kedalam fungsi karena tidak memiliki parameter / argument yang menyimpan nilai dan membalikkan nilai di fungsi. Mudahnya adalah fungsi statis memiliki syntax yang bertugas tetap tanpa adanya input data dari luar fungsi

-Fungsi dinamis adalah kebalikan dari fungsi statis yang mana kita bisa memberikan input nilai diluar fungsi ke dalam fungsi secara dinamis sesuai jumlah parameter dan argument yang kita deklarasikan di fungsi. Mudahnya adalah fungsi dinamis juga memiliki syntax yang bertugas tetap namun dapat menerima input data dari luar fungsi dan pengelolaan data sebuah fitur bisa dilakukan sedinamis mungkin
*/

// Function Statis atau null parameter, yaitu function yang cara pengembalian nilainya dilakukan pada return karena tidak ada argument dalam parameter function yang menyimpan nilai dari function tersebut.
function nama() {
  return "Gustut Biksa";
}
// Pemanggilan function statis dengan parameter null dilakukan dengan nama funtion dan kurung kosong () saja, karena tidak bisa dilakukan input data apapun kedalam fungsi.
console.log(`Contoh Pemanggilan Fungsi statis: ${nama()}`);
// Contoh Function Statis dalam bentuk arrow function
const arrowNama = () => "Gusut Biksa";
console.log(`Contoh Pemanggilan Fungsi statis Arrow function: ${arrowNama()}`);

// Function Dinamis atau dengan parameter, yang mana return pada fungsi dinamis kosong dan syntaxnya melakukan pemanggilan ke parameter atau argument fungsi yang nantinya argument - argument ini akan diberikan nilai ketika fungsi dipanggil dari luar fungsi.
function namaLengkapAlamat(lengkap, alamat) {
  console.log(`Contoh Pemanggilan fungsi dinamis dibawah`);
  console.log(`Nama Lengkap anda : ${lengkap}`);
  console.log(`Alamat anda adalah : ${alamat}`);
  return;
}
// Pemanggilan fungsi dinamis yang mana parameternya langsung diberikan nilai, dan nantinya nilai ini akan langsung diproses oleh syntax yang berada dalam fungsi.
namaLengkapAlamat("Gustut Biksa", "Peguyangan");
// Contoh Function Statis dalam bentuk arrow function
const lengkapIdentitas = (namaLengkap, alamatLengkap) =>
  `Contoh Pemanggilan fungsi dinamis dibawah: ${namaLengkap} ${alamatLengkap}`;

let a = lengkapIdentitas("Gustut Biksa", "Peguyangan");
console.log(a);

// Contoh Fungsi dinamis namun menggunakan kedinamisan pada jumlah argumentnya yang mana menggunakan object lawas berbentuk araay dalam function bernama "arguments", yang mana jumlah argument bisa kita deklarasikan dalam sytanx fungsi tanpa kita deklarasikan pada parameter fungsi itu sendiri.
function bioSaya() {
  arguments[0] = console.log(arguments[0]); // contoh jika argument[0] merupakan module yang ingin memiliki statementnya sendiri
  console.log(arguments[1]); // contoh argument[1] yang cuma berfungsi sebagai pengembalian nilai variabel pada fungsi
}
let identitas = ["gustut", "abiansemal"];

bioSaya(identitas[0], identitas[1]);

// Kita juga bisa akses semua arguments tanpa mendekalrasikannya, caranya adalah kita melakukan for pada object argumetns tersebut seperti dibawah ini :
// contoh dibawah ini sudah contoh stadar, jadi tinggal sesuaikan saja sesuai keperluan
function bioSayaLoop() {
  for (let i = 0; i < arguments.length; i++) {
    b = `Ini data Loop : s${arguments[i]}`;
    console.log(b);
  }
}

bioSayaLoop("Gustut Biksa", "suka koding", 27);

// Contoh Penggunaan fungsi dengan menggunakan Rest Parameter : ...args (args bebas, boleh ...uwau ...lalo ...nyiahahaha, yang penting titik 3 nya : ...). tapi hal yang penting adalah, rest parameter hanya bisa dideklarasikan pada parameter terakhir saja
// function restPam(modul1, modul2, ...params) {
//   console.log("Modul 1:", modul1);
//   console.log("Modul 2:", modul2);
//   console.log("Sisa data (rest):", params);
//   console.log("Data pertama dari rest:", params[0]);
// }

// restPam("HTML", "CSS", "JavaScript", "React", "Tailwind", "Node.js");

// Contoh penggunaan fungsi dengan Rest Parameter dengan looping pada Rest Parameternya :

function restPam(modul1, modul2, ...params) {
  // Data ke 0 dan ke 2 ("HTML", "CSS") ditampilkan pada parameter pertama dan kedua
  console.log(`Modul wajib: ${modul1}, ${modul2}`);

  // Contoh Loop pada Rest Parameter
  console.log("Modul tambahan:");
  // looping dengan forEach pada rest parameter yang dimulai pada array ketiga dst ("JavaScript", "React", "Tailwind", "Node.js")
  params.forEach((modul, index) => {
    console.log(`index ke ${index} dari data ketiga : ${modul}`);
  });
}

restPam("HTML", "CSS", "JavaScript", "React", "Tailwind", "Node.js");

/** Penjelasan dasar perulangan for each, yang mana forEach memiliki 3 parameter tetap yakni :

Value: nilai dari data saat ini dalam array
Index: indeks dari data saat ini
Array: array dari data asli tempat kita sedang melakukan perulangan
*/
let datasss = [1, 2, 3, 4];
datasss.forEach((value, index, array) => {
  console.log(value);
  console.log(index);
  console.log(array);
});
