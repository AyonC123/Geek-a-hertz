const button = document.querySelector("#button");
const links = document.querySelector("#mobileLinks");

let open = true;
button.addEventListener("click", (e) => {
	if (open == true) {
		button.innerHTML = "&#120;";
		open = false;
	} else {
		button.innerHTML = "&ReverseElement;";
		open = true;
	}
	links.classList.toggle("visible");
});
