<template>
	<div>
		<el-breadcrumb separator="/">
		  	<el-breadcrumb-item>
		  	<span style="margin-left:5px;position:relative;padding-left:13px;">
		  		<i class="iconfont icon-shouye" style="position:absolute;font-size:18px;left:-5px;top:-1px;"></i>主页
		  	</span>
		  	</el-breadcrumb-item>
		  	<el-breadcrumb-item>项目统计</el-breadcrumb-item>
		  	<el-breadcrumb-item>项目评级统计</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="inlist-search clearfix">
			<el-select placeholder="基金列表" class="searinfo2" v-model="fond">
				<el-option
			      label="全部基金"
			      :value="null">
			    </el-option>
			    <el-option
			      v-for="item in searchlist.data0"
			      :label="item[1]"
			      :value="item[0]">
			    </el-option>
			</el-select>
			<el-select placeholder="项目地点" class="searinfo2" v-model="local">
				<el-option
			      label="全部地点"
			      :value="null">
			    </el-option>
			    <el-option
			      v-for="item in searchlist.data1"
			      :label="item"
			      :value="item">
			    </el-option>
			</el-select>
			<el-select placeholder="项目标签" class="searinfo2" v-model="label">
				<el-option
			      label="全部标签"
			      :value="null">
			    </el-option>
			    <el-option
			      v-for="item in searchlist.data2"
			      :label="item[1]"
			      :value="item[0]">
			    </el-option>
			</el-select>
			<el-select placeholder="项目负责人" class="searinfo2" v-model="user">
				<el-option
			      label="全部负责人"
			      :value="null">
			    </el-option>
			    <el-option
			      v-for="item in searchlist.data3"
			      :label="item[1]"
			      :value="item[0]">
			    </el-option>
			</el-select>
			<div class="button blue" style="float:left;margin-left:15px;" @click="getInfo">
				查询
			</div>
			<div class="button blue" style="float:left;margin-left:15px;" @click="reset">
				重置
			</div>
		</div>
		<div  class="ratechart2" id='ratechart1'></div>
		<div  class="ratechart2" id='ratechart2'></div>
	</div>
</template>
<script>
	// 引入 ECharts 主模块
	var echarts = require('echarts/lib/echarts');
	//引入折线图
	require('echarts/lib/chart/pie');
	// 引入提示框和标题组件
	require('echarts/lib/component/tooltip');
	require('echarts/lib/component/title');
	import { statistics_project,getSearchList } from '../../ajax/get.js'
	export default {
	    data() {
	        return {
	        	fond:null,
	        	local:null,
	        	user:null,
	        	label:null,
	        	searchlist:'',
	            onelabel:[],
	            twolabel:[],
	            threelabel:[],
	        }
	    },
	    methods: {
	    	getsearchlist(){
	    		getSearchList().then((res) => {
                    this.searchlist = res      
                })  
	    	},
	    	reset(){
	    		this.fond = null,
	    		this.local = null,
	    		this.user = null,
	    		this.label = null,
	    		this.getInfo()
	    	},
	    	getInfo(){
	    		var self = this
	    		this.onelabel = [],
	    		this.twolabel = [],
	    		this.threelabel = [],
	    		statistics_project({
	    			type:2,
	    			foundationId:this.fond,
	    			city:this.local,
	    			userId:this.user,
	    			vocationId:this.label
	    		}).then((res) => {
                    res.data.forEach(function(list){
                    	self.onelabel.push({value:list[0],name:list[2]})
                    	self.twolabel.push({value:list[1],name:list[2]})
                    })
                    this.getDateone() 
                    this.getDatetwo()
                })         
	    	},
	        getDateone(){
	        	var myChart = echarts.init(document.getElementById('ratechart1'))
	        	myChart.setOption({
				    title : {
				        text: '评级与项目数量',
				        // subtext: '纯属虚构',
				        x:'center'
				    },
				    tooltip : {
				        trigger: 'item',
				        formatter: "{a} <br/>{b} : {c} ({d}%)"
				    },
				    legend: {
				        orient: 'vertical',
				        left: 'left',
				        // data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
				    },
				    series : [
				        {
				            name: '评级',
				            type: 'pie',
				            radius : '55%',
				            center: ['50%', '60%'],
				            data:this.onelabel,
				            itemStyle: {
				                emphasis: {
				                    shadowBlur: 10,
				                    shadowOffsetX: 0,
				                    shadowColor: 'rgba(0, 0, 0, 0.5)'
				                }
				            }
				        }
				    ]
				})
	        },
	        getDatetwo(){
	        	var myChart = echarts.init(document.getElementById('ratechart2'))
	        	myChart.setOption({
				    title : {
				        text: '评级与投资金额',
				        // subtext: '纯属虚构',
				        x:'center'
				    },
				    tooltip : {
				        trigger: 'item',
				        formatter: "{a} <br/>{b} : {c} ({d}%)"
				    },
				    legend: {
				        orient: 'vertical',
				        left: 'left',
				        // data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
				    },
				    series : [
				        {
				            name: '评级',
				            type: 'pie',
				            radius : '55%',
				            center: ['50%', '60%'],
				            data:this.twolabel,
				            itemStyle: {
				                emphasis: {
				                    shadowBlur: 10,
				                    shadowOffsetX: 0,
				                    shadowColor: 'rgba(0, 0, 0, 0.5)'
				                }
				            }
				        }
				    ]
				})
	        }
	    },
	    mounted:function(){
	    	this.getInfo()
	    	this.getsearchlist()
	    }
	}
</script>
<style lang="less" scoped>

.searinfo{
	margin-right: 20px;
	display: inline-block;
	width: 240px;
	height: 40px;
}
.searinfo2{
	float: left;
	margin-right: 10px;
	margin-bottom: 10px;
	display: inline-block;
	width: 168px;
	height: 40px;
	.el-input{
		height: 40px;
	}
	.el-input__inner{
		height: 40px !important;
	}
}
.ratechart2{
	display: inline-block;
	width: 49%;
	margin-top: 20px;
	height: 350px;
}
</style>
