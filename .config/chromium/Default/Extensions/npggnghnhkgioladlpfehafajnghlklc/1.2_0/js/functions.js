var h=!0,i=null,j=!1;

function getOptions (callback, e) {
	chrome.extension.sendMessage({
		method: 'getOption',
	}, function (resp) {
		callback(resp, e);
	});
}

function addToHistory (word, url) {
	chrome.extension.sendMessage({
		method: 'addToHistory',
		word: word,
		url: url
	}, function () {});
}

function validateTrigger (opt, e) {

	if (e.d_type == 'dblclick' && opt.dblclick_checkbox.toLowerCase() == 'true') {

		if (opt.dblclick_key) {
			return e[opt.dblclick_key];
		}
		
		return true;
	
	} else if (e.d_type == 'mouseup' && opt.select_checkbox.toLowerCase() == 'true') {
		
		if (opt.select_key) {
			return e[opt.select_key];
		}
		
		return true;

	}
	
	return false;

}

function array_search (a,b){for(var c=0,e=a.length;c<e;c++)if(b==a[c])return h;return j}

function validateWord (word) {
	var skip = "\" ' ( ) , - . / 1 2 : ?".split(" ");

	return array_search(skip, word);
	
}