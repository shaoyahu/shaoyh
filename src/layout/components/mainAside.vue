<template>
    <div class="mainAside">
        <div class="item" v-for="item, index in list" :key="index">
            <div class="mainItem">{{ item.title }}</div>
            <div class="subItem" v-for="item2, index2 in item.children" :key="index2"
                 :class="{ actived: activeItem == item2.name }" @click="openPage(item2)">
                {{ item2.name }}
            </div>
        </div>
        <!-- <div style="width: 200px;height:2000px;background-color:red"></div> -->

    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { useRouter, useRoute, onBeforeRouteUpdate } from "vue-router"
const router = useRouter()
const route = useRoute()

let activeItem = ref(route.meta.title)

const list = [
    {
        title: '开发指南',
        children: [
            {
                name: '介绍',
                path: 'index/introduction'
            },
            {
                name: '快速上手',
                path: 'index/quickstart'
            },
            {
                name: '版本日志',
                path: 'index/log'
            },
        ]
    },
    {
        title: '基础组件',
        children: [
            {
                name: '滑块',
                path: 'index/rangeSlider'
            },
        ]
    },
    {
        title: '有趣组件',
        children: [
            {
                name: '3D背景切割墙',
                path: 'index/boxesBackground'
            },
            {
                name: '翻转卡片',
                path: 'index/flipCard'
            },
            {
                name: '模糊图片',
                path: 'index/blurryLoad'
            },
            {
                name: '动效导航',
                path: 'index/animateNavigation'
            },
            {
                name: '鼠标寻影',
                path: 'index/clickAppear'
            },
        ]
    }
]
onBeforeRouteUpdate((to, from) => {
    activeItem.value = to.meta.title
})
const openPage = (item: any) => {
    router.push(`/${item.path}`)
}
</script>

<style scoped>
.mainAside {
    height: 100%;
    width: 250px;
    /* background-color: red; */
    overflow-y: scroll;
    position: fixed;
    /* padding-bottom: 80px; */
}

.item {
    width: 100%;
    /* height: 120px; */
    padding: 5px 20px;
    box-sizing: border-box;
}

.item .mainItem {
    font-weight: bold;
    letter-spacing: 4px;
    font-size: 22px;
    height: 50px;
    line-height: 50px;
}

.item .subItem {
    text-indent: 25px;
    height: 40px;
    line-height: 40px;
    cursor: pointer;
}

.item .subItem:hover {
    /* background-color: cyan; */
    color: #1989fa;
}


.actived {
    background-color: #ecf5ff;
    font-weight: bold;
    color: #409eff;
}

</style>
