<template>
	<div class="fund-video">
		<div class="fund-summary">
			<div class="sum-item">
				<div class="item-title">
					URL地址
				</div>
				<div class="item-content item-single">
					<el-input placeholder="" class="edit-input" style="width:600px;"></el-input>
				</div>
			</div>
			<div style="text-align:center">
				<div class="button blue" @click="edit=!edit">保存</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
  data () {
    return {
      	edit:false
    }
  }
}
</script>
<style lang="less">
	.fund-video{
		position: relative;
		padding-top: 20px;
		padding-bottom: 40px;
		.video{
			width: 870px;
			height: 520px;
			margin: 0 auto;
			video{
				width: 100%;
				height: 100%;				
			}
		}
	}
</style>