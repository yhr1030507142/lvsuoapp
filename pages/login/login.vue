<template>
	<view class="content">
		<view class="logo">
			<image src="../../static/img/logo.png" mode="" class="img"></image>
		</view>
		
		<view class="btn btn1 flex row"  @tap="weixinLogin()">
			<view class="pic_box"><image src="../../static/img/weixin.png" mode="" class="pic"></image></view>
			<view>微信账号登录</view>
		</view>
		<view class="btn btn2 flex row" @tap="goToUserLogin()">
			<view class="pic_box">
				<image src="../../static/img/zhanghao1.png" mode="" class="pic1"></image>
			</view>
			<view>
				账号密码登录
			</view>
				
			
			</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				code:"",
			}
		},
		onLoad(){
			console.log(uni.getStorageSync("userId"))
			if(uni.getStorageSync("userId")||uni.getStorageSync("userId")===0){
				uni.switchTab({
					url:"../index/index"
				})
			}
		},
		onshow(){
			console.log(uni.getStorageSync("userId"))
			if(uni.getStorageSync("userId")){
				uni.switchTab({
					url:"../index/index"
				})
			}
		},
		methods: {
			goToUserLogin:function(){
		
				uni.navigateTo({
					url:"../loginUser/loginUser"
				})
			}, 
			weixinLogin:function(){
				uni.setStorageSync("weixin",1)
				location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx4c958b0745e83859&redirect_uri=http://lsmsqd.gzbigbang.net/pages/weixin/weixin&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect"
			},
		},
		
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
.btn{
	align-items: center;
	.pic_box{
		margin-right: 25upx;
	}
	.pic{
		width: 50upx;
		height: 50upx;
		margin-top: 10upx;
	}
	.pic1{
		width: 45upx;
		height: 45upx;
		margin-top: 10upx;
	}
	
}
.btn1{
	width: 100%;
	background: #A92A2E;
	color: #ffffff;
	margin: 0;
	padding: 0;
	list-style: none;
	outline: none;
	margin-top: 300upx;
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
.btn2{
	width: 100%;
	background: #7E2C2E;
	color: #ffffff;
	margin: 0;
	padding: 0;
	list-style: none;
	outline: none;
	margin-top: 50upx;
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
