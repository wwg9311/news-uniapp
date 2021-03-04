<template>
	<view class="tab">
		<scroll-view class="tab-scroll" scroll-x="true" >
			<view class="tab-content">
				<view v-for="item in list" :key="item.name" class="tab-item">{{item.name}}</view>
			</view>
		</scroll-view>
		<view class="tab-icon">
			<uni-icons type="gear" size="20"></uni-icons>
		</view>
	</view>
</template>

<script>
	import uniIcons from "../uni-icons/uni-icons.vue"
	export default {
		data() {
			return {
				
			};
		},
		props:{
			list:{
				type: Array,
				require: true,
				default(){
					return []
				}
			}
		},
		components:{
			uniIcons
		}
	}
</script>

<style lang="scss">
.tab{
	width: 100%;
	background-color: #fff;
	border-bottom: 1px solid #f5f5f5;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	align-items: center;
	.tab-scroll{
		flex: 1;
		.tab-content{
			display: flex;
			align-items: center;
			flex-wrap: nowrap;
			height: 45px;
			box-sizing: border-box;
			.tab-item{
				flex-shrink: 0;
				padding: 0 10px;
				color: #333;
				font-size: 14px;
			}
		}
	}
	.tab-icon{
		width: 40px;
		border-left: 1px solid #eee;
		text-align: center;
	}
}
</style>
