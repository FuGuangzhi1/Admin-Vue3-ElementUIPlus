<template>
    <div>
        <div class="openSwitch" @click="watchIsCollapse">
            <component
                style="width: 18px; height: 20px; margin-top: 2px; color:black;"
                :is="iconName"
            ></component>&nbsp;
        </div>
        <el-menu
            class="el-menu-vertical-demo"
            default-active="2"
            @open="handleOpen"
            @close="handleClose"
            :collapse="isCollapse"
            :collapse-transition="false"
        >
            <el-sub-menu :index="item.menuId" v-for="item in menuList" :key="item.menuId">
                <template #title>
                    <component style="width: 20px; height: 20px;" :is="item.icon"></component>
                    <span class="spanParent">{{ item.menuName }}</span>
                </template>

                <el-menu-item
                    :index="subItem.menuId + ''"
                    v-for="subItem in item.children"
                    :key="subItem.menuId"
                    @click="skip(subItem.path, subItem.menuName)"
                >
                    <template #title>
                        <component
                            style="width: 20px; height: 20px; color: #000;"
                            :is="subItem.icon"
                        ></component>
                        <span class="spanChilder">{{ subItem.menuName }}</span>
                    </template>
                </el-menu-item>
            </el-sub-menu>
        </el-menu>
    </div>
</template>

<script lang="ts">
import {
    handleOpen,
    handleClose,
    iconName,
    skip,
} from '@/business/leftMenuBLL'

import HomeApi from '@/api/homeApi'
import { defineComponent, onMounted, ref } from 'vue'
import { getLocalData, setLocalData } from '@/utils/localStorageHelper'
export default defineComponent({
    name: "leftMenu",
    setup(props, { emit, attrs, slots }) {
        const isCollapse = ref<Boolean>(false)
        const menuList: any = ref([])
        onMounted(async () => {
            if (getLocalData('GetMenu') == null) {
                const result = await HomeApi.GetMenuAsync()
                menuList.value = result.data
                setLocalData('GetMenu', JSON.stringify(result.data))
            } else {
                menuList.value = JSON.parse(getLocalData('GetMenu') ?? '')
            }

        })
        const watchIsCollapse = () => {
            const el = document.getElementsByClassName('el-aside')[0] as HTMLElement
            const elicon = document.getElementsByClassName('icon')[0] as HTMLElement
            if (isCollapse.value) {
                el.style.width = "200px";
                elicon.style.width = "18px";
                isCollapse.value = false
            } else {
                el.style.width = "62px";
                elicon.style.width = "14px";
                isCollapse.value = true
            }
        }
        return {
            handleOpen,
            handleClose,
            isCollapse,
            iconName,
            skip,
            watchIsCollapse,
            menuList
        }
    }
})

</script>


<style scoped>
.openSwitch {
    /* background-color: #8e9eab; */
    width: 99.5%;
    text-align: center;
    /* margin-left: 50%;
    transform: translate(0, -50%); */
    cursor: pointer;
}
.el-sub-menu__title,
.el-menu,
.el-menu-vertical-demo {
    width: 100%;
    text-align: center;
    border: 0px;
}
.spanParent {
    font-size: 18px;
    margin-left: 10px;
}
.spanChilder {
    font-size: 12px;
    margin-left: 10px;
}
</style>