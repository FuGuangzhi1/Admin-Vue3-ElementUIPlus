<template>
  <div class="app">
    <div class="buttonClass">
      <el-button @click="goRegister">账号注册</el-button>
      <el-button @click="goNight">夜间模式</el-button>
    </div>
    <el-form ref="ruleFormRef" :model="loginForm" status-icon :rules="rules" label-width="120px" class="demo-ruleForm">
      <div class="close" @click="onShow" v-bind:title="message">
        <component style="width: 1em; height: 1em; margin-right: 8px;" :is="iconName"></component>
      </div>
      <!-- <h1>
        <span>Login</span>
      </h1> -->
      <el-form-item label="Email" prop="email">
        <el-input v-model="loginForm.email" :clearable="true" type="text"></el-input>
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input show-password v-model="loginForm.password" type="password"></el-input>
      </el-form-item>
      <!-- <p>
        No account number?
        <el-link href="#/Register" :underline="false">Register</el-link>&nbsp;now
      </p> -->
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">Login</el-button>
        <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
      </el-form-item>
    </el-form>  </div>
</template>
<script lang="ts" setup>
import { rules, loginForm, submitForm, ruleFormRef, onShow, goRegister,goNight } from "../utils/loginFormManage";
import { resetForm } from "../utils/restForm"
console.log("人生如逆旅，我亦是行人。")
console.log("项目开源地址https://github.com/FuGuangzhi1/showtimecodeweb")
console.log("喜欢就点个Star  吧")
const message = '点击可更改透明度'
const iconName = 'cloudy'
</script>
<style lang="scss" scoped>
@import "@/style/login.scss";
</style>
