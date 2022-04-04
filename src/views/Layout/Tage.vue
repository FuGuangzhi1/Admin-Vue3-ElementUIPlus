<template>
    <span>
        <el-tabs
            v-model="editableTabsValue"
            type="card"
            class="demo-tabs"
            closable
            @tab-remove="removeTab"
            @tab-click="toLink"
        >
            <el-tab-pane
                v-for="item in editableTabs"
                :key="item.name"
                :label="item.title"
                :name="item.name"
            ></el-tab-pane>
        </el-tabs>
    </span>
</template>
<script lang="ts" setup>
import { editableTabs, editableTabsValue, toLink } from '@/business/tageBLL';

const removeTab = (targetName: string) => {
    const tabs = editableTabs.value
    let activeName = editableTabsValue.value
    if (activeName === targetName) {
        tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
                const nextTab = tabs[index + 1] || tabs[index - 1]
                if (nextTab) {
                    activeName = nextTab.name
                }
            }
        })
    }

    editableTabsValue.value = activeName
    editableTabs.value = tabs.filter((tab) => tab.name !== targetName)
}
</script>
<style>
.demo-tabs > .el-tabs__content {
    padding: 32px;
    background-color: #f4f5f7;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}

.el-tabs__content {
    padding: 0px !important;
}
</style>
