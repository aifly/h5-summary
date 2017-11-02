/**
 * Created by fly on 2017/8/9.
 */



var worksid = '1907384290'; //新华社的作品

var data = { //新华社的公众号信息
	wxappid: 'wx5ec3d35069383211',
	wxappsecret: 'd94ea41d9cd2ba03c7cab5fc0e212cec'
}

var shareUrl = 'http://h5.zhongguowangshi.com/letter/assets/images/300.jpg';
shareUrl = 'http://h5.zmiti.com/public/letter/assets/images/300.jpg';
window.h5name = window.location.pathname.split('/')[1];
var zmitiUtil = {

	h5List: [

		{ //1
			title: '点赞十九大 中国强起来',
			href: 'http://newdata.news.cn/dzsjd/#0',
			hrefs: []
		}, { //2
			title: '号外：刚刚，十九大开幕了',
			href: 'http://h5.zmiti.com/public/letter-base/',
			hrefs: []
		}, { //3
			img: './assets/images/h5-3.jpg',
			title: '@所有人：来自新时代的一份考卷，请查收',
			href: 'https://h5.zhongguowangshi.com/qa19da/index.html',
			hrefs: []
		}, { //4
			title: '走复兴之路，这一程：强起来',
			href: 'https://h5.hecoe.com/baidu/map/timeline171012/index.html',
			hrefs: []
		}, { //5
			title: '全景！十九大隆重开幕',
			href: 'http://mob.visualbusiness.cn/newsexhibition/index.html?albumId=A0C6240F3654428E9C766E4C97C778C5&preview=true',
			hrefs: []
		}, { //6
			title: '人民对美好生活的向往，就是我们的奋斗目标',
			href: 'http://22cf92a9.u.h5mgd.com/campaigns/5984243e163bda0694090c83/20171023040332/59e9b988f7eb1f061613694a/index.html',
			hrefs: []
		}, { //7
			title: '@所有人 你有一封来自人民大会堂的信',
			href: 'http://newdata.news.cn/srf/',
			hrefs: []
		}, { //8
			title: '习主席外交风采掠影',
			href: 'http://fms.news.cn/swf/2017_sjxw/10_16_xjpzj/index.html',
			hrefs: []
		}, { //9
			title: '我的十九大报告学习笔记',
			href: 'http://sike.news.cn/hot/2017/10/19notes/index.html',
			hrefs: []
		}, { //10
			title: '十九大报告的这几句话击中了我！',
			href: 'http://m.xinhuanet.com/html5/sjdbg/index.html',
			hrefs: []
		}, { //11
			title: '加强版新时代的考卷来了',
			href: 'http://h5.zhongguowangshi.com/kaojuan/index.php',
			hrefs: []
		}, { //12
			title: '全息全景！带你换个方式看报告',
			href: 'http://fms.news.cn/swf/2017qxbg/index.html',
			hrefs: [],
			newPage: true
		}, { //13
			title: '进入新时代 点赞好声音',
			href: 'http://newdata.news.cn/dzxsd/ddb/#guomingyi',
			hrefs: [],
			newPage: true
		}, { //14
			title: '号外：习近平新时代中国特色社会主义思想写入党章',
			href: 'http://h5.zhongguowangshi.com/letter-xc-base2/index.html',
			hrefs: []
		}, { //15
			title: '号外：习近平当选中共中央总书记',
			href: 'http://h5.zhongguowangshi.com/letter-xc-base3/index.html',
			hrefs: []
		}, { //16
			title: '祝贺总书记，我要发贺电',
			href: 'https://news.qq.com/zt2017/fhdzf/index.htm?type=link',
			hrefs: []
		}, { //17
			title: '珍藏：新一届中央领导机构成员，他们是谁？',
			href: 'http://fms.news.cn/swf/19jzyldjg/index.html?from=groupmessage&isappinstalled=0',
			hrefs: []
		}, { //18
			title: '“中国正青春”大型互动征集活动',
			href: 'http://forum.home.news.cn/view/zt/zqc/index.html',
			hrefs: []
		}
	],
	videoList: [{ //1
		title: '震撼大片 ︳领航 ',
		href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2416603&isview=1&homeshow=1',
		hrefs: []
	}, { //2
		title: '系列微视频“我们的自信”',
		href: 'https://xhpfmapi.zhongguowangshi.com/theme/index.html?relid=19425&isview=1&homeshow=1',
		hrefs: []
	}, { //3
		title: '中国共产党为什么行',
		href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2426505&isview=1&homeshow=1',
		hrefs: ['https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2426505&isview=1&homeshow=1',
			'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2428522&isview=1&homeshow=1',
			'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2429921&isview=1&homeshow=1',
			'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2431562&isview=1&homeshow=1'
		]
	}, { //4
		title: '进入《新时代》，中国强起来！',
		href: 'http://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2423780',
		hrefs: []
	}, { //5
		title: '300秒速览十九大报告!',
		href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2420249&isview=1&homeshow=1',
		hrefs: []
	}, { //6
		title: '人民大会堂的“十九大时光”',
		href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2429334&isview=1&homeshow=1',
		hrefs: []
	}, { //7
		title: '时代在变 你变了吗？',
		href: 'http://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2430504',
		hrefs: []
	}, { //8
		title: '解码党代会：十九大为何这么重要',
		href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2420331&isview=1&homeshow=1',
		hrefs: []
	}, { //9
		title: '微视频：党代表通道上的好声音',
		href: 'http://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2425150&channel=weixin&from=timeline&isappinstalled=0',
		hrefs: []
	}, { //10
		title: '全球街采系列',
		href: '',
		hrefs: [],
		videos: [{
			src: 'http://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2436732&isview=1&homeshow=1',
			title: '原来他们这样看中国共产党'
		}, {
			src: 'http://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2446017&isview=1&homeshow=1',
			title: '中国变了，他们竟这样看'
		}]
	}, { //11
		title: '微视频：砥砺奋进新姿态',
		href: 'http://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2392073&isview=1&homeshow=1',
		hrefs: []
	}, { //12	title: '中共为什么行？',
		title: '中共为什么行?面对"世界之问",外国大咖这样回答',
		href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2454883&isview=1&homeshow=1',
		videos: [{
			src: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2454883&isview=1&homeshow=1',
			title: '(上)'
		}, {
			src: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2456499&isview=1&homeshow=1',
			title: '(下)'
		}],
		hrefs: []
	}, { //13
		title: 'MV《撸起袖子加油干》',
		href: 'http://news.xinhuanet.com/politics/19cpcnc/2017-10/26/c_1121857043.htm?from=groupmessage&isappinst',
		hrefs: [],
		newPage: true
	}],
	init: function() {
		var s = this;
		this.vue = new Vue({
			el: '#zmiti-main-ui',
			data: {
				currentIndex: s.h5List.length - 1, //s.h5List.length / 2 | 0,
				disX: 0,

				activeTab: 'h5List',

				currentHref: '',

				showTips: false,

				indexPageClass: '',

				showIndex: false,

				isTransition: 12,

				pageList: [],

				showCurtain: false,

				h5List: s.h5List,
				videoList: s.videoList,
				textArr: ['一', '二', '三', '四', '五']
			},
			methods: {
				changeToScene: function(type) {
					if (arguments.callee.type === type) {
						return;
					}
					this.showCurtain = true;
					this.activeTab = type;

					setTimeout(function() {
						this.currentIndex = type === 'h5List' ? 0 : 1;
						//type !== 'h5List' && s.initRight()
					}.bind(this), 500)
					setTimeout(function() {
						this.pageList = this[type];
						this.showCurtain = false;
						//type === 'h5List' && s.initLeft();
						console.log(this.currentIndex)
						s[type === 'h5List' ? 'initLeft' : 'initRight']();

					}.bind(this), 1000);


					arguments.callee.type = type;
				},

				entryNewPage: function(argument) {
					this.showTips = false;
					window.location.href = this.HREF;


				},
				entryVideo: function(v) {
					this.currentHref = v.src;
					$('.zmiti-back1').hide();
				},
				entryDetail: function(subject) {
					if (subject.isNewLayOut) {
						var href = window.location.href;
						window.location.href = subject.href + '?zmiti=zmiti&href=' + href;

						//$('#meta').attr('content', 'width=640,user-scalable=no');

					} else {
						//$('#meta').attr('content', 'width=device-width,initial-scale=1.0,user-scalable=no')

					}

					if (subject.newPage) {

						this.showTips = true;
						setTimeout(function() {
							$('.zmiti-mask').css({
								display: 'block'
							})
						}, 10)

						this.HREF = subject.href;
						var s = this;
						setTimeout(function() {
								s.entryNewPage()
							}, 1000)
							//alert(this.HREF)
					} else {
						this.currentHref = subject.href;
						$('.zmiti-back1').hide();
					}

					/*setTimeout(function() {
						$('.zmiti-back').css({
							width: subject.isNewLayOut ? '3rem' : '1.5rem',
							height: subject.isNewLayOut ? '3rem' : '1.5rem'
						})
					}, 100)*/

				},
				back: function() {
					//$('#meta').attr('content', 'width=device-width,initial-scale=1.0,user-scalable=no')
					this.currentHref = '';
					$('.zmiti-back1').show();

				}
			},
			beforeCreate: function() {

			},
			created: function() {
				var s = this;

				$('.zmiti-back1').css({
					display: 'block'
				})

				this.h5List.forEach(function(list, i) {
					list.img = './assets/images/h5-' + (i + 1) + '.jpg';
					list.bg = './assets/images/h5-' + (i + 1) + '-1.jpg';

					list.title = list.title.trim().replace(/\n/ig, '');
					if (i === s.currentIndex) {
						list.className = 'active';
					} else {
						if (i > s.currentIndex) {
							list.className = 'right transition'
						}
						if (i > s.currentIndex + 1) {
							list.className = 'right1 '
						}
						if (i < s.currentIndex) {
							list.className = 'left transition'
						}
						if (i < s.currentIndex + 1) {
							list.className = 'left1 transition'
						}
					}
				});

				this.videoList.forEach(function(list, i) {
					list.img = './assets/images/video-' + (i + 1) + '.jpg';
					list.bg = './assets/images/video-' + (i + 1) + '-1.jpg';

					if (i === s.currentIndex) {
						list.className = 'active';
					} else {
						if (i > s.currentIndex) {
							list.className = 'right transition'
						}
						if (i > s.currentIndex + 1) {
							list.className = 'right1 '
						}
						if (i < s.currentIndex) {
							list.className = 'left transition'
						}
						if (i < s.currentIndex - 1) {
							list.className = 'left1 transition'
						}
					}
				});
				this.pageList = this.h5List;

				$('#zmiti-main-ui').on('touchmove', function(e) {
					e.preventDefault()
				})

				var key = zmitiUtil.getQueryString('zmiti');

				this.showIndex = key !== 'zmiti';


			}
		});

		this.bindEvent();
		this.initLeft();

		if (zmitiUtil.getQueryString('zmiti') === 'zmiti') {

			this.initLeft();
			this.initLeft();
		}

		this.wxConfig(document.title, document.title, 'http://h5.zhongguowangshi.com/' + window.h5name + '/assets/images/300.jpg');
	},

	initLeft: function() {
		var s = this;

		s.vue.currentIndex = (s.vue.currentIndex + 1) % s.vue.pageList.length;

		var classList = [
			'left1 transition',
			'left transition',
			'active transition',
			'right ',
			'right1 '
		]
		var pageList = s.vue.pageList,
			currentIndex = s.vue.currentIndex;

		pageList.forEach(function(list, i) {

			if (currentIndex > i) {
				pageList[i].className = classList[0]
			} else if (currentIndex < i) {
				pageList[i].className = classList[4]
			}

			(pageList[currentIndex + 1] || pageList[0])['className'] = classList[3];
			(pageList[currentIndex + 2] || pageList[1])['className'] = classList[4];
			(pageList[currentIndex - 1] || pageList[pageList.length - 1])['className'] = classList[1];
			//(pageList[currentIndex - 2] || pageList[pageList.length - 2])['className'] = classList[0];
		})



		pageList[currentIndex].className = classList[2];
	},
	initRight: function() {
		var s = this;
		s.vue.currentIndex = s.vue.currentIndex - 1;

		if (s.vue.currentIndex < 0) {
			s.vue.currentIndex = s.vue.pageList.length - 1;
		}
		var pageList = s.vue.pageList,
			currentIndex = s.vue.currentIndex;


		//console.log(s.vue.currentIndex)

		s.vue.currentIndex = s.vue.currentIndex % pageList.length;

		var classList = [
			'left1 ',
			'left ',
			'active transition',
			'right transition',
			'right1 transition'
		]

		pageList.forEach(function(list, i) {

			if (currentIndex > i) {
				pageList[i].className = classList[0]
			} else if (currentIndex < i) {
				pageList[i].className = classList[4]
			}

			(pageList[currentIndex + 1] || pageList[0])['className'] = classList[3];
			(pageList[currentIndex + 2] || pageList[1])['className'] = classList[4];
			(pageList[currentIndex - 1] || pageList[pageList.length - 1])['className'] = classList[1];
			//(pageList[currentIndex - 2] || pageList[pageList.length - 2])['className'] = classList[0];
		})



		pageList[currentIndex].className = classList[2];
	},
	bindEvent: function() {
		var s = this;

		$('#zmiti-subject-list').swipe('left', function(e, _this) {
			s.initLeft();

		}).swipe('right', function(e, _this) {
			s.initRight()
		}).on('touchstart', function() {});
	},
	randomString: function(len) {　
		var len = len || 8;　　
		var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'; /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/ 　　
		var maxPos = $chars.length;　　
		var pwd = '';　　
		for (var i = 0; i < len; i++) {　　　　
			pwd += $chars.charAt(Math.floor(Math.random() * maxPos));　　
		}　　
		return pwd;
	},


	loading: function(arr, fn, fnEnd) {
		var len = arr.length;
		var count = 0;
		var i = 0;

		function loadimg() {
			if (i === len) {
				return;
			}
			var img = new Image();
			img.onload = img.onerror = function() {
				count++;
				if (i < len - 1) {
					i++;
					loadimg();
					fn && fn(i / (len - 1), img.src);
				} else {
					fnEnd && fnEnd(img.src);
				}
			};
			img.src = arr[i];
		}
		loadimg();
	},

	isWeiXin: function() {
		var ua = window.navigator.userAgent.toLowerCase();
		if (ua.match(/MicroMessenger/i) == 'micromessenger') {
			return true;
		} else {
			return false;
		}
	},

	wxConfig: function(title, desc, img, url) {
		var s = this;
		var appId = data.wxappid; //'wxfacf4a639d9e3bcc'; // data.wxappid; // 'wxfacf4a639d9e3bcc'; //data.wxappid;
		var durl = url || location.href.split('#')[0];
		var code_durl = encodeURIComponent(durl);
		var protocol = window.location.protocol;
		$.ajax({
			type: 'get',
			url: protocol + "//h5.zhongguowangshi.com/" + window.h5name + "/weixin/jssdk.php?type=signature&durl=" + code_durl + '&worksid=' + worksid,
			//url: "http://api.zmiti.com/weixin/jssdk.php?type=signature&durl=" + code_durl,
			dataType: 'jsonp',
			jsonp: "callback",
			jsonpCallback: "jsonFlickrFeed",
			success: function(data) {
				wx.config({
					debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
					appId: appId, // 必填，公众号的唯一标识
					timestamp: '1488558145', // 必填，生成签名的时间戳
					nonceStr: 'Wm3WZYTPz0wzccnW', // 必填，生成签名的随机串
					signature: data.signature, // 必填，签名，见附录1
					jsApiList: ['checkJsApi',
							'onMenuShareTimeline',
							'onMenuShareAppMessage',
							'onMenuShareQQ',
							'onMenuShareWeibo',
							'hideMenuItems',
							'showMenuItems',
							'hideAllNonBaseMenuItem',
							'showAllNonBaseMenuItem'
						] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
				});

				wx.ready(function() {
					//朋友圈
					wx.onMenuShareTimeline({
						title: title, // 分享标题
						link: durl, // 分享链接
						imgUrl: img, // 分享图标
						desc: desc,
						success: function() {},
						cancel: function() {}
					});
					//朋友
					wx.onMenuShareAppMessage({
						title: title, // 分享标题
						link: durl,
						imgUrl: img, // 分享图标
						type: "link",
						dataUrl: "",
						desc: desc,
						success: function() {},
						cancel: function() {}
					});
					//qq
					wx.onMenuShareQQ({
						title: title, // 分享标题
						link: durl, // 分享链接
						imgUrl: img, // 分享图标
						desc: desc,
						success: function() {},
						cancel: function() {}
					});
				});
			}
		});

	},
	getQueryString: function(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var r = window.location.search.substr(1).match(reg);
		if (r != null) return (r[2]);
		return null;
	}
};


