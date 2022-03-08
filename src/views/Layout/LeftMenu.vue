<template>
    <div>
        <div class="openSwitch" @click="openSwitch">
            <component style="width: 20px; height: 20px; margin-top: 2px;" :is="iconName"></component>
        </div>
        <el-menu
            active-text-color="#283048"
            background-color=" #8e9eab"
            class="el-menu-vertical-demo"
            default-active="2"
            text-color="#ffffff"
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
                >
                    <template #title>
                        <component
                            style="width: 20px; height: 20px; color: #000;"
                            :is="subItem.icon"
                        ></component>
                        <span
                            class="spanChilder"
                            @click="skip(subItem.path, subItem.menuName)"
                        >{{ subItem.menuName }}</span>
                    </template>
                </el-menu-item>
            </el-sub-menu>
        </el-menu>
    </div>
</template>

<script lang="ts">
import {
    handleOpen,
    handleClose, isCollapse,
    iconName,
    skip,
} from '@/business/leftMenuBLL'
import { defineComponent } from 'vue'
export default defineComponent({
    props: {
        fatherMethod: {
            type: Function,
            default: null
        }
        , menuData: {
            type: Object,
            default: []
        }
    },
    setup(props, { emit, attrs, slots }) {
        let menuList: any = [{}]
        if (props.menuData) {
            menuList = props.menuData
        }
        const openSwitch = () => {
            props.fatherMethod(isCollapse.value)
            isCollapse.value = !isCollapse.value
        }
        return {
            handleOpen,
            handleClose,
            openSwitch,
            isCollapse,
            iconName,
            skip,
            menuList
        }
    }
})

</script>


<style scoped>
.openSwitch {
    background-color: #8e9eab;
    width: 100%;
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