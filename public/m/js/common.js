$(function(){
    $('body').on('tap','a',function(){
        mui.openWindow({
            url:$(this).attr('href')
        })
    });
    
});
//获取验证码
function getCode() {
    //给获取验证码注册点击事件
    $('#getVcode').on('tap', function () {
        $.ajax({
            type: 'get',
            url: '/user/vCode',
            success: function (res) {
                console.log(res.vCode);

            }
        })

    });
};
//封装一个截取url关键字
function getParasByUrl(url, name) {
    //接收用户传来的数据
    // var url = location.href.substr(location.href.indexOf('?')+1);
    // // console.log(url);

    var params = url.substr(url.indexOf('?') + 1).split('&');
    // console.log(params);
    for (var i = 0; i < params.length; i++) {
        var param = params[i].split('=');
        if (param[0] == name) {
            return param[1];
        }
    }
};