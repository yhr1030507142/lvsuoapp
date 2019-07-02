<template>
	<view class="add">
		

	<view class="content">
      

	 <view class="content_middle flex col m-100">
			<view class="content_middle_view">
				<view class="content_middle_view_child flex col">
					
						<view class="content_middle_view_child_header flex row">
								<text class="state">客户基本信息</text>
						</view>
						<view class="content_middle_view_child_bottom flex row">
							
						<select class="select" @change="changeCustomer()" v-model="customValue">
							<option value="" disabled selected hidden>请选择客户类型</option>
							<option :value="v.value" v-for="(v,i) in customTypeArr" :key="i">{{v.label}}</option>
						</select>
							
						 <select class="select"  v-model="isValue">
							 <option value="" disabled selected hidden>是否常年客户</option>
							<option  :value="v.Id" v-for="(v,i) in isValueArr" :key="i">{{v.Value}}</option>
						</select>
							
							 <select class="select" v-show="customValue==4" v-model="suoshuValue">
								 <option value="" disabled selected hidden>请选择所属行业</option>
								<option  :value="v1.Id" v-for="(v1,i1) in suoshuhangyeArr" :key="i1">{{v1.Value}}</option>
							</select>
						</view>
						
						<view class="content_middle_view_child_bottom_info flex col">
							<div class="info flex row">
									<p class="info_p">客户名称</p>
									<input type="text" v-model="search">
							</div>
								<div class="info flex row" v-show="customValue==3">
										<p class="info_p">证件</p>
										<input type="text" v-model="cardNo">
								</div>
									<div class="info flex row" v-show="customValue==4">
										<p class="info_p">纳税人编号</p>
										<input type="text" v-model="cardNo">
								</div>
								<div class="info flex row" v-show="customValue==4">
										<p class="info_p">职务</p>
										<input type="text" v-model="zhiwu">
								</div>
								
								<div class="info flex row">
										<p class="info_p">省市</p>
										<input type="text" v-model="province" @tap="toggleTab()">
										<w-picker mode="region" 
										step="1" 
										:defaultVal="defaultVal" 
										:current="true" 
										@confirm="onConfirm" 
										ref="picker" 
										themeColor="#f00" 
										></w-picker>
								</div>
							<div class="info flex row">
									<p class="info_p">地址</p>
									<input type="text" v-model="address">
							</div>
								
								<div class="info flex row">
										<p class="info_p">电话</p>
										<input type="text" v-model="tel">
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
	 							 <select class="select" @change="changeOneMenu(value)" v-model="value" >
	 								<option value="" disabled selected hidden>一级案件类型</option>
	 							    <option :value="v.Id" v-for="(v,i) in arr" :key="i">{{v.Category_Name}}</option>
	 							</select>
	 							
	 							 <select class="select" @change="changeTwoMenu(value1)" v-model="value1">
	 							<option value="" disabled selected hidden>二级案件类型</option>
	 							    <option :value="v.Id" v-for="(v,i) in arr1" :key="i">{{v.Value}}</option>
	 							</select>
	 							
	 							 <select class="select" v-model="caseWhy" @change="changeCaseReson(caseWhy)">
	 								<option value="" disabled selected hidden>一级案由类型</option>
	 								<option :value="v.Id" v-for="(v,i) in CaseResonArr" :key="i">{{v.Category_Name}}</option>
	 							 </select>
								  <select class="select" v-model="caseWhy1">
								 	<option value="" disabled selected hidden>二级案由类型</option>
								 	 <option :value="v.Id" v-for="(v,i) in CaseResonArr1" :key="i">{{v.Value}}</option>
								 </select>
	 						</view>
	 						
	 						<view class="content_middle_view_child_bottom_info flex col">
	 								<div class="info flex row">
	 										<p class="info_p">案件名称</p>
	 										<input type="text" v-model="caseName">
	 								</div>
	 								
	 								<div class="info flex row">
	 										<p class="info_p">标的额</p>
	 										<input type="text" v-model="biaodie">
	 								</div>
	 								
	 								<div class="info flex row">
	 										<p class="info_p">受理机关</p>
	 										<input type="text" v-model="compony">
	 								</div>
									
									<div class="info flex row">
											<p class="info_p">对方当事人</p>
											<input type="text" v-model="oppositeParty">
									</div>
	 						</view>	
	 							
	 				</view>
	 			</view>
							<!--  -->
					 	<view class="content_middle_view">
							<view class="content_middle_view_child flex col">
								
									<view class="content_middle_view_child_header flex row">
											<text class="state">案情简介</text>
									</view>
									
									
									<view class="content_middle_view_child_bottom_info flex col">
											<!-- <rich-text :nodes=""></rich-text> -->
											<textarea value="" placeholder="" v-model="textarea" class="textarea"/>
									</view>	
										
							</view>
						</view>
				<!--  -->
				<!--  -->
					 	<view class="content_middle_view">
							<view class="content_middle_view_child flex col">
								
									<view class="content_middle_view_child_header flex row">
											<text class="state">服务内容</text>
											
									</view>
									
									
									<view class="content_middle_view_child_bottom_info flex col">
											<!-- <rich-text :nodes="Service_Content" class="textarea"></rich-text> -->
											<textarea value="" placeholder="" v-model="Service_Content" class="textarea"/>
									</view>	
										
							</view>
						</view>
				<!--  -->
					<view class="content_middle_view">
					<view class="content_middle_view_child flex col">
						
							<view class="content_middle_view_child_header flex row row_between">
									<text class="state">律师信息</text>
									<text @tap="addCase" class="addLayer">添加案件律师</text>
							</view>
							
							
							<view class="content_middle_view_child_bottom_info flex col">
									<view class="lawyer flex row">
										<select name="" id="" class="select_lawyer" v-model="inputArr[0].Id">
											<option :value="v.Id" v-for="(v,i) in  LawyerNameArr" :key="i">{{v.Staff_Name}}</option>
										</select>
										
										<select name="" id="" class="select_lawyer"  style="margin-left:20upx" v-model="inputArr[0].laywerJob">
											<option :value="v.Id" v-for="(v,i) in  layerSelectArr" :key="i">{{v.Value}}</option>
										</select>
										 
									</view>
									
									<view class="lawyer flex row" v-for="(v,i) in userInfo" :key="i">
										<select name="" id="" class="select_lawyer" v-model="inputArr[i+1].Id">
											<option :value="v.Id" v-for="(v,i) in  LawyerNameArr" :key="i">{{v.Staff_Name}}</option>
										</select>
										
										<select name="" id="" class="select_lawyer"  style="margin-left:20upx" v-model="inputArr[i+1].laywerJob">
											<option :value="v.Id" v-for="(v,i) in  layerSelectArr" :key="i">{{v.Value}}</option>
										</select>
										<view class="jian img" @tap="deleteLine(i,userInfo,inputArr)">
											<image src="../../static/img/jian.png" mode="" class="img_100"></image>
										</view>
									</view>
									
							</view>	 	 
					</view>
				</view>
				
				<!--  -->
			<!-- 		<view class="content_middle_view">
					<view class="content_middle_view_child flex col">
						
							<view class="content_middle_view_child_header flex row row_between">
									<text class="state">案件联系人信息</text>
									<text @tap="addCase()" class="addLayer">添加案件联系人</text>
							</view>
							
							
							<view class="content_middle_view_child_bottom_info flex col">
									<view class="lawyer flex row">
										<select name="" id="" class="select_lawyer">
											<option value="">asdsad</option>
										</select>
										<select name="" id="" class="select_lawyer" style="margin-left:20upx">
											<option value="">asdasd</option>
										</select>
									</view>
									
									<view class="lawyer flex row" v-for="(v,i) in userInfo" :key="i">
										<select name="" id="" class="select_lawyer" >
											<option value="">asdsad</option>
										</select>
										<select name="" id="" class="select_lawyer" style="margin-left:20upx">
											<option value="">asdasd</option>
										</select>
										<view class="jian img" @tap="deleteLine(i,userInfo,inputArr)">
											<image src="../../static/img/jian.png" mode="" class="img_100"></image>
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
									<select name="" id="" class="shoufeifangshi_select" v-model="costValue">
										<option :value="v.Id" v-for="(v,i) in costWay" :key="i">{{v.Value}}</option>
									</select>
								</view>
							</view>
							
					</view>
				</view>
				<!--  -->
						<view class="content_middle_view" v-show="costValue == 10">
					<view class="content_middle_view_child flex col">
						
							<view class="content_middle_view_child_header flex row row_between">
									<text class="state">风险达成条件</text>
									<text @tap="addContract" class="addLayer">添加风险条件</text>
							</view>
							
							
							<view class="content_middle_view_child_bottom_info flex col">
									<view class="risk flex row">
										<input type="text" v-model="riskArr[0].riskCondition">
									</view>
									
									<view class="risk flex row" v-for="(v,i) in riskAcount" :key="i">
										<input type="text" v-model="riskArr[i+1].riskCondition">
										<view class="jian img" @tap="deleteLine(i,riskAcount,riskArr)">
											<image src="../../static/img/jian.png" mode="" class="img_100"></image>
										</view>
									</view>
									
							</view>	 	 
					</view>
				</view>
				<!--  -->
					<view class="content_middle_view" v-show="costValue==9">
					<view class="content_middle_view_child flex col">
						
							<view class="content_middle_view_child_header flex row row_between">
									<text class="state">定额收费</text>
									<text @tap="addPayDate" class="addLayer">添加</text>
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
									<view class="pay flex row">
										 <picker mode="date" :value="timeArr[0].dateName" :start="startDate" :end="endDate" @change="bindDateChange" class="pay_date" v-model="timeArr[0].dateName">
											<view class="uni-input">{{timeArr[0].dateName}}</view>
										</picker>
										<input type="text" v-model="timeArr[0].payCount">
										<input type="text" v-model="timeArr[0].describe">
									</view>
									
									
									<view class="pay flex row" v-for="(v,i) in payDate" :key="i" >
										<picker mode="date" :value="timeArr[i+1].dateName" :start="startDate" :end="endDate" @change="bindDateChange1" :data-index="i" class="pay_date">
											<view class="uni-input">{{timeArr[i+1].dateName}}</view>
										</picker>
										<input type="text" v-model="timeArr[i+1].payCount">
										<input type="text" v-model="timeArr[i+1].describe">
										<view class="jian img" @tap="deleteLine(i,payDate,timeArr)">
											<image src="../../static/img/jian.png" mode="" class="img_100"></image>
										</view>
									</view>
									
							</view>	 	 
					</view>
				</view>
			<!--  -->
				<view class="content_middle_view" v-show="costValue==8">
				<view class="content_middle_view_child flex col">
					
						<view class="content_middle_view_child_header flex row row_between">
								<text class="state">费率收费</text>
								<text @tap="addNameJob" class="addLayer">添加</text>
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
								<view class="pay flex row">
									<select name="" id="" class=""  v-model="nameJobArr[0].Id">
										<option :value="v.Id" v-for="(v,i) in  LawyerNameArr" :key="i">{{v.Staff_Name}}</option>
									</select>
									<select name="" id="" class="" v-model="nameJobArr[0].nameJobJob">
										<option :value="v.Id" v-for="(v,i) in  layerSelectArr" :key="i">{{v.Value}}</option>
									</select>
									<input type="text" v-model="nameJobArr[0].nameJobRate">
									<text>RMB/小时</text>
								</view>
								
								<view class="pay flex row" v-for="(v,i) in nameJob" :key="i">
									<select name="" id="" class=""  v-model="nameJobArr[i+1].Id">
											<option :value="v.Id" v-for="(v,i) in  LawyerNameArr" :key="i">{{v.Staff_Name}}</option>
									</select>
									<select name="" id="" class="" v-model="nameJobArr[i+1].nameJobJob">
										<option :value="v.Id" v-for="(v,i) in  layerSelectArr" :key="i">{{v.Value}}</option>
									</select>
									<input type="text" v-model="nameJobArr[i+1].nameJobRate">
									<text>RMB/小时</text>
									<view class="jian img" @tap="deleteLine(i,nameJob,nameJobArr)">
										<image src="../../static/img/jian.png" mode="" class="img_100"></image>
									</view>
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
							<p class="shoufeifangshi_p">合同类型</p>
						<select name="" id="" class="shoufeifangshi_select" v-model="fileType">
							<option :value="v.Id" v-for="(v,i) in fileTypeArr" :key="i">{{v.value}}</option>
						</select>
						 <view class="shangchuan_btn" v-show="fileType == 2" @click="picUpload()">上传</view> 
					</view>
				</view>
				
		</view>
	</view>
	<!--  -->

		
	</view>
	<view class="btn_box flex row row_between">
	<view class="btn btn1" @tap="look()">预览合同</view>
	<view class="btn btn2" @tap="addAll()">提交审核</view>
	</view>
		</view>
