<template>
	<div>
		<div class="main-block">
			<div class="block-head" style="background-color:#474e57">
				新增项目评级
				<div class="head-btn">
					<span><i class="el-icon-arrow-left" style="margin-left:6px;margin-top:6px"></i></span>
					<span style="margin-left:5px;"><i class="el-icon-arrow-right" style="margin-left:7px;margin-top:6px"></i></span>
				</div>
			</div>
			<div class="block-cont">
				<div class="cont-img">
					<img src="../assets/touxiang.png" style="width:100%;height:100%">
				</div>
				<div class="cont-word" style="margin-top:-7px;">
					<span class="name">林森</span>
					<span style="margin-left:10px;">投资总监（上海）</span><br>
					<span>2016第4季评估</span>
					<span style="margin-left:20px;">总分：<span style="color:#4990e2;font-weight:bold">85.9</span></span>
					<span style="margin-left:20px;">级别：<span style="color:#d0011b;font-weight:bold">A</span></span><br>
					<span>项目名称：刚刚好（基金A）</span>
				</div>
				<div class="cont-time">
					2016/11/30 12:38
				</div>
			</div>
		</div>
		<div class="main-block">
			<div class="block-head" style="background-color:#474e57">
				新增项目评论
				<div class="head-btn">
					<span><i class="el-icon-arrow-left" style="margin-left:6px;margin-top:6px"></i></span>
					<span style="margin-left:5px;"><i class="el-icon-arrow-right" style="margin-left:7px;margin-top:6px"></i></span>
				</div>
			</div>
			<div class="block-cont">
				<div class="cont-img">
					<img src="../assets/touxiang.png" style="width:100%;height:100%">
				</div>
				<div class="cont-word" style="margin-top:-7px;">
					<span class="name">林森</span>
					<span style="margin-left:10px;">投资总监（上海）</span><br>
					<span>请国龙提取它的15年财务报表和今年的前三季度报表...</span><br>
					<span>项目名称：刚刚好（基金A）</span>
				</div>
				<div class="cont-time">
					2016/11/30 12:38
				</div>
			</div>
		</div>
		<div class="main-block">
			<div class="block-head" style="background-color:#5ac0de">
				新增项目
			</div>
			<div class="block-cont">
				<div class="cont-img img-item">
					<img src="../assets/item1.png" style="width:100%;height:100%">
				</div>
				<div class="cont-word" style="margin-top:0px;">
					<router-link class="name" style="color:#5ac0de" :to="{name:'fund-detail'}">刚刚好</router-link><span class="name">（基金A）</span><br>
					<span>企业级服务 工具+交流</span>
				</div>
				<div class="cont-time">
					2016/11/30
				</div>
			</div>
			<div class="block-cont">
				<div class="cont-img img-item">
					<img src="../assets/item1.png" style="width:100%;height:100%">
				</div>
				<div class="cont-word" style="margin-top:0px;">
					<span class="name" style="color:#5ac0de">刚刚好</span><span class="name">（基金A）</span><br>
					<span>企业级服务 工具+交流</span>
				</div>
				<div class="cont-time">
					2016/11/30
				</div>
			</div>
		</div>
		<div class="main-block">
			<div class="block-head" style="background-color:#51ccb3">
				公告中心<div style="float:right">更多</div>
			</div>
			<div class="block-cont">
				<div style="display:inline-block">
					<div class="cont-sign sign-light"></div>
					<div class="cont-word">银江资本基金管理有限公司合伙协议公告</div>
				</div>
				<div style="text-align:right;color:#888">2016/11/30 12:38</div>
			</div>
			<div class="block-cont">
				<div style="display:inline-block">
					<div class="cont-sign sign-light"></div>
					<div class="cont-word">银江资本基金管理有限公司合伙协议公告</div>
				</div>
				<div style="text-align:right;color:#888">2016/11/30 12:38</div>
			</div>
			<div class="block-cont">
				<div style="display:inline-block">
					<div class="cont-sign sign-dark"></div>
					<div class="cont-word">银江资本基金管理有限公司合伙协议公告</div>
				</div>
				<div style="text-align:right;color:#888">2016/11/30 12:38</div>
			</div>
			<div class="block-cont">
				<div style="display:inline-block">
					<div class="cont-sign sign-dark"></div>
					<div class="cont-word">银江资本基金管理有限公司合伙协议公告</div>
				</div>
				<div style="text-align:right;color:#888">2016/11/30 12:38</div>
			</div>
			<div class="block-cont">
				<div style="display:inline-block">
					<div class="cont-sign sign-dark"></div>
					<div class="cont-word">银江资本基金管理有限公司合伙协议公告</div>
				</div>
				<div style="text-align:right;color:#888">2016/11/30 12:38</div>
			</div>
			<div class="block-cont">
				<div style="display:inline-block">
					<div class="cont-sign sign-dark"></div>
					<div class="cont-word">银江资本基金管理有限公司合伙协议公告</div>
				</div>
				<div style="text-align:right;color:#888">2016/11/30 12:38</div>
			</div>
		</div>
	</div>
</template>
<style lang="less">
	.main-block{
		margin-bottom: 10px;
		float: left;
		width: 49%;
		&:nth-child(2n){
			margin-left: 2%;
		}
		.block-head{
			font-size: 16px;
			line-height: 50px;
			padding-left: 10px;
			padding-right: 20px;
			color: #fff;
			width: 100%;
			height: 50px;
			position: relative;
			.head-btn{
				font-size: 12px;
				color: #474e57;
				position: absolute;
				right: 10px;
				top: 13px;
				line-height: 24px;
				span{
					cursor: pointer;
					position: relative;
					display: inline-block;
					background:#77797c;
					width:24px;
					height:24px;
					border-radius:100%;
				}
			}
		}
		.block-cont{
			position: relative;
			height: 90px;
			width: 100%;
			padding: 20px 10px;
			border-bottom: 1px solid #f1f2f7;
			background-color: #fff;
			// display: inline-block;
			.cont-sign{
				margin-top: 6px;
				float: left;
				width: 10px;
				height: 10px;
				border-radius: 100%;
			}
			.sign-light{
				background-color: #d0011b;
			}
			.sign-dark{
				background-color: #dfdfdf;
			}
			.cont-img{
				float: left;
				width: 40px;
				height: 40px;
			}
			.img-item{
				width: 73px;
				height: 40px;
			}
			.cont-word{
				span{
					display: inline-block;
					line-height: 20px;
				}
				margin-top: 3px;
				color: #888;
				float: left;
				margin-left: 10px;
				.name{
					font-size: 14px;
					color: #333;
				}
			}
			.cont-time{
				position: absolute;
				font-size: 12px;
				top: 20px;
				right: 10px;
				color: #888;
				margin-top: 4px;
			}
		}
	}
</style>