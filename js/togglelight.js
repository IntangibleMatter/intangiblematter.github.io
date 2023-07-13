function applyLightMode(element, isLightModeOn) {
    if (isLightModeOn) {
        element.classList.add('light_mode');
    } else {
        element.classList.remove('light_mode');
    }

    const children = element.children;
    for (let i = 0; i < children.length; i++) {
        applyLightMode(children[i], isLightModeOn);
    }
}

function toggleLightMode() {
    const contentDiv = document.querySelector('#main-content');
    const toggleButton = document.querySelector('#toggleButton');
    const isLightModeOn = !contentDiv.classList.contains('light_mode');

    applyLightMode(contentDiv, isLightModeOn);

    if (isLightModeOn) {
        toggleButton.textContent = 'Toggle Dark Mode';
        localStorage.setItem('lightModePreference', 'on');
    } else {
        toggleButton.textContent = 'Toggle Light Mode';
        localStorage.setItem('lightModePreference', 'off');
    }
}

const toggleButton = document.querySelector('#toggleButton');
toggleButton.addEventListener('click', toggleLightMode);

// Retrieve light mode preference from localStorage on page load
document.addEventListener('DOMContentLoaded', function () {
    const contentDiv = document.querySelector('#main-content');
    const toggleButton = document.querySelector('#toggleButton');

    const lightModePreference = localStorage.getItem('lightModePreference');

    if (lightModePreference === 'on') {
        applyLightMode(contentDiv, true);
        toggleButton.textContent = 'Toggle Dark Mode';
    } else {
        applyLightMode(contentDiv, false);
        toggleButton.textContent = 'Toggle Light Mode';
    }
});