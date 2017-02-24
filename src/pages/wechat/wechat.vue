<template>
	<div>
		<el-breadcrumb separator="/">
		  	<el-breadcrumb-item>
		  	<span style="margin-left:5px;position:relative;padding-left:13px;">
		  		<i class="iconfont icon-shouye" style="position:absolute;font-size:18px;left:-5px;top:-1px;"></i>主页</span>
		  	</el-breadcrumb-item>
		  	<el-breadcrumb-item>公众号文章</el-breadcrumb-item>
		</el-breadcrumb>
		<div class="fund-summary" style="padding-top:20px;margin-top:20px;background-color:white;border: 1px solid #d3dce6;box-shadow: 0 0 4px 0 rgba(44, 77, 109, 0.2)">
			<div class="chatbox" v-for="i in info.item">
				<a :href="i.content.news_item[0].url" target="_blank">
					<div class="chatimg">
						<img :src="'http://read.html5.qq.com/image?src=forum&q=5&r=0&imgflag=7&imageUrl='+i.content.news_item[0].thumb_url">
					</div>
					<div class="chatword">
						<div class="title">{{i.content.news_item[0].title}}</div>
						<div class="date">{{formatDate(i.update_time)}}</div>
					</div>
				</a>
			</div>
			<el-pagination v-if="intotal"
		      @size-change="handleSizeChange"
		      @current-change="handleCurrentChange"
		      :current-page="currentPage"
		      :page-size="12"
		      layout="total , prev, pager, next, jumper"
		      :total='intotal'
		      style="margin:20px auto;text-align:center">
		    </el-pagination>
		</div>
		
	</div>
</template>
<script>
import {getMaterialList} from '../../ajax/get.js'

export default {
    data() {
        return {
        	intotal:null,
        	currentPage:1,
            info:''
        }
    },
    methods: {
    	formatDate(time)   {  
		  var   now = new Date((time-0)*1000)   
		  var   year = now.getFullYear();     
		  var   month = "0" + (now.getMonth()+1);     
		  var   date = "0" +(now.getDate());         
		  return   year+"-"+month.substr(-2)+"-"+date.substr(-2)  
		},
    	handleSizeChange(val) {
	        console.log(`每页 ${val} 条`);
	    },
	    handleCurrentChange(val) {
	        this.currentPage = val;
	        console.log(`当前页: ${val}`);
	        getMaterialList({
				page:val,
				line:12
			}).then((res) => {
				var  data = JSON.parse(res.data)
				this.info = data
				this.intotal = data.total_count
			})  
	    },
        getList(){
	    	getMaterialList({
				page:1,
				line:12
			}).then((res) => {
				var  data = JSON.parse(res.data)
				this.info = data
				this.intotal = data.total_count
			}) 
	    }
    },
    mounted:function(){
    	this.getList()
    }
}
</script>
<style lang="less" scoped>
	.chatbox{
		width: 220px;
		display: inline-block;
		margin-bottom: 20px;
		margin-left: 20px;
		.chatimg{
			width: 100%;
			height: 150px;
			img{
				width: 100%;
				height: 100%;
			}
		}
		.chatword{
			margin-top: 10px;
			width: 100%;
			border-left: 5px solid #5ac0de;
			height: 40px;
			padding-left: 10px;
			.title{
				line-height: 20px;
				font-size: 14px;
				color: #333;
				overflow: hidden;
    			white-space: nowrap;
    			text-overflow: ellipsis;
			}
			.date{
				line-height: 20px;
				font-size: 12px;
				color: #666;
			}
		}
	}
</style>