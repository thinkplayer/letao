

var page = 1;
var pageSize = 3;
//获取关键字内容
var keyWords = getParasByUrl(location.href, 'keyWords');
var price =1;
var num =1;


$(function () {

    mui.init({
        pullRefresh : {
          container:'.refreshContainer',//待刷新区域标识，querySelector能定位的css选择器均可，比如：id、.class等
          up : {
            height:50,//可选.默认50.触发上拉加载拖动距离
            auto:true,//可选,默认false.自动上拉加载一次
            contentrefresh : "正在加载...",//可选，正在加载状态时，上拉加载控件上显示的标题内容
            contentnomore:'没有更多数据了',//可选，请求完毕若没有更多数据时显示的提醒内容；
            callback :getData //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
          },
        }
    });

    //给价格筛选按钮注册敲击事件
    $('#priceFilter').on('tap',function(){
        price = price == 1 ? 2 : 1;
        page = 1;
        $('#searchResult').html('');
        
        mui('.refreshContainer').pullRefresh().refresh(true);
        getData();
        // console.log(price);
        
        
    });
    //给销量筛选注册点击事件
    $('#salesFilter').on('tap',function(){
        num = num == 1 ? 2 : 1;
        page = 1;
        $('#searchResult').html('');
        
        mui('.refreshContainer').pullRefresh().refresh(true);
        getData();
        // console.log(price);
        
        
    });








});
//封装一个获取搜索结果函数
var This = null;
function getData() {
    if(!This) {
        This = this
    }
    //发送ajax获取数据
    $.ajax({
        type: 'get',
        url: '/product/queryProduct',
        data: {
            pageSize: pageSize,
            page: page++,
            proName: keyWords,
            price:price
        },
        
        success: function (res) {
            // console.log(res);
            var html = template('searchResultTemp', res);
            // console.log(html);
            if(res.data.length > 0) {
                $('#searchResult').append(html);
                This.endPullupToRefresh(false);
            } else {
                This.endPullupToRefresh(true);
            }
        }
    })
}

