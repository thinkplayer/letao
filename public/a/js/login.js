$.ajax({
    url:'/employee/checkRootLogin',
    type:'get',
    async: false,
    success:function(res){
        console.log(res);
        if(res.success) {
            location.href = 'user.html';
        }
        
    }
})

$(function(){



    $('.btn-primary').on('click',function(){
        var username = $.trim($('.form-username').val());
        var password = $.trim($('.form-password').val());
        
        if(!username) {
            alert('请输入用户名');
            return;
        };
        if(!password) {
            alert('请输入密码');
            return;
        };
        $.ajax({
            url:'/employee/employeeLogin',
            type:'post',
            data :{
                username:username,
                password:password,
            },
            success:function(res) {
                // console.log(res);
                
                if(res.success) {
                    location.href = 'user.html';
                } else {
                    alert('用户名或密码不正确')
                }
            }
        })

    });




})