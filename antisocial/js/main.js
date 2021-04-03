var text;

function parseJson() {
    var oXHR = new XMLHttpRequest();
    oXHR.onreadystatechange = reportStatus;
    oXHR.open("GET", "json/text.json", true); // get json file.
    oXHR.send();

    function reportStatus() {
        if (oXHR.readyState == 4) {
            console.log(this.responseText)
            text = JSON.parse(this.responseText);
        };
    };
    //easiest way to fix the string bug
};


function newText() {
    document.getElementById("text").innerHTML = text.Text[Math.floor(Math.random() * text.Text.length)];
};