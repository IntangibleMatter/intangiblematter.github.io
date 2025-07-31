var headlines = [];
var active = [];

var hIndex = 0;

const speed = 100;

const separator = "        ◦        ";

const body = document.getElementById("main");

console.log("main", body);

function shuffle(array) {
	let currentIndex = array.length,
		randomIndex;

	// While there remain elements to shuffle.
	while (currentIndex != 0) {
		// Pick a remaining element.
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex],
		];
	}

	return array;
}

var client = new XMLHttpRequest();
client.open("GET", "ticker.txt");
client.onreadystatechange = function () {
	//alert(client.responseText);
	// console.log(this.readyState);
	if (client.readyState < 4) {
		return;
	}

	headlines = client.responseText.split("\n");
	shuffle(headlines);
	console.log(headlines);

	// main();
	setupPage();
};
client.send();

function setupPage() {
	for (let i = 0; i < 7; i++) {
		iterate();
	}
}

function iterate() {
	var startx;
	if (active[active.length - 1]) {
		const prev = active[active.length - 1];
		startx = prev.getBoundingClientRect().right;
	} else {
		startx = 0;
	}

	const newElem = document.createElement("span");
	newElem.innerText = headlines[hIndex] + separator;

	newElem.classList.add("scroller");
	newElem.style.visibility = "hidden";
	body.appendChild(newElem);

	var endx = -newElem.clientWidth - 400;
	var time = (startx - endx) / speed;
	newElem.style.setProperty("--startx", `${startx}px`);
	newElem.style.setProperty("--endx", `${endx}px`);
	newElem.style.setProperty("--time", `${time}s`);
	newElem.style.visibility = "visible";

	newElem.style.setProperty("min-width", `${newElem.clientWidth}`);

	console.log(newElem, startx, endx, time);

	active.push(newElem);

	let removeElem = function () {
		newElem.remove();
		let idx = active.indexOf(newElem);
		if (idx > -1) {
			active.splice(idx, 1);
		}
	};
	setTimeout(function () {
		removeElem();
		iterate();
	}, time * 1000);

	hIndex++;

	if (hIndex >= headlines.length) {
		shuffle(headlines);
		hIndex = 0;
	}
}

function main() {}

function calcSpeed() {}

function resolveAfterTimems(x) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(x);
		}, 20);
	});
}
