

//browser.browserAction.onClicked.addListener((tab) => { 

console.log('triggered');

var arr = document.getElementsByClassName("CodeMirror-code");
var file = arr[0];

var code_out = '';
var meta_out = '';

for (let i = 0; i < 1; i++) {
	console.log(arr);
	var kids = arr[i].children;
	console.log(kids);
	for (let j = 0; j < kids.length; j++) {
//		console.log(j);
		var kidskid = kids[j].children;
		for (let k = 0; k < kidskid.length; k++) {
			code_out += kidskid[k].innerText.replace(/(\r?\n|\r)/gm, "");	
			//code_out += kidskid[k].innerText;	
		}
		code_out += "\n";
	}
}

console.log(code_out);

//});
