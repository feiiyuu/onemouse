<template>
    <Header v-show="!hideNav" />
    <div class="panel">
        <Nav v-show="!hideNav" class="nav" />
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
}

.nav {
    position: absolute;
    left: 0;
    bottom: 0px;
    top: 4ch;
}
.pages{
    margin-left: 150px;
    min-width: 650px;
}
</style>

<style>
.p-inputnumber-input {
    width: 110px;
}
</style>