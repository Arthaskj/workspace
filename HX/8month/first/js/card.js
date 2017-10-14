mui.init();
window.onload=function(){
		var flag=true;
			var flag_more=true;
			var flag_comment=true;
			//点赞
			function like(a){
	
				if(flag){
					        a.style.color="#e4393c";
					        flag=false;
						}else {
							 a.style.color="#007aff";
					       	 flag=true;
							} 
				}
				$('#cardcontent').on('tap','#aaa',function(){like(this)}) ;
				
			//显示隐藏函数
			function commenta(du,b){
				var a=b.parentNode.parentNode.getAttribute("name");
				if(flag_comment){
					       du[a].style.display="block";
					        flag_comment=false;
						}else {
							  du[a].style.display="none";
					       	 flag_comment=true;
							}  
				}
			//评论添加函数
			function comment_sub(du,a){
					mui('.comment_ul')[a].innerHTML+="<li class='mui-table-view-cell'><div class='mui-slider-right mui-disabled'><a class='mui-btn mui-btn-red'>删除</a></div><div class='mui-slider-handle'><p class='comment_p'><h4>小A:</h4><i >"+mui('.input_border')[a].value+"</i></p></div></li>";
					du.style.display="none"; 
					mui('.input_border')[a].value="";
				}
		
				//点击more显示内容addEventListener
			mui(".mui-card").on('tap','#content_more' ,function(){
				 var du=mui('.content')
				 commenta(du,this);
				});
			mui(".mui-card").on('tap','.content_img' ,function(){
				 var du=mui('.content')
				 commenta(du,this);
				});
				
				//单击显示更多隐藏和显示更多内容
			mui(".mui-card").on('tap','.comment',function(){
				var  du=mui('.comment_sub')
				commenta(du,this);
				});
				
				//单击提交完成评论的显示和输入框的隐藏
			mui(".mui-card").on('tap','#comment_submit',function(){
			var fu=this.parentNode.parentNode.getAttribute("name");
			var du=mui(".comment_sub")[fu];
				comment_sub(du,fu);
				});	
				
			//评论删除和添加
			$('.comment_ul').on('tap', '.mui-btn', function(event) {
					var elem = this;
					var li = elem.parentNode.parentNode;
					mui.confirm('确认删除该条记录？', 'Hello MUI', btnArray, function(e) {
						if (e.index == 0) {
							li.parentNode.removeChild(li);
						} else {
							setTimeout(function() {
								$.swipeoutClose(li);
							}, 0);
						}
					});
				});
				var btnArray = ['确认', '取消'];
			
			//屏幕内容滚动
			mui('#offCanvasContentScroll').scroll();



			//侧边栏头像调出注册登录界面
				$("#login_img")[0].addEventListener('tap',function(){
				mui.openWindow({
					url:'../login/login.html',
					id:'login'
				});
			});
			
				
			
			//删帖和分享
		
			$('.mui-card').on('tap', '.card_delete', function(event) {
					var elem = this;
					var li = elem.parentNode.parentNode.parentNode;
					
					mui.confirm('确认删除该帖子？', 'Hello MUI', btnArray, function(e) {
						if (e.index == 0) {
							
							li.style.display="none";
							
						} else {
							setTimeout(function() {
								$.swipeoutClose(li);
							}, 0);
						}
					});
					
				});
				
//				mui("#content_more")[0].addEventListener('tap',function(){
//					mui("#offCanvasWrapper").offCanvas('show');
//				});
				document.getElementById('offCanvasSide').addEventListener('tap', function() {
				mui("#offCanvasWrapper").offCanvas('close');
			});
				
				window.addEventListener('aside',function(event){
					mui("#offCanvasWrapper").offCanvas('show');
				});
				
				

}