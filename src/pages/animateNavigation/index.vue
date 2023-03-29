<template>
    <div style="width:100%;height:100%">
        <h1 style="height: 50px;">动效导航</h1>

        <itemBody :list="list">
            <itemCard id="boxesBackground_introduction" title="介绍">
                <div>一个长短能变动的导航栏</div>
            </itemCard>

            <itemTitle>代码演示</itemTitle>
            <itemCard id="boxesBackground_usual" title="基本使用">
                <div>通过点击右边的叉叉按钮或者下面的按钮展开/收缩导航栏</div>
                <br>
                <el-button type="primary" @click="change">点击展开/收缩</el-button>
                <br>
                <br>
                <yh-animate-navigation ref="animateNavigationRef" :NavList='NavList' size="large" />
                <br>
                <el-collapse>
                    <el-collapse-item title="查看源代码">
                        <code>
                            &lt;template&gt;
                            <br>
                            &nbsp;&lt;button @click="change"&gt;点击展开/收缩&lt;/button&gt;
                            <br>
                            &nbsp;&lt;yh-animate-navigation  ref="animateNavigationRef" :NavList='NavList' size="large" /&gt;
                            <br>
                            &lt;/template&gt;
                            <br>
                            &lt;script&gt;
                            <br>
                            &nbsp;let NavList = [
                            <br>
                            &nbsp;&nbsp;{ title: '首页', fun: () => { alert('点击了首页') } },
                            <br>
                            &nbsp;&nbsp;{ title: '工作', fun: () => { alert('点击了工作') } },
                            <br>
                            &nbsp;&nbsp;{ title: '关于', fun: () => { alert('点击了关于') } },
                            <br>
                            &nbsp;&nbsp;{ title: '联系', fun: () => { alert('点击了联系') } }
                            <br>
                            &nbsp;]
                            <br>
                            &nbsp;let animateNavigationRef: any = ref(null)
                            <br>
                            &nbsp;const change = () => { animateNavigationRef.value.change() }
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

let animateNavigationRef: any = ref(null)

const change = () => {
    animateNavigationRef.value.change()
}

let NavList = [
    {
        title: '首页',
        fun: () => { alert('点击了首页') }
    },
    {
        title: '工作',
        fun: () => { alert('点击了工作') }
    },
    {
        title: '关于',
        fun: () => { alert('点击了关于') }
    },
    {
        title: '联系',
        fun: () => { alert('点击了联系') }
    },
]

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

const Props: any = [
    {
        name: 'NavList',
        display: '菜单列表',
        type: 'Array<INav>',
        option: '-',
        default: '-',
    },
    {
        name: 'size',
        display: '菜单尺寸',
        type: 'String',
        option: 'large/middle/mini',
        default: 'middle',
    },
]
const Slots: any = []
const Expose: any = [
    {
        name: 'change',
        display: '展开/收缩导航栏'
    },
]
const Events: any = []
</script>
  
<style scoped></style>
  