<template>
	<div class="fund-video">
		<router-link :to="{name: 'my-edit',query:{id:$route.query.id}}" class="link" v-if="user.role.authority.project_edit==1">
			<div class="edit">
				<i class="el-icon-edit"></i>
				编辑
			</div>
		</router-link>
		<div class="video" v-if="url">
			<embed :src="url" class="flash" height="500" align="middle" allowFullScreen="true" allowScriptAccess="sameDomain" type="application/x-shockwave-flash">
			</embed>  
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
	    	url:null
	    }
  	},
  	methods:{
	  	geturl(){
	  		if (this.info.video) {
	  			this.url = this.info.video.url
	  		}
	  	},
	  	popUrl(){
	  		Item({
				type:3,
				strProject:JSON.stringify({
					id:this.$route.query.id,
					video:{url:this.url}
				})			
			}).then((res) => {
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
	  	this.geturl()
	}
}
</script>
<style lang="less" scoped>
	.fund-video{
		position: relative;
		padding-top: 90px;
		padding-bottom: 40px;
		.video{
			width: 870px;
			height: 520px;
			margin: 0 auto;
			video{
				width: 100%;
				height: 100%;				
			}
			.flash{
				width: 870px;
				margin: 0 auto;
			}
		}
	}
	@media(max-width:1200px){
		.fund-video{
			position: relative;
			padding-top: 90px;
			padding-bottom: 40px;
			.video{
				width: 650px;
				height: 420px;
				margin: 0 auto;
				video{
					width: 100%;
					height: 100%;				
				}
				.flash{
					width: 650px;
					margin: 0 auto;
				}
			}
		}
	}
</style>