</template>

<script>
import wPicker from "@/components/w-picker/w-picker.vue";
// import { DatetimePicker } from 'mint-ui';
	export default { 
		data() {
			  const currentDate = this.getDate({
				format: true
			})
			return { 
				value:'',
				value1:'',
				value2:0, 
				userInfo:[],
				inputArr:[],
				
				riskArr:[],
				riskAcount:[],
				//date: currentDate,
				date: '',

				timeArr:[],
				payDate:[],
				nameJob:[],
				nameJobArr:[],
				defaultVal:[0,0,0],
				province:"",
				 customTypeArr:[
					{value:3,label:'个人'},
					{value:4,label:'企业'}
					],
				customValue:3,
				suoshuhangyeArr:[],
				suoshuValue:"",
				 isValueArr:[
                {Id:1,Value:'是'},{Id:2,Value:'否'},
					],
					customId:0,
					isValue:"",
					 cardNo:'',
					 tel:"",
					 zhiwu:"",
					 search:"",
					 arr1:[],
					 arr:[],
					 CaseResonArr:[],
					 CaseResonArr1:[],
					 caseWhy:"",
					 caseWhy1:"",
					 oppositeParty:"",
					 caseName:'',
					 compony:"",
					 biaodie:"",
					 Service_Content:"",
					 layerSelectArr:[],
					 LawyerNameArr:[],
					 costWay:[],
					 costValue:"",
					 fileType:1,
					 fileTypeArr:[{value:'律所合同',Id:1}],
					 address:"",
					 textarea:"",
					 File_Name:"",
					 Suffix_Name:"",
					 fileName1:"",
					 size:"",
					 custom_Id:"",
					 layWerInfoArr:[],					 
					 
				
			}
		}, 
		mounted() {
			var _self =this
			    _self.getUpdateInfo()
				_self.getSuoshuhangye()
				_self.getOneMenu()
				_self.getXialaList()
			 
		},
		onShow(){
	
		},
		methods: {
			 getUpdateInfo(){
				 var _self  = this
				 uni.request({
				 	url:_self.$api+"Index/Case_Details",
					data:{
						 Id:79,
						 Type_Id:8
					},
					success:function(res){
						console.log(res)
						
						 let arr=res.data.Get_Customer_Information
						        _self.custom_Id = arr.Id
						        _self.search = arr.Customer_Name_Zh
								_self.cardNo = arr.Customer_Number
								
								_self.province = arr.City
								_self.address = arr.Detailed_Address
								_self.tel = arr.Contact_Party
								_self.customValue = arr.Customer_Type_Id
								_self.isValue = arr.Identification
								_self.suoshuValue = arr.industry_Id
								_self.zhiwu = arr.Position
								//案件信息
								let caseInfo = res.data.Get_Case_Information
								_self.value = caseInfo.One_Type_Id
								_self.getTwoMenu(_self.value)
								_self.value1= caseInfo.Two_Type_Id
								_self.getCaseResonList(_self.value)
								_self.caseWhy = caseInfo.One_Cause_Id
								_self.getCaseResonList1(_self.caseWhy)
								_self.caseWhy1 = caseInfo.Cause_Id
								_self.caseName = caseInfo.Case_Name
								_self.biaodie = caseInfo.Target
								_self.compony=caseInfo.Receiving_Organ
								_self.oppositeParty = caseInfo.Party_Name
								_self.textarea=caseInfo.Case_Introduction
								_self.Service_Content=caseInfo.Service_Content
								
								//案件律师信息
								_self.layWerInfoArr = res.data.Get_Lawyer_Information
								for(var i in _self.layWerInfoArr){
								_self.inputArr.push({laywerName:_self.layWerInfoArr[i].Staff_Name,visible:false,laywerJob:_self.layWerInfoArr[i].Case_Rule_Id,laywerName1:'',Id:_self.layWerInfoArr[i].Id,Case_Rule_Id:_self.layWerInfoArr[i].Case_Rule_Id,Lawyer_Id:_self.layWerInfoArr[i].Id})
									}   
								_self.costValue = res.data.Id
								//风险收费
								if(_self.costValue == 10){
								        var ChargeInfoArr = res.data.Charge
								        //console.log(this.ChargeInfoArr)
								          for(var i in ChargeInfoArr){
								            _self.riskArr.push({riskCondition:ChargeInfoArr[i].Risk_Achievement,Risk_Achievement:ChargeInfoArr[i].Risk_Achievement})
								         }
								        _self.timeArr=[{dateName:'',payCount:'',describe:''}]
								        _self.nameJobArr=[{nameJobName:'',nameJobJob:'',nameJobRate:'',visible:false,nameJobName1:'',Id:''}]
								        _self.riskAcount = _self.riskArr.slice(1)
								        _self.nameJob = _self.nameJobArr.slice(1)
								        _self.payDate = _self.timeArr.slice(1)					            
								        }
								        if(_self.costValue == 8){
								        //小时收费
								        var ChargeInfoArr = res.data.Charge
								        //console.log(this.ChargeInfoArr)
								          for(var i in ChargeInfoArr){
								            _self.nameJobArr.push({nameJobRate:ChargeInfoArr[i].Rate,Rate:ChargeInfoArr[i].Rate,visible:false,nameJobName1:'',nameJobName:ChargeInfoArr[i].Staff_Name,nameJobJob:ChargeInfoArr[i].Staff_Id,Lawyer_Id:ChargeInfoArr[i].Staff_Id,nameJobJob:ChargeInfoArr[i].Rule_Id,Rule_Id:ChargeInfoArr[i].Rule_Id,Id:ChargeInfoArr[i].Staff_Id})
								        }
								         //console.log(this.nameJobArr)
								        _self.timeArr=[{describe:'',payCount:'',dateName:'',Payment_Time:'',Charge_Amount:'',Describe:''}]
								        _self.riskArr=[{riskCondition:'',Risk_Achievement:''}]
								
								        _self.riskAcount = _self.riskArr.slice(1)
								        _self.nameJob = _self.nameJobArr.slice(1)
								        _self.payDate = _self.timeArr.slice(1)
								        }
										//定额收费
										if(_self.costValue == 9){
									  var ChargeInfoArr = res.data.Charge
									  //console.log(this.ChargeInfoArr)
									   for(var i in ChargeInfoArr){
									      _self.timeArr.push({describe:ChargeInfoArr[i].Describe,payCount:ChargeInfoArr[i].Charge_Amount,dateName:ChargeInfoArr[i].Payment_Time,Payment_Time:ChargeInfoArr[i].Payment_Time,Charge_Amount:ChargeInfoArr[i].Charge_Amount,Describe:ChargeInfoArr[i].Describe})
									  }
									  _self.riskArr=[{riskCondition:'',Risk_Achievement:'',Id:""}]
									  _self.nameJobArr=[{nameJobRate:'',Rate:'',visible:false,nameJobName1:'',nameJobName:'',nameJobJob:'',Lawyer_Id:'',Rule_Id:'',Id:""}]
									  
									   _self.riskAcount = _self.riskArr.slice(1)
									  _self.nameJob = _self.nameJobArr.slice(1)
										 _self.payDate = _self.timeArr.slice(1)
										 //console.log(this.payDate)
										 }
					}
				 })
        },
			 addAll(){
		   console.log(this.nameJobArr)
           this.checkData()
            if(this.checkData() == false){
                return false
            }
            var addJson={}
            if(this.costValue == ''||this.costValue == null){
                 
			uni.showToast({
					icon:"none",
                    title:'请选择收费方式',
                    duration:2000
                });
                return false
            }
            if(this.customValue == 3){
                this.suoshuValue = 0
            }
            if(this.costValue == 8){
            addJson = {
              // 'userId':localStorage.getItem('userId'),
			  'userId':uni.getStorageSync("userId"),
              'costId':this.customId,
              'userNameC':this.search,
            // 'userNameE':this.userNameE,
              'province':this.province,
              'address':this.address,
              'tel':this.tel,
              'type':this.customValue,
              'suoshuhangye':this.suoshuValue, 
              'job':this.zhiwu,
              'is':this.isValue,
              'cardNo':this.cardNo,
              'compony':this.compony,
              'oppositePart':this.oppositeParty,
              'caseWhy':this.caseWhy1,
                    //服务内容
              'Service_Content':this.Service_Content.replace(/\r\n/g, '<br/>').replace(/\n/g, '<br/>').replace(/\s/g, '&nbsp;'),
               //标的额
                'Target':this.biaodie,

              'caseValue':this.value,
              'caseValue2':this.value1,
              'caseName':this.caseName,
              'caseWay':this.caseWay,
              'textarea':this.textarea,
              'laywerArr':this.inputArr,
            //   'partyArr':this.input1Arr,
            //合同
            'File_Name':this.File_Name,
            'Suffix_Name':this.Suffix_Name,
            'fileName':this.fileName1,
            'size':this.size,
            'Source_Contract':this.fileType,

            "costValue":this.costValue,
            'nameJobArr':this.nameJobArr
              
                }
          }
            
            if(this.costValue == 9){
  addJson = {
               'userId':uni.getStorageSync("userId"),
              'costId':this.customId,
             
             'userNameC':this.search,
            //   'userNameE':this.userNameE,
              'province':this.province,
              'address':this.address,
               'suoshuhangye':this.suoshuValue,
                'type':this.customValue,
                'tel':this.tel,
               'job':this.zhiwu,
             
             //服务内容
                'Service_Content':this.Service_Content.replace(/\r\n/g, '<br/>').replace(/\n/g, '<br/>').replace(/\s/g, '&nbsp;'),
                 //标的额
                'Target':this.biaodie,
             
                'is':this.isValue,
                'cardNo':this.cardNo,
                'compony':this.compony,
                'oppositePart':this.oppositeParty,
                'caseWhy':this.caseWhy1,


               'caseValue':this.value,
             'caseValue2':this.value1,
                'caseName':this.caseName,
                'caseWay':this.caseWay,
                'textarea':this.textarea,

              'laywerArr':this.inputArr,
            //   'partyArr':this.input1Arr,
                'File_Name':this.File_Name,
                'Suffix_Name':this.Suffix_Name,
                'fileName':this.fileName1,
                'size':this.size,
                'Source_Contract':this.fileType,
                "costValue":this.costValue,
               'timeArr':this.timeArr,
            }
            }
            if(this.costValue == 10){
    addJson = {
               'userId':uni.getStorageSync("userId"),
              'costId':this.customId,
              'userNameC':this.search,
            //   'userNameE':this.userNameE,
              'province':this.province,
              'address':this.address,
              'tel':this.tel,
              'type':this.customValue,
              'suoshuhangye':this.suoshuValue,
              'job':this.zhiwu,


                    //服务内容
                'Service_Content':this.Service_Content.replace(/\r\n/g, '<br/>').replace(/\n/g, '<br/>').replace(/\s/g, '&nbsp;'),
                 //标的额
                'Target':this.biaodie,
              'is':this.isValue,
                'cardNo':this.cardNo,
                'compony':this.compony,
                'oppositePart':this.oppositeParty,
                'caseWhy':this.caseWhy1,
                'Source_Contract':this.fileType,
                'caseValue':this.value,
              'caseValue2':this.value1,
                'caseName':this.caseName,
                'caseWay':this.caseWay,
                'textarea':this.textarea,


              'laywerArr':this.inputArr,
            //   'partyArr':this.input1Arr,
                'File_Name':this.File_Name,
                'Suffix_Name':this.Suffix_Name,
                'fileName':this.fileName1,
                'size':this.size,

              "costValue":this.costValue,
              'riskArr':this.riskArr, 
            }
            }
        addJson = JSON.stringify(addJson)
        console.log(addJson)
      
        //console.log(JSON.stringify(addJson))
     //  return false
		uni.request({
			url:this.$api+"Index/Upd_Cases",
			method:"POST",
			data:{map:addJson},
			success:function(res){
				console.log(res)
				 if(res.data == true){
					 uni.showToast({
					        title:'添加成功',
					 		duration:2000
					  });
					  uni.navigateTo({
					  	url:'../pages/index/index'
					  })
					   return false
					 }else{        
						uni.showToast({
					        title:'添加失败',
					        duration:2000
					          });
					        return false
					    }
				 }
			
          })


        },
		   /**验证提交表单 */
        checkData(){
              if(this.search==""||this.search==null){
                
uni.showToast({
                    title:'客户名称不能为空',
                    duration:2000,
					icon:"none"
                });
                return false
            }
             if(this.customValue==""||this.customValue==null){
                
uni.showToast({
                    title:'客户类型不能为空',
                     duration:2000
                });
                return false
            }
            if(this.customValue ==3 ){
                var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/; 
                if(reg.test(this.cardNo) === false) 
                { 
                     
uni.showToast({
                        title:'身份证输入不合法',
                        duration:2000
                     });
                       return false  
                }
            }  
            if(this.customValue ==4 ){
                if(this.cardNo.length <6) 
                { 
                     
uni.showToast({
                        title:'纳税人编号不合法',
                          duration:2000
                     });
                       return false  
                }
                 if(this.suoshuValue==""||this.suoshuValue==null){
                
uni.showToast({
                    title:'请选择所属行业',
                     duration:2000
                });
                return false
            }
               if(this.zhiwu==""||this.zhiwu==null){
                
uni.showToast({
                    title:'职务不能为空',
                     duration:2000
                });
                return false
            }
            }
            
            if(this.province==""||this.province==null){
                
uni.showToast({
                    title:'省市区信息不能为空',
                    duration:2000
                });
                return false
            }
             if(this.address==""||this.address==null){
                
uni.showToast({
                    title:'详细地址不能为空',
                     duration:2000
                });
                return false
            }
          
             if(this.tel==""||this.tel==null){
                
uni.showToast({
                    title:'联系电话不能为空',
                    duration:2000
                });
                return false
            }
             var myreg = /^((0\d{2,3}-\d{7,8})|(1[34578]\d{9}))$/;
            if (!myreg.test(this.tel)) {
                  
uni.showToast({
                    title:'联系电话格式不正确',
                     duration:2000
                });
                return false;
            } 
               if(this.isValue==""||this.isValue==null){
                
uni.showToast({
                    title:'请选择是否常年客户',
                     duration:2000
                });
                return false
            }

            if(this.value==""||this.value==null || this.value1==""||this.value1 ==null ){   
uni.showToast({
                    title:'请选择案件类型',
                    duration:2000
                });
                return false
            }
            if(this.caseName==""||this.caseName==null){
                
uni.showToast({
                    title:'案件名称不能为空',
                    duration:2000
                });
                return false
            }
           if(this.caseWhy1==""||this.caseWhy1==null){
                
uni.showToast({
                    title:'请选择案由',
                     duration:2000
                });
                return false
            }
             if(this.compony==""||this.compony==null){
                
uni.showToast({
                    title:'请填写受理机关',
                     duration:2000
                });
                return false
            }
             if(this.textarea==""||this.textarea==null){
                
uni.showToast({
                    title:'请填写案情简介',
                    duration:2000
                });
                return false
            }
               if(this.oppositeParty==""||this.oppositeParty==null){
                
uni.showToast({
                    title:'对方当事人不能为空',
                     duration:2000
                });
                return false
            }
            var arr=[]
            for(var i in this.inputArr){
                arr.push(this.inputArr[i].Id)
            }
           
            //console.log(arr)
            if (arr.indexOf('') != -1){
                 
			uni.showToast({
                    title:'请选择律师姓名',
                    duration:2000
                });
                return false
            }
            var nary=arr.sort();
            console.log(nary)
            for(var i=0;i<arr.length;i++){
                if (nary[i]==nary[i+1]){
                  
uni.showToast({
                    title:'律师数据重复请重新选择',
                    duration:2000
                    });
                    return false
                }
            }


             var arrJob=[]
            for(var i in this.inputArr){
                arrJob.push(this.inputArr[i].laywerJob)
            }
            if (arrJob.indexOf('') != -1){
                 
uni.showToast({
                    title:'请选择律师职务',
                    duration:2000
                });
                return false
            }
         
         var arrJob1=[]
            for(var i in this.inputArr){
                arrJob1.push(this.inputArr[i].laywerJob)
            }
            //console.log(arrJob1) //false
           if(arrJob1.indexOf(18) == -1){
                 
uni.showToast({
                    title:'请至少填写一位主办律师',
                    duration:2000
                });
                return false
            }
            
            //服务内容
              if(this.Service_Content==""||this.Service_Content==null){
                
uni.showToast({
                    title:'服务内容不能为空',
                     duration:2000
                });
                return false
            }
             //标的额
                if(this.biaodie ==""||this.biaodie==null){
                
uni.showToast({
                    title:'服务内容不能为空',
                    duration:2000
                });
                return false
            }
            
            // var arrParty=[]
            // for(var i in this.input1Arr){
            //     arrParty.push(this.input1Arr[i].partyName)
            // }
            // if (arrParty.indexOf('') != -1){
            //      
//		uni.showToast({
            //         title:'当事人姓名不能为空',
            //         type:'warning'
            //     });
            //     return false
            // }

            // var arrPartyJob=[]
            // for(var i in this.input1Arr){
            //     arrPartyJob.push(this.input1Arr[i].partyJob)
            // }
            // if (arrPartyJob.indexOf('') != -1){
            //      
			//	uni.showToast({
            //         title:'请选择当事人类型',
            //         type:'warning'
            //     });
            //     return false
            // }

              if(this.costValue==""||this.costValue==null){
                
uni.showToast({
                    title:'请选择收费方式',
                    duration:2000
                });
                return false
            }
           
           if(this.costValue==8){

            var arrJobArr8=[]
            for(var i in this.nameJobArr){
                arrJobArr8.push(this.nameJobArr[i].Id)
            }
            if (arrJobArr8.indexOf('') != -1){
                 
uni.showToast({
                    title:'姓名不能为空',
                    duration:2000
                });
                return false
            }
            var nary=arrJobArr8.sort();
            for(var i=0;i<arrJobArr8.length;i++){
                if (nary[i]==nary[i+1]){
                  
			uni.showToast({
                    title:'律师数据重复请重新选择',
                    duration:2000
                    });
                    return false
                }
            }

            var arrJobArrJob81=[]
            for(var i in this.nameJobArr){
                arrJobArrJob81.push(this.nameJobArr[i].nameJobJob)
            }
            if (arrJobArrJob81.indexOf('') != -1){
                 
uni.showToast({
                    title:'职务不能为空',
                    duration:2000
                });
                return false
            }
        

             var arrJobJobRate8=[]
            for(var i in this.nameJobArr){
                arrJobJobRate8.push(this.nameJobArr[i].nameJobRate)
            }
            if (arrJobJobRate8.indexOf('') != -1){
                 
uni.showToast({
                    title:'费率不能为空',
                     duration:2000
                });
                return false
            }
        }

         if(this.costValue==9){
            var arr9=[]
            for(var i in this.timeArr){
                arr9.push(this.timeArr[i].dateName)
            }
            if (arr9.indexOf('') != -1){
                 
uni.showToast({
                    title:'请选择付款日期',
                     duration:2000
                });
                return false
            }

            var arrMoney=[]
            for(var i in this.timeArr){
                arrMoney.push(this.timeArr[i].payCount)
            }
            if (arrMoney.indexOf('') != -1){
                 
uni.showToast({
                    title:'付款金额不能为空',
                     duration:2000
                });
                return false
            }
        

             var arrdescribe=[]
            for(var i in this.timeArr){
                arrdescribe.push(this.timeArr[i].describe)
            }
            if (arrdescribe.indexOf('') != -1){
                 
uni.showToast({
                    title:'请输入描述',
                    duration:2000
                });
                return false
            }
        }

    if(this.costValue==10){
            var arr10=[]
            for(var i in this.riskArr){
                arr10.push(this.riskArr[i].riskCondition)
            }
            if (arr10.indexOf('') != -1){
                 
uni.showToast({
                    title:'请填写描述',
                     duration:2000
                });
                return false
            }
        }

          if(this.fileType==""||this.fileType==null){
                
uni.showToast({
                    title:'请选择合同类型',
                     duration:2000
                });
                return false
            }
          if(this.fileType==2){
            if(this.code != 200){
               
uni.showToast({
                    title:'请先上传文件',
                    duration:2000
                });
                return false  
                }
            }
                return true
        },
			onConfirm(value){
				  var province = ''
				// console.log(value);
				var val = value.checkArr
				for(var i =0;i<val.length;i++){
					 if(i<val.length-1){
							province += val[i]+'-'
					}else{
							province += val[i]
					}
				}
				this.province = province
				console.log(province)
			},
			toggleTab(){
				this.$refs.picker.show();
			},
			toggleTab1(){
				this.$refs.picker1.show();
			},
			//获取客户行业
			getSuoshuhangye(){
				var _self = this
				uni.request({
					url:_self.$api+"Index/Get_All_Customers",
					success:function(res){
						 _self.suoshuhangyeArr = res.data.Industry
						 console.log(_self.suoshuhangyeArr)
					}
				})
			},
			changeLawyer(e){
				console.log(e)
			},
			getId(id,i){
				
				// console.log(this.inputArr[0].Id = id)
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
					//console.log(res)
					_self.arr1 = res.data
					_self.value1 = res.data[0].Id
				},
				})
				
			},
			getXialaList(){
				var _self= this
				uni.request({
				url:_self.$api+'Index/Get_Droplist',
				success:function(res){
					console.log(res)
					 /**获取案由下拉 */
					//_self.CaseResonArr = res.data.Summary
					/**获取职务下拉列表 */
					_self.layerSelectArr = res.data.Post
					 /**获取律师数据 */
					_self.LawyerNameArr =res.data.Lawyer
					/**获取收费方式下拉 */
					_self.costWay = res.data.AllCharging
				},
				})
				
                
//                 //  this.JobListArr = res.data.Post

//                  


// 
//                       for (let i = 0; i < this.LawyerNameArr.length; i += 1) {
//                         this.LawyerNameArr[i].value =  this.LawyerNameArr[i].Staff_Name;      
//                         this.LawyerNameArr[i].Staff_No =  this.LawyerNameArr[i].Staff_No;      
//                         }
          
			},
			changeOneMenu(e){
				console.log(e)
				this.value = e
				this.getCaseResonList(e)
				this.getTwoMenu(e)
			},
			changeTwoMenu(e){
				this.value1 = e
			},
			changeCustomer(){},
			addCase(){
				var _self =this
		    _self.userInfo.push(1)
            _self.inputArr.push({laywerName:'',laywerJob:'',visible:false,laywerName1:'',Id:''})  
			},
			deleteLine(i,arr,arr1){
				arr.splice(i,1)
				arr1.splice(i+1,1)
			},
			addContract(){  
            this.riskAcount.push(1)
            this.riskArr.push({riskName:'',riskCount:'',riskCondition:''})  
			},	
			bindDateChange: function(e) {
            this.timeArr[0].dateName = e.target.value
			},
			bindDateChange1: function(e) {
				var index =  parseInt(e.target.dataset.index)+1
				console.log(index)
				this.timeArr[index].dateName = e.target.value
			},
			  getDate(type) {
            const date = new Date();
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let day = date.getDate();

            if (type === 'start') {
                year = year - 60;
            } else if (type === 'end') {
                year = year + 2;
            }
            month = month > 9 ? month : '0' + month;;
            day = day > 9 ? day : '0' + day;
            return `${year}-${month}-${day}`;
        },
		addPayDate(){
			this.payDate.push(1)
            this.timeArr.push({dateName:'',payCount:'',describe:''})  
		},
		addNameJob(){
			this.nameJob.push(1)
            this.nameJobArr.push({nameJobName:'',nameJobJob:'',nameJobRate:'',visible:false,nameJobName1:'',Id:''})  
		},
		picUpload(){
			uni.chooseImage({
    success: function (chooseImageRes) {
        const tempFilePaths = chooseImageRes.tempFilePaths;
        const uploadTask = uni.uploadFile({
            url: 'https://www.example.com/upload', //仅为示例，非真实的接口地址
            filePath: tempFilePaths[0],
            name: 'file',
            formData: {
                'user': 'test'
            },
            success: function (uploadFileRes) {
                console.log(uploadFileRes.data);
            }
        });
 
        uploadTask.onProgressUpdate(function (res) {
            console.log('上传进度' + res.progress);
            console.log('已经上传的数据长度' + res.totalBytesSent);
            console.log('预期需要上传的数据总长度' + res.totalBytesExpectedToSend);
 
            // 测试条件，取消上传任务。
            if (res.progress > 50) {
                uploadTask.abort();
            }
				});
			}
		});
		},
		//预览合同
		look(){
			
		},
		  /**更改一级案由 */
        changeCaseReson(id){ 
            this.getCaseResonList1(id)
        },
        /**获取案由根据一级案件类型 */
        getCaseResonList(id){
			var _self =this
			uni.request({
				url:_self.$api+"Index/Get_Cause_Case",
				data:{Id:id},
				success:function(res){
					console.log(res)
					_self.CaseResonArr=[]
					_self.CaseResonArr = res.data
				}
			})
        },
             /**获取案由根据一级案由获取二级案由 */
        getCaseResonList1(id){
			var _self =this
			uni.request({
				url: _self.$api+'Index/Get_Two_Cause',
				method: 'GET',
				data: {Id:id},
				success: function(res){
					_self.CaseResonArr1=[]
					_self.CaseResonArr1 = res.data
				},
				// fail: () => {},
				// complete: () => {}
			}); 
        },
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
		components:{
			wPicker,
		},
	}
