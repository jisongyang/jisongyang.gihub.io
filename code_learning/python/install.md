
<iframe id='head' align="center" width="100%" height="160" src="python_show.html"  frameborder="no" border="0" marginwidth="0" marginheight="px" scrolling="no" ></iframe>

<style>
    .iframe{margin:0 auto;}
</style>
<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<script>
    var oDiv = document.getElementById('head');
    oDiv.style.position = 'fixed'; oDiv.style.top = '0px'; oDiv.style.left = '0px'; oDiv.style.backgroundColor = 'rgba(255,255,255,0)';
    document.querySelector("body > div > h1 > a").innerHTML=''
    document.title="python/install";

</script>

<br><br>
<!-- ___________________________________________ -->
<!-- ___________________________________________ -->


# python安装和基础环境搭建

1. 安装pycharm【运行python的本地编译器】
   - 下载pycharm    `https://www.jetbrains.com/pycharm/download/#section=windows`
     - 选择Community版本则不需要激活
     - 选择Professional版本可以用学生邮箱激活 `https://www.jetbrains.com/shop/eform/students`
   - 安装pycharm

2. 安装anaconda【python本身和python的各种包】
   - 下载anaconda `https://www.anaconda.com/`
   - 安装anaconda

3. 安装其他需要的包【安装anaconda中没有的包】
   - 在系统菜单搜索打开 `Anaconda Prompt`
   - 使用 `pip install 包名` 安装需要的包

4. 安装浏览器驱动
   - chrome驱动 `http://chromedriver.storage.googleapis.com/index.html`
   - edge驱动 `https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/`