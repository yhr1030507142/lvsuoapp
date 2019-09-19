<template>
	<view class="add">
	<view class="content">
		
	<view class="content_middle flex col m-100">
	<view class="content_middle_view">
	<view class="content_middle_view_child flex col">
		<view class="content_middle_view_child_header flex row">
		<text class="state">客户基本信息</text>
		</view>
	
						<view class="content_middle_view_child_bottom_info flex col">
								<view class="info flex row">
										<view class="info_p">客户名称</view>
										 <view class="name">{{list.Customer_Name_Zh}}</view>
								</view>
								<view class="info flex row">
										<view class="info_p">客户证件/纳税人编号</view>
										 <view class="name">{{list.Customer_Number}}</view>
								</view>
								
								<view class="info flex row">
										<view class="info_p">省市区</view>
										 <view class="name">{{list.City}}</view>
								</view>
								<view class="info flex row">
										<view class="info_p">地址详情</view>
										 <view class="name">{{list.Detailed_Address}}</view>
								</view>
								
								<view class="info flex row">
										<view class="info_p">联系电话</view>
										<view class="name">{{list.Contact_Party}}</view>
								</view>
								<view class="info flex row">
										<view class="info_p">客户类型</view>
										<view class="name">{{list.Value}}</view>
								</view>
								<view class="info flex row">
										<view class="info_p">职业</view>
										<view class="name">{{list.Position}}</view>
								</view>
								
						</view>	
							
				</view>
			</view>
	  </view>
	  
		</view>
		</view>
</template>

<script>
	export default {
		data() {
			return {
				id:0,
				list:[],
			}
		},
		onLoad:function(option) {
			var _self = this
			 console.log(option)
			 _self.id = option.id
			 _self.getInfo()
		},
		onShow(){
			
		},
		methods: {
			
		getInfo:function(){
			var _self =  this
			uni.request({
				url:_self.$api+'Customer/Get_Customer_Details',
				data:{Id:_self.id},
				methods:'GET',
				success:function(res){
					console.log(res)
					_self.list = res.data
				}
			})
		}
		},
		watch:{
			 
		},
	}
</script>

<style lang="scss">
	$width:27%;
	select{
		background: #ffffff;
	}
.img{
	width: 44upx;
	height: 44upx;
	margin-left: 10upx;
}
.img_100{
	width: 100%;
	height: 100%;
}
.select1{
	min-width: 45%;
	height: 70upx;
	// border: 1px solid #DDDDDD;
	display: flex;
	flex-wrap: nowrap;
	line-height: 70upx;
	text-align: center;
}
.select{
	// width: 200upx; 
	height: 70upx;
	// border: 1px solid #DDDDDD;
	display: flex;
	flex: 1;
	flex-wrap: nowrap;
	line-height: 70upx;
	text-align: center;
//	-webkit-appearance: none;/*兼容苹果手机*/
}
.select_lawyer{
	// border: 1px solid #DDDDDD;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	height: 70upx;
	width: 40%;
}
.addLayer{
	font-size: 24upx;
	color: #7E2C2E;
}
.content_middle_view{
	margin-bottom: 100upx;
	width: 100%;
	//min-height: 300upx;
	box-shadow:0 3px 15px 0 rgba(0,0,0,.3);
	display: flex;
	padding-bottom: 50upx;
	.content_middle_view_child{
		width: 90%;
		height: 100%;
		margin: 0 auto;
			.content_middle_view_child_header{
				font-weight: 600;
				font-size: 36upx;
				height: 100upx;
				display: flex;
				align-items: center;
				.shoufeifangshi{
					width: 100%;
					height: 100%;
					display: flex;
					flex-direction: row;
					align-items: center;
					.shoufeifangshi_p{
						color: #7E2C2E;
					}
					.shoufeifangshi_select{
						width: 250upx;
						height: 80upx;
						// border: 1upx solid #dddddd;
						font-size: 24upx;
						font-weight: 500;
						margin-left: 50upx;
						display: flex;
						flex-direction: row;
						justify-content: flex-start;
						align-items: center;
					}
				}
				.title{
				
				}
				.state{
					color:#7E2C2E;		
				}
			}
			.content_middle_view_child_bottom{
					font-size: 28upx;
					margin-top: 40upx;	
			}
			.content_middle_view_child_bottom_info{
				.pay_title{
					width: $width;
					height: 80upx;
					display: flex;
					flex-direction: row;
					align-items: center;
					// justify-content: center;
				}
				.pay{
					height: 80upx;
					margin-top: 20upx;
					align-items: center;
					select{
						width: $width;
						margin-left: 10upx;
						border: 1upx solid #dddddd;
						height: 80upx;
					}
					text{
						font-size: 24upx;
					}
					input{
						// width: 140upx;
					}
					.pay_date1{
						width: $width;
						height: 80upx;
						// border: 1upx solid #dddddd;
						display: flex;
						flex-direction: row;
						align-items: center;
						// justify-content: center;
						}
					.pay_date{
						width: $width;
						height: 80upx;
						// border: 1upx solid #dddddd;
						display: flex;
						flex-direction: row;
						align-items: center;
						// justify-content: center;
						}
						
					}
				.risk{
					height: 80upx;
					display: flex;
					flex-direction: row;
					align-items: center;
					margin-top: 20upx;
					.input{
						width: 80%;
						height: 80upx;
						display: flex;
						align-items: center;
					}
				}
				.lawyer{
					height: 80upx;
					align-items: center;
				}
				.textare{
					height: 200upx;
					width: 100%;
				}
				textarea{
					border: 1px solid #DDDDDD;
					height: 200upx;
				}
				.info{
					margin-top: 25upx;
					height: 80upx;
					.info_p{
						width: 360upx;
						font-size:32upx;
						color: #333333;
						height: 100%;
						display: flex;
						align-items: center;
					}
					.name{
						height: 80upx;
						// border:2upx solid #DDDDDD;
						flex: 1;
						align-items: center;
						display: flex;
						// box-shadow:0 3px 15px 0 rgba(0,0,0,0);
					}
				}
				
				
			}
			
	}
}

.btn_box{			
		width:100%;
		height: 100upx;
		margin: 0;
		padding: 0;
		
		// border: 1px solid #7E2C2E;
		.btn{
			align-items: center;
			display: flex;
			flex-direction: row;
			justify-content: center;
			width: 50%;
			height: 100%;
			border-radius: 0upx;
			border: none;
			// border: 1px solid #7E2C2E;
			font-size: 36upx;
			font-weight: 600;
			color: #ffffff;
            cursor: pointer;
		}
		.btn1{
			background: #A92A2E;
		}
		.btn2{
			background: #7E2C2E;
		}
	}

</style>
