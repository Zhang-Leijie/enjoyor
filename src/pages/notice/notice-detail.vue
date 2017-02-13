<template>
	<div>
		<el-breadcrumb separator="/">
		  	<el-breadcrumb-item :to="{ name: 'main' }"><i class="el-icon-menu"></i><span style="margin-left:5px;">主页</span></el-breadcrumb-item>
		  	<el-breadcrumb-item :to="{ name: 'notice-list' }">公告中心</el-breadcrumb-item>
		  	<el-breadcrumb-item>详情</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="fund-summary" style="margin-top:15px;background-color:white;border: 1px solid #d3dce6;box-shadow: 0 0 4px 0 rgba(44, 77, 109, 0.2)">
			<div class="clearfix">
				<div class="sum-item sum-double">
					<div class="item-title">
						公告序号
					</div>
					<div class="item-content item-single" >
						{{$route.query.id}}
					</div>
				</div>
				<div class="sum-item sum-double">
					<div class="item-title item-title2">
						公告时间
					</div>
					<div class="item-content item-single" >
						{{formatDate(info.notice_time)}}
					</div>
				</div>
			</div>
			<div class="clearfix">
				<div class="sum-item sum-double">
					<div class="item-title">
						公告类型
					</div>
					<div class="item-content item-single" >
						{{info.type}}
					</div>
				</div>
				<div class="sum-item sum-double">
					<div class="item-title item-title2">
						发送人
					</div>
					<div class="item-content item-single clearfix" >
						{{user.userName}}
					</div>
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					公告内容
				</div>
				<div class="item-content" >
					{{info.content}}
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					附件下载
				</div>
				<div class="item-content">
					<div class="uploadfile" v-for="(i,index) in info.files">
						<div class="fileimg">
							<img :src="i.img">
						</div>
						<div class="filecont">
							<div>{{i.fileName}}</div>
							<div class="fileoption">
								<a :href="i.url" target="_blank"style="float:right;margin-top:20px;margin-right:10px;cursor:pointer">
									<i class="el-icon-caret-bottom" style="font-size:20px"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div style="text-align:center">
				<router-link :to="{name: 'notice-list'}" class="button grey">返回</router-link>
			</div>
		<div>
	</div>
</template>
<script>
import {saveUser} from '../../ajax/post.js'
import {getFoundationList,getRoleList,getUserList,getNotice} from '../../ajax/get.js'
function doctype(name){
	var img
	var x = name.split('.')[1]
	if (x == 'pdf') {
		img = '../static/img/PDF.png'
	}
	else if(x=='docx'||x=='doc'){
		img = '../static/img/word.png'
	}
	else if(x=='xls'||x=='xlsx'){
		img = '../static/img/excel.png'
	}
	else{
		img = '../static/img/qita.png'
	}
	return img
}
export default {
    data() {
        return {
        	info:'',
        	user:''
        }
    },
    methods: {
    	formatDate(time)   {  
			  var   now = new Date(time)   
			  var   year = now.getFullYear();     
			  var   month = "0" + (now.getMonth()+1);     
			  var   date = "0" +(now.getDate());         
			  return   year+"-"+month.substr(-2)+"-"+date.substr(-2)  
		},
    	getInfo(){
    		getNotice({
				noticeId:this.$route.query.id
			}).then((res) => {
				res.notice.files.forEach(function(list){
					var img = doctype(list.url)
	      			list.img = img
				})
				this.info = res.notice
				this.user = res.notice.send_user
			}) 
    	}
    },
    mounted:function(){
    	this.getInfo()
    }
}
</script>
<style lang="less">
	.item-title{
		font-size: 14px;
	}
	.personbox{
		width: 260px;
		.title{
			height: 40px;
			background-color: #474e57;
			line-height: 40px;
			padding: 0px 15px;
			.name{
				float: left;
				color: #fff;
			}
			.chooseall{
				cursor: pointer;
				float: right;
				color: #888;
				float: right;
			}
		}
		.contentp{
			width: 100%;
			border: 1px solid #eee;
			border-top: none;
			padding: 15px;
		}
	}
	.uploadfile{
		margin-bottom: 15px;
		width: 300px;
		height: 60px;
		padding-left: 60px;
		position: relative;
		.fileimg{
			width: 60px;
			height: 60px;
			position: absolute;
			top: 0px;
			left: 0px;
			img{
				height: 100%;
				width: 100%;
			}
		}
		.filecont{
			width: 100%;
			height: 100%;
			background-color: #f1f2f7;
			padding: 10px;
			font-size: 12px;
			position: relative;
			.fileoption{
				position: absolute;
				width: 100%;
				height: 100%;
				top: 0px;
				left: 0px;
				background-color:rgba(0, 0, 0, 0.3);
				opacity: 0;
				transition:0.5s;
				-moz-transition:0.5s; /* Firefox 4 */
				-webkit-transition:0.5s; /* Safari and Chrome */
				-o-transition:0.5s; /* Opera */
				&:hover{
					opacity:1
				}
			}
		}
	}
</style>