var nav = document.querySelector("nav");
nav.innerHTML = "";

var logo = document.createElement("div");
logo.classList.add("logo");

var linkAnchor = document.createElement("a");
linkAnchor.classList.add("linkAnchor");
linkAnchor.href = "index.html";

var logoImg = document.createElement("img");
logoImg.classList.add("logoImg");
logoImg.src = "images/logo.jpeg"
linkAnchor.appendChild(logoImg);

var logo = "bars";

logo.appendChild(linkAnchor);

nav.appendChild(logo);

var moreBtn = document.createElement("button");
moreBtn.classList.add("moreBtn");
moreBtn.innerHTML = '<i class="fas fa-bars"></i>';

nav.appendChild(moreBtn);

var more = document.createElement("div");
more.classList.add("moreContainer");

var moreTitle = document.createElement("div");
moreTitle.classList.add("moreTitle");
moreTitle.innerHTML = "Other Links";

more.appendChild(moreTitle);

//<i class="fas fa-fingerprint"></i>

var linkNames = ['<i class="fas fa-home"></i> Home', '<i class="fas fa-fingerprint"></i>  Identification', '<i class="fas fa-video"></i> Example Videos', '&nbsp', '<i class="fas fa-question-circle"></i> FAQ', '<i class="fas fa-list"></i> Credits'];
var linkSrcs = ["index.html", "identification.html", "vids.html", "identification.html", "FAQ.html", "credits.html"];

for (i = 0; i < linkNames.length; i++) {
	var link = document.createElement("div");
	link.classList.add("moreLink");

	var linkAnchor = document.createElement("a");
	linkAnchor.classList.add("linkAnchor");
	linkAnchor.href = linkSrcs[i];
	linkAnchor.innerHTML = linkNames[i];

	link.appendChild(linkAnchor);

	more.appendChild(link);
}

nav.appendChild(more);

document.querySelector(".moreBtn").addEventListener("click", function () {
	document.querySelector(".moreContainer").classList.toggle("show");
});

document.querySelector(".moreBtn").addEventListener("click", function (){
	if (logo == "bars"){
		document.querySelector(".moreBtn").innerHTML = '<i class="fas fa-times"></i>';
		logo = "cross";
	} else {
		document.querySelector(".moreBtn").innerHTML = '<i class="fas fa-bars"></i>';
		logo = "bars";
	}
});