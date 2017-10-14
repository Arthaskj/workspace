window.onload=function(){
	var li=document.getElementsByClassName("icon");
	
	
	var apple=document.getElementById("apple");
	var applelogo=document.getElementById("applelogo");
	var applet=true;
	
	applelogo.onclick=function(){
		if(applet){
		apple.style.display="block";
		applet=false;
	}
		else{
			apple.style.display="none";
			
		applet=true;
		}
	}
	

	 $('body').bind('click', function(event) {
    var evt = event.srcElement ? event.srcElement : event.target;    
    if(evt.id == 'apple' ||  evt.id == 'applelogo') return; // 如果是元素本身，则返回
    else {
        $('#apple').hide(); // 如不是则隐藏元素
		applet=true;
    }   
});
	
	 
	
	$(".exitnow").click(function(){
		$(".exitnownode").css("display" ,"block");
		
	});
	$(".exitnownodeyes").click(function(){
		$(".shutdown").css("display" ,"block");
		$(".exitnownode").css("display" ,"none");
		setTimeout(function(){$(".waiting").css("display","none");$(".shutdown").css("opacity","1");$(".shutdown  span:nth-child(1)").css("display","none");},3000);
	});
	$(".exitnownodeno").click(function(){
		$(".exitnownode").css("display" ,"none");
	});
	
	
	
	$(".aboutli:nth-child(3)").click(function(){
		$("#about").css("display","none");
	});
	var aboutli2=true;
	$(".aboutli:nth-child(2)").click(function(){
		
		if(aboutli2){
			$("#about").css("width","1280px").css("height","678px").css("top","0").css("right","0");
			$(".aboutbg img").css("display","block");
			$("#about span").css("display","block");
			aboutli2=false;
		}else {
			$("#about").css("width","700px").css("height","500px").css("top","0").css("right","0");
			$(".aboutbg img").css("display","block");
			$("#about span").css("display","block");
			aboutli2=true;
		}
	});
	
	$(".aboutli:nth-child(1)").click(function(){
		$("#about").css("width","80px").css("height","20px").css("top","90%").css("right","88%");
		$(".aboutbg img").css("display","none");
		$("#about span").css("display","none");
	});
	
	$(".aboutbut").click(function(){
		$("#about").css("display","block");
		$("#apple").css("display","none");
	});
	

	// 开机界面
	$(".startimg").click(function(){
		$(".startbar").css("opacity","1");
		$(this).animate({top:'-230px'});
		setTimeout(function(){$(".startbar2").css("width","250px")},1000);
		setTimeout(function(){$(".startlogo").css("display","none");$(".sleep").css("display","block");},6000);
		setTimeout(function(){$(this).css("top","0");$(".startbar").css("opacity","0");$(".startbar2").css("width","0")},6000);
		
	});
		
	// 关机界面
	$("#shutdown").click(function(){
		$(".shutdown").css("display","block");
		setTimeout(function(){$(".waiting").css("display","none");$(".shutdown").css("opacity","1");$(".shutdown  span:nth-child(1)").css("display","none");},3000);
		
	});
		
	//重启界面 
	$("#rst").click(function(){
		$(".startlogo").css("display","block ");
	});
		
	
	// 休眠界面
	$(".sleepimg").click(function(){
		if(applet){
			$(this).css("right","280px");
		$(".sleepbox").css("display","block");
		applet=false;
			}
			else{
				$(this).css("right","0px");
		$(".sleepbox").css("display","none");
		applet=true;
				}
	});
	
	
	var sleepbox3=document.getElementsByClassName("sleepbox3")[0];
	var sleepbox2=document.getElementsByClassName("sleepbox2");
	
	var sleep=document.getElementsByClassName("sleep")[0];
	
	sleepbox3.onclick=function(){
		if(sleepbox2[0].value=="a" && sleepbox2[1].value=="3"){
			sleep.style.display="none";
			$(".barbg").css("display","block");
			setTimeout(function(){$(".sleepimg").css("right","0");$(".sleepbox").css("display","none");sleepbox2[0].value="";sleepbox2[1].value=""},1000);
		}
		else{
			alert("请按规定输入");
		}
	}
	
	$("#sleep").click(function(){
		$(".sleep").css("display","block")
	});
		
	$("#systemper,#systemper2 ").hover(function(){
			$("#systemper2").css("display","block");
		
	},function(){
			$("#systemper2").css("display","none");
			
	});
	
	// 最近使用项目
	$("#historypro,#historypro2").hover(function(){
		
			$("#historypro2").css("display","block");
			
	},function(){
			$("#historypro2").css("display","none");
			
	});

	$("body1 *").not("#applelogo").click(function(){
			$("#apple").css("display","none");
	});
		
		
	// 底部菜单栏
	iconBar();
	function iconBar(){
		// for(var n=1;n<$(".icon").length+1;n++){
			var n=4;
			$(".icon")[n].onmouseover(function(){
				$(this).addClass("iconH");
				$(".icon")[n-1].addClass("iconH2");
				$(".icon")[n-2].addClass("iconH3");
				$(".icon")[n+1].addClass("iconH2");
				$(".icon")[n+2].addClass("iconH3");
			});
			$(".icon")[n].mouseout(function(){
				$( ".icon")[n-1].addClass("icon");
				$( ".icon")[n-2].addClass("icon");
				$( ".icon")[n+1].addClass("icon");
				$( ".icon")[n+2].addClass("icon");
				$( ".icon")[n].addClass("icon");

			});
			console.log($(".icon")[n]);
		//}
			
	}


	// $(".icon:nth-child(1)").mouseover(function(){
	// 	$(this).css("marginTop","30px").css("transform","scale(1.7)");
	// 	$(".icon:nth-child(2)").css("marginTop","40px").css("transform","scale(1.4)");
	// 	$(".icon:nth-child(3)").css("marginTop","55px").css("transform","scale(1.3)");
	// });
	// $(".icon:nth-child(1)").mouseout(function(){
	// 	$( ".icon:nth-child(1),.icon:nth-child(2),.icon:nth-child(3)").css("marginTop","60px").css("transform","scale(1)");
	// });
	// $(".icon:nth-child(2)").mouseover(function(){
	// 	$(this).css("marginTop","30px").css("transform","scale(1.7)");
	// 	$(".icon:nth-child(3),.icon:nth-child(1)").css("marginTop","40px").css("transform","scale(1.4)");
	// 	$(".icon:nth-child(4)").css("marginTop","55px").css("transform","scale(1.3)");
	// });
	// $(".icon:nth-child(2)").mouseout(function(){
	// 	$( ".icon:nth-child(1),.icon:nth-child(2),.icon:nth-child(4),.icon:nth-child(3)").css("marginTop","60px").css("transform","scale(1)");
	// });
	// $(".icon:nth-child(3)").mouseover(function(){
	// 	$(this).css("marginTop","30px").css("transform","scale(1.7)");
	// 	$(".icon:nth-child(4),.icon:nth-child(2)").css("marginTop","40px").css("transform","scale(1.4)");
	// 	$(".icon:nth-child(1),.icon:nth-child(5)").css("marginTop","55px").css("transform","scale(1.3)");
	// });
	// $(".icon:nth-child(3)").mouseout(function(){
	// 	$( ".icon:nth-child(1),.icon:nth-child(2),.icon:nth-child(4),.icon:nth-child(3),.icon:nth-child(5)").css("marginTop","60px").css("transform","scale(1)");
	// });
	// $(".icon:nth-child(4)").mouseover(function(){
	// 	$(this).css("marginTop","30px").css("transform","scale(1.7)");
	// 	$(".icon:nth-child(3),.icon:nth-child(5)").css("marginTop","40px").css("transform","scale(1.4)");
	// 	$(".icon:nth-child(2),.icon:nth-child(6)").css("marginTop","55px").css("transform","scale(1.3)");
	// });
	// $(".icon:nth-child(4)").mouseout(function(){
	// 	$( ".icon:nth-child(6),.icon:nth-child(2),.icon:nth-child(4),.icon:nth-child(3),.icon:nth-child(5)").css("marginTop","60px").css("transform","scale(1)");
	// });
	// $(".icon:nth-child(5)").mouseover(function(){
	// 	$(this).css("marginTop","30px").css("transform","scale(1.7)");
	// 	$(".icon:nth-child(4),.icon:nth-child(6)").css("marginTop","40px").css("transform","scale(1.4)");
	// 	$(".icon:nth-child(3),.icon:nth-child(7)").css("marginTop","55px").css("transform","scale(1.3)");
	// });
	// $(".icon:nth-child(5)").mouseout(function(){
	// 	$( ".icon:nth-child(6),.icon:nth-child(7),.icon:nth-child(4),.icon:nth-child(3),.icon:nth-child(5)").css("marginTop","60px").css("transform","scale(1)");
	// });
	// $(".icon:nth-child(6)").mouseover(function(){
	// 	$(this).css("marginTop","30px").css("transform","scale(1.7)");
	// 	$(".icon:nth-child(5),.icon:nth-child(7)").css("marginTop","40px").css("transform","scale(1.4)");
	// 	$(".icon:nth-child(4),.icon:nth-child(8)").css("marginTop","55px").css("transform","scale(1.3)");
	// });
	// $(".icon:nth-child(6)").mouseout(function(){
	// 	$( ".icon:nth-child(6),.icon:nth-child(7),.icon:nth-child(4),.icon:nth-child(8),.icon:nth-child(5)").css("marginTop","60px").css("transform","scale(1)");
	// });
	// $(".icon:nth-child(7)").mouseover(function(){
	// 	$(this).css("marginTop","30px").css("transform","scale(1.7)");
	// 	$(".icon:nth-child(6),.icon:nth-child(8)").css("marginTop","40px").css("transform","scale(1.4)");
	// 	$(".icon:nth-child(5),.icon:nth-child(9)").css("marginTop","55px").css("transform","scale(1.3)");
	// });
	// $(".icon:nth-child(7)").mouseout(function(){
	// 	$( ".icon:nth-child(6),.icon:nth-child(7),.icon:nth-child(9),.icon:nth-child(8),.icon:nth-child(5)").css("marginTop","60px").css("transform","scale(1)");
	// });
	// $(".icon:nth-child(8)").mouseover(function(){
	// 	$(this).css("marginTop","30px").css("transform","scale(1.7)");
	// 	$(".icon:nth-child(7),.icon:nth-child(9)").css("marginTop","40px").css("transform","scale(1.4)");
	// 	$(".icon:nth-child(6),.icon:nth-child(10)").css("marginTop","55px").css("transform","scale(1.3)");
	// });
	// $(".icon:nth-child(8)").mouseout(function(){
	// 	$( ".icon:nth-child(6),.icon:nth-child(7),.icon:nth-child(9),.icon:nth-child(8),.icon:nth-child(10)").css("marginTop","60px").css("transform","scale(1)");
	// });
	// $(".icon:nth-child(9)").mouseover(function(){
	// 	$(this).css("marginTop","30px").css("transform","scale(1.7)");
	// 	$(".icon:nth-child(8),.icon:nth-child(10)").css("marginTop","40px").css("transform","scale(1.4)");
	// 	$(".icon:nth-child(7)").css("marginTop","55px").css("transform","scale(1.3)");
	// });
	// $(".icon:nth-child(9)").mouseout(function(){
	// 	$( ".icon:nth-child(7),.icon:nth-child(9),.icon:nth-child(8),.icon:nth-child(10)").css("marginTop","60px").css("transform","scale(1)");
	// });
	// $(".icon:nth-child(10)").mouseover(function(){
	// 	$(this).css("marginTop","30px").css("transform","scale(1.7)");
	// 	$(".icon:nth-child(9)").css("marginTop","40px").css("transform","scale(1.4)");
	// 	$(".icon:nth-child(8)").css("marginTop","55px").css("transform","scale(1.3)");
	// });
	// $(".icon:nth-child(10)").mouseout(function(){
	// 	$( ".icon:nth-child(9),.icon:nth-child(8),.icon:nth-child(10)").css("marginTop","60px").css("transform","scale(1)");
	// });
			
			
		
		
	
}
