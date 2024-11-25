function applyLightMode(element, isLightModeOn) {
	if (isLightModeOn) {
		element.classList.add('light_mode');
	} else {
		element.classList.remove('light_mode');
	}
/*
	const children = element.children;
	for (let i = 0; i < children.length; i++) {
		applyLightMode(children[i], isLightModeOn);
	}*/
}

function toggleLightMode() {
	const contentDiv = document.querySelector('#main-content');
	const lighToggleButton = document.querySelector('#lightToggleButton');
	const isLightModeOn = !contentDiv.classList.contains('light_mode');

	applyLightMode(contentDiv, isLightModeOn);

	if (isLightModeOn) {
		lightToggleButton.textContent = 'Toggle Dark Mode';
		localStorage.setItem('lightModePreference', 'on');
	} else {
		lightToggleButton.textContent = 'Toggle Light Mode';
		localStorage.setItem('lightModePreference', 'off');
	}
}

const lightToggleButton = document.querySelector('#lightToggleButton');
lightToggleButton.addEventListener('click', toggleLightMode);

const starsToggleButton = document.querySelector('#starsToggleButton');
starsToggleButton.addEventListener('click', toggleStarsMode);

// Retrieve light mode preference from localStorage on page load
document.addEventListener('DOMContentLoaded', function () {
	const contentDiv = document.querySelector('#main-content');
	const lightToggleButton = document.querySelector('#lightToggleButton');

	const lightModePreference = localStorage.getItem('lightModePreference');

	if (lightModePreference === 'on') {
		applyLightMode(contentDiv, true);
		lightToggleButton.textContent = 'Toggle Dark Mode';
	} else {
		applyLightMode(contentDiv, false);
		lightToggleButton.textContent = 'Toggle Light Mode';
	}
	const starsToggleButton = document.querySelector('#starsToggleButton');
	starsToggleButton.addEventListener('click', toggleStarsMode);
	const starsModePreference = localStorage.getItem('starsModePreference');

	if (starsModePreference === 'on') {
		applyStarsMode(true);
		//starsToggleButton.textContent = 'Star Motion Off';
	} else {
		applyStarsMode(false);
		//starsToggleButton.textContent = 'Star Motion On';
	}

});

function applyStarsMode(isStarsModeOn) {
	const children = document.querySelector("#stars-container").children;
	for (let i = 0; i < children.length; i++) {
		if (isStarsModeOn) {
			children[i].classList.add('stars-off');
		} else {
			children[i].classList.remove('stars-off');
		}
	}
}


function toggleStarsMode() {
	const contentDiv = document.querySelector('#stars-container');
	const toggleStars = document.querySelector('#starsToggleButton');
	const isStarsModeOn = !contentDiv.children[2].classList.contains('stars-off');

	applyStarsMode(isStarsModeOn)

	if (isStarsModeOn) {
		//toggleStars.textContent = 'Star Motion On';
		localStorage.setItem('starsModePreference', 'on');
	} else {
		//toggleStars.textContent = 'Star Motion Off';
		localStorage.setItem('starsModePreference', 'off');
	}
}
