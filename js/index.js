$(document).ready(function(){
	var resetSize = function(){
		var h = $(window).height();
		if(846<h){
			$('.content').css('height',h-91-55);
		}else{
			$('.content').css('height',700);
		}
	}
	var t;
	var loopPic = function(){
		var i=1;
		$('.content').css('backgroundImage','url(./images/bg0.jpg)');
		//var cIn = $('.c-in')[0];
		//var cOut = $('.c-out')[0];
		t=window.setInterval(function(){
			$('.content').css('backgroundImage','url(./images/bg'+i+'.jpg)');
			i++;	
			if(i==6){
				i=0;
			}
		},3000);
	}
	resetSize();
	loopPic();
	$(window).resize(resetSize);
});
