

browser.browserAction.onClicked.addListener((tab) => { 

	console.log('triggered');

	var arr = document.getElementsByClassName("CodeMirror-code");

	var out = '';

	for (let i = 0; i < arr.length; i++) {
		console.log(arr);
		var kids = arr[i].children;
		console.log(kids);
		for (let j = 0; j < kids.length; j++) {
			console.log(j);
			out += kids[j].innerText;	
		}
	}

	console.log(out);

});
