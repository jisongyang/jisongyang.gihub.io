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

# git

#### git command


* 新建仓库到上传github
    ```git
    在项目文件夹下打开 git bash
    git init                初始化,本地仓库名字为master
    git status              查看当前文件情况
    git add -A              添加所有文件到缓存区
    git commit -m 'init'    提交所有文件到本地仓库

    给远端仓库创建别名，这里为origin
    git remote add origin github仓库地址
    
    将本地仓库推送到远端仓库
    git push origin master

    ```

* git add
    ```git
    git add -A  提交所有变化
    git add -u  提交被修改(modified)和被删除(deleted)文件，不包括新文件(new)
    git add .   提交新文件(new)和被修改(modified)文件，不包括被删除(deleted)文件
    ```

* git remote
    ```git
    git remote -V           查看远端仓库的别名
    git remote rm origin    删除别名origin
    git remote rename a b   将别名a改为b
    ```

* git 忽略提交文件
    ```git
        touch .gitignore    创建gitignore文件
         
        在gitignore文件添加指定的忽略文件（可以使用vim编辑）
        target              忽略这个target目录
        angular.json        忽略这个angular.json文件
        log/*               忽略log下的所有文件
        css/*.css           忽略css目录下的.css文件
    ```

#### git error

