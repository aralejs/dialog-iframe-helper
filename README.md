# arale-dialog-iframe-helper [![spm version](http://spmjs.io/badge/arale-dialog-iframe-helper)](http://spmjs.io/package/arale-dialog-iframe-helper)

---

当使用Dialog嵌入跨域iframe时，在iframe内使用这个组件自动同步高度，并且提供API从内部关闭浮层、设置浮层高度。

内部使用[arale-messenger](http://spmjs.io/docs/arale-messenger/)进行跨域通信，当需要调整页面高度或者关闭浮层时，向父页面发送消息，父页面中的Dialog组件接受到消息后进行处理。

## Install

```
$ spm install arale-dialog-iframe-helper --save
```

## API

### `.close()`

从iframe内部关闭浮层。

### `.syncHeight(height)`

从iframe内部设置浮层高度。一般不需要调用这个方法，内部有timer自动同步高度。

## Usage

```js
var helper = require('arale-dialog-iframe-helper');

$('#close').click(function () {
  helper.close();
});

$('#syncHeight').click(function () {
  helper.syncHeight(300);
});

```
