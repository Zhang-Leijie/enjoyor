<template>
	<div>
		<div class="fund-summary">
			<div class="sum-item">
				<div class="item-title">
					项目LOGO
				</div>
				<div class="item-content" >
					<el-upload
  						action="/uploadFile"
  						:on-preview="handlePreview"
  						:on-remove="handleRemove"
  						:on-success="handlesuccess"
  						:show-upload-list="false">
						<div class="uploadimg" v-if="!photourl">
							<i class="el-icon-plus"></i>
						</div>
						<div class="uploadimg" v-else>
							<img :src="photourl" style="width:100%;height:100%;border-radius:50%">
						</div>
					</el-upload>
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					项目名称
				</div>
				<div class="item-content item-single" >
					<el-input placeholder="" class="edit-input" v-model="info.project_name"></el-input>
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					项目简介
				</div>
				<div class="item-content item-single" >
					<textarea class="pl-textarea" v-model="info.project_introduction"></textarea>
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					项目编码
				</div>
				<div class="item-content item-single" >
					{{info.project_code}}
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					项目评级
				</div>
				<div class="item-content item-single" >
					未评级
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					项目阶段
				</div>
				<div class="item-content item-single" >
					<el-select v-model="info.project_stage" placeholder="请选择" class="edit-input">
					    <el-option
					      v-for="item in options"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					</el-select>
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					项目估值
				</div>
				<div class="item-content item-single" >
					<el-input class="edit-input" v-model="info.valuation"></el-input>
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					行业／领域
				</div>
				<div class="item-content" >
					<el-input placeholder="" class="edit-input" style="display:inline-block" v-model="labelval"></el-input>
					<div class="blue button" @click="addLabel">添加</div><br>
					<!-- <span class="item-label">共享经济</span>
					<span class="item-label">共享经济</span> -->
					<el-tag
					  v-for="tag in tags"
					  :closable="true"
					  :type="tag.type"
					  :key="tag"
					  :close-transition="false"
					  @close="handleClose(tag)"
					  style="margin-top:10px;margin-right:10px;"
					>
						{{tag.name}}
					</el-tag>
				</div>
			</div>
			<div class="sum-item" style="width:100%">
				<div class="item-title">
					项目团队
				</div>
				<div class="item-content clearfix">
					<el-select v-model="value2" placeholder="请选择" class="edit-input">
					    <el-option
					      v-for="item in options2"
					      :label="item.username"
					      :value="item.id"
					      @click.native="addteam(item.id,item.image,item.username,item.rolename)">
					    </el-option>
					</el-select>
					<!-- <div class="button blue" style="display:block;margin-top:10px;">添加</div><br> -->
					<div class="item-team clearfix" v-for="(i,index) in team">
						<div class="head-image">
				          <img :src="i.img" style="width:100%">
				        </div>
				        <div class="head-word">
				          <span class="name">{{i.username}}</span><br>
				          <span class="position">{{i.role}}</span>
				        </div>
				        <i class="el-icon-close" style="cursor:pointer" @click="delteam(index)"></i>
			        </div>
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					立项理由
				</div>
				<div class="item-content item-single">
					<textarea class="pl-textarea" v-model="info.project_reason"></textarea>
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					公司名称
				</div>
				<div class="item-content item-single">
					<el-input placeholder="" class="edit-input" v-model="info.company_name"></el-input>
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					公司网站
				</div>
				<div class="item-content item-single">
					<el-input placeholder="" class="edit-input" v-model="info.company_web"></el-input>				
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					公司app
				</div>
				<div class="item-content item-single">
					<el-input placeholder="" class="edit-input" v-model="info.company_app"></el-input>	
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					公司公众号
				</div>
				<div class="item-content item-single">
					<el-input placeholder="" class="edit-input" v-model="info.company_public"></el-input>			
				</div>
			</div>
			<div class="sum-item sum-double">
				<div class="item-title">
					公司创始人
				</div>
				<div class="item-content item-single">
					<el-input placeholder="" class="edit-input" v-model="info.company_founder"></el-input>			
				</div>
			</div>
			<div class="sum-item sum-double">
				<div class="item-title item-title2">
					联系方式
				</div>
				<div class="item-content item-single">
					<el-input placeholder="" class="edit-input" v-model="info.company_tel"></el-input>			
				</div>
			</div>
			<div class="sum-item sum-double">
				<div class="item-title">
					公司联系人
				</div>
				<div class="item-content item-single">
					<el-input placeholder="" class="edit-input" v-model="info.company_contact"></el-input>		
				</div>
			</div>
			<div class="sum-item sum-double">
				<div class="item-title item-title2">
					联系方式
				</div>
				<div class="item-content item-single">
					<el-input placeholder="" class="edit-input" v-model="info.contact_phone"></el-input>	
				</div>
			</div>
			<div style="text-align:center">
				<div class="button blue" @click="save">保存</div>
			</div>
		</div>
	</div>
