

$(function () {
    //登录按钮注册点击事件
    $('.loginBtn').on('click', function () {
        var username = $('[name="username"]').val();
        var password = $('[name="password"]').val();
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
            url: '/user/login',
            type: 'post',
            data: {
                username: username,
                password: password
            },
            success: function (res) {
                console.log(res);
                mui.toast('登录成功');
                setTimeout(function () {
                    location.href = 'user.html';
                }, 1000)
            }
        })
    });
    
})