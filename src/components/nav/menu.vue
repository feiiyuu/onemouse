<template>
    <div class="menu">
        <div class="icon">
            <div class="logo">
                <img :src="logo" alt="" width="100px" height="100px">
            </div>
        </div>
        <div>
            <slot name="item"></slot>
        </div>
    </div>
</template>

<script setup>
import logo from '../../../images/santa.png'
</script>

<style scoped>
@font-face {
    font-family: 'youshe';
    src: url('../../../assets/youshe.ttf');
}
.menu {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: rgb(136, 218, 148);
    min-width: 150px;
    font-family: 'youshe','Times New Roman', Times, serif;
}

.logo {
    overflow: hidden;
    /* clip-path: circle(44% at 50% 50%); */
    transition: all 0.3s;
}

.logo:hover {
    overflow: hidden;
    transform: scale(1.1);
    /* clip-path: circle(48% at 50% 50%); */
}
</style>