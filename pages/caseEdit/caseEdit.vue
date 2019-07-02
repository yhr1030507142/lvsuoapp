<template>
	<view class="add">
		

	<view class="content">
      

	 <view class="content_middle flex col m-100">
			<view class="content_middle_view">
				<view class="content_middle_view_child flex col">
					
						<view class="content_middle_view_child_header flex row">
								<text class="state">客户基本信息</text>
						</view>
						<view class="content_middle_view_child_bottom flex row row_between">
							<view class="select1">
									{{case_type}}
							</view> 
							<view class="select">
									{{Customer_Type}}
							</view>
							<view class="select">
								{{industry}}
							</view>
							
							
							
							
						</view>
						
						<view class="content_middle_view_child_bottom_info flex col">
							<div class="info flex row">
									<p class="info_p">客户名称</p>
									 <view class="name">{{Customer_Name_Zh}}</view>
							</div>
								<div class="info flex row">
										<p class="info_p">证件</p>
										 <view class="name">{{Customer_Number}}</view>
								</div>
								
								<div class="info flex row">
										<p class="info_p">地址</p>
										 <view class="name">{{City}}{{Detailed_Address}}</view>
								</div>
								
								<div class="info flex row">
										<p class="info_p">电话</p>
										<view class="name">{{Contact_Party}}</view>
								</div>
						</view>	
							
				</view>
			</view>
	  </view>
	  
	   
	 	<view class="content_middle_view">
	 				<view class="content_middle_view_child flex col">
	 					
	 						<view class="content_middle_view_child_header flex row">
	 								<text class="state">案件基本信息</text>
	 						</view>
	 						<view class="content_middle_view_child_bottom flex row row_between">
	 							 	<view class="select">
	 							 	{{case_type}}
	 							 </view>	
	 						</view>
	 						
	 						<view class="content_middle_view_child_bottom_info flex col">
	 								<div class="info flex row">
	 										<p class="info_p">案件名称</p>
	 										<view class="name">{{Case_Name}}	
												</view>
	 								</div>
	 								
	 								<div class="info flex row">
	 										<p class="info_p">标的额</p>
	 										<view class="name">				
												{{Target}}
											</view>
	 								</div>
	 								
	 								<div class="info flex row">
	 										<p class="info_p">受理机关</p>
	 										<view class="name">
												{{Receiving_Organ}}
											
											</view>
	 								</div>
									
									<div class="info flex row">
											<p class="info_p">对方当事人</p>
											<view class="name">
												{{Party_Name}}
											</view>
									</div>
											<div class="info flex row">
											<p class="info_p">案由</p>
											<view class="name">
												{{Cause_Action}}
											</view>
									</div>
									
									<div class="info flex row">
											<p class="info_p">案件详情</p>
											<view class="name">
												{{Case_Introduction}}
											</view>
									</div>
	 						</view>	
	 							
	 				</view>
	 			</view>
				
				<!--  -->
					 	<view class="content_middle_view">
							<view class="content_middle_view_child flex col">
								
									<view class="content_middle_view_child_header flex row">
											<text class="state">服务内容</text>
									</view>
									
									
									<view class="content_middle_view_child_bottom_info flex col">
											<view class="textare">
												<rich-text :nodes="Service_Content"></rich-text>  
												
											</view>
									</view>	
										
							</view>
						</view>
				<!--  -->
					<view class="content_middle_view">
					<view class="content_middle_view_child flex col">
						
							<view class="content_middle_view_child_header flex row row_between">
									<text class="state">律师信息</text>
							</view>
							
							
							<view class="content_middle_view_child_bottom_info flex col">
									<view class="lawyer flex row" v-for="(v,i) in Get_Lawyer_Information" :key="i">
										<view class="select_lawyer">
											{{v.Staff_Name}}
										</view>
										<view class="select_lawyer">
											{{v.Rule_Name}}
										</view>
									</view>
									
									
								
									
							</view>	 	 
					</view>
				</view>
				
				<!--  -->
