<template>
	<div class="fund-inlist">
		<el-breadcrumb separator="/">
		  	<el-breadcrumb-item :to="{ name: 'main' }"><i class="el-icon-menu"></i><span style="margin-left:5px;">主页</span></el-breadcrumb-item>
		  	<el-breadcrumb-item>我的项目</el-breadcrumb-item>
		  	<el-breadcrumb-item>已发布项目</el-breadcrumb-item>
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
					<!-- <th>序号</th> -->
					<th style="width:150px;">项目名称</th>
					<th>地点</th>
					<th>项目来源</th>
					<th>项目阶段</th>
					<th>项目负责人</th>
					<th>所属基金</th>
					<th>分值</th>
					<th>项目节点</th>
					<!-- <th>操作</th> -->
				</tr>
			</thead>
			<tbody>
				<tr v-for="(list,index) in lists">
					<!-- <td>{{index+1}}</td> -->
					<td class="fabu">
						<router-link :to="{name: 'my-popedit',query:{id:list.id}}" class="link">{{list.project_name}}</router-link>
					</td>
					<td>{{list.project_address}}</td>
					<td>{{list.project_resource}}</td>
					<td>{{list.project_stage}}</td>
					<td>{{list.createUser.userName}}</td>
					<td v-if="list.foundation">{{list.foundation.name}}</td>
					<td v-else></td>
					<td v-if="list.evaluateAvg">{{list.evaluateAvg.item_all}}</td>
					<td v-else></td>
					<td>{{list.project_schedule_name}}</td>
					<!-- <td class="fabu" @click="fabu">发布</td> -->
				</tr>
			</tbody>
		</table>
		<el-pagination v-if="intotal"
	      @size-change="handleSizeChange"
	      @current-change="handleCurrentChange"
	      :current-page="currentPage"
	      :page-size="10"
	      layout="total , prev, pager, next, jumper"
	      :total='intotal'
	      style="margin:20px auto;text-align:center">
	    </el-pagination>
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
	import {Item} from '../../ajax/post.js'
	import {itemList} from '../../ajax/get.js'
	export default {
	    data() {
	      return {
	      	lists:'',
	      	intotal:'',
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
	        formLabelWidth: '80px',
	        currentPage: 1
	      }
	    },
	    methods:{
	    	fabu(){

	    	},
	    	getList(){
	    		itemList({
    				project_type:4,
    				page:1,
    				line:10
    			}).then((res) => {
    				res.data.list.forEach(function(list){
    					if (list.project_schedule==0) {
    						list.project_schedule_name = '项目录入'
    					}
    					else if(list.project_schedule==1){
    						list.project_schedule_name = '同意立项'
    					}
    					else if(list.project_schedule==2){
    						list.project_schedule_name = '同意上会'
    					}
    					else if(list.project_schedule==3){
    						list.project_schedule_name = '已上会'
    					}
    					else if(list.project_schedule==4){
    						list.project_schedule_name = '同意投资'
    					}
    					else if(list.project_schedule==5){
    						list.project_schedule_name = '协议签订'
    					}
    					else if(list.project_schedule==6){
    						list.project_schedule_name = '出资'
    					}
    					else if(list.project_schedule==7){
    						list.project_schedule_name = '投后管理'
    					}
    					else if(list.project_schedule==8){
    						list.project_schedule_name = '退出投资'
    					}
    				})
					this.lists = res.data.list
					this.intotal = parseInt(res.data.count)
				})    
	    	},
	    	gocreat(){
	    		if (this.itemname!="") {
	    			Item({
	    				type:0,
	    				strProject:JSON.stringify({
	    					project_name:this.itemname
	    				})
	    			}).then((res) => {
						router.push({name: 'my-creat',query:{id:res.data.projectId}})
					})    			
	    		}
	    		else{
	    			this.$message({
			          message: '请输入项目名',
			          type: 'warning'
			        })
	    		}
	    	},
	    	handleSizeChange(val) {
		        console.log(`每页 ${val} 条`);
		    },
		    handleCurrentChange(val) {
		        this.currentPage = val;
		        console.log(`当前页: ${val}`);
		        itemList({
    				project_type:0,
    				page:val,
    				line:10
    			}).then((res) => {
					this.lists = res.data.list
					this.intotal = parseInt(res.data.count)
				})  
		    }
	    },
	    mounted:function(){
	    	this.getList()
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
			z-index: 999;
			top: 120px;
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
	.fabu{
		&:hover{
			color: #4990e2;
			cursor: pointer;
		}
	}
</style>
