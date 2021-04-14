var posts;

function parseJson() {
    var oXHR = new XMLHttpRequest();
    oXHR.onreadystatechange = reportStatus;
    oXHR.open("GET", "json/posts.json", true); // get json file.
    oXHR.send();

    function reportStatus() {
        if (oXHR.readyState == 4) {
            //console.log(this.responseText)
            text = JSON.parse(this.responseText);
        };
    };
    //easiest way to fix the string bug
};


function getNewest() {
    let newest = posts.Posts.length[posts.Posts.length - 1];
    let newThumb = '<img class="newIcon" src=".' + newest.icon + '" />';
    newThumb = '<button class="newPost">';
    newThumb += '<b>' + newest.Title + '</b> <br>';
    newThumb += newest.Description;
    newThumb += "</button>"
    document.getElementById("newest").innerHTML = newThumb;
};