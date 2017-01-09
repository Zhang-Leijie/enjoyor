<template>
	<div class="fund-note" style="padding-left:0px;padding-right:0px">
		<F_Probar></F_Probar>
		<div class="sum-item">
			<div class="item-title">
				协议签署日期
			</div>
			<div class="item-content item-single">
				{{info.sign_date}}	
			</div>
		</div>
		<div class="sum-item">
			<div class="item-title">
				付款日期
			</div>
			<div class="item-content item-single">
				{{info.pay_date}}	
			</div>
		</div>
		<div class="sum-item">
			<div class="item-title">
				付款金额
			</div>
			<div class="item-content item-single">
				{{info.pay_money}}
			</div>
		</div>
		<div class="uploadcontent clearfix">	
			<div class="upload_block">
				<div class="upload_none" v-if="!xmjb">
					<i class="el-icon-upload" style="font-size:70px;margin-top:20px;"></i>
					<div>未上传</div>
				</div>
				<div class="upload_none" v-else>
					<div class="upload_img">
						<img :src="xmjb.img">
					</div>
					<div class="up_hover">
						<a class="white button" target="_blank" :href='xmjb.fileUrl'>下载</a>
					</div>
				</div>
				<div class="upload_name">项目简报</div>
			</div>
			<div class="upload_block">
				<div class="upload_none" v-if="!syjhs">
					<i class="el-icon-upload" style="font-size:70px;margin-top:20px;"></i>
					<div>未上传</div>
				</div>
				<div class="upload_none" v-else>
					<div class="upload_img">
						<img :src="syjhs.img">
					</div>
					<div class="up_hover">
						<a class="white button" target="_blank" :href='syjhs.fileUrl'>下载</a>
					</div>
				</div>
				<div class="upload_name">商业计划书</div>
			</div>
			<div class="upload_block">
				<div class="upload_none" v-if="!ts">
					<i class="el-icon-upload" style="font-size:70px;margin-top:20px;"></i>
					<div>未上传</div>
				</div>
				<div class="upload_none" v-else>
					<div class="upload_img">
						<img :src="ts.img">
					</div>
					<div class="up_hover">
						<a class="white button" target="_blank" :href='ts.fileUrl'>下载</a>
					</div>
				</div>
				<div class="upload_name">TS协议框架</div>
			</div>		
			<div style="float:left">
				<div class="clearfix">
					<div class="upload_block">
						<div class="upload_none" v-if="jdbg.length!=0" >
							<div class="upload_img">
								<img :src="jdbg[0].img">
							</div>
							<div class="up_hover" v-if="value&&user.role.authority.file_report==1">
								<a class="white button"  :href='value' target="_blank">下载</a>
							</div>
						</div>
						<div class="upload_none" v-else>
							<i class="el-icon-upload" style="font-size:70px;margin-top:20px;"></i>
							<div>未上传</div>
						</div>				
						<div class="upload_name">尽调报告</div>
					</div>
				</div>
				<div>
					<span style="font-size:14px;text-align:center">历史文件：</span>
					<el-select v-model="value" placeholder="请选择" style="width:130px">
					    <el-option
					      v-if="jdbg"
					      v-for="item in jdbg"
					      :label="item.label"
					      :value="item.value"
					      >
					    </el-option>
					</el-select>
				</div>
			</div>
			<div style="float:left">
				<div class="clearfix">
					<div class="upload_block">
						<div class="upload_none" v-if="zsxy.length!=0" >
							<div class="upload_img">
								<img :src="zsxy[0].img">
							</div>
							<div class="up_hover" v-if="value2&&user.role.authority.file_schedule==1">
								<a class="white button"  :href='value2' target="_blank">下载</a>
							</div>
						</div>
						<div class="upload_none" v-else>
							<i class="el-icon-upload" style="font-size:70px;margin-top:20px;"></i>
							<div>未上传</div>
						</div>				
						<div class="upload_name">正式协议进展</div>
					</div>
				</div>
				<div>
					<span style="font-size:14px;text-align:center">历史文件：</span>
					<el-select v-model="value2" placeholder="请选择" style="width:130px">
					    <el-option
					      v-for="item in zsxy"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					</el-select>
				</div>
			</div>
			<div style="float:left">
				<div class="clearfix">
					<div class="upload_block">
						<div class="upload_none" v-if="thgl.length!=0" >
							<div class="upload_img">
								<img :src="thgl[0].img">
							</div>
							<div class="up_hover" v-if="value3&&user.role.authority.file_manage==1">
								<a class="white button"  :href='value3' target="_blank">下载</a>
							</div>
						</div>
						<div class="upload_none" v-else>
							<i class="el-icon-upload" style="font-size:70px;margin-top:20px;"></i>
							<div>未上传</div>
						</div>				
						<div class="upload_name">投后管理</div>
					</div>
				</div>
				<div>
					<span style="font-size:14px;text-align:center">历史文件：</span>
					<el-select v-model="value3" placeholder="请选择" style="width:130px">
					    <el-option
					      v-for="item in thgl"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					</el-select>
				</div>
			</div>
			<div style="float:left">
				<div class="clearfix">
					<div class="upload_block" style="margin-right:0px;">
						<div class="upload_none" v-if="tztc.length!=0" >
							<div class="upload_img">
								<img :src="tztc[0].img">
							</div>
							<div class="up_hover" v-if="value4&&user.role.authority.file_profit==1">
								<a class="white button"  :href='value4' target="_blank">下载</a>
							</div>
						</div>
						<div class="upload_none" v-else>
							<i class="el-icon-upload" style="font-size:70px;margin-top:20px;"></i>
							<div>未上传</div>
						</div>				
						<div class="upload_name">投资退出盈利</div>
					</div>
				</div>
				<div>
					<span style="font-size:14px;text-align:center">历史文件：</span>
					<el-select v-model="value4" placeholder="请选择" style="width:130px">
					    <el-option
					      v-for="item in tztc"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					</el-select>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import { getProjectFile } from '../../ajax/get.js'
	import { File } from '../../ajax/post.js'
  	import  F_Probar from './fund-procbar'
  	function localdata(time){
  		var d = new Date(time);
    	var sd = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
    	return sd
  	}
  	function doctype(name){
		var img
		var x = name.split('.')[1]
		if (x == 'pdf') {
			img = '../static/img/PDF.png'
		}
		else if(x=='docx'||x=='doc'){
			img = '../static/img/word.png'
		}
		else if(x=='xls'||x=='xlsx'){
			img = '../static/img/excel.png'
		}
		else{
			img = '../static/img/qita.png'
		}
		return img
	}

  export default {
  	props: {
		info: {
			type: Object
		},
		user:{
			type: Object
		}
	},
  	data() {
      return {
      	xmjb:null,
      	syjhs:null,
      	ts:null,
      	jdbg:[],
      	jdbgurl:null,
      	zsxy:[],
      	thgl:[],
      	tztc:[],
        value: null,
        value2: null,
        value3: null,
        value4: null
      }
    },
    methods: {
    	getdata(){
    		if (this.info.pay_date) {
    			this.info.pay_date = localdata(this.info.pay_date)
    		}
    		if (this.info.sign_date) {
    			this.info.sign_date = localdata(this.info.sign_date)
    		}
    	},
    	postfile(){
    		var xmjbid
    		if (this.xmjb) {
    			xmjbid = {id:this.xmjb.id}
    		}
    		else{
    			xmjbid = null
    		}
    		var syjhsid
    		if (this.syjhs) {
    			syjhsid = {id:this.syjhs.id}
    		}
    		else{
    			syjhsid = null
    		}
    		var tsid
    		if (this.ts) {
    			tsid = {id:this.ts.id}
    		}
    		else{
    			tsid = null
    		}
    		var jdbgid = []
    		this.jdbg.forEach(function(list){
    			jdbgid.push({id:list.id})
    		})
    		var zsxyid = []
    		this.zsxy.forEach(function(list){
    			zsxyid.push({id:list.id})
    		})
    		var thglid = []
    		this.thgl.forEach(function(list){
    			thglid.push({id:list.id})
    		})
    		var tztcid = []
    		this.tztc.forEach(function(list){
    			tztcid.push({id:list.id})
    		})
    		File({
    			strProjectFile:JSON.stringify({
    				project:{id:this.$route.query.id},
    				briefing:xmjbid,
    				proposal:syjhsid,
    				agreement:tsid,
    				reports:jdbgid,
    				schedules:zsxyid,
    				manages:thglid,
    				profits:tztcid
    			})
	      	}).then((res) => {
	      		swal({
                    title: "上传成功",
                    type: 'success',
                    text: "上传成功",
                    timer: 2000,
                })
	      		this.getfile()
			})
    	},
	    handlesuccess(response, file, fileList){
	      	console.log(response, file, fileList)
	      	this.xmjb={
	      		id:response.data.fileId,
	      		fileUrl:response.data.fileUrl
	      	}
	      	swal({
                title: "上传成功",
                type: 'success',
                text: "上传成功",
                timer: 2000,
            })
	    },
	    handlesuccess2(response, file, fileList){
	      	console.log(response, file, fileList)
	      	this.syjhs={
	      		id:response.data.fileId,
	      		fileUrl:response.data.fileUrl
	      	}
	      	swal({
                title: "上传成功",
                type: 'success',
                text: "上传成功",
                timer: 2000,
            })
	    },
	    handlesuccess3(response, file, fileList){
	      	console.log(response, file, fileList)
	      	this.ts={
	      		id:response.data.fileId,
	      		fileUrl:response.data.fileUrl
	      	}
	      	swal({
                title: "上传成功",
                type: 'success',
                text: "上传成功",
                timer: 2000,
            })
	    },
	    handlesuccess4(response, file, fileList){
	      	console.log(response, file, fileList)
	      	this.jdbg.push({label:response.data.fileName,value:response.data.fileUrl,id:response.data.fileId})
	      	swal({
                title: "上传成功",
                type: 'success',
                text: "上传成功",
                timer: 2000,
            })
	    },
	    handlesuccess5(response, file, fileList){
	      	console.log(response, file, fileList)
	      	this.zsxy.push({label:response.data.fileName,value:response.data.fileUrl,id:response.data.fileId})
	      	swal({
                title: "上传成功",
                type: 'success',
                text: "上传成功",
                timer: 2000,
            })
	    },
	    handlesuccess6(response, file, fileList){
	      	console.log(response, file, fileList)
	      	this.thgl.push({label:response.data.fileName,value:response.data.fileUrl,id:response.data.fileId})
	      	swal({
                title: "上传成功",
                type: 'success',
                text: "上传成功",
                timer: 2000,
            })
	    },
	    handlesuccess7(response, file, fileList){
	      	console.log(response, file, fileList)
	      	this.tztc.push({label:response.data.fileName,value:response.data.fileUrl,id:response.data.fileId})
	      	swal({
                title: "上传成功",
                type: 'success',
                text: "上传成功",
                timer: 2000,
            })
	    },
	    getfile(){
	      	getProjectFile({
	      		projectId:this.$route.query.id
	      	}).then((res) => {
	      		var info = res.data.projectFile
	      		if (info.briefing) {
	      			var img = doctype(info.briefing.url)
		      		this.xmjb={
			      		id:info.briefing.id,
			      		fileUrl:info.briefing.url,
			      		img:img
			      	}
		      	}
		      	if (info.proposal) {
		      		var img = doctype(info.proposal.url)
			      	this.syjhs={
			      		id:info.proposal.id,
			      		fileUrl:info.proposal.url,
			      		img:img
			      	}
		      	}
		      	if (info.agreement) {
		      		var img = doctype(info.agreement.url)
			      	this.ts={
			      		id:info.agreement.id,
			      		fileUrl:info.agreement.url,
			      		img:img
			      	}
		      	}
		      	if (info.reports.length!=0) {
		      		this.jdbg = []
		      		var self = this
		      		info.reports.reverse().forEach(function(list){
		      			var img = doctype(list.url)
		      			self.jdbg.push({
			      			label:list.fileName,value:list.url,id:list.id,img:img
			      		})
		      		})	      		
		      	}
		      	if (info.schedules.length!=0) {
		      		this.zsxy = []
		      		var self = this
		      		info.schedules.reverse().forEach(function(list){
		      			var img = doctype(list.url)
		      			self.zsxy.push({
			      			label:list.fileName,value:list.url,id:list.id,img:img
			      		})
		      		})	      		
		      	}
		      	if (info.manages.length!=0) {
		      		this.thgl = []
		      		var self = this
		      		info.manages.reverse().forEach(function(list){
		      			var img = doctype(list.url)
		      			self.thgl.push({
			      			label:list.fileName,value:list.url,id:list.id,img:img
			      		})
		      		})	      		
		      	}
		      	if (info.profits.length!=0) {
		      		this.tztc = []
		      		var self = this
		      		info.profits.reverse().forEach(function(list){
		      			var img = doctype(list.url)
		      			self.tztc.push({
			      			label:list.fileName,value:list.url,id:list.id,img:img
			      		})
		      		})	      		
		      	}
			}).catch((e) => {
                
            })
	    }
    },
    mounted:function(){
    	this.getfile()
    	this.getdata()
    },
    components: {
	    F_Probar
	}
  };
