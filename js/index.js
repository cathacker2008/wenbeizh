$(document).ready(function(){
	var resetSize = function(){
		var h = $(window).height();
		if(846<h){
			$('.content').css('height',h-91-55);
		}else{
			$('.content').css('height',700);
		}
	}
	var pageIndex=0;imgArr = ['al.jpg','al2.jpg','deskManage.jpg','dt1.png','dt1.png','dt2.png','dt3.png','dt4.jpg','dt5.png','dt6.png','dt7.png','home.png','mm1.jpg','tp1.jpg','um.jpg'];
	var len=imgArr.length;
	var next = function(){
		pageIndex = ++pageIndex >= len?0:pageIndex; 
		$('.content').css('backgroundImage','url(./img/'+imgArr[pageIndex]);
	}
	var  pre= function(){
		pageIndex = --pageIndex < 0 ?len-1:pageIndex; 
		$('.content').css('backgroundImage','url(./img/'+imgArr[pageIndex]);
	}
	$('.left').bind('click',pre);
	$('.right').bind('click',next);
	$('.content').css('backgroundImage','url(./img/'+imgArr[0]);
	resetSize();
	$(window).resize(resetSize);
});
