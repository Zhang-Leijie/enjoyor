<template>
	<div>
		<el-breadcrumb separator="/">
		  	<el-breadcrumb-item>
		  	<span style="margin-left:5px;position:relative;padding-left:13px;">
		  		<i class="iconfont icon-shouye" style="position:absolute;font-size:18px;left:-5px;top:-1px;"></i>主页</span>
		  	</el-breadcrumb-item>
		  	<el-breadcrumb-item>基金列表</el-breadcrumb-item>
		</el-breadcrumb>
		<table class="tableStyle" style="margin-top:25px;">
			<thead>
				<tr>
					<th>序号</th>
					<th>基金名称</th>
					<th>基金负责人</th>
					<th>基金金额</th>
					<th>项目数量</th>
					<th>授权人数（投资人）</th>
				</tr>
			</thead>
			<tbody>
				<router-link tag="tr" :to="{name:'fund-inlist',query:{id:i.id,name:i.name}}" v-for="(i,index) in lists">
					<td>{{index+1}}</td>
					<td><router-link :to="{name:'fund-inlist',query:{id:i.id,name:i.name}}" class="link">{{i.name}}</router-link></td>
					<td>{{i.responsibility}}</td>
					<td>{{i.money}}</td>
					<td>{{i.list_project.length}}</td>
					<td>{{i.list_user.length}}</td>
				</router-link>
			</tbody>
		</table>
	</div>
</template>
<script>
	import {Item} from '../../ajax/post.js'
	import {getFoundationList} from '../../ajax/get.js'
	export default {
		data() {
	      	return {
	      		lists:''
	      	}
	    },
	    methods:{
	    	getfundlist(){
		    	var self = this
		    	getFoundationList().then((res) => {
					this.lists = res.data.list
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