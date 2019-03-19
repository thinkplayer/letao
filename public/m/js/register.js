$(function () {
    getCode();
    //给注册按钮添加点击事件
    $('.registerBtn').on('click', function () {
        //获取用户表单
        var username = $('[name="username"]').val();
        var mobile = $('[name="mobile"]').val();
        var password = $('[name="password"]').val();
        var affirmPassword = $('[name="affirmPassword"]').val();
        var vCode = $('[name="vCode"]').val();
        //验证密码和确认密码是否一致
        if (password != affirmPassword) {
            mui.toast('用户密码不一致');
            return;
        }
        if (!$.trim(username)) {
            mui.toast('用户名不能为空');
            return;
        }
        if (!$.trim(password)) {
            mui.toast('密码不能为空');
            return;
        }
        //
        $.ajax({
            url: '/user/register',
            type: 'post',
            data: {
                username: username,
                password: password,
                mobile: mobile,
                vCode: vCode
            },
            success: function (res) {
                console.log(res);
                setTimeout(function(){
                    localtion.href = 'login.html';
                },1000)
                
                
            }
        })


    });
    
})

