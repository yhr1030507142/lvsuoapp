<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			if(!uni.getStorageSync("userId")){
				uni.navigateTo({
					url:"pages/login/login"
				})
			}
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style> 
	
</style>
