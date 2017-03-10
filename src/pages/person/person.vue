<template>
	<div class="person">
		<el-breadcrumb separator="/">
		  	<el-breadcrumb-item :to="{ name: 'main' }"><i class="el-icon-menu"></i><span style="margin-left:5px;">主页</span></el-breadcrumb-item>
		  	<el-breadcrumb-item>个人中心</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="person-box" style="margin-top:25px;">
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
			</div>
			<table class="tableStyle" style="width:90%;margin:0 auto;margin-top:50px;">
				<thead>
					<tr>
						<th>项目名称</th>
						<th>操作</th>
						
					</tr>
				</thead>
				<tbody>
					<tr v-for="i in list">
						<td>{{i.project_name}}</td>
						<td>
							<router-link :to="{name:'person-note',query:{id:i.project_id}}" class="link">查看我的点评</router-link>
						</td>
					</tr>
				</tbody>
			</table>
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
	import {getUser,getNoteList,getNoteListByUserId,getProjectListByUser} from '../../ajax/get.js'
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
	    		getProjectListByUser().then((res) => {
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