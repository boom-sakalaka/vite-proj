<!--
 * @Date: 2022-03-31 14:05:23
 * @LastEditTime: 2022-04-01 17:29:22
 * @FilePath: \vite-admin-project\src\pages\login.vue
 * @Description: 
-->
<template>
    <div>登录页 <el-button type="primary">按钮</el-button></div>
</template>

<script setup lang="ts">
import { ElButton } from 'element-plus';
import { login } from '@/api/module/index';
import { onMounted } from 'vue';

onMounted(async () => {
    const result = await login('zhansan', '123');
    console.warn(result.expires);
    console.warn(result.token);
});
</script>
<style lang="scss" scoped></style>
