//注册，登录下拉
window.onload=function(){
			
//======================轮播图		
		var ban_i=1;
		var ban_j;
		var opc1=1,opc2=0;
		var obanner=document.getElementsByClassName("banner_con");
		var oban_li=document.getElementById("ban_ul").children;
		var timer=setInterval(a,2000)
		function a(){
			$('.banner>a>ul>li').css({
				'background':"#000",
				'opacity':0.4
			});
			oban_li[ban_i].style.background="#D70057";
			oban_li[ban_i].style.opacity=1;
			opc1-=0.05;
			opc2+=0.05;
			$('.banner_con:eq('+ban_i+')').siblings('div').animate({opacity:0});
			$('.banner_con:eq('+ban_i+')').animate({opacity:1})
			ban_i++;
			if(ban_i==7)ban_i=0;
		}
		for(var i=0;i<oban_li.length;i++){
			oban_li[i].index=i;
			oban_li[i].onmouseover=function(e){
				e.stopPropagation();
				ban_i=this.index;
				$('.banner>a>ul>li').css({
				'background':"#000",
				'opacity':0.4
				});
				$('.banner_con:eq('+ban_i+')').siblings('div').animate({opacity:0});
				this.style.background="#D70057";
				this.style.opacity=1;
				$('.banner_con:eq('+ban_i+')').animate({opacity:1});
 			}
		}
		$('.prev').click(function(e){
			e.stopPropagation();
			if(ban_i==0){
				ban_i=6
			}else{
				ban_i=ban_i-1;	
			}
			clearInterval(timer);
			$('.banner>a>ul>li').css({
				'background':"#000",
				'opacity':0.4
			});
			$('.banner_con:eq('+ban_i+')').siblings('div').animate({opacity:0});
			$('.banner>a>ul>li:eq('+ban_i+')').css('background','#D70057');
			$('.banner>a>ul>li:eq('+ban_i+')').css('opacity','1');
			$('.banner_con:eq('+ban_i+')').animate({opacity:1});
			timer=setInterval(a,3000);
		})
		$('.next').click(function(e){
			e.stopPropagation();
			a();
		})




//==========================
function sh(ohref,osrc,oh3,oh4,oh5,ot){
			var show_con=document.getElementsByClassName("show_con")[0];
			var shows=document.createElement("a");
			shows.href=ohref;
			shows.className="shows";
			show_con.appendChild(shows);
			var shows_img=document.createElement("img");
			shows_img.src=osrc;
			shows.appendChild(shows_img);
			var shows_h3=document.createElement("h3");
			shows_h3.className="shows_h3";
			shows_h3.innerHTML=oh3;
			shows.appendChild(shows_h3);
			var shows_h4=document.createElement("h4");
			shows_h4.className="shows_h4";
			shows_h4.innerHTML=oh4;
			shows.appendChild(shows_h4);
			var shows_h5=document.createElement("h5");
			shows_h5.className="shows_h5";
			shows_h5.innerHTML=oh5;
			shows.appendChild(shows_h5);
			var shows_p=document.createElement("p");
			shows_p.className="shows_p";
			shows.appendChild(shows_p);
			var span_day=document.createElement("span");
			span_day.className="shows_span days";
			shows_p.appendChild(span_day);
			var shows_i=document.createElement("i");
			shows_i.className="shows_i";
			span_day.appendChild(shows_i);
			var days=document.createElement("span");
			days.innerHTML="天";
			span_day.appendChild(days);
			var span_hour=span_day.cloneNode(true);
			span_hour.children[1].innerHTML="时";
			shows_p.appendChild(span_hour);
			var span_minu=span_day.cloneNode(true);
			span_minu.children[1].innerHTML="分";
			shows_p.appendChild(span_minu);
			var span_sec=span_day.cloneNode(true);
			span_sec.children[1].innerHTML="秒";
			shows_p.appendChild(span_sec);
			var span_msec=span_day.cloneNode(true);
			span_msec.children[1].innerHTML="";
			shows_p.appendChild(span_msec);
			setInterval(function(){
				var arr=countDown(ot);
				shows_i.innerHTML=arr[0];
				span_hour.children[0].innerHTML=arr[1];
				span_minu.children[0].innerHTML=arr[2];
				span_sec.children[0].innerHTML=arr[3];
				span_msec.children[0].innerHTML=arr[4];
			
			},1)
		}

//============================

function shB(ohref,osrc,oh3,oh4,ot){
			var showB_con=document.getElementsByClassName("showBot_con")[0];
			var showB=document.createElement("a");
			showB.href=ohref;
			showB.className="showB";
			showB_con.appendChild(showB);
			var showB_img=document.createElement("img");
			showB_img.src=osrc;
			showB.appendChild(showB_img);
			var showB_div=document.createElement("div");
			showB_div.className="showB_div";
			showB.appendChild(showB_div);
			var showB_h3=document.createElement("h3");
			showB_h3.className="showB_h3";
			showB_h3.innerHTML=oh3;
			showB_div.appendChild(showB_h3);
			var showB_h4=document.createElement("h4");
			showB_h4.className="showB_h4";
			showB_h4.innerHTML=oh4;
			showB_div.appendChild(showB_h4);
			var showB_p=document.createElement("p");
			showB_p.className="showB_p";
			showB.appendChild(showB_p);
			var spanB_day=document.createElement("span");
			showB_p.appendChild(spanB_day);
			var showB_i=document.createElement("i");
			showB_i.className="showB_i";
			spanB_day.appendChild(showB_i);
			var dayB=document.createElement("span");
			dayB.innerHTML="天";
			spanB_day.appendChild(dayB);
			var spanB_hour=spanB_day.cloneNode(true);
			spanB_hour.children[1].innerHTML="时";
			showB_p.appendChild(spanB_hour);
			var spanB_minu=spanB_day.cloneNode(true);
			spanB_minu.children[1].innerHTML="分";
			showB_p.appendChild(spanB_minu);
			var spanB_sec=spanB_day.cloneNode(true);
			spanB_sec.children[1].innerHTML="秒";
			showB_p.appendChild(spanB_sec);
			var spanB_msec=spanB_day.cloneNode(true);
			spanB_msec.children[1].innerHTML="";
			showB_p.appendChild(spanB_msec);
			setInterval(function(){
				var arr=countDown(ot);
				showB_i.innerHTML=arr[0];
				spanB_hour.children[0].innerHTML=arr[1];
				spanB_minu.children[0].innerHTML=arr[2];
				spanB_sec.children[0].innerHTML=arr[3];
				spanB_msec.children[0].innerHTML=arr[4];
			
			},1)
		}



		
//=================点击回顶部
		window.onscroll=function(){
			var topNum=document.body.scrollTop||document.documentElement.scrollTop
			if(topNum>100){
				$('#ofixed').css('display','block')
			}else{
				$('#ofixed').css('display','none')
			}
			if(topNum>=5360){
				$('#ofixed')[0].className="fixed2"
			}else{
				$('#ofixed')[0].className="fixed"
			}
		}
		$('.fixed_top').click(function(){
			console.log(2)
			document.body.scrollTop=0;
			document.documentElement.scrollTop=0
		})
		
//======================倒计时

		function countDown(ot){
			var dead = new Date(ot);
			var timer = dead.getTime() - new Date().getTime();
			var day = Math.floor(timer/(3600000*24))
			var hour = Math.floor(timer%(3600000*24)/3600000);
			var minu=Math.floor(timer%(3600000*24)%3600000/60000)
			var sec =Math.floor(timer%(3600000*24)%3600000%60000/1000);
			var msec=Math.floor(timer%(3600000*24)%3600000%60000%1000/100)
			var a=[day,hour,minu,sec,msec]
			return  a
		}
//===========Ajax
		var jpd;
		$.ajax("js/Ajax_showBot.js",{success:function(data){ 
                 jpd=data
                 jpd=eval(jpd)
				for(var j=0;j<jpd.length;j++){
					shB(jpd[j].href,jpd[j].src,jpd[j].h3,jpd[j].h4,jpd[j].dat)
				}
            }})
		
		var jp;
		$.ajax("js/Ajax_show.js",{success:function(data){ 
                jp=data;
                jp=eval(jp);
				for(var i=0;i<jp.length;i++){
					sh(jp[i].href,jp[i].src,jp[i].h3,jp[i].h4,jp[i].h5,jp[i].dat)
				}
            }})
		
}