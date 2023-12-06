<?php
$avatar = isset($_GET['avt']) && $_GET['avt'] !== '' ? $_GET['avt'] : 'https://media.tenor.com/Ws_OsJF9OugAAAAd/anonymous-hacker.gif';
$name = isset($_GET['name']) && $_GET['name'] !== '' ? $_GET['name'] : 'JW Tạ Linh 💗💞💘 ';
$music = isset($_GET['music']) && $_GET['music'] !== '' ? $_GET['music'] : 'https://files.catbox.moe/f3htky.mp3';
$background = isset($_GET['bg']) && $_GET['bg'] === 'true' ? true : true;
?>
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>JW Team</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <link type="text/css" href="./wussun/wussun.css?v=1" rel="stylesheet" />
</head>
<body class="wussun-hard">
<style>
  .hidden{display:none!important;}
.center { height: 100%; padding: 0; margin: 0; display: -webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex; align-items: center; justify-content: center; } .ADs-BG{ background: rgba(255, 255, 255, 0.58); width: 100vw; height: 100vh; position: fixed; z-index: 99999; top: 0; left: 0; } .at-adblock-content-wrapper { box-shadow: 24px 24px 48px rgba(0, 0, 0, 0.4); border-radius: 10px; max-width: 400px; background: #fff; height: auto; width: 100%; } .at-adblock-content { padding: 30px 50px; } .at-adblock-text, .at-adblock-text h3 { text-align: center; font-family: inherit; font-weight: 700; } .at-adblock-text h3 { font-size: 25px; margin-top: 1rem; } .at-adblock-text p { margin: 20px auto; font-weight: 500;font-size: 13px; } .at-adblock-button .ad-btn { line-height: 1em; border-radius: 30px; border: none; border:2px solid #b23939; padding: 10px 20px; width: 100%; background: #b23939; color: #fff; transition: 0.2s; } .at-adblock-button .ad-btn:hover { background: #fff; color: #b23939; border: 2px solid #b23939; } @media (max-width:480px){ .at-adblock-content-wrapper{max-width:300px}.at-adblock-text h3{font-size:20px}.at-adblock-text p{font-size:12px}.at-adblock-button .ad-btn{font-size:12px} }
</style>
    <span class="the-best">
    <?php if ($background) : ?>
    <span class="glitch">
        <span class="glitch-img"></span>
        <span class="glitch-img"></span>
        <span class="glitch-img"></span>
        <span class="glitch-img"></span>
        <span class="glitch-img"></span>
    </span>
    <?php endif; ?>
</span>
    <h1></h1>
    <i onclick="window.open('https://www.facebook.com/talinh22?locale=vi_VN','_blank');" class="trademark">
        JW Community
    </i>
    <img class="logo" src="<?php echo $avatar; ?>">
    <h2 class="name" id="rainbow"><?php echo $name; ?></h2>
    <div class="wussun-def">
        <p>> <span>[root@jw-team ~]# </span>: "<i> rm -rf /Hacker Defacement/ </i>"</p>
        <p>> <span>[root@jw-team ~]#</span>: "<i>Pages 404</i>"</p>
        <p>> <span>[root@jw-team ~]#</span>: <b>The website has vulnerabilities for us to exploit...</span>: Bad
                Error</p>
        <p>>
            <span>[root@jw-team ~]#: </span>"<i>We are a member of the jw Community</i>"
        </p>
    </div>
    <i class="wussun-footer"></i>
</span>
    <script src="./wussun/wussun.js?v=1"></script>
    <script>
			window.addEventListener("DOMContentLoaded", function() {
				window.MyNavCard = $MGC({
					icon: "<?php echo $avatar; ?>",
					name: "<?php echo $name; ?>",
					info: "Developer",
					z_index: 9999,
					blur: ".the-best",
					lang: "en-US",
					mini: false,
					darkmode: 2,
					/*
					darkmode: Chế độ ban đêm
					Giá trị mặc định: 1
					Giá trị tùy chọn: 0、1、2、3
					0: Tắt chế độ ban đêm
					1: Theo dõi hệ thống (nếu hệ thống hỗ trợ chế độ ban đêm)
					2: Bật chế độ ban đêm từ 18h đến 6h sáng tùy thời điểm
					3: Luôn ở chế độ ban đêm
					*/
					maxWidth: "480px",
					/*
					maxWidth: Chiều rộng tối đa
					*/
					fontFamily: "",
					/*
					fontFamily: Phông chữ, trống hoặc không được đặt sẽ sử dụng phông chữ mặc định
					*/
					closeDuration: 1,
					/*
					closeDuration: Sau khi đóng popup, bao lâu thì nó không còn hiển thị nữa (ngay cả khi trang được làm mới thì nó không còn hiển thị nữa nhưng vẫn có thể mở thủ công thông qua nút mini)
					Giá trị mặc định: 60000 (60 giây)
					Lưu ý: closeDuration chỉ hoạt động khi defaultClosed được đặt thành false
					*/
					defaultClosed:false,
					/*
					defaultClosed: Popup bị tắt theo mặc định
					Giá trị mặc định: false
					Giá trị tùy chọn: true / false
					Lưu ý: Nếu defaultClosed là true thì closeDuration sẽ không hoạt động.
					*/
					defaultLinkIcon: "fa-solid fa-paw",
					fontawesome: {
						"type": "svg",
						"CDN": "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.0.0/js/all.min.js"
					},
					iconLinks: [{
						"title": "My Github",
						"url": "https://github.com/jwtalinh",
						"icon": "fa-brands fa-github",
						"target": "_blank"
					}, {
						"title": "My Blog",
						"url": "https://www.facebook.com/talinh22?locale=vi_VN",
						"icon": "fa-solid fa-blog"
					},],
					links: [{
						"title": "My Blog",
                        "url": "https://www.facebook.com/talinh22?locale=vi_VN",
						"type": "primary",
						"target": "_blank"
					}, {
						"title": "My Github",
                        "url": "https://github.com/jwtalinh",
					},],
				});
			});
		</script>
            <script>
    var str = document.getElementsByTagName('div')[0].innerHTML.toString();
    var i = 0;
    document.getElementsByTagName('div')[0].innerHTML = "";

    setTimeout(function() {
        var se = setInterval(function() {
            i++;
            document.getElementsByTagName('div')[0].innerHTML = str.slice(0, i) + "|";
            if (i == str.length) {
                clearInterval(se);
                document.getElementsByTagName('div')[0].innerHTML = str;
            }
        }, 100);
    }, 0);
    const Wussun_Music=["<?php echo $music; ?>",];let index=Math.floor(Math.random()*Wussun_Music.length);const audio=new Audio(Wussun_Music[index]);function wussunplay(){audio.play()}document.addEventListener("click",wussunplay()),audio.addEventListener("ended",function(){index=(index+1)%Wussun_Music.length,audio.src=Wussun_Music[index],audio.play()});
    </script>
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script src="https://unpkg.com/vue@2.6.14/dist/vue.min.js"></script>
<script src="https://unpkg.com/element-ui@2.15.6/lib/index.js"></script>
<link rel="stylesheet" href="https://unpkg.com/element-ui@2.15.6/packages/theme-chalk/lib/index.css">
<script>
	document.oncontextmenu = function () {
new Vue({
    data:function(){
        this.$notify({
            title:"Thông Báo!",
            message:"Trang này cấm nhấn chuột phải.",
            position: 'bottom-right',
            offset: 30,
            showClose: false,
            type:"warning"
        });
        return{visible:false}
    }
})
return false;}
</script>
</body>
</html>