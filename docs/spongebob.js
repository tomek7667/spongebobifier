
window.addEventListener('DOMContentLoaded', (event) => {
	let spongebob = document.getElementById("spongebob");
	let human = document.getElementById("human");
	spongebob.addEventListener("input", () => {
		let spongeText = spongebob.value;
		human.value = spongebob2human(spongeText);

	})

	human.addEventListener("input", () => {
		let humanText = human.value;
		spongebob.value = human2spongebob(humanText);
	})
});

let changeH2S = (word) => {
	return word.split("").map((t, i) => {
		return i % 2 === 0 ? t.toLowerCase() : t.toUpperCase();
	}).join("")
}

let changeS2H = (word) => {
	return word.toLowerCase();
}

let human2spongebob = (humanText) => {
	let arr = humanText.split(" ");
	let result = "";
	for (let word of arr) {
		if (!/^\d+$/.test(word)) {
			word = changeH2S(word);
		}
		result += word + " ";
	}
	return result;
}

let spongebob2human = (leetText) => {
	let arr = leetText.split(" ");
	let result = "";
	for (let word of arr) {
		if (!/^\d+$/.test(word)) {
			word = changeS2H(word);
		}
		result += word + " ";
	}
	return result;
}