</template>
<script>
import {itemDetail,getUserList} from '../../ajax/get.js'
import {Item} from '../../ajax/post.js'

export default {
	props: {
		info: {
			type: Object
		}
	},
	data () {
	    return {
	    	team:[],
	    	value2:'',
	    	options2:[],
	    	labelval:'',
	    	tags:[],
	    	// info:'',
	    	photoid:null,
	    	photourl:'',
		    options: [{
			      value: '种子',
			      label: '种子'
				}, {
			      value: '天使',
			      label: '天使'
			  	}, {
			      value: 'pre-a',
			      label: 'pre-a'
			  	}, {
			      value: 'A',
			      label: 'A'
			  	}, {
			      value: 'A+',
			      label: 'A+'
			  	}, {
			      value: 'B',
			      label: 'B'
			  	}, {
			      value: 'C',
			      label: 'C'
			 	 }, {
			      value: 'PE',
			      label: 'PE'
			  	}, {
			      value: '新三板',
			      label: '新三板'
			  	}, {
			      value: 'pre-ipo',
			      label: 'pre-ipo'
			  	}, {
			      value: '一级半',
			      label: '一级半'
			  	}, {
			      value: '子基金',
			      label: '子基金'
			}],
			value: '',
			fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
		    }
	},
  	methods: {
  		delteam(num){
  			console.log(num)
  			this.team.splice(num, 1);
  		},
  		addteam(id,img,username,role){
  			this.team.push({id:id,img:img,username:username,role:role})
  		},
  		addLabel(){
  			this.tags.push({name:this.labelval})
  			this.labelval = ""
  		},
	    handleRemove(file, fileList) {
	        console.log(file, fileList);
	    },
	    handlePreview(file) {
	        console.log(file);
	    },
	    handlesuccess(response, file, fileList){
	      	console.log(response, file, fileList)
	      	this.photoid = response.data.fileId
	      	this.photourl = response.data.fileUrl
	    },
	    handleClose(tag) {
	        this.tags.splice(this.tags.indexOf(tag), 1);
	    },
	    getInfoin(){
	    	console.log(this.info)
	    	if (this.info.logo) {
				this.photoid = this.info.logo.id
				this.photourl = this.info.logo.url
			}
			if (this.info.tab) {
				var self = this
				self.tags = []
				this.info.tab.forEach(function(list){
					self.tags.push({name:list})
				})
			}
			if (this.info.project_member) {
				var self = this
				self.team = []
				this.info.project_member.forEach(function(list){
					var photo
					if (list.photo) {
						photo = list.photo.url
					}
					else{
						photo = "../static/img/touxiang.png"
					}

					self.team.push({id:list.id,img:photo,username:list.userName,role:list.role.roleName})
				})
			}
	    },
	    getUser(){
	    	var self = this
	      	getUserList({
	      		type:0
	      	}).then((res) => {
				res.data.list.forEach(function(list){
					var photo
					if (list.photo) {
						photo = list.photo.url
					}
					else{
						photo = "../static/img/touxiang.png"
					}
					self.options2.push({id:list.id,username:list.userName,rolename:list.role.roleName,image:photo})
				})
			})  
	    },
	    save(){
	    	var tab = []
	    	this.tags.forEach(function(list){
	    		tab.push(list.name)
	    	})
	    	var member = []
	    	this.team.forEach(function(list){
	    		member.push({id:list.id})
	    	})
	    	var logo
	    	if (this.photoid==null) {
	    		logo = null
	    	}
	    	else{
	    		logo={
	    			id:this.photoid
	    		}
	    	}
	      	Item({
				type:0,
				strProject:JSON.stringify({
					id:this.$route.query.id,
					logo:logo,
					project_name:this.info.project_name,
					project_introduction:this.info.project_introduction,
					project_code:this.value,
					valuation:this.info.valuation,
					project_reason:this.info.project_reason,
					company_name:this.info.company_name,
					company_web:this.info.company_web,
					company_app:this.info.company_app,
					company_public:this.info.company_public,
					company_founder:this.info.company_founder,
					company_tel:this.info.company_tel,
					company_contact:this.info.company_contact,
					contact_phone:this.info.contact_phone,
					tab:tab,
					project_member:member,
					project_stage:this.info.project_stage
				})			
			}).then((res) => {
				this.getInfo()
				swal({
	                title: "修改成功",
	                type: 'success',
	                text: "修改成功",
	                timer: 2000,
	            })
			}) 
      	}
    },
    mounted:function(){
    	this.getInfoin()
    	this.getUser()
    }
}
</script>