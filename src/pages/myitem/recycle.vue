<template>
	<div class="fund-inlist">		
		<el-breadcrumb separator="/">
		  	<el-breadcrumb-item>
		  	<span style="margin-left:5px;position:relative;padding-left:13px;">
		  		<i class="iconfont icon-shouye" style="position:absolute;font-size:18px;left:-5px;top:-1px;"></i>主页</span>
		  	</el-breadcrumb-item>
		  	<el-breadcrumb-item>我的项目</el-breadcrumb-item>
		  	<el-breadcrumb-item>我的回收站</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="inlist-search clearfix" v-if="highsearch==true">
			<input type="text" class="fund-input" placeholder="项目名称或编码" style="float:left" v-model="search.namecode">
			<div class="button grey" style="float:left;margin-left:15px;" @click="getsearchList">
				查询
			</div>
			<div class="button grey" style="float:left;margin-left:15px;" @click="reset">
				重置
			</div>
			<div class="button blue" style="float:right" @click="highsearch=false">
				高级搜索
			</div>
			<div class="button blue" style="float:right;margin-right:10px;" @click="clearAll">
				清空回收站
			</div>
		</div>
		<div class="inlist-highsearch" v-else>
			<el-input placeholder="项目名称或编码" class="searinfo" v-model="search.namecode"></el-input>
			<el-date-picker type="date" class="searinfo" v-model="search.timeB" placeholder="选择日期"></el-date-picker>
			<span style="margin-right:20px;">至</span>			
			<el-date-picker type="date" class="searinfo" v-model="search.timeE" placeholder="选择日期"></el-date-picker>
			<el-select v-model="search.schedule" placeholder="项目节点" class="searinfo2">
				<el-option
			      label="全部"
			      :value="10000">
			    </el-option>
			    <el-option
			      v-for="item in options1"
			      :label="item.label"
			      :value="item.value">
			    </el-option>
			</el-select>
			<!-- <el-select v-model="search.project_type" placeholder="项目分类" class="searinfo2">
			    <el-option
			      v-for="item in options2"
			      :label="item.label"
			      :value="item.value">
			    </el-option>
			</el-select> -->
			<el-select v-model="search.address" placeholder="项目地点" class="searinfo2" filterable>
				<el-option
			      label="无"
			      :value="undefined">
			    </el-option>
			    <el-option
			      v-for="item in city"
			      :label="item"
			      :value="item">
			    </el-option>
			</el-select>
			<!-- <el-input placeholder="项目地点" class="searinfo2" v-model="search.address"></el-input> -->
			<el-select v-model="search.resource" placeholder="项目来源" class="searinfo2">
			<el-option
			      label="全部"
			      :value="10000">
			    </el-option>
			    <el-option
			      v-for="item in options3"
			      :label="item.label"
			      :value="item.value">
			    </el-option>
			</el-select>
			<el-select v-model="search.userId" placeholder="项目负责人" class="searinfo2" style="margin-right:0px;">
			<el-option
			      label="全部"
			      :value="10000">
			    </el-option>
			    <el-option
			      v-for="item in options4"
			      :label="item.label"
			      :value="item.value">
			    </el-option>
			</el-select>
			<div class="btns clearfix">
				<div class="button blue" style="margin-right:20px" @click="getsearchList">
					查询
				</div>
				<div class="button blue" @click="reset">
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
					<th>操作</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(list,index) in lists">
					<td>{{index+1}}</td>
					<td class="fabu">
						<router-link :to="{name: 'my-creat',query:{id:list.id}}" class="link">{{list.project_name}}</router-link>
					</td>
					<td>{{list.province_name}}{{list.city_name}}</td>
					<td>{{list.project_resource}}</td>
					<td>{{list.project_stage}}</td>
					<td>{{list.createUser.name}}</td>
					<td v-if="list.foundation">{{list.foundation.name}}</td>
					<td v-else></td>
					<td v-if="list.evaluateAvg">{{list.evaluateAvg.item_all/10/list.evaluateAvg.number}}</td>
					<td v-else></td>
					<td>{{list.project_schedule_name}}</td>
					<td>
						<span @click="fabu(list.id)" class="link" style="cursor:pointer">还原</span>
						<span @click="deleteitem(list.id)" class="link" style="cursor:pointer">删除</span>
					</td>
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
	import {Item, deleteProject ,recoverProject ,cleanRecycleBin} from '../../ajax/post.js'
	import {itemList,getUserList,getSearchCityList} from '../../ajax/get.js'
	export default {
	    data() {
	      return {
	      	city:"",
	      	search:{
	      		namecode:null,
	      		timeB:null,
	      		timeE:null,
	      		schedule:null,
	      		project_type:0,
	      		address:null,
	      		resource:null,
	      		userId:null
	      	},
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
	        currentPage: 1,
	        options1:[{
	        	value: '0',
	          	label: '项目录入'
	        },{
	        	value: '1',
	          	label: '同意立项'
	        },{
	        	value: '2',
	          	label: '同意上会'
	        },{
	        	value: '3',
	          	label: '已上会'
	        },{
	        	value: '4',
	          	label: '同意投资'
	        },{
	        	value: '5',
	          	label: '协议签订'
	        },{
	        	value: '6',
	          	label: '出资'
	        },{
	        	value: '7',
	          	label: '投后管理'
	        },{
	        	value: '8',
	          	label: '退出投资'
	        }],
	        options2:[{
	        	value: 2,
	          	label: '已投'
	        },{
	          	value: 3,
	          	label: '退出'
	        }],
	        options3: [{
			      value: '朋友推荐',
			      label: '朋友推荐'
			  }, {
			      value: '管理或合作基金',
			      label: '管理或合作基金'
			  }, {
			      value: '创业比赛',
			      label: '创业比赛'
			  }, {
			      value: '创业比赛',
			      label: '创业比赛'
			  }, {
			      value: '高校创业',
			      label: '高校创业'
			  }, {
			      value: '技术成果转化',
			      label: '技术成果转化'
			  }, {
			      value: '大公司高管创业',
			      label: '大公司高管创业'
			  }, {
			      value: '投资圈合投',
			      label: '投资圈合投'
			  }, {
			      value: '孵化器/加速器/创客空间',
			      label: '孵化器/加速器/创客空间'
			  }, {
			      value: '创业园区',
			      label: '创业园区'
			  }, {
			      value: '项目路演活动',
			      label: '项目路演活动'
			  }, {
			      value: 'FA',
			      label: 'FA'
			  }, {
			      value: '投资机构推送',
			      label: '投资机构推送'
			  }, {
			      value: '微信群/朋友圈',
			      label: '微信群/朋友圈'
			  }, {
			      value: '创业学院',
			      label: '创业学院'
			  }, {
			      value: '个人/公司邮箱',
			      label: '个人/公司邮箱'
			  }, {
			      value: '股东/高管推送',
			      label: '股东/高管推送'
			  }],
			options4:[]
	      }
	    },
	    methods:{
	    	getCityList(){
		    	getSearchCityList({
		    		type:0,
		    		foundationId:0
		    	}).then((res) => {
					this.city = res.data.list
				}) 
		    },
		    clearAll(){
		    	var self = this
		    	swal({
			        title: "确定删除全部",
			        text: "确定删除全部？",
			        type: "warning",
			        showCancelButton: true,
			        confirmButtonColor: "#DD6B55",
			        confirmButtonText: "是",
			        cancelButtonText: "否",
			        closeOnConfirm: true,
			        html: false
			    }, function(){
			        cleanRecycleBin().then((res) => {
						swal({
		                    title: "删除成功",
		                    type: 'success',
		                    text: "删除成功",
		                    timer: 2000,
		                })
		                self.getList()
					})
			    })
		    },
	    	deleteitem(id){
	    		var self= this
	    		swal({
			        title: "确定删除",
			        text: "确定删除？",
			        type: "warning",
			        showCancelButton: true,
			        confirmButtonColor: "#DD6B55",
			        confirmButtonText: "是",
			        cancelButtonText: "否",
			        closeOnConfirm: true,
			        html: false
			    }, function(){
			        recoverProject({
			        	type:1,
	    				projectId:id
	    			}).then((res) => {
						swal({
		                    title: "删除成功",
		                    type: 'success',
		                    text: "删除成功",
		                    timer: 2000,
		                })
		                self.getList()
					})
			    })
	    	},
	    	reset(){
	    		this.search={
		      		namecode:null,
		      		timeB:null,
		      		timeE:null,
		      		schedule:null,
		      		project_type:0,
		      		address:null,
		      		resource:null,
		      		userId:null
		      	}
		      	this.getList()
	    	},
	    	fabu(id){
	    		recoverProject({
    				type:0,
    				projectId:id
    			}).then((res) => {
					swal({
	                    title: "还原成功",
	                    type: 'success',
	                    text: "还原成功",
	                    timer: 2000,
	                })
	                this.getList()
				}) 
	    	},
	    	getUserList(){
		    	getUserList({
					type:3
				}).then((res) => {
					var self = this
					res.data.list.forEach(function(list){
						self.options4.push({
							label:list.name,
							value:list.id
						})
					})
				}) 
		    },
		    getsearchList(){
		    	function FormatDate (strTime) {
				    var date =(new Date(strTime)).valueOf();
				    return date
				}
				var timeB
				var timeE
				if (this.search.timeB==null) {
					timeB = null					
				}
				else{
					timeB = FormatDate(this.search.timeB);
				}
				if (this.search.timeE==null) {
					timeE = null
				}
				else{
					timeE = FormatDate(this.search.timeE);
				}
				var data={
					project_type:6,
					page:1,
    				line:10
				}
				if (this.search.project_type) {
					data.project_type=this.search.project_type
				}
				if (this.search.namecode) {
					data.nameorcode = this.search.namecode
				}
				if (timeB) {
					data.begin_time = timeB
				}
				if (timeE) {
					data.end_time = timeE
				}
				if (this.search.schedule&&this.search.schedule!='10000') {
					data.schedule = this.search.schedule
				}
				if (this.search.address) {
					data.address = this.search.address
				}
				if (this.search.resource&&this.search.resource!='10000') {
					data.resource = this.search.resource
				}
				if (this.search.userId&&this.search.userId!='10000') {
					data.userId = this.search.userId
				}
	    		itemList(data).then((res) => {
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
	    	getList(){
	    		itemList({
    				project_type:6,
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
	    	
	    	handleSizeChange(val) {
		        console.log(`每页 ${val} 条`);
		    },
		    handleCurrentChange(val) {
		        this.currentPage = val;
		        console.log(`当前页: ${val}`);
		        function FormatDate (strTime) {
				    var date =(new Date(strTime)).valueOf();
				    return date
				}
				var timeB
				var timeE
				if (this.search.timeB==null) {
					timeB = null					
				}
				else{
					timeB = FormatDate(this.search.timeB);
				}
				if (this.search.timeE==null) {
					timeE = null
				}
				else{
					timeE = FormatDate(this.search.timeE);
				}
				var data={
					project_type:6,
					page:val,
    				line:10
				}
				if (this.search.project_type) {
					data.project_type=this.search.project_type
				}
				if (this.search.namecode) {
					data.nameorcode = this.search.namecode
				}
				if (timeB) {
					data.begin_time = timeB
				}
				if (timeE) {
					data.end_time = timeE
				}
				if (this.search.schedule&&this.search.schedule!='10000') {
					data.schedule = this.search.schedule
				}
				if (this.search.address) {
					data.address = this.search.address
				}
				if (this.search.resource&&this.search.resource!='10000') {
					data.resource = this.search.resource
				}
				if (this.search.userId&&this.search.userId!='10000') {
					data.userId = this.search.userId
				}
	    		itemList(data).then((res) => {
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
		    }
	    },
	    mounted:function(){
	    	this.getList()
	    	this.getUserList()
	    	this.getCityList()
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
			position: fixed;
			top: 400px !important;
			right: 0px !important;
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
	.link{
		&:hover{
			color: #4990e2;
		}
	}
</style>
