const nama = prompt("Siapa nama anda ?");

let panggil = "Halo, ";

if (nama === null || nama === ""){
	panggil = "Halo, Pengunjung";
}
else {
	panggil += nama;
}

let sapa = document.getElementById("panggil");
sapa.innerText = panggil;

function bukaSlide() {
	let drop = document.querySelector("#down");
	if (drop.className === "dropdown")
		drop.className += "-mobile";
	else
		drop.className = "dropdown";
}