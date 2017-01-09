<template>
	<div>
		<div class="fund-summary" v-show="personal==false">
			<div class="edit" @click="dialogFormVisible = true">
				<i class="el-icon-edit"></i>
				评分
			</div>
			<div  class="ratechart" id='ratechart' >
				
			</div>
			<div class="sum-item">
				<div class="item-title">
					{{time}}
				</div>
			</div>
			<div class="rate-table">
				<div class="title">
					平均分：{{item_all}}/110
				</div>
				<div class="checkmore" style="cursor:pointer" @click="checkall">查看历史评分</div>
				<table class="tableStyle">
					<thead>
						<tr>
							<th style="width:120px;">{{quarter}}季度评估</th>
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
							<td>总分：{{item_all}}</td>
							<td>{{item_one}}</td>
							<td>{{item_two}}</td>
							<td>{{item_three}}</td>
							<td>{{item_four}}</td>
							<td>{{item_five}}</td>
							<td>{{item_six}}</td>
							<td>{{item_seven}}</td>
							<td>{{item_eight}}</td>
							<td>{{item_nine}}</td>
							<td>{{item_ten}}</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div v-for="i in personList">
				<div class="sum-item">
					<div class="item-title">
						{{i.updateTime}}
					</div>
				</div>
				<div class="rate-table" style="padding-top:50px;">
					<div class="block-cont" style="background-color:#fff;border:none;width:70%">
						<div class="cont-img" v-if="i.user.photo">
							<img :src="i.user.photo.url" style="width:100%;height:100%">	
						</div>
						<div class="cont-img" v-else>
							<img src="../../assets/touxiang.png" style="width:100%;height:100%">
						</div>
						<div class="cont-word" style="margin-top:2px;">
							<span class="name">{{i.user.name}}</span>
							<span style="margin-left:10px;">{{i.user.position}}（{{i.user.address}}）</span><br>
						</div>
					</div>
					<div class="checkmore" style="top:70px;cursor:pointer" @click="checkperson(i.user.id)">查看历史评分</div>
					<table class="tableStyle">
						<thead>
							<tr>
								<th style="width:120px;">{{i.quarter}}季度评估</th>
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
								<td>总分：{{(i.item_all-0)/10}}</td>
								<td>{{(i.item_one-0)/10}}</td>
								<td>{{(i.item_two-0)/10}}</td>
								<td>{{(i.item_three-0)/10}}</td>
								<td>{{(i.item_four-0)/10}}</td>
								<td>{{(i.item_five-0)/10}}</td>
								<td>{{(i.item_six-0)/10}}</td>
								<td>{{(i.item_seven-0)/10}}</td>
								<td>{{(i.item_eight-0)/10}}</td>
								<td>{{(i.item_nine-0)/10}}</td>
								<td>{{(i.item_ten-0)/10}}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
		<el-dialog title="项目评分" v-model="dialogFormVisible">
		  <el-form :model="form">
		    <el-form-item label="独角兽潜力" :label-width="formLabelWidth">
		      <el-input auto-complete="off" v-model="itemown_one" placeholder="请输入独角兽潜力评分(满分10分)"></el-input>
		    </el-form-item>
		    <el-form-item label="千亿市场" :label-width="formLabelWidth">
		      <el-input auto-complete="off" v-model="itemown_two" placeholder="请输入千亿市场评分(满分10分)"></el-input>
		    </el-form-item>
		    <el-form-item label="前两名机会" :label-width="formLabelWidth">
		      <el-input auto-complete="off" v-model="itemown_three" placeholder="请输入前两名机会评分(满分10分)"></el-input>
		    </el-form-item>
		    <el-form-item label="银江生态" :label-width="formLabelWidth">
		      <el-input auto-complete="off" v-model="itemown_four" placeholder="请输入银江生态评分(满分10分)"></el-input>
		    </el-form-item>
		    <el-form-item label="变现造血能力" :label-width="formLabelWidth">
		      <el-input auto-complete="off" v-model="itemown_five" placeholder="请输入变现造血能力评分(满分10分)"></el-input>
		    </el-form-item>
		    <el-form-item label="复制和扩张" :label-width="formLabelWidth">
		      <el-input auto-complete="off" v-model="itemown_six" placeholder="请输入复制和扩张评分(满分10分)"></el-input>
		    </el-form-item>
		    <el-form-item label="CEO综合" :label-width="formLabelWidth">
		      <el-input auto-complete="off" v-model="itemown_seven" placeholder="请输入CEO综合评分(满分15分)"></el-input>
		    </el-form-item>
		    <el-form-item label="团队运营" :label-width="formLabelWidth">
		      <el-input auto-complete="off" v-model="itemown_eight" placeholder="请输入团队运营评分(满分10分)"></el-input>
		    </el-form-item>
		    <el-form-item label="估值性价比" :label-width="formLabelWidth">
		      <el-input auto-complete="off" v-model="itemown_nine" placeholder="请输入估值性价比评分(满分10分)"></el-input>
		    </el-form-item>
		    <el-form-item label="融资退出" :label-width="formLabelWidth">
		      <el-input auto-complete="off" v-model="itemown_ten" placeholder="请输入融资退出评分(满分15分)"></el-input>
		    </el-form-item>
		  </el-form>
		  <div slot="footer" class="dialog-footer" style="text-align:center">
		  	<div class="button grey" style="margin-right:15px;" @click="dialogFormVisible = false">取消</div>
		  	<div class="button blue" @click="postRate">确定</div>
		  </div>
		</el-dialog>
		<div class="fund-summary" style="padding-top:60px;" v-show="personal==true">
			<div class="back" @click="personal=!personal">
				返回
			</div>
			<div v-for="i in allList">
				<div class="sum-item">
					<div class="item-title">
						{{i.updateTime}}
					</div>
				</div>
				<div class="rate-table" style="padding-top:50px;">
					<table class="tableStyle">
						<thead>
							<tr>
								<th style="width:120px;">{{i.quarter}}季度评估</th>
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
								<td>总分：{{(i.item_all-0)/10}}</td>
								<td>{{(i.item_one-0)/10}}</td>
								<td>{{(i.item_two-0)/10}}</td>
								<td>{{(i.item_three-0)/10}}</td>
								<td>{{(i.item_four-0)/10}}</td>
								<td>{{(i.item_five-0)/10}}</td>
								<td>{{(i.item_six-0)/10}}</td>
								<td>{{(i.item_seven-0)/10}}</td>
								<td>{{(i.item_eight-0)/10}}</td>
								<td>{{(i.item_nine-0)/10}}</td>
								<td>{{(i.item_ten-0)/10}}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	// 引入 ECharts 主模块
	var echarts = require('echarts/lib/echarts');
	//引入折线图
	require('echarts/lib/chart/line');
	// 引入提示框和标题组件
	require('echarts/lib/component/tooltip');
	require('echarts/lib/component/title');
	import { Rate } from '../../ajax/post.js'
	import { getRateList, getRatePList, getEvaluateRecordList} from '../../ajax/get.js'
	export default {
		props: {
			info: {
				type: Object
			},
			user:{
				type: Object
			}
		},
		data () {
		    return {
		    	allList:'',
		    	personList:'',
		      	personal:false,
		      	dialogTableVisible: false,
	        	dialogFormVisible: false,
	        	form: {
		          name: '',
		          region: '',
		          date1: '',
		          date2: '',
		          delivery: false,
		          type: [],
		          resource: '',
		          desc: ''
		        },
		        formLabelWidth: '100px',
		        itemown_one:'',
		        itemown_two:'',
		        itemown_three:'',
		        itemown_four:'',
		        itemown_five:'',
		        itemown_six:'',
		        itemown_seven:'',
		        itemown_eight:'',
		        itemown_nine:'',
		        itemown_ten:'',
		        itemown_all:'',
		        item_one:'',
		        item_two:'',
		        item_three:'',
		        item_four:'',
		        item_five:'',
		        item_six:'',
		        item_seven:'',
		        item_eight:'',
		        item_nine:'',
		        item_ten:'',
		        item_all:'',
		        time:'',
		        quarter:''
		    }
		},
		methods:{
			checkperson(id){
				getEvaluateRecordList({
		      		projectId:this.$route.query.id,
		      		userId:id,
		      		number:0
		      	}).then((res) => {
		      		this.allList = res.data.list
		      		this.personal=!this.personal
				}) 
			},
			checkall(){
				getRateList({
		      		projectId:this.$route.query.id,
		      		number:0
		      	}).then((res) => {
		      		this.allList = res.data.list
		      		this.personal=!this.personal
				}) 
			},
			postRate(){
				this.itemown_all = (this.itemown_one-0) + (this.itemown_two-0) + (this.itemown_three-0) + (this.itemown_four-0) + (this.itemown_five-0) + (this.itemown_six-0) +  (this.itemown_seven-0) + (this.itemown_eight-0) + (this.itemown_nine-0) + (this.itemown_ten-0)
				Rate({
					strEvaluate:JSON.stringify({
			      		project:{
			      			id:this.$route.query.id
			      		},
			      		item_one:Math.floor((this.itemown_one-0)*10),
			      		item_two:Math.floor((this.itemown_two-0)*10),
			      		item_three:Math.floor((this.itemown_three-0)*10),
			      		item_four:Math.floor((this.itemown_four-0)*10),
			      		item_five:Math.floor((this.itemown_five-0)*10),
			      		item_six:Math.floor((this.itemown_six-0)*10),
			      		item_seven:Math.floor((this.itemown_seven-0)*10),
			      		item_eight:Math.floor((this.itemown_eight-0)*10),
			      		item_nine:Math.floor((this.itemown_nine-0)*10),
			      		item_ten:Math.floor((this.itemown_ten-0)*10),
			      		item_all:Math.floor((this.itemown_all-0)*10)
		      		})
		      	}).then((res) => {
		      		this.getList()
		      		this.getPersonList()
					swal({
	                    title: "评价成功",
	                    type: 'success',
	                    text: "评价成功",
	                    timer: 2000,
	                })
	                this.dialogFormVisible = false
				}).catch((e) => {
	                swal({
	                    title: "输入有误",
	                    type: 'warn',
	                    text: "输入有误",
	                    timer: 2000,
	                })
	            }) 
			},	
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
			        	name:'',
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
			           	},
			           	max:'15'
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
			            data: [this.item_one,this.item_two,this.item_three,this.item_four,this.item_five,this.item_six,this.item_seven,this.item_eight,this.item_nine,this.item_ten],
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
		  	},
		  	getList(){
				getRateList({
		      		projectId:this.$route.query.id,
		      		number:1
		      	}).then((res) => {
		      		if (res.data.list[0]) {
		      			this.item_one = (res.data.list[0].item_one/10)
		      			this.item_two = (res.data.list[0].item_two/10)
		      			this.item_three = (res.data.list[0].item_three/10)
		      			this.item_four = (res.data.list[0].item_four/10)
		      			this.item_five = (res.data.list[0].item_five/10)
		      			this.item_six = (res.data.list[0].item_six/10)
		      			this.item_seven = (res.data.list[0].item_seven/10)
		      			this.item_eight = (res.data.list[0].item_eight/10)
		      			this.item_nine = (res.data.list[0].item_nine/10)
		      			this.item_ten = (res.data.list[0].item_ten/10)
		      			this.item_all = (this.item_one-0) + (this.item_two-0) + (this.item_three-0) + (this.item_four-0) + (this.item_five-0) + (this.item_six-0) +  (this.item_seven-0) + (this.item_eight-0) + (this.item_nine-0) + (this.item_ten-0)
		      			this.time = res.data.list[0].updateTime
		      			this.quarter = res.data.list[0].quarter
		      		}
		      		this.getDate()
				}) 
			},
			getPersonList(){
				getRatePList({
		      		projectId:this.$route.query.id,
		      		number:1
		      	}).then((res) => {
		      		this.personList = res.data.list
				}) 
			}
		},
		mounted:function() {
		  	this.getList()
		  	this.getPersonList()
		}
	}
</script>
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
