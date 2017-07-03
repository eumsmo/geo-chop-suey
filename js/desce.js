let principal = document.querySelector('#principal')
	hyperlink = document.querySelectorAll('a');

for (var i = 0; i < hyperlink.length; i++) {
		hyperlink[i].addEventListener('click',move);
}
function move(){
	if(principal.style.bottom ==0 + 'px'){
		principal.style.bottom = principal.offsetHeight + 'px';
		console.log("sooobe");
	} else{
		principal.style.bottom = 0 + 'px';
		console.log("ciima");
	}
}
window.onload = move;