</script>
<style lang="less">
	.uploadcontent{
		width: 100%;
		padding: 20px;
		.upload_block{
			width: 130px;
			height: 130px;
			float: left;
			margin-right: 120px;
			margin-bottom: 50px;
			&:nth-child(4n){
				margin-right: 0px;
			}
			.upload_none{
				background-color: #f6f7f9;
				width: 100%;
				height: 100%;
				text-align: center;
				color: #ccc;
				position: relative;
				.upload_img{
					position: absolute;
					top: 0px;
					bottom: 0px;
					left: 0px;
					right: 0px;
					img{
						width: 100%;
						height: 100%;
					}
				}
				.up_hover{
					&:hover{
						opacity: 1;
					}				
					// display: none;
					transition:0.5s;
					-moz-transition:0.5s; /* Firefox 4 */
					-webkit-transition:0.5s; /* Safari and Chrome */
					-o-transition:0.5s; /* Opera */
					opacity: 0;
					text-align: center;
					position: absolute;
					top: 0px;
					bottom: 0px;
					left: 0px;
					right: 0px;
					background-color: rgba(0, 0, 0, 0.5);
					.button{
						margin:45px auto;
					}
				}			
			}
			.upload_name{
				text-align: center;
				font-size: 14px;
				color: #333;
				line-height: 25px;
			}
		}
	}
	.el-upload__inner{
		width: 100%;
	}
	.ma{
		margin:10px auto !important;
	}
	.pa{
		padding-top:10px !important;
	}
</style>