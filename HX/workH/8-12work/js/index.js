window.onload=function(){
    // 导航栏
	var aLi = kj("#ll").getElementsByTagName("li");
	var i=0;

	for(i=0;i<aLi.length-1;i++){
			aLi[i].index=i;
			aLi[i].onmouseover=function(){
				for(var j=0;j<aLi.length-1;j++){
					aLi[j].style.background="#424242";
					// aBox[this.index].style.opacity="0";
				}
				this.style.background="#ffea01";
			}
		}




// 图片轮播
var oImgli =document.getElementById("imgli");
var oImg = document.getElementsByTagName("img");
var oNum = document.getElementsByClassName("num");
var oIpt = document.getElementsByTagName("input");
var arrimg = new Array("img/banner.jpg","img/banner1.jpg","img/banner2.jpg","img/banner3.jpg","img/banner4.jpg");
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

// table表格
var aTd = kj("#tab").getElementsByTagName("td");
	var n=0;

	for(n=0;n<aTd.length;n++){
			aTd[n].index=n;
			aTd[n].onclick=function(){
				for(var j=0;j<aTd.length;j++){
					aTd[j].style.background="#fff";
					aTd[j].style.color="#333";
					// aBox[this.index].style.opacity="0";
				}
				this.style.background="#ffea01";
				this.style.color="#fff";
				kj("#tuijian").innerHTML=this.innerHTML;
				kj("#tuijian").style.fontSize="20px";
			}
		}






}


