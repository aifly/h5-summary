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
window.h5name = 'h5-summary1'
var zmitiUtil = {

	h5List: [

		{ //1
			bg: './assets/images/h5-1.jpg',
			date: ' 2017-10-13',
			from: '新华网 产品研究院',
			img: './assets/images/h5-1.jpg',
			title: '点赞十九大 中国强起来',
			href: 'http://newdata.news.cn/dzsjd/#0',
			hrefs: []
		}, { //2
			bg: './assets/images/h5-2.jpg',
			date: ' 2017-10-18',
			from: '新媒体中心 产品研究院',
			img: './assets/images/h5-2.jpg',
			title: '刚刚，十九大开幕了！',
			href: 'http://h5.zhongguowangshi.com/letter-xc-base3/index.html',
			hrefs: []
		}, { //3
			bg: './assets/images/h5-3.jpg',
			date: ' 2017-10-18',
			from: '新媒体中心',
			isNewLayOut: true,
			img: './assets/images/h5-3.jpg',
			title: '@所有人：来自新时代的一份考卷，请查收',
			href: 'https://h5.zhongguowangshi.com/qa19da/index.html',
			hrefs: []
		}, { //4
			bg: './assets/images/h5-1.jpg',
			date: '2017-10-24',
			from: '新媒体中心',
			img: './assets/images/h5-1.jpg',
			title: '走复兴之路，这一程：强起来',
			href: 'https://h5.hecoe.com/baidu/map/timeline171012/index.html',
			hrefs: []
		}, { //5
			bg: './assets/images/h5-3.jpg',
			date: '2017-10-22',
			from: '新华网',
			img: './assets/images/h5-3.jpg',
			title: '全息全景！带你换个方式看报告',
			href: 'http://fms.news.cn/swf/2017qxbg/index.html',
			hrefs: []
		}, { //6
			bg: './assets/images/h5-1.jpg',
			date: ' 2017-10-18',
			from: '新媒体中心',
			img: './assets/images/h5-1.jpg',
			title: '全景！十九大隆重开幕',
			href: 'http://mob.visualbusiness.cn/newsexhibition/index.html?albumId=A0C6240F3654428E9C766E4C97C778C5&preview=true',
			hrefs: []
		}, { //7
			bg: './assets/images/h5-1.jpg',
			date: '2017-10-23',
			from: '新媒体中心',
			img: './assets/images/h5-1.jpg',
			title: '人民对美好生活的向往，就是我们的奋斗目标',
			href: 'http://22cf92a9.u.h5mgd.com/campaigns/5984243e163bda0694090c83/20171023040332/59e9b988f7eb1f061613694a/index.html',
			hrefs: []
		}, { //8
			bg: './assets/images/h5-1.jpg',
			date: ' 2017-10-18',
			from: '新媒体中心',
			img: './assets/images/h5-1.jpg',
			title: '@所有人 你有一封来自人民大会堂的信',
			href: 'http://newdata.news.cn/srf/',
			hrefs: []
		}, { //9
			bg: './assets/images/h5-1.jpg',
			date: ' 2017-10-18',
			from: '新媒体中心',
			img: './assets/images/h5-1.jpg',
			title: '习主席外交风采掠影',
			href: 'http://fms.news.cn/swf/2017_sjxw/10_16_xjpzj/index.html',
			hrefs: []
		}, { //10
			bg: './assets/images/h5-1.jpg',
			date: ' 2017-10-18',
			from: '新媒体中心',
			img: './assets/images/h5-1.jpg',
			title: '划重点，共点赞！跟新华社一起读十九大报告全文',
			href: 'https://mp.weixin.qq.com/s?__biz=MzA4NDI3NjcyNA==&mid=2649368142&idx=1&sn=c80193245813b28ea9624eb3563e75df&chksm=87f722d5b080abc3f3a92faf1ce962bde21611cb801536faa0a6afd115898b37a4e0f99e568a#rdf72ccbb080a5dda0f28ec49a131d5208e8491847acc3989231f749e66e52fe3b40fd561e57#rd',
			hrefs: []
		}
	],
	videoList: [

		{ //1
			bg: './assets/images/h5-1.jpg',
			date: '2017-10-17',
			from: '全媒头条',
			img: './assets/images/h5-1.jpg',
			title: '震撼大片︳领航 ',
			href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2418515&isview=1&homeshow=0',
			hrefs: []
		}, { //2
			bg: './assets/images/h5-1.jpg',
			date: '2017-10-19',
			from: '全媒头条',
			img: './assets/images/h5-1.jpg',
			title: '系列微视频“我们的自信”',
			href: 'https://xhpfmapi.zhongguowangshi.com/theme/index.html?relid=19425&isview=1&homeshow=1',
			hrefs: []
		}, { //3
			bg: './assets/images/h5-1.jpg',
			date: '2017-10-20',
			from: 'cnc视频',
			img: './assets/images/h5-1.jpg',
			title: '中国共产党为什么行（一）（二）（三）（四）',
			href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2426505&isview=1&homeshow=1',
			hrefs: ['https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2426505&isview=1&homeshow=1',
				'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2428522&isview=1&homeshow=1',
				'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2429921&isview=1&homeshow=1',
				'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2431562&isview=1&homeshow=1'
			]
		}, { //4
			bg: './assets/images/h5-4.jpg',
			date: '2017-10-19',
			from: '新媒体中心',
			img: './assets/images/h5-4.jpg',
			title: '进入《新时代》，中国强起来！一起来听！',
			href: 'http://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2423780',
			hrefs: []
		}, { //5
			bg: './assets/images/h5-1.jpg',
			date: '2017-10-18',
			from: '新媒体中心',
			img: './assets/images/h5-1.jpg',
			title: '超燃视频宜收藏!300秒速览十九大报告!',
			href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2420249&isview=1&homeshow=1',
			hrefs: []
		}, { //6
			bg: './assets/images/h5-5.jpg',
			date: '2017-10-18',
			from: '新媒体中心',
			img: './assets/images/h5-5.jpg',
			title: '人民大会堂的“十九大时光”',
			href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2429334&isview=1&homeshow=1',
			hrefs: []
		}, { //7
			bg: './assets/images/h5-5.jpg',
			date: '2017-10-18',
			from: '新媒体中心',
			img: './assets/images/h5-5.jpg',
			title: '时代在变 你变了吗？',
			href: 'http://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2430504',
			hrefs: []
		}, { //8
			bg: './assets/images/h5-5.jpg',
			date: '2017-10-18',
			from: '新媒体中心',
			img: './assets/images/h5-5.jpg',
			title: '解码党代会：十九大为何这么重要',
			href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2420331&isview=1&homeshow=1',
			hrefs: []
		}, { //9
			bg: './assets/images/h5-5.jpg',
			date: '2017-10-18',
			from: '新媒体中心',
			img: './assets/images/h5-5.jpg',
			title: '微视频：“党代表通道”上的好声音',
			href: 'http://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2425150&channel=weixin&from=timeline&isappinstalled=0',
			hrefs: []
		}
	],
	init: function() {
		var s = this;
		this.vue = new Vue({
			el: '#zmiti-main-ui',
			data: {
				currentIndex: s.h5List.length - 1, //s.h5List.length / 2 | 0,
				disX: 0,

				activeTab: 'h5List',

				currentHref: '',

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
						this.currentIndex = 0;
					}.bind(this), 500)
					setTimeout(function() {
						this.pageList = this[type];
						this.showCurtain = false;
						s.initPos();

					}.bind(this), 1000);


					arguments.callee.type = type;
				},
				entryDetail: function(subject) {
					if (subject.isNewLayOut) {
						window.location.href = subject.href + '?zmiti=zmiti'
							//$('#meta').attr('content', 'width=640,user-scalable=no');

					} else {
						//$('#meta').attr('content', 'width=device-width,initial-scale=1.0,user-scalable=no')

					}
					this.currentHref = subject.href;

					/*setTimeout(function() {
						$('.zmiti-back').css({
							width: subject.isNewLayOut ? '3rem' : '1.5rem',
							height: subject.isNewLayOut ? '3rem' : '1.5rem'
						})
					}, 100)*/

				},
				back: function() {
					$('#meta').attr('content', 'width=device-width,initial-scale=1.0,user-scalable=no')

					this.currentHref = '';
				}
			},
			beforeCreate: function() {

			},
			created: function() {
				var s = this;

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
		this.initPos();

		if (zmitiUtil.getQueryString('zmiti') === 'zmiti') {

			this.initPos();
			this.initPos();
		}

		this.wxConfig(document.title, document.title, 'http://h5.zhongguowangshi.com/' + window.h5name + '/assets/images/300.jpg');
	},

	initPos: function() {
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
	bindEvent: function() {
		var s = this;
		$('#zmiti-subject-list').swipe('left', function(e, _this) {

			//s.vue.pageList.push(s.vue.pageList.shift())

			s.initPos();
			/*
						s.vue.pageList.forEach(function(list, i) {


							if (i === s.vue.currentIndex) {
								list.className = 'active transition';
							} else {
								if (i > s.vue.currentIndex) {
									list.className = 'right transition'
								}
								if (i > s.vue.currentIndex + 1) {
									list.className = 'right1 '
								}
								if (i < s.vue.currentIndex) {
									list.className = 'left transition'
								}
								if (i < s.vue.currentIndex - 1) {
									list.className = 'left1 transition'
								}
							}
							if (i === s.vue.pageList.length - 2) {
								//s.vue.pageList[0].className = 'right1'
							}


						});*/


			/*if (s.vue.currentIndex >= s.vue.pageList.length - 1) {

				s.vue.pageList

				s.vue.currentIndex = s.vue.pageList.length - 1;
			} else {
				s.vue.isTransition = 12;
			}*/

		}).swipe('right', function(e, _this) {


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


			console.log(currentIndex)
			pageList[currentIndex].className = classList[2];


			return;
			if (s.vue.currentIndex <= 0) {
				s.vue.currentIndex = s.vue.pageList.length - 1;

			} else {
				s.vue.currentIndex = s.vue.currentIndex - 1;
			}

			s.vue.pageList.forEach(function(list, i) {


				if (i === s.vue.currentIndex) {
					list.className = 'active transition';
				} else {
					if (i > s.vue.currentIndex) {
						list.className = 'right transition'
					}
					if (i > s.vue.currentIndex + 1) {
						list.className = 'right1 '
					}
					if (i < s.vue.currentIndex) {
						list.className = 'left transition'
					}
					if (i < s.vue.currentIndex - 1) {
						list.className = 'left1 transition'
					}
				}

			});
		});
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



		$.ajax({
			type: 'get',
			url: "http://h5.zhongguowangshi.com/" + window.h5name + "/weixin/jssdk.php?type=signature&durl=" + code_durl + '&worksid=' + worksid,
			//url: "http://api.zmiti.com/weixin/jssdk.php?type=signature&durl=" + code_durl,
			dataType: 'jsonp',
			jsonp: "callback",
			jsonpCallback: "jsonFlickrFeed",
			error: function() {

			},
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
		zmitiUtil.init()
		setTimeout(function() {
			$('#zmiti-loading').remove();
			zmitiUtil.vue.indexPageClass = 'active'
		}, 500)
	});
})