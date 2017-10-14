/*
 *****************************************
 *
 *     Author     : Arthas 
 *     E-mail     : arthas@gmail.com
 *     DateTime   : 2017-08-14  16:04:25
 *     Description: 验证码版本3   汉字
 *
 *****************************************
*/



window.onload=function(){
	var arrUser = Array("张三","李四","王五","麻子");
	var arrCheckFont = Array("亿","一","少","女","的","梦","三","二","四","五");
	var arrCheckFontImg = Array("imge/0.jpg","imge/1.jpg","imge/2.jpg","imge/3.jpg","imge/4.jpg","imge/5.jpg","imge/6.jpg","imge/7.jpg","imge/8.jpg","imge/9.jpg");
	var flag = 0;
	// 判断用户名是否符合规范
	kj("#user").onblur=function(){
		if(this.value.length<2){
			kj("span")[0].innerHTML="用户名不能小于2个字符！";
			kj("span")[0].style.color="red";
			this.value="";
			this.focus();
		}else {
			for(x in arrUser){
				if(kj("#user").value==arrUser[x]){
					flag=1;
				}
			}
			if(flag){
					kj("span")[0].innerHTML="用户名已被使用！";
					kj("span")[0].style.color="red";
					this.focus();
					this.value="";
					flag=0;
			}else{
				kj("span")[0].innerHTML="恭喜您！注册成功！";
				kj("span")[0].style.color="green";
		}
		}
	}

// 判断两次输入的密码是否一致
	kj("#repwd").onblur=function(){
		if(this.value!=kj("#pwd").value){
			kj("span")[1].innerHTML=kj("span")[2].innerHTML="两次密码输入不同，请重新输入！";
			kj("span")[1].style.color=kj("span")[2].style.color="red";
			this.value=kj("#pwd").value="";
		}else{
			kj("span")[1].innerHTML=kj("span")[2].innerHTML="密码确认成功!";
			kj("span")[1].style.color=kj("span")[2].style.color="green";
		}
	}

// 获取4位验证码
	var checkNum="";
	var checkImg;
	testCode();
	function testCode(){
		var checkImg="";
		for(var i=0;i<4;i++){
			var num =Math.floor(Math.random()*10);
			checkNum +=arrCheckFont[num];
			checkImg +="<img src='" +arrCheckFontImg[num]+ "' >";
		}
		kj(".idCodeVal")[0].innerHTML =checkImg;
	}
	// 刷新验证码
	kj("span")[3].onclick=testCode;
	

// 对输入的验证码进行判断
	kj("#idCode").onblur=function(){

		if(this.value==checkNum){
			kj("span")[3].innerHTML="恭喜您！验证成功!";
			kj("span")[3].style.color="green";
		}else{
			kj("span")[3].innerHTML="验证失败!请重新验证！";
			kj("span")[3].style.color="red";
			this.value="";
		}
	}



}