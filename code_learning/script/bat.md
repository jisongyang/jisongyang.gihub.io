
<iframe id='head' align="center" width="100%" height="100" src="script_show.html"  frameborder="no" border="0" marginwidth="0" marginheight="px" scrolling="no" ></iframe>

<style>
    .iframe{margin:0 auto;}
</style>
<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<script>
    var oDiv = document.getElementById('head');
    oDiv.style.position = 'fixed'; oDiv.style.top = '0px'; oDiv.style.left = '0px'; oDiv.style.backgroundColor = 'rgba(255,255,255,0)';
    document.querySelector("body > div > h1 > a").innerHTML=''
    document.title="script/bat";
</script>
<br><br>
<!-- ___________________________________________ -->
<!-- ___________________________________________ -->



# bat

 * 删除每一行末尾的换行符
    ```bash
        %创建pre.txt,将需要删除换行符的文本复制到pre.txt中保存，然后运行此.bat%
        @echo off
        set "blank= "
        for /f "delims=" %%a in ('dir/b/a-d pre.txt')do (
        cls&echo/&echo 正在处理 %%a
        for /f "delims=" %%b in ('type "%%a"')do set/p=%%b%blank%<nul>>"n%%a"
        echo.>>"n%%a"
        move/y "n%%a" "%%a")
        cls&echo/&echo 处理完毕
        type pre.txt|clip
        notepad pre.txt
    ```

 * 获取当前文件下所有文件名
    ```bash
        @echo off
        for /f "delims=" %%a in ('dir /b/a-d/oN *.*') do echo %%~na >>name_list.txt
    ```

 * 循环处理多个文件
    ```bash
        @echo off
        for /f "delims=" %%A in ('dir original_data\*.* /b') do (

        md deal_data/%%A
        dir original_data/%%A/*.* /b >deal_data/%%A/name.txt 
        echo "creat %%A done!"
        for /f "delims=" %%i in (deal_data/%%A/name.txt) do (
        echo %%A>deal_data/%%A/%%i_pre_data.txt
        D:/software/Wireshark/tshark -r original_data/%%A/%%i -Y "ssl" -T fields -e tcp.stream -e ber.64bit_uint_as_bytes -e _ws.col.Info -e ssl.record.length>>deal_data/%%A/%%i_pre_data.txt
        echo "capture %%i done!"
        python -c "import reorder_test; reorder_test.txt_to_xlsx('deal_data/%%A/%%i_pre_data.txt')"
        echo "%%i to excle done!"
        )
    ```