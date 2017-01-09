<template>
	<div>
		<table class="tableStyle" style="margin-top:25px;">
			<thead>
				<tr>
					<th>账号</th>
					<th>姓名</th>
					<th>角色</th>
					<th>职位</th>
					<th>操作</th>

				</tr>
			</thead>
			<tbody>
				<tr v-for="(i,index) in lists">
					<td>{{i.userName}}</td>
					<td>{{i.name}}</td>
					<td>{{i.role.roleName}}</td>
					<td>{{i.position}}</td>
					<td>
						<router-link :to="{name: 'edit-user',query:{id:i.id}}" class="link">
							编辑
						</router-link>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script>
import {getUserList} from '../../ajax/get.js'
export default {
    data() {
        return {
        	lists:''
        }
    },
    methods: {
        getUserList(){
	    	getUserList({
				type:2
			}).then((res) => {
				this.lists = res.data.list
			}) 
	    }
    },
    mounted:function(){
    	this.getUserList()
    }
}
</script>
<style lang="less">
	.link{
		&:hover{
			color: #4990e2;
		}
	}
</style>