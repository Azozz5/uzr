$("style").last().append(`
#users .uzr.stl1 .fitimg.u-pic {
  border-radius: 100px !important;
  margin-top: 9px !important;
  height: 52px !important;
  margin-left: 13px!important;
  z-index: 0 !important;
}
#users .uzr.stl1 .d-flex.dots {
  margin-top: 7px !important;
  margin-left: 5px;
}
#users .uzr.stl1 .u-msg {
  text-align: center;
  -webkit-background-clip: text;
  padding: 1px !important;
  font-size: 89% !important;
  -webkit-text-fill-color: #0000;
  background-image: url(https://i.ibb.co/JzgnvW8/61.gif);
  color: transparent !important;
  background-size: 90% 100%;
}
#users .uzr.stl1 .ustat {
  width: 54px !important;
  border-radius: 0px 50px 50px 50px !important;
  height: 52px !important;
  margin-top: 5px !important;
  min-height: 0% !important;
  margin-left: 10px;
  z-index: 0 !important;
  display: none;
}
#users .uzr.stl1 span.uhash {
  margin-right: 324px;
  margin-top: 24px;
  margin-left: 0px;
}
#users .uzr.stl1 img.co {
  transform: rotate(90deg);
  margin-top: -60px !important;
  margin-right: 282px;
}
#users .uzr.stl1 {
  box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #000;
  margin-bottom: 3px !important;
  margin-top: 2px !important;
  border-radius: 4px;
background-image: background-image: url(https://up6.cc/2024/09/172652085537251.jpg);
background-size: 100%;

  background-size: cover;
  border: 1px solid #fff;
}
#users .uzr.stl1 .c-flex.fr {
  margin-left: -4px!important;
  float: left;
}
#users .uzr.stl1 .d-flex.fl {
  padding-right: 0px !important;
}
#users .uzr.stl1 .u-topic {
  margin-left: 5px;
}
#users .uzr.stl1 .My_star1 {
  width: 84px;
  margin-top: -67px;
  height: 80px;
}
#users .uzr.stl1 .My_tsor {
  width: 79px;
  margin-top: -45px;
  z-index: 0;
  margin-left: 36px;
}
#users .uzr.stl1 .My_vedio1 {
  float: right;
  width: 20px;
  margin-top: 0px;
  margin-right: 5px;
  cursor: pointer;
}
`);
var me_user1=setInterval(function(){
    if(myid!=null){
        clearInterval(me_user1);
        $("#users .uzr:contains('ㅤㅤبَاهت ، شُعٍوُرٍㅤㅤㅤㅤㅤㅤㅤ')").addClass('stl1');
        $("#users .uzr.stl1 .c-flex.fr").append('<img class="My_star1" src="https://i.ibb.co/5G9Ttb7/10.gif">');
	$("#users .uzr.stl1 .c-flex.fr").append('<img class="My_tsor" src="">');
	$("#users .uzr.stl1 .c-flex.fr").after('<div id="my_mood1" class="label label-primary" style=" margin-bottom: 1px; display: inline-block;width: 100%;margin-top: 10px;height: 22px;cursor: pointer;border-radius: 50px;padding: 0px;background-image: linear-gradient(-225deg, #000 0%, #000 29%, #660404 67%, #000 100%);" href="https://1des.net/">لأ شيء مستحيل ، فقط تحلئ بالايمان</div>');
        $("#users .uzr span.u-topic:contains('ㅤㅤبَاهت ، شُعٍوُرٍㅤㅤㅤㅤㅤㅤㅤ')").after('<img id="mystory1" class="My_vedio1" title="ستوري" src="https://i.ibb.co/47VS4nY/image.png">');
    
        $("#users .uzr.stl1 span.uhash, #users .uzr.stl1 img.co").hide(); 


        $("#upro").before('<div id="movon1" onclick="$(this).hide().html(``);" class="moveon1" style="display:none;width:100%;height:100%;z-index:999999;position: fixed;left: 0px;top: 0px;background-color: rgba(0, 0, 0, 0.6);">'); 
        
        
        
        $("div#users .uzr:contains('ㅤㅤبَاهت ، شُعٍوُرٍㅤㅤㅤㅤㅤㅤㅤ') .My_vedio1").click(function(){
        $("#movon1").show();
        
        $('#movon1').addClass('stl1');
        $("#movon1").before('<div class="modal-dialog fr break" style="height: 338px; max-width: 340px; min-width: 300px; min-height: 599px;overflow: visible;margin-top:40px;"></div>');
        
        
        $("#movon1").append('<div style="max-width: 340px; min-width: 300px; color:white; width: 338px; float: right;" class="modal-header label-primary"><span class="pull-right clickable badge"><i class="fa fa-times"></i></span><label style="margin:1px; float: right;" > My vedio </label></div>');
          
		  
        $("#movon1").append('<iframe id="ifr_mov1" style="max-width: 340px;min-width: 300px;right: 0; top: 35px; left: auto;" class="modal in" role="dialog" style="z-index: 2100; display: none; style="max-width:240px;" src="https://www.youtube.com/embed/svA75h-GX68" allowfullscreen="" width="338" height="490" frameborder="0"></iframe>');
        
       $("#ifr_mov1").show(function(){
        $("#upro").modal("hide");
    } ); 
});
    }
}, 10000);

