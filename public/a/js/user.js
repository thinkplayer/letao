$(function(){
    $.ajax({
        url:'/user/queryUser',
        type:'get',
        data:{
            page:1,
            pageSize:10
        },
        success:function(res){
            console.log(res);
            var html = template('userBoxTemp',res);
            // console.log(html);
            
            $('#userBox').html(html);
        }
    });
    //状态切换
    $('#userBox').on('click','.btn-change',function(){
        //获取isDelate    使用number转换成数字
        var isDelete = Number($(this).attr('data-isDelete'));
        
        var id = $(this).attr('data-id');
        $.ajax({
            url:'/user/updateUser',
            type:'post',
            data:{
                isDelete: isDelete ? 0 : 1,
                id:id
            },
            success:function(res){
                console.log(res);
                if(res.success) {
                    console.log(isDelete);
                    location.reload();
                }
                

                
            }
        })
    })
})