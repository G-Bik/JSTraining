/**
 Asynchronus adalah sebuah mekanisme antrian yang mana sebuah syntax yang berbentuk fungsi pada Javascript dijadikan sebuah callback atau sebuah fungsi yang nantinya akan dianggil setelah waktu yang ditentukan.

 fungsi utama dari asynchronus ini adalah karena javascript berjalan secara synchronus terhadap semua fungsi atau berjalan berurutan, jika sebuah fungsi yang berada di urutan tengah atau bahkan awal mengalami bug atau eror karena eror code atau bahkan karena memakan bandwith user yang berat, maka fungsi setelahnya tidak akan bisa dijalankan.

 asynchronus ini dijadikan jalan keluar pada mekanisme eksekusi berurutan ini, yang mana ketika ada fungsi yang berat berada pada urutan dengah code js, maka fungsi tersebut bisa dialihkan ke WEB API dahulu untuk di antri yang nantinya akan dipanggil setelah fungsi2 utama atau yang lebih ringan dijalankan dahulu.

 asynchronus ini tidak selalu dimekanisme melalui setTimeout saja, namun bahkan juga denngan addEventListener (ini bisa juga karena fungsi berat mungkin baru akan berjalan ketika tombol baru di klick)
 */

function satu() {
  console.log("satu");
}
// fungsi dua() dideklarasikan menjadi callback atau sebuah fungsi yang masuk dalam antrian web API. inilah salah satu bentuk asynchronus dalam bentuk setTimeout, yang mana setTimeout memindahkan function ke antrian web API yang nanti akan dipanggil dalam bentuk callback (fungsi yang dipanggil kembali setelah antre ataupun setelah dipanggil lagi dari Web API)
function dua() {
  setTimeout(() => {
    console.log("dua");
  }, 3000);
}
function tiga() {
  console.log("tiga");
}

satu();
dua();
tiga();
