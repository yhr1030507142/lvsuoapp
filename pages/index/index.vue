<template>
	<view class="content">
      <view class="content_header flex row row_between m-50">
		 
	

		
		 <select class="select" @change="changeOneMenu(value)" v-model="value" >
			<option value="" disabled selected hidden>选择一级类型</option>
			<option :value="0">全部</option>
            <option :value="v.Id" v-for="(v,i) in arr" :key="i">{{v.Category_Name}}</option>
		</select>
		
		 <select class="select" @change="changeTwoMenu(value1)" v-model="value1">
			<option value="" disabled selected hidden>选择二级类型</option>
			<option :value="0">全部</option>
		    <option :value="v.Id" v-for="(v,i) in arr1" :key="i">{{v.Value}}</option>
		</select>
		
		<select class="select" @change="changeStatus(value2)" v-model="value2">
			<option value="" disabled selected hidden>选择案件状态</option>
		    <option :value="v.value" v-for="(v,i) in options" :key="i">{{v.label}}</option>
		</select>
		
		 <select class="select" @change="changeSort(Sort)" v-model="Sort">
		    <option :value="v.value" v-for="(v,i) in SortArr" :key="i">{{v.label}}</option>
		</select>
	  </view>
	   
	  <view class="content_middle flex col m-50" v-for="(v,i) in caseList" :key="i" @tap="gotoEdit(v.Id,v.Charging_Method)">
			<view class="content_middle_view">
				<view class="content_middle_view_child flex col">
						<view class="content_middle_view_child_header flex row row_between">
								<text class="title">【{{v.Category_Name}}】</text>
								<text class="state" v-if="v.type == -2"  @click.stop="updateData(v.Id,v.Charging_Method)">{{v.Status}}</text>
								<text class="state" v-else>{{v.Status}}</text>
						</view>
						<view class="content_middle_view_child_bottom flex col">
								<text>{{v.Customer_Name_Zh}}</text>
								<text>{{v.Case_Name}}</text>
								<text>{{v.Creattime}}</text>
						</view>
				</view>
			</view>
	  </view>

	   
	 
	  
	  <view class="add_btn" @tap="toAdd()">
			<image src="../../static/img/add.png" mode="" class="img"></image>
	  </view>
	</view>
</template>

