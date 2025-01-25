<template>
    <Menu>
        <template #item>
            <div v-for="item in routers" :key="item.label">
                <RouterLink v-if="item.path" :to="item.path" custom v-slot="{ isActive, href, navigate }">
                    <a v-ripple :href="href" @click="navigate" class="link" :class="isActive ? 'activate' : ''">
                        <i :class="item.icon">&nbsp;</i>
                        {{ item.label }}
                    </a>
                </RouterLink>
            </div>
        </template>
    </Menu>
</template>
<script setup>
import Menu from './menu.vue';
import { ref } from "vue";
import { RouterLink } from 'vue-router'
const routers = ref([
    { label: '首页', icon: 'pi pi-home', path: '/' },
    { label: '设置', icon: 'pi pi-cog', path: '/setting' }
])
</script>

<style scoped>
.link {
    margin: 5px 0;
    display: block;
    line-height: 45px;
    text-align: center;
    width: 120px;
    height: 45px;
    color: #fff;
    text-decoration: none;
    border-radius: 20px 0 0 20px;
    transition: all 0.2s;
}

.link:hover {
    background-color: #fff;
    color: rgb(16, 185, 129);
}

.activate {
    background-color: #fff;
    color: rgb(16, 185, 129);
}
</style>
