
var userInfo = null;

$.ajax({
    url:'/user/queryUserMessage',
    type:'get',
    async:false,//开启同步
    success:function(res){
        // console.log(res);
        if(res.error && res.error == 400) {
            location.href = 'login.html';
            return;
        };
        userInfo = res;
    }
});


$(function(){
    //渲染用户信息
    var html = template('userInfoTemp',userInfo);
    // console.log(html);
    $('#userInfoBox').html(html);
    
   //登出按钮
    $('#loginOut').on('tap',function(){
        $.ajax({
            url:'/user/logout',
            type:'get',
            success:function(res){
                // console.log(res);
                if(res.success) {
                    mui.toast('退出成功');
                    setTimeout(function(){
                        location.href = 'index.html';
                    },2000)
                }
            }
        })
    })
})