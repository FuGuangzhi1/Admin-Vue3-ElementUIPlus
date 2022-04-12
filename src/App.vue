<template>
  <router-view v-slot="{ Component }">
    <transition name="el-zoom-in-center">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style lang="scss">
@import "@/style/app.scss";

</style>
