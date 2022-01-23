var text;
var fullCard = "";
var currentText = {
    "Card1": "neopronouns",
    "Card2": "Monster energy drinks",
    "Card3": "Lyric in drag"
};
var generated = [];


//json parser
function parseJson() {
    var oXHR = new XMLHttpRequest();
    oXHR.onreadystatechange = reportStatus;
    oXHR.open("GET", "json/cards.json", true); // get json file.
    oXHR.send();

    function reportStatus() {
        if (oXHR.readyState == 4) {
            console.log(this.responseText)
            text = JSON.parse(this.responseText);
        };
    };
    //easiest way to fix the string bug
};

parseJson();

//display the card and get new cards
function updateCard(chosenCard) {
    let newText = text.Prompts[Math.floor(Math.random() * text.Prompts.length)].replace("%card%", getSelectedText(chosenCard));
    newText = newText.charAt(0).toUpperCase() + newText.slice(1);
    generated.unshift(newText);
    console.log(newText);
    //insert the text into the html
    let generatedText = "";
    for (i = 0; i < generated.length; i++) {
        if (i === 0) {
            generatedText += "<h3>" + generated[i] + "</h3>" + "<br>";
        } else {
            generatedText += generated[i] + "<br>";
        };
    };
    document.getElementById("generated").innerHTML = generatedText;
    updateCardText();
};

function getSelectedText(chosenCard) {
    if (chosenCard === 1) {
        return currentText.Card1;
    } else if (chosenCard === 2) {
        return currentText.Card2;
    } else {
        return currentText.Card3;
    };
};

function updateCardText() {
    currentText.Card1 = text.Cards[Math.floor(Math.random() * text.Cards.length)];
    do {
        currentText.Card2 = text.Cards[Math.floor(Math.random() * text.Cards.length)];
    } while (currentText.Card2 === currentText.Card1);
    do {
        currentText.Card3 = text.Cards[Math.floor(Math.random() * text.Cards.length)];
    } while (currentText.Card3 === currentText.Card1 && currentText.card3 === currentText.card2)

    document.getElementById("card1").innerHTML = currentText.Card1;
    document.getElementById("card2").innerHTML = currentText.Card2;
    document.getElementById("card3").innerHTML = currentText.Card3;
};