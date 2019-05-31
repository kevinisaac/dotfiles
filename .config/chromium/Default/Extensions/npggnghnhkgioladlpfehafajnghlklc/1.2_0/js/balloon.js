$(document).dblclick(function (e) {
	if (!e.target || e.target.tagName == 'INPUT' || e.target.tagName == 'TEXTAREA') {
		return;
	}
	e.d_type = 'dblclick';
	getOptions(main_callback, e);
}).click(function (e) {
	if ($balloon) {
		$balloon.remove();
	}

}).mouseup(function (e) {
	if ($balloon) {
		$balloon.remove();
	}
	
	if (!e.target || e.target.tagName == 'INPUT' || e.target.tagName == 'TEXTAREA') {
		return;
	}
	e.d_type = 'mouseup';
	getOptions(main_callback, e);

}).keyup(function (e) {
	var key = e.keyCode;
	
	if ($balloon && (key == 13 || key == 27 || key == 9)) {
		$balloon.remove();
	}
});


$(window).on('resize', function () {
	if ($balloon) {
		$balloon.remove();
	}
});

var $protocol = (window.location.protocol == 'https:' ? 'https' : 'http');
var spinner = chrome.extension.getURL('images/spinner.gif');
var close = chrome.extension.getURL('images/close.png');
var ga = chrome.extension.getURL('pages/ga.html');
var option_page = chrome.extension.getURL('pages/options.html');
var balloon = 'd_balloon';
var pointer = 'd_pointer';
var defaultOptions = {
	language			:	'english-english',
	font_size			:	13,
	dblclick_checkbox	:	'true',
	dblclick_key		:	'',
	select_checkbox		:	'false',
	select_key			:	''
};
var log = function (path, context)
{
	$('#d_balloon_log_iframe').remove();
	var iframe = $('<iframe id="d_balloon_log_iframe" style="width:1px;height:1px;display:none" src="' + ga + '?' + path + '&referer=' + window.location.href + '&app_name=Chrome EXT" frameborder="0" width="1" height="1" scrolling="no"></iframe>').appendTo(context || 'body:eq(0)').load(function () {
		setTimeout(function () {
			iframe.remove();
		}, 700);
	});
}

var $balloon;
	
