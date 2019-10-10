<template>
	<view class="add">
		

	<view class="content">
      

	 <view class="content_middle flex col m-100">
			<view class="content_middle_view">
				<view class="content_middle_view_child flex col">
					
						<view class="content_middle_view_child_header flex row">
								<text class="state">客户基本信息</text>
						</view>
						<view class="content_middle_view_child_bottom flex col"> 
							<!-- <view class="select1">
								<p class="info_p">案件类型</p><view class="name1">{{case_type}}</view>
							</view> --> 
							<view class="select">
								<p class="info_p">客户类型</p><view class="name1">{{Customer_Type}}</view>
							</view>
							<view class="select">
								<p class="info_p">行业类型</p><view class="name1">{{industry}}</view> 
							</view>

						</view>
						
						<view class="content_middle_view_child_bottom_info flex col">
							<div class="select flex row">
									<p class="info_p">客户名称</p>
									 <view class="name1">{{Customer_Name_Zh}}</view>
							</div>
								<div class="select flex row">
										<p class="info_p">证件</p>
										 <view class="name1">{{Customer_Number}}</view>
								</div>
								
								<div class="select flex row">
										<p class="info_p">地址</p>
										 <view class="name1">{{City}}{{Detailed_Address}}</view>
								</div>
								
								<div class="select flex row">
										<p class="info_p">电话</p>
										<view class="name1">{{Contact_Party}}</view>
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

	 						
	 						<view class="content_middle_view_child_bottom_info flex col">
								<view class="info flex row">
																	<p class="info_p">案件类型</p>
																	<view class="name">{{case_type}}</view>
								</view>	
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
	<!--  -->
	<view class="content_middle_view">
			<view class="content_middle_view_child flex col" style="padding-bottom: 0;">
				
					<view class="content_middle_view_child_header flex row">
						<view class="shoufeifangshi">
								<p class="shoufeifangshi_p">上传图片或视频</p>
						<!-- 	<select name="" id="" class="shoufeifangshi_select" v-model="fileType">
								<option :value="v.Id" v-for="(v,i) in fileTypeArr" :key="i">{{v.value}}</option>
							</select> -->
							
						</view>
						 
						
					</view>
					 <view class="flex row">
						 <view class="shangchuan_btn"  @click="picUpload()">上传图片</view>
						 <!-- <view class="shangchuan_btn"  @click="audioUpload()" style="margin-left: 20upx;">上传视频</view> -->
						 <view class="shangchuan_btn"  @click="saveUpload()" style="margin-left: 20upx;">保存</view>
					 </view>
					 <view class="">
						 <view v-show="File_Name != ''">{{File_Name}}</view>
					 	<!-- <image   :src="up_image" mode="" style="width: 100%;height:400upx;" v-show="up_image != ''"></image>
					 	<video  :src="up_video" style="width: 100%;height:400upx;" v-show="up_video != ''"></video> -->
					 </view>
					
			</view>
		</view>
	<!--  -->
