$(function () {
    
    //给获取验证码注册点击事件
    $('#getVcode').on('tap', function () {
        $.ajax({
            type: 'get',
            url: '/user/vCodeForUpdatePassword',
            success: function (res) {
                console.log(res.vCode);

            }
        })

    });
    //给修改密码按钮注册点击事件
    $('.affirmUpadatePassword').on('tap',function(){
        var oldPassword = $('[name="oldPassword"]').val();
        var newPassword = $('[name="newPassword"]').val();
        var affirmNewPassword = $('[name="affirmNewPassword"]').val();
        var vCode = $('[name="vCode"]').val();
        if(!$.trim(oldPassword)) {
            mui.toast('密码不能为空');
            return;
        }
        if(!$.trim(newPassword)) {
            mui.toast('新密码不能为空');
            return;
        }
        if(!$.trim(affirmNewPassword)) {
            mui.toast('确认新密码不能为空');
            return;
        }
        $.ajax({
            url:'/user/updatePassword',
            type:'post',
            data:{
                oldPassword:oldPassword,
                newPassword:newPassword,
                vCode:vCode
            },
            success:function(res){
                // console.log(res);
                if(res.success) {
                    mui.toast('修改密码成功');
                    setTimeout(function(){
                        location.href = 'login.html';
                    },2000);
                }
            }
        })
    })
    

    
})