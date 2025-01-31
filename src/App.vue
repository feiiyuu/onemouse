<template>
    <Header v-if="!hideNav" />
    <div class="panel">
        <Nav v-if="!hideNav" class="nav" />
        <router-view v-slot="{ Component }">
            <keep-alive>
                <component :is="Component" class="pages" />
            </keep-alive>
        </router-view>
    </div>
</template>

<script setup>
import Nav from './components/nav/index.vue'
import Header from './components/header/index.vue'
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'
const route = useRoute()
const hideNav = ref(false)

watch(() => route.path, (newValue, _) => {
    hideNav.value = newValue === '/control'
})
</script>

<style scoped>
.panel {
    display: flex;
    flex-direction: row;
    font-family: Courier, monospace, sans-serif;
}

.nav {
    position: relative;
    left: 0;
    bottom: 0;
    top: 0;
    height: calc(100vh - 30px);
    min-height: 400px;
}
.pages{
    min-width: 650px;
}
</style>

<style>
.p-inputnumber-input {
    width: 110px;
}
</style>