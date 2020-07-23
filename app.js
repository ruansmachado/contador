// defini contador inicial
let count = 0;

// seleciona values e buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
	btn.addEventListener("click", function (e) {
		const styles = e.currentTarget.classList;
		if (styles.contains("decrease")) {
			count--;
		} else if (styles.contains("increase")) {
			count++;
		} else {
			count = 0;
		}
		if (count > 0) {
			value.style.color = "#4CBB17";
		}
		if (count < 0) {
			value.style.color = "#CA3433";
		}
		if (count === 0) {
			value.style.color = "#222";
		}
		value.textContent = count;
	});
});
