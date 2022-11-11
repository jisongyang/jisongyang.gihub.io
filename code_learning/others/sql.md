<iframe id='head' align="center" width="100%" height="100" src="others_show.html"  frameborder="no" border="0" marginwidth="0" marginheight="px" scrolling="no" ></iframe>

<style>
    .iframe{margin:0 auto;}
</style>
<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<script>
    var oDiv = document.getElementById('head');
    oDiv.style.position = 'fixed'; oDiv.style.top = '0px'; oDiv.style.left = '0px'; oDiv.style.backgroundColor = 'rgba(255,255,255,0)';
    document.querySelector("body > div > h1 > a").innerHTML=''
    document.title="others/sql";
</script>
<br><br>
<!-- ___________________________________________ -->
<!-- ___________________________________________ -->

[sql](#sql)
[hive](#hive)
[spark](#spark)
[presto](#presto)



## sql
* 常用命令
    ```sql
    --设置常量
    SET CURRENT_DAY = 2022-08-15;
    
    --引用常量
    SUBSTR(createdate, 1, 10) = '${hiveconf:CURRENT_DAY}'
    
    --插入表
    INSERT overwrite TABLE app.app_ord_payprop_risk_info PARTITION
        (dt
        )
    SELECT
        ……
    
    --建立临时表
    drop table if exists dev.del_yjs_dm_maliscalpers_allseq_pin_feat_pred;
    create table dev.del_yjs_dm_maliscalpers_allseq_pin_feat_pred  stored as orc as
    select
    ……
    
    --更改权限
    alter table dev.del_yjs_bestdeal_test_2022_11_03 set tblproperties ('SENSITIVE_TABLE'='FALSE');
    ```

## hive
* 常用函数
    ```sql
    --聚合：collect_list,collect_set,concat_ws，
    concat_ws('_',collect_set())
    --判断字符中是否包含子串
    LOCATE('成都市',address)>0,
    ```



## spark

## presto
* 常用函数
    ```sql
    --聚合：array_join,array_agg,
    array_join(array_agg(item_third_cate), '_') 
    --判断字符中是否包含子串
    regexp_like(address,'成都市')
    --解析json获得字符串结果
    json_extract_scalar(msg, '$.parent_id')
    --解析json获得json结果
    json_extract(msg, '$.sku_list')
    --可以将变量转为字符串
    json_format(json_data)
    --数组变量中的最小和最大值
    least()
    greatest()
    --空值赋值
    coalesce(num,0)
    ```
* 注意问题
    > 整数int型数据进行除法运算得到的也是整数，可以在分母乘以1.0000（零的个数取决于想保留的小数位数）