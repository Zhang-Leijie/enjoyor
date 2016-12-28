<template>
	<div class="clearfix" style="margin-bottom:50px;">
		<div class="note-process">
			<div class="unfinish">
				
			</div>
			<div class="finish">
				
			</div>
			<div class="finish-cont">
				<div class="process-cir process-border" style="float:left">
					<i class="el-icon-check"></i>
					<div class="process-word">
						项目录入
					</div>
				</div>
				<div class="process-cir process-border" style="float:left;margin-left:77px;">
					<i class="el-icon-check"></i>
					<div class="process-word">
						同意立项
					</div>
				</div>
				<div class="process-cir process-border" style="float:left;margin-left:77px;">
					<i class="el-icon-check"></i>
					<div class="process-word">
						同意上会
					</div>
				</div>
				<div class="process-cir process-border" style="float:left;margin-left:77px;">
					<i class="el-icon-check"></i>
					<div class="process-word" style="left:-40%">
						已上会
					</div>
				</div>
				<div class="process-cir process-border" style="float:left;margin-left:77px;">
					<i class="el-icon-check"></i>
					<div class="process-word">
						同意投资
					</div>
				</div>
				<div class="process-cir process-border" style="float:left;margin-left:77px;">
					<i class="el-icon-check"></i>
					<div class="process-word">
						协议签订
					</div>
				</div>
				<div class="process-cir process-border" style="float:left;margin-left:77px;">
					<i class="el-icon-check"></i>
					<div class="process-word" style="left:-10%">
						出资
					</div>
				</div>
				<div class="process-cir process-border" style="float:left;margin-left:77px;">
					<i class="el-icon-check"></i>
					<div class="process-word">
						投后管理
					</div>
				</div>
				<div class="process-cir">
					<i class="el-icon-check"></i>
					<div class="process-word">
						推出投资
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="less">
	.note-process{
		margin-left: 20px;
		margin-top: 20px;
		float: left;
		padding: 2px;
		width: 800px;
		height: 24px;
		position: relative;
		// background-color: #f1f2f7;
		border-radius: 12px;
		.unfinish{
			border-radius: 24px;
			z-index: 1;
			top: 0px;
			bottom: 0px;
			position: absolute;
			width: 100%;
			height: 24px;
			background-color: #f1f2f7;
		}
		.finish{
			z-index: 2;
			top: 0px;
			bottom: 0px;
			position: absolute;
			width: 100%;
			height: 24px;
			background-image:linear-gradient(-90deg, #b5fa72 0%, #20b4ac 62%, #4990e2 100%);
			border-radius:24px;
			width:100%;
			height:24px;
		}
		.finish-cont{
			z-index: 3;
			position: absolute;
			top: 2px;
			left: 5px;
			right: 1px;
			position: absolute;
			height: 24px;
			.process-cir{
				z-index: 2;
				float: right;
				width: 20px;
				height: 20px;
				border-radius: 50%;
				background-color: #fff;
				cursor: pointer;
				position: relative;
				.el-icon-check{
					color: #4793de;
					margin-left: 1px;
					margin-top: 5px;
				}
				.process-word{
					width: 100px;
					position: absolute;
					bottom: -25px;
					left: -70%;
				}
			}
		}		
	}	
</style>