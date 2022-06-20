function viewItem(item) {
    console.log("ASDAD");
    var infoOverlay = document.getElementsByClassName('info-overlay');
    var infoItem = document.getElementById(item);
    infoOverlay.style.color="red"
    infoOverlay.style.display="block";
    infoOverlay.style.position="0vh";
    infoOverlay.style.transition="2s"
}