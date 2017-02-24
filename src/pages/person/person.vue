<template>
	<div class="person">
		<el-breadcrumb separator="/">
		  	<el-breadcrumb-item :to="{ name: 'main' }"><i class="el-icon-menu"></i><span style="margin-left:5px;">主页</span></el-breadcrumb-item>
		  	<el-breadcrumb-item>个人中心</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="person-box">
			<div class="sum-item">
				<div class="item-title">
					个人
				</div>
				<div class="item-content clearfix">
					<div style="float:left;">
						<img :src="url" style="width:60px;height:60px;border-radius:50%">
						<div class="resetpass" @click="dialogFormVisible = true">重置密码</div>
					</div>
					<el-form :model="formAlignRight" label-width="120px" class="information clearfix">
					  	<el-form-item label="姓名">
					    	{{user.name}}
					  	</el-form-item>
					  	<el-form-item label="职位">
					    	{{user.position}}
					  	</el-form-item>
					  	<el-form-item label="地区">
					    	{{user.address}}
					  	</el-form-item>
					  	<el-form-item label="手机号">
					    	{{user.phone}}
					  	</el-form-item>
					  	<el-form-item label="微信号">
					    	绑定
					  	</el-form-item>
					  	<el-form-item label="备注">
					    	银江资本
					  	</el-form-item>
					</el-form>
					<!-- <div class="info-box">
						<img :src="url">
						<el-form :model="formAlignRight" label-width="120px">
						  	<el-form-item label="姓名">
						    	{{user.name}}
						  	</el-form-item>
						  	<el-form-item label="职位">
						    	{{user.position}}
						  	</el-form-item>
						  	<el-form-item label="地区">
						    	{{user.address}}
						  	</el-form-item>
						  	<el-form-item label="手机号">
						    	{{user.phone}}
						  	</el-form-item>
						  	<el-form-item label="微信号">
						    	绑定
						  	</el-form-item>
						  	<el-form-item label="备注">
						    	银江资本
						  	</el-form-item>
						</el-form>
					</div> -->
				</div>
			</div>
		</div>
		<div class="person-box">
			<div class="sum-item">
				<div class="item-title">
					我的点评
				</div>
				<div class="item-content" v-for="i in list">
					<div style="margin-bottom:10px;" v-if="i.commentTab.id!=1">
						<div class="block-cont n-margin">
							<!-- <div class="cont-img">
								<img :src="i.user.photo.url" style="width:100%;height:100%">
							</div> -->
							<div class="cont-word" style="margin-top:2px;">
								<span class="name" style="line-height:30px;">{{i.project.project_name}}</span>
								<!-- <span style="margin-left:10px;">{{i.user.position}}（{{i.user.address}}）</span><br>
								<span>{{i.create_time}}</span> -->
							</div>
							<div class="note-label">
								<!-- {{i.commentTab.name}} -->
								<img v-if="i.commentTab.id==5" src="../../assets/touzidianping.png" style="width:80px">
								<img v-if="i.commentTab.id==2" src="../../assets/tongyilixiang.png" style="width:80px">
								<img v-if="i.commentTab.id==3" src="../../assets/tongyishanghui.png" style="width:80px">
								<img v-if="i.commentTab.id==4" src="../../assets/tongyitouzi.png" style="width:80px">
							</div>
							<!-- <div class="note-label note-label2">
								{{i.commentTab.name}}
							</div> -->
						</div>
						<div class="right-cont">
							{{i.content}}
						</div>
					</div>
					<div style="margin-bottom:10px;" v-if="i.commentTab.id==1" class='note-left'>
						<div class="block-cont">
							<!-- <div class="cont-img">
								<img :src="i.photo.url" style="width:100%;height:100%">
							</div> -->
							<div class="cont-word" style="margin-top:2px;">
								<span class="name">{{i.user.name}}</span>
								<!-- <span style="margin-left:10px;">{{i.user.position}}（{{i.user.address}}）</span><br>
								<span>{{i.create_time}}</span> -->
							</div>
							<div class="note-label">
								{{i.commentTab.name}}
								<img src="../../assets/fangtanjilu.png" style="width:80px">
							</div>
						</div>
						<div class="clearfix">
							<div class="talk-detail">
								会议日期：{{formatDate(i.date)}}
							</div>
							<div class="talk-detail">
								会议地点：{{i.address}}
							</div>
							<div class="talk-detail">
								访谈对象：{{i.object}}
							</div>
							<div class="talk-detail">
								参与者：{{i.member}}
							</div>
						</div>
						<div class="talk-cont" style="word-break:break-all;word-warp:break-word">
							{{i.content}}
						</div>
					</div>
				</div>
			</div>
		</div>
		<el-dialog title="重置密码" v-model="dialogFormVisible">
		  	<el-form :model="formAlignRight">
			  	<el-form-item style="text-align:center">
		      		<el-input auto-complete="off" class="edit-input" placeholder="原密码" type="password" v-model="oldpass"></el-input>
		    	</el-form-item>
		    	<el-form-item>
		      		<el-input auto-complete="off" class="edit-input" placeholder="新密码" type="password" v-model="newpass"></el-input>
		   		 </el-form-item>
		    	<el-form-item>
		      		<el-input auto-complete="off" class="edit-input" placeholder="再次输入新密码" type="password"v-model="newpass2"></el-input>
		    	</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer" style="text-align:center">
			  	<div class="button grey" style="margin-right:15px;" @click="dialogFormVisible = false">取消</div>
			  	<div class="button blue" @click="changepass()">确定</div>
			</div>
		</el-dialog>
	</div>
