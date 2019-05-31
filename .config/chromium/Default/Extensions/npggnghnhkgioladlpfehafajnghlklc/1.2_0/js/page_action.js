//var sw = screen.width;
//$('body').css('width', sw - sw/1.41803398875);
$('body').css('width', 370);
var current_term;
var ac_stay;
var language;

chrome.extension.sendMessage({method: 'getOption',}, function (resp) {
language = resp.language;

$(document).on('click', '.ui-autocomplete a', function () {
	$('#search-form').submit();
});

$('#q').autocomplete({
	delay: false,
	source: 'https://app.dictionarist.com/ext-autocomplete.asp?lang=' + language, 
	open: function() {
		$('#title').addClass('ac');
		$('#usage-tip').hide();
		$('.ui-menu li a').each(function(){
			var that = this;
			var re = new RegExp('^(' + $('#q').val() + ')(.*)$',"g");
			var str = $(this).text();
			$(that).html(str.replace(re, "$1<b>$2</b>"));
		});
	
		var menu  = $('.ui-autocomplete');
		var menu_top = parseInt(menu.css('top'));
		menu.css('top', menu_top -1);
		$('#press_enter').css('top', menu.height() + 8).show();
	},
	change: function ()
	{
		$('#search-form').submit();
	},
	close: function ()
	{
		$('#press_enter').hide();
		$('#title').removeClass('ac');
	},
	focus: function()
	{
		//ac_stay = true;
		//setTimeout(function (){$('#search-form').submit()}, 50);
	},
	select: function ()
	{
		$('#search-form').submit();
	}
}).focus();

$('#meaning').scroll(function () {
	$('#title').addClass('box-fix');
	
	if ($(this).scrollTop() == 0)
	{
		$('#title').removeClass('box-fix');
	}
});

$('#search-form').submit(function (e) {

	e.preventDefault();
	var $_term = $('#q').val();
	$term = $.trim($_term).replace(/\s/g, '+');
	
	if (!ac_stay)
	{
		$('#q').autocomplete( "close" );
	}
	
	if (!$term || current_term == $term)
	{
		return;
	}
	
	if (!ac_stay)
	{
		$('#q').autocomplete( "disable" );
	}

	$('title').removeClass('box-fix');
	$('#lookup-status').text('Searching...').show();
	$('#usage-tip').hide();

	$.ajax({
		url: 'https://app.dictionarist.com/ext-query.asp?q=' + encodeURIComponent($term) + '&lang=' + language,
		success: function (data)
		{
			current_term = $term;
			$('#press_enter').remove();
			$('#meaning').scrollTop(0);
			var dat = $.parseJSON(data);
		
			if (dat.translation){
				var title = dat.word.split('+').join(' ');
				if (dat.pronunciation){
					title += '<span id="speaker" class="play"></span>'
				}
				$('#title').html(title).show();
				$('#meaning').html(dat.translation).show();
			}else{
				$('#title').html("<h3>No records found for: <i>" + $_term + "</i>.</h3>").show();
				$('#meaning').html(" ").hide();
			}
			
			if (dat.pronunciation){
				$('<audio id="snd" preload="none"><source src="https://app.dictionarist.com' + dat.pronunciation + '.mp3" type="audio/mpeg"></audio>').appendTo('#meaning');
				document.getElementById("speaker").addEventListener("click", playaudio);
			}
			
			var ex='', o='', t='';
			if(dat.example){
				for (var i = 0; i < dat.example.length; i++) {
					o = '<div class="o">' + dat.example[i].o + '</div>';
					t = '<div class="t">' + dat.example[i].t + '</div>';
					ex += o+t;
				}
				$('#example').html('<div class="title">Examples</div>' + ex + '<div><a target="_blank" href="https://www.dictionarist.com/' + language + '/' + current_term + '">More examples &raquo;</a></div>').show();
			}else{
				$('#example').html(" ").hide();
			}

		},
		error: function ()
		{
			$('#title').html("<h3>No results found for: <i>" + $_term + "</i>.</h3>").show();
			$('#meaning').html(" ").hide();
			$('#example').html(" ").hide();
		},
		complete: function ()
		{
			x$('#lookup-status').hide();
			ac_stay = false;
			$('#q').autocomplete( "enable" );
		}
	});
});

function defaultSearch (obj)
{
	console.log(obj);
	var txt = $.trim(obj.text);

	if (txt)
	{
		$('#q').val(txt);
		$('#search-form').submit();
	}
}

function playaudio() {
	document.getElementById("snd").play();
}
	
chrome.tabs.query({
    active: true,    
    lastFocusedWindow: true
}, function(array_of_Tabs) {
    var tab = array_of_Tabs[0];
	chrome.tabs.sendMessage(tab.id,  {from:'page_action', subject: "getSelection"}, defaultSearch);
});

});