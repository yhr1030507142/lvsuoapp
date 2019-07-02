<template>
	<view class="content">
			<view class="header flex row">
				<image src="" mode="" class="pic" v-if="pic == undefined"></image>
				<image :src="'http://java.gzbigbang.cn'+pic" mode=""   :class="pic_class" v-else  @tap="showPic()"></image>
				<view class="info flex col">
						<view class="name flex row row_between">
							<text class="name_word">律师:<text class="name_word">{{name}}</text> </text>
							<view class="edit" @tap="gotoEdit()">编辑</view>
						</view>
						<view class="name flex row row_between">
							<text class="name_word1">执业证号:<text class="name_word1">{{number}}</text> </text>
						</view>
						<view class="name flex row row_between">
							<text class="name_word1">职务:<text class="name_word1">{{job}}</text> </text>
						</view>
						<view class="name flex row row_between">
							<text class="name_word1">联系方式:<text class="name_word1">{{tel}}</text> </text>
						</view>
						<view class="name flex row row_between">
							<text class="name_word1">电子邮箱:<text class="name_word1">{{email}}</text> </text>
						</view>
						
				</view>
			</view>
	<view class="middle flex col row">
		<view class="middle_info">
			<view class="middle_info_head">职业领域</view>
			<view class="middle_info_content">
				<rich-text :nodes="jobTextare"></rich-text>
			</view>
		</view>
		
		<view class="middle_info">
			<view class="middle_info_head">教育背景</view>
			<view class="middle_info_content">
				<rich-text :nodes="teach"></rich-text>
			</view>
		</view>
		
			<view class="middle_info">
			<view class="middle_info_head">工作经历</view>
			<view class="middle_info_content">
				<rich-text :nodes="jobStrory"></rich-text>
			</view>
		</view>
		
			<view class="middle_info">
			<view class="middle_info_head">社会职务</view>
			<view class="middle_info_content">
				<rich-text :nodes="jobSociety"></rich-text>
			</view>
		</view>
		
			<view class="middle_info">
			<view class="middle_info_head">获得荣誉</view>
			<view class="middle_info_content">
				<rich-text :nodes="honor"></rich-text>
			</view>
		</view>
		
		<view class="middle_info">
			<view class="middle_info_head">主要业绩</view>
			<view class="middle_info_content">
				<rich-text :nodes="grade"></rich-text>
			</view>
		</view>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				 nodes: [{
										name: 'div',
										attrs: {
											class: 'div-class',
											style: 'line-height: 60px; color: red; text-align:center;'
										},
										children: [{
											type: 'text',
											text: 'Hello&nbsp;uni-app!'
										}]
										}],
				  name:'',
				  number:'',
				  job:'',
				  email:'',
				  tel:'',
				  jobTextare:"",
				  Id:"",
				  honor:"",
				  pic:"",
				  value:"",
				  teach:"",
				  jobStrory:"",
				  grade:"",
				  jobSociety:"",
				  User_Id:"",
				  pic_class:"pic",
				  height:"",
				  width:"",
				  
			}
		},
		onLoad(){
			this.showInfo()
			this.getJobList()
		},
		methods: {
			showInfo(){
				var _self = this
				uni.request({
					url:_self.$api+"Personal/Display_Information",
					data:{User_Id:uni.getStorageSync("userId")},
					success:function(res){
					
				_self.jobTextare = res.data.practice_Areas
				_self.name = res.data.Staff_Name
                _self.Id = res.data.Id
				_self.User_Id = res.data.User_Id
                _self.honor = res.data.Honor
                _self.pic = res.data.Avatar_Path
                _self.tel = res.data.Contact_Information
                _self.value = res.data.Position_Id
                _self.number = res.data.Occupation_Number
                _self.teach = res.data.Education
                _self.email = res.data.Contact_Mailbox
                _self.jobStrory = res.data.Work_History
                _self.grade = res.data.Achievement
                _self.jobSociety = res.data.Social_Duty
					}
				})
			},
			showPic(){
					var _self =this
				// uni.getSystemInfo({
				// success: function (res) {
				// 	_self.height = res.windowHeight
				// 	_self.width =  res.windowWidth
				// }
				// });
			
				if(_self.pic_class == "pic1"){
					_self.pic_class = "pic"
				}else{
					_self.pic_class = "pic1"
				}
				

			},
			  getJobList(){
				  var _self =this
				  uni.request({
				  	url:_self.$api+"Personal/Position",
					success:function(res){
						  if(res.data[_self.value].Position_Name == undefined || res.data[_self.value].Position_Name == ''){
						    _self.job = ''
						}else{
						    _self.job =  _self.job = res.data[_self.value].Position_Name
						}
					}
				  })
        },
		gotoEdit(){
			var _self =this
			uni.navigateTo({
				url:"../../pages/undateMyInfo/undateMyInfo?User_Id="+_self.User_Id+"&Id="+_self.Id
			})
		}
		}
	}
</script>

<style lang="scss">
.content{
	position: relative;
}
.pic1{
		position: absolute;
		width: 100%;
		height: 70%;
		border-radius:10upx;
		border: 1upx solid #E5E5E5;
	}
.header{
	height: 350upx;
	.pic{
		width: 32%;
		height: 100%;
		border-radius:10upx;
		border: 1upx solid #E5E5E5;
	}
	.info{
		margin-left: 20upx;
		flex: 1;
		height: 100%;
		justify-content: space-between;
		.name{
			color: #333333;
			.name_word{
				font-size: 34upx;
				font-weight: 600;
			} 
			.name_word1{
				font-size: 32upx;
			}
			.edit{
				width: 100upx;
				height: 50upx;
				background: #E5E5E5;
				color: #999999;
				border-radius: 10upx;
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
			}
		}
		
	}
}

.middle{
	margin-top: 30upx;
	width: 100%;
	.middle_info{
			margin-top: 30upx;
			display: flex;
			flex-direction: column;
		.middle_info_head{
			font-size: 42upx;
			font-weight: 600;
			color: #813032;
		}
		.middle_info_content{
			clear:both;
			margin-top: 10upx;
			color: #333333;
			font-size: 32upx;
		}
	}
}
</style>
