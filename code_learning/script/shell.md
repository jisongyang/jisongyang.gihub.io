
<iframe id='head' align="center" width="100%" height="100" src="script_show.html"  frameborder="no" border="0" marginwidth="0" marginheight="px" scrolling="no" ></iframe>

<style>
    .iframe{margin:0 auto;}
</style>
<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<script>
    var oDiv = document.getElementById('head');
    oDiv.style.position = 'fixed'; oDiv.style.top = '0px'; oDiv.style.left = '0px'; oDiv.style.backgroundColor = 'rgba(255,255,255,0)';
    document.querySelector("body > div > h1 > a").innerHTML=''
    document.title="script/shell";
</script>
<br><br>
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