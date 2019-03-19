$(function(){
    var address = null;
    $.ajax({
        url:'/address/queryAddress',
        type:'get',
        success:function(res){
            // console.log(res);
            address = res;
            var html = template('addAddressTemp',{items:res});
            $('#addAddressBox').html(html);
        }
    });
    //给删除按钮注册点击事件
    $('#addAddressBox').on('tap','.address-delete',function(){
        //寻找当前的父元素的父元素
        var li = this.parentNode.parentNode;
        // console.log(li);
        var id = this.getAttribute('data-id');
        // console.log(id);
        
        
        mui.confirm('是否删除',function(res){
            // console.log(res);
            if(res.index ==1) {
            //发送id到服务器删除数据
                $.ajax({
                    url:'/address/deleteAddress',
                    type:'post',
                    data:{
                        id:id
                    },
                    success:function(res){
                        console.log(res);
                        if(res.success) {
                            //刷新页面
                            location.reload();
                        }
                        
                    }
                });
            } else {
                mui.swipeoutClose(li);
            }
            
        });
        

    })
    //给编辑按钮注册点击事件
    $('#addAddressBox').on('tap','.address-edit',function(){
        var id = this.getAttribute('data-id');
        // console.log(id);
        //遍历用户储存的地址
        for(var i = 0;i< address.length;i++) {
            if(address[i].id == id) {
                //如果遍历到指定id数据,就储存到localStorage中
                localStorage.setItem('addressEdit',JSON.stringify(address[i]));
                break;
            }
        }
        
        
        
        

    })
})