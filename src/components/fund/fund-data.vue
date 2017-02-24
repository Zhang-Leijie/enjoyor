<template>
	<div>
		<div class="fund-summary">
			<router-link :to="{name: 'my-edit',query:{id:$route.query.id}}" class="link" v-if="user.role.authority.project_grade==1">
				<div class="edit">
					<i class="el-icon-edit"></i>
					编辑
				</div>
			</router-link>
			<div class="sum-item">
				<div class="item-title">
					融资纪录
				</div>
				<div class="item-content">
					{{info.finance_record}}
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					所属基金
				</div>
				<div class="item-content item-single" >
					{{value1}}
				</div>
			</div>
			<div class="sum-item sum-double">
				<div class="item-title">
					公司股本总额
				</div>
				<div class="item-content item-single" >
					<span v-if="info.money_totalShare">¥{{info.money_totalShare}}万元</span>
				</div>
			</div>
			<div class="sum-item sum-double">
				<div class="item-title item-title2">
					每股价格
				</div>
				<div class="item-content item-single" >
					<span v-if="info.money_eachShare">¥{{info.money_eachShare}}</span>
				</div>
			</div>
			<!-- <div class="sum-item">
				<div class="item-title">
					投资／认购数量
				</div>
				<div class="item-content item-single" >
					{{info.subscription_amount}}
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					投资／认购金额
				</div>
				<div class="item-content item-single" >
					{{info.subscription_money}}
				</div>
			</div> -->
			<div class="sum-item sum-double">
				<div class="item-title">
					项目来源
				</div>
				<div class="item-content item-single" >
					{{value2}}
				</div>
			</div>
			<div class="sum-item sum-double">
				<div class="item-title item-title2">
					项目地点
				</div>
				<div class="item-content item-single" >
					{{info.province_name}} {{info.city_name}}
				</div>
			</div>
			<div class="clearfix">
				<div class="sum-item sum-double clearfix">
					<div class="item-title">
						项目介绍人
					</div>
					<div class="item-content item-single">
						{{info.project_introducer}}	
					</div>
				</div>
				<div class="sum-item sum-double clearfix">
					<div class="item-title item-title2">
						联系方式
					</div>
					<div class="item-content item-single">
						{{info.project_introducer_tel}}			
					</div>
				</div>
			</div>
			<!-- <div class="sum-item">
				<div class="item-title">
					评级纪录
				</div>
				<div class="item-content">
					{{info.project_evaluates}}
				</div>
			</div> -->
			<div class="sum-item sum-double">
				<div class="item-title">
					最新估值
				</div>
				<div class="item-content item-single">
					<span v-if="info.valuation_afterInvest">¥{{info.valuation_afterInvest}}万元</span>
				</div>
			</div>
			<div class="sum-item sum-double">
				<div class="item-title item-title2">
					估值商讨状态
				</div>
				<div class="item-content item-single">
					{{info.valuation_state}}
				</div>
			</div>
			<div class="clearfix">
				<div class="sum-item sum-double">
					<div class="item-title">
						本轮投资总额
					</div>
					<div class="item-content item-single">
						<span v-if="info.money_thisTime">¥{{info.money_thisTime}}万元</span>	
					</div>
				</div>
				<div class="sum-item sum-double">
					<div class="item-title item-title2">
						占股
					</div>
					<div class="item-content item-single">
						{{info.share_common}}	
					</div>
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					领投方
				</div>
				<div class="item-content item-single">
					{{info.investment_leader}}	
				</div>
			</div>
			<div class="sum-item sum-trible">
				<div class="item-title">
					银江资本投资
				</div>
				<div class="item-content item-single">
					{{info.enjoyor}}			
				</div>
			</div>
			<div class="sum-item sum-trible">
				<div class="item-title item-title2">
					投资金额
				</div>
				<div class="item-content item-single">
					<span v-if="info.investment_enjoyor">¥{{info.investment_enjoyor}} 万元</span>			
				</div>
			</div>
			<div class="sum-item sum-trible">
				<div class="item-title item-title2">
					占股
				</div>
				<div class="item-content item-single">
					{{info.share_enjoyor}}		
				</div>
			</div>
			<div v-for="i in info.investment_others">
				<div class="sum-item sum-trible">
					<div class="item-title">
						其他投资方
					</div>
					<div class="item-content item-single">
						{{i.other}}		
					</div>
				</div>
				<div class="sum-item sum-trible">
					<div class="item-title item-title2">
						投资金额
					</div>
					<div class="item-content item-single">
						<span v-if="i.investment_other">¥{{i.investment_other}}万元</span>			
					</div>
				</div>
				<div class="sum-item sum-trible">
					<div class="item-title item-title2">
						占股
					</div>
					<div class="item-content item-single">
						{{i.share_other}}		
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		info: {
			type: Object
		},
		user:{
			type: Object
		}
	},
	data () {
	    return {
	    	value2:'',
    		value1:null,
	      	edit:false
	    }
	},
	methods:{
	  	getInfoin(){
			if (this.info.foundation) {
				this.value1 = this.info.foundation.name
			}
			if (this.info.project_resource) {
				this.value2 = this.info.project_resource
			}
	    }
	},
	mounted:function(){
	  	this.getInfoin()
	}
}
</script>
<style lang='less' scoped>
	@media(max-width:1200px){
		.sum-trible{
		    width: 33%;
		    float: left;
		    padding-left: 140px !important;
		}
	}
</style>