var postsJSON;
var posts;

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
    //easiest way to fix the string bug
    posts = postsJSON.Posts;
};


function getNewest() {
    let newest = posts.length[posts.length - 1];
    let newThumb = '<img class="newIcon" src=".' + newest.icon + '" />';
    newThumb = '<button class="newPost">';
    newThumb += '<b>' + newest.Title + '</b> <br>';
    newThumb += newest.Description;
    newThumb += "</button>"
    document.getElementById("newest").innerHTML = newThumb;
};

function loadArchive() {
    let archiveTable = '<!-- <table> <th><!--icon--></th> --> <th>Post</th><th>Description</th><th>Published</th>';
    for (post = posts.length - 1; i >= 0; i--) {
        archiveTable += '<tr> <img class="postIcon" src="' + post.icon + '" /><td><a href="' + post.Link + '">' + post.Title + '</a></td>';
    };
};