(function (ns) {
	var screenPadding = 5,
		headers = {
			'D_VERSION': '1.0',
			'D_FORMAT': 'HTML',
			'D_APP_NAME': 'Dictionarist Chrome Extention'
		};
	
	var host = 'app.dictionarist.com',
		resource = {
			'dictionary': 'dictionary',
		};
	
	var _b = function (param) {
		this.selection = param.selection;
		this.word = $.trim(this.selection.toString());
		this.pointer = $(param.pointer);
		this.balloon = $(param.balloon);
		this.options = param.options;
		this.app = JSON.parse(param.options.app);
		_b.setStaticProp.call(this);
	};
	
	_b.prototype = {
		define: function (selection) {
			this.position();
			this.word = $.trim(selection || this.selection.toString());
			_b.xhr.call(this, {
				selection: this.word,
				success: _b.render,
				error: _b.error
			}, 'dictionary');
		},
		remove: function () {
			this.balloon.remove();
			this.pointer.remove();
			setTimeout(function () {
				delete $balloon;
			});
		},
		position: function (pos) {
			this.show();
			
			var pointerY = balloonY = this.rect ? window.scrollY + this.rect[this.direction] : 20;

			_b.applyPosition.call(this, this.pointer, _b.pointX.call(this, this.pointer), pointerY);
			
			balloonY += (this.direction == 'top' ? -1 : 1) * this.pointerDim.height;
			_b.applyPosition.call(this, this.balloon, _b.pointX.call(this, this.balloon), balloonY);

			this.pointer.removeClass('top bottom').addClass(this.direction);
		},
		show: function () {
			var css = {
				display: '',
				visibility: ''
			};
			this.balloon.css(css);
			this.pointer.css(css);
		},
		hide: function () {
			var css = {
				visibility: 'hidden'
			};
			this.balloon.css(css);
			this.pointer.css(css);
		}
	};
	
	_b.xhr = function (opt, resrc) {
		var that = this;
		
		headers.D_VERSION = this.app.version;
	
		return $.ajax({
			type: 'GET',
			url: $protocol + '://' + host + '/ext-balloon.asp?q=' + encodeURIComponent(opt.selection) + '&lang=' + this.options.language,
			dataType: 'HTML',
			timeout: 35000,
			cache: true,
			headers: headers,
			context: that,
			success: opt.success,
			error: opt.error
		});
		
	};

	_b.setStaticProp = function () {
		var range = this.selection.getRangeAt(0).cloneRange();
		
		this.rect = range.getClientRects()[0];
		this.pointerDim = _b.getDimensions(this.pointer);
		this.direction = _b.direction.call(this);
	};
	
	_b.direction = function () {
		var screen = _b.getScreenDimension(),
			midPoint =	screen.height/2,
			top = midPoint - this.rect ? this.rect.top : 20,
			bottom = midPoint - this.rect ? this.rect.bottom : 20;
		
		return top < 0 ? 'top' : 'bottom';
		
		/*
		var bubbleHeight = this.balloon.outerHeight() + this.pointerDim.height;
		return this.direction = this.rect.top - bubbleHeight < screenPadding ? 'bottom' : 'top';
		*/
	};
	
	_b.getScreenDimension = function () {
		var screen = $(window);
		
		return _b.getDimensions(screen);
	};
	
	_b.pointX = function (elem) {
		var dim = _b.getDimensions(elem),
			screen = _b.getScreenDimension(),
			rect = this.rect,
			origPoint = (rect ? rect.left : 20) + Math.floor((rect ? rect.width : 20)/2),
			elemHalfWidth = dim.width/2,
			
			left = origPoint - elemHalfWidth < screenPadding ? screenPadding + elemHalfWidth : origPoint,
			right = origPoint + elemHalfWidth > screen.width ? screen.width - screenPadding - elemHalfWidth : origPoint;

			return left > (screenPadding + elemHalfWidth) ? right : left;

	};
	
	_b.applyPosition = function (elem, x, y) {
		var dim = _b.getDimensions(elem);
		
		y = this.direction == 'top' ? y - dim.height : y;
		
		elem.css({
			position: 'fixed',
			top: y + 'px',
			left: (x - elem.outerWidth()/2) + 'px'
		});
		
		var pos = elem.position();
		
		elem.css({
			position: 'absolute',
			top: pos.top + 'px',
			left: pos.left + 'px'
		});
		
	};
	
	_b.getDimensions = function (elem) {

		return {
			width: elem.outerWidth(),
			height: elem.outerHeight()
		}
	
	};
	
	
	window[ns] = function (options) {
		return new _b({
			selection: window.getSelection(),
			pointer: $('#d_pointer'),
			balloon: $('#d_balloon'),
			options: options
		})
	};
	
	_b.showTip = function () {
		$('.d_balloon_tip').remove();
		$('<div style="color:red;width:100%" class="d_balloon_tip">Tip: Didn\'t want this translation pop-up? Try setting a trigger key in <a target="_blank" href="' + option_page + '">Extension Options</a>.</div>').insertAfter('#d_balloon_define');	
	};
	
	_b.render = function (resp, status, xhr) {
		var syns = [],
			path = xhr.getResponseHeader('CANONICAL-URL');

		$('#' + balloon + '_define', this.balloon).html(resp + '<iframe style="width:1px;height:1px;display:none" src="' + ga + '?path=' + path + '&referer=' + window.location.href + '&app_name=Chrome EXT" frameborder="0" width="1" height="1" scrolling="no"></iframe>');
	
		$('#speaker1', this.balloon).click(function (e) {
			e.preventDefault();
			e.stopPropagation();
			document.getElementById("snd1").play();
		});
		$('#speaker2', this.balloon).click(function (e) {
			e.preventDefault();
			e.stopPropagation();
			document.getElementById("snd2").play();
		});	

		$('#d_balloon #d_balloon_more #more').on('click', function (e) {
			$balloon.remove();
		});	

		$('#d_balloon ._link').on('click', function (e) {
			$balloon.define($(e.target).text());
		});			
		
		$(resp).remove();
		$('#d_balloon .d_balloon_content *').css('font-size', this.options.font_size + 'px');
			
		this.position();	

		addToHistory(this.word, window.location.href);

	};
	
	_b.error = function (xhr, status, error) {
		var html = error ? 'No dictionary results were found. <iframe style="width:1px;height:1px;display:none" src="' + ga + '?error=' + encodeURIComponent(this.selection) + '&referer=' + window.location.href + '&app_name=Chrome EXT: ' + headers['D_VERSION'] + '" frameborder="0" width="1" height="1" scrolling="no"></iframe>' : 'The server is not accessible at the moment! Please try again later.';
		
		$('#' + balloon + '_define', this.balloon).html(html);
		
		if ( !this.options.dblclick_key && !this.options.select_key ) {
			_b.showTip();
		}
		
		this.position();
	};

})('$b');


