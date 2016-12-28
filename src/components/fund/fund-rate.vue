<template>
	<div>
		<div class="fund-summary" v-show="personal==false">
			<div class="edit">
				<i class="el-icon-edit"></i>
				评级
			</div>
			<div  class="ratechart" id='ratechart'>
				
			</div>
			<div class="sum-item">
				<div class="item-title">
					2016/11/11  19:35:22
				</div>
			</div>
			<div class="rate-table">
				<div class="title">
					平均分：90/100
				</div>
				<div class="checkmore">查看历史评分</div>
				<table class="tableStyle">
					<thead>
						<tr>
							<th style="width:120px;">16年第4季评估</th>
							<th>独角兽潜力</th>
							<th>千亿市场</th>
							<th>前两名机会</th>
							<th>银江生态</th>
							<th>变现造血能力</th>
							<th>复制和扩张</th>
							<th>CEO综合</th>
							<th>团队运营</th>
							<th>估值性价比</th>
							<th>融资退出</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>总分：82</td>
							<td>7.2</td>
							<td>7.8</td>
							<td>6.6</td>
							<td>7.2</td>
							<td>9.8</td>
							<td>9.0</td>
							<td>6.0</td>
							<td>7.5</td>
							<td>5.9</td>
							<td>7.5</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="sum-item">
				<div class="item-title">
					2016/11/11  19:35:22
				</div>
			</div>
			<div class="rate-table" style="padding-top:30px;">
				<div class="block-cont" style="background-color:#fff;border:none;width:70%">
					<div class="cont-img">
						<img src="../../assets/touxiang.png" style="width:100%;height:100%">
					</div>
					<div class="cont-word" style="margin-top:2px;">
						<span class="name">林森</span>
						<span style="margin-left:10px;">投资总监（上海）</span><br>
						<span>2016/11/30 12:38</span>
					</div>
				</div>
				<div class="checkmore" style="top:70px;cursor:pointer" @click="personal=!personal">查看历史评分</div>
				<table class="tableStyle">
					<thead>
						<tr>
							<th style="width:120px;">16年第4季评估</th>
							<th>独角兽潜力</th>
							<th>千亿市场</th>
							<th>前两名机会</th>
							<th>银江生态</th>
							<th>变现造血能力</th>
							<th>复制和扩张</th>
							<th>CEO综合</th>
							<th>团队运营</th>
							<th>估值性价比</th>
							<th>融资退出</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>总分：82</td>
							<td>7.2</td>
							<td>7.8</td>
							<td>6.6</td>
							<td>7.2</td>
							<td>9.8</td>
							<td>9.0</td>
							<td>6.0</td>
							<td>7.5</td>
							<td>5.9</td>
							<td>7.5</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		<div class="fund-summary" style="padding-top:60px;" v-show="personal==true">
			<div class="back" @click="personal=!personal">
				返回
			</div>
			<div>
				<div class="sum-item">
					<div class="item-title">
						2016/11/11  19:35:22
					</div>
				</div>
				<div class="rate-table" style="padding-top:50px;">
					<table class="tableStyle">
						<thead>
							<tr>
								<th style="width:120px;">16年第4季评估</th>
								<th>独角兽潜力</th>
								<th>千亿市场</th>
								<th>前两名机会</th>
								<th>银江生态</th>
								<th>变现造血能力</th>
								<th>复制和扩张</th>
								<th>CEO综合</th>
								<th>团队运营</th>
								<th>估值性价比</th>
								<th>融资退出</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>总分：82</td>
								<td>7.2</td>
								<td>7.8</td>
								<td>6.6</td>
								<td>7.2</td>
								<td>9.8</td>
								<td>9.0</td>
								<td>6.0</td>
								<td>7.5</td>
								<td>5.9</td>
								<td>7.5</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div>
				<div class="sum-item">
					<div class="item-title">
						2016/11/11  19:35:22
					</div>
				</div>
				<div class="rate-table" style="padding-top:50px;">
					<table class="tableStyle">
						<thead>
							<tr>
								<th style="width:120px;">16年第4季评估</th>
								<th>独角兽潜力</th>
								<th>千亿市场</th>
								<th>前两名机会</th>
								<th>银江生态</th>
								<th>变现造血能力</th>
								<th>复制和扩张</th>
								<th>CEO综合</th>
								<th>团队运营</th>
								<th>估值性价比</th>
								<th>融资退出</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>总分：82</td>
								<td>7.2</td>
								<td>7.8</td>
								<td>6.6</td>
								<td>7.2</td>
								<td>9.8</td>
								<td>9.0</td>
								<td>6.0</td>
								<td>7.5</td>
								<td>5.9</td>
								<td>7.5</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div>
				<div class="sum-item">
					<div class="item-title">
						2016/11/11  19:35:22
					</div>
				</div>
				<div class="rate-table" style="padding-top:50px;">
					<table class="tableStyle">
						<thead>
							<tr>
								<th style="width:120px;">16年第4季评估</th>
								<th>独角兽潜力</th>
								<th>千亿市场</th>
								<th>前两名机会</th>
								<th>银江生态</th>
								<th>变现造血能力</th>
								<th>复制和扩张</th>
								<th>CEO综合</th>
								<th>团队运营</th>
								<th>估值性价比</th>
								<th>融资退出</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>总分：82</td>
								<td>7.2</td>
								<td>7.8</td>
								<td>6.6</td>
								<td>7.2</td>
								<td>9.8</td>
								<td>9.0</td>
								<td>6.0</td>
								<td>7.5</td>
								<td>5.9</td>
								<td>7.5</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="less">
	.ratechart{
		width: 1000px;
		margin: 40px auto 0;
		height: 350px;
	}
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
<script>
	// 引入 ECharts 主模块
	var echarts = require('echarts/lib/echarts');
	//引入折线图
	require('echarts/lib/chart/line');
	// 引入提示框和标题组件
	require('echarts/lib/component/tooltip');
	require('echarts/lib/component/title');

	export default {
	  data () {
	    return {
	      personal:false
	    }
	  },
	  methods:{
	  	getDate(){
	  		var myChart = echarts.init(document.getElementById('ratechart'))
			myChart.setOption({
		        title: {
		            
		        },
		        tooltip: {
		            trigger: 'axis'
		        },
		        xAxis: {
		        	type: 'category',
        			boundaryGap: false,
		        	name:'类型',
		            data: ['独角兽潜力','千亿市场','前两名机会','银江生态','变现造血能力','复制和扩张','CEO综合','团队运营','估值性价比','融资退出'],
		            splitLine: {
		                show: true,
		                interval:0
		            },
		            axisTick:{
		            	interval:0,
		            	length:1
		            }
		        },
		        yAxis: {
		        	type: 'value',
		        	name:'评分',
		            splitLine: {
		                show: false
		            },
		           	axisLine:{
		           		show:false
		           	},
		           	axisTick:{
		           		show:false,
		           		interval:0
		           	}
		        },
		        backgroundColor:{
		        	color:'#ceeffa'
		        },
		        toolbox: {
		            feature: {
			            saveAsImage: {}
			        },
			        itemsize:10
		        },
		        series: {
		            name: '得分',
		            type: 'line',
		            data: [7.2,7.8,6.6,7.2,9.8,9.0,6.0,7.5,5.9,7.5],
		            lineStyle:{
		            	normal:{
		            		color:'#3a92e2'
		            	}
		            },
		            itemStyle:{
		            	normal:{
		            		borderColor:'#3a92e2',
		            		borderWidth:2
		            	}		            	
		            },
		            areaStyle: {
		                normal: {
		                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
		                        offset: 0,
		                        color: '#61fcee'
		                    }, {
		                        offset: 1,
		                        color: '#679eff'                        
		                    }])
		                }
		            },
		            smooth:true
		        },
		        animation:false
		    });
	  	}
	  },
	  mounted:function() {
	  	this.getDate()
	  }
	}
</script>
