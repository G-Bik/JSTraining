// Berfungsi untuk menjalankan script setelah DOM sepenuhnya dimuat
document.addEventListener("DOMContentLoaded", () => {
  // Mendeklarasikan elemen yang akan digunakan kedalam variabel
  const button = document.getElementById("clickMeButton");
  const paragraph = document.getElementById("firstLine");

  // Mendeklarasikan event listener dengan addEventListener apabila tombol diklik
  button.addEventListener("click", () => {
    // Statement ini seperti memasuki statement if, yang mana apabila di button sudah di click, maka statement ini akan dijalankan

    // Mengubah teks atau value dari elemen p pada variabel paragraph menjadi "Button clicked!"
    paragraph.textContent = "Button clicked!";
  });

  //   JavaScript Output property innerHTML, yang mana akan mengubah value html dari elemen p dengan id secondLine menjadi value sesuai value yang ada pada JS, innerHTML juga dapat merubah elemen HTML itu sendiri yang mana dengan menambahkan tags HTML yang diperlukan didalamnya

  const pOutput = document.getElementById("secondLine");

  pOutput.innerHTML =
    "<strong>Merubah Value Paragraft menjadi value JS</strong>";

  // JavaScript Output property innerText, yang mana akan mengubah value text dari elemen p dengan id thirdLine menjadi value sesuai value yang ada pada JS, tapi tidak dapat merubah elemen HTML itu sendiri, hanya merubah value textnya saja dengan format text biasa
  const pOutput1 = document.getElementById("thirdLine");

  pOutput1.innerText =
    "Hanya text saja yang berubah dan tidak dapat memberikan efek html seperti pada innerHTML";

  // JavaScript Output property document.write(), berfungsi untuk menampilkan parameter yang ada dalam document.write(). Property ini merupakan sebuah metode global tanpa harus memanggil variabel resetAll dibawah statement addEventListener ketika tombol di klik.

  const resetAll = document.getElementById("reset");
  resetAll.addEventListener("click", () => {
    document.write("YAHHH KE RESETT, GOBLOK!");
  });

  //   JavaScript Output property window.alert(), berfungsi untuk menampilkan pesan alert yang berisi parameter yang ada dalam window.alert(). dibawah menggunakan contoh ketika tombol Click Me! di klik, maka akan muncul alert dengan pesan yang sudah ditentukan.

  button.addEventListener("click", () => {
    alert("HALO, BANYAKAKIN BELAJAR ANJING!");
  });

  //   JavaScript Output property console.log(), berfungsi untuk menampilkan pesan pada console browser (pencet F12 dan pilih menu "console"), yang mana dapat digunakan untuk debugging atau hanya sekedar menampilkan pesan.

  const clickBug = document.getElementById("debugClick");
  clickBug.addEventListener("click", () => {
    console.log("HEY RIGHT HERE, YOU GOT DEBUGG HAHA LOL!");
  });

  let userName = prompt("Masukkan nama kamu: ", "Nama Kamu");
  if (userName) {
    // ${userName} adalah template literal yang digunakan untuk menyisipkan variabel ke dalam string, mengapa tidak menggunakan tanda + karena template literal lebih mudah dibaca, ditulis dengan backtick (`) dan memungkinkan penulisan string multi-baris, serta lebih modern
    console.log(`Halo, ${userName}! Selamat datang!`);
  } else {
    console.log("Halo, pengunjung tanpa nama!");
  }

  // Contoh penggunaan template literal multi-baris pada string
  let age = 27;
  let nama = "Gustut Biksa";
  let gaAdaNilai;
  let ProgrammerWorks = null; // 1 untuk belum bekerja, 2 untuk sudah bekerja

  if (ProgrammerWorks === null) {
    ProgrammerWorks = "Kamu belum bekerja sebagai programmer!";
  } else {
    ProgrammerWorks = "YAYY!! sudah bekerja sebagai programmer!";
  }

  let saldoAwal = 50000;
  let saldoTamabahan = 80000;

  // Menggunakan switch case hampir sama dengan if, tapi lebih mudah dibaca dan ditulis, serta lebih efisien untuk banyak kondisi
  // switch (ProgrammerWorks) {
  //   case "belum bekerja":
  //     ProgrammerWorks = "Kamu belum bekerja sebagai programmer!";
  //     break;
  //   case "bekerja":
  //     ProgrammerWorks = "YAYY!! sudah bekerja sebagai programmer!";
  //     break;
  //   default:
  //     ProgrammerWorks = "Tidak diketahui status pekerjaanmu!";
  //     break;
  // }

  alert(`nama saya adalah ${nama} dan umur saya adalah ${age} tahun.
    dan ini contoh deteksi ${gaAdaNilai} karena variabel tidak mendapatkan nilai atau tidak dideklarasikan nilainya, dan ${ProgrammerWorks}`);
  // gaAdaNilai tidak dideklarasikan, akan menyebabkan error di console serta pesan undefined pada alert

  // tapi jika kita ingin mendeklarasikan nilainya maka cukup seperti dibawah ini, yang mana tanpa perlu mendeklarasikan ulang variabel gaAdaNilai dengan let, const, atau var.
  gaAdaNilai = "sekarang ada nilai";
  alert(
    `Sekarang variabel gaAdaNilai sudah dideklarasikan nilainya yaitu ${gaAdaNilai}`
  );
});
