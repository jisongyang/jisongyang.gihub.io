

// function show(){
//     var show_content=document.getElementById("content_show")
//     var serch=document.getElementById('content')
//     show_content.innerHTML=serch.value
   
// }

var total_data;
var content,year,month,day,max_length,min_length;


// window.onload = function(){

//     total_data=read_json();
//     console.log(total_data);

//     read_input();
//     console.log(content,year,month,day,max_length,min_length);

// }


function search_content(){
    total_data=read_json();
    content,year,month,day,max_length,min_length=read_input();
    get_result();

}

function read_json(){
    $.ajaxSetup({async:false})
    $.getJSON("use_json.json", function(data) {
        //data 代表读取到的json中的数据
        total_data=data.res;
        // console.log(total_data);
    });
    return total_data
}

function read_input(){
    content=document.getElementById('content').value
    year=document.getElementById('year').value
    month=document.getElementById('month').value
    day=document.getElementById('day').value
    max_length=document.getElementById('max_length').value
    min_length=document.getElementById('min_length').value
    console.log(content,year,month,day,max_length,min_length);
    return content,year,month,day,max_length,min_length
};

function get_result(){
    // 取出每一天内容
    var content_result=[]
    for (var ob of total_data.slice(0,2)){
        var now_content=ob.content;
        console.log(now_content);
        var content_flag=false
        // 取出当天每一句话
        for (var sentence of now_content){
            if(sentence.includes(content)){
                content_flag=true;
                console.log(sentence);
            }       
        }
        if(content_flag==true){
            content_result.push(ob)
        }
    }
    console.log(ob);
    
}








// console.log('www')

// $.getJSON("use_json.json", function(data) {
//     //data 代表读取到的json中的数据
//     console.log(data)
// });