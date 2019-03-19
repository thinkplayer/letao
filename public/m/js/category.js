$(function () {
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });


    //发送ajax获取一级标题数据
    $.ajax({
        type: 'GET',
        url: '/category/queryTopCategory',
        success: function (res) {
            // console.log(res);
            var html = template("categoryFirst-temp", res);
            $("#categoryFirst").html(html);
            if(res.total !=0) {
                getSecondCategory(res.rows[0].id);
                $('#categoryFirst').children('a').eq(0).addClass('active');

            }

        }
    });



    //给一级栏目添加委托点击事件
    $("#categoryFirst").on("click", "a", function () {
        // console.log(this);
        $(this).addClass('active').siblings('a').removeClass('active');
        //获取一级分类id
        var categoryFirstId = $(this).attr('data-id');
        // console.log(categoryFirstId);
        
        //再次发送ajax展示二级分类目录
        getSecondCategory(categoryFirstId);
        
        

    });



    function getSecondCategory(categoryFirstId){
        $.ajax({
            type: 'get',
            url: '/category/querySecondCategory',
            data:{id:categoryFirstId},
            success: function (res) {
                // console.log(res);
                var html = template("categorySecond-temp", res);
                
                if(res.total == 0){
                    $("#categorySecond").text("暂无数据").addClass('noData');
                    return;
                }
                $("#categorySecond").html(html);
            }
        });
    }
})