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
});
