<template>
	<div class="fund-note">
		<div class="edit" style="z-index:999;position:fixed;top:500px;right:0px;opacity:0.8" @click="dialogFormVisible = true">
			发表评论
		</div>
		<F_Probar></F_Probar>
		<div class="note-left">
			<div>
				<div class="block-cont">
					<div class="cont-img">
						<img src="../../assets/touxiang.png" style="width:100%;height:100%">
					</div>
					<div class="cont-word" style="margin-top:2px;">
						<span class="name">林颗颗</span>
						<span style="margin-left:10px;">投资经理（北京）</span><br>
						<span>2016/11/30 12:38</span>
					</div>
					<div class="note-label">
						访谈记录
					</div>
				</div>
				<div class="clearfix">
					<div class="talk-detail">
						会议日期：2016/11/28
					</div>
					<div class="talk-detail">
						会议地点：北京
					</div>
					<div class="talk-detail">
						访谈对象：赵雷
					</div>
					<div class="talk-detail">
						参与者：赵宝强
					</div>
				</div>
				<div class="talk-cont">
					2016年第四季度商业规划<br><br><br><br>

					内部团队构建<br><br>
					前期的大量的产品研发及铺垫，现阶段营收逐步增加，将在第四季度开始新建市场部及重组运营部，加大产品的推广力度，全面创收。<br><br>
					二、产品及运营（重点）：<br><br>
					产品研发：<br><br>
					开展商务合作、数据接口合作，研发构建数据仓库，将有价值的数据资料进行打包销售；<br><br>
					2.以数据挖掘分析为基础，研发新产品，如根据数据统计分析的股票池展示、交易所资金数据统计分析等。<br><br><br>
					运营推广:常规基础运营+内容运营<br><br>
				</div>
			</div>
		</div>
		<div class="note-right">
			<div style="margin-bottom:10px;">
				<div class="block-cont n-margin">
					<div class="cont-img">
						<img src="../../assets/touxiang.png" style="width:100%;height:100%">
					</div>
					<div class="cont-word" style="margin-top:2px;">
						<span class="name">林森</span>
						<span style="margin-left:10px;">投资总监（上海）</span><br>
						<span>2016/11/30 12:38</span>
					</div>
					<div class="note-label note-label2">
						投资点评
					</div>
				</div>
				<div class="right-cont">
					云财经跟进：1、律师需要跟进关于对赌条款的理解；2、深度跟踪云财经和爱股票的导流，并协助黄拓总拓展渠道（黄总偏技术，需要打磨）；3、云财经需要合伙人级别的市场、商务及产品的人员，我们应
				</div>
			</div>
			<div style="margin-bottom:10px;">
				<div class="block-cont n-margin">
					<div class="cont-img">
						<img src="../../assets/touxiang.png" style="width:100%;height:100%">
					</div>
					<div class="cont-word" style="margin-top:2px;">
						<span class="name">林森</span>
						<span style="margin-left:10px;">投资总监（上海）</span><br>
						<span>2016/11/30 12:38</span>
					</div>
					<div class="note-label note-label2">
						投资点评
					</div>
				</div>
				<div class="right-cont">
					大数据应用于证券行业的先行者，联通了行情信息，新闻数据从而形成了独特的证券搜索业务。互联网金融与大数据结合的优质尝试。
				</div>
			</div>
			<div style="margin-bottom:10px;">
				<div class="block-cont n-margin">
					<div class="cont-img">
						<img src="../../assets/touxiang.png" style="width:100%;height:100%">
					</div>
					<div class="cont-word" style="margin-top:2px;">
						<span class="name">林森</span>
						<span style="margin-left:10px;">投资总监（上海）</span><br>
						<span>2016/11/30 12:38</span>
					</div>
					<div class="note-label note-label2">
						投资点评
					</div>
				</div>
				<div class="right-cont">
					产品内容及运营手段融合，在传播产品内容时进行品牌的逐步渗透（如通过专业的文章数据分析进行软广传播），不再只靠开展单一的促销活动吸引眼球。<br>
					各端口界面及功能的迭代，增强各端口的稳定性，同时结合用户使用
				</div>
			</div>
		</div>
		<el-dialog title="发布评论" v-model="dialogFormVisible">
		  <el-form :model="form">
		    <el-form-item>
		      <el-select v-model="form.region" placeholder="请选择类型" style="width:220px;height:40px;">
		        <el-option label="访谈记录" value="1"></el-option>
		        <el-option label="投资点评" value="2"></el-option>
		      </el-select>
		    </el-form-item>
		  </el-form>
		  <div v-if="form.region==1">
			  	<el-date-picker v-model="value1" type="date" placeholder="选择日期" class="pl-input">
		    	</el-date-picker >
		    	<el-input placeholder="请输入会议地点" class="pl-input"></el-input>
		    	<el-input placeholder="请输入访谈对象" class="pl-input"></el-input>
		    	<el-input placeholder="参与者" class="pl-input"></el-input>
		    	<textarea class="pl-textarea">
    	  </div>
    	  <div v-if="form.region==2">
    	  		<textarea class="pl-textarea"></textarea>
    	  </div> 	  
		  <div slot="footer" class="dialog-footer" style="text-align:center">
		  	<div class="button grey" style="margin-right:15px;" @click="dialogFormVisible = false">取消</div>
		  	<div class="button blue" @click="dialogFormVisible = false">确定</div>
		  </div>
		</el-dialog>
	</div>
</template>
<script>
	import {itemDetail,getUser} from '../../ajax/get.js'
	import {Item} from '../../ajax/post.js'
  	import  F_Probar from './fund-procbar'
	export default {
		props: {
			info: {
				type: Object
			}
		},
	  	data () {
		    return {
		        value1: '',
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
		        formLabelWidth: '80px'
		    }
		},
	    methods: {
	    	getuser(){
	    			getUser().then((res) => {				
				}) 
	    	}	        
	    },
	    mounted:function(){
	    	this.getuser()
	    },
	    components: {
		    F_Probar
		}
	};
</script>
<style lang="less">
	.el-dialog.el-dialog--small{
		width: 600px;
	}
	.el-dialog__body{
		padding: 30px 40px 0px;
	}
	.pl-input{
		&:nth-child(2n){
			margin-left: 5px;
		}
		display: inline-block;
		width: 255px;
		height: 40px;
		// float: left;
		margin-bottom: 20px;
	}
	.pl-textarea{
		width: 100%;
		height: 200px;
		border:1px solid #c0ccda;
		padding: 10px;
		font-size: 14px;
	}
	.fund-note{
		position: relative;
		padding: 20px;	
		.note-right{
			width: 49%;
			float: right;
			.right-cont{
				font-size: 14px;
				padding: 5px;
				width: 100%;
				border: 4px solid #f1f2f7;
				// min-height: 100px;
			}
		}
		.note-left{
			width: 49%;
			float: left;
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
			padding: 8px 16px;
			background-color: #5ac0de;
		}
		.note-label2{
			background-color: #51ccb3;
		}
	}
</style>