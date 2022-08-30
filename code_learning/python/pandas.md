
<iframe id='head' align="center" width="100%" height="100" src="python_show.html"  frameborder="no" border="0" marginwidth="0" marginheight="px" scrolling="no" ></iframe>

<style>
    .iframe{margin:0 auto;}
</style>
<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<script>
    var oDiv = document.getElementById('head');
    oDiv.style.position = 'fixed'; oDiv.style.top = '0px'; oDiv.style.left = '0px'; oDiv.style.backgroundColor = 'rgba(255,255,255,0)';
    document.querySelector("body > div > h1 > a").innerHTML=''
    document.title="python/pandas";

</script>

<br><br>
<!-- ___________________________________________ -->
<!-- ___________________________________________ -->

# pandas
* dataframe取值
    ```python
            # 取某一列作为新的df
            df_feature=df[['ord_id']]
            # 取某几列作为新的df
            df_save=df_feature[['ord_id','user_id','score']]
            # 取某一列添加至已存在的df
            df_feature['dt']=df['dt']
            # 取满足某个条件的行
            df.loc[df['ord_id']==2506345]
            # 取满足多个条件的行
            df_feature.loc[(df_feature['comb_same']>50) & (df_feature['cnt_uni']>3)]
    ```
* dataframe应用函数
    ```python
            # axis=1即传入每一行，axis=1即传入每一列
            df_feature['order']=df_feature.apply(aim_func,axis=1)
    ```

* pandas判断空值
    ```python
            pd.isnull(df_row['dt_buy'])
    ```

* 设置显示全部
    ```python
            pd.set_option('display.max_columns',None)
    ```