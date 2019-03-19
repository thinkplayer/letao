

$(function () {
    //给搜索按钮注册点击事件
    $('#search-button').on("click", function () {
        // console.log(this);
        //点击搜索的时候搜集表单内容
        var keyWord = $('.search-box').val();
        

        //判断用户是否输入搜索内容,有内容就放到历史搜索盒子里
        if (!keyWord) {
            alert("请输入要搜索的关键字");
            return;
        }

        if (localStorage.getItem('keyWords')) {
            //将关键字转化为数组形式
            var keyWords = JSON.parse(localStorage.getItem('keyWords'));
            
            keyWords.push(keyWord);
            localStorage.setItem('keyWords',JSON.stringify(keyWords));
        } else {
            localStorage.setItem('keyWords',JSON.stringify([keyWord]));
        }
        console.log(keyWords);

        location.href = 'search-result.html?keyWords='+keyWord;
        



    })
    //判断是否存在搜索记录,然后去将搜索记录渲染奥界面
    if (localStorage.getItem('keyWords')) {
        var keyWords = JSON.parse(localStorage.getItem('keyWords'));
        $('.history-show').html(template('searchHistoryTemp',{items:keyWords}));
    }
    //给清楚历史记录注册点击事件
    $('.history-cancel').on('click',function(){
        // console.log(this);
        localStorage.removeItem('keyWords');
        $('.history-show').html('');
        
    })
   
})