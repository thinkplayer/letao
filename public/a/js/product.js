var page = 1;
var pageSize = 5;
var pageCount = 100;

$(function(){
    
    getCategoryData('/product/queryProductDetailList','productTemp','#productBox');
})