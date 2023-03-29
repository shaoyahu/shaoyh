<template>
    <div style="width:100%;height:100%">
        <h1 style="height: 50px;">版本日志</h1>

        <itemBody :list="list">
            <itemTitle>介绍</itemTitle>
            <itemCard id="introduction_introduction" title="介绍">
                <div>这里是用来记录版本信息的</div>
                <br>
                <div>前面两版只有一点小问题, 不做记录了</div>
            </itemCard>

            <itemTitle>2023年3月29日</itemTitle>
            <itemCard id="introduction_version" title="V1.0.2">
                <div>当前版本存在两个比较明显的bug</div>
                <div>分别是 滑块 和 鼠标寻影 组件的</div>
                <div>但是现在没有什么精力去修复, 先闲置, 其他组件正常使用</div>
            </itemCard>


            <!-- <div style="width: 200px;height:2000px;background-color:red"></div> -->

        </itemBody>

    </div>
</template>
  
<script setup lang='ts'>
import { ref } from 'vue'
import { useRouter } from "vue-router"
const router = useRouter()

const goto = () => {
    router.push('/index/quickstart')
}

const list = [
    {
        title: '介绍',
        id: 'introduction_introduction'
    },
    {
        title: 'V1.0.2',
        id: 'introduction_version'
    },
]
</script>
  
<style scoped>
.goto {
    color: #1989fa;
    cursor: pointer;
}

.goto:hover {
    color: #47a1fb;
}
</style>
  