function main_callback (opt, e) {
	opt = opt['language'] ? opt : defaultOptions;

	if ( !validateTrigger(opt, e) ) {
		return;
	}

	var selection = $.trim(window.getSelection().toString());

	if ( ! selection || selection == '' || selection.match(/^[\t|\s|\n]+$/) || selection.match(/^\s+$/m)) {
		return false;
	}

	if ( ! opt.dblclick_key && ! opt.select_key) {
		if (selection.length < 2 || selection.match(' ') || selection.match(/[\|\n|\#|\*|\@|\/|\\|\%|\@|\?|\>|\<|\=|\;|\^|\`|\]|\[|\~|\}|\{|\…|\„|\"|\©|\®|\+|\~|\%]/) || selection.length > 48) {
			return false;
		}
	}
	
	$('#' + balloon).remove();
	$('#' + pointer).remove();
	
	$('<div style="display:none" id="d_pointer" class="top">\
			<div id="d_pointer_base"></div>\
		</div>').appendTo('body');
		
	$('<div  style="display:none" id="' + balloon + '">\
		<div id="' + balloon + '_content">\
			<img title="Close" id="' + balloon + '_close" src="' + close + '" />\
			<div id="' + balloon + '_define">\
				<div style="text-align:center">\
					<img style="width:36px" src="' + spinner + '" />\
				</div>\
			</div>\
		</div>\
	</div>').appendTo('body:eq(0)').click(function (e) {
		e.stopPropagation();
	}).dblclick(function (e){
		e.stopPropagation();
		e.stopImmediatePropagation();
		
		var selection = $.trim(window.getSelection().toString());
		if (!selection) {
			return false;
		}
		$('.d_balloon_tip').remove();
		$balloon.define(selection);
	}).click(function (e) {
		e.stopPropagation();
		e.stopImmediatePropagation();
	}).mouseup(function (e) {
		e.stopPropagation();
		e.stopImmediatePropagation();
	});

	$('#' + balloon + '_close').click(function (e) {
		e.stopPropagation();
		e.stopImmediatePropagation();
		e.preventDefault();
		$balloon.remove();
	});
	
	$balloon = $b(opt);
	
	setTimeout(function () {
		$balloon.define()
	}, 5);
	
}

/* Listen for message from the popup */
chrome.runtime.onMessage.addListener(function(msg, sender, response) {
    if ($balloon && msg.from == 'page_action')
	{
		$balloon.remove();
	}
	
	if (msg.subject === "getSelection")
	{
		var text = window.getSelection().toString();
        response({text: text});
    }
});