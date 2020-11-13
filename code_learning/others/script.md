<div id="navifation" class='headbar'>
    <iframe align="center" width="100%" height="170" src="others_show.html"  frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>
</div>
<style>
    .headbar{text-align:center;}
    .iframe{margin:0 auto;}
</style>

<!-- ___________________________________________ -->
<!-- ___________________________________________ -->


# shell

* git提交文件的三条命令合并成脚本 ``gitcommit.sh``

```shell
    #!/bin/bash
    # 使用 ./gitcommit [commit message] [branch name] 调用
    git status
    
    read -r -p "是否继续提交? [Y/n] " input
    
    case $input in
        [yY][eE][sS]|[yY])
            echo "继续提交"
            git add -A
            git commit -m $1
            git push origin $2
                        exit 1
            ;;

        [nN][oO]|[nN])
            echo "中断提交"
            exit 1
                ;;

        *)
        echo "输入错误，请重新输入"
        ;;
    esac

```
