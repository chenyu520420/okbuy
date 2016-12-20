function createCheckCode(size){
	var list = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',0,1,2,3,4,5,6,7,8,9,'A','Q','W','E','R','T','Y','U','I','O','P','L','K','J','H','G','F','D','S','Z','X','C','V','B','N','M'];
	var temp = [];
	for(var i=0; i<size; i++){
		temp.push( list[parseInt(Math.random()*list.length)] );
	}
	return temp.join("");
}

function setCookie(name,value,days){
        var date=new Date();
        date.setDate(date.getDate()+days);
        document.cookie=name+"="+encodeURIComponent(value)+";expires="+date;
  };
function  getCookie(name){
            var cookieValue="";
            var strCookie=document.cookie;
            var arrCookie=strCookie.split("; ");
            for(var i=0;i<arrCookie.length;i++){
                var item=arrCookie[i].split("=");
                if(item[0]==name){
                    cookieValue=decodeURIComponent(item[1]);
                }
            }
            return cookieValue;
  };
function removeCookie(name){
        this.setCookie(name,"",-1);
  }



