<template>
  <div style="width:100%;height:100%">
    <h1 style="height: 50px;">Shao yh</h1>

    <itemBody :list="list">
      <itemTitle>介绍</itemTitle>
      <itemCard id="introduction_introduction" title="介绍">
        <div>Shao yh 是一个基于 vue3 的组件库, 目前里面的内容并不是很多, 还在半力低速开发中, 发布即开源</div>
        <br>
        <div>目前由我一人维护</div>
      </itemCard>

      <itemCard id="introduction_version" title="版本提示">
        <div>你当前浏览的是 Shao yh 第一版本 的文档，适用于 Vue 3 开发</div>
      </itemCard>

      <itemCard id="introduction_quickstart" title="快速上手">
        <div>请阅读<a class="goto" @click="goto">快速上手</a>章节，通过该章节你可以了解到 Shao yh 的安装方法和基本使用姿势。</div>
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
    title: '版本提示',
    id: 'introduction_version'
  },
  {
    title: '快速上手',
    id: 'introduction_quickstart'
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
