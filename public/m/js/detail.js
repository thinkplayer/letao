$(function () {

    var id = getParasByUrl(location.href, 'id');
    // console.log(id);
    
    $.ajax({
        url: '/product/queryProductDetail',
        type: 'get',
        data:{
            id:id
        },
        success: function (res) {
            console.log(res);
            var html = template('detailTemp',res);
            // console.log(html);
            $('#detailBox').html(html)
            $('.inventory').html(res.num);
            //获得slider插件对象
            var gallery = mui('.mui-slider');
            gallery.slider();
            
        }
    });
    //鞋码选中高亮
    $('#detailBox').on('tap','.product-size span',function(){
        $(this).addClass('active').siblings('span').removeClass('active');
    });
    //添加按钮
    
    
})