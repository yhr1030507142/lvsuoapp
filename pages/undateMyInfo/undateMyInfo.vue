<template>
	<view class="content">
		<view class="header flex row">
			<image :src="'http://java.gzbigbang.cn'+pic" mode="" class="pic" @tap="changeImg"></image>
			<view class="info flex col">
				<view class="name flex row row_between">
					<text class="name_word">律师:</text>
					<input type="text" class="name_word_input" v-model="name" disabled="disabled">
					<view class="edit" @tap="addMineInfo">保存</view>
				</view>
				<view class="name flex row row_between">
					<text class="name_word1">执业证号:</text>
					<input type="text" class="name_word_input" v-model="number">
				</view>
				<view class="name flex row row_between">
					<text class="name_word1">职务:</text>
					<select name="" id="" v-model="value" class="selectJob">
						<option :value="item.Id" v-for="item in options" :key="item.Id">{{item.Position_Name}}</option>
					</select>
				</view>
				<view class="name flex row row_between">
					<text class="name_word1">联系方式:</text>
					<input type="text" class="name_word_input" v-model="tel">
				</view>
				<view class="name flex row row_between">
					<text class="name_word1">电子邮箱:</text>
					<input type="text" class="name_word_input" v-model="email">
				</view>

			</view>
		</view>
		<view class="middle flex col row">
			<view class="middle_info">
				<view class="middle_info_head">职业领域</view>
				<view class="middle_info_content">
					<input type="text" style="width:90%;margin: 0 auto; height: 100upx;border:1upx solid #999" v-model="jobTextare">
					<!-- 				 <quill-editor class="editor" v-model="" ref="myQuillEditor"  :options="editorOption" style="width:90%;margin: 0 auto; height: 200upx;border:1upx solid #999">
      </quill-editor> -->
				</view>
			</view>

			<view class="middle_info">
				<view class="middle_info_head">教育背景</view>
				<view class="middle_info_content">
					<quill-editor class="editor" v-model="teach" ref="myQuillEditor" :options="editorOption" style="width:90%;margin: 0 auto; height: 200upx;border:1upx solid #999">
					</quill-editor>
				</view>
			</view>

			<view class="middle_info">
				<view class="middle_info_head">工作经历</view>
				<view class="middle_info_content">
					<quill-editor class="editor" v-model="job" ref="myQuillEditor" :options="editorOption" style="width:90%;margin: 0 auto; height: 200upx;border:1upx solid #999">
					</quill-editor>
				</view>
			</view>

			<view class="middle_info">
				<view class="middle_info_head">社会职务</view>
				<view class="middle_info_content">
					<quill-editor class="editor" v-model="job1" ref="myQuillEditor" :options="editorOption" style="width:90%;margin: 0 auto; height: 200upx;border:1upx solid #999">
					</quill-editor>
				</view>
			</view>

			<view class="middle_info">
				<view class="middle_info_head">获得荣誉</view>
				<view class="middle_info_content">
					<quill-editor class="editor" v-model="honor" ref="myQuillEditor" :options="editorOption" style="width:90%;margin: 0 auto; height: 200upx;border:1upx solid #999">
					</quill-editor>
				</view>
			</view>

			<view class="middle_info">
				<view class="middle_info_head">主要业绩</view>
				<view class="middle_info_content">
					<quill-editor class="editor" v-model="grade" ref="myQuillEditor" :options="editorOption" style="width:90%;margin: 0 auto; height: 200upx;border:1upx solid #999">
					</quill-editor>
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
				editorOption: {
					modules: {

					},
					placeholder: '',
					theme: ''
				},
				strings: '',
				textarea1: '',
				textarea: '',
				dialogImageUrl: '',
				dialogVisible: false,
				options: [],
				value: '',
				name: '',
				job: '',
				job1: '',
				number: '',
				tel: '',
				email: '',
				jobTextare: '',
				teach: '',
				honor: '',
				grade: '',
				pic_path: '',
				//上传
				code: '',
				fileName: '',
				nameData: {
					File_Name: '',
				},
				File_Name: '',
				fileName1: '',
				Suffix_Name: '',
				size: '',
				pic: '',
				imageUrl: '',
				optionId: "",
				optionUserId: "",
			}
		},
		onLoad(option) {
			var _self = this
			_self.optionUserId = option.User_Id
			_self.optionId = option.Id
			_self.getJobList()
			_self.getMineList()
		},
		methods: {
			getMineList() {
				var _self = this
				uni.request({
					url: _self.$api + "Personal/Display_Information",
					data: {
						User_Id: _self.optionUserId
					},
					success: function(res) {
						console.log(res)
						_self.name = res.data.Staff_Name
						_self.Id = res.data.Id
						_self.honor = res.data.Honor
						_self.pic = res.data.Avatar_Path
						_self.fileName = res.data.Avatar_Path
						_self.tel = res.data.Contact_Information
						_self.value = res.data.Position_Id
						_self.number = res.data.Occupation_Number
						_self.teach = res.data.Education
						//console.log(this.teach)
						_self.email = res.data.Contact_Mailbox
						_self.job = res.data.Work_History
						_self.grade = res.data.Achievement
						_self.job1 = res.data.Social_Duty
						_self.jobTextare = res.data.practice_Areas
					}
				})
			},
			getJobList() {
				var _self = this
				uni.request({
					url: _self.$api + 'Personal/Position',
					method: 'GET',
					success: function(res) {
						_self.options = res.data
					}
				});


			},
			changeImg() {
				var _self = this
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					success: function(chooseImageRes) {
						const tempFilePaths = chooseImageRes.tempFilePaths;
						
						uni.uploadFile({
							url: _self.$api + 'Base/uploadRawFile',
							filePath: tempFilePaths[0],
							name: 'file',
							formData: {
								'user': 'test'
							},
							success: function(uploadFileRes) {
								console.log(uploadFileRes)
									_self.File_Name = JSON.parse(uploadFileRes.data).File_Name
									_self.Suffix_Name =JSON.parse(uploadFileRes.data).Suffix_Name
									_self.fileName = JSON.parse(uploadFileRes.data).fileName
									_self.size = JSON.parse(uploadFileRes.data).size
									_self.pic = _self.fileName
							}
						});
					}
				});
			},
			addMineInfo() {
				var _self = this
				if (_self.fileName == '' || _self.fileName == null) {
					uni.showToast({
						title: '请选择头像',
						duration: 2000
					});
					return false;
				}


				if (_self.number == '' || _self.number == undefined) {
					uni.showToast({
						title: '职业证号不能为空',
						duration: 2000
					});
					return false
				}
				if (_self.value == '' || _self.value == null) {
					uni.showToast({
						title: '职位不能为空',
						duration: 2000
					});
					return false
				}
				var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
				if (!myreg.test(_self.tel)) {
					uni.showToast({
						title: '请填写正确的手机号',
						duration: 2000
					});
					return false
				}
				var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
				if (!reg.test(_self.email)) {
					uni.showToast({
						title: '请输入正确的邮箱',
						duration: 2000
					});
					return false
				}
				uni.request({
					url: _self.$api + 'Personal/Save_Information',
					method: 'POST',
					data: {
						Id: _self.optionId,
						Avatar_Path: _self.fileName,
						Honor: _self.honor,
						Occupation_Number: _self.number,
						Position_Id: _self.value,
						Contact_Information: _self.tel,
						Contact_Mailbox: _self.email,
						practice_Areas: _self.jobTextare,
						Achievement: _self.grade,
						Education: _self.teach,
						Work_History: _self.job,
						Social_Duty: _self.job1,
					},
					success: function(res) {
						console.log(res)
						if (res.data == true) {
							uni.showToast({
								title: '更新成功',
								duration: 2000,
								icon: "success"
							});
							_self.getMineList()
						} else {
							uni.showToast({
								title: '更新失败',
								duration: 2000,
							});
						}
					},
				});
			},

		}
	}
