
<iframe id='head' align="center" width="100%" height="100" src="python_show.html"  frameborder="no" border="0" marginwidth="0" marginheight="px" scrolling="no" ></iframe>

<style>
    .iframe{margin:0 auto;}
</style>
<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<script>
    var oDiv = document.getElementById('head');
    oDiv.style.position = 'fixed'; oDiv.style.top = '0px'; oDiv.style.left = '0px'; oDiv.style.backgroundColor = 'rgba(255,255,255,0)';
    document.querySelector("body > div > h1 > a").innerHTML=''
    document.title="python/pyspark";

</script>

<br><br>
<!-- ___________________________________________ -->
<!-- ___________________________________________ -->



* [pyspark](#pyspark)
* [HiveTask](#hivetask)

## pyspark


* pyspark初始化
    ```python
        import os
        from pyspark import SparkContext, SparkConf
        from pyspark.sql.session import SparkSession
        from pyspark.sql import HiveContext
        
        
        spark = SparkSession \
            .builder \
            .appName("jupyter_example_aqi_lstm") \
            .enableHiveSupport() \
            .config("spark.executor.instances", "100") \
            .config("spark.executor.memory","15g") \
            .config("spark.executor.cores","5") \
            .config("spark.driver.memory","10g") \
            .config("spark.sql.shuffle.partitions","500") \
            .config("hive.exec.dynamici.partition",True) \
            .config("hive.exec.dynamic.partition.mode","nonstrict") \
            .getOrCreate()
        
        ## 输出spark的任务id
        print(spark.sparkContext.applicationId)

    ```



* pyspark建表，然后用hive上传保存本地文件插入表
    ```python
            ############################################
            ## 建临时表，分割符设置为逗号，对应csv也应该是逗号
            ############################################
            ## 利用pyspark的dataframe格式获取字段名字和类型，用于建表
            temp=df_score
            print(type(temp))   # dataframe格式的数据
            df_temp = spark.createDataFrame(temp.head(5))
            print(type(df_temp))
            
            field_str=''
            for ele in df_temp.dtypes[:-1]:
                field_str+=ele[0]+' '+ele[1]+','+'\n'
            field_str+=df_temp.dtypes[-1][0]+' '+df_temp.dtypes[-1][1]
            creat_sql='''
            CREATE
                TABLE IF NOT EXISTS dev.dev_yangjisong3_df_score_temp
                (
                    {}
                )
                COMMENT '临时表'
                ROW FORMAT DELIMITED FIELDS TERMINATED BY ',' STORED as textfile
            '''.format(field_str)
            print(creat_sql) 
            
            spark.sql(creat_sql)
            
            import sys
            import os
            
            ##### 上传数据
            load_sql='''
            hive -e "LOAD DATA LOCAL INPATH './result_score_50.csv' OVERWRITE INTO TABLE dev.dev_yangjisong3_df_score_temp"
            '''.format(date)
            print(load_sql)
            os.system(load_sql)
            
            
            ############################################
            ## 建分区表，分割符设置为逗号，对应csv也应该是逗号
            ############################################
            temp=df_score
            print(type(temp))   # dataframe格式的数据
            df_temp = spark.createDataFrame(temp.head(5))
            print(type(df_temp))
            
            field_str=''
            for ele in df_temp.dtypes[:-1]:
                field_str+=ele[0]+' '+ele[1]+','+'\n'
            field_str+=df_temp.dtypes[-1][0]+' '+df_temp.dtypes[-1][1]
            creat_sql='''
            CREATE
                TABLE IF NOT EXISTS app.app_ord_payprop_risk_score
                (
                    {}
                )
                COMMENT '订单支付占比风险得分表' partitioned BY
                (
                    dt string
                )
                ROW FORMAT DELIMITED FIELDS TERMINATED BY ',' STORED as textfile
            '''.format(field_str)
            print(creat_sql) 
            
            spark.sql(creat_sql)
            
            import sys
            import os
            
            ##### 上传数据
            load_sql='''
            hive -e "  SET hive.exec.dynamic.partition.mode = nonstrict; SET hive.exec.dynamic.partition = true; LOAD DATA LOCAL INPATH './result_score_50.csv' OVERWRITE INTO TABLE app.app_ord_payprop_risk_score PARTITION (dt='{}')"
            '''.format(date)
            print(load_sql)
            os.system(load_sql)
    ```

## HiveTask