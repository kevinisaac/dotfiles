var db = new Dexie('dictionarist');

// Define a schema
db.version(1).stores({
	history: '++id, *word, *timestamp'
});

// Open the database
db.open().catch(function(error) {
	//console.error(error);
	db.history = {
		add: function (){}
	};
});

function refreshHistoryCount () {
	db.history.count(function (count) {
		var disabled = false;
		
		$('#history_count').text(count);
		
		if (count == 0) {
			disabled = true;
		}
		
		$('#downloadHistory, #clearHistory').attr('disabled', disabled);
	});
}

refreshHistoryCount();


if (!localStorage.language) {
	var lang = navigator.language.toLowerCase(), langPart = lang.split('-');
	var language;
	
	  switch (langPart[0]) {
		case "zh": language = "english-chinese"; break;
		case "nl": language = "english-dutch"; break;
		case "fr": language = "english-french"; break;
		case "de": language = "english-german"; break;
		case "el": language = "english-greek"; break;
		case "it": language = "english-italian"; break;
		case "ja": language = "english-japanese"; break;
		case "ko": language = "english-korean"; break;		
		case "pt": language = "english-portuguese"; break;	
		case "ru": language = "english-russian"; break;	
		case "es": language = "english-spanish"; break;	
		case "tr": language = "english-turkish"; break;	
		default:
			language = 'english-english';
	}


	var value = {
		language			:	language,
		font_size			:	13,
		dblclick_checkbox	:	true,
		dblclick_key		:	'',
		select_checkbox		:	false,
		select_key			:	''
	};
	
	for (var key in value) {
		localStorage[key] = value[key];
	}
}

$("#downloadHistory").click(function (e) {
	e.preventDefault();
	
	var tsv = '"Word","Count","URL","Last lookup date\/time"\n';
	var link = $("#download-history-link")[0];

	db.history.each((row) => {
		tsv += '"' + row.word + '","';
		tsv += row.count + '","';
		tsv += 'https://www.dictionarist.com/' + row.word.replace(/\s+/g, '+') + '","';
		tsv += (new Date(row.date)).toLocaleString() + '"\n';
	}).then(() => {		
		link.href = window.URL.createObjectURL(new Blob([tsv], {
			type: "text/plain"
		}));

		mouseEvent = document.createEvent("MouseEvents");
		mouseEvent.initEvent("click", true, true);
		link.dispatchEvent(mouseEvent);
	});
});

$('#clearHistory').click(function (e) {
	e.preventDefault();

	db.history.clear();
	refreshHistoryCount();
});

var reset = $('[type=reset]').click(function (e) {
	e.preventDefault();
	$('button[type=submit],button[type=reset]').attr('disabled', true);
	
	for (var name in localStorage)
	{
		var elem = $('[name="' + name + '"]'),
			val = localStorage[name];
		
		if (elem[0] && elem[0].type == 'checkbox')
		{
			val = val === 'true' ? true : false;
			elem.prop('checked', val);
		}
		else if (elem[0])
		{
			elem.val(val);
		}
	}
}).click();

$('form').submit(function (e) {
	e.preventDefault();
	
	localStorage.setItem("history_checkbox", false);
	
	for (var name in localStorage) {
		var elem = $('[name="' + name + '"]'),
			val = elem.val();
		
		if (elem[0] && elem[0].type == 'checkbox') {
			val = elem[0].checked ? true : false;

		}
		
		if (elem[0]) {
			localStorage[name] = val;
		}
		
	}
	
	
	reset.click();
	
	chrome.extension.sendMessage({
		method: 'update_app_detail',
	});
	
});

$('#select_checkbox, #dblclick_checkbox').change(function () {
	if (this.type == 'checkbox') {
		var keyGroup = $('.' + this.id);
		
		$('select', keyGroup).attr('disabled', true);
		keyGroup.addClass('disabled');
		
		if (this.checked) {
			keyGroup.removeClass('disabled');
			$('select', keyGroup).attr('disabled', false);
		}
		
	}
}).change();

$('input, select').change(function () {
	$('button').attr('disabled', false);	
});

var app = JSON.parse(localStorage['app']);
$('#option_version').text(app.version);