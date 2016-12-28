<template>
	<div>
		<el-breadcrumb separator="/">
		  	<el-breadcrumb-item :to="{ name: 'main' }"><i class="el-icon-menu"></i><span style="margin-left:5px;">主页</span></el-breadcrumb-item>
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
				<tr v-for="(i,index) in 10">
					<td>0{{index+1}}</td>
					<td><router-link :to="{name:'fund-inlist'}" class="link">基金A</router-link></td>
					<td>张三</td>
					<td>100000000</td>
					<td>30</td>
					<td>100</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<style lang="less">
	.link{
		&:hover{
			color: #4990e2;
		}
	}
</style>