<template>
    <div class="header">
        <div class="icon">
            <img :src="logo" alt="" width="20px" height="20px">
            <span class="title">{{ route.meta.title }}</span>
        </div>
        <div class="opt">
            <i class="pi pi-minus minus" @click="hide"></i>
            <i class="close-outlined">
                <i class="pi pi-times close" @click="close"></i>
            </i>
        </div>
    </div>
</template>


<script setup>
import logo from '../../../images/logo.png'
import { useRoute } from 'vue-router'
const route = useRoute()

const hide = () => {
    window.oneMouse.hideWin()
}

const close = () => {
    window.oneMouse.closewin()
}
</script>

<style scoped>
.header {
    width: 100%;
    height: 30px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    -webkit-app-region: drag;
    display: flex;
    justify-content: space-between;
    color: rgb(105, 98, 139);
    /* background-color: blue; */
}

.icon {
    padding: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.title {
    margin-left: 10px;
    line-height: 1;
    font-weight: 600;
}

.opt {
    width: 80px;
    -webkit-app-region: no-drag;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.opt i {
    transition: all 0.2s;
}

.minus,
.close {
    text-align: center;
    line-height: 35px;
    display: block;
    width: 35px;
    height: 35px;
}

.minus:hover {
    color: #10b981;
    margin-top: 10px;
    cursor: pointer;
}

.close:hover {
    color: #fff;
    transform: rotate(90deg);
    transform-origin: center center;
    cursor: pointer;
}

.close-outlined:hover {
    background-color: #f43f5e;
}
</style>