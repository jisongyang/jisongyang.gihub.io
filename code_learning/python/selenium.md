<div class="ribbon">
    <a href="learn"><spann>Learn</spann></a>
    <a href="#"><spann>Selenium</spann></a>
    <a href="#"><spann>Matplot</spann></a>
</div>

<div id="page1">
    <iframe align="center" width="100%" height="170" src="show.html"  frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>
</div>

<object style="border:1px solid red" type="text/x-scriptlet" data="show.html" width="100%" height="200px"></object>

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
    > 比如: 先找到“确定”，然后退回多重父元素，然后找到相邻的元素，再定位子元素
    > "//*[text()='确定']/../../../following-sibling::uni-view[2]/uni-view/uni-view[2]/uni-text/span"
    > ```
    >
    >   |  code   | 意义  |
    >   |  :--:  | :--: |
    >   | following-sibling::uni-view[2]  | 之后的第二个标签 |
    >   | following-sibling:: *  | 同级的所有标签 |
    >   | following-sibling:: *[1] | 同级的第一个标签 |









<!-- ———————————————————————————————————————————————— -->
<!-- ———————————————————————————————————————————————— -->
<style>
*{
    margin: 0;
    padding: 0;
}
.ribbon{
    display: inline-block;
}
.ribbon::before{
    margin-top: 48px;
    content: "";
    border: 24px solid #333;
    border-left-color: transparent;
    float: left;
}
.ribbon::after{
    margin-top: 48px;
    content: "";
    border: 24px solid #333;
    border-right-color: transparent;
    float: left;
}
a{
    float: left;
    height: 96px;
    text-decoration: none;
    overflow: hidden;
}
spann{
    margin-top: 48px;
    color: #fff;
    line-height:48px;
    padding: 0 16px;
    background: #333;
    display: inline-block;
    position: relative;
    transition: all 0.3s;
}
a:hover spann{
    margin-top: 40px;
    background: #666699;
}
spann::before{
    content: "";
    position: absolute;
    top: 48px;
    left: 0;
    border-right: 8px solid #666699;
    border-bottom: 8px solid #333;
}
spann::after{
    content: "";
    position: absolute;
    top:48px;
    right: 0;
    border-left: 8px solid #666699;
    border-bottom: 8px solid #333;
}
</style>