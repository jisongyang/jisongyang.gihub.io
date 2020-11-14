<div id="navifation" class='headbar'>
    <iframe id='head' align="center" width="100%" height="160" src="others_show.html"  frameborder="no" border="0" marginwidth="0" marginheight="px" scrolling="no" ></iframe>
</div>
<style>
    .headbar{text-align:center}
    .iframe{margin:0 auto;}
</style>
<script>
    var oDiv = document.getElementById('head');
    oDiv.style.position = 'fixed'; oDiv.style.top = '0px'; oDiv.style.left = '0px';
</script>

<!-- ___________________________________________ -->
<!-- ___________________________________________ -->


[Toc]

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

# css

* 三角形的构造
    ```css
        /* 将正方形沿着两条对角线分为四个三角形 */
        border: 24px solid #333;
        /* 隐藏三个方向上的三角形，则剩下某一个三角形 */
        border-top-color: transparent;
        border-bottom-color: transparent;
        border-right-color: transparent;
    ```
