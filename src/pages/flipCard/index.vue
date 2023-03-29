<template>
  <div style="width:100%;height:100%">
    <h1 style="height: 50px;">翻转卡片</h1>

    <itemBody :list="list">
      <itemCard id="boxesBackground_introduction" title="介绍">
        <div>一个专门用于翻转的卡片组件, 正反面都可以使用, 可以看成是花一块地的钱买了两块地</div>
      </itemCard>

      <itemTitle>代码演示</itemTitle>
      <itemCard id="boxesBackground_usual" title="基本使用">
        <div>一张翻转卡片分为正面和背面, 内容全部自定义, 通过翻转切换正面与反面</div>
        <br>
        <div>
          <el-button type="primary" @click="rotate">点击旋转</el-button>
          <el-button type="primary" @click="noRotate">点击旋转回来</el-button>
        </div>
        <br>
        <yhFlipCard ref="FlipCardRef" speed="fast" :angle="180" :shadow="[0, 0, 5, 1, '#777']" :pers="800" width="300"
                    height="400">
          <template #front>
            <h1>登录</h1>
            账号:<input />
            <br>
            密码:<input />
            <el-button type="primary" text @click="rotate">没账号?去注册</el-button>
          </template>
          <template #back>
            <h1>注册</h1>
            账号:<input />
            <br>
            密码:<input />
          </template>      
        </yhFlipCard>
        <br>
        <el-collapse>
          <el-collapse-item title="查看源代码">
            <code>
              &lt;template&gt;
              <br>
              &nbsp;&lt;button @click="rotate"&gt;点击旋转&lt;/button&gt;
              <br>
              &nbsp;&lt;button @click="noRotate"&gt;点击旋转回来&lt;/button&gt;
              <br>
              &nbsp;&lt;yh-flip-card ref="FlipCardRef" speed="fast" :angle="180" :shadow="[0, 0, 5, 1, '#777']" :pers="800" width="200" height="400"&gt;
              <br>
              &nbsp;&nbsp;&lt;template #front&gt;
              <br>
              &nbsp;&nbsp;&nbsp;登录
              <br>
              &nbsp;&nbsp;&nbsp;账号:&lt;input /&gt;
              <br>
              &nbsp;&nbsp;&nbsp;密码:&lt;input /&gt;
              <br>
              &nbsp;&nbsp;&nbsp;没账号?去注册
              <br>
              &nbsp;&nbsp;&lt;/template&gt;
              <br>
              &nbsp;&nbsp;&lt;template #back&gt;
              <br>
              &nbsp;&nbsp;&nbsp;注册
              <br>
              &nbsp;&nbsp;&nbsp;账号:&lt;input /&gt;
              <br>
              &nbsp;&nbsp;&nbsp;密码:&lt;input /&gt;
              <br>
              &nbsp;&nbsp;&lt;/template&gt;
              <br>
              &nbsp;&lt;yh-flip-card&gt;
              <br>
              &lt;/template&gt;
              <br>
              &lt;script&gt;
              <br>
              &nbsp;let FlipCardRef: any = ref(null)
              <br>
              &nbsp;const rotate = () => FlipCardRef.value.rotate()
              <br>
              &nbsp;const noRotate = () => FlipCardRef.value.noRotate()
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

let FlipCardRef: any = ref(null)
const rotate = () => {
  FlipCardRef.value.rotate()
}
const noRotate = () => {
  FlipCardRef.value.noRotate()
}

const Props: any = [
  {
    name: 'speed',
    display: '旋转速度',
    type: 'String',
    option: 'fast/middle/slow',
    default: 'middle',
  },
  {
    name: 'shadow',
    display: '正面阴影样式',
    type: 'Array<number | string>',
    option: '[0, 0, 5, 1, "#777"]',
    default: '-',
  },
  {
    name: 'shadow2',
    display: '背面阴影样式, 如果没有则使用正面阴影样式',
    type: 'Array<number | string>',
    option: '[0, 0, 5, 1, "#777"]',
    default: '-',
  },
  {
    name: 'angle',
    display: '卡片翻转的角度, 完整从正面翻转到反面为180',
    type: 'Number',
    option: '-',
    default: '180',
  },
  {
    name: 'pers',
    display: '卡片翻转的视距, 一般情况下, 数值越大翻转大小的差异越大',
    type: 'Number',
    option: '-',
    default: '500',
  },
  {
    name: 'reversal',
    display: '卡片翻转的方向反转, 默认为从右向左',
    type: 'Boolean',
    option: '-',
    default: 'false',
  },
  {
    name: 'hover',
    display: '是否开启鼠标悬停卡片即翻转',
    type: 'Boolean',
    option: '-',
    default: 'false',
  },
  {
    name: 'width',
    display: '卡片的宽度',
    type: 'Number/String',
    option: '-',
    default: '300',
  },
  {
    name: 'height',
    display: '卡片的高度',
    type: 'Number/String',
    option: '-',
    default: '300',
  },
  {
    name: 'rounded',
    display: '是否开启卡片边角圆弧',
    type: 'Boolean',
    option: '10px',
    default: 'false',
  },
]
const Slots: any = [
{
    name:'front',
    display:'翻转卡片正面内容',
    default:'-'
  },
  {
    name:'back',
    display:'翻转卡片背面内容',
    default:'-'
  },
]
const Expose: any = [
  {
    name: 'openAnimate',
    display: '除hover属性外开启翻转卡片鼠标悬停翻转功能'
  },
  {
    name: 'closeAnimate',
    display: '关闭翻转卡片鼠标悬停翻转功能'
  },
  {
    name: 'rotate',
    display: '手动翻转卡片, 从正面到背面'
  },
  {
    name: 'noRotate',
    display: '手动翻转卡片, 从背面到正面'
  },
]
const Events: any = []
</script>

<style scoped></style>
