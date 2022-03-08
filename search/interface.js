


var total_data;
var content,year,month,day,max_length,min_length;
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
    document.getElementById('max_length').value=''
    document.getElementById('min_length').value=''

    document.getElementById('total_num').innerHTML=0
    document.getElementById('now_num').innerHTML=0
    
    document.getElementById('button_show').innerHTML=''
    document.getElementById('content_show').innerHTML=''
}

// 查询按钮函数
function search(){
    // 读取数据
    total_data=read_json();
    // 读取搜索条件
    content,year,month,day,max_length,min_length=read_input();
    // 得到搜索结果
    search_result=get_result(total_data);
    // 展示搜索结果
    show_reseult(search_result);
}







// ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
//          查询函数的各个子函数
// ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————


// 读取json文件
function read_json(){
    $.ajaxSetup({async:false})
    $.getJSON("use_json.json", function(data) {
        //data 代表读取到的json中的数据
        total_data=data.res;
        // console.log(total_data);
    });
    return total_data
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
    content_result=content_search(total_data)
    date_result=date_search(content_result)
    search_result=length_search(date_result)
    return search_result
}


// ………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………

// 内容搜索
function content_search(total_data){
    if(content==''){
        return total_data
    }
    // 取出每一天内容
    var content_result=[]
    for (var ob of total_data){
        var now_content=ob.content;
        // console.log(ob);
        // console.log(now_content);
        var content_flag=false              // 当天是否被内容搜索命中
        highlight_content=[]                // 高亮显示内容    
        // 取出当天每一句话
        for (var sentence of now_content){
            if(sentence.includes(content)){
                content_flag=true;
                sentence=highlight_sentence(sentence,content)
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
    // console.log(content_result);
    return content_result;
}

// ………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………

// 日期搜索
function date_search(content_result){
    if(year=='' && month=='' && day==''){
        return content_result
    }
    var date_result=[]
    for(var ob of content_result){
        var now_date=ob.date[0].split('-');
        console.log(now_date);
        if((year==''||year==now_date[0])&&(month==''||month==now_date[1])&&(day==''||day==now_date[2])){
            date_result.push(ob)
        }
    }
    return date_result
}

// ………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………

// 长度搜索
function length_search(date_result){
    if(max_length=='' && min_length==''){
        return date_result
    }
    var length_result=[]
    for(var ob of date_result){
        var now_length=ob.length;
        if((min_length==''||min_length<=now_length)&&(max_length==''||max_length>=now_length)){
            length_result.push(ob)
        }
    }
    return  length_result
    
}


// ………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………

// 根据内容搜索高亮显示一些词
function highlight_sentence(sentence,content){
    var html_str='<font color="red">'+'<b>'+content+'</b>'+'</font>'
    // console.log(html_str);
    sentence=sentence.split(content).join(html_str)
    return sentence
}


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 展示搜索结果
function show_reseult(search_result){
    total_num=search_result.length
    show_num(total_num,now_num)
    show_content(search_result);
    show_button(search_result);
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
    if(content_html==''){
        content_html='没有搜索结果=。='
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
    for (var i in search_result){
        ob=search_result[i]
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

// ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
// ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
// ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
