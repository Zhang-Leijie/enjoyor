<template>
	<div class="fund-note">
		<div class="edit">
			<i class="el-icon-edit"></i>
			评级
		</div>
		<F_Probar></F_Probar>
		<div class="uploadcontent">
			<div class="upload_block">
				<div class="upload_none">
					<i class="el-icon-upload" style="font-size:70px;margin-top:20px;"></i>
					<div>未上传</div>
					<div class="up_hover">
						<div class="white button">上传</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="less">
	.uploadcontent{
		width: 100%;
		padding: 20px;
		.upload_block{
			width: 130px;
			height: 130px;
			float: left;
			margin-right: 120px;
			.upload_none{
				background-color: #f6f7f9;
				width: 100%;
				height: 100%;
				text-align: center;
				color: #ccc;
				position: relative;
				.up_hover{
					display: none;
					text-align: center;
					position: absolute;
					top: 0px;
					bottom: 0px;
					left: 0px;
					right: 0px;
					background-color: rgba(0, 0, 0, 0.5);
					.button{
						margin:40px auto;
					}
				}
			}
		}
	}
</style>
<script>
  import  F_Probar from './fund-procbar'
  export default {
    methods: {
      
    },
    components: {
	    F_Probar
	}
  };
</script>