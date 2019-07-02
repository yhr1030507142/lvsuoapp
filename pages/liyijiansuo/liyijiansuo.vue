<template>
	<view class="content">
		<view class="header">
			<input type="text" class="search" v-model="searchInput">
			<view class="icon" @tap="search()">
				<image src="../../static/img/search.png" mode="" class="img"></image>
			</view>
		</view>
		<view class="middle">
			<view class="btn" @tap="search()">搜索数据库</view>
		</view>

	 </view>
	  
</template> 

<script>

	export default {
		data() {
			return {
			searchInput:"",
			}  
		},
		onLoad() {
			
			 
		},
		onShow(){
		
		},
		methods: {
			change(e){
				console.log(e)
			},
			search(){
				var _self =this
				uni.navigateTo({
					url:'../jiansuojieguo/jiansuojieguo?search='+_self.searchInput
				})
			}
		},
		watch:{
			
		},
	}
</script>

<style lang="scss">
.header{
	margin-top:30upx;
	position: relative;
	width: 100%; 
	height: 70upx;
	.search{
		width: 100%;
		border-radius: 5px;
		border: 1upx solid #dddddd;
		height: 70upx;
		padding-left: 20upx;
	}
	.icon{
		position: absolute;
		right: 20upx;
		top: 10upx;
		width: 55upx;
		height: 55upx;
		.img{
			width: 100%;
			height: 100%;
		}
	}
}
.middle{
	.btn{
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
	
}
</style>
