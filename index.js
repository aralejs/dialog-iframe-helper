var Messenger = require('arale-messenger');
var JSON = require('json');

var config = {
  autoFit: true
};

var messenger = new Messenger('iframe1', 'arale-dialog');
messenger.addTarget(window.parent, 'parent');
messenger.listen(function (message) {
  var data = JSON.parse(message);
  // TODO autoFit可配置，暂时先不做，估计需求不大
});

// send message to parent page
function send (obj) {
  messenger.targets['parent'].send(JSON.stringify(obj));
}

function getPageHeight() {
  var D = document;
  if (D.body.scrollHeight && D.documentElement.scrollHeight) {
    return Math.min(D.body.scrollHeight, D.documentElement.scrollHeight);
  } else if (D.documentElement.scrollHeight) {
    return D.documentElement.scrollHeight;
  } else if (D.body.scrollHeight) {
    return D.body.scrollHeight;
  }
}

function close () {
  send({event: 'close'});
}

function syncHeight (h) {
  if (!h) {
    h = getPageHeight();
  }

  h = h.toString().slice(-2) === 'px' ? h : h + 'px';
  send({event: 'syncHeight', height: h});
}

if (config.autoFit) {
  var lastHeight, currentHeight;
  setInterval(function () {
    try {
      currentHeight = getPageHeight();
    } catch (e) {}
    if (currentHeight !== lastHeight) {
      syncHeight(currentHeight);
      lastHeight = currentHeight;
    }
  }, 200);
}

exports.close = close;
exports.syncHeight = syncHeight;
