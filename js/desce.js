let principal = document.querySelector('#principal')
	hyperlink = document.querySelectorAll('a');

for (var i = 0; i < hyperlink.length; i++) {
	hyperlink[i].addEventListener('click',sobe);
}
function sobe(){
	principal.style.bottom = principal.offsetHeight + 'px';
}
function desce(){
	principal.style.bottom = 0 + 'px';
}
window.onload = desce;