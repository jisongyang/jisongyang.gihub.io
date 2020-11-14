<div id="navifation" class='headbar'>
    <iframe id='head' align="center" width="100%" height="160" src="python_show.html"  frameborder="no" border="0" marginwidth="0" marginheight="px" scrolling="no" ></iframe>
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

# selenium

* 滚动界面
    ```python
    driver.execute_script('window.scrollBy(0,200)')
    ```

* 根据文本定位
    ```python
    包含文本: find_element_by_xpath("//*[contains(text(),'确定')]")
    相同文本: driver.find_element_by_xpath("//*[text()='{}']")
    ```
* 根据已知元素定位其他元素，本质上是`xpath`路径的寻找
    >  ```python
    > 比如: 先找到"确定", 然后退回多重父元素, 然后找到相邻的元素, 再定位子元素
    > "//*[text()='确定']/../../../following-sibling::uni-view[2]/uni-view/uni-view[2]/uni-text/span"
    > ```
    >
    >   |  code   | 意义  |
    >   |  :--:  | :--: |
    >   | following-sibling::uni-view[2]  | 之后的第二个标签 |
    >   | following-sibling:: *  | 同级的所有标签 |
    >   | following-sibling:: *[1] | 同级的第一个标签 |
