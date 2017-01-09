<template>
	<div>
		<div class="fund-summary">
			<router-link :to="{name: 'my-creat',query:{id:$route.query.id}}" class="link" v-if="user.role.authority.project_edit==1">
				<div class="edit">
					<i class="el-icon-edit"></i>
					编辑
				</div>
			</router-link>
			<div class="itemimg">
				<img :src="photourl">
				<div>{{info.project_name}}</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					项目简介
				</div>
				<div class="item-content">
					{{info.project_introduction}}
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					项目编码
				</div>
				<div class="item-content item-single" >
					{{info.project_code}}
				</div>
			</div>
			<div class="sum-item" v-if="info.evaluateAvg">
				<div class="item-title">
					项目评级
				</div>
				<div class="item-content" style="padding-top:40px;">
					<img :src="info.evaluateAvg.fileEvaluate.url" style="width:100px;height:100px">
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					项目阶段
				</div>
				<div class="item-content item-single" >
					{{info.project_stage}}
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					项目估值
				</div>
				<div class="item-content item-single" >
					{{info.valuation}}
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					行业／领域
				</div>
				<div class="item-content" >
					<span class="item-label" v-for="i in tags">{{i.name}}</span>
				</div>
			</div>
			<div class="sum-item" style="width:100%">
				<div class="item-title">
					项目团队
				</div>
				<div class="item-team clearfix">
					<div class="head-image">
			          <img :src="info.createUser.photo.url" style="width:100%">
			        </div>
			        <div class="head-word">
			          <span class="name">{{info.createUser.name}}</span><br>
			          <span class="position">{{info.createUser.position}}({{info.createUser.address}})</span>
			        </div>
		        </div>
				<div class="item-content clearfix">
					<div class="item-team clearfix" v-for="i in team">
						<div class="head-image">
				          <img :src="i.img" style="width:100%">
				        </div>
				        <div class="head-word">
				          <span class="name">{{i.username}}</span><br>
				          <span class="position">{{i.position}}（{{i.address}}）</span>
				        </div>
			        </div>
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					商业计划书
				</div>
				<div class="item-content" style="padding-top:40px;" v-show="pdf">
					<div style="text-align:center">  
						  <span>页数: <span id="page_num"></span> / <span id="page_count"></span></span>	    
					</div>

					<div style="margin-top:20px;position:relative">
						<div id="prev" style="top:50%;left:0px;position:absolute;font-size:40px;cursor:pointer">
							<i class="el-icon-arrow-left"></i>
						</div>
						<div id="next" style="top:50%;right:0px;position:absolute;font-size:40px;cursor:pointer">
							<i class="el-icon-arrow-right"></i>
						</div>
						<canvas id="the-canvas" style="border:1px solid black;width:100%;"></canvas>
					</div>
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					立项理由
				</div>
				<div class="item-content">
					{{info.project_reason}}
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					公司名称
				</div>
				<div class="item-content item-single">
					{{info.company_name}}
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					公司网站
				</div>
				<div class="item-content item-single" style="text-decoration:underline;color:blue">
					<a :href="info.company_web">
						{{info.company_web}}
					</a>				
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					公司app
				</div>
				<div class="item-content item-single">
					{{info.company_app}}	
				</div>
			</div>
			<div class="sum-item">
				<div class="item-title">
					公司公众号
				</div>
				<div class="item-content item-single">
					{{info.company_public}}				
				</div>
			</div>
			<div class="sum-item sum-double">
				<div class="item-title">
					公司创始人
				</div>
				<div class="item-content item-single">
					{{info.company_founder}}			
				</div>
			</div>
			<div class="sum-item sum-double">
				<div class="item-title item-title2">
					联系方式
				</div>
				<div class="item-content item-single">
					{{info.company_tel}}			
				</div>
			</div>
			<div class="sum-item sum-double">
				<div class="item-title">
					公司联系人
				</div>
				<div class="item-content item-single">
					{{info.company_contact}}			
				</div>
			</div>
			<div class="sum-item sum-double">
				<div class="item-title item-title2">
					联系方式
				</div>
				<div class="item-content item-single">
					{{info.contact_phone}}			
				</div>
			</div>
		</div>
		<!-- <div class="fund-summary" v-show="edit==true">
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
		</div> -->
	</div>
