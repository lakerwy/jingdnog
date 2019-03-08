
// js querySelector()方法返回文档中匹配指定css选择器的一个元素
xx.onclick = function() {
	var xx =document.getElementById('xx');
	var ban =document.querySelector(".top-banner");
	ban.style.display="none";
	
}

// 主轮播图系列
var ig = document.querySelectorAll('#lunbo-img>li');
var ls = document.querySelectorAll('#lunbo-nav>li');

var nextBtn = document.getElementById('next');
var prevBtn = document.getElementById('prev');
var lunbo = document.querySelector('.content-lunbo');

nextBtn.onclick = next;//不能写next（）；是因为加（）函数直接执行

prevBtn.onclick = prev;
var index = 0;

//按钮的功能
function next(){
	ig[index].style.opacity=0;
	index++;
	if(index == 7 ){
		index = 0;
	}
	ig[index].style.opacity=1;
	changeColor();
}
function prev(){
	ig[index].style.opacity=0;
	index--;
	if(index ==-1){
		index = 6;
	}
	ig[index].style.opacity=1;
	changeColor();
}
var mytime=setInterval(next,2000);
//将导航点和图片数据绑定
for(var i = 0; i <ls.length; i++){
	ls[i].pos = i;
	ls[i].onmouseover = function(){
	ig[index].style.opacity = 0;
	index = this.pos;
	ig[index].style.opacity = 1;
	changeColor();
	}	
}
//改变圆点颜色
function changeColor() {
	for(var i = 0; i <ls.length;i++){
		ls[i].style.background = 'rgb(255,255,255,0.5)';
	}
	ls[index].style.background = 'white';
	
}

// 、、、、、、、、主轮播图系列完
var hs= document.querySelector('.jcd .cd-1');
var ms= document.querySelector('.jcd .cd-2');
var ss= document.querySelector('.jcd .cd-3');
window.onload = startTime;
function startTime(){ 
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s =today.getSeconds();
	hs.innerHTML = checkTime(20-h);
	ms.innerHTML = checkTime(60-m);
	ss.innerHTML = checkTime(60-s);
	setTimeout(function(){startTime()},500);
}
function checkTime(i){
	if (i<10){
		i="0" + i;
	}
	return i;
}
//轮播图下方
$(function () {
	var xhRight = null;
	//scroll news
	var scrnews = $(".slider-main");

	if (scrnews.children().length < 4) { return false; }

	var newst = setInterval(scro, 3500);

	scrnews.hover(function () {
		clearInterval(newst);
	}, function () {
		newst = setInterval(scro, 3500);
	})

	function scro() {
		scrnews.animate({ left: -1000 }, 1500, function () {
			$(this).children("li:first").appendTo(this);
			$(this).css("left", 0);
		});
	}


	$('.slider-page li').hover(function () {
		clearInterval(newst);
	}, function () {
		newst = setInterval(scro, 3500);
	})

	$('.slider-prev').click(function () {
		scrnews.children("li:first").appendTo(scrnews);

	})
	$('.slider-next').click(function () {
		scrnews.children("li:last").prependTo(scrnews);

	})
})

//倒计时时器
// window.onload = startTime;
// function startTime(){ 
// 	var today = new Date();
// 	var h = today.getHours();
// 	var m = today.getMinutes();
// 	var s =today.getSeconds();
// 	// doucument.getElementById('txt1').innerHTML=h;
// 	// // doucument.getElementById('txt').innerHTML=m;
// 	// // doucument.getElementById('txt').innerHTML=s;
// 	setTimeout(function(){startTime()},500);
	
	

// }
