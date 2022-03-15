


var total_data,read_flag;
var content,year,month,day,start_time,end_time,max_length,min_length;
var total_num=0,now_num=0,pre_num=0



// ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
//          查询和清空两个按钮对应的函数
// ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————

// 清空按钮函数
function delete_all(){
    document.getElementById('content').value=''
    document.getElementById('year').value=''
    document.getElementById('month').value=''
    document.getElementById('day').value=''
    document.getElementById('start_time').value=''
    document.getElementById('end_time').value=''
    document.getElementById('max_length').value=''
    document.getElementById('min_length').value=''

    document.getElementById('total_num').innerHTML=0
    document.getElementById('now_num').innerHTML=0

    document.getElementById('count_aim').innerHTML='';
    document.getElementById('count_sta').innerHTML='';
    
    document.getElementById('button_show').innerHTML=''
    document.getElementById('content_show').innerHTML=''

    document.getElementById('month_sta_box').innerHTML=''
    document.getElementById('month_sta').className='';
    document.getElementById('time_sta_box').innerHTML=''
    document.getElementById('time_sta').className='';

    // 删除echarts初始化带来的标签，才能进行再一次初始化
    document.getElementById('month_sta_box').removeAttribute('_echarts_instance_')
    document.getElementById('time_sta_box').removeAttribute('_echarts_instance_')
}

// 查询按钮函数
function search(){
    // 读取数据
    read_flag,total_data=read_json();

    if(read_flag){
        // 读取搜索条件
        content,year,month,day,max_length,min_length=read_input();
        // 得到搜索结果
        search_result=get_result(total_data);
        // 展示搜索结果
        show_reseult(search_result);
    }else{
        // 清空界面
        delete_all()
    }
}


// ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
//          查询函数的各个子函数
// ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————