var key = zmitiUtil.getQueryString('zmiti');
if (key === 'zmiti') {
	$("#zmiti-loading").css({
		display: 'none'
	})
	zmitiUtil.init()

} else {
	$("#zmiti-loading").css({
		display: 'block'
	})


}

$(function() {
	var imgs = [
		'./assets/images/bottom.png',
		'./assets/images/copyright.png',
		'./assets/images/top.png',
		'./assets/images/title.png',
		'./assets/images/h5.png',
		'./assets/images/back.png',
		'./assets/images/back1.png',
		'./assets/images/video.png',
		'./assets/images/dang.png',
		'./assets/images/ico-h5-1.png',
		'./assets/images/ico-h5-2.png',
		'./assets/images/ico-video-2.png',
		'./assets/images/ico-video-1.png',
	];
	zmitiUtil.h5List.forEach(function(list, i) {
		imgs.push('./assets/images/h5-' + (i + 1) + '.jpg')
		imgs.push('./assets/images/h5-' + (i + 1) + '-1.jpg')
	})
	zmitiUtil.videoList.forEach(function(list, i) {
		imgs.push('./assets/images/video-' + (i + 1) + '.jpg')
		imgs.push('./assets/images/video-' + (i + 1) + '-1.jpg')
	})

	//zmitiUtil.loading()
	zmitiUtil.loading(imgs, function(scale) {
		var scale = scale * 100 | 0;
		$('#zmiti-loading span').width(scale + '%')
		$('#zmiti-loading label').css({
			left: (scale - 12) + '%'
		}).find('i').html(scale + '%')
	}, function() {

		var html = '<a class="zmiti-back zmiti-back1" href="http://h5.zhongguowangshi.com/dangzhang5/index.html?zmiti=zmiti"><img src=\'./assets/images/back1.png\'/></a>'

		$('body').append(html);
		key !== 'zmiti' && zmitiUtil.init()
		setTimeout(function() {
			$('#zmiti-loading').remove();
			zmitiUtil.vue.indexPageClass = 'active'
		}, 500)
	});
})