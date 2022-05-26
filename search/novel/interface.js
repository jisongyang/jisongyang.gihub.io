var novel_data
var search_content,search_result
var novel_dict={}
var pre_red_num=0,now_red_num=0


// 避免加载中文乱码
$(function () {
    $.ajaxSetup({
        'beforeSend': function (xhr) {
            xhr.overrideMimeType('text/plain; charset=GB2312');
        }
    });
});

// ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
//          查询和清空两个按钮对应的函数
// ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————

// 清空按钮函数
function delete_all(){
    document.getElementById('content').value=''
    document.getElementById('button_show').innerHTML=''
    document.getElementById('content_show').innerHTML=''
}

// 查询按钮函数
function search(){

    // 显示（请稍等）
    show_info()
    // document.getElementById('content_show').innerHTML='请稍等一下下下下下=。='

    setTimeout(function search_process(){
        // 获取文件目录
        swap_file()
    
        // 读取搜索条件
        read_input();
    
        // 得到搜索结果
        search_result=get_result();
    
        // throw new Error
    
        // 展示结果
        show_reseult(search_result);
    })

}



// ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
//          查询函数的各个子函数
// ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————

// 显示（请稍等）
function show_info(){
    document.getElementById('content_show').innerHTML='请稍等一下下下下下=。='
}


// 扫描文件目录

function swap_file(){
    $.ajaxSetup({async:false})
    novel_info=$.ajax({url:"novel/list.txt",async:false})['response'];
    console.log(novel_info)
    for(var ob of novel_info.split('\n')){
        [novel_name,chapter_num]=ob.split('\t')
        novel_dict[novel_name]=chapter_num.split('\r')[0]
    }
    console.log(novel_dict)
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 读取输入框的内容
function read_input(){
    search_content=document.getElementById('content').value
    console.log(search_content);
};

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// 读取单个文件
function read_singe_file(now_novel,now_chapter){
    file_name='novel/'+now_novel+'/'+now_chapter+'.txt'
    // console.log(file_name)
    
    $.ajaxSetup({async:false})
    file_content=$.ajax({url:file_name,async:false})['response'];
    return file_content
}


// 根据内容搜索高亮显示一些词,并统计内容命中的次数
function highlight_sentence(sentence,content,conut_num){
    var html_str='<font color="red">'+'<b>'+content+'</b>'+'</font>';
    var split_lis=sentence.split(content);
    conut_num+=split_lis.length-1;
    sentence=split_lis.join(html_str);
    return [sentence,conut_num]
}


// 得到搜索结果
function get_result(){
    var conut_num=0;
    var result_data={},now_result_data={}

    // 如果没有输入返回空
    if(search_content==''){
        return result_data
    }

    // 对每一篇小说遍历
    for(now_novel in novel_dict){
        now_result_data[now_novel]={}
        // 生成章节目录（一个连续数组）
        chapter_list=Array.from(new Array(Number(novel_dict[now_novel]) + 1).keys()).slice(0)
        // 对当前小说的每一章遍历
        for(now_chapter of chapter_list){
            // 读取当前章节
            now_content=read_singe_file(now_novel,now_chapter)
            // console.log(now_content)

            // 如果包含查询的内容
            if(now_content.includes(search_content)){
                search_flag=true;
                [now_content,conut_num]=highlight_sentence(now_content,search_content,conut_num)
                // console.log(now_content);
                // console.log('查询到个数',conut_num);
                now_result_data[now_novel][now_chapter]=now_content
            }  
        }
        
        if(JSON.stringify(now_result_data[now_novel]) != "{}"){
            result_data[now_novel]=now_result_data[now_novel]
        }
        console.log(result_data)
    }
    return result_data
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 展示搜索结果
function show_reseult(search_result){
    // 如果搜索结果为空，则清空界面的显示
    if(JSON.stringify(search_result) == "{}"){
        document.getElementById('content_show').innerHTML='没有搜索结果=。='
        document.getElementById('button_show').innerHTML=''
    }else{

        total_num=search_result.length

        // 展示内容
        first_novel=show_content(search_result);
        
        // 展示搜索结果按钮
        show_button(search_result,first_novel);
        
    }

}

// ………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………


// 构建章节查询结果的html
function get_chapter_html(chapter_content){
    now_lis=chapter_content.split('\r')
    // console.log(now_lis)
    clear_lis=[]
    for (now_sentence of now_lis){
        // console.log(now_sentence)
        // now_sentence= now_sentence.replace(/\r|\n/g, "")
        if(now_sentence!='\n'){
            clear_lis.push(now_sentence)
        }
        
    }


    return     '<div class="each_day">'+'<br>&emsp;&emsp;'+clear_lis.join('<br><br>')+'<br>'+'</div>'
}

// 显示搜索结果的内容
function show_content(search_result){
    // 构建显示的html
    var content_html=''
    for (var now_novel in search_result){
        for (var now_chapter in search_result[now_novel]){
            content_html=get_chapter_html(search_result[now_novel][now_chapter])

            break
        }
        break
    }

    // 将html写入
    var content_show=document.getElementById('content_show')
    content_show.innerHTML=content_html
    document.getElementById('content_show').scrollTop = 0;
    return now_novel
}

// ………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………………

// 显示搜索结果的按钮
function show_button(search_result,first_novel){
    var button_html=first_novel+'<br>'
    var pre_novel=first_novel
    var cnt=0
    for (var now_novel in search_result){
        for (now_chapter in search_result[now_novel]){
            // 如果前后两个按钮所在小说不一样，则增加换行符
            if(now_novel!=pre_novel){
                button_html=button_html+'<br><br>'+now_novel+'<br>'
                pre_novel=now_novel
            }
            
            button_html=button_html+`<button id="button_${cnt}" class="" now_src="${now_novel+'#'+now_chapter}" onclick="tonclick(this)">第${now_chapter}章</button>`
            cnt+=1
        }
    }
    // 将html写入
    var button_show=document.getElementById('button_show')
    button_show.innerHTML=button_html

    // 尝试将第一个按钮标红并设置pre_red_num
    try{
        document.getElementById('button_0').className='active'
        pre_red_num=0
    }
    catch(err){
    }

}

// ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
//          查询完成后界面的交互
// ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————


// 点击按钮，将内容定位到按钮所指的那一天
function tonclick(now_src){

    // 获取当前按钮信息
    [now_novel,now_chapter]=now_src.getAttribute("now_src").split('#')
    now_red_num=now_src.getAttribute("id").split('_')[1]

    // 标红当前按钮
    active_button()
    // 显示指定章节的内容
    show_single_chapter(now_novel,now_chapter)
}

// 标红按钮
function active_button(now_num,pre_num){
    pre_num_button=document.getElementById('button_'+pre_red_num)
    pre_num_button.className=''
    now_num_button=document.getElementById('button_'+now_red_num)
    now_num_button.className='active'
    pre_red_num=now_red_num
}

// 显示指定章节的内容
function show_single_chapter(now_novel,now_chapter){
    // 构建显示的html

    content_html=get_chapter_html(search_result[now_novel][now_chapter])

    // 将html写入
    var content_show=document.getElementById('content_show')
    content_show.innerHTML=content_html
    document.getElementById('content_show').scrollTop = 0;
}