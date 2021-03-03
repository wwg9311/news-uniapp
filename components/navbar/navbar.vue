<template>
	<view>
		<view class="navbar" :style="{height:statusBarHeight+44+'px'}">
			<view class="statebar" :style="{height: statusBarHeight+'px'}"></view>
			<view class="navbar-content" >
				<view class="navbar-search">
					<view class="navbar-search-icon"></view>
					<view class="navbar-search-text">ccc</view>
				</view>
			</view>
		</view>
		<view class="placeholder"></view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				statusBarHeight:20
			}
		},
		methods: {
			
		},
		created(){
			const systemInfo = uni.getSystemInfoSync()
			this.statusBarHeight = systemInfo.statusBarHeight;
		}
	}
</script>

<style lang="scss">
.navbar{
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 100;
	.navbar-content{
		height: $height-navbar;
		background-color: $main-color;
		display: flex;
		justify-content: center;
		align-items: center;
		.navbar-search{
			margin: 0 15px;
			box-sizing: border-box;
			height: 30px;
			flex: 1;
			background-color: #fff;
			border-radius: 15px;
			display: flex;
			justify-content: start;
			align-items: center;
			padding: 0 10px;
			.navbar-search-icon{
				width: 10px;
				height: 10px;
				border: 1px solid $main-color;
				margin-right: 5px;
			}
			.navbar-search-text{
				color: #999;
				font-size: 12px;
			}
		}
	}
	.placeholder{
		width: 100%;
		height: $height-navbar;
	}
}
</style>
