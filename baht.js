
$("style").last().append(`
#users .uzr.baht1 img.co {
  border-radius: 10px 0px 10px 0px;
}

#users .uzr.baht1 span.uhash{
    -webkit-text-fill-color: transparent;
width: 1px !important;
    height: 1px !important;
  margin-right: 1px;}


#users .uzr.baht1 img.u-ico {
margin-left: 9px;


     

      
    }

#users .uzr.baht1 img.ustat {
width: 12px !important;
border-radius: 0px 50px 50px 50px !important;
height: 12px !important;
min-height: 0% !important;
z-index: 0 !important;
}
#users .uzr.baht1 .fitimg.u-pic {
  border-radius: 100px !important;
  margin-top: 6px !important;
  height: 52px !important;
  margin-left: 14px!important;
  z-index: 0 !important;
margin-bottom: 8px !important;
padding: 28px !important;
border:1px solid #2e2e2e;margin-top:3px;border-radius:100px;

box-shadow:inset 0 0 0 rgba(0,0,0,.08),0 0 6px #000;
filter: hue-rotate(360deg);
box-shadow: 0 0 0px rgb(0 0 0), inset 0 0 4px rgb(0 0 0), 0 0 0 0px #000;
}

#users .uzr.baht1 .u-msg {
-webkit-background-clip: text;
  
  font-size: 93% !important;
  -webkit-text-fill-color: #0000;
 background-image: url(https://up6.cc/2024/05/171571547944381.gif);
  padding: 0px !important;
	margin-bottom: 7px !important;

margin-left: 2px;
background-size: cover;
margin-top: 7px !important;

}





#users .uzr.baht1 {
  box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #000;
  margin-bottom: 3px !important;
  margin-top: 2px !important;
  border-radius: 10px 5px 10px 5px;
   
  
  border: 1px solid #fff;
 background-image: url(https://up6.cc/2024/09/172652085537251.jpg);
background-size: 100%;

    
}



#users .uzr.baht1 .d-flex.fl {
  padding-right: 0px !important;
}

#users .uzr.baht1 .u-topic {
 -webkit-text-fill-color: transparent;
  margin-left: 5px ;

}

#users .uzr.baht1 .itarr_baht {
 width: 92px;
height: 92px;
margin-top: -45px;
cursor: pointer;
margin-left: -47px;
}
`);

var l_itvaiah=setInterval(function(){
    if(myid!=null){
        clearInterval(l_itvaiah);
        $("#users .uzr:contains('ㅤㅤبَاهت ، شُعٍوُرٍㅤㅤㅤㅤㅤㅤㅤ')").addClass('baht1');
	$("#users .uzr.baht1 span.u-topic").after('<img id="mystory1" class="My_vedio1" title="ستوري" style="float: right;width: 20px;margin-top: 0px;margin-right: 5px;cursor: pointer;" src="https://up6.cc/2024/09/172657472592011.gif">');
       $("#users .uzr.baht1 u-ico").after('<img id="azoz" class="al-hasni"src="https://up6.cc/2024/09/17265621422271.gif">');
    
	    $("#users .uzr.baht1 span.uhash, #users .uzr.baht1 img.co").hide(); 
        $("#upro").before('<div id="movon1" onclick="$(this).hide().html(``);" class="moveon1" style="display:none;width:100%;height:100%;z-index:999999;position: fixed;left: 0px;top: 0px;background-color: rgba(0, 0, 0, 0.6);">');
        $("div#users .uzr.aiah1 .My_vedio1").click(function(){
        $("#movon1").show();
        $('#movon1').addClass('athb1');
        $("#movon1").before('<div class="modal-dialog fr break" style="height: 338px; max-width: 340px; min-width: 300px; min-height: 599px;overflow: visible;margin-top:40px;"></div>');
        $("#movon1").append('<div style="max-width: 340px; min-width: 300px; color:white; width: 338px; float: right;" class="modal-header label-primary"><span class="pull-right clickable badge"><i class="fa fa-times"></i></span><label style="margin:1px; float: right;" > My vedio </label></div>');  
        $("#movon1").append('<iframe id="ifr_mov1" style="max-width: 340px;min-width: 300px;right: 0; top: 35px; left: auto;" class="modal in" role="dialog" style="z-index: 2100; display: none; style="max-width:240px;" src="https://www.youtube.com/embed/UKRcJ19LW0A" allowfullscreen="" width="338" height="490" frameborder="0"></iframe>');
        $("#ifr_mov1").show(function(){
        $("#upro").modal("hide");
    } ); 
});
    }
}, 10000);
