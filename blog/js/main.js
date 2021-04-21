var postsJSON;
var text;
var posts = [];

function parseJson() {
    var oXHR = new XMLHttpRequest();
    oXHR.onreadystatechange = reportStatus;
    oXHR.open("GET", "json/posts.json", true); // get json file.
    oXHR.send();

    function reportStatus() {
        if (oXHR.readyState == 4) {
            let temptext = JSON.parse(this.responseText)
            postsJSON = temptext;
        }
    }
    //easiest way to fix the string bug
    console.log(postsJSON)
}


function getNewest() {
    let newest = posts.length[posts.length - 1];
    let newThumb = '<img class="newIcon" src=".' + newest.Icon + '" />';
    newThumb += '<h2>' + newest.Title + '</h2>';
    newThumb += newest.Description;
    newThumb += "</div>"
    document.getElementById("newest").innerHTML = newThumb;
    console.log("newest");
}

function loadArchive() {
    let archiveTable = '<th><!--icons--></th><th>Post</th><th>Description</th><th>Published</th>';
    for (var post = posts.length - 1; i >= 0; i--) {
        archiveTable += '<tr> <img class="postIcon" src="' + posts[post].Icon + '" /><td><a href="' + posts[post].Link + '">' + posts[post].Title + '</a></td>';
    }
    document.getElementById("posts").innerHTML = archiveTable;
}