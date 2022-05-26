<iframe id='head' align="center" width="100%" height="100" src="others_show.html"  frameborder="no" border="0" marginwidth="0" marginheight="px" scrolling="no" ></iframe>

<style>
    .iframe{margin:0 auto;}
</style>
<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<script>
    var oDiv = document.getElementById('head');
    oDiv.style.position = 'fixed'; oDiv.style.top = '0px'; oDiv.style.left = '0px'; oDiv.style.backgroundColor = 'rgba(255,255,255,0)';
    document.querySelector("body > div > h1 > a").innerHTML=''
    document.title="others/js";
</script>
<br><br>
<!-- ___________________________________________ -->
<!-- ___________________________________________ -->

# js

* 固定div在页面顶端
    ``` html
        <script>
            var oDiv=document.getElementById('head');
            oDiv.style.position='fixed'; oDiv.style.top='0px'; oDiv.style.left='0px';
        </script>
    ```

* 设置html访问密码
    ``` html
        <script>
            var password="";
            password=prompt('请输入密码 (本网站需输入密码才可进入):','');
            if (password != 'mucaogong')
                {
                    alert("密码不正确,无法进入本站!!");
                    window.opener=null;
                    window.close();
                } 
        </script>
    ```

* 设置网页标题
    ``` html
        <script>
            document.title="others/js";
        </script>
    ```

* 设置多个按钮鼠标点击变色，同时点击修改frame的src
    ``` html
        <iframe id='head' align="right" width="80%" height="800" src=""  frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" name="Frame1">
        </iframe>

        <style>
            .active{
                color:red;
            }
        </style>

        <script type="text/javascript">
            var buttons=document.getElementsByTagName("button");
            var l=buttons.length;
            for(var i=0;i<l;i++){
                buttons[i].onclick=function(){
                    document.getElementById('head').src=this.getAttribute("now_src");
                    for(var j=0;j<l;j++){
                        if(this==buttons[j]){
                            this.className="active";
                        }else{
                            buttons[j].className="";
                        }
        
                    }
                }
            }
        </script>
    ```
* 设置hover,鼠标放上去执行函数，离开也执行函数
    ``` js
        $(function(){
            //hover参数可以传入两个函数 -->
            //<!-- 鼠标放上显示subbox并设置submenu的背景色 -->
            //<!-- 鼠标移开隐藏subbox并设置submenu的背景色
            $('.ribbon submenu').hover(
                function(){
                    $('.subbox').css({'display':'flex'});
                    $('.ribbon submenu').css({'background':'#666699'});
                },
                function(){
                    $('.subbox').css({'display':'none'});
                    $('.ribbon submenu').css({'background':'#495057'});
                },
            );

            $('.subbox').hover(
                function(){
                    $('.subbox').css({'display':'flex'});
                    $('.ribbon submenu').css({'background':'#666699'});
                },
                function(){
                    $('.subbox').css({'display':'none'});
                    $('.ribbon submenu').css({'background':'#495057'});
                });

            $('.ribbon submenu').hover(
                function(){reinitIframe();},
                function(){recoverframe();},
            );

            $('.subbox').hover(
                function(){reinitIframe();},
                function(){recoverframe();},
            );

        });

    ```

* 插入iframe然后设置
    ``` html
        <iframe id='head' align="center" width="100%" height="100" src="others_show.html"  frameborder="no" border="0" marginwidth="0" marginheight="px" scrolling="no" ></iframe>

        <style>
            .iframe{margin:0 auto;}
        </style>

        <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
        <script>
            //找到frame
            var oDiv = document.getElementById('head');
            // 设置frame的属性
            oDiv.style.position='fixed'; 
            oDiv.style.top='0px'; 
            oDiv.style.left='0px'; 
            oDiv.style.backgroundColor='rgba(255,255,255,0)';
            // 根据js路径定位元素并改变值
            document.querySelector("body > div > h1 > a").innerHTML=''
            // 设置网页标题
            document.title="others/html";
        </script>
    ```


* 自动调整frame的高度
    ``` js
        // 根据当前frame中元素高度调整frame高度
        function reinitIframe(){
            var iframe = window.parent.document.getElementById("head");
            try{
                var bHeight = iframe.contentWindow.document.body.scrollHeight;
                var dHeight = iframe.contentWindow.document.documentElement.scrollHeight;
                var height = Math.max(bHeight, dHeight);
                iframe.height = height;
                // console.log(height);
            }
            catch (ex){}
            }
        //直接指定frame的高度
        function recoverframe(){
            // 在frame内部定位frame本身
            var iframe = window.parent.document.getElementById("head");
            try{
                iframe.height = 100;
                console.log(height);
            }
            catch (ex){}
            }
    ```

* 生成连续数字数组
    ``` html
        <script>
            var lis = Array.from(new Array(end + 1).keys()).slice(start);
        </script>
    ``` 

* 避免加载中文乱码
    ``` js
        $(function () {
            $.ajaxSetup({
                'beforeSend': function (xhr) {
                    xhr.overrideMimeType('text/plain; charset=gb2312');
                }
            });
        });
    ```
