<template>
    <div style="width:100%;height:100%">
        <h1 style="height: 50px;">滑块</h1>

        <itemBody :list="list">
            <itemCard id="boxesBackground_introduction" title="介绍">
                <div>通过拖动滑块在一个固定区间内进行选择</div>
            </itemCard>

            <itemTitle>代码演示</itemTitle>
            <itemCard id="boxesBackground_usual" title="基本使用">
                <div>通过鼠标点击拖动或者输入数值改变滑块数值的大小</div>
                <br>
                <div>
                    <el-button type="primary" @click="changeTo(20)">点击修改到20</el-button>
                </div>
                <br>
                <yh-range-slider ref="RangeSliderRef" width="500" min="-20" max="80" :value="tt" write />
                <br>
                <el-collapse>
                    <el-collapse-item title="查看源代码">
                        <code>
                            &lt;template&gt;
                            <br>
                            &nbsp;&lt;button @click="changeTo(20)"&gt;点击修改到20&lt;/button&gt;
                            <br>
                            &nbsp;&lt;yh-range-slider ref="RangeSliderRef" width="500" min="-20" max="80" value="40" write /&gt;
                            <br>
                            &lt;/template&gt;
                            <br>
                            &lt;script&gt;
                            <br>
                            &nbsp;let RangeSliderRef: any = ref(null)
                            <br>
                            &nbsp;const changeTo = (num: Number) => RangeSliderRef.value.changeTo(num)
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

let RangeSliderRef: any = ref(null)
const changeTo = (num: Number) => RangeSliderRef.value.changeTo(num)
let tt = ref(40)

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
        name: 'min',
        display: '滑动条的最小值',
        type: 'Number/String',
        option: '-',
        default: '0',
    },
    {
        name: 'max',
        display: '滑动条的最大值',
        type: 'Number/String',
        option: '-',
        default: '100',
    },
    {
        name: 'value',
        display: '滑块的当前数值',
        type: 'Number',
        option: '-',
        default: '50',
    },
    {
        name: 'write',
        display: '是否可由键盘输入来修改滑块的数值',
        type: 'Boolean',
        option: '-',
        default: 'false',
    },
    {
        name: 'width',
        display: '滑动条的宽度',
        type: 'Number/String',
        option: '-',
        default: '300',
    },
]
const Slots: any = []
const Expose: any = [
    {
        name: 'range',
        display: '滑块当前的数值'
    },
    {
        name: 'changeTo',
        display: '键盘输入值改变时改变滑块数值的事件'
    },
]
const Events: any = []
</script>
  
<style scoped></style>
  