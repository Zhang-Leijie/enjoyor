<template>
	<div>
		<div class="fund-summary">
			<div class="sum-item">
				<div class="item-title">
					融资纪录
				</div>
				<div class="item-content item-single">
					<textarea class="pl-textarea"></textarea>
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					所属基金
				</div>
				<div class="item-content item-single" >
					<el-input placeholder="" class="edit-input"></el-input>
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					公司股本总额
				</div>
				<div class="item-content item-single" >
					<el-input placeholder="" class="edit-input"></el-input>
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					每股价格
				</div>
				<div class="item-content item-single" >
					<el-input placeholder="" class="edit-input"></el-input>
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					投资／认购数量
				</div>
				<div class="item-content item-single" >
					<el-input placeholder="" class="edit-input"></el-input>
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					投资／认购金额
				</div>
				<div class="item-content item-single" >
					<el-input placeholder="" class="edit-input"></el-input>
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					项目来源
				</div>
				<div class="item-content item-single" >
					<el-input placeholder="" class="edit-input"></el-input>
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					项目地点
				</div>
				<div class="item-content item-single" >
					<el-input placeholder="" class="edit-input"></el-input>
				</div>
			</div>
			<div class="clearfix">
				<div class="sum-item sum-double clearfix">
					<div class="item-title">
						项目介绍人
					</div>
					<div class="item-content item-single">
						<el-input placeholder="" class="edit-input"></el-input>		
					</div>
				</div>
				<div class="sum-item sum-double clearfix">
					<div class="item-title item-title2">
						联系方式
					</div>
					<div class="item-content item-single">
						<el-input placeholder="" class="edit-input"></el-input>		
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
					<textarea class="pl-textarea"></textarea>
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					投后估值
				</div>
				<div class="item-content item-single">
					<el-input placeholder="" class="edit-input"></el-input>	
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					估值商讨状态
				</div>
				<div class="item-content item-single">
					<el-input placeholder="" class="edit-input"></el-input>		
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					本轮投资总额
				</div>
				<div class="item-content item-single">
					<el-input placeholder="" class="edit-input"></el-input>			
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					占股
				</div>
				<div class="item-content item-single">
					<el-input placeholder="" class="edit-input"></el-input>		
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					领投方
				</div>
				<div class="item-content item-single">
					<el-input placeholder="" class="edit-input"></el-input>	
				</div>
			</div>
			<div class="sum-item sum-trible">
				<div class="item-title">
					银江资本投资
				</div>
				<div class="item-content item-single">
					<el-input placeholder="" class="edit-input" style="width:150px;"></el-input>			
				</div>
			</div>
			<div class="sum-item sum-trible">
				<div class="item-title item-title2">
					投资金额
				</div>
				<div class="item-content item-single">
					<el-input placeholder="" class="edit-input" style="width:150px;"></el-input>				
				</div>
			</div>
			<div class="sum-item sum-trible">
				<div class="item-title item-title2">
					占股
				</div>
				<div class="item-content item-single">
					<el-input placeholder="" class="edit-input" style="width:150px;"></el-input>			
				</div>
			</div>
			<div class="sum-item sum-trible">
				<div class="item-title">
					其他投资方
				</div>
				<div class="item-content item-single">
					<el-input placeholder="" class="edit-input" style="width:150px;"></el-input>			
				</div>
			</div>
			<div class="sum-item sum-trible">
				<div class="item-title item-title2">
					投资金额
				</div>
				<div class="item-content item-single">
					<el-input placeholder="" class="edit-input" style="width:150px;"></el-input>				
				</div>
			</div>
			<div class="sum-item sum-trible">
				<div class="item-title item-title2">
					占股
				</div>
				<div class="item-content item-single">
					<el-input placeholder="" class="edit-input" style="width:150px;"></el-input>			
				</div>
			</div>
			<div style="text-align:center">
				<div class="button blue" @click="edit=!edit" style="width:150px;">保存</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
  data () {
    return {

    }
  }
}
</script>