</script>

<style lang="scss">
	$width:20%;
	select{
		background: #ffffff;
		margin-right: 10upx;
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
.select{
	// width: 200upx; 
	height: 70upx;
	border: 1px solid #DDDDDD;
	width: 33%;
	border-bottom:none;
//	-webkit-appearance: none;/*兼容苹果手机*/
}
.select_lawyer{
	border: 1px solid #DDDDDD;
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
	padding-bottom: 100upx;
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
						border: 1upx solid #dddddd;
						font-size: 24upx;
						font-weight: 500;
						margin-left: 50upx;
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
					justify-content: center;
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
						width: 140upx;
					}
					.pay_date{
						width: $width;
						height: 80upx;
						border: 1upx solid #dddddd;
						display: flex;
						flex-direction: row;
						align-items: center;
						}
						input{
							margin-left: 10upx;
							height: 77upx;
							border: 1upx solid #dddddd;
						}
					}
				.risk{
					height: 80upx;
					display: flex;
					flex-direction: row;
					align-items: center;
					margin-top: 20upx;
					input{
						width: 80%;
						height: 80upx;
						border: 1upx solid #dddddd;
					}
				}
				.lawyer{
					height: 80upx;
					align-items: center;
				}
				.textarea{
					border: 1px solid #DDDDDD;
					height: 200upx;
					width: 100%;
				}
				.info{
					margin-top: 25upx;
					height: 80upx;
					.info_p{
						width: 210upx;
						font-size:32upx;
						color: #333333;
						height: 100%;
						display: flex;
						align-items: center;
					}
					input{
						height: 80upx;
						border:2upx solid #DDDDDD;
						flex: 1;
						box-shadow:0 3px 15px 0 rgba(0,0,0,0);
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
.shangchuan_btn{
	width: 150upx;
}
</style>
