const nama = prompt("Siapa nama anda ?");

let panggil = "Halo, ";

if (nama === null || nama === "") {
  panggil = "Halo, Pengunjung";
} else {
  panggil += nama;
}

let sapa = document.getElementById("panggil");
sapa.innerText = panggil;

function bukaSlide() {
  let drop = document.querySelector("#down");
  if (drop.className === "dropdown") drop.className += "-mobile";
  else drop.className = "dropdown";
}

const gcloudStorageUrl = "https://storage.googleapis.com/geraldapm-profile/";

const logoImg = document.getElementById("logo-img");
const aboutImg = document.getElementById("about-img");
const trainingImg = document.getElementById("training-img");
const prestasiImg = document.getElementById("prestasi-img");
const profileImg = document.getElementById("profile-img");

logoImg.src = gcloudStorageUrl + "037-responsive.png";
aboutImg.src = gcloudStorageUrl + "tentang.jpg";
trainingImg.src = gcloudStorageUrl + "pelatihan.jpg";
prestasiImg.src = gcloudStorageUrl + "uefa.jpg";
profileImg.src = gcloudStorageUrl + "gerald.jpg";
