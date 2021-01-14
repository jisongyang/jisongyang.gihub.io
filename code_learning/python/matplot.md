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

* 设置背景网格线
    ``` python
        plt.grid(axis, color, linestyle, linewidth,alpha)
        # axis：  取值为‘both’， ‘x’，‘y’，或者省略
        # alpha： 透明度
    ```

* 设置图例
    ``` python
        ax.legend(ncol,loc,frameon,markerscale,fontsize,bbox_to_anchor=(0.42,1.15))
        # ncol：            列数
        # loc：             位置，比如‘upper left'，‘lower right'等等
        # frameon           是否设置图例边框
        # markerscale       图例标记与原始标记的相对大小
        # bbox_to_anchor    绝对位置
    ```


* 基本样式


    |  marker | 样式  |  marker | 样式  |  marker | 样式  |marker | 样式  |
    | :----:  | :----: | :----:  |:----: |  :----:   | :----: |:----:  | :----: |
    | “.”     | 点 | “,”  | 像素点 |  “o”  | 圆 |“v”	 | 下三角 |
    | “^”  | 上三叉 | “3”  | 左三叉 | “4”  | 右三叉 |“8”	| 八角形 |
    |   “s”	|矩形     |“p”|	五边形|      “P”|	加（填充）|      “*”	|星星|
    |  “h”	|六边形1  |   “H”	|六边形2   |  “+”	|加    |          “x”	|乘|
    | “X”|	乘（填充）|  “D”|	菱形   |     “d”|	瘦菱形   |       “\|”	|竖线|
     |    “_”|	横线


    | linestyle| 样式  | linestyle | 样式  |  linestyle| 样式  |linestyle | 样式  |
     | :----:  | :----: | :----:  |:----: |  :----:   | :----: |:----:  | :----: |
     |    “-”   |  实线  |  “-.”  |  点横线| "." | 点线 | “--”|虚线|

* 柱状图
    ``` python
        rect = ax2.bar(x, y, width, yerr,capsize,color, edgecolor='black'，label=legends)
        # x：               柱状图中心线的横坐标，配合width可以实现偏移，画多个变量的柱状图
        # width：           柱状图宽度
        # yerr：            误差值
        # capsize：         误差线上下两段横线的长度
        # label:            图例中的名字
    ```

* 折线图
    ``` python
        ln1,=ax2.plot(x, y, marker, ms,linewidth,linestyle,color,mfc,label)
        # ms：           marker的大小
        # mfc：          marker的颜色
    ```
    