<!--  -->
	<view class="content_middle_view">
			<view class="content_middle_view_child flex col" style="padding-bottom: 0;">
					<view class="content_middle_view_child_header flex row">
						<view class="shoufeifangshi flex row_between">
								<p class="shoufeifangshi_p">录音(60s语音)</p>
								<!-- <text @tap="addLuyin" class="addLayer">添加录音</text> -->
						</view>
					</view>
					<view v-for="(v,i) in localIdList" :key='i' style="margin-top: 30upx;">
					<view class="flex row" style="flex-wrap: wrap;">
						<view class="shangchuan_btn"  @click="luyin(0)">开始录音</view>
						<view class="shangchuan_btn"  @tap="stopRe(0)" style="margin-left: 20upx;">停止录音</view>
						<view class="shangchuan_btn"  @tap="upVoice(0)" style="margin-left: 20upx;">上传录音</view>
						
					</view>
					<view class="flex row" style="flex-wrap: wrap;margin-top: 20upx;">
						<view class="shangchuan_btn"  @tap="play(0)" style="">播放录音</view>
					<view class="shangchuan_btn"  @tap="stopPlay(0)" style="margin-left: 20upx;">停止播放</view>
					</view>
					<view>录音时间{{v.time}}</view>
					<view>刚录完的语音:{{v.word}}</view> 
					<view class="list flex row_between" style="align-items: center;">
					    <audio ref="player" :src="v.src"  controls></audio>
						<view class="jian img" @tap="deleteLuyin(0)" v-show="i != 0">
							<image src="../../static/img/jian.png" mode="" class="img_100"></image>
						</view>
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
	import wx from 'weixin-js-sdk'
	const _this = wx
	export default {
		data() {
			return {
//录音
				localId: '',
				serverId: '',
				downLoadId: '',
				Soff: true,
				time: 0,
				timer: null,
				word:'无',
				localIdList:[
					{localId: '',
					serverId: '',
					downLoadId: '',
					Soff: true,
					time: 0,
					timer: null,
					word:'无',
					src:'',
					File_Name: "",
					Suffix_Name: "",
					fileName: "",
					size: 68}
				],
				fileName:'',
				size:'',
				File_Name:'',
				Suffix_Name:'',
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
					 up_image:'',
					 up_video:'',
					 picImage:'',
      
				
			}
		},
		onLoad(option) {
			 console.log(option)
			 this.Cause_Id = option.Id
			 this.Charging_Method = option.Charging_Method
			 this.getInfo()
		},
		onShow(){
			var _self = this
			if(uni.getStorageSync('isAndroid')==1){
				_self.configPage()
			}else if(uni.getStorageSync('isAndroid')==2){
				uni.setStorageSync('isAndroid',1)
				location.reload() 
				_self.configPage()
				
			}
			
		},
		methods: {
			//图片上传
			picUpload:function(){
				var _self = this
				uni.chooseImage({
				success: function (chooseImageRes) {
					console.log(chooseImageRes)
					const tempFilePaths = chooseImageRes.tempFilePaths;
					console.log(tempFilePaths)
					uni.uploadFile({
						url: _self.$api+'Base/uploadRawFile', //仅为示例，非真实的接口地址
						filePath: tempFilePaths[0],
						name: 'file',
						formData: { 
							'user': 'test'
						},
						success: function (uploadFileRes) {
							_self.up_image = uploadFileRes.data
							 console.log(JSON.parse(uploadFileRes.data))
							// console.log(uploadFileRes.data); 
							_self.fileName = JSON.parse(uploadFileRes.data).fileName
							_self.size = JSON.parse(uploadFileRes.data).size
							_self.File_Name = JSON.parse(uploadFileRes.data).File_Name
							_self.Suffix_Name = JSON.parse(uploadFileRes.data).Suffix_Name
						}
					})
					}
					}) 
			},
		configPage:function(){
				  var _self = this
				  //alert(location.href)
				  console.log(location.href.split('#')[0])
				   var data = {url:location.href.split('#')[0],AppId:'wxc9722e78824af65f',AppSecret:'2521b18d19e16fc99408992572338251'}
			//var data = {url:location.href.split('#')[0],AppId:'wx4c958b0745e83859',AppSecret:'1ee1c1f93c8d2889403105d88f7f1c90'}
				
				  console.log(data) 
				  uni.request({
				  		url:_self.$api+"Wechar/Sound",
				  		data:data,
				  		success:function(res){
				  		console.log(res)
				  		 _this.config({
				  		  debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
				  		  appId: 'wxc9722e78824af65f', // 必填，公众号的唯一标识
				  		  timestamp:res.data.timestamp, // 必填，生成签名的时间戳
				  		  nonceStr: res.data.nonceStr, // 必填，生成签名的随机串
				  		  signature:res.data.signature, // 必填，签名
				  		  jsApiList: ['startRecord','stopRecord', 'playVoice', 'pauseVoice','translateVoice', 'stopVoice', 'uploadVoice', 'downloadVoice'] ,// 必填，需要使用的JS接口列表
				  		  // 接口 开始录音接口 停止录音接口 播放语音接口 暂停播放接口 停止播放接口 上传语音接口 下载语音接口 识别音频并返回识别结果接口
				  		}) 
				  		// config信息验证后才执行 
						_this.ready(() => { 
				  		// 	wx.checkJsApi({
				  		//     jsApiList: ['startRecord','stopRecord', 'playVoice', 'pauseVoice','translateVoice', 'stopVoice', 'uploadVoice', 'downloadVoice', 'downloadVoice'] ,// 必填，需要使用的JS接口列表
				  		//     success: function(res) {
				  		// 
				  		//     }
				  		// });
				  		})
				  		// 微信sdk错误返回问题
				  		_this.error((res) => {
				  		 //alert('出错了：' + res.errMsg)// 这个地方的好处就是wx.config配置错误，会弹出窗口哪里错误，然后根据微信文档查询即可。
				  		// window.location.href = location.href.split('#')[0]
				  		})
				  		}
				  	})
		},
		/**
		 * 添加录音
		 */
		addLuyin:function(){
			var _self = this
			_self.localIdList.push({
				localId: '',
				serverId: '',
				downLoadId: '',
				Soff: true,
				time: 0,
				timer: null,
				word:'无',
				src:'',
			})
		},
		/**
		 * @param {Object} i
		 * 删除录音
		 */
		deleteLuyin:function(i){
			var _self = this
			_self.localIdList.splice(i,1)
		},
		/**
		 * 开始录音
		 */
		luyin:function(i){
			// alert('123456')
			let that = this
			that.localIdList[i].time = 0
			_this.startRecord({
			  success: function () {
				  uni.showToast({
				  	title:'成功调起录音',
					icon:'success'
				  })
			    that.localIdList[i].timer = setInterval(() => {
			      that.localIdList[i].time++ 
			    }, 1000)
			    that.vicoeEnd(i)
			  },
			  cancel: function () {
			    alert('用户拒绝授权录音')
			  }
			})
		},
		/**
		 * 结束录音
		 */
		// 停止录音
		stopRe:function(i) {
		  let that = this
		  // clearInterval(that.timer)
		  _this.stopRecord({
		    success: function (res) {
		      // alert('暂停成功')
			  uni.showToast({
			  	title:'录音停止成功',
			  	icon:'success'
			  })
		      console.log(res)
		      clearInterval(that.localIdList[i].timer)
		      that.localIdList[i].localId = res.localId
		     // that.upVoice()
		    },
		    fail: function (error) {
		      alert('录音停止异常')
		      console.log(error)
		    }
		  })
		},
		// 60秒监听
		vicoeEnd:function(i) {
		  let that = this
		  _this.onVoiceRecordEnd({
		    // 录音时间超过一分钟没有停止的时候会执行 complete 回调
		    complete: function (res) {

			  uni.showToast({
			  	title:'60秒停止录音',
			  	icon:'success'
			  })
		      that.localIdList[i].localId = res.localId
		      clearInterval(that.localIdList[i].timer)
		      that.upVoice(i)
		    }
		  })
		},
		// // 播放
		play:function (i) {
		  let that = this
		  console.log(that.localIdList[i].localId)
		  _this.playVoice({
		    localId: that.localIdList[i].localId // 需要播放的音频的本地ID，由stopRecord接口获得
		  })
		},
		// 停止
		stopPlay:function (i) {
		  let that = this
		  _this.stopVoice({
		    localId: that.localIdList[i].localId // 需要停止的音频的本地ID，由stopRecord接口获得
		  })
		},
		// 上传语音
		upVoice:function(i) {
		  let that = this
		  _this.uploadVoice({
		    localId: that.localIdList[i].localId, // 需要上传的音频的本地ID，由stopRecord接口获得
		    isShowProgressTips: 1, // 默认为1，显示进度提示
		    success: function (res) {
		      var apiUrl = window.location.href
		      that.localIdList[i].serverId = res.serverId // 返回音频的服务器端ID
						uni.request({
								url: that.$api+'Base/GetInputStream',
							    method: 'get',
								headers: {'Content-Type': 'application/json'},
								data: {
									mediaId: res.serverId,
									AppId:'wxc9722e78824af65f', 
									AppSecret:'2521b18d19e16fc99408992572338251'
							}
						}).then((data) => {
				  console.log(data)
		          console.log(that.$api+'LSMSFolde'+data[1].data.fileName)
		          that.localIdList[0].src = that.$api+'LSMSFolde'+data[1].data.fileName
				  that.localIdList[0].File_Name = data[1].data.File_Name
				  that.localIdList[0].Suffix_Name = data[1].data.Suffix_Name
				  that.localIdList[0].fileName = data[1].data.fileName
				  that.localIdList[0].size = data[1].data.size
				  that.saveLuyin()
				   alert('上传成功')
		        }).catch((error) => {
		          console.log(error)
		        })
		    }
		  })
		},
		/**
		 * s视频上传
		 */
		audioUpload:function(){
			var _self = this
			uni.chooseVideo({
			    count: 1,
			    sourceType: ['camera', 'album'],
			    success: function (res) {
					const tempFilePaths = res.tempFilePath;
					console.log(tempFilePaths)
					uni.uploadFile({
						url: _self.$api+'Base/uploadRawFile', //仅为示例，非真实的接口地址
						filePath: tempFilePaths[0],
						name: 'file',
						formData: {
							'user': 'test'
						},
						success: function (uploadFileRes) {
							console.log(uploadFileRes)
							console.log(uploadFileRes.data); 
						
						}
					})	
			    }
			 });
		},	
		//保存图片
		saveUpload:function(){
			var _self = this
			uni.request({
				url:_self.$api+'Document/Add_Document',
				data:{
					Case_Id:_self.Cause_Id,
					File_Name:_self.File_Name,
					fileName:_self.fileName,
					size:_self.size,
					Suffix_Name:_self.Suffix_Name,
					Customer_contract:7,
					User_Id  :uni.getStorageSync('userId')
				},
				method:'POST',
				success:function(res){
					console.log(res)
					if(res.data == true){
						 uni.showToast({
						 	title:'保存成功',
							icon:'success'
						 })
					}
				}
			})
		},
		//保存录音
		saveLuyin:function(){
			var _self = this
			uni.request({
				url:_self.$api+'Document/Add_Document',
				data:{
					Case_Id:_self.Cause_Id,
					File_Name:_self.localIdList[0].File_Name,
					fileName:_self.localIdList[0].fileName,
					size:_self.localIdList[0].size,
					Suffix_Name:_self.localIdList[0].Suffix_Name,
					Customer_contract:7,
					User_Id  :uni.getStorageSync('userId')
				},
					method:'POST',
				success:function(res){
					console.log(res)
					if(res.data == true){
						 uni.showToast({
						 	title:'保存成功',
							icon:'success'
						 })
					}
				}
			})
		},
		//转文字
		translate:function(){
				
		},
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
	min-height: 70upx;
	// border: 1px solid #DDDDDD;
	display: flex;
	flex-wrap: nowrap;
	// line-height: 70upx;
	text-align: center;
}
.select{
	// width: 200upx; 
	min-height: 70upx; 
	// border: 1px solid #DDDDDD;
	display: flex;
	flex: 1;
	// flex-wrap: nowrap;
	// line-height: 70upx;
	// text-align: center;
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
					flex-wrap: wrap;
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
					// margin-top: 25upx;
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
.info_p{
						width: 190upx;
						font-size:32upx;
						color: #333333;
						height: 100%;
						display: flex;
						// align-items: center;
					}
					.name1{
						flex: 1;
						display: flex;
						min-height: 40px;
						font-size: 24upx;
					}
					.shangchuan_btn{
						width: 150upx;
						height: 70upx;
						color: #ffffff;
						text-align: center;
						line-height: 70upx;
						background: #A92A2E; 
						font-size: 28upx;
						font-weight: 500;
					}
</style>
