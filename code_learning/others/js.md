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
<br><br>
<!-- ___________________________________________ -->
<!-- ___________________________________________ -->

# js

* 固定div在页面顶端
    ```js
        <script>
            var oDiv = document.getElementById('head');
            oDiv.style.position = 'fixed'; oDiv.style.top = '0px'; oDiv.style.left = '0px';
        </script>
    ```

* 设置html访问密码
    ```js
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