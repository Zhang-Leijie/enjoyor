<template>
	<div>
		<div class="fund-summary" v-show="edit==false">
			<div class="edit" @click="edit=!edit">
				<i class="el-icon-edit"></i>
				编辑
			</div>
			<div class="itemimg">
				<img src="../../assets/beijing.png">
				<div>基金A项目</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					项目简介
				</div>
				<div class="item-content">
					开展商务合作、数据接口合作，研发构建数据仓库，将有价值的数据资料进行打包销售；以数据挖掘分析为基础，研发新产品，如根据数据统计分析的股票池展示、交易所资金数据统计分析等。前期的大量的产品研发及铺垫，现阶段营收逐步增加，将在第四季度开始新建市场部及重组运营部，加大产品的推广力度，全面创收。
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					项目编码
				</div>
				<div class="item-content item-single" >
					001
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					项目评级
				</div>
				<div class="item-content item-single" >
					A级
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					项目阶段
				</div>
				<div class="item-content item-single" >
					第一阶段
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					项目估值
				</div>
				<div class="item-content item-single" >
					10000000
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					行业／领域
				</div>
				<div class="item-content" >
					<span class="item-label">共享经济</span>
					<span class="item-label">共享经济</span>
				</div>
			</div>
			<div class="sum-item" style="width:100%">
				<div class="item-title">
					项目团队
				</div>
				<div class="item-content clearfix" style="padding-top:20px;">
					<div class="item-team clearfix">
						<div class="head-image">
				          <img src="../../assets/touxiang.png" style="width:100%">
				        </div>
				        <div class="head-word">
				          <span class="name">林木木</span><br>
				          <span class="position">投资经理（上海）</span>
				        </div>
			        </div>
			        <div class="item-team clearfix">
						<div class="head-image">
				          <img src="../../assets/touxiang.png" style="width:100%">
				        </div>
				        <div class="head-word">
				          <span class="name">林木木</span><br>
				          <span class="position">投资经理（上海）</span>
				        </div>
			        </div>
			        <div class="item-team clearfix">
						<div class="head-image">
				          <img src="../../assets/touxiang.png" style="width:100%">
				        </div>
				        <div class="head-word">
				          <span class="name">林木木</span><br>
				          <span class="position">投资经理（上海）</span>
				        </div>
			        </div>
			        <div class="item-team clearfix">
						<div class="head-image">
				          <img src="../../assets/touxiang.png" style="width:100%">
				        </div>
				        <div class="head-word">
				          <span class="name">林木木</span><br>
				          <span class="position">投资经理（上海）</span>
				        </div>
			        </div>
			        <div class="item-team clearfix">
						<div class="head-image">
				          <img src="../../assets/touxiang.png" style="width:100%">
				        </div>
				        <div class="head-word">
				          <span class="name">林木木</span><br>
				          <span class="position">投资经理（上海）</span>
				        </div>
			        </div>
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					商业计划书
				</div>
				<div class="item-content" style="padding-top:40px;">
					<img src="../../assets/beijing.png" style="width:210px;height:140px;border:5px solid #d4dbe1">
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					立项理由
				</div>
				<div class="item-content">
					开展商务合作、数据接口合作，研发构建数据仓库，将有价值的数据资料进行打包销售；以数据挖掘分析为基础，研发新产品，如根据数据统计分析的股票池展示、交易所资金数据统计分析等。前期的大量的产品研发及铺垫，现阶段营收逐步增加，将在第四季度开始新建市场部及重组运营部，加大产品的推广力度，全面创收。
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					公司名称
				</div>
				<div class="item-content item-single">
					西柚科技有限公司
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					公司网站
				</div>
				<div class="item-content item-single">
					<a href="http://www.xiyoukeji.com/">
						www.xiyoukeji.com
					</a>				
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					公司app
				</div>
				<div class="item-content item-single">
					西柚		
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					公司公众号
				</div>
				<div class="item-content item-single">
					杭州西柚科技有限公司				
				</div>
			</div>
			<div class="sum-item sum-double">
				<div class="item-title">
					公司创始人
				</div>
				<div class="item-content item-single">
					LEO				
				</div>
			</div>
			<div class="sum-item sum-double">
				<div class="item-title item-title2">
					联系方式
				</div>
				<div class="item-content item-single">
					400-000-000				
				</div>
			</div>
			<div class="sum-item sum-double">
				<div class="item-title">
					公司联系人
				</div>
				<div class="item-content item-single">
					LEQ				
				</div>
			</div>
			<div class="sum-item sum-double">
				<div class="item-title item-title2">
					联系方式
				</div>
				<div class="item-content item-single">
					400-000-001			
				</div>
			</div>
		</div>
		<div class="fund-summary" v-show="edit==true">
			<div class="sum-item">
				<div class="item-title">
					项目LOGO
				</div>
				<div class="item-content item-single" >
					<el-input placeholder="" class="edit-input"></el-input>
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					项目名称
				</div>
				<div class="item-content item-single" >
					<el-input placeholder="" class="edit-input"></el-input>
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					项目简介
				</div>
				<div class="item-content item-single" >
					<textarea class="pl-textarea"></textarea>
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					项目编码
				</div>
				<div class="item-content item-single" >
					001
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
					<el-select v-model="value" placeholder="请选择" class="edit-input">
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
					<el-input placeholder="" class="edit-input"></el-input>
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					行业／领域
				</div>
				<div class="item-content" >
					<el-input placeholder="" class="edit-input" style="display:inline-block"></el-input>
					<span class="item-label">共享经济</span>
					<span class="item-label">共享经济</span>
				</div>
			</div>
			<div class="sum-item" style="width:100%">
				<div class="item-title">
					项目团队
				</div>
				<div class="item-content clearfix" style="padding-top:20px;">
					<div class="item-team clearfix">
						<div class="head-image">
				          <img src="../../assets/touxiang.png" style="width:100%">
				        </div>
				        <div class="head-word">
				          <span class="name">林木木</span><br>
				          <span class="position">投资经理（上海）</span>
				        </div>
			        </div>
			        <div class="item-team clearfix">
						<div class="head-image">
				          <img src="../../assets/touxiang.png" style="width:100%">
				        </div>
				        <div class="head-word">
				          <span class="name">林木木</span><br>
				          <span class="position">投资经理（上海）</span>
				        </div>
			        </div>
			        <div class="item-team clearfix">
						<div class="head-image">
				          <img src="../../assets/touxiang.png" style="width:100%">
				        </div>
				        <div class="head-word">
				          <span class="name">林木木</span><br>
				          <span class="position">投资经理（上海）</span>
				        </div>
			        </div>
			        <div class="item-team clearfix">
						<div class="head-image">
				          <img src="../../assets/touxiang.png" style="width:100%">
				        </div>
				        <div class="head-word">
				          <span class="name">林木木</span><br>
				          <span class="position">投资经理（上海）</span>
				        </div>
			        </div>
			        <div class="item-team clearfix">
						<div class="head-image">
				          <img src="../../assets/touxiang.png" style="width:100%">
				        </div>
				        <div class="head-word">
				          <span class="name">林木木</span><br>
				          <span class="position">投资经理（上海）</span>
				        </div>
			        </div>
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					商业计划书
				</div>
				<div class="item-content" style="padding-top:40px;">
					<img src="../../assets/beijing.png" style="width:210px;height:140px;border:5px solid #d4dbe1">
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					立项理由
				</div>
				<div class="item-content item-single">
					<textarea class="pl-textarea"></textarea>
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					公司名称
				</div>
				<div class="item-content item-single">
					<el-input placeholder="" class="edit-input"></el-input>
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					公司网站
				</div>
				<div class="item-content item-single">
					<el-input placeholder="" class="edit-input"></el-input>				
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					公司app
				</div>
				<div class="item-content item-single">
					<el-input placeholder="" class="edit-input"></el-input>	
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					公司公众号
				</div>
				<div class="item-content item-single">
					<el-input placeholder="" class="edit-input"></el-input>			
				</div>
			</div>
			<div class="sum-item sum-double">
				<div class="item-title">
					公司创始人
				</div>
				<div class="item-content item-single">
					<el-input placeholder="" class="edit-input"></el-input>			
				</div>
			</div>
			<div class="sum-item sum-double">
				<div class="item-title item-title2">
					联系方式
				</div>
				<div class="item-content item-single">
					<el-input placeholder="" class="edit-input"></el-input>			
				</div>
			</div>
			<div class="sum-item sum-double">
				<div class="item-title">
					公司联系人
				</div>
				<div class="item-content item-single">
					<el-input placeholder="" class="edit-input"></el-input>		
				</div>
			</div>
			<div class="sum-item sum-double">
				<div class="item-title item-title2">
					联系方式
				</div>
				<div class="item-content item-single">
					<el-input placeholder="" class="edit-input"></el-input>	
				</div>
			</div>
			<div style="text-align:center">
				<div class="button blue" @click="edit=!edit">保存</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		getdata: Function
	},
  data () {
    return {
      edit:false,
      options: [{
	      value: '选项1',
	      label: '种子'
	  }, {
	      value: '选项2',
	      label: '天使'
	  }, {
	      value: '选项3',
	      label: 'pre-a'
	  }, {
	      value: '选项4',
	      label: 'A'
	  }, {
	      value: '选项5',
	      label: 'A+'
	  }, {
	      value: '选项6',
	      label: 'B'
	  }, {
	      value: '选项7',
	      label: 'C'
	  }, {
	      value: '选项8',
	      label: 'PE'
	  }, {
	      value: '选项9',
	      label: '新三板'
	  }, {
	      value: '选项10',
	      label: 'pre-ipo'
	  }, {
	      value: '选项11',
	      label: '一级半'
	  }, {
	      value: '选项12',
	      label: '子基金'
	  }],
	  value: ''
    }
  }
}
</script>