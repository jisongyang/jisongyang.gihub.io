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
    document.title="others/git";
</script>
<br><br>
<!-- ___________________________________________ -->
<!-- ___________________________________________ -->

# git

### git command


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
    git remote -v           查看远端仓库的别名
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

* git 使用ssh拉取github的仓库 ——[CSDN博客](https://blog.csdn.net/felicity294250051/article/details/53606158)
    ```git
    Step1: 新建一个文件夹，打开git bush，输入`ls -al /.~ssh`，查看是否已经有公私密钥
    Step2: 如果没有公私钥，或者C:\Users\用户名\.ssh目录下没有id_rsa和id_rsa.pub文件，就生成公私钥(邮箱需要用双引号引起来)。然后全部默认设置，一直回车就行
        
        ssh-keygen -t rsa -C "github的注册邮箱"

    Step3: 将公私钥添加到github上，在github的setting中找到SSH and GPG keys，添加新的SSH key，复制id_rsa.pub的内容粘贴进去
    Step4: 测试是否添加SSH key成功
        
        ssh -T git@github.com
        # 输入以上命令会有提示：
        The authenticity of host 'github.com (207.97.227.239)' can't be established.
        # RSA key fingerprint is 16:27:ac:a5:76:28:2d:36:63:1b:56:4d:eb:df:a6:48.
        # Are you sure you want to continue connecting (yes/no)?
    Step5: 在新建的文件下，git clone 仓库ssh地址
     ```

* git 提交代码（多人共用，远端冲突）
    ```git
    先本地commit
    git commit -m 'www'

    再拉云端代码(如果有云端修改其他文件，会合并；如果有本地冲突，需要解决)
    git pull origin

    最后再推云端
    git push origin
    ```

* git 强行覆盖本地代码
    ```git
    下载云端代码
    git fetch --all

    覆盖本地代码
    git reset --hard origin

    git pull
    ```

* git退回某个版本
    ```git
    查看提交的版本信息
    git log --graph

    回退到某个版本               
    git reset --hard 目标版本号

    强制推到云端
    git push -f     
    ```
     
#### git error

