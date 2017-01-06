<template>
	<div>
		<div class="fund-summary">
			<div class="sum-item">
				<div class="item-title">
					融资纪录
				</div>
				<div class="item-content item-single">
					<textarea class="pl-textarea" v-model="info.finance_record"></textarea>
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					所属基金
				</div>
				<div class="item-content item-single" >
					<el-select v-model="value1" placeholder="请选择" class="edit-input" v-if="options1!=[]">
					    <el-option
					      v-for="item in options1"
					      :label="item.name"
					      :value="item.id">
					    </el-option>
					</el-select>
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					公司股本总额
				</div>
				<div class="item-content item-single" >
					<el-input placeholder="" class="edit-input" v-model="info.money_totalShare"></el-input>
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					每股价格
				</div>
				<div class="item-content item-single" >
					<el-input placeholder="" class="edit-input" v-model="info.money_eachShare"></el-input>
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					投资／认购数量
				</div>
				<div class="item-content item-single" >
					<el-input placeholder="" class="edit-input" v-model="info.subscription_amount"></el-input>
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					投资／认购金额
				</div>
				<div class="item-content item-single" >
					<el-input placeholder="" class="edit-input" v-model="info.subscription_money"></el-input>
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					项目来源
				</div>
				<div class="item-content item-single">
					<el-select v-model="value2" placeholder="请选择" class="edit-input">
					    <el-option
					      v-for="item in options2"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					</el-select>
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					项目地点
				</div>
				<div class="item-content item-single" >
					<el-input placeholder="" class="edit-input" v-model="info.project_address"></el-input>
				</div>
			</div>
			<div class="clearfix">
				<div class="sum-item sum-double clearfix">
					<div class="item-title">
						项目介绍人
					</div>
					<div class="item-content item-single">
						<el-input placeholder="" class="edit-input" v-model="info.project_introducer"></el-input>		
					</div>
				</div>
				<div class="sum-item sum-double clearfix">
					<div class="item-title item-title2">
						联系方式
					</div>
					<div class="item-content item-single">
						<el-input placeholder="" class="edit-input" v-model="info.project_introducer_tel"></el-input>		
					</div>
				</div>
			</div>
			<!-- <div class="sum-item">
				<div class="item-title">
					项目评级
				</div>
				<div class="item-content" style="padding-top:40px;">
					<img src="../../assets/beijing.png" style="width:210px;height:140px;border:5px solid #d4dbe1">
				</div>
			</div> -->
			<div class="sum-item">
				<div class="item-title">
					评级纪录
				</div>
				<div class="item-content">
					<textarea class="pl-textarea" v-model="info.project_evaluates"></textarea>
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					投后估值
				</div>
				<div class="item-content item-single">
					<el-input placeholder="" class="edit-input" v-model="info.valuation_afterInvest"></el-input>	
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					估值商讨状态
				</div>
				<div class="item-content item-single">
					<el-input placeholder="" class="edit-input" v-model="info.valuation_state"></el-input>		
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					本轮投资总额
				</div>
				<div class="item-content item-single">
					<el-input placeholder="" class="edit-input" v-model="info.money_thisTime"></el-input>			
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					占股
				</div>
				<div class="item-content item-single">
					<el-input placeholder="" class="edit-input" v-model="info.share_common"></el-input>		
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					领投方
				</div>
				<div class="item-content item-single">
					<el-input placeholder="" class="edit-input" v-model="info.investment_leader"></el-input>
				</div>
			</div>
			<div class="sum-item sum-trible">
				<div class="item-title">
					银江资本投资
				</div>
				<div class="item-content item-single">
					<el-input placeholder="" class="edit-input" style="width:150px;" v-model="info.enjoyor"></el-input>			
				</div>
			</div>
			<div class="sum-item sum-trible">
				<div class="item-title item-title2">
					投资金额
				</div>
				<div class="item-content item-single">
					<el-input placeholder="" class="edit-input" style="width:150px;" v-model="info.investment_enjoyor"></el-input>				
				</div>
			</div>
			<div class="sum-item sum-trible">
				<div class="item-title item-title2">
					占股
				</div>
				<div class="item-content item-single">
					<el-input placeholder="" class="edit-input" style="width:150px;" v-model="info.share_enjoyor"></el-input>			
				</div>
			</div>
			<div class="sum-item sum-trible">
				<div class="item-title">
					其他投资方
				</div>
				<div class="item-content item-single">
					<el-input placeholder="" class="edit-input" style="width:150px;" v-model="info.other"></el-input>			
				</div>
			</div>
			<div class="sum-item sum-trible">
				<div class="item-title item-title2">
					投资金额
				</div>
				<div class="item-content item-single">
					<el-input placeholder="" class="edit-input" style="width:150px;" v-model="info.investment_other"></el-input>				
				</div>
			</div>
			<div class="sum-item sum-trible">
				<div class="item-title item-title2">
					占股
				</div>
				<div class="item-content item-single">
					<el-input placeholder="" class="edit-input" style="width:150px;" v-model="info.share_other"></el-input>	
				</div>
			</div>
			<div style="text-align:center">
				<div class="button blue" @click="save" style="width:150px;">保存</div>
			</div>
		</div>
	</div>
