window.onload = function(){
//	点击首页培训分期跳转
  	var peixunfq = document.getElementById("peixunfq");
  	console.log(peixunfq);
  	peixunfq.addEventListener("tap",function(){
  		mui.openWindow({
  			url:"shouyezi/feiqi.html",
  		})
  	})
//	点击还款页全部账单
		var totalcount = document.getElementById("totalcount");
			totalcount.addEventListener("tap",function(){
				mui.openWindow({
					url:"kuankuanzi/totalcount.html",
				})
			})
//			点击还款页提前结账
			var tiqianjq = document.getElementById("tiqianjq");
      	tiqianjq.addEventListener("tap",function(){
      		mui.openWindow({
      			url:"tiqianjq.html",
      		})
      	})
//    	点击我的页帮助与客服
			var help = document.getElementById("help");
			help.addEventListener("tap",function(){
				mui.openWindow({
					url:"wodezi/helpyukefu.html",
				})
			})
			
}
