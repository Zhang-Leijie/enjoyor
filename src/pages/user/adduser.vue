<template>
	<div class="fund-summary">
		<div class="sum-item">
			<div class="item-title">
				用户名
			</div>
			<div class="item-content item-single" >
				<el-input placeholder="请输入邮箱" class="edit-input" v-model="email"></el-input>
			</div>
		</div>
		<div class="sum-item">
			<div class="item-title">
				密码
			</div>
			<div class="item-content item-single" >
				<el-input placeholder="请输入密码" class="edit-input" v-model="pass" type="password"></el-input>
			</div>
		</div>
		<div class="sum-item">
			<div class="item-title">
				选择角色
			</div>
			<div class="item-content item-single" >
				<el-select v-model="value" placeholder="请选择" class="edit-input">
				    <el-option
				      v-for="item in roles"
				      :label="item.roleName"
				      :value="item.id">
				    </el-option>
				</el-select>
			</div>
		</div>
		<div class="sum-item">
			<div class="item-title">
				姓名
			</div>
			<div class="item-content item-single" >
				<el-input placeholder="请输入姓名" class="edit-input" v-model="name"></el-input>
			</div>
		</div>
		<div class="sum-item">
			<div class="item-title">
				职位
			</div>
			<div class="item-content item-single" >
				<el-input placeholder="请输入职位" class="edit-input" v-model="posi"></el-input>
			</div>
		</div>
		<div class="sum-item">
			<div class="item-title">
				地区
			</div>
			<div class="item-content item-single" >
				<el-input placeholder="请输入地区" class="edit-input" v-model="local"></el-input>
			</div>
		</div>
		<div class="sum-item">
			<div class="item-title">
				手机号码
			</div>
			<div class="item-content item-single">
				<el-input placeholder="请输入手机号码" class="edit-input" v-model="phone"></el-input>
			</div>
		</div>
		<div class="sum-item" v-if="value==5">
			<div class="item-title">
				选择基金
			</div>
			<div class="item-content item-single" >
				<span v-for="list in lists" style="margin-left:10px;">
	            	<el-checkbox v-model="list.state">{{list.name}}</el-checkbox>
	            </span>
			</div>
		</div>
		<div style="text-align:center">
			<div class="button blue" style="margin:10px auto;" @click="adduser">新建</div>
		</div>
	<div>
</template>
<script>
import {saveUser} from '../../ajax/post.js'
import {getFoundationList,getRoleList} from '../../ajax/get.js'
export default {
    data() {
        return {
        	value:'',
            lists:'',
            roles:'',
            email:null,
            pass:null,
            name:null,
            posi:null,
            local:null,
            phone:null,
            fund:[]
        }
    },
    methods: {
        getfundlist(){
	    	getFoundationList().then((res) => {
	    		res.data.list.forEach(function(list){
	    			list.state = false
	    		})
				this.lists = res.data.list
			}) 
	    },
	    getrole(){
	    	getRoleList().then((res) => {
				this.roles = res.data.list
			}) 
	    },
	    adduser(){
	    	var data = {}
	    	if (this.email) {
	    		data.userName = this.email
	    	}
	    	if (this.pass) {
	    		data.password = this.pass
	    	}
	    	if (this.name) {
	    		data.name = this.name
	    	}
	    	if (this.posi) {
	    		data.position = this.posi
	    	}
	    	if (this.local) {
	    		data.address = this.local
	    	}
	    	if (this.phone) {
	    		data.phone = this.phone
	    	}
	    	if (this.value) {
	    		data.role = {
	    			id:this.value
	    		}
	    	}
	    	var self = this
	    	if (this.lists.length!=0) {
	    		this.lists.forEach(function(list){
	    			if (list.state==true) {
	    				self.fund.push({
	    					id:list.id
	    				})
	    			}
	    		})
	    		data.list_foundation = this.fund
	    	}
	    	saveUser({
	    		strUser:JSON.stringify(data)
	    	}).then((res) => {
				swal({
                    title: "新建成功",
                    type: 'success',
                    text: "新建成功",
                    timer: 2000,
                })
			}) 
	    }
    },
    mounted:function(){
    	this.getfundlist()
    	this.getrole()
    }
}
</script>
<style lang="less">
	.item-title{
		font-size: 14px;
	}
</style>