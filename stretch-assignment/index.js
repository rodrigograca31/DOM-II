
window.addEventListener("load", event => {
	Array.from(document.querySelectorAll(".block")).forEach(function (elem) {
		console.log("sss");

		elem.addEventListener("click", event => {
			console.log("click");

		});
	});
});