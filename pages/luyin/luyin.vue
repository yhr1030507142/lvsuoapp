<template>
	<div>
		 <div class="hello">
		   <view  class="record" @tap="shuangchuan">上传文件</view>
		  <view  class="record" @tap="start">开始录音</view>
		  <view class="record"  @tap="stopRe">停止录音</view>
		  <view class="record"  @tap="cancel">取消录音</view>
		  <view class="record"  @tap="play">播放录音</view>
		  <view class="record"  @tap="pausePlay">暂停播放</view>
		  <view class="record"  @tap="stopPlay">停止播放</view>
		  <view class="record"  @tap="upVoice">上传语音</view>
		  <view class="record"  @tap="downVoice">下载录音</view>
		  <view class="record"  @tap="translate">转文字</view>
		
<!-- 		  <view class="record"  @click="fake">假的</view>
		  <view class="record"  @click="setTime">开始计时</view>
		  <view class="record"  @click="creamTime">停止计时</view> -->
			</div>
			 <br>
			<p>录音时间{{time}}</p>
			刚录完的语音
			{{word}}
			<div class="list">
			    <audio ref="player" src=""  controls></audio>
			</div>
			<!-- <br>
			<br>
			<div>
			  <button @click="merge">合并所有录音</button>
			   <audio ref="allRecord" src=""  controls></audio>
			</div> -->
	</div>
 
   
</template>

