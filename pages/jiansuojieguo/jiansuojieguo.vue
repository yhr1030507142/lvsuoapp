<template>
	<view class="">
		<view class="content">
			<view class="header">
				<input type="text" class="search" v-model="SearchInput">
				<view class="icon" @tap="searchContent()">
					<image src="../../static/img/search.png" mode="" class="img"></image>
				</view>
			</view>
		 </view>
		 <view class="middle">
			 <view class="head">
				 <ul class="th">
				 	<li>案件编号</li>
				 	<li>案件名称</li>
					<li>客户名称</li>
				 	<li>经办律师</li>
				 	<li>对方当事人</li>
				 </ul>
			 </view>
		 	
		 	<ul class="tr" v-for="(v,i) in searchList" :key="i">
		 		<li>{{v.Case_No}}</li>
				<li>{{v.Case_Name}}</li>
				<li>{{v.Customer_Name_Zh}}</li>
				<li>{{v.Staff_Name}}</li>
				<li>{{v.Party_Name}}</li>
		 	</ul> 
		 </view>
		 
		 
	 <!-- <uni-pagination total="20"></uni-pagination> -->
	 <view class="pagination">
		 <uni-pagination 
		    
		     :total="total" 
		     :current="currentPage"
			 @change="changePage">
		 </uni-pagination>
	 </view>

	</view>
	
	  
</template> 

<script>
import uniPagination from '@dcloudio/uni-ui/lib/uni-pagination/uni-pagination.vue'
	export default {
		data() {
			return {
			pageNum:5,
			currentPage:1,
			SearchInput:"",
			total:0,
			searchList:[],
			
			}  
		},
		onLoad(option) {
			var _self =this
			console.log(option.search)
			 _self.SearchInput = option.search
			 _self.searchContent()
		},
		onShow(){
		
		},
		methods: {
			change(e){
				console.log(e)
			},
			searchContent(){
				var _self =this
				 uni.request({
				 	url:_self.$api+"Retrieval/Show_Retrieval",
					method:"GET",
					data:{
						Display_Page_Number:_self.pageNum,
						PageNumber:_self.currentPage,
						parameter:_self.SearchInput
					},
					success:function(res){
						console.log(res)
						_self.searchList = res.data.Retrieval
						_self.total = res.data.PageCount
					}
				 })
			},
			changePage(type){
				//console.log(type.current)
				this.currentPage = type.current
				this.searchContent()
			}
		},
		watch:{
			
		},
		components:{uniPagination}
	}
</script>

<style lang="scss">
.header{
	margin-top:30upx;
	position: relative;
	width: 100%; 
	height: 70upx;
	.search{
		margin-top: 70upx;
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
				width: 20%;
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
	min-height: 100upx;
	display: flex;
	flex-direction: row;
	align-items: center;
	li{
		width: 20%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
	}
}
	
}
.pagination{
	width: 70%;
	margin: 30upx auto;
	display: flex;
	flex-direction: row;
	justify-content: center;
}
</style>
