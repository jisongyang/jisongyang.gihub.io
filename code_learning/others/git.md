

<head>
    <title>git</title>
</head>


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



#### git error