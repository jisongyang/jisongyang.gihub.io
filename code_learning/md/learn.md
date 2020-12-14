<div id="navifation" class='headbar'>
    <iframe id='head' align="center" width="100%" height="160" src="md_show.html"  frameborder="no" border="0" marginwidth="0" marginheight="px" scrolling="no" ></iframe>
</div>
<style>
    .headbar{text-align:center}
    .iframe{margin:0 auto;}
</style>
<script>
    var oDiv = document.getElementById('head');
    oDiv.style.position = 'fixed'; oDiv.style.top = '0px'; oDiv.style.left = '0px';
    document.title="markdown/learn";
</script>
<br><br>
<!-- ___________________________________________ -->
<!-- ___________________________________________ -->

# markdown note

* github网页渲染表格，需要在表格前面空一行，否则不一定会渲染成功

* github会自动渲染md文件，只需要访问的时候去掉.md的后缀
    > 比如需要渲染 python/selenium.md，则访问 python/selenium 即可

* 在md中插入图片并放缩，github的渲染不支持``width=80%``这种写法
    ``` html
    <div>
        <img src="news_number.png" style="zoom:51%">
    </div>
    ```