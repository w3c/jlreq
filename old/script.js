var switched = false;

function switch2ja () {
	if (switched) { alert('Refresh the page, then click on this button again.'); return; }
	
	var en = document.querySelectorAll('[its-locale-filter-list=en]')
	for (var i=0;i<en.length;i++) en[i].style.display='none' 
	document.getElementById('languageStyling').textContent=''
	
	var ja = document.querySelectorAll('[its-locale-filter-list=ja]')
	for (var i=0;i<ja.length;i++) ja[i].style.display='none' 
	document.getElementById('languageStyling').textContent=''

	document.documentElement.lang = 'ja'
	switched = true;
	
	// change boilerplate text
	document.getElementById('abstract-1').textContent = '摘要'
	document.getElementById('h-sotd').textContent = '关于本文档'
	document.getElementById('h-toc').textContent = '内容大纲'
	
	var notes = document.querySelectorAll('.note-title')
	for (i=0;i<notes.length;i++) notes[i].textContent = '注'
	var figcaptions = document.querySelectorAll('figcaption')
	for (i=0;i<figcaptions.length;i++) figcaptions[i].firstChild.textContent = '圖'
	var figrefs = document.querySelectorAll('.fig-ref')
	for (i=0;i<figrefs.length;i++) { 
		if (figrefs[i].firstChild) {
			figrefs[i].replaceChild(document.createTextNode('图'), figrefs[i].firstChild) }
		}
	
	var dts = document.querySelectorAll('dt')
	for (i=0;i<dts.length;i++) {
		switch (dts[i].textContent) {
		case 'This version:': dts[i].textContent = '本版本：'; break;
		case 'Latest published version:': dts[i].textContent = '最新发布草稿：'; break;
		case 'Latest editor\'s draft:': dts[i].textContent = '最新编辑草稿：'; break;
		case 'Editors:': dts[i].textContent = '编辑：'; break;
		case 'Bug tracker:': dts[i].textContent = '错误跟踪：'; 
			dts[i].nextSibling.nextSibling.innerHTML = '<a href="https://github.com/w3c/jlreq/issues">反馈错误</a>（<a href="https://github.com/w3c/clreq/issues">修正中的错误</a>）'; break;
		}
		}
	}
	
	
function switch2ja () {
	if (switched) { alert('Refresh the page, then click on this button again.'); return; }
	
	var en = document.querySelectorAll('[its-locale-filter-list=en]')
	for (var i=0;i<en.length;i++) en[i].style.display='none' 
	document.getElementById('languageStyling').textContent=''
	
	var ja = document.querySelectorAll('[its-locale-filter-list=ja]')
	for (var i=0;i<ja.length;i++) ja[i].style.display='none' 
	document.getElementById('languageStyling').textContent=''

	document.documentElement.lang = 'ja'
	switched = true;
	
	// change boilerplate text
	document.getElementById('abstract-1').textContent = '摘要'
	document.getElementById('h-sotd').textContent = '关于本文档'
	document.getElementById('h-toc').textContent = '内容大纲'
	
	var notes = document.querySelectorAll('.note-title')
	for (i=0;i<notes.length;i++) notes[i].textContent = '注'
	var figcaptions = document.querySelectorAll('figcaption')
	for (i=0;i<figcaptions.length;i++) figcaptions[i].firstChild.textContent = '图 '
	var figrefs = document.querySelectorAll('.fig-ref')
	for (i=0;i<figrefs.length;i++) { 
		if (figrefs[i].firstChild) {
			figrefs[i].replaceChild(document.createTextNode('图'), figrefs[i].firstChild) }
		}
	
	var dts = document.querySelectorAll('dt')
	for (i=0;i<dts.length;i++) {
		switch (dts[i].textContent) {
		case 'This version:': dts[i].textContent = '本版本：'; break;
		case 'Latest published version:': dts[i].textContent = '最新发布草稿：'; break;
		case 'Latest editor\'s draft:': dts[i].textContent = '最新编辑草稿：'; break;
		case 'Editors:': dts[i].textContent = '编辑们：'; break;
		case 'Bug tracker:': dts[i].textContent = '错误跟踪：'; 
			dts[i].nextSibling.nextSibling.innerHTML = '<a href="https://github.com/w3c/clreq/issues">反馈错误</a>（<a href="https://github.com/w3c/clreq/issues">修正中的错误</a>）'; break;
		}
		}
	}
	
	
function switch2en () {
	if (switched) { alert('Refresh the page, then click on this button again.'); return; }
	
	var ja = document.querySelectorAll('[its-locale-filter-list=ja]')
	for (var i=0;i<ja.length;i++) ja[i].style.display='none' 
	document.getElementById('languageStyling').textContent=''
	
	var ja = document.querySelectorAll('[its-locale-filter-list=ja]')
	for (var i=0;i<ja.length;i++) ja[i].style.display='none' 
	document.getElementById('languageStyling').textContent=''

	document.documentElement.lang = 'en'
	switched = true;
	}


function addLangAttrs () {
	// adds lang attributes wherever there is a its-locale-filter-list attribute
	// this is done by js to reduce burden on editors
	// if there's already a lang attribute in the tag, that tag is skipped
	// note that this may still produce temporarily incorrect labelling where text is awaiting translation
	
	var ja = document.querySelectorAll('[its-locale-filter-list=ja]')
	for (i=0;i<ja.length;i++) { if (ja[i].lang == '') { ja[i].lang='ja'} }
	
	var ja = document.querySelectorAll('[its-locale-filter-list=ja]')
	for (i=0;i<ja.length;i++) { if (ja[i].lang == '') { ja[i].lang='ja'} }
	}

document.addEventListener( 'DOMContentLoaded', addLangAttrs );

