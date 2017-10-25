/**
 * Created by fly on 2017/8/9.
 */



var worksid = '1275459017'; //新华社的作品

var data = { //新华社的公众号信息
	wxappid: 'wx5ec3d35069383211',
	wxappsecret: 'd94ea41d9cd2ba03c7cab5fc0e212cec'
}

var shareUrl = 'http://h5.zhongguowangshi.com/letter/assets/images/300.jpg';
shareUrl = 'http://h5.zmiti.com/public/letter/assets/images/300.jpg';

var zmitiUtil = {
	h5List: [

		{ //1
			bg: './assets/images/h5-1.jpg',
			date: ' 2017-10-13',
			from: '新华网 产品研究院',
			img: './assets/images/h5-1.jpg',
			title: '点赞十九大 中国强起来',
			href: 'http://newdata.news.cn/dzsjd/#0'
		}, { //2
			bg: './assets/images/h5-1.jpg',
			date: ' 2017-10-18',
			from: '新媒体中心 产品研究院',
			img: './assets/images/h5-1.jpg',
			title: '刚刚，十九大开幕了！',
			href: 'http://h5.zhongguowangshi.com/letter-xc-base3/index.html'
		}, { //3
			bg: './assets/images/h5-11.jpg',
			date: ' 2017-10-18',
			from: '新华网',
			img: './assets/images/h5-11.jpg',
			title: '@所有人 你有一封来自人民大会堂的信',
			href: 'http://newdata.news.cn/srf/'
		}, { //4
			bg: './assets/images/h5-1.jpg',
			date: '2017-10-24',
			from: '新媒体中心',
			img: './assets/images/h5-1.jpg',
			title: '走复兴之路，这一程：强起来',
			href: 'https://h5.hecoe.com/baidu/map/timeline171012/index.html'
		}, { //5
			bg: './assets/images/h5-3.jpg',
			date: '2017-10-22',
			from: '新华网',
			img: './assets/images/h5-3.jpg',
			title: '全息全景！带你换个方式看报告',
			href: 'http://fms.news.cn/swf/2017qxbg/index.html'
		}, { //6
			bg: './assets/images/h5-1.jpg',
			date: ' 2017-10-18',
			from: '新媒体中心',
			img: './assets/images/h5-1.jpg',
			title: '全景！十九大隆重开幕',
			href: 'http://mob.visualbusiness.cn/newsexhibition/index.html?albumId=A0C6240F3654428E9C766E4C97C778C5&preview=true'
		}
	],
	videoList: [

		{ //1
			bg: './assets/images/h5-1.jpg',
			date: '2017-10-17',
			from: '全媒头条',
			img: './assets/images/h5-1.jpg',
			title: '震撼大片︳领航 ',
			href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2418515&isview=1&homeshow=0'
		}, { //2
			bg: './assets/images/h5-1.jpg',
			date: '2017-10-19',
			from: '全媒头条',
			img: './assets/images/h5-1.jpg',
			title: '系列微视频“我们的自信”',
			href: 'https://xhpfmapi.zhongguowangshi.com/theme/index.html?relid=19425&isview=1&homeshow=1'
		}, { //3
			bg: './assets/images/h5-1.jpg',
			date: '2017-10-20',
			from: 'cnc视频',
			img: './assets/images/h5-1.jpg',
			title: '中国共产党为什么行（一）（二）（三）（四）',
			hrefs: ['https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2426505&isview=1&homeshow=1',
				'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2428522&isview=1&homeshow=1',
				'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2429921&isview=1&homeshow=1',
				'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2431562&isview=1&homeshow=1'
			]
		}, { //4
			bg: './assets/images/h5-1.jpg',
			date: '2017-10-19',
			from: '新媒体中心',
			img: './assets/images/h5-1.jpg',
			title: '进入《新时代》，中国强起来！一起来听！',
			href: 'http://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2423780'
		}, { //5
			bg: './assets/images/h5-1.jpg',
			date: '2017-10-18',
			from: '新媒体中心',
			img: './assets/images/h5-1.jpg',
			title: '超燃视频宜收藏!300秒速览十九大报告!',
			href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2420249&isview=1&homeshow=1'
		}, { //6
			bg: './assets/images/h5-1.jpg',
			date: '2017-10-18',
			from: '新媒体中心',
			img: './assets/images/h5-1.jpg',
			title: '人民大会堂的“十九大时光”',
			href: 'https://xhpfmapi.zhongguowangshi.com/share/index.html?docid=2429334&isview=1&homeshow=1'
		}
	],
	init: function() {
		var s = this;
		this.vue = new Vue({
			el: '#zmiti-main-ui',
			data: {
				currentIndex: 0,
				disX: 0,

				activeTab: 'h5List',

				currentHref: '',

				isTransition: 12,

				pageList: [],

				h5List: s.h5List,
				videoList: s.videoList
			},
			methods: {
				changeToScene: function(type) {
					this.pageList = this[type];
					this.activeTab = type;
				}
			},
			beforeCreate: function() {

			},
			created: function() {
				this.h5List.forEach(function(list, i) {
					list.bg = list.img = './assets/images/h5-' + (i + 1) + '.jpg';
					list.title = list.title.trim().replace(/\n/ig, '');
				});
				this.videoList.forEach(function(list, i) {
					list.bg = list.img = './assets/images/video-' + (i + 1) + '.jpg';
				});
				this.pageList = this.h5List;

				$('#zmiti-main-ui').on('touchmove', function(e) {
					e.preventDefault()
				})
			}
		});

		this.bindEvent();
	},
	bindEvent: function() {
		var s = this;
		$('#zmiti-subject-list').swipe('left', function(e, _this) {


			if (s.vue.currentIndex >= s.vue.pageList.length - 1) {

				//$(_this).find('li:eq(-1)').removeClass('zmiti-page-item');

				s.vue.currentIndex = s.vue.pageList.length - 1;
			} else {
				s.vue.isTransition = 12;
				s.vue.currentIndex = s.vue.currentIndex + 1;
			}
		}).swipe('right', function(e, _this) {
			if (s.vue.currentIndex <= 0) {
				s.vue.currentIndex = 0;
				////$(_this).find('li:eq(-1)').removeClass('right right1').addClass('left');
				return;
			} else {
				s.vue.currentIndex = s.vue.currentIndex - 1;
			}
		});
	},

	savePV: function(opt) {
		$.ajax({
			url: 'http://api.zmiti.com/v2/weixin/save_userview/',
			type: 'post',
			data: {
				worksid: worksid,
				wxopenid: opt.openid,
				wxname: opt.nickname,
				usercity: opt.address,
				longitude: opt.longitude,
				latitude: opt.latitude
			},
			error: function() {},
			success: function(data) {}
		})
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

	getPos: function(nickname, headimgurl) {
		var s = this;
		//alert(wx.posData.longitude+'' +wx.posData.latitude)
		$.ajax({
			url: 'http://restapi.amap.com/v3/geocode/regeo?key=10df4af5d9266f83b404c007534f0001&location=' + wx.posData.longitude + ',' + wx.posData.latitude + '&poitype=&radius=100&extensions=base&batch=false&roadlevel=1+ ',
			type: 'get',
			error() {

			},
			success(data) {



				if (data.status === '1' && data.infocode === '10000') {

					var addressComponent = data.regeocode.addressComponent;

					var opt = {
						type: 'map',
						address: (addressComponent.province || addressComponent.city[0]) + ' ' + (addressComponent.city || ''),
						pos: [wx.posData.longitude, wx.posData.latitude],
						nickname: nickname,
						headimgurl: headimgurl
					}
					window.city = (addressComponent.province || addressComponent.city[0]) + ' ' + (addressComponent.city || '');
					$('.wx-user-pos em:eq(1)').html(window.city)
					$('.wx-xy span').html(window.city);
					s.getNum();
					var posData = s.posData();
					var index = Math.random() * posData.length | 0;


					$.ajax({
						url: 'http://api.zmiti.com/v2/weixin/save_userview/',
						type: 'post',
						data: {
							worksid: worksid,
							wxopenid: s.openid,
							wxname: nickname,
							usercity: opt.address,
							longitude: wx.posData.longitude,
							latitude: wx.posData.latitude
						},
						error: function() {},
						success: function(data) {}
					})


					$.ajax({
						url: 'http://api.zmiti.com/v2/weixin/add_wxuser/',
						type: 'post',
						data: {
							wxopenid: s.openid,
							worksid: worksid,
							nickname: nickname,
							headimgurl: headimgurl,
							longitude: wx.posData.longitude,
							latitude: wx.posData.latitude,
							accuracy: wx.posData.accuracy,
							wxappid: data.wxappid,
							integral: localStorage.getItem('nickname') ? 0 : 10
						},
						error() {
							//alert('add_wxuser: 服务器返回错误');
						},
						success(data) {
							if (data.getret === 0) {

							} else {
								//alert('getret  : ' + data.getret + ' msg : ' + data.getmsg + ' .....');
							}
						}
					});

					//获取用户积分
					//
					$.ajax({
						url: 'http://api.zmiti.com/v2/msg/send_msg/',
						data: {
							type: worksid,
							content: JSON.stringify(opt),
							to: opt.to || ''
						},
						success(data) {
							s.state.showUI = true;
							s.forceUpdate();
							//console.log(data);
						}
					})
				} else {
					///alert('地址信息获取失败')
					///
					///
					var opt = {
						type: 'map',
						address: '北京市',
						pos: [wx.posData.longitude, wx.posData.latitude],
						nickname: nickname,
						headimgurl: headimgurl
					}
					window.city = '北京市';
					$('.wx-user-pos em:eq(1)').html(window.city)
					$('.wx-xy span').html(window.city);
					s.getNum();
					var posData = s.posData();
					var index = Math.random() * posData.length | 0;


					$.ajax({
						url: 'http://api.zmiti.com/v2/weixin/save_userview/',
						type: 'post',
						data: {
							worksid: worksid,
							wxopenid: s.openid,
							wxname: nickname,
							usercity: opt.address,
							longitude: wx.posData.longitude,
							latitude: wx.posData.latitude
						},
						error: function() {},
						success: function(data) {

						}
					})
				}
			}
		})
	},

	wxConfig: function(title, desc, img, url) {
		var s = this;
		var appId = data.wxappid; //'wxfacf4a639d9e3bcc'; // data.wxappid; // 'wxfacf4a639d9e3bcc'; //data.wxappid;

		var durl = url || location.href.split('#')[0];



		var code_durl = encodeURIComponent(durl);



		$.ajax({
			type: 'get',
			url: "http://api.zmiti.com/weixin/jssdk.php?type=signature&durl=" + code_durl,
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


					this.locationFail = true;
					var _this = this;
					if (!wx.isLoad) {
						wx.isLoad = true;
						wx.getLocation({
							type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
							fail: function() {
								//window.debug && alert('定位失败,重新进入');
								//window.location.href = window.location.href;
								var idx = Math.random() * s.pData().length | 0;

								var latitude = s.posData()[idx].lat; // 纬度，浮点数，范围为90 ~ -90

								var longitude = s.posData()[idx].log; // 经度，浮点数，范围为180 ~ -180。

								var accuracy = 100; // 位置精度
								wx.posData = {
									longitude,
									latitude,
									accuracy
								};

								if ((s.nickname || s.headimgurl) && s.openid && _this.locationFail) {
									_this.locationFail = false;

									s.getPos(s.nickname, s.headimgurl);

								}
							},
							cancel: function() {

								var idx = Math.random() * s.posData().length | 0;

								var latitude = s.posData()[idx].lat; // 纬度，浮点数，范围为90 ~ -90

								var longitude = s.posData()[idx].log; // 经度，浮点数，范围为180 ~ -180。

								var accuracy = 100; // 位置精度
								wx.posData = {
									longitude,
									latitude,
									accuracy
								};

								if ((s.nickname || s.headimgurl) && s.openid && _this.locationFail) {
									_this.locationFail = false;

									s.getPos(s.nickname, s.headimgurl);

								}
							},
							success: function(res) {
								var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
								var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
								var speed = res.speed; // 速度，以米/每秒计
								var accuracy = res.accuracy; // 位置精度

								wx.posData = {
									longitude,
									latitude,
									accuracy
								};

								if ((s.nickname || s.headimgurl) && s.openid && _this.locationFail) {
									_this.locationFail = false;
									s.getPos(s.nickname, s.headimgurl);

								}

							}
						});
					}


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

$(function() {
	var imgs = [];
	zmitiUtil.h5List.forEach(function(list) {
		imgs.push(list.img)
		imgs.push(list.bg)
	})
	zmitiUtil.videoList.forEach(function(list) {
			imgs.push(list.img)
			imgs.push(list.bg)
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
		}, 500)
	});
})