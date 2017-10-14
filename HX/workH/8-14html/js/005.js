/*
 *****************************************
 *
 *     Author     : Arthas 
 *     E-mail     : arthas@gmail.com
 *     DateTime   : 2017-08-14  17:14:12
 *     Description: 
 *     ChangeTime : 2017-08-14  21:57:42
 *
 *****************************************
*/
window.onload=function(){
		var n=0;
		var aLi = kj("#nav").getElementsByTagName("li");
		var i=0;
		// 导航栏
		for(i=0;i<aLi.length;i++){
			aLi[i].index=i;
			aLi[i].onmouseover=function(){
				for(var j=0;j<aLi.length;j++){
					aLi[j].className="";
					// aBox[this.index].style.opacity="0";
				}
				this.className=" nav2";
			}
		}


// 小图片轮播
imgShow();
var n;
function imgShow(){
	for(n=0;n<kj(".imgto").length;n++){
		kj(".imgto")[n].onclick=function(){
			kj("#imgShow").src=this.src;
		}
	}
	
}



// 图片轮播
var oImgli =kj("#imgli");
var oImg = kj("img");
var oNum = kj(".num");
var oIpt = kj("input");
var arrimg = new Array("imgwork/timg.jpg","imgwork/banner1.jpg","imgwork/banner2.jpg","imgwork/banner3.jpg","imgwork/banner4.jpg");
var num = 0;
 
var timer=setInterval(timeChange,2000);

oImgli.onmouseover=function(){
    clearInterval(timer);
}
oImgli.onmouseout=function(){  
    timer=setInterval(timeChange,3000);
}

function timeChange(){
    change();
}

var imgNum=0;

oIpt[0].onclick=function(){
    if(num>0 ){
        num--;
        oImg[0].src=arrimg[num];
         for(var i=0;i<oList.length;i++){
            oList[i].style.border="none";
            oNum[i].style.background="#999";
        }
        oList[num].style.border="2px solid red";
        oNum[num].style.background="#ccc";
    }else{
        num=4;
        oImg[0].src=arrimg[num];
         for(var i=0;i<oList.length;i++){
            oList[i].style.border="none";
            oNum[i].style.background="#999";
        }
        oList[num].style.border="2px solid red";
        oNum[num].style.background="#ccc";
    }
}
oIpt[1].onclick=function(){
    change();
}
function change(){
    if(num<arrimg.length-1){
        num++;
        oImg[0].src=arrimg[num];
        for(var i=0;i<oNum.length;i++){
            oNum[i].style.background="#999";
            if(i==num){
                oNum[num].style.background="#ccc";
            }
        }
        imgNum=num*1350;
        oImgli.style.left="-"+imgNum+"px";
        
    }else{
        num=0;
        oImg[0].src=arrimg[num];
        for(var i=0;i<oNum.length;i++){
            oNum[i].style.background="#999";
            if(i==num){
                oNum[num].style.background="#ccc";
            }
        }
        oImgli.style.left=0+"px";   
    }    
}







	}