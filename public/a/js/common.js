$.ajax({
    url:'/employee/checkRootLogin',
    type:'get',
  	async:false,
    success:function(res){
        // console.log(res);
        if(res.error && res.error == 400) {
            location.href = 'login.html';
        }
        
    }
})

$(function(){

	$('.login_out_bot').on('click',function(){
		
		$.ajax({
			url:'/employee/employeeLogout',
			tyep:'get',
			success:function(res){
				if(res.success) {
					if(confirm('确定登出吗?')) {
						location.href = 'login.html';
					}
					
				}
			}
		})
	})









	var navLi = $('.navs li')

	navLi.on('click',function(){

		$(this).find('ul').slideToggle();

	});

	

});

//封装分类数据获取
function getCategoryData(url,tempId,boxId,PageSize){
	$.ajax({
		url:url,
		type:'get',
		data:{
			page:page,
			pageSize:PageSize ? PageSize:pageSize
		},
		success:function(res){
			pageCount = Math.ceil(res.total / pageSize);
			var html = template(tempId,res);
			$(boxId).html(html)
			
		}
	});
}