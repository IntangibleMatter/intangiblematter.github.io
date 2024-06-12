//window.onload = function improve_footnotes() {
//	var footnotes = document.getElementsByClassName("footnote-ref");
//	for (let i = 0; i < footnotes.length; i++) {
//
//	}
//}

function insert_footnote(footnoteId, footnoteRef) {
	var frag = document.createDocumentFragment(), temp = document.createElement('div');
	temp.classList.add("footnote-hover");
	temp.innerText = document.querySelector(footnoteId).innerText;
	//var footnoteContents = document.querySelector(footnoteId).innerHtml;
	//footnoteContents.removeChild()

	//frag.appendChild(temp);*/
	frag.appendChild(temp);
}
