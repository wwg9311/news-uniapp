<template>
	<view :style="{height:totalHeight+'px',width:'100vw'}">
		<view class="navbar" :style="{height:totalHeight+'px'}">
			<view class="statebar" :style="{height: statusBarHeight+'px'}"></view>
			<view class="navbar-content" :style="{height: navBarHeight+'px'}">
				<view class="navbar-search" :style="{width:searchBarWidth+'px'}">
					<view class="navbar-search-icon">
						<uni-icons type="search" size="16" color="#999"></uni-icons>
						<!-- <text class="iconfont icon-search"></text> -->
					</view>
					<view class="navbar-search-text">ccc</view>
				</view>
			</view>
		</view>
		<view class="placeholder" :style="{height:totalHeight+'px'}"></view>
	</view>
	
</template>

<script>
	import uniIcons from "../uni-icons/uni-icons.vue"
	export default {
		data() {
			return {
				statusBarHeight:20,
				navBarHeight: 44,
				searchBarWidth: 375
			}
		},
		components:{
			uniIcons
		},
		methods: {
			
		},
		created(){
			// 获取系统信息
			const systemInfo = uni.getSystemInfoSync();
			this.statusBarHeight = systemInfo.statusBarHeight;
			this.searchBarWidth = systemInfo.windowWidth;
			// 获取胶囊按钮信息
			// #ifdef MP-WEIXIN
			let menuButtonInfo = uni.getMenuButtonBoundingClientRect()
			// (底部-状态栏)+(顶部-状态栏)
			this.navBarHeight = (menuButtonInfo.bottom-this.statusBarHeight)+(menuButtonInfo.top-this.statusBarHeight);
			this.searchBarWidth = menuButtonInfo.left - 30
			// #endif
		},
		computed:{
			totalHeight(){
				return this.statusBarHeight + this.navBarHeight
			}
		}
	}
</script>

<style lang="scss">
@import "@/static/css/iconfont.css";
.navbar{
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 100;
	.statebar{
		background-color: $main-color;
	}
	.navbar-content{
		background-color: $main-color;
		display: flex;
		justify-content: start;
		align-items: center;
		.navbar-search{
			margin: 0 15px;
			box-sizing: border-box;
			height: 30px;
			background-color: #fff;
			border-radius: 15px;
			display: flex;
			justify-content: start;
			align-items: center;
			padding: 0 10px;
			.navbar-search-icon{
				// width: 10px;
				// height: 10px;
				// border: 1px solid $main-color;
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
