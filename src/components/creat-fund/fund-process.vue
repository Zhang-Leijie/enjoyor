<template>
	<div class="fund-note">
		<div class="edit">
			<i class="el-icon-edit"></i>
			评级
		</div>
		<F_Probar></F_Probar>
		<div class="uploadcontent clearfix">
			<el-upload
  				action="/uploadFile"
  				:on-success="handlesuccess"
  				:show-upload-list="false" style="float:left;width:130px;" class="upload_block">
				<div class="upload_block">
					<div class="upload_none" v-if="!xmjb">
						<i class="el-icon-upload" style="font-size:70px;margin-top:20px;"></i>
						<div>未上传</div>
						<div class="up_hover">
							<div class="white button">上传</div>
						</div>
					</div>
					<div class="upload_none" v-else>
						<div class="upload_img">
							<img src="../../assets/touxiang.png">
						</div>
						<div class="up_hover" style="padding-top:10px;">
							<div class="white button" style="margin:10px auto">上传</div>
							<a class="white button" :href='xmjb.fileUrl' style="margin:10px auto">下载</a>
						</div>
					</div>
					<div class="upload_name">项目简报</div>
				</div>
			</el-upload>
			<el-upload
  				action="/uploadFile"
  				:on-success="handlesuccess2"
  				:show-upload-list="false" style="float:left;width:130px;" class="upload_block">
				<div class="upload_block">
					<div class="upload_none" v-if="!syjhs">
						<i class="el-icon-upload" style="font-size:70px;margin-top:20px;"></i>
						<div>未上传</div>
						<div class="up_hover">
							<div class="white button">上传</div>
						</div>
					</div>
					<div class="upload_none" v-else>
						<div class="upload_img">
							<img src="../../assets/touxiang.png">
						</div>
						<div class="up_hover">
							<a class="white button" :href='syjhs.fileUrl'>下载</a>
						</div>
					</div>
					<div class="upload_name">商业计划书</div>
				</div>
			</el-upload>
			<el-upload
  				action="/uploadFile"
  				:on-success="handlesuccess3"
  				:show-upload-list="false" style="float:left;width:130px;" class="upload_block">
				<div class="upload_block">
					<div class="upload_none" v-if="!ts">
						<i class="el-icon-upload" style="font-size:70px;margin-top:20px;"></i>
						<div>未上传</div>
						<div class="up_hover">
							<div class="white button">上传</div>
						</div>
					</div>
					<div class="upload_none" v-else>
						<div class="upload_img">
							<img src="../../assets/touxiang.png">
						</div>
						<div class="up_hover">
							<a class="white button" :href='ts.fileUrl'>下载</a>
						</div>
					</div>
					<div class="upload_name">TS协议框架</div>
				</div>
			</el-upload>
			<div style="float:left">
				<div class="clearfix">
					<el-upload
		  				action="/uploadFile"
		  				:on-success="handlesuccess4"
		  				:show-upload-list="false" style="float:left;width:130px;" class="upload_block clearfix">
						<div class="upload_block">
							<div class="upload_none" v-if="jdbg.length!=0" >
								<div class="upload_img">
									<img src="../../assets/touxiang.png">
								</div>
								<div class="up_hover">
									<a class="white button" :href='1'>下载</a>
								</div>
							</div>
							<div class="upload_none" v-else>
								<i class="el-icon-upload" style="font-size:70px;margin-top:20px;"></i>
								<div>未上传</div>
								<div class="up_hover">
									<div class="white button">上传</div>
								</div>
							</div>				
							<div class="upload_name">尽调报告</div>
						</div>
					</el-upload>
				</div>
				<div>
					<el-select v-model="value" placeholder="请选择" style="width:130px">
					    <el-option
					      v-if="jdbg"
					      v-for="item in jdbg"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					</el-select>
				</div>
			</div>
			<div style="float:left">
				<div class="clearfix">
					<el-upload
		  				action="/uploadFile"
		  				:on-success="handlesuccess5"
		  				:show-upload-list="false" style="float:left;width:130px;" class="upload_block clearfix">
						<div class="upload_block">
							<div class="upload_none" v-if="zsxy.length!=0" >
								<div class="upload_img">
									<img src="../../assets/touxiang.png">
								</div>
								<div class="up_hover">
									<a class="white button" :href='1'>下载</a>
								</div>
							</div>
							<div class="upload_none" v-else>
								<i class="el-icon-upload" style="font-size:70px;margin-top:20px;"></i>
								<div>未上传</div>
								<div class="up_hover">
									<div class="white button">上传</div>
								</div>
							</div>				
							<div class="upload_name">正式协议进展</div>
						</div>
					</el-upload>
				</div>
				<div>
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
					<el-upload
		  				action="/uploadFile"
		  				:on-success="handlesuccess6"
		  				:show-upload-list="false" style="float:left;width:130px;" class="upload_block clearfix">
						<div class="upload_block">
							<div class="upload_none" v-if="thgl.length!=0" >
								<div class="upload_img">
									<img src="../../assets/touxiang.png">
								</div>
								<div class="up_hover">
									<a class="white button" :href='1'>下载</a>
								</div>
							</div>
							<div class="upload_none" v-else>
								<i class="el-icon-upload" style="font-size:70px;margin-top:20px;"></i>
								<div>未上传</div>
								<div class="up_hover">
									<div class="white button">上传</div>
								</div>
							</div>				
							<div class="upload_name">投后管理</div>
						</div>
					</el-upload>
				</div>
				<div>
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
					<el-upload
		  				action="/uploadFile"
		  				:on-success="handlesuccess7"
		  				:show-upload-list="false" style="float:left;width:130px;margin-right:0px" class="upload_block clearfix">
						<div class="upload_block" style="margin-right:0px;">
							<div class="upload_none" v-if="tztc.length!=0" >
								<div class="upload_img">
									<img src="../../assets/touxiang.png">
								</div>
								<div class="up_hover">
									<a class="white button" :href='1'>下载</a>
								</div>
							</div>
							<div class="upload_none" v-else>
								<i class="el-icon-upload" style="font-size:70px;margin-top:20px;"></i>
								<div>未上传</div>
								<div class="up_hover">
									<div class="white button">上传</div>
								</div>
							</div>				
							<div class="upload_name">投资退出盈利</div>
						</div>
					</el-upload>
				</div>
				<div>
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
		<div style="text-align:center">
			<div class="button blue" style="margin:10px auto;" @click='postfile'>保存</div>
		</div>
	</div>
