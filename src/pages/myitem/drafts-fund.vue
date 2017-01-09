<template>
	<div>
		<el-breadcrumb separator="/">
		  	<el-breadcrumb-item><i class="el-icon-menu"></i><span style="margin-left:5px;">主页</span></el-breadcrumb-item>
		  	<el-breadcrumb-item>我的项目</el-breadcrumb-item>
		  	<el-breadcrumb-item>我的草稿箱</el-breadcrumb-item>
		</el-breadcrumb>
		<el-tabs type="card" @tab-click="handleClick" @tab-remove="handleRemove" style="width:100%;margin-top:25px;">
		    <el-tab-pane label="项目概要">
		    	<div class="fund-box">
		    		<F_Summary></F_Summary>
		    	</div>
			</el-tab-pane>
		    <el-tab-pane label="项目资料">
		    	<div class="fund-box">
		    		<F_Data></F_Data>
		    	</div>
		    </el-tab-pane>
		    <el-tab-pane label="项目笔记">
		    	<div class="fund-box">
		    		<F_Note></F_Note>
		    	</div>
		    </el-tab-pane>
		    <el-tab-pane label="项目评级">
		    	<div class="fund-box">
		    		<F_Rate></F_Rate>
		    	</div>
		    </el-tab-pane>
		    <el-tab-pane label="项目视频">
		    	<div class="fund-box">
		    		<F_Video></F_Video>
		    	</div>
		    </el-tab-pane>
		    <el-tab-pane label="项目进展">
		    	<div class="fund-box">
		    		<F_Process></F_Process>
		    	</div>
		    </el-tab-pane>
	  	</el-tabs>
	</div>
</template>
<script>
  import  F_Summary from '../../components/fund/fund-summary'
  import  F_Data from '../../components/fund/fund-data'
  import  F_Note from '../../components/fund/fund-note'
  import  F_Probar from '../../components/fund/fund-procbar'
  import  F_Rate from '../../components/fund/fund-rate'
  import  F_Video from '../../components/fund/fund-video'
  import  F_Process from '../../components/fund/fund-process'
  export default {
    methods: {
      handleRemove(tab) {
        console.log(tab);
      },
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    components: {
	    F_Summary,
	    F_Data,
	    F_Note,
	    F_Probar,
	    F_Rate,
	    F_Video,
	    F_Process
	}
  };
</script>
<style lang="less">
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
		width: 140px;
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