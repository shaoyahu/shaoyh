<template>
  <div style="width:100%;height:100%">
    <h1 style="height: 50px;">3D背景切割墙</h1>

    <itemBody :list="list">
      <itemCard id="boxesBackground_introduction" title="介绍">
        <div>用于展示图片用的盒子, 并且可以裂开, 各种意义上</div>
      </itemCard>

      <itemTitle>代码演示</itemTitle>
      <itemCard id="boxesBackground_usual" title="基本使用">
        <div>通过调用组件方法决定墙是否进行切割</div>
        <br>
        <div>
          <el-button type="primary" @click="change">切割</el-button>
        </div>
        <br>
        <yh-boxes-background ref="BoxesBackgroundRef" :row="4" :col="4"
                             src="'https://media.giphy.com/media/EZqwsBSPlvSda/giphy.gif'" />
        <br>
        <el-collapse>
          <el-collapse-item title="查看源代码">
            <code>
              &lt;template&gt;
              <br>
              &nbsp;&lt;button @click="change"&gt;切割&lt;/button&gt;
              <br>
              &nbsp;&lt;yh-boxes-background ref="BoxesBackgroundRef" :row="4" :col="4" src="'https://media.giphy.com/media/EZqwsBSPlvSda/giphy.gif'" /&gt;
              <br>
              &lt;/template&gt;
              <br>
              &lt;script&gt;
              <br>
              &nbsp;let BoxesBackgroundRef: any = ref(null)
              <br>
              &nbsp;const change = () => BoxesBackgroundRef.value.change()
              <br>
              &lt;/script&gt;
            </code>
          </el-collapse-item>
        </el-collapse>
      </itemCard>

      <itemTitle>API</itemTitle>
      <itemCard id="boxesBackground_Props" title="API-Props">
        <el-table :data="Props" empty-text="无 就是没有这项API的意思">
          <el-table-column prop="name" label="属性名" align="center" />
          <el-table-column prop="display" label="说明" align="center" />
          <el-table-column prop="type" label="类型" align="center" />
          <el-table-column prop="option" label="可选值" align="center" />
          <el-table-column prop="default" label="默认值" align="center" />
        </el-table>
      </itemCard>
      <itemCard id="boxesBackground_Slots" title="API-Slots">
        <el-table :data="Slots" empty-text="无 就是没有这项API的意思">
          <el-table-column prop="name" label="名称" align="center" />
          <el-table-column prop="display" label="说明" align="center" />
          <el-table-column prop="default" label="默认值" align="center" />
        </el-table>
      </itemCard>
      <itemCard id="boxesBackground_Expose" title="API-Expose">
        <el-table :data="Expose" empty-text="无 就是没有这项API的意思">
          <el-table-column prop="name" label="名称" align="center" />
          <el-table-column prop="display" label="说明" align="center" />
        </el-table>
      </itemCard>
      <itemCard id="boxesBackground_Events" title="API-Events">
        <el-table :data="Events" empty-text="无 就是没有这项API的意思">
          <el-table-column prop="name" label="名称" align="center" />
          <el-table-column prop="display" label="说明" align="center" />
          <el-table-column prop="type" label="类型" align="center" />
          <el-table-column prop="param" label="参数" align="center" />
        </el-table>
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
    id: 'boxesBackground_introduction'
  },
  {
    title: '基本使用',
    id: 'boxesBackground_usual'
  },
  {
    title: 'API-Props',
    id: 'boxesBackground_Props'
  },
  {
    title: 'API-Slots',
    id: 'boxesBackground_Slots'
  },
  {
    title: 'API-Expose',
    id: 'boxesBackground_Expose'
  },
  {
    title: 'API-Events',
    id: 'boxesBackground_Events'
  },
]

let BoxesBackgroundRef: any = ref(null)
const change = () => {
  BoxesBackgroundRef.value.change()
}

const Props: any = [
  {
    name: 'row',
    display: '切割成多少行',
    type: 'Number',
    option: '-',
    default: '4',
  },
  {
    name: 'col',
    display: '切割成多少列',
    type: 'Number',
    option: '-',
    default: '4',
  },
  {
    name: 'src',
    display: '墙背景图片',
    type: 'String',
    option: '-',
    default: 'https://media.giphy.com/media/EZqwsBSPlvSda/giphy.gif',
  },
  {
    name: 'rotate',
    display: '是否开启旋转切割',
    type: 'Boolean',
    option: '-',
    default: '4',
  },
  {
    name: 'solid',
    display: '分割后是否开启3D墙',
    type: 'Boolean',
    option: '-',
    default: 'false',
  },
]
const Slots: any = []
const Expose: any = [
  {
    name:'change',
    display:'进行背景墙切割和修复'
  }
]
const Events: any = []
</script>

<style scoped></style>
