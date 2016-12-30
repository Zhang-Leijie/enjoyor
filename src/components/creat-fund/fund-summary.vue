<template>
	<div>
		<div class="fund-summary">
			<div class="sum-item">
				<div class="item-title">
					项目LOGO
				</div>
				<div class="item-content" >
					<el-upload
  						action="//jsonplaceholder.typicode.com/posts/"
  						:on-preview="handlePreview"
  						:on-remove="handleRemove">
						<div class="uploadimg">
							<i class="el-icon-plus"></i>
						</div>
					</el-upload>
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
		  value: '',
		  fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
	    }
	},
  	methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      }
    }
}
</script>