</template>
<script>
	import { getProjectFile } from '../../ajax/get.js'
	import { File } from '../../ajax/post.js'
  	import  F_Probar from './fund-procbar'
  export default {
  	data() {
      return {
      	xmjb:null,
      	syjhs:null,
      	ts:null,
      	jdbg:[],
      	zsxy:[],
      	thgl:[],
      	tztc:[],
        value: '',
        value2: '',
        value3: '',
        value4: ''
      }
    },
    methods: {
    	postfile(){
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
    				briefing:{id:this.xmjb.id},
    				proposal:{id:this.syjhs.id},
    				agreement:{id:this.ts.id},
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
	    },
	    handlesuccess2(response, file, fileList){
	      	console.log(response, file, fileList)
	      	this.syjhs={
	      		id:response.data.fileId,
	      		fileUrl:response.data.fileUrl
	      	}
	    },
	    handlesuccess3(response, file, fileList){
	      	console.log(response, file, fileList)
	      	this.ts={
	      		id:response.data.fileId,
	      		fileUrl:response.data.fileUrl
	      	}
	    },
	    handlesuccess4(response, file, fileList){
	      	console.log(response, file, fileList)
	      	this.jdbg.push({label:response.data.fileName,value:response.data.fileUrl,id:response.data.fileId})
	    },
	    handlesuccess5(response, file, fileList){
	      	console.log(response, file, fileList)
	      	this.zsxy.push({label:response.data.fileName,value:response.data.fileUrl,id:response.data.fileId})
	    },
	    handlesuccess6(response, file, fileList){
	      	console.log(response, file, fileList)
	      	this.thgl.push({label:response.data.fileName,value:response.data.fileUrl,id:response.data.fileId})
	    },
	    handlesuccess7(response, file, fileList){
	      	console.log(response, file, fileList)
	      	this.tztc.push({label:response.data.fileName,value:response.data.fileUrl,id:response.data.fileId})
	    },
	    getfile(){
	      	getProjectFile({
	      		projectId:this.$route.query.id
	      	}).then((res) => {
	      		var info = res.data.projectFile
	      		if (info.briefing) {
		      		this.xmjb={
			      		id:info.briefing.id,
			      		fileUrl:info.briefing.url
			      	}
		      	}
		      	if (info.proposal) {
			      	this.syjhs={
			      		id:info.proposal.id,
			      		fileUrl:info.proposal.url
			      	}
		      	}
		      	if (info.agreement) {
			      	this.ts={
			      		id:info.agreement.id,
			      		fileUrl:info.agreement.url
			      	}
		      	}
		      	if (info.reports.length!=0) {
		      		this.jdbg = []
		      		var self = this
		      		info.reports.forEach(function(list){
		      			self.jdbg.push({
			      			label:list.fileName,value:list.url,id:list.id
			      		})
		      		})	      		
		      	}
		      	if (info.schedules.length!=0) {
		      		this.zsxy = []
		      		var self = this
		      		info.schedules.forEach(function(list){
		      			self.zsxy.push({
			      			label:list.fileName,value:list.url,id:list.id
			      		})
		      		})	      		
		      	}
		      	if (info.manages.length!=0) {
		      		this.thgl = []
		      		var self = this
		      		info.manages.forEach(function(list){
		      			self.thgl.push({
			      			label:list.fileName,value:list.url,id:list.id
			      		})
		      		})	      		
		      	}
		      	if (info.profits.length!=0) {
		      		this.tztc = []
		      		var self = this
		      		info.profits.forEach(function(list){
		      			self.tztc.push({
			      			label:list.fileName,value:list.url,id:list.id
			      		})
		      		})	      		
		      	}
			}) 
	    }
    },
    mounted:function(){
    	this.getfile()
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
</style>