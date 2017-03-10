<template>
	<div>
		<el-breadcrumb separator="/">
		  	<el-breadcrumb-item>
		  	<span style="margin-left:5px;position:relative;padding-left:13px;">
		  		<i class="iconfont icon-shouye" style="position:absolute;font-size:18px;left:-5px;top:-1px;"></i>主页</span>
		  	</el-breadcrumb-item>
		  	<el-breadcrumb-item>上会项目列表</el-breadcrumb-item>
		</el-breadcrumb>
		<table class="tableStyle" style="margin-top:25px;">
			<thead>
				<tr>
					<th style="width:150px;">项目名称</th>
					<th>地点</th>
					<th>项目来源</th>
					<th>项目阶段</th>
					<th>项目负责人</th>
					<th>所属基金</th>
					<th>分值</th>
					<th>项目节点</th>
					<th style="width:150px;">操作</th>
				</tr>
			</thead>
			<tbody>
				<!-- <router-link tag="tr" :to="{name:'fund-item',query:{id:i.id}}" v-for="(i,index) in lists"> -->
				<tr v-for="(list,index) in lists">
					<td class="fabu">
						<router-link :to="{name: 'fund-detail',query:{id:list.project_id,type:4}}" class="link">{{list.project_name}}</router-link>
					</td>
					<td>{{list.province_name}}{{list.city_name}}</td>
					<td>{{list.project_resource}}</td>
					<td>{{list.project_stage}}</td>
					<td>{{list.user_name}}</td>
					<td>{{list.foundation_name}}</td>
					<!-- <td v-else></td> -->
					<td>{{list.item_all/10}}</td>
					<!-- <td v-else></td> -->
					<td>{{list.project_schedule_name}}</td>
					<td>
						<router-link :to="{name: 'fund-detail',query:{id:list.project_id,type:4}}" class="link">查看</router-link>
					</td>
				</tr>
				<!-- </router-link> -->
			</tbody>
		</table>
	</div>
</template>
<script>
	import {Item} from '../../ajax/post.js'
	import {getFoundationList,getProjectListFromMeeting} from '../../ajax/get.js'
	export default {
		data() {
	      	return {
	      		lists:'',
	      		all:''
	      	}
	    },
	    methods:{
	    	paixu(){
	    		var arr = []
	    		this.lists.forEach(function(list){
	    			arr.push(list.project_id)
	    		})
	    		var ids = arr.join(',')
	    		meetingProjectListSequence({
		    		ids:ids
		    	}).then((res) => {
					swal({
	                    title: "排序成功",
	                    type: 'success',
	                    text: "排序成功",
	                    timer: 2000,
	                })
	                this.getfundlist()
				})
	    	},
	    	itemdel(id){
	    		var self = this
	    		swal({
			        title: "",
			        text: "确定移除上会项目",
			        type: "warning",
			        showCancelButton: true,
			        confirmButtonColor: "#DD6B55",
			        confirmButtonText: "是",
			        cancelButtonText: "否",
			        closeOnConfirm: true,
			        html: false
			    }, function(){
		    		saveorupdateMeeting({
			    		type:1,
			    		projectId:id
			    	}).then((res) => {
			    		self.getfundlist()
						swal({
		                    title: "删除成功",
		                    type: 'success',
		                    text: "删除成功",
		                    timer: 2000,
		                })
					})
				})
	    	},
	    	itemup(index){
	    		this.lists[index] = this.lists.splice((index-0-1),1,this.lists[index])[0]
	    	},
	    	itemdown(index){
	    		this.lists[index] = this.lists.splice((index-0+1),1,this.lists[index])[0]
	    	},
	    	getfundlist(){
		    	var self = this
		    	getProjectListFromMeeting().then((res) => {
		    		res.list.forEach(function(list){
    					if (list.project_schedule==0) {
    						list.project_schedule_name = '项目录入'
    					}
    					else if(list.project_schedule==1){
    						list.project_schedule_name = '同意立项'
    					}
    					else if(list.project_schedule==2){
    						list.project_schedule_name = '同意上会'
    					}
    					else if(list.project_schedule==3){
    						list.project_schedule_name = '已上会'
    					}
    					else if(list.project_schedule==4){
    						list.project_schedule_name = '同意投资'
    					}
    					else if(list.project_schedule==5){
    						list.project_schedule_name = '协议签订'
    					}
    					else if(list.project_schedule==6){
    						list.project_schedule_name = '出资'
    					}
    					else if(list.project_schedule==7){
    						list.project_schedule_name = '投后管理'
    					}
    					else if(list.project_schedule==8){
    						list.project_schedule_name = '退出投资'
    					}
    				})
					this.lists = res.list
					this.all = res.list.length
				}) 
		    }
	    },
	    mounted:function(){
	    	this.getfundlist()
	    }
	}
</script>
<style lang="less">
	.link{
		&:hover{
			color: #4990e2;
		}
	}
</style>