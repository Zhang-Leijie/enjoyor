<template>
	<div>
		<div class="fund-summary" style="padding:40px;">
		  <el-form>
		    <el-form-item label="独角兽潜力" :label-width="formLabelWidth">
		      <el-input auto-complete="off" class="pl-input" v-model="item_one"></el-input>
		    </el-form-item>
		    <el-form-item label="千亿市场" :label-width="formLabelWidth">
		      <el-input auto-complete="off" class="pl-input" v-model="item_two"></el-input>
		    </el-form-item>
		    <el-form-item label="前两名机会" :label-width="formLabelWidth">
		      <el-input auto-complete="off" class="pl-input" v-model="item_three"></el-input>
		    </el-form-item>
		    <el-form-item label="银江生态" :label-width="formLabelWidth">
		      <el-input auto-complete="off" class="pl-input" v-model="item_four"></el-input>
		    </el-form-item>
		    <el-form-item label="变现造血能力" :label-width="formLabelWidth">
		      <el-input auto-complete="off" class="pl-input" v-model="item_five"></el-input>
		    </el-form-item>
		    <el-form-item label="复制和扩张" :label-width="formLabelWidth">
		      <el-input auto-complete="off" class="pl-input" v-model="item_six"></el-input>
		    </el-form-item>
		    <el-form-item label="CEO综合" :label-width="formLabelWidth">
		      <el-input auto-complete="off" class="pl-input" v-model="item_seven"></el-input>
		    </el-form-item>
		    <el-form-item label="团队运营" :label-width="formLabelWidth">
		      <el-input auto-complete="off" class="pl-input" v-model="item_eight"></el-input>
		    </el-form-item>
		    <el-form-item label="估值性价比" :label-width="formLabelWidth">
		      <el-input auto-complete="off" class="pl-input" v-model="item_nine"></el-input>
		    </el-form-item>
		    <el-form-item label="融资退出" :label-width="formLabelWidth">
		      <el-input auto-complete="off" class="pl-input" v-model="item_ten"></el-input>
		    </el-form-item>
		  </el-form>
		  <div  class="dialog-footer" style="text-align:center">
		  	<div class="button blue" @click="postRate">保存</div>
		  </div>
	</div>
</template>
<style lang="less">
	.pl-input{
		margin-bottom: 0px;
	}
	.ratechart{
		width: 1000px;
		margin: 40px auto 0;
		height: 350px;
	}
	.rate-table{
		text-align: center;
		width: 95%;
		margin: 10px auto;
		position: relative;
		.title{
			font-size: 18px;
			color: #666;
		}
		.checkmore{
			color: #4990e2;
			position: absolute;
			right: 0px;
			top: 10px;
		}
	}
</style>
<script>
	import { Rate } from '../../ajax/post.js'
	import { getRateList } from '../../ajax/get.js'
	export default {
		props: {
			info: {
				type: Object
			}
		},
		data () {
		    return {
		    	list:'',
		        formLabelWidth: '100px',
		        item_one:'',
		        item_two:'',
		        item_three:'',
		        item_four:'',
		        item_five:'',
		        item_six:'',
		        item_seven:'',
		        item_eight:'',
		        item_nine:'',
		        item_ten:'',
		        item_all:''
		    }
		},
		methods:{
			postRate(){
				this.item_all = (this.item_one-0) + (this.item_two-0) + (this.item_three-0) + (this.item_four-0) + (this.item_five-0) + (this.item_six-0) +  (this.item_seven-0) + (this.item_eight-0) + (this.item_nine-0) + (this.item_ten-0)
				Rate({
					strEvaluate:JSON.stringify({
			      		project:{
			      			id:this.$route.query.id
			      		},
			      		item_one:Math.floor((this.item_one-0)*10),
			      		item_two:Math.floor((this.item_two-0)*10),
			      		item_three:Math.floor((this.item_three-0)*10),
			      		item_four:Math.floor((this.item_four-0)*10),
			      		item_five:Math.floor((this.item_five-0)*10),
			      		item_six:Math.floor((this.item_six-0)*10),
			      		item_seven:Math.floor((this.item_seven-0)*10),
			      		item_eight:Math.floor((this.item_eight-0)*10),
			      		item_nine:Math.floor((this.item_nine-0)*10),
			      		item_ten:Math.floor((this.item_ten-0)*10),
			      		item_all:Math.floor((this.item_all-0)*10)
		      		})
		      	}).then((res) => {
		      		this.getList()
					swal({
	                    title: "评价成功",
	                    type: 'success',
	                    text: "评价成功",
	                    timer: 2000,
	                })
				}).catch((e) => {
	                swal({
	                    title: "输入有误",
	                    type: 'warn',
	                    text: "输入有误",
	                    timer: 2000,
	                })
	            }) 
			},	
			getList(){
				getRateList({
		      		projectId:this.$route.query.id,
		      		number:1
		      	}).then((res) => {
		      		if (res.data.list[0]) {
		      			this.item_one = (res.data.list[0].item_one/10)
		      			this.item_two = (res.data.list[0].item_two/10)
		      			this.item_three = (res.data.list[0].item_three/10)
		      			this.item_four = (res.data.list[0].item_four/10)
		      			this.item_five = (res.data.list[0].item_five/10)
		      			this.item_six = (res.data.list[0].item_six/10)
		      			this.item_seven = (res.data.list[0].item_seven/10)
		      			this.item_eight = (res.data.list[0].item_eight/10)
		      			this.item_nine = (res.data.list[0].item_nine/10)
		      			this.item_ten = (res.data.list[0].item_ten/10)
		      		}
				}) 
			}
		},
		mounted:function() {
		  	this.getList()
		}
	}
</script>
