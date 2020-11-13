<div id="navifation" class='headbar'>
    <iframe align="center" width="100%" height="170" src="others_show.html"  frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>
</div>
<style>
    .headbar{text-align:center;}
    .iframe{margin:0 auto;}
</style>

<!-- ___________________________________________ -->
<!-- ___________________________________________ -->

# wireshark

* wireshark打开就未响应：和有道的梦幻联动
    > <https://blog.csdn.net/li007lee/article/details/105965147?utm_medium=distribute.pc_aggpage_search_result.none-task-blog-2~all~first_rank_v2~rank_v25-1-105965147.nonecase&utm_term=wireshark%E4%B8%80%E7%9B%B4%E6%9C%AA%E5%93%8D%E5%BA%94>

* tshark提取endpoints的数据，其中“-n”是将MAC地址转为16进制
    ```
    D:\\software\\wireshark\\tshark -r {} -i enp0s31f6 -qz endpoints,eth -n >{}\\{}.txt
    ```