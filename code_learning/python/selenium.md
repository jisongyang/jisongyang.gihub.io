# selenium

* 滚动界面
    ```python
    driver.execute_script('window.scrollBy(0,200)')
    ```

* 根据文本定位
    ```python
    包含文本：find_element_by_xpath("//*[contains(text(),'确定')]")
    相同文本：driver.find_element_by_xpath("//*[text()='{}']")
    ```
* 根据已知元素定位其他元素，本质上是`xpath`路径的寻找
    >  ```python
    > 比如：先找到“确定”，然后退回多重父元素，然后找到相邻的元素，再定位子元素
    > "//*[text()='确定']/../../../following-sibling::uni-view[2]/uni-view/uni-view[2]/uni-text/span"
    > ```
    >
    >   |  code   | 意义  |
    >   |  :--:  | :--: |
    >   | following-sibling::uni-view[2]  | 之后的第二个标签 |
    >   | following-sibling:: *  | 同级的所有标签 |
    >   | following-sibling:: *[1] | 同级的第一个标签 |

<html>
    <div class="ribbon">
        <a href="learn"><span>Learn</span></a>
        <a href="#"><span>Selenium</span></a>
        <a href="#"><span>Matplot</span></a>
    </div>
</html>

<style>
    *{
        margin: 0;
        padding: 0;
    }
    .ribbon{
        display: inline-block;
    }
    .ribbon::before{
        margin-top: 8px;
        content: "";
        border: 24px solid #333;
        border-left-color: transparent;
        float: left;
    }
    .ribbon::after{
        margin-top: 8px;
        content: "";
        border: 24px solid #333;
        border-right-color: transparent;
        float: left;
    }
    a{
        float: left;
        height: 56px;
        text-decoration: none;
        overflow: hidden;
    }
    span{
        margin-top: 8px;
        color: #fff;
        line-height:48px;
        padding: 0 16px;
        background: #333;
        display: inline-block;
        position: relative;
        transition: all 0.3s;
    }
    a:hover span{
        margin-top: 0;
        background: #666699;
    }
    span::before{
        content: "";
        position: absolute;
        top: 48px;
        left: 0;
        border-right: 8px solid #666699;
        border-bottom: 8px solid #333;
    }
    span::after{
        content: "";
        position: absolute;
        top:48px;
        right: 0;
        border-left: 8px solid #666699;
        border-bottom: 8px solid #333;
    }
</style>