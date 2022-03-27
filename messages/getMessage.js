var messages;
var names;
var songs;

function parseJSON() {
    parseNames();
    parseMessages();
    parseSongs();
};

function parseNames() {
    var oXHR = new XMLHttpRequest();
    oXHR.onreadystatechange = reportStatus;
    oXHR.open("GET", "names.json", true); // get json file.
    oXHR.send();

    function reportStatus() {
        if (oXHR.readyState == 4) {
            //console.log(this.responseText);
            names = JSON.parse(this.responseText);
        };
    };
    //easiest way to fix the string bug
}

function parseMessages() {
    var oXHR = new XMLHttpRequest();
    oXHR.onreadystatechange = reportStatus;
    oXHR.open("GET", "messages.json", true); // get json file.
    oXHR.send();

    function reportStatus() {
        if (oXHR.readyState == 4) {
            //console.log(this.responseText);
            messages = JSON.parse(this.responseText);
        };
    };
    //easiest way to fix the string bug
}

function parseSongs() {
    var oXHR = new XMLHttpRequest();
    oXHR.onreadystatechange = reportStatus;
    oXHR.open("GET", "songs.json", true); // get json file.
    oXHR.send();

    function reportStatus() {
        if (oXHR.readyState == 4) {
            //console.log(this.responseText);
            songs = JSON.parse(this.responseText);
        };
    };
    //easiest way to fix the string bug
}

function getmessage() {
    var message;
    var sid = document.getElementById('sid').value.toString();
    console.log(sid);
    console.log(names);

    var yt = `<iframe width="480" height="270" src="https://www.youtube.com/embed/${songs[sid]}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

    message = `${names[sid]} <br><br><hr size="2px" width="90%" color="white">  <br> ${messages[sid]}<p>A song for you:</p><br>${yt}`;

    if (message === undefined) {message = "We're sorry, but your student ID wasn't found.<br>Maybe you made a typo, or maybe we did, or maybe you simply weren't included (Likely the case if you're not a 2024 grad.) Maybe try again? :)";} // Student ID wasn't found in list.
    document.getElementById("content").innerHTML = message;
}