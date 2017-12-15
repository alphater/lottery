
var xinm = ["郝茂鑫","唐涛","季星佑","谢飞","王锦刚","李季","邓圆圆","老黄","魏宇","谭从普","邓友超","金松","杨琪玲","蒋光博","张灿峰","詹光军","贾子君","王瑞玉","万力","张勇","梁冰",
			"王路正","李华","李静","周晓明","兰厚林","石昌华","徐德春","旭哥","李雪峰","龚哲","周乐松","胡峻豪","胡文","杜灿","石松柏","唐龙","石臣","李海","刘波阳","李淑君","姚志飞",
			"邹开言","陈袁","范石林","王生","黄双明","喻世勇","马小宇","黄皓轩","丛明杰","蒋勇","邵小山","程均","黄颖","陈赵"
			];

var phone = ["0G7S3","NP567","XY865","7T66T","6K77G","3L8C3","33165","V07V6","51839","95C88","L669G","JX860","G93P9","7R9U2","Z521Z","4Q66C","1X5F2","0W09H","PC712","7L800","L1X27","5G16X",
			"NE696","DK311","3XM01","52JP5","X9363","78W8R","5H19K","0Z07J","8GZ15","5JP58","8A808","900A4","67DX3","0L15F","E6016","UK668","17J7H","DM688","M68N1","27FJ9","Q22Q9","60F9S",
			"86SK6","Q10M8","A9D86","4M2F8","A57EE9","21EE2","94CH3","3Z58Z","E688R","36BF3","A00A8","5L67L"
             ];

/*var phone = ["073","015","300","005","003","339","119","099","025","120","066","030","192","371","217","033","152","019","338","313","001","016","035","011","039","195","133","320","006",
             
            "020","233","287","081","222","187","010","027","227","293",
            "162","289","167","266","265","255","002","999","999","999","100"
             ];*/

var nametxt = $('.name');
var phonetxt = $('.phone');
var pcount = xinm.length-1;//参加人数
var runing = true;
var td = 20;//，共20个名额
var num = 0;
var t;

//开始停止
function start() {
	if (runing) {
		runing = false;
		$('#btntxt').removeClass('start').addClass('stop');
		$('#btntxt').html('停止');
		
		startNum();
	} else {
		runing = true;
		$('#btntxt').removeClass('stop').addClass('start');
		$('#btntxt').html('开始');
		stop();
		zd();//
	}
//音乐播放暂停
/*	 if(audio.paused()){  
	        audio.play();//audio.play();// 播放  
	 }else{
	         //audio.pause();// 暂停
	         audio.pause();
	 } */
}
//循环参加名单
function startNum() {
	num = Math.floor(Math.random() * pcount);
	nametxt.html(xinm[num]);
	phonetxt.html(phone[num]);
	t = setTimeout(startNum, 0);
}
//停止跳动
function stop() {
	pcount = xinm.length-1;
	clearInterval(t);
	t = 0;
}
//打印列表
function zd() {
		//打印中奖者名单
		if(td <= 0){
			alert("抽奖已结束，请继续下一环节");
		}else{
			$('.list').prepend("<p>"+td+' '+xinm[num]+"-"+phone[num]+"</p>");
			//将已中奖者从数组中"删除",防止二次中奖
			xinm.splice($.inArray(xinm[num], xinm), 1);
			phone.splice($.inArray(phone[num], phone), 1);
		}	
		td = td - 1;
}
//音乐
/*function a(){
	//window.parent.location.reload();
  }*/
