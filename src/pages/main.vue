<template>
	<div>
		<div class="main-block">
			<div class="block-head" style="background-color:#474e57">
				新增项目评级
				<div class="head-btn" v-if="recordList.length > 0">
					<span  @click="$refs.record.swiper.slidePrev()"><i class="el-icon-arrow-left" style="margin-left:6px;margin-top:6px"></i></span>
					<span  @click="$refs.record.swiper.slideNext()" style="margin-left:5px;"><i class="el-icon-arrow-right" style="margin-left:7px;margin-top:6px"></i></span>
				</div>
			</div>
			<swiper v-if="recordList.length > 0" ref="record">
		        <swiper-slide v-for="r in recordList">
		        	<div class="block-cont">
						<div class="cont-img">
							<img :src="r.user.photo.url" style="width:100%;height:100%">
						</div>
						<div class="cont-word" style="margin-top:-7px;">
							<span class="name">{{r.user.name}}</span>
							<span style="margin-left:10px;">{{r.user.position}}</span><br>
							<span>{{r.quarter | getSeason}}评估</span>
							<span style="margin-left:20px;">总分：<span style="color:#4990e2;font-weight:bold">{{r.item_all | getScore}}</span></span>
							<span style="margin-left:20px;">级别：<span style="color:#d0011b;font-weight:bold">A</span></span><br>
							<span>项目名称：{{r.project.project_name}}</span>
						</div>
						<div class="cont-time">
							{{r.updateTime}}
						</div>
					</div>
		        </swiper-slide>
		    </swiper>
		</div>
		<div class="main-block">
			<div class="block-head" style="background-color:#474e57">
				新增项目评论
				<div class="head-btn" v-if="noteList.length > 0">
					<span @click="$refs.note.swiper.slidePrev()"><i class="el-icon-arrow-left" style="margin-left:6px;margin-top:6px"></i></span>
					<span @click="$refs.note.swiper.slideNext()" style="margin-left:5px;"><i class="el-icon-arrow-right" style="margin-left:7px;margin-top:6px"></i></span>
				</div>
			</div>
			<swiper v-if="noteList.length > 0" ref="note">
		        <swiper-slide v-for="n in noteList">
		        	<div class="block-cont">
						<div class="cont-img">
							<img :src="n.user.photo.url" style="width:100%;height:100%">
						</div>
						<div class="cont-word" style="margin-top:-7px;">
							<span class="name">{{n.user.name}}</span>
							<span style="margin-left:10px;">{{n.user.position}}</span><br>
							<span>{{n.content | shorten}}</span><br>
							<span>项目名称：{{n.project.project_name}}</span>
						</div>
						<div class="cont-time">
							{{n.create_time}}
						</div>
					</div>
		        </swiper-slide>
		    </swiper>
		</div>
		<div class="main-block">
			<div class="block-head" style="background-color:#5ac0de">
				新增项目
			</div>
			<div class="block-cont" v-for="p in projects">
				<div class="cont-img img-item">
					<img :src="p.logo.url" style="width:100%;height:100%">
				</div>
				<div class="cont-word" style="margin-top:0px;">
					<router-link class="name" style="color:#5ac0de" :to="{name:'fund-detail'}">{{p.project_name}}</router-link><span class="name">（{{p.foundation.name}}）</span><br>
					<span>{{p.project_introduction | shorten}}</span>
				</div>
				<div class="cont-time">
					{{p.invest_current | dateFormat}}
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
<script>
	import {getEvaluateRecordList, getNoteList, itemList} from '../ajax/get.js'

 	export default {
		data () {
			return {
				recordList: [],
				noteList: [],
				projects: []
			}
		},		
		mounted () {
			getEvaluateRecordList({
				number: 5
			}).then((res)=>{
				this.recordList = res.data && (res.data.list || [])
			})
			getNoteList({
				number: 6
			}).then((res)=>{
				let type1 = res.data && (res.data.type1 || [])
				let type0 = res.data && (res.data.type0 || [])

				this.noteList = [].concat(type1.slice(0, 3), type0.slice(0, 3))
			})
			itemList({
				project_type: 2
			}).then((res)=>{
				this.projects = res.data && (res.data.list || []).slice(0, 5)
			})
		},
		filters: {
			getScore(_s){
				var s = parseFloat(_s)
				s /= 10
				s = s.toFixed(1)
				return s
			},
			getSeason(_s){
				var s = _s.replace('-', '年')
				s += '季度'
				return s
			},
			shorten(s){
				if (s.length < 15) {
					return s 
				}
				return s.slice(0,15) + '...'
			},
			dateFormat(_date){
				var date = new Date(_date)

				return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getUTCDate()}`

			}
		}
	}
</script>
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