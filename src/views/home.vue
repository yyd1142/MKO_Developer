<template>
    <div id="home">
        <header-component :my-title="headerTitle" :link="link"></header-component>
        <div class="page-content">
            <mt-button type="default" size="large" @click="todo">点击按钮</mt-button>
        </div>
        <v-tab :selected="tabName"></v-tab>
    </div>
</template>
<script type="text/javascript" src="../js/home.js"></script>

<style lang="less" src="../style/home.less" scoped></style>