<script>
	import uniLoadMore from "../../components/uni-load-more/uni-load-more.vue";
	export default {
		data() {
			return {
				arr:[],
				arr1:[],
				arr2:[],
				value:"",
				value1:"",
				value2:"",
				caseList:[],
				onMenuId:'',	
				options:[
				{value:0,label:'审核中'},{value:1,label:'已审核'},{value:2,label:'已签合同'},{value:3,label:'已结案'},{value:-2,label:'返回修改'},{value:4,label:'待结案'}
					],
				Sort:1,
				SortArr:[{value:1,label:'降序'},{value:2,label:'升序'}],
				 Category_Id:0, 
			}
		},
			 onPullDownRefresh: function() {
			 var _self = this
				//下拉刷新的时候请求一次数据
			 _self.getMineList() 
		},
		onLoad:function(){
			   
				// uni.request({
				// url:_self.$api+"Login/Sel_Login_Status",
				// data:{sessionId:uni.getStorageSync('sessionId'),User_Id:uni.getStorageSync('userId')},
				// success:function(res){
				// 	console.log(res)
				// 	 if(res.data == 1){ 
				// 			uni.showToast({
				// 			    title:'账号异地登陆 强制退出',
				// 			     duration:2000,
				// 				 success:function(){
				// 					 uni.removeStorageSync('userId')
				// 					 uni.removeStorageSync('sessionId')
				// 					 uni.removeStorageSync('Rule_Id')
				// 					 uni.removeStorageSync('Expiration_Date') 
				// 					 uni.removeStorageSync('Username')
				// 					 uni.navigateTo({
				// 					 	url: '../login/login',
				// 					 });
				// 					       return false
				// 				 }
				// 			});			
				// 	  }
				// 	   if(res.data == 3){
				// 		   	uni.showToast({
				// 		       title:'登录已过期',
				// 		        duration:2000,
				// 				success:function(){
				// 					uni.removeStorageSync('userId')
				// 					uni.removeStorageSync('sessionId')
				// 					uni.removeStorageSync('Rule_Id')
				// 					uni.removeStorageSync('Expiration_Date') 
				// 					uni.removeStorageSync('Username')
				// 					uni.navigateTo({
				// 						url: '../login/login',
				// 					});
				// 					      return false
				// 				}
				// 		   });
				// 		}else{
				// 			
				// 			uni.getSystemInfo({
				// 			        success: (res)=> {
				// 			            this.windowHeight = res.windowHeight;
				// 			        }
				// 			    });    
				// 			    uni.onWindowResize((res) => {
				// 			        if(res.size.windowHeight < this.windowHeight){
				// 			            this.tabbar = false
				// 			        }else{
				// 			            this.tabbar = true
				// 			        }
				// 			    })
				// 		}
				// 	}
				// })       
		},
		onShow(){
			var _self = this
			_self.getOneMenu()
			_self.getMineList()
		
			
		},
		 components: {//2注册组件
						uniLoadMore
					},
		methods: {
			getMineList:function(){
				var _self =this
				var state,state1
				console.log(_self.value2)
				if(_self.value2 === ""){
						state = -3
				}else{
					state = _self.value2
				}
				if(_self.value1 == ""){
					state1 = 0
				}else{
					state1 = _self.value1
				}
				console.log(state)
				console.log(state1)
				console.log(_self.Sort)
				uni.request({
					url:_self.$api+'Index/Show_All_Case',
					data:{
						UserId:uni.getStorageSync("userId"),
						Category_Id:_self.Category_Id,
						Dic_Id:state1,
						Status:state,
						Sort:_self.Sort,	
					},
					success:function(res){
						console.log(res)
						_self.caseList = res.data.All_Case
						 uni.stopPullDownRefresh();
					}
				})
				
			},
			getOneMenu:function(){
				var _self= this
				uni.request({
					url:_self.$api+'Index/GetBoxOne',
					data:{},
					success:function(res){
						console.log(res)
						_self.arr = res.data
					}
				})
			},
			getTwoMenu:function(id){
				var _self= this
				uni.request({
				url:_self.$api+'Index/GetBoxTwo',
				data:{Id:id},
				success:function(res){
					_self.arr1 = res.data
					// _self.value1 = res.data[0].Id
				},
				}) 
				
			},
			changeOneMenu(e){
				var _self =this
				console.log(e)
				this.Category_Id = e
				if(e===0){
					_self.value2 = ""
					_self.value1 = ""
					_self.value=""
					_self.arr1 = []
				}else{
					_self.value = e
					_self.getTwoMenu(e)
				}
				_self.getMineList()
			},
			changeTwoMenu(e){
				this.value1 = e
				this.getMineList()
			},
			changeStatus(e){
				console.log(e)
				this.value2 = e
				this.getMineList()
			},
			changeSort(e){
				this.getMineList()
			},
			toAdd(){
				uni.navigateTo({
					url:'../../pages/caseAdd/caseAdd',
				})
			},
			gotoEdit(id,type){
					uni.navigateTo({
						url:'../../pages/caseEdit/caseEdit?Id='+id+'&Charging_Method='+type
					})
			},
			updateData(id,type){
				uni.navigateTo({
					url:'../../pages/caseUpdate/caseUpdate?Id='+id+'&Charging_Method='+type
				})
			}
		},
		watch:{
			value1:function(newData,old){
				this.getMineList()
			},
		}
	}
</script>

<style lang="scss">
.add_btn{
	position: fixed;
	bottom: 125upx;
	right: 40upx;
	width: 140upx;
	height: 140upx;
	background: #7E2C2E;
	border-radius:50%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	.img{
		width: 50%;
		height: 50%
		// border-radius:50%; 
	}
}
.select{
	// width: 200upx; 
	height: 70upx;
	border: 1px solid #ccc;
	width: 23%;
//	-webkit-appearance: none;/*兼容苹果手机*/
}
.content_middle{
	margin-bottom: 50upx;
	z-index: 999;
}
.content_middle_view{
	// margin-bottom: 100upx;
	border-radius: 10upx;
	width: 100%;
	height: 350upx;
	box-shadow:0 3px 15px 0 rgba(0,0,0,.3);
	display: flex;
	.content_middle_view_child{
		width: 90%;
		height: 100%;
		margin: 0 auto;
			.content_middle_view_child_header{
				font-weight: 600;
					font-size: 36upx;
				border-bottom: 1px solid #DDDDDD;
				margin-top: 10upx;
				.title{
				
				}
				.state{
					color:#7E2C2E;		
				}
			}
			.content_middle_view_child_bottom{
				
				text{
					font-size: 32upx;
					margin-top: 20upx;
					
				}
					
					
			}
	}

}


</style>
