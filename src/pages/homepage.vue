<!--
 * @Date: 2022-03-31 14:04:56
 * @LastEditTime: 2022-04-19 10:00:00
 * @FilePath: \vite-admin-project\src\pages\homepage.vue
 * @Description: 
-->
<template>
    <div class="w-40 h-20 bg-slate-700 text-amber-900 box-container">
        首页
        <el-button>按钮</el-button>
        <img src="../assets/logo.png" />
    </div>
</template>

<script setup lang="ts">
import { ElButton } from 'element-plus';
</script>

<style lang="scss" scoped>
.box-container {
    position: fixed;
    top: 1px;
    left: 1px;
    width: 100px;
    height: 100px;
    transform: rotate(30);
    text-decoration: dashed;
}
</style>
