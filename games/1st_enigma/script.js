var url;
document.getElementById("go").onclick = function() {
	url = document.getElementById("url").value;
	location.href = url + ".html";
};
