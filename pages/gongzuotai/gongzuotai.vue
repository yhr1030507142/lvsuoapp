<template>
	<view class="content">
		<view class="box">
			<ul class="ul">
				<li class="li" @tap="goLiyi()">利益检索</li>
				<!-- <li class="li" @tap="goWenDang()">文档</li> -->
				<li class="li" @tap="goTongji()">统计</li>
				<li class="li" @tap="tuichu()">退出</li>
				<!-- <li class="li">文档</li>
				<li class="li">审核</li> -->
			</ul>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			goLiyi:function(){
				uni.navigateTo({
					url:'../liyijiansuo/liyijiansuo'
				})
			},
			goTongji:function(){
				uni.navigateTo({
					url:'../tongji/tongji'
				})
			},
			goWenDang:function(){
				uni.navigateTo({ 
					url:'../wendang/wendang'
				})
			},
			tuichu:function(){
				var _self =this
				uni.request({
					url:_self.$api+"Login/Exit_Landing",
					data:{sessionId:uni.getStorageSync('sessionId')},
					success:function(res){
						console.log(res)
						 if(res.data == true){
							  uni.removeStorageSync('userId')
							  uni.removeStorageSync('sessionId')
							  uni.removeStorageSync('Rule_Id')
							  uni.removeStorageSync('Expiration_Date') 
							  uni.removeStorageSync('Username')
							  uni.navigateTo({
							  	url: '../login/login',
							  });
						}
						},
						fail:function(){
							   uni.removeStorageSync('userId')
							   uni.removeStorageSync('sessionId')
							   uni.removeStorageSync('Rule_Id')
							   uni.removeStorageSync('Expiration_Date') 
							   uni.removeStorageSync('Username')
							    uni.navigateTo({
							   	url: '../login/login',
							   });
						}
						
					
				})  
				},
		},
		
	}
</script>
 
<style lang="scss">
.box{
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	.ul{
		margin-top: 30upx;
		list-style: none;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex-wrap: wrap;
		.li{
			display: flex;
			flex-direction: row;
			justify-content: center;
			margin-right: 10upx;
			margin-top: 20upx;
			width: 30%;
			height: 300upx;
			align-items: center;
			font-size: 36upx;
			color: #7E2C2E;
			box-shadow:0 3px 15px 0 rgba(0,0,0,.3);
		}
	}
}
</style>
