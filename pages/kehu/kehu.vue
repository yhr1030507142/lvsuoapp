<template>
	<view class="content">
		<view class="header">
			<input type="text" class="search" v-model="searchInput">
			<view class="icon" @tap="search()">
				<image src="../../static/img/search.png" mode="" class="img" ></image>
			</view>
		</view>
		<view class="middle">
			 <ul>	
				<li v-for="(v,i) in arr" :key="i" @tap='lookDetails(v.Id)'>
					<image src="../../static/img/123.png" mode="" class="pic_img"></image>
					<view>{{v.Customer_Name_Zh}}</view>
				</li>
				<uni-load-more  :loadingType="loadingType" :contentText="contentText" ></uni-load-more>
			</ul>
   
</uni-list>
	</view>

	 </view>
	  
</template> 

<script>
import uniLoadMore from "../../components/uni-load-more/uni-load-more.vue";
				var _self,
				page = 1,
				timer = null;
		// 定义全局参数,控制数据加载
	export default {
		  components: {//2注册组件
				uniLoadMore
			},
		data() {
			return {
			arr:[],
			searchInput:'',
			 loadingText: '加载中...',
			 loadingType: 0,//定义加载方式 0---contentdown  1---contentrefresh 2---contentnomore
			contentText: {
            contentdown:'上拉显示更多',
            contentrefresh: '正在加载...',
            contentnomore: '没有更多数据了'
				},
				pageNum:8,
				page:1,
				total:0,
			}  
		},
		onLoad:function() {
		 
		},
		 onPullDownRefresh: function() {
			 var _self = this
				//下拉刷新的时候请求一次数据
			 _self.getmorenews() 
		},
		 onReachBottom: function() {
			//触底的时候请求数据，即为上拉加载更多
			//为了更加清楚的看到效果，添加了定时器
			console.log('5555555555')
			var _self =this
			_self.page++
			if (timer != null) {
					clearTimeout(timer);
				}
			timer = setTimeout(function() {
			console.log(_self.loadingType)
			_self.loadingType = 1;
			uni.showNavigationBarLoading();//显示加载动画
			uni.request({
					url:_self.$api+'Customer/Show_My_Customers',
					method:"GET",
					data:{
					User_Id:uni.getStorageSync("userId"),
					Customer_Name:_self.searchInput,
					Display_Page_Number:_self.pageNum,
					PageNumber:_self.page
					},
				success: function(res) {
					
					console.log(res.data)
					if (_self.arr.length==res.data.PageCount) {//没有数据
						_self.loadingType = 2;
						uni.hideNavigationBarLoading();//关闭加载动画
						return false;
					}
					var newList = []
					for(var i =0 ;i<res.data.Customers.length;i++){
						_self.arr.push(res.data.Customers[i])
					}
					console.log(_self.arr)
					_self.loadingType = 0;//将loadingType归0重置
					uni.hideNavigationBarLoading();//关闭加载动画	
				}
			});
			}, 1000);		
				// 正常应为:		
    },

		onShow(){
		var _self = this
		uni.request({
		url:_self.$api+"Login/Sel_Login_Status",
		data:{sessionId:uni.getStorageSync('sessionId'),User_Id:uni.getStorageSync('userId')},
		success:function(res){
			console.log(res)
			 if(res.data == 1){
					uni.showToast({
					    title:'账号异地登陆 强制退出',
					     duration:2000,
						 success:function(){
							  uni.removeStorageSync('userId')
							 uni.removeStorageSync('sessionId')
							 uni.removeStorageSync('Rule_Id')
							 uni.removeStorageSync('Expiration_Date') 
							 uni.removeStorageSync('Username')
							 uni.navigateTo({
							 	url: '../login/login',
							 });
							       return false
						 }
					});
			  }
			   if(res.data == 3){
				   	uni.showToast({
				       title:'登录已过期',
				        duration:2000,
						success:function(){
							uni.removeStorageSync('userId')
							uni.removeStorageSync('sessionId')
							uni.removeStorageSync('Rule_Id')
							uni.removeStorageSync('Expiration_Date') 
							uni.removeStorageSync('Username')
							uni.navigateTo({
								url: '../login/login',
							});
							      return false
						}
				   });
				}
				else{
					_self.page = 1
					_self.arr = []
					_self.getmorenews()
				}
			}
		})    
		},
		methods: {
			change(e){
				console.log(e)
			},
			search(){
				var _self = this
				_self.page = 1
				this.getmorenews()
			},
			getmorenews:function(){
				console.log('sjow')
				console.log(uni.getStorage("userId"))
				var _self =this
				_self.loadingType = 1;
				uni.showNavigationBarLoading();//显示加载动画
				uni.request({
				url:_self.$api+'Customer/Show_My_Customers',
				data:{
					User_Id:uni.getStorageSync("userId"),
					Customer_Name:_self.searchInput,
					Display_Page_Number:_self.pageNum,
					PageNumber:_self.page,
				},
				success: function(res) {
					uni.stopPullDownRefresh();//得到数据后停止下拉刷新
					console.log(res)
					console.log(res.data.PageCount)
						if(res.data.Customers == undefined || res.data.PageCount == 0){
							_self.arr = []
							uni.hideNavigationBarLoading();
							uni.stopPullDownRefresh();//得到数据后停止下拉刷新
						}else{
							if(res.data.PageCount >= _self.pageNum){
								 let newsList =[];
								for(var i=0;i<_self.pageNum;i++){
									newsList.push(res.data.Customers[i]);
								}
								console.log(newsList)
								_self.arr =  newsList;
								if(res.data.PageCount==res.data.Customers.length){
									uni.showToast({
										title: '已是最新',
										duration: 2000
									});
								}
							}
							
						}
					   
					uni.hideNavigationBarLoading();
                    uni.stopPullDownRefresh();//得到数据后停止下拉刷新
					// if (_self.arr.length==res.data.PageCount) {//没有数据
					// 	_self.loadingType = 2;
					// 	uni.hideNavigationBarLoading();//关闭加载动画
					// 	return false;
					// }
					// _self.page++;//每触底一次 page +1
					// // console.log(page);
					// for(var i=_self.arr.length;i<res.data.PageCount;i++){
					// 	_self.arr = _self.arr.concat(res.data.Customers);//将数据拼接在一起
					// }
					// _self.loadingType = 0;//将loadingType归0重置
					// uni.hideNavigationBarLoading();//关闭加载动画
					
				}
			});
			},
			lookDetails:function(id){
				uni.navigateTo({
					url:'../kehuDetails/kehuDetails?id='+id
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
		z-index: 999;
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
	ul{
		list-style: none;
		li{
			width: 100%;
			height: 100upx;
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			padding-left: 20upx;
			margin-top: 20upx;
			border-bottom:1upx solid #dddddd;
			font-size: 36upx;
			.pic_img{
				width: 80upx;
				height: 80upx;
				border-radius: 50%;
				margin-right:30upx;
			}
		}
	}
}
</style>
