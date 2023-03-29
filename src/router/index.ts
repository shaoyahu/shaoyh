import { createRouter, createWebHashHistory } from 'vue-router'

const developerGuide = [
    {
        path: "introduction",
        name: "introduction",
        component: () => import('@/pages/introduction/index.vue'),
        meta: {
            title: '介绍'
        }
    },
    {
        path: "quickstart",
        name: "quickstart",
        component: () => import('@/pages/quickstart/index.vue'),
        meta: {
            title: '快速上手'
        }
    },
    {
        path: "log",
        name: "log",
        component: () => import('@/pages/log/index.vue'),
        meta: {
            title: '版本日志'
        }
    },
]
const usual = [
    {
        path: "rangeSlider",
        name: "rangeSlider",
        component: () => import('@/pages/rangeSlider/index.vue'),
        meta: {
            title: '滑块'
        }
    },
]
const funComs = [
    {
        path: "boxesBackground",
        name: "boxesBackground",
        component: () => import('@/pages/boxesBackground/index.vue'),
        meta: {
            title: '3D背景切割墙'
        }
    },
    {
        path: "blurryLoad",
        name: "blurryLoad",
        component: () => import('@/pages/blurryLoad/index.vue'),
        meta: {
            title: '模糊图片'
        }
    },
    {
        path: "flipCard",
        name: "flipCard",
        component: () => import('@/pages/flipCard/index.vue'),
        meta: {
            title: '翻转卡片'
        }
    },
    {
        path: "animateNavigation",
        name: "animateNavigation",
        component: () => import('@/pages/animateNavigation/index.vue'),
        meta: {
            title: '动效导航'
        }
    },
    {
        path: "clickAppear",
        name: "clickAppear",
        component: () => import('@/pages/clickAppear/index.vue'),
        meta: {
            title: '鼠标寻影'
        }
    },
]
const routes: any = [
    {
        path: "/",
        name: "home",
        component: () => import('@/pages/home/index.vue'),
        meta: {
            title: 'shaoyh-ui'
        }
    },
    {
        path: "/index",
        name: "index",
        redirect: "/index/introduction",
        component: () => import('@/layout/index.vue'),
        meta: {
            title: '开始'
        },
        children: [...developerGuide, ...usual, ...funComs]
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/pages/404/index.vue'),
        meta: {
            title: '搞啥?页面还没写好?'
        }
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
router.beforeEach((to, from, next)=>{
    // console.log(to)
    next()
})
export default router