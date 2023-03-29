<template>
    <div class="itemCard">
        <div class="title">
            {{ props.title }}
        </div>
        <div class="main">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
const props = defineProps({
    title: {
        type: String,
        default: "标题"
    }
})
</script>

<style scoped>
.itemCard {
    width: 100%;
    min-height: 50px;
    background-color: #ecf5ff;
    /* background-color: red; */
    padding: 20px;
    box-sizing: border-box;
    border-radius: 5px;
    margin: 10px 0 50px;
}

.itemCard .title {
    font-size: 24px;
    font-weight: bold;
}
.itemCard .main{
    margin-top: 10px;
}
</style>