</script>

<style lang="scss" scoped>
	.editor {
		width: 100%;
		height: 200upx;
	}

	div.ql-container.ql-snow {
		height: 100upx;
	}

	div.ql-editor.ql-blank {
		height: 50upx;
	}

	.header {
		height: 350upx;

		.pic {
			width: 32%;
			height: 100%;
			border-radius: 10upx;
			border: 1upx solid #E5E5E5;
		}

		.info {
			margin-left: 20upx;
			flex: 1;
			height: 100%;
			justify-content: space-between;

			.name {
				flex-wrap: nowrap;
				color: #333333;

				.selectJob {
					flex: 1;
					background: none;
					height: 54upx;
					display: inline-block;
					border: 1upx solid #999;
					padding-left: 20upx;
					height: 54upx;
				}

				.name_word_input {
					display: inline-block;
					border: 1upx solid #999;
					flex: 1;
					padding-left: 20upx;
				}

				.name_word {
					font-size: 34upx;
					font-weight: 600;
				}

				.name_word1 {
					font-size: 32upx;
					display: flex;
					min-width: 140upx;
					text-align: justify;
				}

				.edit {
					margin-left: 10upx;
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

	.middle {
		margin-top: 30upx;
		width: 100%;

		.middle_info {
			margin-top: 30upx;
			display: flex;
			flex-direction: column;

			.middle_info_head {
				font-size: 42upx;
				font-weight: 600;
				color: #813032;
			}

			.middle_info_content {
				clear: both;
				margin-top: 10upx;
				color: #333333;
				font-size: 32upx;

				.textarea {
					border: 1upx solid #999;
					width: 90%;
					margin: 0 auto;
					max-height: 300upx;
					min-height: 300upx;
					overflow: auto;
				}
			}
		}
	}

	.editor {
		width: 100%;
		height: 200upx;
	}

	// .wrapper {
	//     width: 100%;
	//     display: flex;
	//     flex-direction: column;
	//     box-sizing: border-box;
	//     .title {
	//       font-size: $font-size-large;
	//       color: $text-main;
	//       padding-bottom: px2rem(6);
	//       line-height: 150%;
	//     }
	//     .input-wrapper {
	//       display: flex;
	//       flex-direction: row;
	//       width: 100%;
	//       margin: px2rem(5) 0;
	//       box-sizing: border-box;
	//      
	//       .sub-title {
	//         font-size: $font-size-normal;
	//         color: $text-normal;
	//       }
	//       .field {
	//         flex: 1;
	//         border: 1px solid $border-third;
	//       }
	//     }
	//   }
	//   div.ql-container.ql-snow{
	//     height: px2rem(100);
	//   }
	//   div.ql-editor.ql-blank{
	//     height: px2rem(50);
	//   }
</style>
