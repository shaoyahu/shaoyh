<template>
  <div style="width:100%;height:100%">
    <h1 style="height: 50px;">快速上手</h1>

    <itemBody :list="list">
      <itemCard id="quickstart_introduction" title="介绍">
        <div>通过本章节你可以了解到 Shao yh 的安装方法和基本使用姿势。</div>
      </itemCard>

      <itemTitle>安装</itemTitle>
      <itemCard id="quickstart_tool" title="使用包管理器">
        <div>我推荐你使用包管理器进行安装, 然后你就能用打包工具, 例如 Vite 或 webpack.</div>
        <div>选择你喜欢的包管理器, 推荐通过 cnpm 进行安装</div>
        <br>
        <div class="t_indent2"># NPM</div>
        <div class="t_indent2">$ npm i shaoyh-ui</div>
        <br>
        <div class="t_indent2"># CNPM</div>
        <div class="t_indent2">$ cnpm i shaoyh-ui</div>
      </itemCard>

      <itemTitle>快速开始</itemTitle>
      <itemCard id="quickstart_import" title="完整引入">
        <div>如果你不在乎......算了反正目前也没做按需引入, 就使用完整引入吧</div>
        <br>
        <div class="t_indent2">// main.ts</div>
        <br>
        <div class="t_indent2">import { createApp } from 'vue'</div>
        <div class="t_indent2">import App from './App.vue'</div>
        <div class="t_indent2">import ShaoyhUI from "shaoyh-ui"</div>
        <div class="t_indent2">import "shaoyh-ui/style.css"</div>
        <br>
        <div class="t_indent2">const app = createApp(App)</div>
        <div class="t_indent2">app.use(ShaoyhUI)</div>
        <div class="t_indent2">app.mount("#app")</div>
      </itemCard>

      <itemTitle>开始使用</itemTitle>
      <itemCard id="quickstart_use" title="使用">
        <div>现在你可以启动项目了, 具体每个组件的使用方法, 请查阅每个组件的独立文档.</div>
      </itemCard>


      <!-- <div style="width: 200px;height:2000px;background-color:red"></div> -->

    </itemBody>

  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { useRouter } from "vue-router"
const router = useRouter()



const list = [
  {
    title: '介绍',
    id: 'quickstart_introduction'
  },
  {
    title: '使用包管理器',
    id: 'quickstart_tool'
  },
  {
    title: '完整引入',
    id: 'quickstart_import'
  },
  {
    title: '使用',
    id: 'quickstart_use'
  },
]
</script>

<style scoped>
</style>
