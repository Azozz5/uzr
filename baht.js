// مفتاح API من YouTube Data API
const API_KEY = 'YOUR_API_KEY_HERE';

// وظيفة البحث في YouTube
function searchYouTube(query) {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=5&q=${query}&key=${API_KEY}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayYouTubeResults(data.items);
        })
        .catch(error => {
            console.error('Error fetching YouTube API:', error);
        });
}

// عرض نتائج البحث
function displayYouTubeResults(videos) {
    const resultContainer = $('.vieYoutube');
    resultContainer.show(); // إظهار الحاوية

    videos.forEach(video => {
        const videoId = video.id.videoId;
        const title = video.snippet.title;
        const thumbnail = video.snippet.thumbnails.medium.url;

        // عرض الصورة المصغرة والعنوان
        resultContainer.find('img').attr('src', thumbnail);
        resultContainer.find('.youtubeTitl').text(title);

        // عند الضغط على "إرسال إلى الحائط"
        $('.youtubeSend').on('click', () => {
            sendToWall(videoId, title, thumbnail);
        });
    });
}

// إرسال الفيديو إلى الحائط
function sendToWall(videoId, title, thumbnail) {
    const wallContainer = $('#wall');
    wallContainer.append(`
        <div class="youtube-video" style="margin-bottom: 10px;">
            <img src="${thumbnail}" alt="${title}" style="width: 100%;" />
            <span>${title}</span>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    `);
    $('.vieYoutube').hide(); // إخفاء نافذة العرض بعد الإرسال
}

// البحث في YouTube عند الضغط على زر البحث
$('.fa-search').on('click', function() {
    const query = $('.youtubeVal').val();
    if (query) {
        searchYouTube(query);
    }
});

// إخفاء نافذة العرض عند النقر على زر الإلغاء
$('.youtubeCloos').on('click', function() {
    $('.vieYoutube').hide();
});

$(`
<div class="youtubeSearch" style="position: relative; float: right; width: 100%; top: 0;">
<div class="youtubeLoad" style="display: none; text-align: center; position: absolute; right: 0; left: 0; background-color: #ffffff80;">
<img style="margin-top: -9px; width: 60px;" src="https://up6.cc/2024/09/17272650040541.gif" />
</div>
<div style="display: flex; background-color: white; padding: 2px 0; border-bottom: 1px solid;">
<i onclick="SEND_EVENT_EMIT('SEND_EVENT_EMIT_YOUTUBE', {'search':$('.youtubeVal').val()});setTimeout(()=>{$('.youtubeLoad').hide()},10000);$('.youtubeLoad').show()" style="float: left; font-size: 24px !important; color: #6d6b6b; font-weight: 100 !important; margin: 3px;" class="fa fa-search" aria-hidden="true"></i>
<input style="text-align: center; float: right;" type="text" class="form-control youtubeVal" placeholder="البحث في يوتيوب" />
<i style="float: right; font-size: 30px !important; color: red; font-weight: 100 !important; margin: 3px;" class="fa fa-youtube" aria-hidden="true"></i>
</div>
<div style="display: none;" class="vieYoutube">
<img style="min-height: 60px; width: 100%; float: left;" alt />
<span style="margin-top: -56px; float: left; background-color: #ffffffa1; color: red; padding: 2px 0; text-align: center; width: 100%;" class="dots youtubeTitl"></span>
<button style="margin: 0 2px; width: 48%; margin-top: -28px; text-align: center;" class="youtubeSend fa fa-send fr btn btn-primary">ارسال الى الحائط</button>
<button onclick="$('.vieYoutube').hide();" style="margin: 0 2px; width: 48%; margin-top: -28px; text-align: center;" class="youtubeCloos fa fl btn btn-primary">الغاء</button>

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

