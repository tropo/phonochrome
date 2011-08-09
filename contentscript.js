// var regex = /[01]?[- .]?\(?[2-9]\d{2}\)?[- .]?\d{3}[- .]?\d{4}/g;
// var regex = /1?[- .]?\(?[2-9]\d{2}\)?[- .]?\d{3}[- .]?\d{4}/g;
// var regex = /[>\s]1?[- \.]?\(?[2-9]\d{2}\)?[- \.]?\d{3}[- \.]?\d{4}[<\s]/g;
// var regex = /[>\s]1?[- \.]?\(?[2-9]\d{2}\)?[- \.]?\d{3}[- \.]?\d{4}/g;
var regex = /[\s]1?[- \.]?\(?[2-9]\d{2}\)?[- \.]?\d{3}[- \.]?\d{4}/g;
var page;
var hits;

// Test the text of the body element against our regular expression.
// if (regex.test(document.body.innerText)) {
if (regex.test(document.documentElement.innerHTML)) {
  // The regular expression produced a match, so notify the background page.

	// page = document.body.innerHTML;
	page = document.documentElement.innerHTML;
	
	hits = page.match(regex);
	
	for (var i = 0; i < hits.length; i += 1) {
	    // page = page.replace(hits[i], '<a href="http://phonophone.heroku.com?phone=' + trimString(hits[i]) + '">' + hits[i] + '</a>');
	    page = page.replace(hits[i], '<a href="#" onclick="javascript:window.open(\'http://phonophone.heroku.com?phone=' + trimString(hits[i]) + '\' , \'popup_id\', \'scrollbars,resizable,width=350,height=400\')">' + hits[i] + '</a>');
	// console.log('found: ' + trimString(hits[i]))
	}
	
	// document.write (document.doctype + page);
	document.write (page);
	
  	chrome.extension.sendRequest({}, function(response) {});

} else {
  // No match was found.
  // console.log('no matches')
}


//To trim leading or trailing spaces
function trimString (str) {
   // return str.replace(/^\s+/g, '').replace(/\s+$/g, '');  
   return str.replace(/\s+/g, '').replace(/\(/g, '').replace(/\)/g, '').replace(/\./g, '').replace(/\-/g, '');  
}