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

// Function Dinamis atau dengan parameter, yang mana return pada fungsi dinamis kosong dan syntaxnya melakukan pemanggilan ke parameter atau argument fungsi yang nantinya argument - argument ini akan diberikan nilai ketika fungsi dipanggil dari luar fungsi.
function namaLengkapAlamat(lengkap, alamat) {
  console.log(`Contoh Pemanggilan fungsi dinamis dibawah`);
  console.log(`Nama Lengkap anda : ${lengkap}`);
  console.log(`Alamat anda adalah : ${alamat}`);
  return;
}
// Pemanggilan fungsi dinamis yang mana parameternya langsung diberikan nilai, dan nantinya nilai ini akan langsung diproses oleh syntax yang berada dalam fungsi.
namaLengkapAlamat("Gustut Biksa", "Peguyangan");
