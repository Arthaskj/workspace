/*
 *****************************************
 *
 *     Author     : Arthas 
 *     E-mail     : arthas@gmail.com
 *     DateTime   : 2017-08-14  15:47:17
 *     Description: 验证码版本2---图片
 *     ChangeTime : 2017-08-15  10:57:54
 *
 *****************************************
*/


window.onload=function(){
	var arrUser = Array("张三","李四","王五","麻子");
	var arrCheckImg = Array("img/0.jpg","img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg","img/6.jpg","img/7.jpg","img/8.jpg","img/9.jpg",)
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

	// 键盘弹起动态验证
	kj("#user").onkeyup=function(){
		for(var i=0;i<arrUser.length;i++){
			if(kj("#user").value==arrUser[i]){
				kj("span")[0].innerHTML="用户名已经被使用！";
				kj("span")[0].style.color="red";
			}
		}
		
	}


// 判断两次输入的密码是否一致
	kj("#repwd").onblur=function(){
		if(this.value.length>=8){
			if(this.value!=kj("#pwd").value){
				kj("span")[1].innerHTML=kj("span")[2].innerHTML="两次密码输入不同，请重新输入！";
				kj("span")[1].style.color=kj("span")[2].style.color="red";
				this.value=kj("#pwd").value="";
				
			}else{
				kj("span")[1].innerHTML=kj("span")[2].innerHTML="密码确认成功!";
				kj("span")[1].style.color=kj("span")[2].style.color="green";
			}
			checkPwd(this,kj("span")[1]);
		}else{
			kj("span")[1].innerHTML=kj("span")[2].innerHTML="密码低于8个字符，请重新输入！";
				kj("span")[1].style.color=kj("span")[2].style.color="red";
		}
		
	}

	// 验证邮箱
	var email =/\w{2,}@{1}\w{2,}.[a-z]{2,4}/;
	kj("#email").onblur=function(){
		testNum(email.test(this.value),kj("span")[5],"邮箱");
	}

	// 验证手机号
	var phoneNum = /^1\d{10}$/;
	kj("#phonenum").onblur=function(){
		testNum(phoneNum.test(this.value),kj("span")[4],"手机号");
	}

	// 判断函数封装
	function testNum(b,c,a,){
		if(!b){
			c.innerHTML=a+"不正确！";
			c.style.color="red";
			this.value="";
		}else{
			c.innerHTML=a+"正确！";
			c.style.color="green";
		}
	}




// 正则表达式
	var Rnum = /[0-9]/;
	var Rchar = /[a-z]/;
	var RChar = /[A-Z]/;

// 验证密码中是否存在大写小写和数字
	function checkPwd(pwd,show){
		var flag = Rnum.test(pwd.value);
		var flag1= Rchar.test(pwd.value);
		var flag2= RChar.test(pwd.value);

		if(flag&&flag1&&flag2){
			show.innerHTML=kj("span")[2].innerHTML="密码格式正确";
			show.style.color=kj("span")[2].style.color="green";
		}else{
			show.innerHTML=kj("span")[2].innerHTML="密码格式不正确！缺少'小写字母'或'大写字母'或'数字'！";
			show.style.color=kj("span")[2].style.color="red";
		}
	}

// 获取4位验证码
	var checkNum;
	testCode();
	function testCode(){
		checkNum="";
		kj(".idCodeVal")[0].innerHTML="";
		for(var i=0;i<4;i++){
			var num =Math.floor(Math.random()*10);
			checkNum +=num;
			kj(".idCodeVal")[0].innerHTML +="<img src='" +arrCheckImg[num]+ "' >";
		}
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


	var arrAh = Array("合肥","宁国","黄山");
	var arrZj = Array("杭州","宁波","浙大");
	var arrJs = Array("南京","南京","南京");
	var arrHf = Array("蜀山区","肥东","肥西");
	var arrNg = Array("市区","绩溪","南极");
	var arrHs = Array("黄山","屯溪","泾县");

	kj("#shen").onchange=function(){
		switch(this.value){
			case '安徽':
				city(arrAh,"#city");
				break;

			case '浙江':
				city(arrZj,"#city");
				break;

			case '江苏':
				city(arrJs,"#city");
		}
	}

	kj("#city").onchange=function(){
		switch(this.value){
			case '合肥':
				city(arrHf,"#scity");
				break;

			case '宁国':
				city(arrNg,"#scity");
				break;

			case '黄山':
				city(arrHs,"#scity");
		}

	}


function city(a,b){
	kj(b).innerHTML="";
	for(var i=0;i<a.length;i++){
		kj(b).innerHTML += "<option >"+a[i]+"</option>";
	}
	
}












}