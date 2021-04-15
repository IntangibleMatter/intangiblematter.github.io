var postsJSON = {};
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
        };
    };
    //reportStatus()
    //easiest way to fix the string bug
    posts = postsJSON.Posts;
    console.log(posts);
};


function getNewest() {
    let newest = posts.length[posts.length - 1];
    let newThumb = '<img class="newIcon" src=".' + newest.icon + '" />';
    newThumb = '<button class="newPost">';
    newThumb += '<b>' + newest.Title + '</b> <br>';
    newThumb += newest.Description;
    newThumb += "</button>"
    document.getElementById("newest").innerHTML = newThumb;
    console.log("newest");
};

function loadArchive() {
    let archiveTable = '<th>Post</th><th>Description</th><th>Published</th>';
    for (var post = posts.length - 1; i >= 0; i--) {
        archiveTable += '<tr> <img class="postIcon" src="' + posts[post].icon + '" /><td><a href="' + posts[post].Link + '">' + posts[post].Title + '</a></td>';
    };
    document.getElementById("posts").innerHTML = archiveTable;
};