<template>
	<div class="fund-note">
		<div class="edit">
			<i class="el-icon-edit"></i>
			评级
		</div>
		<F_Probar></F_Probar>
		<div class="uploadcontent clearfix">
			<div class="upload_block">
				<div class="upload_none">
					<i class="el-icon-upload" style="font-size:70px;margin-top:20px;"></i>
					<div>未上传</div>
					<div class="up_hover">
						<div class="white button">上传</div>
					</div>
				</div>
				<div class="upload_name">项目简报</div>
			</div>
			<div class="upload_block">
				<div class="upload_none">
					<i class="el-icon-upload" style="font-size:70px;margin-top:20px;"></i>
					<div>未上传</div>
					<div class="up_hover">
						<div class="white button">上传</div>
					</div>
				</div>
				<div class="upload_name">商业计划书</div>
			</div>
			<div class="upload_block">
				<div class="upload_none">
					<i class="el-icon-upload" style="font-size:70px;margin-top:20px;"></i>
					<div>未上传</div>
					<div class="up_hover">
						<div class="white button">上传</div>
					</div>
				</div>
				<div class="upload_name">TS协议框架</div>
			</div>
			<div class="upload_block">
				<div class="upload_none">
					<i class="el-icon-upload" style="font-size:70px;margin-top:20px;"></i>
					<div>未上传</div>
					<div class="up_hover">
						<div class="white button">上传</div>
					</div>
				</div>
				<div class="upload_name">尽调报告</div>
				<el-select v-model="value" placeholder="请选择" style="margin-top:10px;">
				    <el-option
				      v-for="item in options"
				      :label="item.label"
				      :value="item.value">
				    </el-option>
				</el-select>
			</div>
			<div class="upload_block">
				<div class="upload_none">
					<i class="el-icon-upload" style="font-size:70px;margin-top:20px;"></i>
					<div>未上传</div>
					<div class="up_hover">
						<div class="white button">上传</div>
					</div>
				</div>
				<div class="upload_name">正式协议进展</div>
				<el-select v-model="value" placeholder="请选择" style="margin-top:10px;">
				    <el-option
				      v-for="item in options"
				      :label="item.label"
				      :value="item.value">
				    </el-option>
				</el-select>
			</div>
			<div class="upload_block">
				<div class="upload_none">
					<i class="el-icon-upload" style="font-size:70px;margin-top:20px;"></i>
					<div>未上传</div>
					<div class="up_hover">
						<div class="white button">上传</div>
					</div>
				</div>
				<div class="upload_name">投后管理</div>
				<el-select v-model="value" placeholder="请选择" style="margin-top:10px;">
				    <el-option
				      v-for="item in options"
				      :label="item.label"
				      :value="item.value">
				    </el-option>
				</el-select>
			</div>
			<div class="upload_block">
				<!-- <div class="upload_none">
					<i class="el-icon-upload" style="font-size:70px;margin-top:20px;"></i>
					<div>未上传</div>
					<div class="up_hover">
						<div class="white button">上传</div>
					</div>
				</div> -->
				<div class="upload_none">
					<div class="upload_img">
						<img src="../../assets/touxiang.png">
					</div>
					<div class="up_hover">
						<div class="white button">下载</div>
					</div>
				</div>
				<div class="upload_name">投资退出盈利</div>
				<el-select v-model="value" placeholder="请选择" style="margin-top:10px;">
				    <el-option
				      v-for="item in options"
				      :label="item.label"
				      :value="item.value">
				    </el-option>
				</el-select>
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
			margin-bottom: 50px;
			&:nth-child(4n){
				margin-right: 0px;
			}
			.upload_none{
				background-color: #f6f7f9;
				width: 100%;
				height: 100%;
				text-align: center;
				color: #ccc;
				position: relative;
				.upload_img{
					position: absolute;
					top: 0px;
					bottom: 0px;
					left: 0px;
					right: 0px;
					img{
						width: 100%;
						height: 100%;
					}
				}
				.up_hover{
					&:hover{
						opacity: 1;
					}				
					// display: none;
					transition:0.5s;
					-moz-transition:0.5s; /* Firefox 4 */
					-webkit-transition:0.5s; /* Safari and Chrome */
					-o-transition:0.5s; /* Opera */
					opacity: 0;
					text-align: center;
					position: absolute;
					top: 0px;
					bottom: 0px;
					left: 0px;
					right: 0px;
					background-color: rgba(0, 0, 0, 0.5);
					.button{
						margin:45px auto;
					}
				}			
			}
			.upload_name{
				text-align: center;
				font-size: 14px;
				color: #333;
				line-height: 25px;
			}
		}
	}
</style>
<script>
  import  F_Probar from './fund-procbar'
  export default {
  	data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }],
        value: ''
      }
    },
    methods: {
      
    },
    components: {
	    F_Probar
	}
  };
</script>