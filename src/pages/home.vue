<template>
  <div class="content">
    <div class="left-box">
      <div class="logo">
        <img src="../assets/logo.png" style="height:50px;">
      </div>
      <el-col :span="8" style="width:100%">
        <el-menu  style="background-color:#32323a">
          <router-link :to="{name:'main'}">
            <el-menu-item index="1"><i class="iconfont icon-shouye"></i>主页</el-menu-item>
          </router-link>
          <router-link :to="{name:'fund-list'}">
            <el-menu-item index="2"><i class="iconfont icon-heimingdan"></i>基金列表</el-menu-item>
          </router-link>
          <!-- <el-submenu index="2">
            <template slot="title"><i class="el-icon-message"></i>基金列表</template>
            <el-menu-item-group>
              <router-link :to="{name:'fund-detail'}">
                <el-menu-item index="2-1">基金一</el-menu-item>
              </router-link>
              <router-link :to="{name:'fund-detail'}">
                <el-menu-item index="2-2">基金二</el-menu-item>
              </router-link>
              <router-link :to="{name:'fund-detail'}">
                <el-menu-item index="2-3">基金三</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu> -->
          <router-link :to="{name:'fund-unlist'}" v-if="type.type!=1">      
            <el-menu-item index="3"><i class="iconfont icon-icon23"></i>未投项目</el-menu-item>
          </router-link> 
          <el-submenu index="4" v-if="type.type!=1&&authority.project_create==1">
            <template slot="title"><i class="iconfont icon-wenjianjiafolder79"></i>我的项目</template>
            <el-menu-item-group>
              <router-link :to="{name:'my-pop'}">         
                <el-menu-item index="4-1" class="sub-title">已发布项目</el-menu-item>
              </router-link>         
              <router-link :to="{name:'my-drafts'}">
                <el-menu-item index="4-2" class="sub-title">我的草稿箱</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title"><i class="iconfont icon-chart"></i>基金统计</template>
            <el-menu-item-group>
              <router-link :to="{name:'count-all'}">
                <el-menu-item index="5-1" class="sub-title">统计总览</el-menu-item>
              </router-link>
              <router-link :to="{name:'count-label'}">
                <el-menu-item index="5-2" class="sub-title">项目标签统计</el-menu-item>
              </router-link>
              <router-link :to="{name:'count-local'}">
                <el-menu-item index="5-3" class="sub-title">项目地区统计</el-menu-item>
              </router-link>
              <router-link :to="{name:'count-stage'}">
                <el-menu-item index="5-4" class="sub-title">项目阶段统计</el-menu-item>
              </router-link>
              <router-link :to="{name:'count-rate'}">
                <el-menu-item index="5-5" class="sub-title">项目评级统计</el-menu-item>
              </router-link>
              <router-link :to="{name:'count-source'}">
                <el-menu-item index="5-6" class="sub-title">项目来源统计</el-menu-item>
              </router-link>
              <router-link :to="{name:'count-user'}">
                <el-menu-item index="5-7" class="sub-title">项目负责人统计</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
          <router-link :to="{name:'notice-list'}">
            <!-- 公告中心 -->
            <el-menu-item index="6"><i class="iconfont icon-gonggao" style="margin-right:13px;"></i>
              <!-- <el-badge :value="12">公告中心</el-badge> -->
              公告中心
            </el-menu-item>
          </router-link>
          <!-- <el-submenu index="6">
            <template slot="title"><i class="iconfont icon-gonggao"></i>公告中心(正在建设中)</template>
            <el-menu-item-group>
              <el-menu-item index="6-1" @click.native="alert">选项1</el-menu-item>
              <el-menu-item index="6-2" @click.native="alert">选项2</el-menu-item>
              <el-menu-item index="6-3" @click.native="alert">选项3</el-menu-item>
            </el-menu-item-group>
          </el-submenu> -->
          <router-link :to="{name:'personal'}">
            <el-menu-item index="7"><i class="iconfont icon-zl_lianxiren"></i>个人中心</el-menu-item>
          </router-link>
          <router-link :to="{name:'wechat'}">
            <el-menu-item index="8"><i class="iconfont icon-yiwancheng"></i>公众号文章</el-menu-item>
          </router-link>
          <el-submenu index="9" v-if="type.type==2">
            <template slot="title"><i class="el-icon-setting" style="margin-right:18px;"></i>帐号管理</template>
            <el-menu-item-group>
              <router-link :to="{name:'add-user'}">
                <el-menu-item index="9-1" class="sub-title">新建帐号</el-menu-item>
              </router-link>
              <router-link :to="{name:'list-user'}">
                <el-menu-item index="9-2" class="sub-title">账号列表</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </div>
    <div class="top-box">
        <div class="head-image" style="border-radius:50%">
          <img :src="url" style="width:100%;height:100%;border-radius:50%">
        </div>
        <div class="head-word">
          <span class="name">{{userA.name}}</span>
          <i class="iconfont icon-tuichu" style="margin-left:10px;color:#888;cursor:pointer" @click="logout"></i>
          <br>
          <span class="position">{{userA.position}}（{{userA.address}}）</span>    
        </div>
        <!-- <div class="head-input">
          <input placeholder="请输入查询内容">
          <div class="input-btn">
            查询 <i class="el-icon-search"></i>
          </div>
        </div> -->
    </div>
    <div class="content-box">
        <router-view></router-view>
    </div>
  </div>
