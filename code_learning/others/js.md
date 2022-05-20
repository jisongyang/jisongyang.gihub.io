<iframe id='head' align="center" width="100%" height="160" src="others_show.html"  frameborder="no" border="0" marginwidth="0" marginheight="px" scrolling="no" ></iframe>

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