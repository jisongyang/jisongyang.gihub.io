
<iframe id='head' align="center" width="100%" height="100" src="python_show.html"  frameborder="no" border="0" marginwidth="0" marginheight="px" scrolling="no" ></iframe>

<style>
    .iframe{margin:0 auto;}
</style>
<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<script>
    var oDiv = document.getElementById('head');
    oDiv.style.position = 'fixed'; oDiv.style.top = '0px'; oDiv.style.left = '0px'; oDiv.style.backgroundColor = 'rgba(255,255,255,0)';
    document.querySelector("body > div > h1 > a").innerHTML=''
    document.title="python/pytorch";

</script>

<br><br>
<!-- ___________________________________________ -->
<!-- ___________________________________________ -->

# pytorch


- [pytorch](#pytorch)
      - [整体操作](#整体操作)
      - [网络操作](#网络操作)
      - [张量操作](#张量操作)

<br><br>

#### 整体操作

* 安装
    - 在torch官网选择安装命令，可以使用pip而不用pip3，注意cpu和gpu版本。
    - 如果遇到`MemoryError`可以添加`--no-cache-dir`不启用缓存。

    ```shell
        pip install torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/cu113python --no-cache-dir
    ```
* 卸载
    - 如果是pip安装，直接使用`pip uninsatll`。
    - 注意`torchvision`和`torchaudio`也都有卸载，否则再次安装可能版本不匹配。

* 判断是否可以使用GPU
    ```python
        print(torch.cuda.is_available())
    ```




#### 网络操作



#### 张量操作