const pubs = document.querySelectorAll(".publication");

pubs.forEach((pub) => {
    const abs = pub.querySelector(".abstract");
    const button = pub.querySelector(".abstract_button");

    button.innerText = "Show Abstract";
    abs.style.display = "none";

    button.addEventListener("click", (e) => {
	if (abs.style.display == "none") {
	    abs.style.display = "block";
	    button.innerText = "Close Abstract";
	} else {
	    abs.style.display = "none";
	    button.innerText = "Show Abstract";
	}

    });

    button.addEventListener("mouseover", (e) => {
	button.style.cursor = "pointer";
    });
    
    pub.addEventListener("mouseenter", (e) => {
	button.style.display = "block";
    });

    pub.addEventListener("mouseleave", (e) => {
	if (button.innerText == "Show Abstract"){
	    button.style.display = "none";
	}
    });
});
