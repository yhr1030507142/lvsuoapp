<template>
	<view class="">
		<view class="content">
			<view class="header">
				<input type="text" class="search">
				<view class="icon" @tap="search()">
					<image src="../../static/img/search.png" mode="" class="img"></image>
				</view>
			</view>
		 </view>
		 <view class="middle">
			 <view class="head">
				 <ul class="th">
				 	<li>文档名称</li>
				 	<li>类型</li>
				 	<li>更新日期</li>
				 	<li>操作</li>	 	
				 </ul>
			 </view>
		 	
		 	<ul class="tr">
		 		<li>起诉xxxx</li>
				<li>起诉xxxx</li>
				<li>起诉xxxx</li>
				<li>起诉xxxx</li>
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
		onLoad() {
			
			 
		},
		onShow(){
		
		},
		methods: {
			change(e){
				console.log(e)
			},
			search(){
				
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
		width: 90%;
		border-radius: 5px;
		border: 1upx solid #dddddd;
		height: 70upx;
		padding-left: 10%;
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
	margin-top: 100upx;
	.head{
		width: 100%;
		background: #DDDDDD;
		.th{
			width: 90%;
			margin: 0 auto;
			background: #DDDDDD;
			height: 100upx;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			li{
				width: 25%;
				height: 100upx;
				color: #7E2C2E;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: center;
			}
		}
	}
.tr{
	width: 90%;
	margin: 0 auto;
	border-bottom:1upx solid #DDDDDD;
	height: 100upx;
	display: flex;
	flex-direction: row;
	align-items: center;
	li{
		width: 25%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
	}
}
	
}
</style>
