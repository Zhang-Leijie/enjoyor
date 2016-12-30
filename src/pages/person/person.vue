<template>
	<div>
		<el-breadcrumb separator="/">
		  	<el-breadcrumb-item :to="{ name: 'main' }"><i class="el-icon-menu"></i><span style="margin-left:5px;">主页</span></el-breadcrumb-item>
		  	<el-breadcrumb-item>个人中心</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="person-box">
			<div class="sum-item">
				<div class="item-title">
					融资纪录
				</div>
				<div class="item-content">
					<div class="info-box">
						<img src="../../assets/touxiang.png" >
							<el-form :model="formAlignRight" label-width="120px">
							  	<el-form-item label="姓名">
							    	林木木
							  	</el-form-item>
							  	<el-form-item label="角色">
							    	投资经理
							  	</el-form-item>
							  	<el-form-item label="地区">
							    	上海
							  	</el-form-item>
							  	<el-form-item label="手机号">
							    	150****1111
							  	</el-form-item>
							  	<el-form-item label="微信号">
							    	绑定
							  	</el-form-item>
							  	<el-form-item label="备注">
							    	银江资本
							  	</el-form-item>
							</el-form>
					</div>
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					项目编码
				</div>
				<div class="item-content item-single" >
					<div class="button blue" @click="dialogFormVisible = true">重置密码</div>
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					我的点评
				</div>
				<div class="item-content" >
					<div style="margin-bottom:10px;">
						<div class="block-cont n-margin">
							<div class="cont-img">
								<img src="../../assets/touxiang.png" style="width:100%;height:100%">
							</div>
							<div class="cont-word" style="margin-top:2px;">
								<span class="name">林森</span>
								<span style="margin-left:10px;">投资总监（上海）</span><br>
								<span>2016/11/30 12:38</span>
							</div>
							<div class="note-label note-label2">
								投资点评
							</div>
						</div>
						<div class="right-cont">
							云财经跟进：1、律师需要跟进关于对赌条款的理解；2、深度跟踪云财经和爱股票的导流，并协助黄拓总拓展渠道（黄总偏技术，需要打磨）；3、云财经需要合伙人级别的市场、商务及产品的人员，我们应
						</div>
					</div>
					<div style="margin-bottom:10px;">
						<div class="block-cont n-margin">
							<div class="cont-img">
								<img src="../../assets/touxiang.png" style="width:100%;height:100%">
							</div>
							<div class="cont-word" style="margin-top:2px;">
								<span class="name">林森</span>
								<span style="margin-left:10px;">投资总监（上海）</span><br>
								<span>2016/11/30 12:38</span>
							</div>
							<div class="note-label note-label2">
								投资点评
							</div>
						</div>
						<div class="right-cont">
							云财经跟进：1、律师需要跟进关于对赌条款的理解；2、深度跟踪云财经和爱股票的导流，并协助黄拓总拓展渠道（黄总偏技术，需要打磨）；3、云财经需要合伙人级别的市场、商务及产品的人员，我们应
						</div>
					</div>
				</div>
			</div>
		</div>
		<el-dialog title="重置密码" v-model="dialogFormVisible">
		  	<el-form :model="formAlignRight">
			  	<el-form-item style="text-align:center">
		      		<el-input auto-complete="off" class="edit-input" placeholder="原密码" type="password"></el-input>
		    	</el-form-item>
		    	<el-form-item>
		      		<el-input auto-complete="off" class="edit-input" placeholder="新密码" type="password"></el-input>
		   		 </el-form-item>
		    	<el-form-item>
		      		<el-input auto-complete="off" class="edit-input" placeholder="再次输入新密码" type="password"></el-input>
		    	</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer" style="text-align:center">
			  	<div class="button grey" style="margin-right:15px;" @click="dialogFormVisible = false">取消</div>
			  	<div class="button blue" @click="dialogFormVisible = false">确定</div>
			</div>
		</el-dialog>
	</div>
</template>
<script>
  export default {
    data() {
      return {
        formAlignRight: {
          name: '',
          region: '',
          type: ''
        },
        dialogFormVisible: false
      };
    }
  }
</script>
<style lang="less">
	.person-box{
		width: 100%;
		min-height: 200px;
		background-color: #fff;
	    box-shadow: 0 0 4px 0 rgba(44, 77, 109, 0.2);
	    margin-top: 25px;
	    padding: 20px 0px;
	    .info-box{
	    	padding: 0px 10px;
	    	width: 280px;
	    	min-height: 290px;
	    	border: 4px solid #f1f2f7;
	    	.el-form-item {
			     margin-bottom: 0px; 
			}
	    	img{
	    		display:block;
	    		margin: 20px auto;
	    		width: 60px;
	    		height: 60px;
	    	}
	    }
	}
	
	.block-cont{
		margin-bottom: 3px;
		background-color: #f1f2f7;
		height: 60px;
		padding: 10px;
		.note-label{
			margin-top: 3px;
			float: right;
			color: #fff;
			padding: 8px 16px;
			background-color: #5ac0de;
		}
		.note-label2{
			background-color: #51ccb3;
		}
	}
	.right-cont{
		font-size: 14px;
		padding: 5px;
		width: 100%;
		border: 4px solid #f1f2f7;
		// min-height: 100px;
	}
	.edit-input.el-input{
		margin: 0 auto;
		width: 350px;
	}
	.el-dialog__body{
		padding-bottom: 0px;
	}
</style>