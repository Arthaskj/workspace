/*
 *****************************************
 *
 *     Author     : Arthas 
 *     E-mail     : arthas@gmail.com
 *     DateTime   : 2017-08-14  16:04:25
 *     Description: 拼图游戏
*     ChangeTime : 2017-08-17  14:06:23
 *
 *****************************************
*/



window.onload=function(){

moveMouse(kj(".img1")[0],0,264,0,264);
moveMouse(kj(".img2")[0],0,264,0,264);
moveMouse(kj(".img3")[0],0,264,0,264);
moveMouse(kj(".img4")[0],0,264,0,264);
moveMouse(kj(".img5")[0],0,264,0,264);
moveMouse(kj(".img6")[0],0,264,0,264);
moveMouse(kj(".img7")[0],0,264,0,264);
moveMouse(kj(".img8")[0],0,264,0,264);
moveMouse(kj(".img9")[0],0,264,0,264);

// 鼠标拖动事件（包含边界条件）
	function moveMouse(obj,a,b,c,d){
		var x1,y1,x2,y2,x3,y3,initX,initY,moveflage=false;	

		obj.onmousedown=function(event){
			obj.style.zIndex="999";	
			x1=event.pageX;
			y1=event.pageY;
			initX = this.offsetLeft;
			initY = this.offsetTop;
			moveflage=true;
		}
		obj.onmousemove=function(event){
				if(moveflage){
					x2=event.pageX;
					y2=event.pageY;
					x3 = parseInt(x2)-parseInt(x1)+parseInt(initX);
					y3 = parseInt(y2)-parseInt(y1)+parseInt(initY);
					//限定边界条件 
					if(x3>a && x3<b && y3>c && y3<d)
					if(x3>a && x3<b) x3=x3;
					if(x3<a ) x3=a;
					if(x3>b ) x3=b;
					if(y3>c && y3<d) y3=y3;
					if(y3<c ) y3=c;
					if(y3>d ) y3=d;
					// 保留最后位置
					this.style.left=x3+"px";
					this.style.top=y3+"px";
				}
		}
		obj.onmouseup=function(){
			var dx = parseInt(x2/132);
			var dx1 = x2%132;
			var dy = y2/132;
			var dy1 = y2%132;

			if(y2<=132 && y2>=0){
				if(dx==0){					
						var xx = getStyle(kj("#img1"),"background");
						 kj("#img1").style.background=getStyle(this,"background");
						this.style.background=xx;						
					}else if(dx==1){						
						var tt = getStyle(kj("#img2"),"background");
						 kj("#img2").style.background=getStyle(this,"background");
						this.style.background=tt;						
					}else if(dx==2){						
						var vv = getStyle(kj("#img3"),"background");
						 kj("#img3").style.background=getStyle(this,"background");
						this.style.background=vv;						
					}
						
			}
			if(y2<=264 && y2>=132){	
				if(dx==0){						
						var vv = getStyle(kj("#img4"),"background");
						 kj("#img4").style.background=getStyle(this,"background");
						this.style.background=vv;						
					}else if(dx==1){
						var tt = getStyle(kj("#img5"),"background");
						 kj("#img5").style.background=getStyle(this,"background");
						this.style.background=tt;						
					}else if(dx==2){
						var xx = getStyle(kj("#img6"),"background");
						 kj("#img6").style.background=getStyle(this,"background");
						this.style.background=xx;						
				}
			}
			if(y2<=396 && y2>=264){	
				if(dx==0){
						var xx = getStyle(kj("#img7"),"background");
						 kj("#img7").style.background=getStyle(this,"background");
						this.style.background=xx;						
					}else if(dx==1){
						var tt = getStyle(kj("#img8"),"background");
						 kj("#img8").style.background=getStyle(this,"background");
						this.style.background=tt;					
					}else if(dx==2){
						var vv = getStyle(kj("#img9"),"background");
						 kj("#img9").style.background=getStyle(this,"background");
						this.style.background=vv;						
				}
			}
			obj.style.zIndex="200";
			obj.style.left=initX+"px";
			obj.style.top=initY+"px";
			moveflage=false;
		}

	}

// 重新排列图片
kj("#but").onclick=function(){
	arrList = randomArr(arrList);  //封装随机函数
	console.log(arrList);
	for(var i=1;i<10;i++){
		kj("#img"+i).style.background="url(img/"+ arrList[i-1] +".png)";
	}
}

// 获得随机数组
 var arrList =Array("1","2","3","4","5","6","7","8","9");
 

}