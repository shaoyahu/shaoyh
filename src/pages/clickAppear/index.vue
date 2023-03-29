<template>
    <div style="width:100%;height:100%">
        <h1 style="height: 50px;">鼠标寻影</h1>

        <itemBody :list="list">
            <itemCard id="boxesBackground_introduction" title="介绍">
                <div>在鼠标点击位置以扩散或上升的形式产生一个图形或者图片</div>
            </itemCard>

            <itemTitle>代码演示</itemTitle>
            <itemCard id="boxesBackground_usual" title="基本使用">
                <div>点击时产生一个随机颜色的扩散形式的圆形</div>
                <br>
                <div>注意 ! 使用图形会自动引入版本为6.2.1的font-awesome , 兼容 5 以上版本, 请谨慎使用</div>
                <br>
                <div>
                    <el-button type="primary" @click="appear">赋予影</el-button>
                    <el-button type="primary" @click="disappear">取消影</el-button>
                </div>
                <br>
                <yh-click-appear style="position_absolute" ref="clickAppearRef" animate="enlarge" :color="['red', 'blue', 'yellow', 'green']"
                                 duration="1" />
                <div class="border_1 border_red p_10">该组件在页面上没有实际内容, 有组件就生效</div>
                <br>
                <el-collapse>
                    <el-collapse-item title="查看源代码">
                        <code>
                            &lt;template&gt;
                            <br>
                            &nbsp;&lt;button @click="appear"&gt;赋予影&lt;/button&gt;
                            <br>
                            &nbsp;&lt;button @click="disappear"&gt;取消影&lt;/button&gt;
                            <br>
                            &nbsp;&lt;yh-click-appear ref="clickAppearRef" animate="enlarge" :color="['red', 'blue', 'yellow', 'green']" duration="1" /&gt;
                            <br>
                            &lt;/template&gt;
                            <br>
                            &lt;script&gt;
                            <br>
                            &nbsp;let clickAppearRef: any = ref(null)
                            <br>
                            &nbsp;const appear = () => clickAppearRef.value.clickTo()
                            <br>
                            &nbsp;const disappear = () => clickAppearRef.value.removeClickTo()
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

let clickAppearRef: any = ref(null)

const appear = () => {
    clickAppearRef.value.clickTo()
}
const disappear = () => {
    clickAppearRef.value.removeClickTo()
}


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
        name: 'animate',
        display: '展现形式, 扩散或是上升',
        type: 'String',
        option: 'enlarge/rise',
        default: 'enlarge',
    },
    {
        name: 'icon',
        display: '使用font-awesome图标',
        type: 'String',
        option: '-',
        default: 'circle',
    },
    {
        name: 'color',
        display: '图形的颜色',
        type: 'Array<string>/String',
        option: '-',
        default: 'black',
    },
    {
        name: 'blink',
        display: '在展现过程中根据提供的颜色一直闪动变换',
        type: 'Boolean',
        option: '-',
        default: 'false',
    },
    {
        name: 'src',
        display: '使用图片作为展现对象的图片路径',
        type: 'String',
        option: '-',
        default: '-',
    },
    {
        name: 'width',
        display: '展现对象为图片时的宽度',
        type: 'String/Number',
        option: '-',
        default: '16',
    },
    {
        name: 'height',
        display: '展现对象为图片时的高度',
        type: 'String/Number',
        option: '-',
        default: '16',
    },
    {
        name: 'duration',
        display: '展现对象存在的时间, 单位:秒',
        type: 'String/Number',
        option: '-',
        default: '1',
    },
]
const Slots: any = [
    {
        name: 'front',
        display: '翻转卡片正面内容',
        default: '-'
    },
    {
        name: 'back',
        display: '翻转卡片背面内容',
        default: '-'
    },
]
const Expose: any = [
    {
        name: 'clickTo',
        display: '激活组件的赋予鼠标影的事件'
    },
    {
        name: 'removeClickTo',
        display: '取消鼠标影的事件'
    },
]
const Events: any = []
</script>
  
<style scoped></style>
  