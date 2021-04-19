var postsJSON = { "Posts": [] };
var posts = [];

function parseJson() {
    var oXHR = new XMLHttpRequest();
    oXHR.onreadystatechange = reportStatus;
    oXHR.open("GET", "json/posts.json", true); // get json file.
    oXHR.send();

    function reportStatus() {
        if (oXHR.readyState == 4) {
            //console.log(this.responseText)
            postsJSON = JSON.parse(this.responseText);
        }
    }
    //reportStatus()
    //easiest way to fix the string bug
    posts = postsJSON.Posts;
    console.log(posts);
}

function getNewest() {
    var newest = posts.length[posts.length - 1];
    var newThumb = '<img class="newIcon" src=".' + newest.icon + '" />';
    newThumb = '<div class="newPost">';
    newThumb += '<a href="' + newest.Link + '" <h2>' + newest.Title + '</h2></a>';
    newThumb += '<p>' + newest.Description + '</p>';
    newThumb += "</button>";
    document.getElementById("newest").innerHTML = newThumb;
    console.log("newest");
    console.log("AAAAAAAAAAAAAAA");
}

function loadArchive() {
    var archiveTable = '<th>Post</th><th>Description</th><th>Published</th>';
    for (var post = posts.length - 1; post >= 0; post--) {
        archiveTable += '<tr> <img class="postIcon" src="' + posts[post].Icon + '" /><td><a href="' + posts[post].Link + '">' + posts[post].Title + '</a></td>';
    }
    document.getElementById("posts").innerHTML = archiveTable;
}