/*
 *****************************************
 *
 *     Author     : Arthas 
 *     E-mail     : arthas@gmail.com
 *     DateTime   : 2017-08-10  14:31:36
 *     Description: 
 *     ChangeTime : 2017-08-22  09:06:23
 *
 *****************************************
*/

// 快捷获取对ID/CSS/TAGNAME象
function kj(myId){

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
		return new Demo(a);
}

function Demo(a){
	this.a=a
}
Demo.prototype = {
	html:function (str){
		 this.a.innerHTML = str;
		 return this;
	},
	show:function (timer){
		if(timer){
			var c = this.a;
			var d = c.style.opacity;
			console.log(getStyle(c,'opacity'));
			if(getStyle(c,'opacity')!=1){
				var timese = setInterval(function(){
				var b = getStyle(c,'opacity');
					c.style.opacity= b + 0.1;
				},timer);
			}else{
				clearInterval(timese);
			}	
		}else{
			this.a.style.display="block";
		}
		 return this;
	},
	hide:function (timer){
		if(timer){
			var c = this.a;
			var d = c.style.opacity;
			var e = getStyle(c,'opacity');
			if(getStyle(c,'opacity')!=0){
				console.log(e);
				var timess = setInterval(function(){

					if(e=0){
						clearInterval(timess);
					}
				var b = getStyle(c,'opacity');
					c.style.opacity= b - 0.1;
					

				},timer);
				
			}
			
		}else{
			this.a.style.display="none";
		}
		 return this;
	},
	css:function (val){
		 this.a.style.background=val;
		 return this;
	},
	click:function (fn){
		bind(this.a,'click',fn);
		return this;
	},
	mouseover:function (fn){
		bind(this.a,'mouseover',fn);
		return this;
	},
	mouseout:function (fn){
		bind(this.a,'mouseout',fn);
		return this;
	},
	hover:function (fn1,fn2){
		bind(this.a,'mouseover',fn1);
		bind(this.a,'mouseout',fn2);
	},
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

// 事件绑定兼容性写法  bind(div,'click',fun());
function bind(obj,evname,fn){
	if(obj.addEventListener){
		obj.addEventListener(evname,fn,false)
	}else{
		obj.attachEvent('on' + evname,function(){
			fn.call(obj);
		});
	}
	//阻止事件冒泡
	//event.stopPropagation();
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


function ajax(url,fnSucc,fnFaild){
	// 1.创建ajax对象
	var oAjax=null;
	if(window.XMLHttpRequest){
		oAjax=new XMLHttpRequest();
	}else{
		oAjax=new ActiveXObject("Microsoft.XMLHTTP");
	}

	// 2.连线服务器
	oAjax.open('GET',url,true);

	// 3.发送请求
	oAjax.send();

	// 4.接收返回
	oAjax.onreadystatechange=function(){
		if(oAjax.readyState==4 && oAjax.status==200){

			fnSucc(oAjax.responseText);

		}else{
			if(fnFaild){
				fnFaild();
			}
		}
	}
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