<!-- 					<view class="content_middle_view">
					<view class="content_middle_view_child flex col">
						
							<view class="content_middle_view_child_header flex row row_between">
									<text class="state">案件联系人信息</text>
							</view>
							
							
							<view class="content_middle_view_child_bottom_info flex col">
									<view class="lawyer flex row">
											<view class="select_lawyer">
												张小三
											</view>
											<view class="select_lawyer">
												联系人
											</view>
									</view>
									
									
									
							</view>	 	 
					</view>
				</view> -->
				<!--  -->
			
				<view class="content_middle_view">
					<view class="content_middle_view_child flex col" style="padding-bottom: 0;">
						
							<view class="content_middle_view_child_header flex row">
								<view class="shoufeifangshi">
										<p class="shoufeifangshi_p">收费方式</p>
									<view class="shoufeifangshi_select">{{Value}}</view>
								</view>
							</view>
							
					</view>
				</view>
				<!--  -->
						<view class="content_middle_view" v-show="Id == 10">
					<view class="content_middle_view_child flex col">
						
							<view class="content_middle_view_child_header flex row row_between">
									<text class="state">风险达成条件</text>
							</view>
							
							
							<view class="content_middle_view_child_bottom_info flex col">
									<view class="risk flex row" v-for="(value,index) in  Charge" :key="index">
										<view class="input">{{value.Risk_Achievement}}</view>
									</view>	
							</view>	 	 
					</view>
				</view>
				<!--  -->
					<view class="content_middle_view" v-show="Id == 9">
					<view class="content_middle_view_child flex col">
						
							<view class="content_middle_view_child_header flex row row_between">
									<text class="state">定额收费</text>
							</view>

							<view class="content_middle_view_child_bottom_info flex col">
									<view class="pay flex row">
										<view class="pay_title">
											付款日期
										</view>
										<view class="pay_title">
											收费方式
										</view>
										<view class="pay_title">
											描述
										</view>
									</view>
									
									<view class="pay flex row" v-for="(v1,i1) in Charge" :key="i1">
									<view class="pay_date">
										{{v1.Payment_Time}}
									</view>
										<view class="pay_date">
											{{v1.Charge_Amount}}
										</view>
										<view class="pay_date">
											{{v1.Describe}}
										</view>
									</view>
									
									
									
							</view>	 	 
					</view>
				</view>
			<!--  -->
				<view class="content_middle_view" v-show="Id == 8">
				<view class="content_middle_view_child flex col">
					
						<view class="content_middle_view_child_header flex row row_between">
								<text class="state">费率收费</text>
						</view>
			
						<view class="content_middle_view_child_bottom_info flex col">
								<view class="pay flex row">
									<view class="pay_title">
										姓名
									</view>
									<view class="pay_title">
										职务
									</view>
									<view class="pay_title">
										费率
									</view>
								</view>
								<view class="pay flex row" v-for="(v2,i2) in Charge" :key="i2">
										<view class="pay_date1">
										{{v2.Staff_Name}}
										</view>
										<view class="pay_date1">
										{{v2.Value}}
									</view>
									<view class="pay_date1">
										{{v2.Rate}}
									</view>
									<text style="color:#999">RMB/小时</text>
								</view>
								
							
								
						</view>	 	 
				</view>
			</view>
			<!--  -->
			<view class="content_middle_view">
				<view class="content_middle_view_child flex col" style="padding-bottom: 0;">
					
						<view class="content_middle_view_child_header flex row">
							<view class="shoufeifangshi">
									<p class="shoufeifangshi_p">合同类型</p>
								<view class="shoufeifangshi_select">{{Source_Contract}}</view>
							</view>
						</view>
						
				</view>
			</view>
	<!--  -->

		
	</view>
	<view class="btn_box flex row row_center">
	<view class="btn btn1" @tap="look()">预览合同</view>
	<!-- <view class="btn btn2">提交审核</view> -->
	</view>
		</view>
</template>

<script>
	
	export default {
		data() {
			return {

				case_type:'',
				Customer_Type:'',
				Customer_Name_Zh:'',
				Customer_Number:'',
				City:'',
				Detailed_Address:'',
				Contact_Party:'',
				industry:'',
				
				// 案件
				
				 "Cause_Action": "",
				"Receiving_Organ": "",
				"Case_Name": "",
				"Case_Introduction": "",
				"Party_Name": "",
				"Target": "",
				 "Service_Content": "",
				//律师
				Get_Lawyer_Information:"",
				//收费方式
				Value:"",
				Id:"",
				//风险
				Charge:[],
				
				//
				"Cause_Id":"",
				"Charging_Method":"",
				Source_Contract:"",
				dataWord:{},
		// "Status": 0,
  //       "Two_Type_Id": 82,
  //       "One_Type_Id": 4,

      
				
			}
		},
		onLoad(option) {
			 console.log(option)
			 this.Cause_Id = option.Id
			 this.Charging_Method = option.Charging_Method
			 this.getInfo()
		},
		onShow(){
			
		},
		methods: {
			
		getInfo(){
			var _self =  this
			uni.request({
				url:_self.$api+'Index/Case_Details',
				data:{Id:_self.Cause_Id,Type_Id:_self.Charging_Method},
				success:function(res){
					console.log(res)
					_self.dataWord= res.data
					var caseArr = res.data.Get_Case_Information
					var customerArr =res.data.Get_Customer_Information
					var lawyerArr = res.data.Get_Lawyer_Information
					_self.Get_Lawyer_Information = lawyerArr
					_self.Value = res.data.Value
					_self.Charge = res.data.Charge
					_self.Id = res.data.Id
					console.log(_self.case_type)
					_self.Customer_Type=customerArr.Customer_Type
					_self.Customer_Name_Zh=customerArr.Customer_Name_Zh
					_self.Customer_Number=customerArr.Customer_Number
					_self.City=customerArr.City
					_self.Detailed_Address=customerArr.Detailed_Address
					_self.Contact_Party=customerArr.Contact_Party
					_self.industry = customerArr.industry
					
					_self.case_type=caseArr.Case_type
					_self.Cause_Action = caseArr.Cause_Action
					_self.Receiving_Organ = caseArr.Receiving_Organ
					_self.Case_Name = caseArr.Case_Name
					
					_self.Case_Introduction = caseArr.Case_Introduction
					_self.Party_Name = caseArr.Party_Name
					_self.Target = caseArr.Target
					_self.Service_Content = caseArr.Service_Content
					 if(caseArr.Source_Contract == 1){
                        _self.Source_Contract ='律所合同'
                }else{
                     _self.Source_Contract ='客户合同'
                }
					// _self.Case_Name = caseArr.Case_Name
					// _self.Case_Name = caseArr.Case_Name
					}
				})
			},
			look(){
				var _self = this
				uni.navigateTo({
					url:"../contract/contract?Id="+_self.Cause_Id+'&Charging_Method='+_self.Charging_Method
				})
			}
		},

		watch:{
			 
		},
		 computed: {
        startDate() {
            return this.getDate('start');
        },
        endDate() {
            return this.getDate('end');
        }
		},
		filters:{
			deletP:function(a){
				return a.replace(/\r\n/g, '<br/>').replace(/\n/g, '<br/>').replace(/\s/g, '&nbsp;');
			}
		}
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
						width: 190upx;
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