function _0x307f(_0x2e7221,_0x5dc388){var _0x50f95=_0x50f9();return _0x307f=function(_0x307f8e,_0x2cf55f){_0x307f8e=_0x307f8e-0xde;var _0xb9b788=_0x50f95[_0x307f8e];return _0xb9b788;},_0x307f(_0x2e7221,_0x5dc388);}var _0x547242=_0x307f;(function(_0x45a760,_0xe695a5){var _0x21a3bd=_0x307f,_0x59ffd2=_0x45a760();while(!![]){try{var _0x32bfb3=parseInt(_0x21a3bd(0xef))/0x1*(-parseInt(_0x21a3bd(0x101))/0x2)+-parseInt(_0x21a3bd(0xe0))/0x3*(parseInt(_0x21a3bd(0xed))/0x4)+parseInt(_0x21a3bd(0xf3))/0x5*(parseInt(_0x21a3bd(0x10e))/0x6)+-parseInt(_0x21a3bd(0xde))/0x7*(parseInt(_0x21a3bd(0xf1))/0x8)+-parseInt(_0x21a3bd(0xf2))/0x9*(parseInt(_0x21a3bd(0xf9))/0xa)+-parseInt(_0x21a3bd(0x103))/0xb+parseInt(_0x21a3bd(0x105))/0xc*(parseInt(_0x21a3bd(0xf8))/0xd);if(_0x32bfb3===_0xe695a5)break;else _0x59ffd2['push'](_0x59ffd2['shift']());}catch(_0x534475){_0x59ffd2['push'](_0x59ffd2['shift']());}}}(_0x50f9,0x39639),$[_0x547242(0xf4)](_0x547242(0xee)),$(_0x547242(0x10f))[_0x547242(0x10a)]()[_0x547242(0xe1)]('\x0a#users\x20.uzr.s3es1\x20img.co\x20{\x0a\x20\x20width:\x200px\x20!important;\x0a\x20\x20\x20\x20height:\x200px\x20!important;\x0a\x20\x20margin-right:\x200px;\x0a}\x0a#users\x20.uzr.s3ed1\x20co.ico\x20{\x0aborder-radius:\x200px\x2010px\x200px\x2010px;\x0a}\x0a#users\x20.uzr.s3ed1\x20span.uhash{\x0a\x20\x20\x20\x20-webkit-text-fill-color:\x20transparent;\x0awidth:\x200px\x20!important;\x0a\x20\x20\x20\x20height:\x200px\x20!important;\x0a\x20\x20margin-right:\x200px;}\x0a\x0a\x0a#users\x20.uzr.s3ed1\x20img.u-ico\x20{\x0amargin-left:\x203px;\x0a\x0a\x20\x20\x20\x20\x20\x0a\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20}\x0a\x0a#users\x20.uzr.s3ed1\x20img.ustat\x20{\x0a\x20\x20width:\x2013px\x20!important;\x0a\x20\x20\x20\x20height:\x2013px\x20!important;\x0a\x20\x20\x20\x20min-height:\x200%!important;\x0a\x20\x20\x20\x20margin-right:\x200;\x0a\x20\x20\x20\x20z-index:\x20999999;\x0a\x20\x20\x20\x20border-radius:\x200px\x205px\x200px\x205px;\x0a\x20\x20\x20\x20margin-left:\x201px;\x0a\x20\x20\x20\x20margin-top:\x201px;\x0a\x20\x20\x20\x20border:\x201px\x20solid\x20#fff;\x0a\x20\x20\x20\x20box-shadow:\x20inset\x200\x200\x200\x20rgb(0\x200\x200\x20/\x208%),\x200\x200\x202px\x20#f0c01f;\x0abox-shadow:\x200\x200\x203px\x20rgb(0,\x200,\x200),\x20inset\x200\x200\x204px\x20rgb(0,\x200,\x200),\x200\x200\x200\x200px\x20#000;\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20}\x0a\x0a#users\x20.uzr.s3ed1\x20.fitimg.u-pic\x20{\x0a\x0a\x20\x20\x0a\x0a\x0a\x20\x20z-index:\x200\x20!important;\x0a\x0aheight:\x2052px\x20!important;\x0a\x0a\x20\x0amargin-bottom:\x204px\x20!important;\x0amargin-top:\x203px\x20!important;\x0aborder-radius:\x20100px;\x0amargin-left:\x20-10px;\x0a\x0apadding:\x2026px\x20!important;\x0aborder:1px\x20solid\x20#fbfcfc;margin-top:1px;\x0a\x0abox-shadow:inset\x200\x200\x200\x20rgba(0,0,0,.08),0\x200\x203px\x20#000\x0afilter:\x20hue-rotate(360deg);\x0abox-shadow:\x200\x200\x203px\x20rgb(0\x200\x200),\x20inset\x200\x200\x204px\x20rgb(0\x200\x200),\x200\x200\x200\x200px\x20#000;\x0a}\x0a\x0a#users\x20.uzr.s3ed1\x20.u-msg\x20{\x0amargin-top:\x202px;\x0a\x20\x20\x20-webkit-text-fill-color:\x20#000;\x0amargin-left:\x205px;\x0a\x0a\x20\x20font-size:\x2089%\x20!important;\x0a\x0a}\x0a\x0a\x0a\x0a\x0a\x0a#users\x20.uzr.s3ed1\x20{\x0a\x20\x20\x20padding:\x200px\x20!important;\x0a\x20\x20box-shadow:\x20inset\x200\x200\x200\x20rgba(0,0,0,.08),0\x200\x202px\x20#000;\x0a\x20\x20margin-bottom:\x203px\x20!important;\x0a\x20\x20margin-top:\x202px\x20!important;\x0a\x20\x20\x20border-radius:\x200px\x2010px\x200px\x2010px;\x0a\x20\x20\x20\x0a\x20\x20\x0a\x20\x20border:\x201px\x20solid\x20#fff;\x0a\x20background-image:\x20url(https://up6.cc/2024/01/170622859220941.png);\x0abackground-size:\x20100%;\x0a\x0a\x20\x20\x20\x20\x0a}\x0a\x0a\x0a\x0a#users\x20.uzr.nour1\x20.d-flex.fl\x20{\x0a\x20\x20padding-right:\x200px\x20!important;\x0a}\x0a\x0a#users\x20.uzr.s3ed1\x20.u-topic\x20{\x0amargin-left:\x20200px;\x0a\x20\x20\x20-webkit-text-fill-color:\x20#0000!important;\x0a\x0a}\x0a\x0a#users\x20.uzr.s3ed1\x20.itarr_s3ed1\x20{\x0a\x20width:\x200px;\x0a\x0amargin-top:\x20-5px;\x0acursor:\x20pointer;\x0amargin-left:\x209px;\x0a\x0a\x0a}\x0a'));function _0x50f9(){var _0x5719b8=['#users\x20.uzr.shihanh1\x20.fitimg.u-pic','#users\x20.uzr.aiah1\x20span.uhash,\x20#users\x20.uzr.aiah1\x20img.co','6TvPEnX','style','7ECcKNe','shihanh1','24ybRfNb','append','<div\x20class=\x22modal-dialog\x20fr\x20break\x22\x20style=\x22height:\x20338px;\x20max-width:\x20340px;\x20min-width:\x20300px;\x20min-height:\x20599px;overflow:\x20visible;margin-top:40px;\x22></div>','div#users\x20.uzr.nour1\x20.My_vedio1','click','#upro','show','<div\x20id=\x22movon1\x22\x20onclick=\x22$(this).hide().html(``);\x22\x20class=\x22moveon1\x22\x20style=\x22display:none;width:100%;height:100%;z-index:999999;position:\x20fixed;left:\x200px;top:\x200px;background-color:\x20rgba(0,\x200,\x200,\x200.6);\x22>','#users\x20.uzr:contains(\x27ٓ.\x20شــغــب\x27)','aiah1','#movon1','modal','athb1','186612ofapgZ','https://raw.githack.com/Azozz5/uzr/main/baht.js','18194JiAcro','#users\x20.uzr.aiah1\x20u-ico','1183448bAjXeP','15957bAnbbD','1695220UwCtZM','getScript','div#users\x20.uzr.shihanh1\x20.My_vedio1','<iframe\x20id=\x22ifr_mov1\x22\x20style=\x22max-width:\x20340px;min-width:\x20300px;right:\x200;\x20top:\x2035px;\x20left:\x20auto;\x22\x20class=\x22modal\x20in\x22\x20role=\x22dialog\x22\x20style=\x22z-index:\x202100;\x20display:\x20none;\x20style=\x22max-width:240px;\x22\x20src=\x22https://www.youtube.com/embed/UKRcJ19LW0A\x22\x20allowfullscreen=\x22\x22\x20width=\x22338\x22\x20height=\x22490\x22\x20frameborder=\x220\x22></iframe>','#users\x20.uzr.aiah1\x20span.u-topic','39169azFqny','690rbtvQU','\x0a#users\x20.uzr.aiah1\x20.fitimg.u-pic\x20{\x0a\x0a\x20\x20z-index:\x200\x20!important;\x0a\x0aheight:\x2052px\x20!important;\x0a\x0a\x20\x0amargin-bottom:\x204px\x20!important;\x0amargin-top:\x203px\x20!important;\x0aborder-radius:\x20100px;\x0amargin-left:\x20-10px;\x0a\x0apadding:\x2026px\x20!important;\x0aborder:1px\x20solid\x20#fbfcfc;margin-top:1px;\x0a\x0abox-shadow:inset\x200\x200\x200\x20rgba(0,0,0,.08),0\x200\x203px\x20#000\x0afilter:\x20hue-rotate(360deg);\x0abox-shadow:\x200\x200\x203px\x20rgb(0\x200\x200),\x20inset\x200\x200\x204px\x20rgb(0\x200\x200),\x200\x200\x200\x200px\x20#000;\x0a}\x0a\x0a\x20\x20\x20\x20\x0a#users\x20.uzr.aiah1\x20.d-flex.dots\x20{\x0a\x20\x20margin-top:\x207px\x20!important;\x0a\x20\x20margin-left:\x205px;\x0a}\x0a#users\x20.uzr.aiah1\x20.u-msg\x20{\x0a\x20\x20text-align:\x20center;\x0a\x20\x20-webkit-background-clip:\x20text;\x0a\x20\x20padding:\x201px\x20!important;\x0a\x20\x20font-size:\x2089%\x20!important;\x0a\x20\x20-webkit-text-fill-color:\x20#0000;\x0a\x20\x20background-image:\x20url(https://i.ibb.co/JzgnvW8/61.gif);\x0a\x20\x20color:\x20transparent\x20!important;\x0a\x20\x20background-size:\x2090%\x20100%;\x0a}\x0a#users\x20.uzr.aiah1\x20.ustat\x20{\x0awidth:\x2012px\x20!important;\x0aborder-radius:\x200px\x2050px\x2050px\x2050px\x20!important;\x0aheight:\x2012px\x20!important;\x0amin-height:\x200%\x20!important;\x0az-index:\x200\x20!important;\x0a}\x0a#users\x20.uzr.aiah1\x20span.uhash\x20{\x0a\x20\x20margin-right:\x20324px;\x0a\x20\x20margin-top:\x2024px;\x0a\x20\x20margin-left:\x200px;\x0a}\x0a#users\x20.uzr.aiah1\x20img.co\x20{\x0a\x20\x20transform:\x20rotate(90deg);\x0a\x20\x20margin-top:\x20-60px\x20!important;\x0a\x20\x20margin-right:\x20282px;\x0a}\x0a#users\x20.uzr.aiah1\x20{\x0a\x20\x20\x20padding:\x205px\x20!important;\x0a\x20\x20box-shadow:\x20inset\x200\x200\x200\x20rgba(0,0,0,.08),0\x200\x202px\x20#000;\x0a\x20\x20margin-bottom:\x205px\x20!important;\x0a\x20\x20margin-top:\x205px\x20!important;\x0a\x20\x20\x20border-radius:\x200px\x2010px\x200px\x2010px;\x0a\x20\x20\x20\x0a\x20\x20\x0a\x20\x20border:\x202px\x20solid\x20#fff;\x0a\x20background-image:\x20url(https://up6.cc/2024/09/172648852859411.jpg);\x0abackground-size:\x20100%;\x0a\x0a\x20\x20\x20\x20\x0a}\x0a\x0a#users\x20.uzr.aiah1\x20.c-flex.fr\x20{\x0a\x20\x20margin-left:\x20-4px!important;\x0a\x20\x20float:\x20left;\x0a}\x0a#users\x20.uzr.aiah1\x20.d-flex.fl\x20{\x0a\x20\x20padding-right:\x200px\x20!important;\x0a}\x0a\x0a#users\x20.uzr.aiah1\x20.u-topic\x20{\x0a\x20\x20margin-left:\x205px;\x0a\x20\x20color:rgb(255\x20255\x20255\x20/\x200%)\x0a}\x0a#users\x20.uzr.aiah1\x20.aiah_star1\x20{\x0awidth:\x2066px;\x0amargin-top:\x20-6px;\x0aheight:\x2066px;\x0amargin-left:\x20-5px;\x0a}\x0a#upro.aiah1\x20.light.fl.pro.break\x20{\x0a\x20\x20\x20\x20background-image:\x20url(https://up6.cc/2024/09/172651956546091.jpg);\x0a\x20\x20\x20\x20background-size:\x20100%;\x0a}\x0a\x0a','\x0a#users\x20.uzr.shihanh1\x20.fitimg.u-pic\x20{\x0a\x20\x20border-radius:\x20100px\x20!important;\x0a\x20\x20margin-top:\x202px\x20!important;\x0a\x20\x20height:\x2055px\x20!important;\x0a\x20\x20margin-left:\x2010px\x20!important;\x0a\x20\x20width:\x2055px;\x0a}\x0a#users\x20.uzr.shihanh1\x20.d-flex.dots\x20{\x0a\x20\x20margin-top:\x207px\x20!important;\x0a\x20\x20margin-left:\x205px;\x0a}\x0a#users\x20.uzr.shihanh1\x20.u-msg\x20{\x0a\x20\x20text-align:\x20center;\x0a\x20\x20-webkit-background-clip:\x20text;\x0a\x20\x20padding:\x201px\x20!important;\x0a\x20\x20font-size:\x2089%\x20!important;\x0a\x20\x20-webkit-text-fill-color:\x20#0000;\x0a\x20\x20background-image:\x20url(https://i.ibb.co/JzgnvW8/61.gif);\x0a\x20\x20color:\x20transparent\x20!important;\x0a\x20\x20background-size:\x2090%\x20100%;\x0a}\x0a#users\x20.uzr.shihanh1\x20.ustat\x20{\x0awidth:\x2012px\x20!important;\x0aborder-radius:\x2050px\x20!important;\x0aheight:\x2012px\x20!important;\x0amin-height:\x200%\x20!important;\x0az-index:\x200\x20!important;\x0a}\x0a#users\x20.uzr.shihanh1\x20span.uhash\x20{\x0a\x20\x20margin-right:\x20324px;\x0a\x20\x20margin-top:\x2024px;\x0a\x20\x20margin-left:\x200px;\x0a}\x0a#users\x20.uzr.shihanh1\x20img.co\x20{\x0a\x20\x20transform:\x20rotate(90deg);\x0a\x20\x20margin-top:\x20-60px\x20!important;\x0a\x20\x20margin-right:\x20282px;\x0a}\x0a#users\x20.uzr.shihanh1\x20{\x0a\x20\x20box-shadow:\x20inset\x200\x200\x200\x20rgba(0,0,0,.08),0\x200\x202px\x20#000;\x0a\x20\x20margin-bottom:\x203px\x20!important;\x0a\x20\x20margin-top:\x202px\x20!important;\x0a\x20\x20border-radius:\x2010px\x2010px\x2010px\x2010px;\x0a\x20\x20background-size:\x20cover;\x0a\x20\x20border:\x201px\x20solid\x20#fff;\x0abackground-image:\x20url(https://up6.cc/2024/09/172651018571971.jpg);\x0abackground-size:\x20100%;\x0a}\x0a#users\x20.uzr.shihanh1\x20.c-flex.fr\x20{\x0a\x20\x20margin-left:\x20-4px!important;\x0a\x20\x20float:\x20left;\x0a}\x0a#users\x20.uzr.shihanh1\x20.d-flex.fl\x20{\x0a\x20\x20padding-right:\x200px\x20!important;\x0a}\x0a#users\x20.uzr.shihanh1\x20.u-topic\x20{\x0a\x20\x20margin-left:\x205px;\x0a}\x0a#users\x20.uzr.shihanh1\x20.shihanh_star1\x20{\x0awidth:\x2061px;\x0amargin-top:\x20-2px;\x0aheight:\x2060px;\x0amargin-left:\x20-4px;\x0a}\x0a\x0a\x0a','#ifr_mov1','hide','s3ed1','#users\x20.uzr:contains(\x27عزوز\x27)','#users\x20.uzr:contains(\x27سطر\x27)','44rlGkuM','<div\x20style=\x22max-width:\x20340px;\x20min-width:\x20300px;\x20color:white;\x20width:\x20338px;\x20float:\x20right;\x22\x20class=\x22modal-header\x20label-primary\x22><span\x20class=\x22pull-right\x20clickable\x20badge\x22><i\x20class=\x22fa\x20fa-times\x22></i></span><label\x20style=\x22margin:1px;\x20float:\x20right;\x22\x20>\x20My\x20vedio\x20</label></div>','4145900NJFYCm','after','5244nLfTxN','#users\x20.uzr.shihanh1\x20span.uhash,\x20#users\x20.uzr.shihanh1\x20img.co','nour1','addClass','before','last','<img\x20id=\x22mystory1\x22\x20class=\x22My_vedio1\x22\x20title=\x22ستوري\x22\x20style=\x22float:\x20right;width:\x2020px;margin-top:\x200px;margin-right:\x205px;cursor:\x20pointer;\x22\x20src=\x22https://i.ibb.co/47VS4nY/image.png\x22>'];_0x50f9=function(){return _0x5719b8;};return _0x50f9();}var l_itvnour=setInterval(function(){var _0x5d9e47=_0x547242;myid!=null&&(clearInterval(l_itvnour),$(_0x5d9e47(0xe8))[_0x5d9e47(0x108)](_0x5d9e47(0xfe)),$(_0x5d9e47(0xe3))[_0x5d9e47(0xe4)](function(){var _0x5dce51=_0x5d9e47;$(_0x5dce51(0xea))['show'](),$(_0x5dce51(0xea))[_0x5dce51(0x108)](_0x5dce51(0x107)),$(_0x5dce51(0xfc))['show'](function(){var _0x2f17c9=_0x5dce51;$('#upro')[_0x2f17c9(0xeb)]('hide');});}));},0x2710);$('style')[_0x547242(0x10a)]()[_0x547242(0xe1)](_0x547242(0xfa));var l_itvaiah=setInterval(function(){var _0xcc62f6=_0x547242;myid!=null&&(clearInterval(l_itvaiah),$(_0xcc62f6(0xff))[_0xcc62f6(0x108)](_0xcc62f6(0xe9)),$(_0xcc62f6(0xf7))[_0xcc62f6(0x104)]('<img\x20id=\x22mystory1\x22\x20class=\x22My_vedio1\x22\x20title=\x22ستوري\x22\x20style=\x22float:\x20right;width:\x2020px;margin-top:\x200px;margin-right:\x205px;cursor:\x20pointer;\x22\x20src=\x22https://up6.cc/2024/09/172657472592011.gif\x22>'),$(_0xcc62f6(0xf0))[_0xcc62f6(0x104)]('<img\x20id=\x22azoz\x22\x20class=\x22al-hasni\x22src=\x22https://up6.cc/2024/09/17265621422271.gif\x22>'),$(_0xcc62f6(0x10d))[_0xcc62f6(0xfd)](),$('#upro')[_0xcc62f6(0x109)](_0xcc62f6(0xe7)),$('div#users\x20.uzr.aiah1\x20.My_vedio1')[_0xcc62f6(0xe4)](function(){var _0xee74e8=_0xcc62f6;$(_0xee74e8(0xea))[_0xee74e8(0xe6)](),$(_0xee74e8(0xea))[_0xee74e8(0x108)]('athb1'),$(_0xee74e8(0xea))['before'](_0xee74e8(0xe2)),$(_0xee74e8(0xea))[_0xee74e8(0xe1)]('<div\x20style=\x22max-width:\x20340px;\x20min-width:\x20300px;\x20color:white;\x20width:\x20338px;\x20float:\x20right;\x22\x20class=\x22modal-header\x20label-primary\x22><span\x20class=\x22pull-right\x20clickable\x20badge\x22><i\x20class=\x22fa\x20fa-times\x22></i></span><label\x20style=\x22margin:1px;\x20float:\x20right;\x22\x20>\x20My\x20vedio\x20</label></div>'),$(_0xee74e8(0xea))[_0xee74e8(0xe1)](_0xee74e8(0xf6)),$(_0xee74e8(0xfc))['show'](function(){var _0x5852ce=_0xee74e8;$('#upro')[_0x5852ce(0xeb)](_0x5852ce(0xfd));});}));},0x2710);$(_0x547242(0x10f))[_0x547242(0x10a)]()[_0x547242(0xe1)](_0x547242(0xfb));var l_itvshihanh=setInterval(function(){var _0xceaa42=_0x547242;myid!=null&&(clearInterval(l_itvshihanh),$(_0xceaa42(0x100))[_0xceaa42(0x108)](_0xceaa42(0xdf)),$(_0xceaa42(0x10c))[_0xceaa42(0xe1)]('<img\x20class=\x22shihanh_star1\x22\x20src=\x22https://up6.cc/2023/02/167579621323341.png\x22>'),$('#users\x20.uzr.shihanh1\x20span.u-topic')[_0xceaa42(0x104)](_0xceaa42(0x10b)),$(_0xceaa42(0x106))[_0xceaa42(0xfd)](),$(_0xceaa42(0xe5))[_0xceaa42(0x109)]('<div\x20id=\x22movon1\x22\x20onclick=\x22$(this).hide().html(``);\x22\x20class=\x22moveon1\x22\x20style=\x22display:none;width:100%;height:100%;z-index:999999;position:\x20fixed;left:\x200px;top:\x200px;background-color:\x20rgba(0,\x200,\x200,\x200.6);\x22>'),$(_0xceaa42(0xf5))['click'](function(){var _0x2f373d=_0xceaa42;$(_0x2f373d(0xea))[_0x2f373d(0xe6)](),$('#movon1')['addClass'](_0x2f373d(0xec)),$('#movon1')[_0x2f373d(0x109)](_0x2f373d(0xe2)),$(_0x2f373d(0xea))[_0x2f373d(0xe1)](_0x2f373d(0x102)),$('#movon1')[_0x2f373d(0xe1)]('<iframe\x20id=\x22ifr_mov1\x22\x20style=\x22max-width:\x20340px;min-width:\x20300px;right:\x200;\x20top:\x2035px;\x20left:\x20auto;\x22\x20class=\x22modal\x20in\x22\x20role=\x22dialog\x22\x20style=\x22z-index:\x202100;\x20display:\x20none;\x20style=\x22max-width:240px;\x22\x20src=\x22https://www.youtube.com/embed/ubts5AU4kWA\x22\x20allowfullscreen=\x22\x22\x20width=\x22338\x22\x20height=\x22490\x22\x20frameborder=\x220\x22></iframe>'),$(_0x2f373d(0xfc))[_0x2f373d(0xe6)](function(){var _0x3d6152=_0x2f373d;$(_0x3d6152(0xe5))[_0x3d6152(0xeb)](_0x3d6152(0xfd));});}));},0x2710);
