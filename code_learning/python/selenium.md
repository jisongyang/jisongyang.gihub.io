
<iframe id='head' align="center" width="100%" height="100" src="python_show.html"  frameborder="no" border="0" marginwidth="0" marginheight="px" scrolling="no" ></iframe>

<style>
    .iframe{margin:0 auto;}
</style>
<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<script>
    var oDiv = document.getElementById('head');
    oDiv.style.position = 'fixed'; oDiv.style.top = '0px'; oDiv.style.left = '0px'; oDiv.style.backgroundColor = 'rgba(255,255,255,0)';
    document.querySelector("body > div > h1 > a").innerHTML=''
    document.title="python/selenium";

</script>

<br><br>
<!-- ___________________________________________ -->
<!-- ___________________________________________ -->

# selenium


* 导入
    ```python
    from selenium.webdriver.common.by import By
    from selenium import webdriver
    from selenium.webdriver.support.wait import WebDriverWait
    ```

* 打开链接
    ```python
    options=webdriver.ChromeOptions()
    options.add_argument('--headless')                                      # 浏览器隐藏

    prefs = {'profile.default_content_setting_values': {'geolocation': 1}}  # 允许定位
    prefs['profile.default_content_setting_values']['images']=2             # 设置无图模式
  
    # 设置这两个参数就可以避免密码提示框的弹出
    prefs['credentials_enable_service'] = False
    prefs['profile.password_manager_enabled'] = False

    options.add_experimental_option('prefs', prefs)
    options.add_experimental_option('excludeSwitches', ['enable-logging'])  # cmd隐藏各种监听信息

    driver=webdriver.Chrome(chrome_options=options)
    driver.get(log_url)
    ```



* 滚动界面
    ```python
    driver.execute_script('window.scrollBy(0,200)')
    ```

* 根据文本定位
    ```python
    包含文本: find_element_by_xpath("//*[contains(text(),'确定')]")
    相同文本: driver.find_element_by_xpath("//*[text()='{}']")
    ```

* 界面元素操作
    ```python
    .get_attribute('textContent')   # 获取元素内的全部文本内容
    .get_attribute('属性名')        # 获取元素对应的属性值
    .text                           # 获取元素内的文本内容(未渲染到网页的不能获取)
    ```


* 切换frame
    ```python
    # 根据id切换到对应的frame
    driver.switch_to.frame(‘id名’)

    # 切换回主文档
    driver.switch_to.default_content()
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

* 获取cookies以及加载cookies
    ```python

    def get_data(search_content,log_url,save_cookies=False):
        options=webdriver.ChromeOptions()
        driver=webdriver.Chrome(chrome_options=options)
        driver.get(log_url)
        www=input('请输入任意键继续\n')         # 第一次的时候扫码登录，或者账号登录，然后继续
        if(save_cookies):
            cookies=driver.get_cookies()
            with open('cookies.txt','w') as f:
                for i in cookies:
                    f.write(str(i))
                    f.write('\n')
        else:
            cookies=[]
            with open('cookies.txt','r') as f:
                for i in f.readlines():
                    cookies.append(eval(i.strip()))
            for i in cookies:
                driver.add_cookie(i)

            time.sleep(3)
            driver.refresh()
    ```