<script>
import wx from 'weixin-js-sdk'
const _this = wx
export default {
  name: 'HelloWorld',
  data () {
    return {
      localId: '',
      serverId: '',
      downLoadId: '',
      Soff: true,
      time: 0,
      timer: null,
	  word:'无'
    }
  },
  onShow:function() {
		var that= this
		that.configPage()
       
  },
  methods: {
	  configPage:function(){
		  var _self = this
		  console.log(encodeURIComponent(location.href.split('#')[0]))
		  alert(location.href.split('#')[0])
		  var data = {url:location.href.split('#')[0],AppId:'wxc9722e78824af65f',AppSecret:'2521b18d19e16fc99408992572338251'}
		  console.log(data)
		  uni.request({
		  		url:_self.$api+"Wechar/Sound",
		  		data:data,
		  		success:function(res){
					alert(JSON.stringify(res))
		  		 _this.config({
					 beta: true,
		  		  debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
		  		  appId: 'wxc9722e78824af65f', // 必填，公众号的唯一标识
		  		  timestamp:res.data.timestamp, // 必填，生成签名的时间戳
		  		  nonceStr: res.data.nonceStr, // 必填，生成签名的随机串
		  		  signature:res.data.signature, // 必填，签名
		  		  jsApiList: ['startRecord','stopRecord', 'playVoice', 'pauseVoice','translateVoice', 'stopVoice', 'uploadVoice', 'downloadVoice'] ,// 必填，需要使用的JS接口列表
		  		  // 接口 开始录音接口 停止录音接口 播放语音接口 暂停播放接口 停止播放接口 上传语音接口 下载语音接口 识别音频并返回识别结果接口
		  		}) 
		  		// config信息验证后才执行 
		  _this.ready(() => { 
		  		// 		wx.checkJsApi({
		  		//     jsApiList: ['startRecord','stopRecord', 'playVoice', 'pauseVoice','translateVoice', 'stopVoice', 'uploadVoice', 'downloadVoice', 'downloadVoice'] ,// 必填，需要使用的JS接口列表
		  		//     success: function(res) {
		  		// 
		  		//     }
		  		// });
		  				})
		  				// 微信sdk错误返回问题
		  				_this.error((res) => {
		  				  alert('出错了：' + res.errMsg)// 这个地方的好处就是wx.config配置错误，会弹出窗口哪里错误，然后根据微信文档查询即可。
							// _self.configPage()
							window.location.href = location.href.split('#')[0]
		  				})
		  		} 
		  	})
	  },
	 shuangchuan(){
		 var _self = this
		 uni.chooseVideo({
		 	success:function(res){
				console.log(res)
				uni.uploadFile({
						url:_self.$api+'Base/uploadRawFile',     // 后端api接口
					    filePath: res.tempFilePath, // uni.chooseImage函数调用后获取的本地文件路劲
					    name:'file',     //后端通过'file'获取上传的文件对象
					    formData: {File_Name:'录音'},
					    header:{"Content-Type": "multipart/form-data"},
					    success:(res) => {
					       console.log(res)
					    }
	
				})
			}
		 })


	 },
    // 开始录音
    start (e) {
      let that = this
      that.time = 0
      _this.startRecord({
        success: function () {
          alert('成功调起录音')
          that.timer = setInterval(() => {
            that.time++ 
          }, 1000)
          that.vicoeEnd()
        },
        cancel: function () {
          alert('用户拒绝授权录音')
        }
      })
    },
    // 停止录音
    stopRe () {
      let that = this
      // clearInterval(that.timer)
      _this.stopRecord({
        success: function (res) {
          // alert('暂停成功')
          console.log(res)
          clearInterval(that.timer)
          that.localId = res.localId
         // that.upVoice()
        },
        fail: function (error) {
          alert('死啦停不了')
          console.log(error)
        }
      })
    },
    // 取消录音
    cancel () {
      _this.stopRecord({
        success: (res) => {
			
        }
      })
    },
    // 60秒监听
    vicoeEnd () {
      let that = this
      _this.onVoiceRecordEnd({
        // 录音时间超过一分钟没有停止的时候会执行 complete 回调
        complete: function (res) {
          alert('60秒停止录音')
          that.localId = res.localId
          clearInterval(that.timer)
          that.upVoice()
        }
      })
    },
    // 合并
    merge () {
      let that = this
      var apiUrl = window.location.href
      this.axios({
        method: 'post',
        url: 'http://apiwx.lostars.cn/index.php/index/File/merge',
        headers: {'Content-Type': 'application/json'},
        data: {
          url: apiUrl
        }
      })
        .then((ser) => {
          console.log(ser)
          that.$refs.allRecord.src = ser.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
    // // 播放
    play () {
      let that = this
      console.log(that.localId)
      _this.playVoice({
        localId: that.localId // 需要播放的音频的本地ID，由stopRecord接口获得
      })
    },
    // 暂停
    pausePlay () {
      let that = this
      _this.pauseVoice({
        localId: that.localId // 需要暂停的音频的本地ID，由stopRecord接口获得
      })
    },
    // 停止
    stopPlay () {
      let that = this
      _this.stopVoice({
        localId: that.localId // 需要停止的音频的本地ID，由stopRecord接口获得
      })
    },
    // 上传语音
    upVoice () {
      let that = this
      _this.uploadVoice({
        localId: that.localId, // 需要上传的音频的本地ID，由stopRecord接口获得
        isShowProgressTips: 1, // 默认为1，显示进度提示
        success: function (res) {
          var apiUrl = window.location.href
        
          that.serverId = res.serverId // 返回音频的服务器端ID
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
			  alert('上传成功')
              console.log(data)
			  alert(that.$api+'LSMSFolde'+data[1].data.fileName)
              that.$refs.player.src = that.$api+'LSMSFolde'+data[1].data.fileName
            }).catch((error) => {
              console.log(error)
            })
        }
      })
    },
    // 下载语音
    downVoice () {
      let that = this
      _this.downloadVoice({
        serverId: that.serverId, // 需要下载的音频的服务器端ID，由uploadVoice接口获得
        isShowProgressTips: 1, // 默认为1，显示进度提示
        success: function (res) {
          alert('下载成功')
          that.downLoadId = res.localId // 返回音频的本地ID
          console.log(res)
          console.log(that.downLoadId)
        }
      })
    },
    //模拟上传语音
    fake () {
      var apiUrl = window.location.href
      this.axios({
        method: 'post',
        url: 'api',
        headers: {'Content-Type': 'application/json'},
        data: {
          serverId: 'cplZxG7oYspQxopQIb9g_cUJ7Y69htn_ybzFiRZR_U3Vf8Bv4Nh6D6TBPWa5VmGs',
          url: apiUrl
        }
      })
        .then((res) => {
          console.log(res)
          this.$refs.player.src = res.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
	//转文字
	translate (){
		let that = this
				  _this.translateVoice({
				      localId: that.localId, // 需要识别的音频的本地Id，由录音相关接口获得
				      isShowProgressTips: 1, // 默认为1，显示进度提示
				      success: function(res){
						  that.word = res.translateResult
				        // 语音识别的结果
				      }
				  });
	}
  }
}
</script>


<style>
.hello{
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	flex-wrap: wrap;
}
.record{
	width: 32%;
	flex-wrap: wrap;
	display: flex;
	flex-direction: row;
	justify-content: center;
	height: 200upx;
	align-items: center;
	font-size: 36upx;
	color: #7E2C2E;
	box-shadow:0 3px 15px 0 rgba(0,0,0,.3);
	margin-top: 10px;
}
</style>
