<template>
	<div class="fund-inlist">		
		<div class="edit addnew" @click="dialogFormVisible = true">
			创建项目
		</div>
		<el-breadcrumb separator="/">
		  	<el-breadcrumb-item :to="{ name: 'main' }"><i class="el-icon-menu"></i><span style="margin-left:5px;">主页</span></el-breadcrumb-item>
		  	<el-breadcrumb-item>我的项目</el-breadcrumb-item>
		  	<el-breadcrumb-item>我的草稿箱</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="tableType">
			列表形式: <span>默认</span><span>项目图标</span> <span>投资基金</span> <span>投资评级</span> 
		</div>
		<div class="inlist-search clearfix" v-if="highsearch==true">
			<input type="text" class="fund-input" placeholder="项目名称或编码" style="float:left">
			<div class="button grey" style="float:left;margin-left:15px;">
				查询
			</div>
			<div class="button grey" style="float:left;margin-left:15px;">
				重置
			</div>
			<div class="button blue" style="float:right" @click="highsearch=false">
				高级搜索
			</div>
		</div>
		<div class="inlist-highsearch" v-else>
			<el-input placeholder="项目名称或编码" class="searinfo"></el-input>
			<el-date-picker type="date" class="searinfo" v-model="value1" placeholder="选择日期" :picker-options="pickerOptions0"></el-date-picker>
			<span style="margin-right:20px;">至</span>			
			<el-date-picker type="date" class="searinfo" v-model="value2" placeholder="选择日期" :picker-options="pickerOptions0"></el-date-picker>
			<el-select v-model="svalue1" placeholder="项目节点" class="searinfo2">
			    <el-option
			      v-for="item in options"
			      :label="item.label"
			      :value="item.value">
			    </el-option>
			</el-select>
			<el-select v-model="svalue2" placeholder="项目分类" class="searinfo2">
			    <el-option
			      v-for="item in options"
			      :label="item.label"
			      :value="item.value">
			    </el-option>
			</el-select>
			<el-select v-model="svalue3" placeholder="项目地点" class="searinfo2">
			    <el-option
			      v-for="item in options"
			      :label="item.label"
			      :value="item.value">
			    </el-option>
			</el-select>
			<el-select v-model="svalue4" placeholder="项目来源" class="searinfo2">
			    <el-option
			      v-for="item in options"
			      :label="item.label"
			      :value="item.value">
			    </el-option>
			</el-select>
			<el-select v-model="svalue5" placeholder="项目负责人" class="searinfo2" style="margin-right:0px;">
			    <el-option
			      v-for="item in options"
			      :label="item.label"
			      :value="item.value">
			    </el-option>
			</el-select>
			<div class="btns clearfix">
				<div class="button blue" style="margin-right:20px">
					查询
				</div>
				<div class="button blue">
					重置
				</div>
			</div>
			<div class="close" @click="highsearch=true">
				<i class="el-icon-close i-close"></i>
			</div>
		</div>
		<table class="tableStyle" style="margin-top:25px;">
			<thead>
				<tr>
					<th>序号</th>
					<th style="width:150px;">项目名称</th>
					<th>地点</th>
					<th>项目来源</th>
					<th>项目阶段</th>
					<th>项目负责人</th>
					<th>所属基金</th>
					<th>分值</th>
					<th>项目节点</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(i,index) in 10">
					<td>0{{index+1}}</td>
					<td><router-link :to="{name:'my-draftsfund'}" class="link">云财经（A股大数据）</router-link></td>
					<td>深圳</td>
					<td>天使投资全合投</td>
					<td>天使轮</td>
					<td>赵建国</td>
					<td>赵基金A</td>
					<td>88.0</td>
					<td>投后管理</td>
				</tr>
			</tbody>
		</table>
		<el-dialog title="创建项目" v-model="dialogFormVisible">
		  <el-form>
		    <el-form-item>
		      	<el-input placeholder="请输入项目名称" v-model="itemname"></el-input>
		    </el-form-item>
		  </el-form>
		  <div slot="footer" class="dialog-footer" style="text-align:center">
		  	<div class="button grey" style="margin-right:15px;" @click="dialogFormVisible = false">取消</div>
		  	<div class="button blue" @click="gocreat()">确定</div>
		  </div>
		</el-dialog>
	</div>
</template>
<script>
	export default {
	    data() {
	      return {
	        pickerOptions0: {
	          disabledDate(time) {
	            return time.getTime() < Date.now() - 8.64e7;
	          }
	        },
	        value1: '',
	        value2: '',
	        svalue1: '',
	        svalue2: '',
	        svalue3: '',
	        svalue4: '',
	        svalue5: '',
	        options: [{
	          value: '选项1',
	          label: '选项1'
	        }, {
	          value: '选项2',
	          label: '选项2'
	        }],
	        highsearch:true,
	        dialogTableVisible: false,
        	dialogFormVisible: false,
        	itemname:"",
	        formLabelWidth: '80px'
	      }
	    },
	    methods:{
	    	gocreat(){
	    		if (this.itemname!="") {
	    			this.dialogFormVisible = false,
	    			router.push({name: 'my-creat'})
	    		}
	    		else{
	    			this.$message({
			          message: '请输入项目名',
			          type: 'warning'
			        })
	    		}
	    	}
	    }
	}
</script>
<style lang="less">
	.fund-inlist{
		position: relative;
		.tableType{
			position: absolute;
			right: 0px;
			top: 0px;
			font-size: 12px;
			color: #666;
			span{
				margin-left: 15px;
				cursor: pointer;
			}
		}
		.addnew{
			top: 300px;
			right: -20px;
			opacity: 0.8
		}
	}
	.fund-input{
		border: 1px solid #ccc;
		width: 240px;
		height: 40px;
		padding: 12px 10px;
	}
</style>
