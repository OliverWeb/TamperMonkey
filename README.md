> 利用TamperMonkey + swagger 方便前后端接口联调





### 改进 
    由于需要支付 5 美元的开发人员注册费，开发浏览器插件就先呵呵呵了
  * [开发浏览器插件](https://blog.csdn.net/weixin_34128411/article/details/93183324)
### 资料
* [油侯插件](https://openuserjs.org/)
* [同步到greasyfork](https://juejin.im/post/5cdae471e51d456e396319a4)
* [编写油猴脚本的一些心得分享](https://blog.csdn.net/XYYxyy55/article/details/91825677)
    *  解除元素的绑定事件
    ```
    // @grant      unsafeWindow
    let $ = unsafeWindow.jQuery
    $(".comicimg").off()
    ```


[加载本地文件](https://blog.csdn.net/weixin_30568591/article/details/95925488)
[css动态加载]https://blog.csdn.net/pangji0417/article/details/94029462
[bootstrap](https://getbootstrap.net/docs/components/navbar/)

   // document.getElementsByTagName('head')[0].insertAdjacentHTML('beforeBegin',`<link href="file:///D:\\tools\\TamperMonkey\\tampervue\\dist\\static\\css\\app.698b5943.css" rel=preload as=style>`);
    /* 加载bootstrap */
    // $.getScript('https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js',function(){
    //     console.log('bootstrap加载完成')
    // });

    function createCsss (ulr) {
        let link = document.createElement("link");
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = url;
        document.getElementsByName('body').insertAdjacentHTML('beforeBegin',`<div>张乐</div>`);
    }
    
    
[拖拽](http://www.aijquery.cn/html/chajian/117.html)

//参数说明：
$(element).myDrag({    
    parent:'parent', //定义拖动不能超出的外框,拖动范围    
    randomPosition:true, //初始化随机位置    
    direction:'all', //方向    
    handler:false, //把手    
    dragStart:function(x,y){}, //拖动开始 x,y为当前坐标    
    dragEnd:function(x,y){}, //拖动停止 x,y为当前坐标    
    dragMove:function(x,y){} //拖动进行中 x,y为当前坐标    
});
http://www.aijquery.cn/html/chajian/117.html
