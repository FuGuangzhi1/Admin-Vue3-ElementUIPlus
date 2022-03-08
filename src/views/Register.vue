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
            <span class="close" @click="onShow" v-bind:title="message">×</span>
            <h1>Register</h1>
            <el-form-item label="Email" prop="email">
                <el-input v-model="loginForm.email" type="text" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="Password" prop="password">
                <el-input
                    show-password
                    v-model="loginForm.password"
                    type="password"
                    autocomplete="off"
                ></el-input>
            </el-form-item>
            <p>
                Back to
                <el-link href="#">Login</el-link>
            </p>
            <el-form-item>
                <el-button type="primary" @click="submitForm(ruleFormRef)">Create</el-button>
                <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script lang="ts" setup>
import { rules, loginForm, submitForm, ruleFormRef, onShow } from "../utils/registerFormManage";
import { resetForm } from "../utils/restForm"
const message = '点击可更改透明度'

</script>
<style lang="scss" scoped>
@import "@/style/login.scss";
</style>
