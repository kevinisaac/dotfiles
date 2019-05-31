(function() {
  var err, insertInstalledFlagDiv;

  insertInstalledFlagDiv = function(mp_id) {
    var dropoff, isInstalledNode;
    isInstalledNode = document.createElement('div');
    isInstalledNode.setAttribute('id', 'pnt-extension-is-installed');
    if (mp_id) {
      isInstalledNode.setAttribute('mp-id', mp_id);
    }
    dropoff = document.getElementById('pnt-extension-dropoff');
    if (dropoff) {
      dropoff.appendChild(isInstalledNode);
    }
  };

  try {
    chrome.runtime.sendMessage({
      request: 'query:mixpanelId'
    }, insertInstalledFlagDiv);
  } catch (_error) {
    err = _error;
    insertInstalledFlagDiv();
  }

  switch (window.location.pathname) {
    case '/settings':
      chrome.extension.sendMessage({
        request: 'open:settings'
      });
      break;
    case '/friends':
      chrome.extension.sendMessage({
        request: 'open:friends'
      });
  }

}).call(this);
