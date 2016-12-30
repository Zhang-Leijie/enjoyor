<template>
	<div>
		<div class="fund-summary" style="padding:40px;">
		  <el-form :model="form">
		    <el-form-item label="独角兽潜力" :label-width="formLabelWidth">
		      <el-input auto-complete="off" class="pl-input"></el-input>
		    </el-form-item>
		    <el-form-item label="千亿市场" :label-width="formLabelWidth">
		      <el-input auto-complete="off" class="pl-input"></el-input>
		    </el-form-item>
		    <el-form-item label="前两名机会" :label-width="formLabelWidth">
		      <el-input auto-complete="off" class="pl-input"></el-input>
		    </el-form-item>
		    <el-form-item label="银江生态" :label-width="formLabelWidth">
		      <el-input auto-complete="off" class="pl-input"></el-input>
		    </el-form-item>
		    <el-form-item label="变现造血能力" :label-width="formLabelWidth">
		      <el-input auto-complete="off" class="pl-input"></el-input>
		    </el-form-item>
		    <el-form-item label="复制和扩张" :label-width="formLabelWidth">
		      <el-input auto-complete="off" class="pl-input"></el-input>
		    </el-form-item>
		    <el-form-item label="CEO综合" :label-width="formLabelWidth">
		      <el-input auto-complete="off" class="pl-input"></el-input>
		    </el-form-item>
		    <el-form-item label="团队运营" :label-width="formLabelWidth">
		      <el-input auto-complete="off" class="pl-input"></el-input>
		    </el-form-item>
		    <el-form-item label="估值性价比" :label-width="formLabelWidth">
		      <el-input auto-complete="off" class="pl-input"></el-input>
		    </el-form-item>
		    <el-form-item label="融资退出" :label-width="formLabelWidth">
		      <el-input auto-complete="off" class="pl-input"></el-input>
		    </el-form-item>
		  </el-form>
		  <div  class="dialog-footer" style="text-align:center">
		  	<div class="button blue">保存</div>
		  </div>
	</div>
</template>
<style lang="less">
	.pl-input{
		margin-bottom: 0px;
	}
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
	

	export default {
	  data () {
	    return {
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
	        formLabelWidth: '100px'
	    }
	  },
	  methods:{
	  	
	  	
	  },
	  mounted:function() {
	  	
	  }
	}
</script>
