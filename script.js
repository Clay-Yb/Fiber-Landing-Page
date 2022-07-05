const navToggle = document.querySelector(".nav_toggle");
const navMenu = document.querySelector(".nav_menu");
navToggle.addEventListener("click", () => {
	navMenu.classList.toggle("show_menu");
});

const navLink = document.querySelectorAll(".nav_link");
navLink.forEach((n) =>
	n.addEventListener("click", () => {
		navMenu.classList.remove("show_menu");
	})
);

// scrollheader

const header = document.querySelector(".header");

const scrollHeader = () => {
	this.scrollY > 50
		? header.classList.add("scroll_header")
		: header.classList.remove("scroll_header");
};

window.addEventListener("scroll", scrollHeader);
