# Dialog-iframe-helper Demo

---

这个Demo页面用于展示在浮层中，请移步到[Dialog组件的Demo](http://spmjs.io/docs/arale-dialog/examples/cross-domain-iframe.html)中查看。

<button id="close">内部关闭按钮</button>
<button id="syncHeight">手动设置高度为400px</button>

## Normal usage

````javascript
seajs.use(['index', 'jquery'], function(helper, $) {

  $('#close').click(function () {
    helper.close();
  });

  $('#syncHeight').click(function () {
    helper.syncHeight(300);
  });
});
````
