    
    
$(function(){

    var page = 1;
    var pageSize = 10;
    var pageCount = 0;

    getData();
    //上一页按钮
    $('#preBtn').on('click',function(){
        page--;
        if(page<1) {
            page =1;
            alert('已经是第一页了');
            return;
        }
        getData();
    });
    //下一页按钮
    $('#nextBtn').on('click',function(){
        page++;
        if(page>pageCount) {
            page = pageCount;
            alert('已经是最后一页了');
            return;
        }
        getData();
    });
    //添加一级分类
    $('#save').on('click',function(){
        
        var categoryFirstName = $('[name="category-first-name"]').val();
        
        $.ajax({
            url:'/category/addTopCategory',
            type:'post',
            data:{
                categoryName:categoryFirstName
            },
            success:function(res){
                // console.log(res);
                if(res.success) {
                    location.reload();
                }
            }
        })
        
    })



    //封装获取一级分类数据
    function getData(){
        $.ajax({
            url:'/category/queryTopCategoryPaging',
            type:'get',
            data:{
                page:page,
                pageSize:pageSize
            },
            success:function(res){
                console.log(res);
                pageCount = Math.ceil(res.total / pageSize);
    
                var html = template('categoryFirstTemp',res);
                $('#categoryFirstBox').html(html)
            }
        });
    }
});


