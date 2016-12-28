<template>
<div class="sign-in-body">
  <div class="sign-box">
    <div>
        <img src="../assets/logo2.png" class="logoimg">
    </div>
    <div class="logo-box">
        <input placeholder="请输入用户名" v-model="username" type="number" class="input"></input>
        <input placeholder="请输入登陆密码" v-model="password" type="password" class="input"></input>
        <div class="remember">
            <el-checkbox checked style="color:#4990e2">记住密码</el-checkbox>
        </div>
        <router-link class="log" v-bind:class="{blue:username!=null&&password!=null}" :to='{name:"home"}'>
            登陆
        </router-link>
    </div>
  </div>
  <div class="sign-foot"></div>
</div>
</template>
<script>
export default {
  data() {
    return {
        username:null,
        password:null
    }
  },
  methods: {
    
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
    .sign-box{
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 140px;
        background: url("../assets/beijing.png");
        background-size: cover;
        .logoimg{
            height: 30px;
            margin-top: 20px;
            margin-left: 40px;
        }
        .logo-box{
            padding-top: 40px;
            text-align: center;
            width: 500px;
            height: 278px;
            margin: 210px auto;
            background-color: #f1f2f7;
            // opacity: 0.6;
            border-radius: 20px;
            .input{
                font-size: 14px;
                color: #ccc;
                padding: 10px;
                background-color: #fff !important;
                margin: 0px auto 20px;
                height: 40px;
                width: 340px;
                display: block;
            }
            .remember{
                width: 340px;
                margin: 0px auto 20px;
                text-align: left;
            }
            .log{
                display: inline-block;
                cursor: pointer;
                color: #333;
                line-height: 40px;
                margin: 0 auto;
                width: 100px;
                height: 40px;
                border-radius: 20px;
                background-color: #dfdfdf;
            }
            .blue{
                background-color: #4990e2;
                color: #fff;
            }
        }
    }
    .sign-foot{
        background-color: #2c4d6d;
        position: absolute;
        left: 0px;
        right: 0px;
        bottom: 0px;
        height: 140px;
    }
</style>
