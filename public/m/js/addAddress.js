


$(function(){
    
    //添加三级联动插件
    var picker = new mui.PopPicker({layer: 3}); 
    picker.setData(cityData); 
    $('#addressAddEditBox').on('tap','[name="address"]',function(){
        picker.show(function(SelectedItem) {
            // console.log(SelectedItem);
            $('[name="address"]').val(SelectedItem[0].text+SelectedItem[1].text+SelectedItem[2].text);
        })
    });



    
    var isEdit = Number(getParasByUrl(location.href, 'isEdit'));
    // console.log(isEdit);
    if(isEdit == 1) {
        //获取localStorage中数据
        if(localStorage.getItem('addressEdit')){
            var addressEdit = JSON.parse(localStorage.getItem('addressEdit'));
            // console.log(addressEdit);
            var html = template('addressAddEditTemp',addressEdit)
            $('#addressAddEditBox').html(html);
        }
        
        
    } else {
        //渲染地址添加模板
        var html = template('addressAddEditTemp',{})
        $('#addressAddEditBox').html(html);
    }
    

    


    //确认按钮注册点击事件-----增加地址
    $('#affirm').on('tap',function(){
        var address = $('[name="address"]').val();
        var addressDetail   = $('[name="addressDetail"]').val();
        var recipients   = $('[name="recipients"]').val();
        var postcode   = $('[name="postcode"]').val();
        var data = {
            address: address,
			addressDetail: addressDetail,
			recipients: recipients,
			postCode: postcode
        };
        if(isEdit) {
            var url = "/address/updateAddress";
            data.id=addressEdit.id;
        } else {
            var url = "/address/addAddress";
        }
        $.ajax({
            url:url,
            type:'post',
            data:data,
            success:function(res){
                // console.log(res);   
                if(res.success) {
                    if(isEdit) {
                        mui.toast('修改地址成功');
                    } else {
                        mui.toast('添加地址成功');
                    }
                    
                    setTimeout(function(){
                        location.href = 'address.html';
                    },2000)
                }
                
            }
        })
        
    });

    
    
})