const toggleNavbar = () => {
	var navbar = document.getElementById("navbar");
	if (navbar.className === "top-nav") {
		navbar.className += " responsive";
	} else {
		navbar.className = "top-nav";
	}
}
