// ==UserScript==
// @name         Swagger  API BTN
// @namespace    http://tampermonkey.net/
// @version      1.0.1
// @description  try to take over the world!
// @author       Oliver_web@163.com
// @match        http://*/*
// @include      /^http?:\/\/(\w+\.)?swagger-ui.html/
// @grant        none
// ==/UserScript==
var status = 1;
(function(){
    'use strict';
    $('#swagger-ui').on('click','.opblock-summary-method',function (e) {
        e.stopPropagation()
        // 方法名
        let method = $(e.currentTarget).text()
        // 当前api
        let api =  $(e.currentTarget).next().find('span').text()
        console.log('点击了')
        if (status === 1) {
            copyText('',`this.$service('${method}', '/SERVICE-SYSTEM${api}', params)`)
        }else if(status === 2){
            console.log()
            copyText('',`this.$service('${method}', '/SERVICE-SYSTEM${api}', params)`)
        }else if(status === 3){
            copyText('',`this.$service('${method}', '/SERVICE-SYSTEM${api}', params)`)
        }else {
            console.log('\x1B[32m%s\x1B[0m', '未设置，可能有异常')
        }
    })
    $('body').on('click','#dragEle',function (e) {
        let val = $(e.target).val()
        localStorage.setItem("checkValue",val)

    })
    setTimeout(() => {
        insetHtml()
    },1000)
    function insetHtml(){
        document.getElementById('swagger-ui').insertAdjacentHTML('beforeBegin',`<div style="width: 100%;height: 100%;position: fixed;top: 0;left: 0;bottom: 0;right: 0"><div style="height: 100%;width: 100%">
<div id="dragEle" style="width: 268px;height: 32px;line-height:32px;border-radius: 8px;color: #fff;background-color:#409eff;position: fixed;top: 13px;left: 160px">
\t<input class="apicheckbox" name="AdPrintMode" type="radio" value="1"/>JSON字段
\t<input class="apicheckbox" name="AdPrintMode" type="radio" value="2"/>自动生成
\t<input class="apicheckbox" name="AdPrintMode" type="radio" value="3"/>simple
</div>
</div></div>`);
        // 设置拖拽元素，自由拖动
        $('#dragEle').myDrag({
            parent:'parent', //定义拖动不能超出的外框,拖动范围    
            randomPosition:false, //初始化随机位置    
            direction:'all', //方向    
            handler:false, //把手    
            dragStart:function(x,y){}, //拖动开始 x,y为当前坐标    
            dragEnd:function(x,y){}, //拖动停止 x,y为当前坐标    
            dragMove:function(x,y){} //拖动进行中 x,y为当前坐标    
        });
        let checkValue = localStorage.getItem("checkValue")
        if (checkValue) {
            $('.apicheckbox').eq(checkValue-1).attr("checked", "checked");
            status = Number(checkValue);
        }
    }
    /**
     * 点击事件
     */
    /**
     * 粘贴文本函数
     * @param id
     * @param attr
     */
    function copyText (id, attr) {
        let target = null;
        if (attr) {
            target = document.createElement('div');
            target.id = 'tempTarget';
            target.style.opacity = '0';
            if (id) {
                let curNode = document.querySelector('#' + id);
                target.innerText = curNode[attr];
            } else {
                target.innerText = attr;
            }
            document.body.appendChild(target);
        } else {
            target = document.querySelector('#' + id);
        }

        try {
            let range = document.createRange();
            range.selectNode(target);
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);
            document.execCommand('copy');
            window.getSelection().removeAllRanges();
            console.log('复制成功')
        } catch (e) {
            console.log('\x1B[31m%s\x1B[0m', '复制失败')
        }

        if (attr) {
            // remove temp target
            target.parentElement.removeChild(target);
        }
    }
})()
