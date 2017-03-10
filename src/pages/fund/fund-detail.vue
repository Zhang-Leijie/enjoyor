<template>
	<div>
		<el-breadcrumb separator="/" style="float:left">
		  	<el-breadcrumb-item>
		  		<span style="margin-left:5px;position:relative;padding-left:13px;">
		  		<i class="iconfont icon-shouye" style="position:absolute;font-size:18px;left:-5px;top:-1px;"></i>主页
		  		</span>
		  	</el-breadcrumb-item>
		  	<el-breadcrumb-item v-if="$route.query.type==1" :to="{ name: 'fund-list' }">基金列表</el-breadcrumb-item>
		  	<el-breadcrumb-item v-if="$route.query.type==1" :to="{name:'fund-inlist',query:{id:$route.query.listid,name:$route.query.name}}">项目列表</el-breadcrumb-item>
		  	<el-breadcrumb-item v-if="$route.query.type==2" :to="{name:'fund-unlist'}">项目列表</el-breadcrumb-item>
		  	<el-breadcrumb-item v-if="$route.query.type==3" :to="{name:'fund-invest'}">项目列表</el-breadcrumb-item>
		  	<el-breadcrumb-item v-if="$route.query.type==4" :to="{name:'fund-meeting'}">项目列表</el-breadcrumb-item>
		  	<el-breadcrumb-item>项目</el-breadcrumb-item>
		</el-breadcrumb>
		<!-- <a href="javascript:history.back(-1)">
			<div class="blue button" style="float:right">返回</div>
		</a> -->
		<el-tabs type="card" @tab-click="handleClick" @tab-remove="handleRemove" style="width:100%;padding-top:25px;">
		    <el-tab-pane label="项目概要">
		    	<div class="fund-box">
		    		<f-summary :info="info" :user="user" v-if="info.id&&user.id"></f-summary>
		    		<!-- <f-summary></f-summary> -->
		    	</div>
			</el-tab-pane>
		    <el-tab-pane label="项目资料">
		    	<div class="fund-box">
		    		<f-data :info="info" :user="user" v-if="info.id&&user.id"></f-data>
		    	</div>
		    </el-tab-pane>
		    <el-tab-pane label="项目笔记">
		    	<div class="fund-box">
		    		<f-note :info="info" :user="user" v-if="info.id&&user.id"></f-note>
		    	</div>
		    </el-tab-pane>
		    <el-tab-pane label="项目评级">
		    	<div class="fund-box">
		    		<f-rate :info="info" :user="user" v-if="info.id&&user.id"></f-rate>
		    	</div>
		    </el-tab-pane>
		    <el-tab-pane label="项目视频">
		    	<div class="fund-box">
		    		<f-video :info="info" :user="user" v-if="info.id&&user.id"></f-video>
		    	</div>
		    </el-tab-pane>
		    <el-tab-pane label="项目进展">
		    	<div class="fund-box">
		    		<f-process :info="info" :user="user" v-if="info.id&&user.id"></f-process>
		    	</div>
		    </el-tab-pane>
	  	</el-tabs>
	  	<!-- <div style="text-align:center;margin-top:15px;">
		  	<a href="javascript:history.back(-1)">
				<div class="blue button">返回</div>
			</a>
		</div> -->
	</div>
</template>
<script>
  import {itemDetail,getUserList,getUser} from '../../ajax/get.js'
  import  fSummary from '../../components/fund/fund-summary'
  import  fData from '../../components/fund/fund-data'
  import  fNote from '../../components/fund/fund-note'
  import  fProbar from '../../components/fund/fund-procbar'
  import  fRate from '../../components/fund/fund-rate'
  import  fVideo from '../../components/fund/fund-video'
  import  fProcess from '../../components/fund/fund-process'
  export default {
  	data() {
	    return {
	      	info:{},
	      	user:{}
	    }
	},
    methods: {
      handleRemove(tab) {
        console.log(tab);
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      getInfo(){
	      	itemDetail({
				id:this.$route.query.id
			}).then((res) => {
				this.info = res.data.project
			}) 
	   },
	   getuser(){
	   		getUser().then((res) => {
				this.user = res.data.user
			})
	   }
    },
    mounted:function(){
    	this.getInfo()
    	this.getuser()
    },
    components: {
	    "f-summary":fSummary,
	    "f-data":fData,
	    "f-note":fNote,
	    "f-rate":fRate,
	    "f-video":fVideo,
	    "f-process":fProcess,
	}
  };
</script>
<style lang="less">
	.el-tabs--card>.el-tabs__header>.el-tabs__item {
	    border: 1px solid #d3dce6;
	    transition: all .3s cubic-bezier(.645,.045,.355,1);
	}
	.el-tabs--card>.el-tabs__header>.el-tabs__item.is-active {
	    border: 1px solid #d1dbe5;
	    border-bottom-color: #fff;
	     border-radius: 8px 8px 0 0; 
	}
	.fund-box{
		min-height: 300px;
	}
	.el-tabs__header{
		margin: 0px;
	}
	.el-tabs__content{
		border: 1px solid #d3dce6;
		border-top: none;
		background-color: #fff;
		box-shadow:0 0 4px 0 rgba(44,77,109,0.20);
	}
	.el-tabs__item{
		width: 15%;
		text-align: center;
		font-size: 14px;
		color: #333;
		background-color: #f9f9f9;
	}
	.el-tabs__item.is-active{
		color: #333;
	}
	.el-tabs--card .el-tabs__item{
		border: 1px solid #d3dce6;
		border-radius: 8px 8px 0 0;
	}
	.el-tabs--card .el-tabs__item.is-active{
		background-color: #fff;
		border-bottom: none;
		border-radius: 8px 8px 0 0;
	}
</style>