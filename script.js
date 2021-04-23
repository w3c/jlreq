var translations = {
	'en': {
		'abstract': 'Abstract',
		'sotd': 'Status of This Document',
		'toc': 'Table of Contents',
		'note': 'Note',
		'fig': 'Figure ',
		'thisversion': 'This version:',
		'latestpublished': 'Latest published version:',
		'editorsdraft': "Latest editor's draft:",
		'previousversion': "Previous version:",
		'author': 'Author:',
		'authors': 'Authors:',
		'editor': "Editor:",
		'editors': "Editors:",
		'formerEditor': "Former editor:",
		'formerEditors': "Former editors:",
		'participate': "Participate:",
		'fileABug': "File a bug",
		'commitHistory': "Commit history",
		'pullRequests': "Pull requests"
		},
	'ja': {
		'abstract': '要約',
		'sotd': 'この文書の位置付け',
		'toc': '目次',
		'note': '注',
		'fig': '図',
		'thisversion': 'このバージョン：',
		'latestpublished': '最新バージョン：',
		'previousversion': "旧バージョン：",
		'editorsdraft': "最新の編集用草案：",
		'author': '著者：',
		'authors': '著者：',
		'editor': "編者：",
		'editors': "編者：",
		'formerEditor': "以前の版の編者：",
		'formerEditors': "以前の版の編者：",
		'participate': "参加方法：",
		'fileABug': "問題報告",
		'commitHistory': "変更履歴",
		'pullRequests': "プルリクエスト"
		},
	}

function switchLang (lang) {
// hides all elements with its-locale-filter-list set to the other language

    var langs = { 'ja': true, 'en':true } // en must come last (for all to work in front matter)
	if (lang==='ja') langs.en = false
	if (lang==='en') langs.ja = false
	
	// show all hidden elements
	var els = document.querySelectorAll('.hidden')
	for (var i=0;i<els.length;i++) els[i].classList.remove('hidden') 

	Object.keys(langs).forEach( function (lang) {
		if (langs[lang]) {
			// set the default language in html tag
			document.documentElement.lang = lang
			
			// change boilerplate text
			document.getElementById('abstract').firstChild.textContent = translations[lang].abstract
			document.getElementById('sotd').firstChild.textContent = translations[lang].sotd
			document.getElementById('table-of-contents').textContent = translations[lang].toc

			changeBoilerplate ('thisversion', lang);
			changeBoilerplate ('latestpublished', lang);
			changeBoilerplate ('editorsdraft', lang);
			changeBoilerplate ('previousversion', lang);
			changeBoilerplate ('editor', lang);
			changeBoilerplate ('editors', lang);
			changeBoilerplate ('formerEditor', lang);
			changeBoilerplate ('formerEditors', lang);
			changeBoilerplate ('participate', lang);
			changeBoilerplate ('fileABug', lang);
			changeBoilerplate ('commitHistory', lang);
			changeBoilerplate ('pullRequests', lang);
			
			// change note and figure titles
			var notes = document.querySelectorAll('.note-title')
			for (let i=0;i<notes.length;i++) notes[i].textContent = translations[lang].note
			var figcaptions = document.querySelectorAll('figcaption')
			for (let i=0;i<figcaptions.length;i++) figcaptions[i].firstChild.textContent = translations[lang].fig
			}
			
		// hide relevant elements
		else {
			els = document.querySelectorAll('[its-locale-filter-list='+lang+']')
			for (var i=0;i<els.length;i++) els[i].classList.add('hidden') 
			}
		})
	}



function setFrontMatterIds (config, document) {
	// adds ids to dt elements in front matter to facilitate language switching
	
	var dts = document.querySelectorAll('dt')
	for (let i=0;i<dts.length;i++) { 
		switch (dts[i].textContent.trim()) {
			case 'This version:': dts[i].id = "thisversion"; break;
			case 'Latest published version:': dts[i].id = "latestpublished"; break;
			case 'Previous version:': dts[i].id = "previousversion"; break;
			case 'Latest editor\'s draft:': dts[i].id = "editorsdraft"; break;
			case 'Authors:': dts[i].id = "authors"; break;
			case 'Editor:': dts[i].id = "editor"; break;
			case 'Editors:': dts[i].id = "editors"; break;
			case 'Former editor:': dts[i].id = "formerEditor"; break;
			case 'Former editors:': dts[i].id = "formerEditors"; break;
			case 'Participate:': dts[i].id = "participate"; break;
			}
		}
	var anchors = document.querySelectorAll('.head a')
	for (let i=0;i<anchors.length;i++) {
		switch (anchors[i].textContent) {
			case 'File a bug': anchors[i].id = "fileABug"; break;
			case 'Commit history': anchors[i].id = "commitHistory"; break;
			case 'Pull requests': anchors[i].id = "pullRequests"; break;
			}
		}
	}


function changeBoilerplate (id, lang, translationsid) {
	if (translationsid === undefined) {
		translationsid = id;
		}
	if (document.getElementById(id)) {
		document.getElementById(id).textContent = translations[lang][translationsid]
	} else {
		console.log("%s does not exist.", id);
		}
	}
	

function addLangAttrs () { console.log("THIS FUNCTION IS NO LONGER NEEDED")
	// adds lang attributes wherever there is a data-lang attribute
	// this is done by js to reduce burden on editors
	// if there's already a lang attribute in the tag, that tag is skipped
	// note that this may still produce temporarily incorrect labelling where text is awaiting translation
	
	var ja = document.querySelectorAll('[its-locale-filter-list=ja]')
	for (i=0;i<ja.length;i++) { if (ja[i].lang == '') { ja[i].lang='ja'} }
	var en = document.querySelectorAll('[its-locale-filter-list=en]')
	for (i=0;i<en.length;i++) { if (en[i].lang == '') { en[i].lang='en'} }
	}


function initialiseLang (config, document) {
	// if a lang= parameter is passed with the URL, show in that language
	var parameters = location.search.split('&')
	parameters[0] = parameters[0].substring(1)
	for (var p=0;p<parameters.length;p++) {  
		var pairs = parameters[p].split('=')
		if (pairs[0] === 'lang') { 
			if (pairs[1]) { 
				switchLang(pairs[1]) 
				} 
			}
		}
	}

//figures = document.querySelectorAll('figure')
//for (let i=0;i<figures.length;i++) console.log(figures[i].id)