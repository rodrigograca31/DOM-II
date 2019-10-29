// Your code goes here

Array.from(document.getElementsByTagName('p')).forEach(function (elem) {
	elem.addEventListener("mouseover", event => {
		console.log(event.target);
		event.target.style.color = "red";
	});
	elem.addEventListener("mouseleave", event => {
		console.log(event.target);
		event.target.style.color = "black";
	});
});

window.addEventListener("load", event => {
	console.log("everything loaded");
});

Array.from(document.querySelectorAll('div.btn')).forEach(function (elem) {
	elem.addEventListener("click", event => {
		console.log(event.target);
	});
	elem.addEventListener("dblclick", event => {
		console.log("double click");
	});
});


window.addEventListener("mousemove", event => {
	document.querySelector("#mouse").style.left = 2+ event.x + "px";
	document.querySelector("#mouse").style.top = 2+ event.y + "px";
});

document.querySelectorAll("div")[1].addEventListener("wheel", event => {
	event.preventDefault();
	let scale = 1;
	scale += event.deltaY * -0.01;

	// Restrict scale
	scale = Math.min(Math.max(.125, scale), 4);
	
	// Apply scale transform
	event.target.style.transform = `scale(${scale})`;
});

window.addEventListener("resize", (event) => {
	console.log("stop resizing");
})

Array.from(document.querySelectorAll('section.content-section')).forEach(function (elem) {
	elem.addEventListener("click", event => {
		event.currentTarget.style.background = "green"
		console.log("once");
	});
});

Array.from(document.querySelectorAll('section.content-section p')).forEach(function (elem) {
	elem.addEventListener("click", event => {
		event.currentTarget.style.background = "yellow"
		console.log("twice");
		event.stopPropagation();
	});
});

Array.from(document.querySelectorAll('a')).forEach(function (elem) {
	elem.addEventListener("click", event => {
		event.preventDefault();
	});
});


window.addEventListener("dblclick", event => {
	var logo = document.querySelector("body");
	
	TweenLite.to(logo, 1, { backgroundColor: "black", color: "white" });
});