</template>
<script>
	import {updatePassword} from '../../ajax/post.js'
	import {getUser,getNoteList,getNoteListByUserId} from '../../ajax/get.js'
	export default {
	    data() {
	      return {
	      	oldpass:'',
	      	newpass:'',
	      	newpass2:'',
	      	list:'',
	      	url:'',
	      	position:'',
	      	user:'',
	        formAlignRight: {
	          name: '',
	          region: '',
	          type: ''
	        },
	        dialogFormVisible: false
	      };
	    },
	    methods:{
	    	formatDate(time){
	    	  var   x = time - 0
	    	  console.log(x)
			  var   now = new Date(x) 
			  var   year = now.getFullYear();     
			  var   month = "0" + (now.getMonth()+1);     
			  var   date = "0" +(now.getDate());         
			  return   year+"-"+month.substr(-2)+"-"+date.substr(-2)  
			},
	    	changepass(){
	    		if (this.oldpass=="") {
		    		swal({
	                    title: "",
	                    type: 'warning',
	                    text: "请输入原密码",
	                    timer: 2000,
	                })
		    	}
		    	else if (this.newpass=="") {
		    		swal({
	                    title: "",
	                    type: 'warning',
	                    text: "请输入新密码",
	                    timer: 2000,
	                })
		    	}
		    	else if (this.newpass2=="") {
		    		swal({
	                    title: "",
	                    type: 'warning',
	                    text: "请确认",
	                    timer: 2000,
	                })
		    	}
		    	else if(this.newpass!=this.newpass2){
		    		swal({
	                    title: "",
	                    type: 'warning',
	                    text: "确认密码有误",
	                    timer: 2000,
	                })
		    	}
		    	else{
		    		updatePassword({
		    			userId:this.user.id,
		    			prePass:this.oldpass,
		    			password:this.newpass
		    		}).then((res) => {
		    			if (res) {
		    				swal({
			                    title: "",
			                    type: 'success',
			                    text: "修改成功",
			                    timer: 2000,
			                })
		    			}
		    			else{
		    				swal({
			                    title: "",
			                    type: 'warning',
			                    text: "原密码输入有误",
			                    timer: 2000,
			                })
		    			}
		    			this.dialogFormVisible = false
					}) 
		    	}	
	    	},
	    	getnote(){
	    		getNoteListByUserId().then((res) => {
	    			this.list = res.data
				}) 
	    	},
	    	getuser(){
		        getUser().then((res) => {
		          this.user = res.data.user
		          this.url = res.data.user.photo.url
		          this.position = res.data.user.role.roleName
		          this.getnote()
		        })
		    }
	    },
	    mounted:function(){
	    	this.getuser()
	    }
	}
</script>
<style lang="less">
	.note-left{
		.talk-detail{
			&:nth-child(2n){
				margin-left: 1%;
			}
			margin-bottom: 3px;
			height: 30px;
			background-color: #f1f2f7;
			float: left;
			width: 49.5%;
			padding: 0px 10px;
			line-height: 30px;
		}
		.talk-cont{
			padding: 10px 5px;
			font-size: 14px;
			color: #333;
			width: 100%;
			border: 4px solid #f1f2f7;
			min-height: 100px;
		}
	}
	.person{
		.edit-input.el-input{
			margin: 0 auto;
			width: 350px;
		}
		.el-dialog__body{
			padding-bottom: 0px;
		}
	}
	.person-box{
		width: 100%;
		min-height: 200px;
		background-color: #fff;
	    box-shadow: 0 0 4px 0 rgba(44, 77, 109, 0.2);
	    margin-top: 25px;
	    padding: 20px 0px;
	    .sum-item{
	    	width: 95%;
	    }
	    .resetpass{
	    	cursor: pointer;
	    	text-align: center;
	    	color: #4990e2;
	    	text-decoration: underline;
	    }
	    .el-form-item {
		     margin-bottom: 0px; 
		}
	    .info-box{
	    	padding: 0px 10px;
	    	width: 280px;
	    	min-height: 290px;
	    	border: 4px solid #f1f2f7;
	    	.el-form-item {
			     margin-bottom: 0px; 
			}
	    	img{
	    		display:block;
	    		margin: 20px auto;
	    		width: 60px;
	    		height: 60px;
	    	}
	    }
	}
	
	.block-cont{
		margin-bottom: 3px;
		background-color: #f1f2f7;
		height: 60px;
		padding: 10px;
		.note-label{
			margin-top: 3px;
			float: right;
			color: #fff;
			// padding: 8px 16px;
			// background-color: #5ac0de;
		}
		.note-label2{
			// background-color: #51ccb3;
		}
	}
	.right-cont{
		font-size: 14px;
		padding: 5px;
		width: 100%;
		border: 4px solid #f1f2f7;
		// min-height: 100px;
	}
	.information{
		width: 300px;
		float: left;
	}
</style>