</template>
<script>
import { getProjectFile } from '../../ajax/get.js'
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
	    	pdf:null,
    	  team:[],
    	  value2:'',
    	  options2:[],
    	  labelval:'',
    	  tags:[],
    	  photoid:null,
    	  photourl:'',
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
  	},
  	methods:{
  		getfile(){
	      	getProjectFile({
	      		projectId:this.$route.query.id
	      	}).then((res) => {
	      		this.pdf = res.data.projectFile.proposal.url

	      		var url = res.data.projectFile.proposal.url;
			  var pdfDoc = null,
			      pageNum = 1,
			      pageRendering = false,
			      pageNumPending = null,
			      scale = 0.8,
			      canvas = document.getElementById('the-canvas'),
			      ctx = canvas.getContext('2d');
			  function renderPage(num) {
			    pageRendering = true;
			    // Using promise to fetch the page
			    pdfDoc.getPage(num).then(function(page) {
			      var viewport = page.getViewport(scale);
			      canvas.height = viewport.height;
			      canvas.width = viewport.width;

			      // Render PDF page into canvas context
			      var renderContext = {
			        canvasContext: ctx,
			        viewport: viewport
			      };
			      var renderTask = page.render(renderContext);

			      // Wait for rendering to finish
			      renderTask.promise.then(function () {
			        pageRendering = false;
			        if (pageNumPending !== null) {
			          // New page rendering is pending
			          renderPage(pageNumPending);
			          pageNumPending = null;
			        }
			      });
			    });

			    // Update page counters
			    document.getElementById('page_num').textContent = pageNum;
			  }

			  /**
			   * If another page rendering in progress, waits until the rendering is
			   * finised. Otherwise, executes rendering immediately.
			   */
			  function queueRenderPage(num) {
			    if (pageRendering) {
			      pageNumPending = num;
			    } else {
			      renderPage(num);
			    }
			  }

			  function onPrevPage() {
			    if (pageNum <= 1) {
			      return;
			    }
			    pageNum--;
			    queueRenderPage(pageNum);
			  }
			  document.getElementById('prev').addEventListener('click', onPrevPage);

			  /**
			   * Displays next page.
			   */
			  function onNextPage() {
			    if (pageNum >= pdfDoc.numPages) {
			      return;
			    }
			    pageNum++;
			    queueRenderPage(pageNum);
			  }
			  document.getElementById('next').addEventListener('click', onNextPage);

			  /**
			   * Asynchronously downloads PDF.
			   */
			  PDFJS.getDocument(url).then(function (pdfDoc_) {
			    pdfDoc = pdfDoc_;
			    document.getElementById('page_count').textContent = pdfDoc.numPages;

			    // Initial/first page rendering
			    renderPage(pageNum);
			  });
			}).catch((e) => {
                
            })
	    },
  		getInfoin(){
	    	console.log(this.info)
	    	if (this.info.logo) {
				this.photoid = this.info.logo.id
				this.photourl = this.info.logo.url
			}
			if (this.info.tab) {
				var self = this
				self.tags = []
				this.info.tab.forEach(function(list){
					self.tags.push({name:list})
				})
			}
			if (this.info.project_member) {
				var self = this
				self.team = []
				this.info.project_member.forEach(function(list){
					var photo;
					var address
					var position
					if (list.photo) {
						photo = list.photo.url
					}
					else{
						photo = "../static/img/touxiang.png"
					}
					if (list.address) {
						address = list.address
					}
					else{
						address = ' '
					}
					if (list.position) {
						position = list.position
					}
					else{
						position = ' '
					}
					self.team.push({id:list.id,img:photo,username:list.name,role:list.role.roleName,address:address,position:position})
				})
			}
	    }
  	},
  	mounted:function(){
  		this.getInfoin()
  		this.getfile()
  	}
}
</script>
<style lang="less">
	.item-content{
		min-height: 40px;
	}
</style>