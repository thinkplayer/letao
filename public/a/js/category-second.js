var page = 1;
var pageSize = 5;
var pageCount = 100;

$(function(){
    

    getCategoryData('/category/querySecondCategoryPaging','categorySecondTemp','#categorySecondBox');
    //上一页
    $('#preBtn').on('click',function(){
        page--;
        if(page<1) {
            page =1;
            alert('已经是第一页了');
            return;
        }
        getCategoryData('/category/querySecondCategoryPaging','categorySecondTemp','#categorySecondBox');
    });
    //下一页按钮
    $('#nextBtn').on('click',function(){
        page++;
        if(page>pageCount) {
            page = pageCount;
            alert('已经是最后一页了');
            return;
        }
        getCategoryData('/category/querySecondCategoryPaging','categorySecondTemp','#categorySecondBox');
    });

    //添加二级分类---展示一级分类
    getCategoryData('/category/queryTopCategoryPaging','categoryFirstTemp','#categoryFirstBox',100);

    //上传图片展示
    var brandLogo = "";

	$('#fileUpload').fileupload({
       dataType: 'json',
       done: function (e, data) {
           
           console.log(data.result);

           // 上传图片预览
           $('#preview').attr("src",data.result.picAddr);

           brandLogo = data.result.picAddr;

       }
   	});
    
    // 保存添加二级分类
    $('#save').on('click',function(){
        
        var categoryId = $('[name="categoryId"]').val();
        var brandName = $('[name="brandName"]').val();
        
        $.ajax({
            url:'/category/addSecondCategory',
            type:'post',
            data:{
                brandName:brandName,
                categoryId:categoryId,
                brandLogo:brandLogo,
                hot:0
            },
            success:function(res){
                // console.log(res);
                if(res.success) {
                    location.reload();
                }
            }
        })
        
    })






})