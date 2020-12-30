var arrow = document.getElementById("arrow");
var main = document.getElementById("main");
var row = document.getElementById("row");

arrow.style.display = "none";
main.style.display = "none";
row.style.display = "none";

document.getElementById("starter").onclick = function() {
	document.getElementById("start").style.display = "none";
	arrow.style.display = "flex";
	main.style.display = "flex";
	row.style.display = "flex";
};