// 读取json文件
function read_json(){
    var key=document.getElementById('www').value
    var total_data=''
    $.ajaxSetup({async:false})
    // $.getJSON("use_json2.json", function(data) {
    $.getJSON("use_json_20220112.json", function(data) {
        //data 代表读取到的json中的数据
        total_data_pre=data.res;
        // console.log(total_data_pre);
        
        for (var nowchar of total_data_pre.split('_')){
            total_data+=String.fromCharCode(nowchar.charCodeAt()+Number(key))
        }
        // console.log(total_data);
        try{
            total_data=eval("("+total_data+")");
            // console.log(total_data);
            read_flag=true
        } catch(err){
            // console.log('');
            read_flag=false
        }
    });
    return read_flag,total_data
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 读取输入框的内容
function read_input(){
    content=document.getElementById('content').value
    year=document.getElementById('year').value
    month=document.getElementById('month').value
    if(month.length==1){
        month='0'+month
    }
    day=document.getElementById('day').value
    if(day.length==1){
        day='0'+day
    }
    start_time=document.getElementById('start_time').value
    end_time=document.getElementById('end_time').value
    
    max_length=document.getElementById('max_length').value
    min_length=document.getElementById('min_length').value
    console.log(content,year,month,day,max_length,min_length);
    return content,year,month,day,max_length,min_length
};

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 得到搜索结果
function get_result(total_data){
    // 初始化搜索结果
    var search_result=[]

    // 根据输入框内容依次搜索

    // 日期搜索
    date_result=date_search(total_data)

    // 时间搜索
    time_result=time_search(date_result)

    // 长度搜索
    length_result=length_search(time_result)

    // 内容搜索
    search_result=content_search(length_result)

    return search_result
}



// ………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………

// 日期搜索
function date_search(total_data){
    if(year=='' && month=='' && day==''){
        return total_data
    }
   
    var date_result=[]
     // 取出每一天日期
    for(var ob of total_data){
        var now_date=ob.date[0].split('-');
        // console.log(now_date);
        // 某一个输入框为空则默认全部
        if((year==''||year==now_date[0])&&(month==''||month==now_date[1])&&(day==''||day==now_date[2])){
            date_result.push(ob)
        }
    }
    return date_result
}

// ………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………

// 时间搜索
function time_search(date_result){
    if(start_time=='' && end_time==''){
        return date_result
    }
    
    var time_result=[]
    // 某一个输入框为空则默认为0点
    start_time=Number(start_time)
    end_time=Number(end_time)
    // 取出每一天时间
    for(var ob of date_result){
        var now_time=Number(ob.date[1].split(':')[0])
        
        // console.log(now_time);

        // 如果起始时间的数字大于结束时间，即跨天，比如23点——6点
        if(start_time>end_time){
            if(now_time>=start_time||now_time<end_time){
                time_result.push(ob)
            }
        }
        // 如果起始时间的数字小于结束时间，即不跨天，比如12点——23点
        else{
            if((now_time>=start_time)&&(now_time<end_time)){
                time_result.push(ob)
            }
        }
        
    }
    return time_result
}



// ………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………

// 长度搜索
function length_search(time_result){
    if(max_length=='' && min_length==''){
        return time_result
    }
    
    var length_result=[]
    // 取出每一天的长度
    for(var ob of time_result){
        var now_length=ob.length;
        // 某个输入框为空则默认全部
        if((min_length==''||min_length<=now_length)&&(max_length==''||max_length>=now_length)){
            length_result.push(ob)
        }
    }
    return  length_result
    
}


// ………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………

// 内容搜索
function content_search(length_result){
    if(content==''){
        return length_result
    }
   
    var content_result=[]
    var conut_num=0;
     // 取出每一天内容
    for (var ob of length_result){
        var now_content=ob.content;
        var content_flag=false              // 当天是否被内容搜索命中
        highlight_content=[]                // 高亮显示内容    
        // 取出当天每一句话
        for (var sentence of now_content){
            if(sentence.includes(content)){
                content_flag=true;
                [sentence,conut_num]=highlight_sentence(sentence,content,conut_num)
                // console.log(sentence);
            }       
            highlight_content.push(sentence)
        }
        // 如果被内容搜索命中
        if(content_flag==true){
            ob.content=highlight_content
            content_result.push(ob)         // 当天添加到搜索结果  
        }
    }

    // 显示当前内容的命中次数，如果输入框内容为空则不会显示
    document.getElementById('count_aim').innerHTML=content;
    document.getElementById('count_sta').innerHTML=conut_num+'次';

    return content_result;
}

// ………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………

// 根据内容搜索高亮显示一些词,并统计内容命中的次数
function highlight_sentence(sentence,content,conut_num){
    var html_str='<font color="red">'+'<b>'+content+'</b>'+'</font>';
    var split_lis=sentence.split(content);
    conut_num+=split_lis.length-1;
    sentence=split_lis.join(html_str);
    return [sentence,conut_num]
}


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 展示搜索结果
function show_reseult(search_result){
    // 如果搜索结果为空，则清空界面的显示
    if(search_result.length==0){
        document.getElementById('content_show').innerHTML='没有搜索结果=。='
        document.getElementById('total_num').innerHTML=0
        document.getElementById('now_num').innerHTML=0
        document.getElementById('button_show').innerHTML=''

        document.getElementById('count_aim').innerHTML='';
        document.getElementById('count_sta').innerHTML='';

        document.getElementById('month_sta_box').innerHTML=''
        document.getElementById('month_sta').className='';
        document.getElementById('time_sta_box').innerHTML=''
        document.getElementById('time_sta').className='';

        // 删除echarts初始化带来的标签，才能进行再一次初始化
        document.getElementById('month_sta_box').removeAttribute('_echarts_instance_')
        document.getElementById('time_sta_box').removeAttribute('_echarts_instance_')

    }else{
        total_num=search_result.length
        // 展示结果数量
        show_num(total_num,now_num)
       
        // 展示内容
        show_content(search_result);
        
        // 展示搜索结果按钮
        show_button(search_result);
        
        // 展示搜索结果统计
        show_sta(search_result)
    }

}


// ………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………

// 更新展示的num
function show_num(total_num,now_num){
    document.getElementById('total_num').innerHTML=total_num
    document.getElementById('now_num').innerHTML=now_num
}

// ………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………

// 显示搜索结果的内容
function show_content(search_result){
    // 构建显示的html
    var content_html=''
    for (var ob of search_result){
        content_html=content_html+'<div class="each_day">'+'【'+'<b>'+ob.date[0]+'</b>'+'&emsp;'+'<b>'+ob.date[1]+'</b>'+'&emsp;'+'<b>'+ob.length+'</b>'+'】'+'<br>&emsp;&emsp;'+ob.content.join('<br>&emsp;&emsp;')+'<br><br>'+'</div>'
    }

    // 将html写入
    var content_show=document.getElementById('content_show')
    content_show.innerHTML=content_html
    document.getElementById('content_show').scrollTop = 0;

}

// ………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………

// 显示搜索结果的按钮
function show_button(search_result){
    var button_html=''
    var pre_month=search_result[0].date[0].split('-')[1],now_month=''
    for (var i in search_result){
        ob=search_result[i]
        now_month=ob.date[0].split('-')[1]
        // 如果前后两个按钮所在月份不一样，则增加换行符
        if(now_month!=pre_month){
            button_html+='<br><br>'
        }
        pre_month=now_month
        button_html=button_html+`<button id="button_${i}" class="" now_src="${i}" onclick="tonclick(this)">${ob.date[0]}&emsp;${ob.length}</button>`

    }
    // 将html写入
    var button_show=document.getElementById('button_show')
    button_show.innerHTML=button_html

    // 尝试将第一个按钮标红并设置num显示
    try{
        document.getElementById('button_0').className='active'
        document.getElementById('now_num').innerHTML=1
    }
    catch(err){
        document.getElementById('now_num').innerHTML=0
    }

}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 展示搜索结果统计
function show_sta(search_result){
    // 展示月份统计
    var count_month={};
    for(var ob of search_result){
        var now_month=ob.date[0].slice(0,-3)
        if(count_month.hasOwnProperty(now_month)){
            count_month[now_month]+=1;
        }else{
            count_month[now_month]=1;
        }
    }
    // 根据月份统计结果计算折线图参数
    var month_keys=Object.keys(count_month);
    var month_values=Object.values(count_month);
    var month_x_interval=Math.floor(month_keys.length/5)
    // console.log(count_month,count_month.length,month_x_interval)
    var month_y_interval=Math.floor(Math.max(...month_values)/3)
    // 绘制月份折线图
    show_every_month(month_keys,month_values,month_x_interval,month_y_interval);
    // 显示月份统计折线图
    document.getElementById('month_sta').className='active';
    document.getElementById('month_sta_box').className='show_image';


    // 展示时间统计
    var count_time={};
    for(var i=0;i<=23;i++){
        count_time[i]=0
    }
    for(var ob of search_result){
        var now_time=ob.date[1].split(':')[0]
        if(count_time.hasOwnProperty(now_time)){
            count_time[now_time]+=1;
        }else{
            count_time[now_time]=1;
        }
    }
    // 根据时间统计结果计算折线图参数
    var time_keys=Object.keys(count_time);
    var time_values=Object.values(count_time);
    var time_y_interval=Math.floor(Math.max(...time_values)/3)
    // 绘制时间折线图
    show_every_hour(time_keys,time_values,1,time_y_interval);
    // 隐藏时间统计折线图
    document.getElementById('time_sta').className='';
    document.getElementById('time_sta_box').className='hide_image';

}

// ………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………

// 画出月份统计折线图
function show_every_month(keys,values,x_interval,y_interval){
    console.log(keys,x_interval)
    var oMyChart = echarts.init(document.getElementById("month_sta_box"));
    var option = {
                grid:{
                    y:'20%',
                    x:'15%',
                    width:'70%',
                    height:'50%',
                    // left:'20px',
                },
                tooltip : {
                    trigger: 'axis',
                    show:true,
                },
                legend: {
                    data:['每个月记录次数']
                },

                calculable : true,

                xAxis : [
                    {
                        axisLabel:{
                            rotate: 30,
                            interval:x_interval,
                            margin:20,
                            // padding:[0,0,0,30],
                        },
                        axisLine:{
                            lineStyle :{
                            color:'black'
                            }
                        },
                        type : 'category',
                        boundaryGap : ['0.2','0.2'],    
                        name:'月份',
                        data:keys,
                        // nameTextStyle:{
                        //     padding:[0,0,0,30]
                        // }
                        
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        interval:y_interval,
                        name:'次数',
                        axisLine:{
                            // show:true,
                            lineStyle :{
                                // color: '#CECECE'
                                color:'black'
                            }
                        },
                    }
                ],
                series : [
                    {
                        name:'每个月记录次数',
                        type:'line',
                        symbol:'circle',
                        symbolSize:8,
                        smooth: 0.1,
                        color:['#66AEDE'],
                        data:values
                    },
                ],

                };
    oMyChart.setOption(option);
    // console.log(values)
}
// ………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………

// 画出时间统计图
function show_every_hour(keys,values,x_interval,y_interval){
    // 统计非零的坐标
    function createdPointList(data, xdata) {
        data = data || []
        xdata = xdata || []
        var res = []
        data.forEach((itm,idx) => {
            // 未提交的坐标提取
            if (itm != 0) {
                res.push({
                    coord: [xdata[idx], itm]
                })
            }
        })
        return res
    }
    var markPointList = createdPointList(values, keys)

    var oMyChart = echarts.init(document.getElementById("time_sta_box"));
    var option = {
                // 定义样式和数据
                // backgroundColor: '#FBFBFB',
                grid:{
                    y:'20%',
                    width:'70%',
                    height:'50%',
                    // x:'40px',
                    // x2:'40px',
                },
                tooltip : {
                    trigger: 'axis',
                    // show:true,
                },
                legend: {
                    data:['每个小时记录次数']
                },

                calculable : true,


                xAxis : [
                    {
                        axisLabel:{
                            // rotate: 40,
                            interval:x_interval,
                        },
                        axisLine:{
                            lineStyle :{
                            color:'black'
                            }
                        },
                        type : 'category',
                        boundaryGap : ['0.2','0.2'],
                        name:'时间',
                        data:keys,
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        interval:y_interval,
                        name:'次数',
                        axisLine:{
                            // show:true,
                            lineStyle :{
                                // color: '#CECECE'
                                color:'black'
                            }
                        },
                    }
                ],
                series : [
                    {
                        name:'每个小时记录次数',
                        type:'line',
                        symbol:'none',
                        // symbol:'circle',
                        // symbolSize:5,
                        smooth: 0.1,
                        color:['#66AEDE'],
                        data:values,
                        // 单独标记特定的坐标
                        markPoint:{
                            symbol:'circle',
                            symbolSize:8,
                            // data:[{coord:[5,0]}]，
                            data:markPointList,
                        },

                        // showSymbol:false,
                    },
                
                ],

                };
    oMyChart.setOption(option);
}




// ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
//          查询完成后界面的交互
// ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————


// 点击按钮，将内容定位到按钮所指的那一天
function tonclick(now_src){
    // 读取当前按钮的序号
    var now_num=now_src.getAttribute("now_src")
    // 根据num显示读取上一个按钮的序号,使用innerText读取div的值
    var pre_num=document.getElementById('now_num').innerText
    pre_num=Number(pre_num)-1
    // 更新num显示
    show_num(total_num,Number(now_num)+1)
    // 标红当前按钮
    active_button(now_num,pre_num)
    // 将div显示的内容跳转到对应位置
    scrollToLocation(now_num)
}


// 滚动内容的窗口到指定位置
function scrollToLocation(now_num) {
    var mainContainer = $('#content_show');
    scrollToContainer = mainContainer.find(`.each_day:eq(${now_num})`);//滚动到<div id="thisMainPanel">中类名为son-panel的最后一个div处
    //scrollToContainer = mainContainer.find('.son-panel:eq(5)');//滚动到<div id="thisMainPanel">中类名为son-panel的第六个处
    //非动画效果
    mainContainer.scrollTop(
     scrollToContainer.offset().top - mainContainer.offset().top + mainContainer.scrollTop()
    );
    //动画效果
    // mainContainer.animate({
    //   scrollTop: scrollToContainer.offset().top - mainContainer.offset().top + mainContainer.scrollTop()
    // }, 1000);//2秒滑动到指定位置
  }


// 标红按钮
function active_button(now_num,pre_num){
    pre_num_button=document.getElementById('button_'+pre_num)
    pre_num_button.className=''
    now_num_button=document.getElementById('button_'+now_num)
    now_num_button.className='active'
}

// 切换月份统计
function change_to_month_sta(){
    document.getElementById('month_sta_box').className='show_image';
    document.getElementById('time_sta_box').className='hide_image';
    document.getElementById('month_sta').className='active';
    document.getElementById('time_sta').className='';
}

// 切换时间统计
function change_to_time_sta(){
    document.getElementById('time_sta_box').className='show_image';
    document.getElementById('month_sta_box').className='hide_image';
    document.getElementById('time_sta').className='active';
    document.getElementById('month_sta').className='';
}

// ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
// ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
// ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————


