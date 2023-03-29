<template>
    <div style="width:100%;height:100%">
        <h1 style="height: 50px;">模糊加载</h1>

        <itemBody :list="list">
            <itemCard id="boxesBackground_introduction" title="介绍">
                <div>用来给加载出来的图片一个模糊过度效果, 可以视作是简单问题复杂化</div>
            </itemCard>

            <itemTitle>代码演示</itemTitle>
            <itemCard id="boxesBackground_usual" title="基本使用">
                <div>图片成功加载之后, 通过人为的手段再搞一次加载</div>
                <br>
                <div>想再看一遍就只能切换一下页面了, 或者点下下面按钮我帮你切换一下</div>
                <br>
                <el-button type="primary" @click="showEffect">切换看效果</el-button>
                <br>
                <br>
                <yh-blurry-load style="width:400px;height:200px" :src="'https://picsum.photos/400/200'" onLoad
                                :speed="10" />
                <br>
                <el-collapse>
                    <el-collapse-item title="查看源代码">
                        <code>
                            <br>
                            &lt;template&gt;
                            <br>
                            &nbsp;&lt;yh-blurry-load style="width:400px;height:200px" :src="'https://picsum.photos/400/200'" onLoad :speed="10" /&gt;
                            <br>
                            &lt;/template&gt;
                            <br>
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

const showEffect = () => {
    router.push('/index/introduction')
    setTimeout(() => {
        router.push('/index/blurryLoad')
    }, 1);
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
        name: 'src',
        display: '需要放入的图片',
        type: 'String',
        option: '-',
        default: '-',
    },
    {
        name: 'onLoad',
        display: '是否显示从模糊到清晰的百分比数字',
        type: 'Boolean',
        option: '-',
        default: 'false',
    },
    {
        name: 'speed',
        display: '图片从模糊到清晰的速度',
        type: 'Number',
        option: '-',
        default: '5',
    },
    {
        name: 'fit',
        display: '图片适应容器高宽的方式, 和原生object-fit用法相同',
        type: 'String',
        option: 'fill/contain/cover/none/scale-down',
        default: 'contain',
    },
    {
        name: 'alt',
        display: '图片加载失败时显示的文本内容',
        type: 'String',
        option: '-',
        default: '-',
    },
]
const Slots: any = []
const Expose: any = []
const Events: any = [
    {
        name: 'finished',
        display: '图片从模糊到清晰度百分百时触发的事件',
        type: 'Function: void',
        param: '-',
    }
]
</script>
  
<style scoped></style>
  