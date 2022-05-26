
<iframe id='head' align="center" width="100%" height="100" src="python_show.html"  frameborder="no" border="0" marginwidth="0" marginheight="px" scrolling="no" ></iframe>

<style>
    .iframe{margin:0 auto;}
</style>
<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<script>
    var oDiv = document.getElementById('head');
    oDiv.style.position = 'fixed'; oDiv.style.top = '0px'; oDiv.style.left = '0px'; oDiv.style.backgroundColor = 'rgba(255,255,255,0)';
    document.querySelector("body > div > h1 > a").innerHTML=''
    document.title="python/IO";

</script>

<br><br>
<!-- ___________________________________________ -->
<!-- ___________________________________________ -->

# 文件读写

### xlwt
* 写xls文件（不支持xlsx文件，主要用于写一个全新的文件）
    ```python
    import xlwt
    f=xlwt.Workbook()
    sheet1=f.add_sheet('sheet_name',cell_overwrite_ok=True)
    sheet1.write(row_index,col_index,content)
    f.save('文件名.xls')
    ```
### pandas
* 读写xlsx文件（主要用于对已有文件修改某些值）
    ```python
    import pandas as pd
    # 如果不设置sheet_name默认只读第一个sheet
    aim=pd.read_excel('文件名.xlsx',sheet_name='sheet_name')
    # 依次对每一行进行操作
    for index,row in aim.iterrows():
        # 可以取出每一行对应列名的值
        y=int(row['year'])
        p=row['provcd']
        if(p=='缺失'):
            continue
        fangjia=fangjia_dict[p][y]
        # 改变row中对应key的value，并不会改变aim中的值
        row['房价增速平减']=fangjia
        # 需要直接对aim进行修改
        aim.iloc[index,4]=fangjia
    aim.to_excel('文件名.xlsx')
    ```