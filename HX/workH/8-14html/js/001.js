/*
 *****************************************
 *
 *     Author     : Arthas 
 *     E-mail     : arthas@gmail.com
 *     DateTime   : 2017-08-14  11:25:37
 *     Description: 表单验证
 *     ChangeTime : 2017-08-14  11:37:42
 *
 *****************************************
*/

window.onload=function(){
	var arrUser = Array("张三","李四","王五","麻子");
	var arrIdCode = Array();
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
	testCode();
	function testCode(){
		for(var i=0;i<4;i++){
		arrIdCode[i]=Math.floor(Math.random()*10).toString();
		}
		kj(".idCodeVal")[0].innerHTML=arrIdCode[0]+arrIdCode[1]+arrIdCode[2]+arrIdCode[3];
	}
	// 刷新验证码
	kj("span")[3].onclick=testCode;
	

// 对输入的验证码进行判断
	kj("#idCode").onblur=function(){

		if(this.value==kj(".idCodeVal")[0].innerHTML){
			kj("span")[3].innerHTML="恭喜您！验证成功!";
			kj("span")[3].style.color="green";
		}else{
			kj("span")[3].innerHTML="验证失败!请重新验证！";
			kj("span")[3].style.color="red";
			this.value="";
		}
	}



}