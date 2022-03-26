var messages;
var names;

function parseJSON() {
    parseNames();
    parseMessages();
};

function parseNames() {
    var oXHR = new XMLHttpRequest();
    oXHR.onreadystatechange = reportStatus;
    oXHR.open("GET", "names.json", true); // get json file.
    oXHR.send();

    function reportStatus() {
        if (oXHR.readyState == 4) {
            console.log(this.responseText);
            messages = JSON.parse(this.responseText);
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
            console.log(this.responseText);
            messages = JSON.parse(this.responseText);
        };
    };
    //easiest way to fix the string bug
}

function getmessage() {
    var message;
    var sid = document.getElementById('sid').value.toString();
    console.log(sid);
    console.log(names);
    message = messages[sid];

    if (message === undefined) {message = "We're sorry, but your student ID wasn't found.<br>Maybe you made a typo, or maybe we did, or maybe you simply weren't included (Likely the case if you're not a 2024 grad.) Maybe try again? :)";} // Student ID wasn't found in list.
    document.getElementById("content").innerHTML = message;
}