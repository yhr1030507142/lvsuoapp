<template>
	<view class="content">
		<view class="logo">
			<image src="../../static/img/logo.png" mode="" class="img"></image>
		</view>
		<view class="m_200">
			
		</view>
		<view class="input m_200">
			<image src="../../static/img/shouji.png" mode="" class="icon"></image>
			<input type="text" class="input1" placeholder="请输入账号" v-model="username">
		</view>
		
		<view class="input">
			<image src="../../static/img/mima.png" mode="" class="icon"></image>
			<input type="text" class="input1" placeholder="请输入密码" v-model="password">
		</view>
		
		<view class="btn btn1 flex row" @tap="denglu()">
			<view>登录</view>
		</view>
		 
		 <view class="bottom">
			 <view class="bbox">
			 	<view  class="pic_img">
					<image src="../../static/img/weixin1.png" mode="" style="width: 100%;height: 100%;"></image>
				</view>
			 	<view class="">
			 		微信账号登录
			 	</view>
			 </view>
		</view>
	</view>
</template>

<script>
	var Encrypt = require('jsencrypt/bin/jsencrypt')
	import qs from 'qs';
	export default {
		data() {
			return {
				password:"", 
				username:"",
				pub:"",
			}
		},
		onLoad:function(){
			var _self =this
			_self.getPublicKey()
		},
		methods: {
			checknumber:function(String) { 
            var Letters = "1234567890"; 
            var i; 
            var c; 
            for( i = 0; i < String.length; i ++ ) 
            { 
            c = String.charAt( i ); 
            if (Letters.indexOf( c ) ==-1) 
            { 
            return true; 
            } 
            } 
            return false; 
            } ,
			denglu:function(){
				var _self = this
            if(_self.username==""||_self.username==null){
				  uni.showToast({
					title: '用户名不能为空',
					icon: "none"
				});
                return false
            }
             if(_self.password==""||_self.password==null){
				  uni.showToast({
				 	title: '请输入密码',
				 	icon: "none"
				 });
                return false
            }
            if(_self.checknumber(_self.username)){
				 uni.showToast({
					title: '用户名格式错误',
					icon: "none"
				});
                return false
            }


			var encrypt = new Encrypt.JSEncrypt();
			console.log(_self.pub)
            encrypt.setPublicKey(_self.pub)
            var str = _self.username+'&&'+_self.password
            var encrypted = encrypt.encrypt(str);
          // 加密后的密文  
            var data = qs.stringify({
                str:encrypted
            });
			console.log(data)
			// return false
			uni.request({
				url:_self.$api+"Login/Judging_Landing",
				method:"POST",
				header:{ 'Content-Type': 'application/x-www-form-urlencoded'}, //multipart/form-data;boundary=--xxxxxxx   application/json},
				data:qs.stringify({str:encrypted}),
				success:function(res){
				console.log(res)
				var str = res.data; 
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
												data:qs.stringify({str:encrypted}),
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
						data:qs.stringify({str:encrypted}),
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
			  },
			 getPublicKey(){
				 var _self =this
						uni.request({
							url:_self.$api+"Login/PublicKey",
							success:function(res){
								_self.pub = res.data.PublicKey
								console.log(_self.pub)
							}
						})
				},
			}
		}
	
</script>

<style lang="scss">
.logo{
	margin-top: 150upx; 
	width: 100%;
	height: 150upx;
	.img{
		width: 100%;
		height: 100%;
	}
}
.m_200{
	margin-top: 70upx;
	height: 10upx;
}
.input{
	margin-top: 50upx;
	width: 100%;
	border: none;
	border-bottom:1upx solid #dddddd;
	height: 70upx;
	line-height: 70upx;
	display: flex;
	flex-direction: row;
	align-items: center;
	.icon{
		width: 50upx;
		height: 50upx;
	}
	.input1{
		height: 50upx;
		padding-top: 10upx;
		padding-left: 20upx;
		padding-bottom: 10upx;
		flex: 1;
	}
}
.bottom{
	width: 90%;
	padding: 0;
	margin: 0 auto;
	align-items: center;
	font-size: 32upx;
	color: #999999;
	position: fixed;
	bottom: 20upx;
	height: 60upx;
	display: flex;
	flex-direction: row;
	justify-content: center;
	.bbox{
		width:300upx;
		display: flex;
		flex-direction: row;
		justify-content: center;
		.pic_img{
			width: 40upx;
			height: 40upx;
			margin-right: 10upx;
		}
	}
	
}

.btn1{
	width: 100%;
	background: #7E2C2E;
	color: #ffffff;
	margin: 0;
	padding: 0;
	list-style: none;
	outline: none;
	margin-top: 150upx;
	height: 100upx;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	font-size: 36upx;
	font-weight: 600;
	border:none;
	border-radius:10upx;
}


</style>
