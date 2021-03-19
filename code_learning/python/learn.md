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
    document.title="python/learn";
</script>
<br><br>
<!-- ___________________________________________ -->
<!-- ___________________________________________ -->

# python learning

* 让字典的每个value有初始值，第一次添加key自动生成value
```python
    import collections
    d = collections.defaultdict(int)            # 初始值为整数型，默认为0
    d = collections.defaultdict(list)           # 初始值为列表，默认为空
    d = collections.defaultdict(lambda :10)     # 初始值设为10
```

* 字典排序
```python
    # 根据key排序，返回list
    order_list = sorted(the_dict.items(), key=lambda d: d[0], reverse=False)
    # 根据value排序，返回list
    order_list = sorted(the_dict.items(), key=lambda d: d[0], reverse=False)
    
    import operator
    # 根据key排序，返回dict
    order_dict = dict(sorted(the_dict.items(), key=operator.itemgetter(0)))
    # 根据value排序，返回dict
    order_dict = dict(sorted(the_dict.items(), key=operator.itemgetter(1)))
```