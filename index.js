var Messenger = require('arale-messenger');
var debug = require('debug')('dialog-iframe-helper');
var $ = require();

var config = {
  autoFit: true
};

var messenger = new Messenger('iframe1', 'arale-dialog');
if (window.parent !== window) {
  messenger.addTarget(window.parent, 'parent');
  messenger.listen(function (message) {
    var data = JSON.parse(message);
    // TODO autoFit可配置，暂时先不做，估计需求不大
  });
}

// send message to parent page
function send (obj) {
  if (messenger.targets['parent']) {
    messenger.targets['parent'].send(JSON.stringify(obj));
  }
}

function close () {
  send({event: 'close'});
}

function syncHeight (h) {
  if (!h) {
    h = $(document).height();
  }

  h = h.toString().slice(-2) === 'px' ? h : h + 'px';
  send({event: 'syncHeight', height: h});
}

function isInIframe () {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
}

if (config.autoFit && isInIframe()) {
  var lastHeight, currentHeight;
  setInterval(function () {
    try {
      currentHeight = $(document).height();
    } catch (e) {}
    if (currentHeight !== lastHeight) {
      debug('currentHeight=' + currentHeight + ', lastHeight=' + lastHeight + ' => sync');
      syncHeight(currentHeight);
      lastHeight = currentHeight;
    }
  }, 200);
}

exports.close = close;
exports.syncHeight = syncHeight;
