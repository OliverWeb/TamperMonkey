> 利用TamperMonkey + swagger 方便前后端接口联调

### 资料
* [油侯插件](https://openuserjs.org/)
* [编写油猴脚本的一些心得分享](https://blog.csdn.net/XYYxyy55/article/details/91825677)
    *  解除元素的绑定事件
    ```
    // @grant      unsafeWindow
    let $ = unsafeWindow.jQuery
    $(".comicimg").off()
    ```
 * [同步更新到greasyfork](https://juejin.im/post/5cdae471e51d456e396319a4)
