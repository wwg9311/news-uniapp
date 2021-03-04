<template>
	<view class="content">
		<navbar></navbar>
		<tab :list="labelData"></tab>
		<view v-for="i in 100" :key="i">第{{i}}行内容</view>
	</view>
</template>

<script>
	import navbar from "@/components/navbar/navbar.vue"
	import tab from "@/components/tab/tab.vue"
	export default {
		data() {
			return {
				title: 'Hello',
				labelData: []
			}
		},
		components:{
			navbar,
			tab
		},
		onLoad() {
			this.getLabel()
		},
		methods: {
			getLabel(){
				// 调用云函数的方法
				uniCloud.callFunction({
					name:"get_label"
				}).then((res)=>{
					this.labelData = res.result.data;
				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
