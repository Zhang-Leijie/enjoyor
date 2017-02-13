<template>
	<div class="clearfix" style="margin-bottom:50px;">
		<router-link :to="{name: 'my-edit',query:{id:$route.query.id}}" class="link" v-if="user==1">
			<div class="edit">
				<i class="el-icon-edit"></i>
				编辑
			</div>
		</router-link>
		<div class="note-process">
			<div class="unfinish">
				
			</div>
			<div class="finish" v-bind:class="{width1:process==1,width2:process==2,width3:process==3,width4:process==4,width5:process==5,width6:process==6,width7:process==7,width8:process==8,width9:process==9}">
				
			</div>
			<div class="finish-cont">
				<div class="process-cir process-border" style="float:left">
					<i class="el-icon-check" v-if="process>0"></i>
					<div class="process-word">
						项目录入
					</div>
				</div>
				<div class="process-cir process-border" style="float:left;margin-left:77px;">
					<i class="el-icon-check" v-if="process>1"></i>
					<div class="process-word">
						同意立项
					</div>
				</div>
				<div class="process-cir process-border" style="float:left;margin-left:77px;">
					<i class="el-icon-check" v-if="process>2"></i>
					<div class="process-word">
						同意上会
					</div>
				</div>
				<div class="process-cir process-border" style="float:left;margin-left:77px;">
					<i class="el-icon-check" v-if="process>3"></i>
					<div class="process-word" style="left:-40%">
						已上会
					</div>
				</div>
				<div class="process-cir process-border" style="float:left;margin-left:77px;">
					<i class="el-icon-check" v-if="process>4"></i>
					<div class="process-word">
						同意投资
					</div>
				</div>
				<div class="process-cir process-border" style="float:left;margin-left:77px;">
					<i class="el-icon-check" v-if="process>5"></i>
					<div class="process-word">
						协议签订
					</div>
				</div>
				<div class="process-cir process-border" style="float:left;margin-left:77px;">
					<i class="el-icon-check" v-if="process>6"></i>
					<div class="process-word" style="left:-10%">
						出资
					</div>
				</div>
				<div class="process-cir process-border" style="float:left;margin-left:77px;">
					<i class="el-icon-check" v-if="process>7"></i>
					<div class="process-word">
						投后管理
					</div>
				</div>
				<div class="process-cir">
					<i class="el-icon-check" v-if="process>8"></i>
					<div class="process-word">
						退出投资
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import {itemDetail,getUser} from '../../ajax/get.js'
import {Item} from '../../ajax/post.js'

	export default {
	  	data () {
	    	return {
	    		process:'',
	    		user:''
	    	}
	  	},
	  	methods:{
	  		getInfo(){
		      	itemDetail({
					id:this.$route.query.id
				}).then((res) => {
					this.process = res.data.project.project_schedule-0+1
				}) 
		    },
		    rate(){
		    	Item({
					type:2,
					strProject:JSON.stringify({
						id:this.$route.query.id,
						project_schedule:this.process-0-1
					})
				}).then((res) => {
					this.getInfo()
					swal({
		                title: "编辑进度成功",
		                type: 'success',
		                text: "编辑进度成功",
		                timer: 2000,
		            })
				}) 
		    },
		    getuser(){
			   		getUser().then((res) => {
						this.user = res.data.user.role.authority.project_edit
					})
			}
	  	},
	  	mounted:function(){
	  		this.getuser()
	  		this.getInfo()
	  	}
	}
</script>
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
			width: 0%;
			height: 24px;
			background-image:linear-gradient(-90deg, #b5fa72 0%, #20b4ac 62%, #4990e2 100%);
			border-radius:24px;
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