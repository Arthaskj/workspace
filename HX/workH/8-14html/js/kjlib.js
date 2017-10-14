/*
 *****************************************
 *
 *     Author     : Arthas 
 *     E-mail     : arthas@gmail.com
 *     DateTime   : 2017-08-10  14:31:36
 *     Description: 
 *     ChangeTime : 2017-08-17  14:46:50
 *
 *****************************************
*/

// 快捷获取对ID/CSS/TAGNAME象
function kj(myId,myid2){
	var b;
	var a;
		if(myId.indexOf("#")==0){
			b=myId.substring(1);
			a=document.getElementById(b);
		}else if(myId.indexOf(".")==0){
			b=myId.substring(1);
			a=document.getElementsByClassName(b);
		}else{
			a=document.getElementsByTagName(myId);
		}
	return a;
}


// 数组随机排列函数封装
// var arrList =Array("1","2","3","4","5","6","7","8","9");
// arrList = randomArr(arrList);
// 	console.log(arrList);
// console.log(randomArr(arrList));
function randomArr(arr){
	var arrDemo = Array();
	var len1 = arr.length;
	for(var i=0;i<len1;i++){
		var len = arr.length;
		idx = Math.floor(Math.random()*len);
		arrDemo.push(arr[idx]);
		var val = arr[idx];
		arr[idx] = arr[len-1];
		arr[len-1] = val;
		arr.pop();
	}
	return(arrDemo);
}


// 自定义定时器改变对象属性   myMove（对象，“属性”，目标值，速度，函数）
function myMove(obj,attr,target,speed,fn){
	start = parseInt(getStyle(obj,attr));
	speed = (start<target)?speed:-speed;
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var nowPis = parseInt(getStyle(obj,attr)) + speed;
		if(Math.abs(target - nowPis) <= Math.abs(speed)){
			obj.style[attr] = target  + "px";
			clearInterval(obj.timer);
			if(fn){
				fn()
			}
		}else{
			obj.style[attr] = nowPis + "px";
		}
	},20);
}


// 移动动画，设置两个对象的移动动画
function myMove2(obj,attr,attr2,target,target2,speed,fn){
	var start = parseInt(getStyle(obj,attr));
	var speed = (start<target)?speed:-speed;
	var speed2 =(speed/(target-start))*(target2-parseInt(getStyle(obj,attr2)));
	
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var nowPis = parseInt(getStyle(obj,attr)) + speed;
		var nowPis2 = parseInt(getStyle(obj,attr2)) + speed2;

		if((Math.abs(target - nowPis) <= Math.abs(speed)) || (Math.abs(target2 - nowPis2) <= Math.abs(speed2))) {
			obj.style[attr] = target  + "px";
			obj.style[attr2] = target2  + "px";
			clearInterval(obj.timer);
			if(fn){
				fn()
			}
		}else if((nowPis2>target2) || (nowPis>target)){
				nowPis2=target2;
				nowPis=target;
				
		} else{
			obj.style[attr2] = nowPis2 + "px";
			obj.style[attr] = nowPis + "px";
		}

	},50);
}

// 获取对象的style属性
function getStyle(obj,attr){return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];}

