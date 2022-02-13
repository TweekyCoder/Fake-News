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

var logoName = "bars";

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

var linkNames = ['<i class="fas fa-home"></i> Home', '<i class="fas fa-fingerprint"></i>  Identification', '<i class="fas fa-video"></i> Example Videos', '&nbsp', '<i class="fas fa-question-circle"></i> FAQ', '<i class="fas fa-list"></i> Credits','&nbsp', '©Designed & Created By J.S. 2022'];
var linkSrcs = ["index.html", "identification.html", "vids.html", "identification.html", "faq.html", "credits.html" , "#", "#"];

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

document.querySelector(".moreBtn").addEventListener("click", function () {
	if (logoName == "bars") {
		document.querySelector(".moreBtn").innerHTML = '<i class="fas fa-times"></i>';
		logoName = "cross";
	} else {
		document.querySelector(".moreBtn").innerHTML = '<i class="fas fa-bars"></i>';
		logoName = "bars";
	}
});

function unScroll() {
	window.scrollTo(0, 0);
}

var wait = window.setTimeout(function () {
	document.querySelector(".overlay").style.display = "block";
	document.querySelector(".popup").style.display = "block";

	window.addEventListener("scroll", unScroll);

	document.querySelector(".popupClose").addEventListener("click", function () {
		document.querySelector(".overlay").style.display = "none";
		document.querySelector(".popup").style.display = "none";

		window.removeEventListener("scroll", unScroll);
	});
}, 8000);