<template>
  <div class="app">
    <el-form
      ref="ruleFormRef"
      :model="loginForm"
      status-icon
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
    >
      <div class="close" @click="onShow" v-bind:title="message">
        <component style="width: 1em; height: 1em; margin-right: 8px;" :is="iconName"></component>
      </div>
      <h1>
        <span>Login</span>
      </h1>
      <el-form-item label="Email" prop="email">
        <el-input v-model="loginForm.email" :clearable="true" type="text"></el-input>
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input show-password v-model="loginForm.password"  type="password"></el-input>
      </el-form-item>
      <p>
        No account number?
        <el-link href="#/Register">Register</el-link>&nbsp;now
      </p>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">Submit</el-button>
        <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts" setup>
import { rules, loginForm, submitForm, ruleFormRef, onShow } from "../utils/loginFormManage";
import { resetForm } from "../utils/restForm"
console.log("人生如逆旅，我亦是行人。")
const message = '点击可更改透明度'
const iconName = 'cloudy'
</script>
<style lang="scss" scoped>
@import "@/style/login.scss";
</style>
