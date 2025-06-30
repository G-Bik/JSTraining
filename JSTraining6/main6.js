console.log("Okey mari kita mulai belajar asynchronus");

function satu() {
  console.log("satu");
}
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
