<iframe id='head' align="center" width="100%" height="100" src="others_show.html"  frameborder="no" border="0" marginwidth="0" marginheight="px" scrolling="no" ></iframe>

<style>
    .iframe{margin:0 auto;}
</style>
<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<script>
    var oDiv = document.getElementById('head');
    oDiv.style.position = 'fixed'; oDiv.style.top = '0px'; oDiv.style.left = '0px'; oDiv.style.backgroundColor = 'rgba(255,255,255,0)';
    document.querySelector("body > div > h1 > a").innerHTML=''
    document.title="others/css";
</script>
<br><br>
<!-- ___________________________________________ -->
<!-- ___________________________________________ -->



# css


* 三角形的构造
    ```css
        /* 将正方形沿着两条对角线分为四个三角形 */
        /* 隐藏三个方向上的三角形，则剩下某一个三角形 */
        border: 24px solid #333;
        border-top-color: transparent;
        border-bottom-color: transparent;
        border-right-color: transparent;

        /* 左上角三角形*/
        width: 0;
        height: 0;
        border-top: 100px solid red;
        border-right: 100px solid transparent;

        /*向上上三角形*/
        width: 0;
        height: 0;
        border-left: 50px solid transparent;
        border-right: 50px solid transparent;
        border-bottom: 100px solid red;
    ```

* 多个按钮，最上层显示，分散对齐，垂直有滚动条
    ```css
        .src_button{
            text-align: justify;
            text-align-last: justify;
            z-index: 9999;
			top: 20px;
            width: 15%;
            height: 800px;
            overflow-y: auto;
        }
    ```

* 分散对齐居中
    ```css
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    ```
* 纵向进度条，如果当前元素是百分比高度，则需要再设置当前设备窗口高度的百分比
    ```css
        height: 98%;
        overflow-y: auto;
        max-height: calc(20vh);
    ```

