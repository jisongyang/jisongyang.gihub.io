<iframe id='head' align="center" width="100%" height="100" src="others_show.html"  frameborder="no" border="0" marginwidth="0" marginheight="px" scrolling="no" ></iframe>

<style>
    .iframe{margin:0 auto;}
</style>
<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<script>
    var oDiv = document.getElementById('head');
    oDiv.style.position = 'fixed'; oDiv.style.top = '0px'; oDiv.style.left = '0px'; oDiv.style.backgroundColor = 'rgba(255,255,255,0)';
    document.querySelector("body > div > h1 > a").innerHTML=''
    document.title="others/html";
</script>
<br><br>
<!-- ___________________________________________ -->
<!-- ___________________________________________ -->


# html

* 在md中引入另一个文件中的一堆html代码（为了美观）
    ``` html
        <!-- 使用<iframe>导入others_show.html -->
        <div id="navifation" class='headbar'>
            <iframe align="center" width="100%" height="170" src="others_show.html"  frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>
        </div>
        
        <!-- 为了使这部分居中显示，需要设置style -->
        <style>
        .headbar{text-align:center;}
        .iframe{margin:0 auto;}
        </style>
    ```

* \<iframe>中的链接全局跳转，整个界面跳转
    ```html
        <!-- 在<iframe>导入的html（比如上述的others_show.html）中的<head>添加target参数 -->
        <!-- 在新的标签页跳转 -->
        <head>
            <base target="_blank">
        </head>
        <!-- 在当前标签页跳转 -->
        <head>
            <base target="_parent">
        </head>
    ```