</template>
<script>
import {itemDetail,getUserList,getFoundationList} from '../../ajax/get.js'
import {Item} from '../../ajax/post.js'

export default {
	props: {
		info: {
			type: Object
		}
	},
  data () {
    return {
    	value2:'',
    	value1:null,
    	options1:[],
    	options2: [{
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
		  }]
    }
  },
  	methods: {
  		getInfoin(){
  			if (this.info.foundation) {
				this.value1 = this.info.foundation.id
			}
			if (this.info.project_resource) {
				this.value2 = this.info.project_resource
			}
	    },
	    getInfodata(){
	    	itemDetail({
				id:this.$route.query.id
			}).then((res) => {
				this.info = res.data.project
				if (res.data.project.foundation) {
					this.value1 = res.data.project.foundation.id
				}
				if (res.data.project.project_resource) {
					this.value2 = res.data.project.project_resource
				}
			}) 
	    },
	    getfundlist(){
	    	var self = this
	    	getFoundationList().then((res) => {
				res.data.list.forEach(function(list){
					self.options1.push({
						id:list.id,
						name:list.name
					})
				})
			})  
	    },
	    save(){
	    	var fundation
	    	if (this.value1==null) {
	    		fundation = null
	    	}
	    	else{
	    		fundation={
	    			id:this.value1
	    		}
	    	}
	      	Item({
				type:1,
				strProject:JSON.stringify({
					id:this.$route.query.id,
					finance_record:this.info.finance_record,
					foundation:fundation,
					money_totalShare:this.info.money_totalShare,
					money_eachShare:this.info.money_eachShare,
					subscription_amount:this.info.subscription_amount,
					subscription_money:this.info.subscription_money,
					project_resource:this.value2,
					project_address:this.info.project_address,
					project_introducer:this.info.project_introducer,
					project_introducer_tel:this.info.project_introducer_tel,
					project_evaluates:this.info.project_evaluates,
					valuation_afterInvest:this.info.valuation_afterInvest,
					valuation_state:this.info.valuation_state,
					money_thisTime:this.info.money_thisTime,
					share_common:this.info.share_common,
					investment_leader:this.info.investment_leader,
					enjoyor:this.info.enjoyor,
					investment_enjoyor:this.info.investment_enjoyor,
					share_enjoyor:this.info.share_enjoyor,
					other:this.info.other,
					investment_other:this.info.investment_other,
					share_other:this.info.share_other
				})			
			}).then((res) => {
				// this.getInfodata()
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
  		this.getfundlist()
  	}
}
</script>