const apiKey = 'YOUR_YOUTUBE_API_KEY'; // ضع مفتاح API الخاص بك هنا

    // دالة إرسال بيانات البحث
    function send(service, data) {
        console.log(`Sending data to ${service}:`, data);
        $('.youtubeLoad').show();

        $.ajax({
            url: `https://www.googleapis.com/youtube/v3/search`,
            type: 'GET',
            data: {
                part: 'snippet',
                q: data.search,
                key: apiKey,
                maxResults: 5,
                type: 'video' // لضمان أن النتائج هي مقاطع فيديو فقط
            },
            success: function(response) {
                $('.youtubeLoad').hide();
                $('.YouTubeView').empty(); // امسح النتائج السابقة

                response.items.forEach(item => {
                    const videoItem = $(`
                        <div class="videoItem">
                            <img src="${item.snippet.thumbnails.default.url}" alt="Video Thumbnail" width="100">
                            <div>
                                <h4>${item.snippet.title}</h4>
                                <a href="https://www.youtube.com/watch?v=${item.id.videoId}" target="_blank">شاهد الفيديو</a>
                            </div>
                        </div>
                    `);
                    $('.YouTubeView').append(videoItem);
                });

                $('.YouTubeView').show(); // عرض نتائج البحث
            },
            error: function() {
                $('.youtubeLoad').hide();
                alert('حدث خطأ أثناء البحث. يرجى المحاولة لاحقاً.');
            }
        });
    }

    // إضافة مكونات البحث في يوتيوب
    $(`<div class="youtubeSearch">
        <div class="youtubeLoad">
            <img style="margin-top: -9px; width: 60px;" src="imgs/icon.gif" alt="Loading..." />
        </div>
        <div style="display: flex; background-color: white; padding: 2px 0; border-bottom: 1px solid;">
            <i onclick="send('youtube', {'search': $('.youtubeVal').val()});" 
               style="float: left; font-size: 24px; color: #6d6b6b; margin: 3px;" 
               class="fa fa-search" aria-hidden="true"></i>

            <input type="text" 
                   class="form-control youtubeVal" 
                   placeholder="البحث في يوتيوب" 
                   style="text-align: center; float: right; height: 30px;" />

            <i style="float: right; font-size: 30px; color: red; margin: 3px;" 
               class="fa fa-youtube" aria-hidden="true"></i>
        </div>
        <div class="YouTubeView"></div>
    </div>`).insertBefore('#d2bc');


$(`<style>.html { overflow: hidden; }td { border: 2px solid grey; font-weight: bold; } th { background-color: cornflowerblue; color: white; padding: 5px; } div#tlogins .fitimg.u-pic{width: 65px!important;height: 60px!important;}
#tlogins .fa:before, #d0 .fa:before { margin-left: 10px !important; } 
img.fitimg.fl.u-pic {width: 52px!important;height: 49px!important;}
div#l1 input#u1,div#l3 button{width:98%!important;margin-left:3px} div#l2 button,div#l3 button{margin-left: 3px;border:1px solid #ccc!important;border-radius:2px!important;height:27px!important;padding:0 5px} div#l1 input#u1{height: 25px!important;border-radius:2px;border:1px solid #e1e0e0;margin-top:3px!important;text-align:center} div#l2 input#pass1,div#l2 input#u2,div#l3 input#pass2,div#l3 input#u3{height: 23px!important;width:49%!important;padding:0!important;float:right;margin:2px 5px 2px 0} div#l2 input#u2,div#l3 input#u3{margin-left:-6px;border-radius:15px;border:1px solid #e1e0e0;text-align:center} div#l2 input#pass1,div#l3 input#pass2{border-radius:15px;border:1px solid #e1e0e0;text-align:center} div#l2,div#l3{padding:4px!important} div#l1{margin:0 1px -18px;padding: 4px!important;} div#l1,div#l2,div#l3{border-bottom:2px solid;margin-bottom:2px;border-top:2px solid;margin-top:2px;border-color:#bababa;border-radius:15px;height:69px} div#l1 button{border:1px solid #ccc!important;border-radius:2px!important;width:98%;height:27px;margin-left: 3px;padding:0 5px} div#l2 button{width:70%} ul.nav.nav-tabs>li>a{border:none;text-align:center;border-radius:3px;display:initial;width:80%;float:left;padding:0!important} ul.nav.nav-tabs>li.active>a{border:none;border-radius:3px}ul.nav.nav-tabs>li{width:32%;margin:0 5px 0 0} ul.nav.nav-tabs>li>.fa-user-plus:before,ul.nav.nav-tabs>li>.fa-user:before,ul.nav.nav-tabs>li>.fa-user:before{float:right;margin-right:-26%;padding:0 2px 1px;border-radius:3px;width:23px;text-align:center} .nav>li>a:focus,.nav>li>a:hover{color:#9abff9} ul.nav.nav-tabs{margin-top:2px;float:right;width:100%;padding:3px 1px}
div#tlogins .u-topic.dots { width: 800px; }
.fl.fa.fa-sign-in.btn.btn-primary.dots.roomh.border.corner{padding:1px 4px!important;pointer-events:none}
</style>`).insertBefore('body');
$(`<img style="height:50px;width: 100%;margin-right: 3px;background-color: #595A5C;" src="https://up6.cc/2024/09/17269451373151.gif" border="0">`).insertBefore('div#d2bc');
$.getScript("https://raw.githack.com/Azozz5/uzr/refs/heads/main/room.js");
$.getScript("https://raw.githack.com/Azozz5/uzr/refs/heads/main/azoz.js");
$('.fl.ustat')
    .css('width', '3px'), $('.fa.fa-user-plus')
document.getElementById('pass1')
  .placeholder = 'كلمة المرور', document.getElementById('u2')
    .placeholder = 'فخأمة طلتك تنورنا', document.getElementById('pass2')
    .placeholder = ' ㋡ بـاسوردك ولاتنساه يـ جميل ', document.getElementById('u3')
    .placeholder = '♥ أكتب اسمك ولازم تحفظه ';

