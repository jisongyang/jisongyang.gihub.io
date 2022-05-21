
<iframe id='head' align="center" width="100%" height="100" src="script_show.html"  frameborder="no" border="0" marginwidth="0" marginheight="px" scrolling="no" ></iframe>

<style>
    .iframe{margin:0 auto;}
</style>
<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<script>
    var oDiv = document.getElementById('head');
    oDiv.style.position = 'fixed'; oDiv.style.top = '0px'; oDiv.style.left = '0px'; oDiv.style.backgroundColor = 'rgba(255,255,255,0)';
    document.querySelector("body > div > h1 > a").innerHTML=''
    document.title="script/front-end";
</script>
<br><br>
<!-- ___________________________________________ -->
<!-- ___________________________________________ -->



# front-end

* 将多个页面基于iframe放在一个页面显示（一个按钮对应一个界面，自行添加）
```html
    <!DOCTYPE html>
    <html>
    <body>

        <div id="navifation" class='headbar'>
            <iframe id='head' align="right" width="80%" height="800" src=""  frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" name="Frame1">
            </iframe>
            <div class='src_button'>
                <button now_src="PX20210524650004.html" onclick="tonclick(this)">PX20210524650004</button> 
            </div>
        </div>


        <style>
            .headbar{text-align:center}
            .iframe{margin:0 auto;}

            .src_button{
                text-align: justify;
                text-align-last: justify;
                z-index: 9999;
                top: 20px;
                width: 15%;
                height: 800px;
                overflow-y: auto;
            }

            button{
                width: 63px;
                justify-content: center;
                align-items: center;
            }
            .active{
                color:red;
            }

        </style>
        <script>
            function tonclick(now_src){
                        document.getElementById('head').src=now_src.getAttribute("now_src");
                }
        </script>

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

    </body>
    </html> 
```