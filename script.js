const translations = {
	'abstract': {'en': 'Abstract', 'ja': '要約' },
	'sotd': {'en': 'Status of This Document', 'ja': 'この文書の位置付け' },
	'toc': {'en': 'Table of Contents', 'ja': '目次' },
	'note': {'en': 'Note', 'ja': '注' },
	'fig': {'en': 'Figure ', 'ja': '図' },
	'thisversion': {'en': 'This version:', 'ja': 'このバージョン：' },
	'latestpublished': {'en': 'Latest published version:', 'ja': '最新バージョン：' },
	'editorsdraft': {'en': "Latest editor's draft:", 'ja': "最新の編集用草案：" },
	'previousversion': {'en': "Previous version:", 'ja': "旧バージョン：" },
	'author': {'en': 'Author:', 'ja': '著者：' },
	'authors': {'en': 'Authors:', 'ja': '著者：' },
	'editor': {'en': "Editor:", 'ja': "編者：" },
	'editors': {'en': "Editors:", 'ja': "編者：" },
	'formerEditor': {'en': "Former editor:", 'ja': "以前の版の編者：" },
	'formerEditors': {'en': "Former editors:", 'ja': "以前の版の編者：" },
	'participate': {'en': "Participate:", 'ja': "参加方法：" },
	'fileABug': {'en': "File a bug", 'ja': "問題報告" },
	'commitHistory': {'en': "Commit history", 'ja': "変更履歴" },
	'pullRequests': {'en': "Pull requests", 'ja': "プルリクエスト" }
}

function switchLang (lang) {
	// hides all elements with its-locale-filter-list set to the other language

	// set lang
	var langs = { 'ja': true, 'en':true } // en must come last (for all to work in front matter)
	if (lang === 'ja') langs.en = false
	if (lang === 'en') langs.ja = false

	// show all
	document.querySelectorAll('.hidden').forEach(obj => obj.classList.remove('hidden'));

	Object.keys(langs).forEach(lang => {
		if (langs[lang]) {
			document.documentElement.lang = lang;
			document.getElementById('abstract').firstChild.textContent = translations['abstract'][lang];
			document.getElementById('sotd').firstChild.textContent = translations['sotd'][lang];
			document.getElementById('table-of-contents').textContent = translations['toc'][lang];
      let changeBoilerplate = function (obj) {if (obj.id) {obj.textContent = translations[obj.id][lang] }}
			document.querySelectorAll('dt').forEach(obj => changeBoilerplate(obj))
			document.querySelectorAll('.head a').forEach(obj => changeBoilerplate(obj))
			// change note and figure titles
			document.querySelectorAll('.note-title').forEach(obj => obj.textContent = translations['note'][lang])
			document.querySelectorAll('figcaption').forEach(obj => obj.firstChild.textContent = translations['fig'][lang])
		} else {
			document.querySelectorAll('[its-locale-filter-list='+lang+']').forEach(obj => obj.classList.add('hidden'))
			}
		})

		const url = new URL(document.location);
		const params = url.searchParams;
		if (lang == 'all')
			params.delete('lang');
		else
			params.set('lang', lang);
		history.replaceState(null, null, url.toString());
	}


async function setFrontMatterIds() {
	// first constract reverse hash from en string to id
	let en2id = [];
	Object.keys(translations).forEach(key => en2id[translations[key]['en']] = key);
	let addLangData = function (obj) {
		let ctxt = obj.textContent.trim();
		if (ctxt in en2id) {
			obj.id = en2id[ctxt];
			Object.keys(translations[obj.id]).forEach(langid => obj.dataset['loc_' + langid] = translations[obj.id][langid]);
			delete en2id[ctxt]; // debugout
		}
	};
	document.querySelectorAll('dt').forEach(obj => addLangData(obj))
	document.querySelectorAll('.head a').forEach(obj => addLangData(obj))
	console.log("Items not used:"); // debugout
	Object.keys(en2id).forEach(key => console.log(en2id[key])); // debugout
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


function initialiseLang () {
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
async function initialiseLang_p () { initialiseLang(); }
window.addEventListener('DOMContentLoaded', () => { if (! document.getElementById('js-respec')) {initialiseLang(); }} );

//figures = document.querySelectorAll('figure')
//for (let i=0;i<figures.length;i++) console.log(figures[i].id)