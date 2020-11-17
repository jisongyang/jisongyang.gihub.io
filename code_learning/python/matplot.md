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
    document.title="python/matplot";
</script>
<br><br>
<!-- ___________________________________________ -->
<!-- ___________________________________________ -->

# matplot

* 建立子图
    ``` python
        fig=plt.figure()
        ax=fig.add_subplot(111)
    ```

* 设置双纵坐标轴
    ``` python
        ax2=ax.twinx()
    ```

* 设置坐标轴某些刻度显示
    ``` python
        ax2.set_yticks([9,10,12,18,24])
        ax2.set_yticklabels(stat_result)
    ```

* 旋转坐标轴的文字
    ``` python
        for tl in ax.get_xticklabels():
            tl.set_rotation(45)
            tl.set_fontsize(8)
    ```

* 对每个数据点标注，其中a、b是数据点在图中的绝对位置坐标
    ``` python
        i=0
        for a,b in zip(x,y):
            plt.text(a,b-0.3,note_list[i],ha = 'center',va = 'bottom',fontsize=7)
            i+=1
    ```

* 添加水平直线
    ``` python
	    plt.axhline(y=9,linestyle='--',linewidth=linewidthvalue,color=colorvalue)
    ```

* 设置坐标轴范围
    ``` python
	    plt.ylim(8,24)
    ```

* 按一定的间距显示坐标轴刻度
    ``` python
        from matplotlib.pyplot import MultipleLocator
        interval=10
        x_major_locator=MultipleLocator(interval)
        ax.xaxis.set_major_locator(x_major_locator)
    ```