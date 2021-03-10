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

# linux

### linux command

* 查看CUDA版本
``` linux
    cat  /usr/local/cuda/version.txt 
```

* 复制，剪切
``` linux
    cp -rf path1 path2  # 复制path1到path2
    mv -rf path1 path2  # 剪切path1到path2
    mv -rf file1 file2  # 重命名file1为file2
    rm -rf path         # 删除path下的所有文件
```

### conda command
* conda虚拟环境
``` linux
    conda info -e                       # 查看已有虚拟环境
    conda create -n name python=3.8     # 创建虚拟环境
    source activate name                # 激活虚拟环境
    source deactivate                   # 退出当前环境
```