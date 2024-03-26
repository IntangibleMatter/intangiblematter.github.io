var linkmap;

async function loadJson() {
	/*console.log("kajdfs");
	var response = fetch("./linkmap.json")
		.then((rsp) => rsp.json())
		.then((json) => {
			console.log(":afak");
			console.log(json);
			return json;
		});
	//console.log(response);
	//return response;*/
	await fetch('./linkmap.json')
		.then((res) => {
			if (!res.ok) {
				throw new Error(`HTTP error! Status: ${res.status}`);
			}
			return res.json();
		})
		.then((data) => {
			//console.log(data);
			linkmap = data; })
		.catch((error) =>
			console.error("Unable to fetch data", error));
	//console.log("why");
}


async function redir() {
	//var linkmap =
	await loadJson();
	//console.log("AAAAAAAAAAAAAAA");
	//console.log(linkmap);
	//console.log("map")

	let params = new URLSearchParams(window.location.search.split('?')[1]);
	var newURL;
	for (let pair of params.entries()) {
		if (pair[0] === "a") {
			newURL = linkmap[pair[1]];
		}
	}
	if (newURL === undefined) {
		newURL = "/"
	}
	//console.log(newURL);
	window.location.replace(newURL);
}

redir();
