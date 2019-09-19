<template>
	<view>
		您的微信暂未绑定，请前往PC端绑定微信
	</view>
</template>

<script>
	import md5 from 'js-md5';
	import qs from 'qs';
	export default {
		data() {
			return {
				password:"",
				username:"",
			}
		},
		onLoad:function(){
			var _self = this 
			_self.getParams()
		},
		beforeDestroy(){
			uni.removeStorageSync("weixin")
		},
		methods: {
				getParams:function(){
				var _self = this
				  var url = location.search; //获取url中"?"符后的字串  
			      var theRequest = new Object();  
			    if (url.indexOf("?") != -1) {  
			    var str = url.substr(1);  
			    var strs = str.split("&");  
			 for(var i = 0; i < strs.length; i ++) {  
			    theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);  
			    }
			    _self.code = theRequest.code
				if(_self.code == ""||_self.code==null){
					 uni.showToast({
						title: '微信信息没有获取，请重新登录',
						icon: "none"
					}); 
					uni.navigateTo({
							url:"../login/login"
					})
					return false
				}else{
						uni.request({
							url:_self.$api+"Login/Wechat",
							data:{
								 code:_self.code,
								 AppID:'wx4c958b0745e83859',
								 AppSecret:'1ee1c1f93c8d2889403105d88f7f1c90',
								},
							method:"GET",
							success:function(res){
								console.log(res)
								    if(res.data.sign == 2){
										    _self.password=res.data.Password
											_self.username = res.data.Username
										 var str = _self.username+'&&'+_self.password
										var data = qs.stringify({
										    str:str
										});
										uni.request({
											url:_self.$api+"Login/Judging_Landing",
											method:"POST",
											header:{ 'Content-Type': 'application/x-www-form-urlencoded'}, //multipart/form-data;boundary=--xxxxxxx   application/json},
											data:qs.stringify({str:str}),
											success:function(res){
											console.log(res)
											// var str = res.data; 
										     if(res.data == 1){
												 uni.showToast({
													title: '用户名错误',
													icon: "none"
												});
												return false  
										     }
										       if(res.data == 2){
												    uni.showToast({
												   	title: '密码错误',
												   	icon: "none"
												   });
										         return false
										     }
										      if(res.data == 3){ 
												     uni.showToast({
												  	title: '该账户被锁定',
												  	icon: "none"
												  });
										         return false
										     }
											  if(res.data == 5){
																uni.showModal({
																title: '提示',
																content: '此账号已在其他地方登录, 是否继续登录?',
																success: function (res) {
																	if (res.confirm) {
																		uni.request({
																			url:_self.$api+"Login/Occupancy_Landing",
																			method:"POST",
																			header:{ 'Content-Type': 'application/x-www-form-urlencoded'}, //multipart/form-data;boundary=--xxxxxxx   application/json},
																			data:qs.stringify({str:str}),
																			success:function(res){
																					  console.log(res)
																				      uni.setStorageSync('userId',res.data.User_Id)
																					  uni.setStorageSync('sessionId',res.data.sessionId)
																					  uni.setStorageSync('Rule_Id',res.data.Rule_Id)
																					  uni.setStorageSync('Expiration_Date',res.data.Expiration_Date)
																					  uni.setStorageSync('Username',res.data.Username)
																					  console.log(uni.getStorageSync("userId"))
																					  uni.switchTab({
																					  	url:"../index/index"
																					  })
																			}
																		})
																	} else if (res.cancel) {
																		console.log('用户点击取消');
																		uni.navigateTo({
																			url:"../login/login"
																		})
																	}
																}
															});
												}
												if(res.data == 4){
													if(uni.getStorageSync('userId')){
																	uni.request({
																		url:_self.$api+'Login/Exit_Landing',
																		method: 'GET',
																		data: { sessionId:uni.getStorageSync('sessionId')},
																		success: function(res) {
																			  if(res.data == true){
																				uni.removeStorageSync('userId')
																				uni.removeStorageSync('sessionId')
																				uni.removeStorageSync('Rule_Id')
																				uni.removeStorageSync('Expiration_Date') 
																				uni.removeStorageSync('Username')
																				}
																		}	
																	});
														}
												uni.request({
													url:_self.$api+"Login/Rsa_Land",
													method:"POST",
													header:{ 'Content-Type': 'application/x-www-form-urlencoded'}, //multipart/form-data;boundary=--xxxxxxx   application/json},
													data:qs.stringify({str:str}),
													success: function(res){
														console.log(res)
													uni.setStorageSync('userId',res.data.User_Id)
													uni.setStorageSync('sessionId',res.data.sessionId)
													uni.setStorageSync('Rule_Id',res.data.Rule_Id)
													uni.setStorageSync('Expiration_Date',res.data.Expiration_Date)
													uni.setStorageSync('Username',res.data.Username)
													console.log(uni.getStorageSync("userId"))
														 uni.switchTab({
															url:"../index/index"
														})
													},
												}); 
												}
												}
											})
									}
									else{
										 uni.showToast({
											title: '您的微信尚未绑定账号,请在pc端绑定',
											icon: "none",
											duration:2000,
											success:function(){
													uni.navigateTo({
													url:"../login/login"
												})
												return false
											}
										}); 
									}
								}
						})
					}
					 
				}
			  
			},
		}
	}
</script>

<style>

</style>
