<template>
	<div>
		<el-breadcrumb separator="/">
		  	<el-breadcrumb-item>
		  	<span style="margin-left:5px;position:relative;padding-left:13px;">
		  		<i class="iconfont icon-shouye" style="position:absolute;font-size:18px;left:-5px;top:-1px;"></i>主页</span>
		  	</el-breadcrumb-item>
		  	<el-breadcrumb-item>项目统计</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="fund-summary" style="padding-top:20px;margin-top:20px;background-color:white;border: 1px solid #d3dce6;box-shadow: 0 0 4px 0 rgba(44, 77, 109, 0.2)">
			<div class="sum-item clearfix" style="height:40px;">
				<div class="item-title">
					已投项目
				</div>
			</div>
			<div class="rate-table">
				<table class="tableStyle">
					<thead>
						<tr>
							<th>名称</th>
							<th>项目数量</th>
							<th>投资总额</th>
							<th>估值总额</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="i in type0">
							<td>{{i.foundation_name}}</td>
							<td>{{i.project_count}}</td>
							<td>{{i.money_thisTime}}万元</td>
							<td>{{i.valuation_afterInvest}}万元</td>
						</tr>
						<tr>
							<td>总计</td>
							<td>{{type0_number}}</td>
							<td>{{type0_money}}万元</td>
							<td>{{type0_valuation}}万元</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="sum-item clearfix" style="height:40px;">
				<div class="item-title">
					退出项目
				</div>
			</div>
			<div class="rate-table">
				<table class="tableStyle">
					<thead>
						<tr>
							<th>名称</th>
							<th>退出项目数量</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="i in type1.list">
							<td>{{i.foundation_name}}</td>
							<td>{{i.project_count}}</td>
						</tr>
						<tr>
							<td>本月</td>
							<td>{{type1.month}}</td>
						</tr>
						<tr>
							<td>本年</td>
							<td>{{type1.year}}</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="sum-item clearfix" style="height:40px;">
				<div class="item-title">
					未投项目
				</div>
			</div>
			<div class="rate-table">
				<table class="tableStyle">
					<thead>
						<tr>
							<th>总计</th>
							<th>同意立项项目</th>
							<th>同意上会项目</th>
							<th>已上会项目</th>
							<th>同意投资项目</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{{(type2.one-0)+(type2.two-0)+(type2.three-0)+(type2.four-0)}}</td>
							<td>{{type2.one}}</td>
							<td>{{type2.two}}</td>
							<td>{{type2.three}}</td>
							<td>{{type2.four}}</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="sum-item clearfix" style="height:40px;">
				<div class="item-title">
					新增项目统计
				</div>
			</div>
			<div class="rate-table">
				<table class="tableStyle">
					<thead>
						<tr>
							<th>本月</th>
							<th>本年</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{{type3.month}}</td>
							<td>{{type3.year}}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>
<script>
import {getType0,getType1,getType2,getType3} from '../../ajax/get.js'

export default {
    data() {
        return {
        	type0:'',
        	type0_number:0,
        	type0_money:0,
        	type0_valuation:0,
        	type1:'',
        	type2:'',
        	type3:''
        }
    },
    methods: {
    
    },
    mounted:function(){
    	var self = this
    	getType0().then((res) => {
    		this.type0 = res.data
    		res.data.forEach(function(list){
    			self.type0_number = self.type0_number+(list.project_count-0)
    			self.type0_money = self.type0_money+(list.money_thisTime-0)
    			self.type0_valuation = self.type0_valuation+(list.valuation_afterInvest-0)
    		})
		})
		getType1().then((res) => {
    		this.type1 = res.data
		})
		getType2().then((res) => {
    		this.type2 = res.data
		})
		getType3().then((res) => {
    		this.type3 = res.data
		}) 
    }
}
</script>
<style lang="less" scoped>
	.rate-table{
		text-align: center;
		width: 95%;
		margin: 10px auto;
		position: relative;
		.title{
			font-size: 18px;
			color: #666;
		}
		.checkmore{
			color: #4990e2;
			position: absolute;
			right: 0px;
			top: 10px;
		}
	}
</style>
