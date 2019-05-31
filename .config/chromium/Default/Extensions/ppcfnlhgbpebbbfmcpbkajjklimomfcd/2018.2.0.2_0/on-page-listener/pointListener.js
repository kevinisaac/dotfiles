(function() {
  var hasHighlight, hotkeys, injectPoint, isInput, loadUserData, onKeyPress, onMouseUp, removeListeners, selection;

  hotkeys = ['@', '#'];

  selection = null;

  isInput = function(el) {
    if (el.isContentEditable) {
      return true;
    }
    return ['input', 'textarea', 'select'].indexOf(el.nodeName.toLowerCase()) > -1;
  };

  hasHighlight = function() {
    return (selection != null) && !selection.isCollapsed;
  };

  loadUserData = function() {
    chrome.storage.sync.get(['pnt_user', 'pnt_token'], function(stored) {
      var user;
      if ((stored.pnt_user != null) && (stored.pnt_token != null)) {
        user = stored.pnt_user;
        user.authorization = stored.pnt_token;
        return window.PNT_USER = user;
      }
    });
    return chrome.storage.local.get('pnt_friends', function(stored) {
      return window.PNT_FRIENDS = stored.pnt_friends;
    });
  };

  injectPoint = function(hotkey) {
    window.PNT_START_POINT_VIEW = {
      hotkey: hotkey
    };
    chrome.runtime.sendMessage({
      request: 'inject:contentScript',
      details: {
        action: 'Hotkey',
        hotkey: hotkey,
        onHighlight: window.PNT_INIT_HIGHLIGHT != null
      }
    });
    return loadUserData();
  };

  onMouseUp = function() {
    if (window.PNT_CONTENT_SCRIPT != null) {
      return removeListeners();
    }
    return selection = document.getSelection();
  };

  onKeyPress = function(e) {
    var key;
    if (window.PNT_CONTENT_SCRIPT != null) {
      return removeListeners();
    }
    key = String.fromCharCode(e.which);
    if (!(hotkeys.indexOf(key) > -1)) {
      return;
    }
    if (isInput(document.activeElement)) {
      return;
    }
    document.removeEventListener('keypress', onKeyPress, true);
    document.removeEventListener('mouseup', onMouseUp, true);
    if (window.PNT_ACTIVE_POINT_VIEWS != null) {
      return;
    }
    window.PNT_INIT_HIGHLIGHT = hasHighlight() ? selection : null;
    e.preventDefault();
    e.stopPropagation();
    return injectPoint(key);
  };

  removeListeners = function() {
    document.removeEventListener('keypress', onKeyPress, true);
    return document.removeEventListener('mouseup', onMouseUp, true);
  };

  document.addEventListener('keypress', onKeyPress, true);

  document.addEventListener('mouseup', onMouseUp, true);

}).call(this);
