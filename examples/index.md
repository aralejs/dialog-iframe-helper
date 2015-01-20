# Dialog-iframe-helper Demo

---

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
