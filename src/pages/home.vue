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
          <el-menu-item index="3"><i class="iconfont icon-icon23"></i>未投项目</el-menu-item>
          <el-submenu index="4">
            <template slot="title"><i class="iconfont icon-wenjianjiafolder79"></i>我的项目</template>
            <el-menu-item-group>   
              <router-link :to="{name:'my-pop'}">         
                <el-menu-item index="4-1">已发布项目</el-menu-item>
              </router-link>         
              <router-link :to="{name:'my-drafts'}">
                <el-menu-item index="4-2">我的草稿箱</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title"><i class="iconfont icon-chart"></i>基金统计</template>
            <el-menu-item-group>
              <el-menu-item index="5-1">选项1</el-menu-item>
              <el-menu-item index="5-2">选项2</el-menu-item>
              <el-menu-item index="5-3">选项3</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title"><i class="iconfont icon-gonggao"></i>公告中心</template>
            <el-menu-item-group>
              <el-menu-item index="6-1">选项1</el-menu-item>
              <el-menu-item index="6-2">选项2</el-menu-item>
              <el-menu-item index="6-3">选项3</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <router-link :to="{name:'personal'}">
            <el-menu-item index="7"><i class="iconfont icon-zl_lianxiren"></i>个人中心</el-menu-item>
          </router-link>
          <el-menu-item index="8"><i class="iconfont icon-yiwancheng"></i>公众号文章</el-menu-item>
        </el-menu>
      </el-col>
    </div>
    <div class="top-box">
        <div class="head-image">
          <img src="../assets/touxiang.png" style="width:100%">
        </div>
        <div class="head-word">
          <span class="name">林木木</span><i class="iconfont icon-tuichu" style="margin-left:10px;color:#888;cursor:pointer"></i><br>
          <span class="position">投资经理（上海）</span>        
        </div>
        <div class="head-input">
          <input placeholder="请输入查询内容">
          <div class="input-btn">
            查询 <i class="el-icon-search"></i>
          </div>
        </div>
    </div>
    <div class="content-box">
        <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    
  },
  mounted:function() {
    
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
      // .el-menu-item{
      //   background-color: #32323a;
      // }
    }
    .top-box{
      position: absolute;
      top: 0px;
      left:260px;
      right:0px;
      height: 80px;
      background-color: #fff;
      padding: 10px 20px;
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