</template>
<script>
import {getUser} from '../ajax/get.js'

import {Logout} from '../ajax/post.js'

export default {
  data() {
    return {
      userA:'',
      type:'',
      authority:'',
      url:''
    }
  },
  methods: {
    alert(){
      swal({
        title: "",
        type: 'success',
        text: "正在开发中，敬请期待",
        timer: 2000,
      })
    },
    getuser(){
        getUser().then((res) => {
          this.userA = res.data.user
          this.type = res.data.user.role
          this.authority = res.data.user.role.authority
          this.url = res.data.user.photo.url
        })
    },
    logout(){
      swal({
        title: "",
        text: "确定注销？",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "是",
        cancelButtonText: "否",
        closeOnConfirm: true,
        html: false
      }, function(){
        Logout().then((res) => {
            router.push({name: 'sign-in'})
          })
      })    
    }
  },
  mounted:function() {
    this.getuser()
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .content{
    background-color: #f1f2f7;
    height: 100%;
    width: 100%;
    padding-left: 260px;
    padding-top: 80px;
    .left-box{
      overflow: scroll;
      position: absolute;
      top: 0px;
      left: 0px;
      width: 260px;
      height: 100%;
      background-color: #32323a;
      .logo{
        padding: 15px;
        padding-left: 40px;
        width: 100%;
        height: 80px;
        background-color: #2c4c6d;
      }
      .el-menu-item, .el-submenu__title{
        color: #fff;
        height: 50px;
      }
      .el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active, .el-menu-item.is-active {
        color: #20a0ff !important;
      }
      .el-menu-item-group__title{
        padding-top: 0px;
      }
      .el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item:hover, .el-menu--horizontal.el-menu--dark .el-submenu .el-submenu-title:hover, .el-menu-item:hover {
          background-color: #222126;
      }
      .el-submenu .el-menu-item:hover, .el-submenu__title:hover {
          background-color: #222126;
      }
      .el-submenu .el-menu {
        background-color: #32323a;
      }
      .sub-title{
        padding-left: 50px !important;
        height: 40px;
        line-height: 40px;
      }
      // .el-menu-item{
      //   background-color: #32323a;
      // }
    }
    .el-badge__content.is-fixed {
       top: 15px;
       right: 0px;
       height: 20px;
    }
    .top-box{
      position: absolute;
      top: 0px;
      left:260px;
      right:0px;
      height: 80px;
      border-bottom: 1px solid rgba(44, 77, 109, 0.2);
      background-color: #fff;
      padding: 10px 20px;
      box-shadow: 0 4px 4px 0 rgba(44, 77, 109, 0.2);
      -webkit-box-shadow: 0 0px 4px 0 rgba(44, 77, 109, 0.2);
      -moz-box-box-shadow: 0 0px 4px 0 rgba(44, 77, 109, 0.2);
      .head-image{
        float: left;
        width: 60px;
        height: 60px;
      }
      .head-word{
        float: left;
        margin-left: 20px;
        margin-top: 18px;
        .name{
          font-size: 16px;
          color: #333;
        }
        .position{
          font-size: 12px;
          color: #888;
        }
      }
      .head-input{
          float: right;
          width: 300px;
          height: 40px;
          background:#ffffff;
          border:1px solid #cccccc;
          border-radius:20px;
          padding-right: 80px;
          margin-top: 10px;
          position: relative;
          input{
            margin-left: 20px;
            border: none;
            width: 200px;
            height: 100%;         
          }
          .input-btn{
            text-align: center;
            color: #fff;
            line-height: 34px;
            cursor: pointer;
            top: 2px;
            right: 2px;
            position: absolute;
            width: 80px;
            height: 34px;
            border-radius: 20px;
            background-color: #4990e2;
          }
      }
    }
    .content-box{
      overflow: scroll;
      padding: 20px;
      width: 100%;
      height: 100%;
    }
  }
  .iconfont{
    margin-right: 15px;
  }
</style>
